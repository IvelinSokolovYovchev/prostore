import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex-center h-screen w-screen flex-col gap-4">
      <h1 className="text-4xl font-bold">Not Found</h1>
      <Image src="/images/logo.svg" alt="Not Found" width={50} height={50} />
      <p className="text-lg">The page you are looking for does not exist.</p>
      <Button asChild className="justify-start">
        <Link href="/">
          <ArrowLeftIcon className="size-4" />
          Go back to the home page
        </Link>
      </Button>
    </div>
  );
}
