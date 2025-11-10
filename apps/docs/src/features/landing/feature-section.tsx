export type FeatureItemData = {
  title: string;
};

type FeatureItemProps = {
  data: FeatureItemData;
};

function FeatureItem({ data }: FeatureItemProps) {
  return (
    <div className="hover:-translate-y-1 group flex cursor-pointer gap-2 text-foreground/60 transition-all duration-300 hover:text-foreground">
      <i className="fi fi-sr-check-circle text-foreground/40 text-sm transition-all duration-300 group-hover:scale-105 group-hover:text-foreground" />
      {data.title}
    </div>
  );
}

const featureList: FeatureItemData[] = [
  {
    title: "Support light & dark mode",
  },
  {
    title: "Cross editor support",
  },
  {
    title: "Optimize readabilities",
  },
  {
    title: "Less distractions & focus",
  },
  {
    title: "Customizable",
  },
  {
    title: "Less colors & simplicity",
  },
];

export function FeatureSection() {
  return (
    <section className="container mx-auto flex flex-col items-center px-5 tablet:px-0 py-20 tablet:py-36">
      <h2 className="mt-8 text-balance text-center font-medium tablet:text-5xl text-3xl text-foreground leading-tight">
        Charge your code <br className="tablet:block hidden" />
        with simplicity
      </h2>

      <p className="mt-6 text-pretty text-center text-foreground/60 leading-7">
        Batteries included and help you speed{" "}
        <br className="tablet:block hidden" />
        up your development process.
      </p>

      <div className="mt-20 flex flex-col gap-5">
        {featureList.map((data, index) => (
          <FeatureItem data={data} key={index} />
        ))}
      </div>
    </section>
  );
}
