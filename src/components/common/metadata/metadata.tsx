import Head from "next/head";

interface MetadataProps {
  title?: string;
}

export default function Metadata({ title }: MetadataProps) {
  return (
    <Head>
      <title>
        {title
          ? `ERC50 Launchpad - ${title}`
          : "ERC50 Launchpad - Create or Explore ERC50 Ecosystem"}
      </title>
      <meta name="description" content="" />
      <meta name="keywords" content="" />
      <meta name="author" content="salluthdev" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/img/favicon.ico " />
    </Head>
  );
}
