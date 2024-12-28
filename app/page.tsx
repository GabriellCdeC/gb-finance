import ApiKeyForm from "@/src/components/apiKey-form";

export default async function Home() {
  return (
    <main className="size-full flex items-center justify-center min-h-screen">
      <ApiKeyForm />
    </main>
  );
}
