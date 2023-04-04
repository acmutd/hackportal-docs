import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="bg-white dark:bg-docGray/10">
      <div className="container mx-auto text-center py-24">
        <h1 className="lg:text-8xl text-6xl font-bold text-primaryDark dark:text-secondary">
          {siteConfig.title}
        </h1>
        <p className="text-xl py-6 text-primaryDark dark:text-secondary">{siteConfig.tagline}</p>
        <Link
          className="bg-secondary py-2 px-8 rounded-xl font-semibold text-xl text-primaryDark hover:text-primary"
          to="/docs/intro"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home | ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
