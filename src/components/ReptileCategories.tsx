import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  },
];

export default function ReptileCategories() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Reptile & Amphibian Categories</h2>
        <p className="text-sm text-muted-foreground max-w-3xl">
          Each reptile group has unique care requirements. Select your species to learn the basics
          of habitat setup, feeding, and health monitoring.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {reptileCategories.map((category) => (
          <Card key={category.id} className="hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="rounded-md bg-primary/10 p-2 text-primary">
                  {category.icon}
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </div>
              <p className="text-sm text-muted-foreground pt-2">{category.description}</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <h4 className="text-sm font-medium">Essential Care Tips:</h4>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  {category.carePoints.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-muted/30">
        <CardHeader>
          <CardTitle className="text-base">Species-Specific Research</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground space-y-2">
          <p>
            These are general guidelines. Always research your specific species' needs before bringing
            them home. Temperature ranges, humidity levels, diet, and enclosure size vary significantly
            between species.
          </p>
          <p>
            Find a reptile-experienced veterinarian in your area before you need one. Exotic pet vets
            specialize in reptile care and can provide species-specific guidance.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}