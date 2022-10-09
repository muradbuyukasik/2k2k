import type { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>2K2K Servers</title>
        <meta property="og:title" content="2K2K Servers" key="title" />
        <meta property="og:description" content="2K2K is a Minecraft Anarchy server. Join our Discord, conversate a few and come play! Join the Chaos." key="description" />
        <meta property="og:image" content="https://cdn.discordapp.com/attachments/1027668369262006434/1028714358236266596/unknown.png" key="image" />
        <meta property="og:url" content="https://2k2k.org" key="url" />
        <meta property="og:type" content="website" key="type" />
        <meta property="og:site_name" content="2K2K Servers" key="site_name" />
        <meta property="og:locale" content="en_US" key="locale" />
        <meta name="theme-color" content="#000000" />
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:site" content="@muradbuyukasik" key="twitter:site" />
        <meta name="twitter:creator" content="@muradbuyukasik" key="twitter:creator" />
        <meta name="twitter:title" content="2K2K Servers" key="twitter:title" />
        <meta name="twitter:description" content="2K2K is a Minecraft Anarchy server. Join our Discord, conversate a few and come play! Join the Chaos." key="twitter:description" />
        <meta name="twitter:image" content="https://cdn.discordapp.com/attachments/1027668369262006434/1028714358236266596/unknown.png" key="twitter:image" />
        <meta name="twitter:url" content="https://2k2k.org" key="twitter:url" />
        <meta name="twitter:domain" content="2k2k.org" key="twitter:domain" />
        <meta name="twitter:label1" content="2K2K Servers" key="twitter:label1" />
        <meta name="twitter:data1" content="2K2K is a Minecraft Anarchy server. Join our Discord, conversate a few and come play! Join the Chaos." key="twitter:data1" />
        <meta name="description" content="2K2K is a Minecraft Anarchy server. Join our Discord, conversate a few and come play! Join the Chaos." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto max-w-3xl flex min-h-screen p-4 flex-col items-center justify-center">
        <h1 className="text-4xl text-red-600 font-extrabold leading-normal md:text-[5rem] text-center">
          2K2K Anarchy
        </h1>
        <p className="text-white text-center">
          2K2K is a vanilla Minecraft survival server on hard mode, also known as Anarchy; there are no rules. Join our Discord, conversate a few and come play!
        </p>
        <div className="flex flex-col text-center space-y-4 md:space-x-4 md:space-y-0 md:flex-row mt-12">
          <JoinDiscord />
          <IPBar />
        </div>
      </main>
    </>
  );
};

const JoinDiscord = () => {
  return (
    <a href="https://discord.gg/Tz5pBCts9K" target="_blank" rel="noreferrer" className="text-white px-3 py-1 rounded-lg transition duration-150 ease-out hover:ease-in hover:bg-purple-700 bg-purple-800 text-bold">
      Join our Discord
    </a>
  )
}

const IPBar = () => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  }, [copied]);

  return (
    <div className="flex items-stretch rounded-lg border shadow-sm text-white">
      <div className="px-3 py-1 border-r">
        play.2k2k.org
      </div>
      <div className="px-3 py-1 font-bold text-neutral-300 transition duration-150 ease-out hover:ease-in hover:text-white cursor-pointer" onClick={() => { navigator.clipboard.writeText("play.2k2k.org"); setCopied(true) }}>
        {
          copied ? "Copied!" : "Copy"
        }
      </div>
    </div>
  )
}

export default Home;