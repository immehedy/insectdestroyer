import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="flex justify-center mb-6">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Insectc Destroyer Logo"
          width={300}
          height={100}
        />
      </Link>
    </div>
  );
}
