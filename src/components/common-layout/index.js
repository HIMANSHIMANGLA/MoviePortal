"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import Navbar from "src/components/navbar/index.js";
import MediaRow from "src/components/media-row/index.js";
import Banner from "src/components/banner/index.js";

export default function CommonLayout({ mediaData }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Head>
        <title>Netflix Clone</title>
        {/* to do -> to add all other properties */}
      </Head>
      <>
        <Navbar />
        <div className="relative pl-4 pb-24 lg:space-y-24">
          <Banner
            medias={mediaData && mediaData.length ? mediaData[0].medias : []}
          />
          <section className="md:space-y-16">
            {mediaData && mediaData.length
              ? mediaData.map((item) => (
                  <MediaRow title={item.title} medias={item.medias} />
                ))
              : null}
          </section>
        </div>
      </>
    </motion.div>
  );
}
