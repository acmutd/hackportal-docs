import React from 'react';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Initial Setup',
    Svg: require('@site/static/img/setup.svg').default,
    description: <>Clone the template repository and install the required dependencies.</>,
  },
  {
    title: 'Firebase Setup',
    Svg: require('@site/static/img/server.svg').default,
    description: <>Setup your Firebase project and add the required configuration to your app.</>,
  },
  {
    title: 'Troubleshoot',
    Svg: require('@site/static/img/troubleshoot.svg').default,
    description: (
      <>
        If you run into any issues, please check the troubleshooting section of the docs. If you
        still can't find a solution, feel free to ask for help in the HackPortal HQ Discord server.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className="flex flex-col items-center justify-center w-full p-8 text-center">
      <Svg className="w-[200px] h-[200px]" role="img" aria-label={title} />
      <h3 className="text-2xl font-bold text-primaryDark dark:text-secondary">{title}</h3>
      <p className="text-base text-primaryDark dark:text-secondary">{description}</p>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center w-full bg-secondary dark:bg-docGray">
      {FeatureList.map((props, idx) => (
        <Feature key={idx} {...props} />
      ))}
    </section>
  );
}
