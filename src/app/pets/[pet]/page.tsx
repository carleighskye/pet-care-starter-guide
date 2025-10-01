import { notFound } from "next/navigation";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CareTips from "@/components/CareTips";
import PetChecklist from "@/components/PetChecklist";
import ReptileCategories from "@/components/ReptileCategories";
import DogBreedQuiz from "@/components/DogBreedQuiz";
import CatBreedQuiz from "@/components/CatBreedQuiz";
import { PETS, PetId } from "@/lib/pets";

export default function PetPage({ params }: { params: { pet: string } }) {
  const id = params.pet as PetId;
  const pet = PETS[id];
  if (!pet) return notFound();

  return (
    <div className="min-h-screen">
      <div className="relative h-[280px] w-full">
        <Image
          src={pet.heroImage}
          alt={pet.label}
          fill
          className="object-cover"
          unoptimized
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20" />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full max-w-6xl px-4">
          <h1 className="text-3xl font-semibold">{pet.label} Care Guide</h1>
          <p className="text-muted-foreground max-w-3xl">{pet.tagline}</p>
        </div>
      </div>

      {id === "reptiles" ? (
        <ReptileCategories />
      ) : (
        <section className="mx-auto max-w-6xl px-4 py-8 space-y-6">
          <p className="text-sm text-muted-foreground max-w-3xl">{pet.intro}</p>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">{pet.sections.feeding.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  {pet.sections.feeding.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">{pet.sections.housing.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  {pet.sections.housing.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">{pet.sections.health.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  {pet.sections.health.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">{pet.sections.routine.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  {pet.sections.routine.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {id === "dogs" && <DogBreedQuiz />}
      {id === "cats" && <CatBreedQuiz />}

      <PetChecklist petId={id} />
      <CareTips />
    </div>
  );
}