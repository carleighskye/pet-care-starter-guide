"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Turtle, Wind, Sparkles, Droplets } from "lucide-react";

const reptileCategories = [
  {
    id: "turtles",
    title: "Turtles & Tortoises",
    icon: <Turtle className="h-6 w-6" />,
    description: "Shelled reptiles requiring specific aquatic or terrestrial setups.",
    carePoints: [
      "Aquatic turtles need large tanks with basking areas and UVB lighting",
      "Tortoises require spacious enclosures with proper substrate and temperature gradients",
      "Diet varies by species: leafy greens, vegetables, some protein for aquatic species",
      "Regular shell inspection for cracks, discoloration, or soft spots",
    ],
    detailedInfo: {
      habitat: {
        title: "Habitat Setup",
        points: [
          "Aquatic turtles: Minimum 75-gallon tank for adults (10 gallons per inch of shell length)",
          "Tortoises: Outdoor enclosures recommended (minimum 8x4 ft for medium species)",
          "Water depth for aquatic species should be 1.5-2x shell length for swimming",
          "Basking area with UVB lamp (10-12% UVB) positioned 12-18 inches above",
          "Water temperature: 75-80°F; Basking spot: 85-95°F",
          "Substrate: Aquatic - bare bottom or large river rocks; Terrestrial - topsoil/coconut coir mix",
        ],
      },
      feeding: {
        title: "Feeding Guidelines",
        points: [
          "Aquatic turtles: Mix of protein (pellets, fish, insects) and vegetables (70% protein young, 50% adult)",
          "Tortoises: Primarily leafy greens (dandelion, collard, mustard) and hay - avoid fruit",
          "Feed aquatic turtles every other day (adults) or daily (juveniles)",
          "Calcium supplement 2-3x weekly; vitamin D3 supplement weekly",
          "Remove uneaten food after 15-20 minutes to maintain water quality",
        ],
      },
      health: {
        title: "Health Monitoring",
        points: [
          "Watch for shell pyramiding (improper diet/UVB), soft shell (calcium deficiency)",
          "Check eyes for swelling, discharge (vitamin A deficiency, infection)",
          "Monitor appetite changes, lethargy, or unusual swimming patterns",
          "Regular vet checkups annually; fecal parasite testing recommended",
          "Proper shedding - scutes should shed naturally, don't peel them off",
        ],
      },
      equipment: {
        title: "Essential Equipment",
        points: [
          "UVB bulb (replace every 6-12 months even if still producing light)",
          "Heat lamp with thermostat for temperature regulation",
          "Powerful filter rated 2-3x tank volume for aquatic species",
          "Water heater and thermometer for consistent temperatures",
          "Hygrometer for monitoring humidity (tortoises need 50-70% depending on species)",
        ],
      },
    },
  },
  {
    id: "snakes",
    title: "Snakes",
    icon: <Wind className="h-6 w-6" />,
    description: "Carnivorous reptiles with diverse habitat and feeding requirements.",
    carePoints: [
      "Secure enclosures with appropriate heating (heat mat or lamp) and hides",
      "Feed pre-killed prey sized appropriately for your snake species",
      "Maintain humidity levels specific to species (tropical vs. arid)",
      "Handle gently and watch for signs of respiratory infection or mites",
    ],
    detailedInfo: {
      habitat: {
        title: "Enclosure Requirements",
        points: [
          "Size: Length + width of enclosure should equal snake's length minimum",
          "Secure locking lid - snakes are escape artists",
          "Two hides minimum (warm side and cool side) for security",
          "Temperature gradient: Warm side 85-90°F, cool side 75-80°F (species dependent)",
          "Undertank heater or heat lamp with thermostat - never use heat rocks",
          "Substrate: Aspen shavings, cypress mulch, or newspaper (avoid cedar/pine)",
          "Water bowl large enough for soaking, changed daily",
        ],
      },
      feeding: {
        title: "Feeding Protocol",
        points: [
          "Feed pre-killed frozen-thawed prey to prevent injury to snake",
          "Prey size: Width should match widest part of snake's body",
          "Juveniles: Feed every 5-7 days; Adults: Every 7-14 days",
          "Common prey: Mice, rats (size-appropriate), chicks for some species",
          "Don't handle for 48 hours after feeding to prevent regurgitation",
          "Offer food in separate container to avoid substrate ingestion",
        ],
      },
      health: {
        title: "Health & Behavior",
        points: [
          "Respiratory infection signs: Wheezing, mucus bubbles, gaping mouth",
          "Check for mites (tiny black dots on snake or in water bowl)",
          "Proper shedding: Should come off in one piece; humidity issues if patchy",
          "Provide humid hide during shedding cycle",
          "Loss of appetite during breeding season or pre-shed is normal",
          "Watch for scale rot (brown/red discoloration from excess moisture)",
          "Annual vet exam with fecal test recommended",
        ],
      },
      handling: {
        title: "Safe Handling",
        points: [
          "Support body every 2-3 feet; never grab by tail or head",
          "Let snake explore and move through your hands",
          "Limit handling to 10-15 minutes, 2-3x per week maximum",
          "Never handle if snake is in shed or recently fed",
          "Wash hands before/after to avoid transmitting bacteria",
          "Use snake hook for defensive species",
        ],
      },
    },
  },
  {
    id: "lizards",
    title: "Lizards",
    icon: <Sparkles className="h-6 w-6" />,
    description: "Diverse group including geckos, iguanas, bearded dragons, and more.",
    carePoints: [
      "Most require UVB lighting and temperature gradients for thermoregulation",
      "Diet ranges from insects (geckos) to vegetables (iguanas) to omnivorous (bearded dragons)",
      "Provide climbing structures, hides, and appropriate substrate",
      "Monitor for metabolic bone disease, impaction, and shedding issues",
    ],
    detailedInfo: {
      habitat: {
        title: "Terrarium Setup",
        points: [
          "Size varies greatly: Small geckos (20-gal), Bearded dragons (40-gal+), Iguanas (custom 6x6x8 ft)",
          "Vertical space for arboreal species (crested geckos, chameleons)",
          "UVB lighting essential for most species: 10-12% UVB, 12-14 hours daily",
          "Temperature gradient: Basking spot 95-110°F, cool side 75-85°F (species-specific)",
          "Branches, rocks, and hides for enrichment and security",
          "Substrate: Tile, reptile carpet, or paper (avoid loose substrates for risk of impaction)",
          "Misting system or manual misting for tropical species",
        ],
      },
      feeding: {
        title: "Dietary Needs",
        points: [
          "Insectivores (leopard geckos): Crickets, dubia roaches, mealworms gut-loaded",
          "Omnivores (bearded dragons): 80% insects (young), 80% greens (adult)",
          "Herbivores (iguanas): Dark leafy greens, squash, limited fruit",
          "Dust insects with calcium powder (no D3) daily, multivitamin 2x weekly",
          "If no UVB exposure, use calcium with D3 supplement",
          "Feed variety to ensure balanced nutrition",
          "Juveniles eat daily; adults every 1-2 days depending on species",
        ],
      },
      health: {
        title: "Common Health Issues",
        points: [
          "Metabolic Bone Disease: Soft jaw, lethargy, tremors - caused by calcium/UVB deficiency",
          "Impaction: Swollen belly, lethargy from ingesting substrate or oversized prey",
          "Shedding problems: Retained shed on toes/tail can cut circulation - soak and assist removal",
          "Mouth rot: Swollen gums, pus, loss of appetite from bacterial infection",
          "Parasites: Weight loss despite eating, abnormal feces",
          "Respiratory infections: Gaping, wheezing, lethargy",
          "Annual vet exams essential for early detection",
        ],
      },
      behavior: {
        title: "Behavior & Enrichment",
        points: [
          "Daily temperature check with digital thermometer/temp gun",
          "Observe basking behavior - if constantly basking, increase heat slightly",
          "Provide foraging opportunities - scatter feed or use feeding puzzles",
          "Regular handling for tame species builds trust (start young)",
          "Watch for stress signs: Dark coloration, hiding constantly, aggression",
          "Brumation (hibernation-like state) is normal for some species in winter",
        ],
      },
    },
  },
  {
    id: "frogs",
    title: "Frogs & Amphibians",
    icon: <Droplets className="h-6 w-6" />,
    description: "Moisture-dependent creatures needing humidity and clean water.",
    carePoints: [
      "Maintain high humidity (60-80%) with regular misting and water features",
      "Use dechlorinated water; amphibian skin is highly permeable",
      "Feed live insects dusted with calcium/vitamins; size appropriate to species",
      "Avoid handling when possible; oils and chemicals on hands can harm them",
    ],
    detailedInfo: {
      habitat: {
        title: "Vivarium Setup",
        points: [
          "Tank size: Minimum 10-gallon for small species, 20+ gallon for larger frogs",
          "Paludarium setup for semi-aquatic species (50% water, 50% land)",
          "Live plants help maintain humidity and provide hiding spots",
          "Substrate: Coconut fiber, sphagnum moss, or ABG mix for bioactive setups",
          "Water feature or large shallow dish changed daily",
          "No direct UVB needed for most species, but ambient room light on 12-hour cycle",
          "Temperature: 65-75°F for temperate species, 75-85°F for tropical",
        ],
      },
      humidity: {
        title: "Humidity & Water Quality",
        points: [
          "Maintain 60-80% humidity (species-dependent) using misting and water features",
          "Use hygrometer to monitor levels continuously",
          "Mist 2-3 times daily or install automatic misting system",
          "Always use dechlorinated or spring water - never tap water directly",
          "Chlorine, chloramine, and heavy metals are toxic to amphibians",
          "Change water daily; partial enclosure cleaning weekly",
          "Full deep clean monthly with reptile-safe disinfectant",
        ],
      },
      feeding: {
        title: "Diet & Supplementation",
        points: [
          "Feed live prey: Crickets, fruit flies (small species), dubia roaches, waxworms (treat)",
          "Prey size: Should fit comfortably in mouth (smaller than distance between eyes)",
          "Dust insects with calcium powder at every feeding",
          "Multivitamin with vitamin A supplement 1-2x weekly",
          "Feed juveniles daily; adults every 2-3 days",
          "Remove uneaten insects after 30 minutes",
          "Some aquatic species eat bloodworms, brine shrimp",
        ],
      },
      health: {
        title: "Health & Handling",
        points: [
          "Minimize handling - skin absorbs chemicals, oils, soaps from human hands",
          "If handling necessary, wet hands first with dechlorinated water",
          "Watch for red leg disease (bacterial infection causing redness on underside)",
          "Bloating can indicate organ failure or parasites - vet immediately",
          "Cloudy eyes or skin abnormalities may indicate fungal infection",
          "Lethargy and loss of appetite are early warning signs",
          "Annual vet checkup with exotic/amphibian specialist recommended",
          "Quarantine new amphibians for 30 days to prevent disease spread",
        ],
      },
    },
  },
];

