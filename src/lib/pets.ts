export type PetId = "dogs" | "cats" | "birds" | "reptiles" | "fish" | "rodents";

export type CareSection = {
  title: string;
  points: string[];
};

export type PetInfo = {
  id: PetId;
  label: string;
  tagline: string;
  heroImage: string;
  intro: string;
  sections: {
    feeding: CareSection;
    housing: CareSection;
    health: CareSection;
    routine: CareSection;
  };
};

export const PETS: Record<PetId, PetInfo> = {
  dogs: {
    id: "dogs",
    label: "Dogs",
    tagline: "Loyal companions that thrive on routine, exercise, and training.",
    heroImage:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2070&auto=format&fit=crop",
    intro:
      "Dogs are social animals that need daily interaction, mental stimulation, and consistent training. Start with the basics and build a routine that fits your life.",
    sections: {
      feeding: {
        title: "Feeding",
        points: [
          "Choose a complete-and-balanced dog food for your dog's life stage (puppy, adult, senior).",
          "Feed 2–3 times daily for puppies; 1–2 times for adults.",
          "Provide fresh water at all times and avoid toxic foods (chocolate, grapes, xylitol).",
        ],
      },
      housing: {
        title: "Housing & Environment",
        points: [
          "Provide a safe, draft-free sleeping area with a crate or bed.",
          "Daily walks and play; secure yard or leash outdoors.",
          "Dog-proof your home: secure trash, meds, and electrical cords.",
        ],
      },
      health: {
        title: "Health Signs",
        points: [
          "Watch for vomiting, diarrhea, lethargy, loss of appetite, or difficulty breathing.",
          "Keep vaccines, parasite prevention, and annual checkups up to date.",
          "Dental care matters: brush teeth or provide dental chews.",
        ],
      },
      routine: {
        title: "Daily Routine",
        points: [
          "Potty breaks 3–5x/day, regular feeding times, and training sessions.",
          "Exercise: 30–90 minutes depending on breed and age.",
          "Enrichment: puzzle feeders, scent games, or basic obedience practice.",
        ],
      },
    },
  },
  cats: {
    id: "cats",
    label: "Cats",
    tagline: "Independent yet affectionate—cats need enrichment and proper litter care.",
    heroImage:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=2069&auto=format&fit=crop",
    intro:
      "Cats are curious and clean animals. Provide vertical space, scratching options, and a consistent feeding routine.",
    sections: {
      feeding: {
        title: "Feeding",
        points: [
          "Choose a complete cat food; wet food helps hydration.",
          "Kittens need more frequent meals (3–4x/day). Adults 2x/day or measured free-feed.",
          "Fresh water daily; avoid onion/garlic, chocolate, alcohol, and lilies (toxic).",
        ],
      },
      housing: {
        title: "Housing & Environment",
        points: [
          "Provide at least one litter box per cat plus one extra; scoop daily.",
          "Offer scratching posts, perches, and hideaways.",
          "Keep windows secure; consider window perches and interactive toys.",
        ],
      },
      health: {
        title: "Health Signs",
        points: [
          "Look for changes in appetite, litter habits, hiding, or breathing.",
          "Annual exams; indoor-only cats still need vaccines and parasite checks.",
          "Hairball increase or weight changes warrant a vet consult.",
        ],
      },
      routine: {
        title: "Daily Routine",
        points: [
          "Play sessions (10–15 min) 1–3x/day and regular feeding schedule.",
          "Clean water and quick litter scoop; full change weekly.",
          "Rotate toys to prevent boredom.",
        ],
      },
    },
  },
  birds: {
    id: "birds",
    label: "Birds",
    tagline: "Intelligent and social—birds need space, enrichment, and safe diets.",
    heroImage:
      "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?q=80&w=2070&auto=format&fit=crop",
    intro:
      "Provide a spacious cage with horizontal bars for climbing, varied perches, and daily interaction.",
    sections: {
      feeding: {
        title: "Feeding",
        points: [
          "Base diet of high-quality pellets; seeds as treats only.",
          "Offer safe fruits/veggies (avoid avocado, chocolate, caffeine).",
          "Fresh water daily; wash bowls to prevent bacteria.",
        ],
      },
      housing: {
        title: "Housing & Environment",
        points: [
          "Cage size matters: wider is better; provide toys and foraging.",
          "Avoid drafts and kitchen fumes; ensure 10–12 hours of dark sleep.",
          "Supervised out-of-cage time in a bird-proofed room.",
        ],
      },
      health: {
        title: "Health Signs",
        points: [
          "Watch for fluffed feathers, tail-bobbing, discharge, or changes in droppings.",
          "Beak/feather overgrowth or plucking can indicate issues.",
          "Find an avian vet for regular wellness checks.",
        ],
      },
      routine: {
        title: "Daily Routine",
        points: [
          "Refresh food/water, spot-clean cage, and interactive time.",
          "Rotate toys weekly; provide bathing opportunities (mist or shallow dish).",
          "Quiet sleep schedule in a dim room or cover cage at night.",
        ],
      },
    },
  },
  reptiles: {
    id: "reptiles",
    label: "Reptiles",
    tagline: "Species-specific heating, lighting, and humidity are essential.",
    heroImage:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/58d1338c-357e-4bf6-a03e-1951e2193659/generated_images/close-up-photograph-of-a-green-iguana-li-e22c219b-20251001185916.jpg?",
    intro:
      "Reptiles require precise habitat conditions (temperature gradients, UVB lighting, humidity). Research your species' needs.",
    sections: {
      feeding: {
        title: "Feeding",
        points: [
          "Diet varies widely: insects, rodents, or greens depending on species.",
          "Dust insects with calcium/vitamins as appropriate.",
          "Never feed wild-caught insects; ensure clean water access.",
        ],
      },
      housing: {
        title: "Housing & Environment",
        points: [
          "Provide UVB lighting and a basking spot with a thermal gradient.",
          "Measure humidity/temperature with reliable gauges.",
          "Use species-appropriate substrate and hides.",
        ],
      },
      health: {
        title: "Health Signs",
        points: [
          "Signs of trouble: lack of appetite, swelling, retained shed, lethargy.",
          "Metabolic bone disease risk without proper UVB/calcium.",
          "Find a reptile-savvy veterinarian for guidance.",
        ],
      },
      routine: {
        title: "Daily Routine",
        points: [
          "Check temps/humidity; spot-clean enclosure.",
          "Offer food as species requires; monitor shedding cycles.",
          "Change water and inspect equipment (lamps, timers).",
        ],
      },
    },
  },
  fish: {
    id: "fish",
    label: "Fish",
    tagline: "Stable water parameters and proper cycling are key for aquatic life.",
    heroImage:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/58d1338c-357e-4bf6-a03e-1951e2193659/generated_images/vibrant-tropical-fish-swimming-in-clear--4ec26950-20251001185926.jpg?",
    intro:
      "Start with a properly cycled tank, adequate filtration, and species-compatible stocking.",
    sections: {
      feeding: {
        title: "Feeding",
        points: [
          "Small amounts 1–2x/day; remove uneaten food to prevent ammonia spikes.",
          "Use species-appropriate flakes, pellets, or frozen foods.",
          "Fast 1 day/week for some species to reduce bloat risk.",
        ],
      },
      housing: {
        title: "Housing & Environment",
        points: [
          "Cycle the tank before adding fish; test ammonia, nitrite, nitrate.",
          "Heater and filter sized for tank; avoid sudden parameter changes.",
          "Research compatible tank mates and required tank size.",
        ],
      },
      health: {
        title: "Health Signs",
        points: [
          "Clamped fins, gasping, spots, or erratic swimming indicate stress or disease.",
          "Quarantine new fish; maintain water quality with regular changes.",
          "Know early signs of ich, fin rot, and swim bladder issues.",
        ],
      },
      routine: {
        title: "Daily Routine",
        points: [
          "Feed, observe behavior, and check equipment.",
          "Weekly 20–30% water changes; gravel vacuum as needed.",
          "Wipe algae on glass and prune plants regularly.",
        ],
      },
    },
  },
  rodents: {
    id: "rodents",
    label: "Rodents",
    tagline: "Small companions with big personalities—proper housing and diet are essential.",
    heroImage:
      "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?q=80&w=2076&auto=format&fit=crop",
    intro:
      "Small rodents like hamsters, guinea pigs, rats, and mice make wonderful pets but have unique care needs. Each species requires specific housing, diet, and socialization approaches.",
    sections: {
      feeding: {
        title: "Feeding",
        points: [
          "Provide species-specific pellets as the base diet; avoid seed-only mixes.",
          "Supplement with fresh vegetables daily (avoid onion, garlic, raw potato).",
          "Fresh water in a bottle or bowl; clean and refill daily.",
        ],
      },
      housing: {
        title: "Housing & Environment",
        points: [
          "Cage size varies by species: larger is better with proper ventilation.",
          "Use safe bedding (paper, aspen); avoid cedar/pine shavings.",
          "Provide hideaways, tunnels, wheels (appropriate size), and enrichment toys.",
        ],
      },
      health: {
        title: "Health Signs",
        points: [
          "Watch for sneezing, discharge, lumps, weight loss, or lethargy.",
          "Dental issues common: provide chew items to wear down teeth.",
          "Find an exotic vet familiar with small mammals for wellness checks.",
        ],
      },
      routine: {
        title: "Daily Routine",
        points: [
          "Spot-clean bedding daily; full cage change weekly.",
          "Handle gently and regularly to maintain socialization (species-dependent).",
          "Provide fresh food/water, monitor behavior, and rotate enrichment items.",
        ],
      },
    },
  },
};

export const PET_ORDER: PetId[] = ["dogs", "cats", "birds", "reptiles", "fish", "rodents"];