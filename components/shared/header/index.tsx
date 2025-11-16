import Link from "next/link";
import Image from "next/image";
import { APP_NAME } from "@/lib/constants";
import { Menu } from "./menu";

export const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start gap-2">
          <Link href="/" className="flex-start gap-2">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={100}
              height={100}
              className="flex-start"
            />
            <span className="hidden lg:block text-2xl font-bold m-3 text-primary">
              {APP_NAME}
            </span>
          </Link>
        </div>

        <div className="space-x-2">
          <Menu />
        </div>
      </div>
    </header>
  );
};
