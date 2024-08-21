import Image from "next/image";
import Kinde from "@/public/logos/kinde.svg";
import Nextjs from "@/public/logos/nextjs.svg";
import Prisma from "@/public/logos/prisma.svg";
import Stripe from "@/public/logos/stripe.svg";
import Vercel from "@/public/logos/vercel.svg";
import Supabase from "@/public/logos/supabase.svg";
import Tailwindcss from "@/public/logos/tailwindcss.svg";
import Uploadthing from "@/public/logos/uploadthing.svg";

export function Logos() {
  return (
    <div className="py-10">
      <h2 className="text-center text-lg font-semibold leading-7">
        Trusted by the best companies in the world
      </h2>
      <div className="mt-10 grid max-w-lg mx-auto grid-cols-4 items-center justify-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        <Image
          src={Kinde}
          alt="Logo"
          className="col-span-2 max-h-10 w-full object-contain lg:col-span-1 dark:invert"
        />
        <Image
          src={Nextjs}
          alt="Logo"
          className="col-span-2 max-h-10 w-full object-contain lg:col-span-1 dark:invert"
        />
        <Image
          src={Prisma}
          alt="Logo"
          className="col-span-2 max-h-10 w-full object-contain lg:col-span-1 dark:invert"
        />
        <Image
          src={Stripe}
          alt="Logo"
          className="col-span-2 max-h-10 w-full object-contain lg:col-span-1 dark:invert"
        />
        <Image
          src={Vercel}
          alt="Logo"
          className="col-span-2 max-h-10 w-full object-contain lg:col-span-1 dark:invert"
        />
        <Image
          src={Supabase}
          alt="Logo"
          className="col-span-2 max-h-10 w-full object-contain lg:col-span-1 dark:invert"
        />
        <Image
          src={Tailwindcss}
          alt="Logo"
          className="col-span-2 max-h-10 w-full object-contain lg:col-span-1 dark:invert"
        />
        <Image
          src={Uploadthing}
          alt="Logo"
          className="col-span-2 max-h-10 w-full object-contain lg:col-span-1 dark:invert"
        />
      </div>
    </div>
  );
}