export default function ReptileCategories() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Reptile & Amphibian Categories</h2>
        <p className="text-sm text-muted-foreground max-w-3xl">
          Click on each category to expand and learn comprehensive care requirements for your species.
        </p>
      </div>

      <Accordion type="single" collapsible className="space-y-4">
        {reptileCategories.map((category) => (
          <AccordionItem key={category.id} value={category.id} className="border rounded-lg">
            <Card className="border-0">
              <AccordionTrigger className="hover:no-underline px-6 py-4">
                <div className="flex items-center gap-3 text-left">
                  <div className="rounded-md bg-primary/10 p-2 text-primary shrink-0">
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <p className="text-sm text-muted-foreground font-normal pt-1">
                      {category.description}
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <CardContent className="space-y-6 pt-2">
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold">Quick Care Overview:</h4>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                      {category.carePoints.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-6 space-y-6">
                    {Object.entries(category.detailedInfo).map(([key, section]) => (
                      <div key={key} className="space-y-3">
                        <h4 className="text-base font-semibold flex items-center gap-2">
                          {section.title}
                        </h4>
                        <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                          {section.points.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </AccordionContent>
            </Card>
          </AccordionItem>
        ))}
      </Accordion>

      <Card className="bg-muted/30">
        <CardHeader>
          <CardTitle className="text-base">Species-Specific Research</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground space-y-2">
          <p>
            These are general guidelines covering common species in each category. Always research your
            specific species' needs before bringing them home. Temperature ranges, humidity levels, diet,
            and enclosure size vary significantly between species.
          </p>
          <p>
            Find a reptile-experienced veterinarian in your area before you need one. Exotic pet vets
            specialize in reptile and amphibian care and can provide species-specific guidance.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}