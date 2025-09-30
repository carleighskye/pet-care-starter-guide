"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Bone, Cat, Bird, Turtle, Fish, Home, Search, User, LogOut } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PET_ORDER, PETS, PetId } from "@/lib/pets";
import { useMemo, useState } from "react";
import { authClient, useSession } from "@/lib/auth-client";
import { toast } from "sonner";

const iconMap: Record<PetId, JSX.Element> = {
  dogs: <Bone className="h-4 w-4" />,
  cats: <Cat className="h-4 w-4" />,
  birds: <Bird className="h-4 w-4" />,
  reptiles: <Turtle className="h-4 w-4" />,
  fish: <Fish className="h-4 w-4" />,
};

export default function PetNav() {
  const pathname = usePathname();
  const router = useRouter();
  const [q, setQ] = useState("");
  const { data: session, isPending, refetch } = useSession();

  const suggestions = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return PET_ORDER;
    return PET_ORDER.filter((id) =>
      [PETS[id].label, id].some((t) => t.toLowerCase().includes(query))
    );
  }, [q]);

  function go(path: string) {
    router.push(path);
  }

  const handleSignOut = async () => {
    const { error } = await authClient.signOut();
    if (error?.code) {
      toast.error(error.code);
    } else {
      localStorage.removeItem("bearer_token");
      refetch();
      toast.success("Signed out successfully");
      router.push("/");
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-2">
        <Link href="/" className="inline-flex items-center gap-2 font-semibold">
          <Home className="h-5 w-5" />
          <span>Pet Care Starter</span>
        </Link>
        <nav className="ml-auto flex items-center gap-1">
          {PET_ORDER.map((id) => (
            <Link
              key={id}
              href={`/pets/${id}`}
              className={cn(
                "inline-flex items-center gap-1 rounded-md px-2 py-1 text-sm hover:bg-accent",
                pathname?.startsWith(`/pets/${id}`) && "bg-accent"
              )}
            >
              {iconMap[id]}
              <span className="hidden sm:inline">{PETS[id].label}</span>
            </Link>
          ))}
          
          {/* Auth UI */}
          {!isPending && session?.user ? (
            <>
              <Link
                href="/my-pets"
                className={cn(
                  "inline-flex items-center gap-1 rounded-md px-2 py-1 text-sm hover:bg-accent",
                  pathname === "/my-pets" && "bg-accent"
                )}
              >
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">My Pets</span>
              </Link>
              <div className="hidden md:flex items-center gap-2 ml-2 pl-2 border-l">
                <span className="text-sm text-muted-foreground">{session.user.name}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleSignOut}
                  className="h-8"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="ml-1">Sign out</span>
                </Button>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleSignOut}
                className="md:hidden h-8"
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </>
          ) : !isPending ? (
            <div className="flex items-center gap-1 ml-2 pl-2 border-l">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => router.push("/login")}
                className="h-8"
              >
                Sign in
              </Button>
              <Button
                size="sm"
                onClick={() => router.push("/register")}
                className="h-8"
              >
                Sign up
              </Button>
            </div>
          ) : null}
        </nav>
      </div>
      <div className="mx-auto max-w-6xl px-4 pb-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const first = suggestions[0];
                if (first) go(`/pets/${first}`);
              }
            }}
            placeholder="Search pets (dogs, cats, birds, reptiles, fish)"
            className="pl-9"
          />
          {!!q && (
            <div className="absolute mt-1 w-full rounded-md border bg-popover p-1 shadow">
              {suggestions.length ? (
                suggestions.map((id) => (
                  <button
                    key={id}
                    onClick={() => go(`/pets/${id}`)}
                    className="w-full text-left rounded px-2 py-1 text-sm hover:bg-accent"
                  >
                    {PETS[id].label}
                  </button>
                ))
              ) : (
                <div className="px-2 py-1 text-sm text-muted-foreground">No results</div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}