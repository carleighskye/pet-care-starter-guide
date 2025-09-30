"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { TriangleAlert, HeartPulse, Leaf, Stethoscope } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function CareTips() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 space-y-6">
      <h2 className="text-xl font-semibold">Care Tips for Beginners</h2>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="basic-needs">
          <AccordionTrigger className="text-left">
            <span className="inline-flex items-center gap-2 text-base"><Leaf className="h-4 w-4" /> Basic Needs</span>
          </AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardContent className="pt-4 text-sm space-y-2">
                <p>Clean water, species-appropriate diet, and safe housing are non-negotiable.</p>
                <p>Provide enrichment daily: toys, puzzles, training, or foraging depending on the pet.</p>
                <p>Introduce changes gradually and observe behavior to reduce stress.</p>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="emergency-signs">
          <AccordionTrigger className="text-left">
            <span className="inline-flex items-center gap-2 text-base"><TriangleAlert className="h-4 w-4" /> Emergency Signs</span>
          </AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardContent className="pt-4 text-sm space-y-2">
                <p>Sudden lethargy, trouble breathing, persistent vomiting/diarrhea, or severe injury = urgent vet visit.</p>
                <p>For fish: gasping at the surface or red/inflamed gills may indicate poor water quality.</p>
                <p>When in doubt, call a veterinarian—waiting can worsen outcomes.</p>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="preventive-care">
          <AccordionTrigger className="text-left">
            <span className="inline-flex items-center gap-2 text-base"><HeartPulse className="h-4 w-4" /> Preventive Care</span>
          </AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardContent className="pt-4 text-sm space-y-2">
                <p>Schedule wellness exams, vaccinations, and parasite prevention as appropriate.</p>
                <p>Keep records of feeding, weight, and notable behaviors to spot trends early.</p>
                <p>Pet-proof your home and secure hazardous items.</p>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Alert>
        <Stethoscope className="h-4 w-4" />
        <AlertTitle>Veterinary Disclaimer</AlertTitle>
        <AlertDescription>
          This app provides general guidance for new pet owners and does not replace professional veterinary care. If you notice concerning signs, contact a licensed veterinarian immediately.
        </AlertDescription>
      </Alert>
    </section>
  );
}