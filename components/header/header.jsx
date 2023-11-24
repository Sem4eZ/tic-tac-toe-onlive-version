import Image from "next/image";
import logoSrc from "./logo.svg";
import { Inter } from "next/font/google";
import { Profile } from "../profile/porfile";
import { ArrowDownIcon } from "./icons/arrow-down-icon";
import { UiButton } from "../uikit/ui-button";

const inter = Inter({ subsets: ["latin"] });

export function Header() {
  return (
    <header className="flex h-24 items-center px-8 bg-white shadow-lg">
      <Image src={logoSrc} alt="logo" />
      <div className="w-px h-8 bg-slate-200 mx-6"></div>
      <UiButton className="w-44" variant="primary" size="lg">
        Играть
      </UiButton>
      <button className="ml-auto flex items-center gap-2 text-teal-600">
        <Profile name="Fedorov" rating="1530" />
        <ArrowDownIcon />
      </button>
    </header>
  );
}
