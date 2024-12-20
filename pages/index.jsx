import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import Title from "../scr/components/Title";
import Projects from "../scr/components/Projects";
import RandomPhrase from "../scr/components/RandomPhrase";
import ExpandableSection from "../scr/components/ExpandableSection";
import Image from "next/image";
import profilePicture from "../public/mateus.png";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Mateus de Santana Pereira</title>
        <meta
          name="description"
          content="Portfólio de Mateus de Santana Pereira"
        />
      </Head>
      <div className="container">
        <motion.header
          className="header"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}>
          <div className="header-content">
            <Title>Mateus de Santana Pereira</Title>
            <RandomPhrase />
          </div>
          <Image
            src={profilePicture}
            alt="Foto do Mateus"
            className="profile-picture"
            width={120}
            height={120}
          />
        </motion.header>

        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}>
          <section className="links">
            <motion.a
              href="https://github.com/Minf-afk"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.1,
                color: "#fff",
                backgroundColor: "#000",
              }}
              title="Meu GitHub">
              Meu GitHub
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/mateus-santana-540a48164/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.1,
                color: "#fff",
                backgroundColor: "#000",
              }}
              title="Meu LinkedIn">
              Meu LinkedIn
            </motion.a>
          </section>

          <section className="projects-section">
            <Projects />
          </section>
        </motion.main>
      </div>
    </>
  );
}
