import HideAppBar from "@/components/navigation";

export default function Home(children: any) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HideAppBar>{children}</HideAppBar>
    </main>
  );
}
