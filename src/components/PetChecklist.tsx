"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useMemo, useState } from "react";

type Item = { id: string; label: string };

const defaultItems: Record<string, Item[]> = {
  daily: [
    { id: "water", label: "Refresh water" },
    { id: "feed", label: "Feed as required" },
    { id: "clean", label: "Spot-clean area/enclosure" },
    { id: "observe", label: "Observe behavior/health" },
  ],
  weekly: [
    { id: "deep-clean", label: "Deeper clean / litter change / water change" },
    { id: "enrichment", label: "Rotate toys/enrichment" },
    { id: "groom", label: "Basic grooming / nail check if applicable" },
  ],
  monthly: [
    { id: "weigh", label: "Weigh and record" },
    { id: "supplies", label: "Restock food and supplies" },
    { id: "review", label: "Review routine and adjust" },
  ],
};

function useChecklist(storageKey: string) {
  const [state, setState] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const raw = localStorage.getItem(storageKey);
    if (raw) setState(JSON.parse(raw));
  }, [storageKey]);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(state));
  }, [state, storageKey]);

  function toggle(id: string) {
    setState((s) => ({ ...s, [id]: !s[id] }));
  }

  function reset(prefix: string) {
    setState((s) => {
      const next = { ...s } as Record<string, boolean>;
      Object.keys(next)
        .filter((k) => k.startsWith(prefix + ":"))
        .forEach((k) => delete next[k]);
      return next;
    });
  }

  return { state, toggle, reset };
}

export default function PetChecklist({ petId }: { petId: string }) {
  const key = `checklist:${petId}`;
  const { state, toggle, reset } = useChecklist(key);

  const tabs = useMemo(
    () => [
      { id: "daily", label: "Daily", items: defaultItems.daily },
      { id: "weekly", label: "Weekly", items: defaultItems.weekly },
      { id: "monthly", label: "Monthly", items: defaultItems.monthly },
    ],
    []
  );

  return (
    <section className="mx-auto max-w-6xl px-4 pb-12">
      <Card>
        <CardHeader>
          <CardTitle>Care Checklist</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="daily" className="w-full">
            <TabsList>
              {tabs.map((t) => (
                <TabsTrigger key={t.id} value={t.id}>
                  {t.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {tabs.map((t) => (
              <TabsContent key={t.id} value={t.id} className="space-y-3">
                <div className="flex justify-end">
                  <button
                    onClick={() => reset(t.id)}
                    className="text-xs text-muted-foreground underline"
                  >
                    Reset {t.label}
                  </button>
                </div>
                <ul className="space-y-3">
                  {t.items.map((item) => {
                    const id = `${t.id}:${item.id}`;
                    return (
                      <li key={item.id} className="flex items-center gap-3">
                        <Checkbox
                          id={id}
                          checked={!!state[id]}
                          onCheckedChange={() => toggle(id)}
                        />
                        <label htmlFor={id} className="text-sm">
                          {item.label}
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </section>
  );
}