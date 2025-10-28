import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 font-semibold">
      <Image
        src="/icon.png"
        alt="DyorAI Logo"
        width={32}
        height={32}
        className="rounded-full"
      />
      <span className="text-lg font-headline">DyorAI</span>
    </Link>
  );
}