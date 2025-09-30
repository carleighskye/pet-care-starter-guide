import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { pets } from '@/db/schema';
import { eq, and } from 'drizzle-orm';
import { getCurrentUser } from '@/lib/auth';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getCurrentUser(request);
    if (!user) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
    }

    const id = params.id;
    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json({ 
        error: "Valid ID is required",
        code: "INVALID_ID" 
      }, { status: 400 });
    }

    const pet = await db.select()
      .from(pets)
      .where(and(eq(pets.id, parseInt(id)), eq(pets.userId, user.id)))
      .limit(1);

    if (pet.length === 0) {
      return NextResponse.json({ error: 'Pet not found' }, { status: 404 });
    }

    return NextResponse.json(pet[0]);
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + error 
    }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getCurrentUser(request);
    if (!user) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
    }

    const id = params.id;
    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json({ 
        error: "Valid ID is required",
        code: "INVALID_ID" 
      }, { status: 400 });
    }

    const requestBody = await request.json();

    // Security check: reject if userId provided in body
    if ('userId' in requestBody || 'user_id' in requestBody) {
      return NextResponse.json({ 
        error: "User ID cannot be provided in request body",
        code: "USER_ID_NOT_ALLOWED" 
      }, { status: 400 });
    }

    // Check if pet exists and belongs to user
    const existingPet = await db.select()
      .from(pets)
      .where(and(eq(pets.id, parseInt(id)), eq(pets.userId, user.id)))
      .limit(1);

    if (existingPet.length === 0) {
      return NextResponse.json({ error: 'Pet not found' }, { status: 404 });
    }

    // Validation
    const updates: any = {};

    if ('name' in requestBody) {
      const name = requestBody.name?.trim();
      if (!name || name.length < 1) {
        return NextResponse.json({ 
          error: "Name is required and must be at least 1 character",
          code: "INVALID_NAME" 
        }, { status: 400 });
      }
      updates.name = name;
    }

    if ('species' in requestBody) {
      const species = requestBody.species?.trim();
      if (!species || species.length < 1) {
        return NextResponse.json({ 
          error: "Species is required and must be at least 1 character",
          code: "INVALID_SPECIES" 
        }, { status: 400 });
      }
      updates.species = species;
    }

    if ('breed' in requestBody) {
      updates.breed = requestBody.breed?.trim() || null;
    }

    if ('age' in requestBody) {
      if (requestBody.age !== null && requestBody.age !== undefined) {
        const age = parseInt(requestBody.age);
        if (isNaN(age) || age < 0) {
          return NextResponse.json({ 
            error: "Age must be a positive integer",
            code: "INVALID_AGE" 
          }, { status: 400 });
        }
        updates.age = age;
      } else {
        updates.age = null;
      }
    }

    if ('notes' in requestBody) {
      updates.notes = requestBody.notes?.trim() || null;
    }

    if ('imageUrl' in requestBody) {
      if (requestBody.imageUrl) {
        const imageUrl = requestBody.imageUrl.trim();
        try {
          new URL(imageUrl);
          updates.imageUrl = imageUrl;
        } catch {
          return NextResponse.json({ 
            error: "Invalid URL format for image URL",
            code: "INVALID_IMAGE_URL" 
          }, { status: 400 });
        }
      } else {
        updates.imageUrl = null;
      }
    }

    // Always update timestamp
    updates.updatedAt = new Date().toISOString();

    const updated = await db.update(pets)
      .set(updates)
      .where(and(eq(pets.id, parseInt(id)), eq(pets.userId, user.id)))
      .returning();

    if (updated.length === 0) {
      return NextResponse.json({ error: 'Pet not found' }, { status: 404 });
    }

    return NextResponse.json(updated[0]);
  } catch (error) {
    console.error('PUT error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + error 
    }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getCurrentUser(request);
    if (!user) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
    }

    const id = params.id;
    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json({ 
        error: "Valid ID is required",
        code: "INVALID_ID" 
      }, { status: 400 });
    }

    // Check if pet exists and belongs to user before deleting
    const existingPet = await db.select()
      .from(pets)
      .where(and(eq(pets.id, parseInt(id)), eq(pets.userId, user.id)))
      .limit(1);

    if (existingPet.length === 0) {
      return NextResponse.json({ error: 'Pet not found' }, { status: 404 });
    }

    const deleted = await db.delete(pets)
      .where(and(eq(pets.id, parseInt(id)), eq(pets.userId, user.id)))
      .returning();

    if (deleted.length === 0) {
      return NextResponse.json({ error: 'Pet not found' }, { status: 404 });
    }

    return NextResponse.json({ 
      message: 'Pet deleted successfully',
      pet: deleted[0]
    });
  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + error 
    }, { status: 500 });
  }
}