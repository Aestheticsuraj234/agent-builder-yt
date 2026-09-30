import { requireAuth } from "@/modules/auth/actions";
import { UserButton } from "@/modules/auth/components/user-button";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default async function Home() {
  const session = await requireAuth();

  return (
    <div className="flex flex-col flex-1 items-center justify-center gap-4 bg-zinc-50 font-sans dark:bg-black">
      <UserButton user={session.user} />
      <ModeToggle />
    </div>
  );
}
