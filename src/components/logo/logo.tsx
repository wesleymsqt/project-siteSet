import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href="/"
      title="Affiliate Hub - página inicial"
      className="inline-flex items-center gap-2 text-lg font-semibold text-white"
    >
      <Image
        src="/affiliate-hub-mark.svg"
        alt=""
        width={32}
        height={33}
        className="h-auto w-8"
      />
      <span>Affiliate Hub</span>
    </Link>
  );
};
