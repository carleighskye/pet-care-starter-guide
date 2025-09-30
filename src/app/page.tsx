import Image from "next/image";
import Link from "next/link";
import PetCategoryGrid from "@/components/PetCategoryGrid";
import CareTips from "@/components/CareTips";
import OnboardingPrompt from "@/components/OnboardingPrompt";

export default function Home() {
  return (
    <main className="min-h-screen">
      <OnboardingPrompt />
      <section className="relative h-[420px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=2070&auto=format&fit=crop"
          alt="Pets collage"
          fill
          className="object-cover"
          unoptimized
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/85 to-background/20" />
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-6xl px-4">
          <h1 className="text-4xl font-semibold tracking-tight">Pet Care Starter</h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Learn the basics of caring for dogs, cats, birds, reptiles, and fish. Simple tips for brand new pet owners.
          </p>
          <div className="mt-4 flex gap-3">
            <Link href="#categories" className="inline-flex items-center rounded-md bg-foreground px-4 py-2 text-sm text-background">Browse Categories</Link>
            <Link href="/pets/dogs" className="inline-flex items-center rounded-md border px-4 py-2 text-sm">Start with Dogs</Link>
          </div>
        </div>
      </section>

      <section id="introduction" className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-xl font-semibold">Beginner-friendly introduction</h2>
        <p className="mt-2 text-sm text-muted-foreground max-w-3xl">
          This app is a quick-start guide for people new to pet care. It does not replace professional veterinary advice.
          Use it to understand daily needs, safe environments, and early signs that your pet may need medical attention.
        </p>
      </section>

      <section id="new-owners" className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-xl font-semibold">New Owners: Start here</h2>
          <Link href="#prospective-owners" className="text-sm underline underline-offset-4">Looking to adopt?</Link>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Link href="#categories" className="rounded-lg border p-4 transition hover:bg-accent">
            <div className="font-medium">Daily care basics</div>
            <p className="mt-1 text-sm text-muted-foreground">Feeding, water, enrichment, and routine.</p>
          </Link>
          <Link href="#categories" className="rounded-lg border p-4 transition hover:bg-accent">
            <div className="font-medium">Safe home setup</div>
            <p className="mt-1 text-sm text-muted-foreground">Space, temperature, and hazards to avoid.</p>
          </Link>
          <Link href="#categories" className="rounded-lg border p-4 transition hover:bg-accent">
            <div className="font-medium">Early health signs</div>
            <p className="mt-1 text-sm text-muted-foreground">When to call a vet and what to watch for.</p>
          </Link>
          <Link href="#categories" className="rounded-lg border p-4 transition hover:bg-accent">
            <div className="font-medium">Species-specific tips</div>
            <p className="mt-1 text-sm text-muted-foreground">Dogs, cats, birds, reptiles, and fish.</p>
          </Link>
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="#categories" className="inline-flex items-center rounded-md bg-foreground px-4 py-2 text-sm text-background">Find your pet category</Link>
          <Link href="#care-tips" className="inline-flex items-center rounded-md border px-4 py-2 text-sm">Read quick tips</Link>
        </div>
      </section>

      <section id="prospective-owners" className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-xl font-semibold">Thinking about adopting?</h2>
          <Link href="#new-owners" className="text-sm underline underline-offset-4">Already have a pet?</Link>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border p-4">
            <div className="font-medium">Match your lifestyle</div>
            <p className="mt-1 text-sm text-muted-foreground">Energy, space, noise, and family fit.</p>
          </div>
          <div className="rounded-lg border p-4">
            <div className="font-medium">Budget & time</div>
            <p className="mt-1 text-sm text-muted-foreground">Food, supplies, vet visits, grooming.</p>
          </div>
          <div className="rounded-lg border p-4">
            <div className="font-medium">Prep your home</div>
            <p className="mt-1 text-sm text-muted-foreground">Safe zones, essentials, and setup.</p>
          </div>
          <div className="rounded-lg border p-4">
            <div className="font-medium">Start with basics</div>
            <p className="mt-1 text-sm text-muted-foreground">Beginner-friendly species to research.</p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="#categories" className="inline-flex items-center rounded-md bg-foreground px-4 py-2 text-sm text-background">Explore pet categories</Link>
          <Link href="/pets/dogs" className="inline-flex items-center rounded-md border px-4 py-2 text-sm">See beginner dog tips</Link>
        </div>
      </section>

      <div id="categories">
        <PetCategoryGrid />
      </div>

      <div id="care-tips">
        <CareTips />
      </div>
    </main>
  );
}