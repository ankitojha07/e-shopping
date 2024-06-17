import Hero from "@/components/Hero";
import NewProducts from "@/components/NewProducts";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="overflow-hidden px-2 md:px-16">
      <Hero />
      <NewProducts />
      <Testimonials />
    </main>
  );
}
