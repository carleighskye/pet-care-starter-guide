"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PET_ORDER, PETS } from "@/lib/pets";

export default function PetCategoryGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-xl font-semibold mb-4">Choose a pet category</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PET_ORDER.map((id) => {
          const p = PETS[id];
          return (
            <Link key={id} href={`/pets/${id}`}>
              <Card className="group overflow-hidden h-full">
                <div className="relative h-40 w-full">
                  <Image
                    src={p.heroImage}
                    alt={p.label}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    unoptimized
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-base">{p.label}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  {p.tagline}
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
}