import Link from "next/link";

export default function Page() {
  return (
    <main>
      <Link href="/accueil"></Link>
      <Link href="/les-logements"></Link>
      <Link href="/infos-pratiques"></Link>
      <Link href="/autour-de-vous"></Link>
      <Link href="/contact"></Link>
    </main>
  );
}
