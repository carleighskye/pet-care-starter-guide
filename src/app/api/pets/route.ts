import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { pets } from '@/db/schema';
import { eq, like, and, or, desc } from 'drizzle-orm';
import { getCurrentUser } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const user = await getCurrentUser(request);
    if (!user) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const limit = Math.min(parseInt(searchParams.get('limit') || '10'), 100);
    const offset = parseInt(searchParams.get('offset') || '0');
    const search = searchParams.get('search');

    let query = db.select().from(pets).where(eq(pets.userId, user.id));

    if (search) {
      const searchTerm = search.trim();
      const searchCondition = or(
        like(pets.name, `%${searchTerm}%`),
        like(pets.species, `%${searchTerm}%`)
      );
      query = query.where(and(eq(pets.userId, user.id), searchCondition));
    }

    const results = await query
      .orderBy(desc(pets.createdAt))
      .limit(limit)
      .offset(offset);

    return NextResponse.json(results);
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + error 
    }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser(request);
    if (!user) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
    }

    const requestBody = await request.json();

    // Security check: reject if userId provided in body
    if ('userId' in requestBody || 'user_id' in requestBody) {
      return NextResponse.json({ 
        error: "User ID cannot be provided in request body",
        code: "USER_ID_NOT_ALLOWED" 
      }, { status: 400 });
    }

    const { name, species, breed, age, notes, imageUrl } = requestBody;

    // Validate required fields
    if (!name || !name.trim()) {
      return NextResponse.json({ 
        error: "Name is required",
        code: "MISSING_NAME" 
      }, { status: 400 });
    }

    if (!species || !species.trim()) {
      return NextResponse.json({ 
        error: "Species is required",
        code: "MISSING_SPECIES" 
      }, { status: 400 });
    }

    // Validate age if provided
    if (age !== undefined && age !== null) {
      if (isNaN(parseInt(age)) || parseInt(age) < 0) {
        return NextResponse.json({ 
          error: "Age must be a positive integer",
          code: "INVALID_AGE" 
        }, { status: 400 });
      }
    }

    // Basic URL validation if imageUrl provided
    if (imageUrl && imageUrl.trim()) {
      try {
        new URL(imageUrl.trim());
      } catch {
        return NextResponse.json({ 
          error: "Invalid URL format for image",
          code: "INVALID_IMAGE_URL" 
        }, { status: 400 });
      }
    }

    // Prepare insert data with sanitization
    const insertData = {
      userId: user.id,
      name: name.trim(),
      species: species.trim(),
      breed: breed?.trim() || null,
      age: age ? parseInt(age) : null,
      notes: notes?.trim() || null,
      imageUrl: imageUrl?.trim() || null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    const newPet = await db.insert(pets)
      .values(insertData)
      .returning();

    return NextResponse.json(newPet[0], { status: 201 });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + error 
    }, { status: 500 });
  }
}