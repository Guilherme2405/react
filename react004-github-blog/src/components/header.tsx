import LeftEffect from "@/assets/left-effect.svg?react";
import RightEffect from "@/assets/right-effect.svg?react";
import GithubBlog from "@/assets/github-blog.svg?react";
import { ModeToggle } from "./mode-toggle";

export function Header() {
  return (
    <header className="w-full h-[296px] bg-sidebar flex flex-col justify-center items-center">
      <div className="w-full flex flex-row justify-between items-center">
        <LeftEffect
          width={370}
          height={236}
          className="fill-primary stroke-primary"
        />

        <GithubBlog
          width={148}
          height={98}
          className="fill-primary stroke-primary"
        />

        <RightEffect
          width={370}
          height={236}
          className="fill-primary stroke-primary"
        />
      </div>
      <div
        className="fixed bottom-12 right-12">
        <ModeToggle />
      </div>
    </header>
  );
}
