"use client";

import { useEffect, useState, useCallback } from "react";

export type OnboardingChoice = "has_pet" | "adopting";

export const OnboardingPrompt = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Only show once per device unless user clears storage
    const choice = localStorage.getItem("petOnboardingChoice");
    if (!choice) setOpen(true);
  }, []);

  const handleChoose = useCallback((choice: OnboardingChoice) => {
    try {
      localStorage.setItem("petOnboardingChoice", choice);
    } catch {}
    setOpen(false);

    const targetId = choice === "has_pet" ? "new-owners" : "prospective-owners";
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />

      {/* Dialog */}
      <div className="relative z-10 w-[92vw] max-w-md rounded-lg border bg-card p-5 shadow-xl">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Welcome! How can we guide you?</h3>
          <p className="text-sm text-muted-foreground">
            Choose the option that fits you best so we can point you to the right starting place.
          </p>
        </div>

        <div className="mt-4 grid gap-3">
          <button
            onClick={() => handleChoose("has_pet")}
            className="inline-flex items-center justify-between rounded-md border px-4 py-3 text-left transition hover:bg-accent"
          >
            <div>
              <div className="font-medium">I already have a pet</div>
              <div className="text-xs text-muted-foreground">Get daily care basics, routines, and health signs</div>
            </div>
            <span className="ml-3 text-sm">→</span>
          </button>

          <button
            onClick={() => handleChoose("adopting")}
            className="inline-flex items-center justify-between rounded-md border px-4 py-3 text-left transition hover:bg-accent"
          >
            <div>
              <div className="font-medium">I'm looking to adopt</div>
              <div className="text-xs text-muted-foreground">Learn how to choose the right pet and prepare your home</div>
            </div>
            <span className="ml-3 text-sm">→</span>
          </button>
        </div>

        <button
          className="mt-4 w-full rounded-md bg-foreground px-4 py-2 text-sm text-background"
          onClick={() => setOpen(false)}
        >
          Skip for now
        </button>
      </div>
    </div>
  );
};

export default OnboardingPrompt;