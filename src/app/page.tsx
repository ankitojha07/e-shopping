import Hero from "@/components/Hero";
import NewProducts from "@/components/NewProducts";

export default function Home() {
  return (
    <main className="overflow-hidden px-16">
      <Hero />
      <NewProducts />
    </main>
  );
}
