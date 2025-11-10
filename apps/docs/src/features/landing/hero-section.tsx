import { Button } from "@shared/components";
import { mergeClass } from "@shared/libs";
import workImage1 from "./work-image-1.png";
import workImage2 from "./work-image-2.png";

type GalleryItemProps = {
  data: {
    image: string;
    alt: string;
  };
  className?: string;
};

function GalleryItem({ data, className }: GalleryItemProps) {
  return (
    <div
      className={mergeClass(
        "absolute h-full w-full cursor-pointer rounded-3xl border border-border border-dashed bg-surface p-1 transition-all duration-500 hover:z-10 hover:scale-105",
        className
      )}
    >
      <img
        alt={data.alt}
        className="h-full w-full overflow-hidden rounded-2xl object-cover"
        src={data.image}
      />
    </div>
  );
}

function Gallery() {
  return (
    <div className="group relative flex h-[200px] laptop:h-[360px] tablet:h-[300px] w-full items-center justify-center">
      <GalleryItem
        className="-rotate-3 group-hover:-translate-y-4"
        data={{ image: workImage2, alt: "With terminal" }}
      />
      <GalleryItem
        className="translate-y-6 rotate-6 group-hover:translate-y-3/12 group-hover:rotate-3"
        data={{ image: workImage1, alt: "Full shot" }}
      />
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      className="container mx-auto flex flex-col items-center px-5 tablet:px-0 py-28 tablet:pt-52"
      id="hero"
    >
      <span className="flex items-center gap-2 rounded-2xl bg-green-100 py-1.5 pr-5 pl-3 text-green-600 text-sm">
        <i className="fi fi-sr-check-circle" />
        New release - bat supported
      </span>

      <h2 className="mt-8 text-balance text-center font-medium tablet:text-5xl text-3xl text-foreground leading-tight">
        The code themes <br className="tablet:block hidden" />
        for simplicity
      </h2>

      <p className="mt-6 laptop:w-5/12 tablet:w-8/12 text-pretty text-center text-foreground/60 leading-7">
        Powering your coding productivity with simple design.{" "}
        <br className="tablet:block hidden" />
        Never miss the code from color distractions.
      </p>

      <div className="mt-16 flex items-center gap-3">
        <Button
          asChild
          className="gap-2 transition-all duration-300 hover:scale-95"
        >
          <a href={"/#get-started"}>
            Download
            <i className="fi fi-sr-check-circle" />
          </a>
        </Button>
      </div>

      <div className="mt-16 flex laptop:w-5/12 tablet:w-8/12 w-10/12 justify-center">
        <Gallery />
      </div>
    </section>
  );
}
