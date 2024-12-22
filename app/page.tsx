

import { getCatFact } from "@/src/api/api";

export default async function Home() {
  const catFact = await getCatFact();

  return (
    <main className="">
      <p>{catFact.fact}</p>
    </main>
  );
}
