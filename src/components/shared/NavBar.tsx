import Image from "next/image";
import Link from "next/link";
import logo from '@/assets/logo.png'

const Navbar = () => {
  return (
    <nav className="border-b border-[#202329] bg-[#0b0c0f]">
      <div className="mx-auto flex min-h-[62px] max-w-[1400px] items-center justify-between px-5 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo}
          alt="FITLOG IMAGE"
          ></Image>

          <span className="text-lg font-bold tracking-wide text-white">
            FITLOG
          </span>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/"
            className="rounded-full bg-[#182100] px-5 py-2 text-xs font-medium text-[#ccff00]"
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full px-5 py-2 text-xs font-medium text-gray-400 transition hover:text-white"
          >
            My Plan
          </Link>
        </div>

        {/* Right side counters */}
        <div className="flex items-center gap-4">

          {/* Plan */}
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-xs text-gray-400 transition hover:text-white"
          >
            <span>Plan</span>

          
          </Link>

          {/* Saved */}
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-xs text-gray-400 transition hover:text-white"
          >
            <span>Saved</span>

          
          </Link>

        </div>
      </div>

      {/* Mobile navigation */}
      <div className="flex justify-center gap-2 border-t border-[#202329] py-3 md:hidden">
        <Link
          href="/"
          className="rounded-full bg-[#182100] px-5 py-2 text-xs font-medium text-[#ccff00]"
        >
          Workouts
        </Link>

        <Link
          href="/my-plan"
          className="rounded-full px-5 py-2 text-xs font-medium text-gray-400"
        >
          My Plan
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;