"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { ViewIcon } from "lucide-react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { Globe } from "./ui/globe";

export function AboutSection() {
  return (
    <section
      id="about"
      className="flex min-h-screen w-full items-center overflow-hidden justify-center py-16"
    >
      <div className="container mx-auto relative px-4 max-w-6xl grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/rasheed.PNG"
                alt="Profile"
                height="1000"
                width="1000"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-xl group-hover/card:shadow-xl grayscale-50 group-hover/card:grayscale-0 transition-all duration-500 ease-in-out"
              />
            </CardItem>
          </CardBody>
        </CardContainer>
        <div className="flex flex-col justify-center space-y-8">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              About Me
            </h2>
          </Reveal>

          <div className="space-y-4">
            <Reveal>
              <p className="text-lg text-muted-foreground">
                I am a passionate software developer with a deep interest in
                building innovative and user-centric applications.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-lg text-muted-foreground">
                With experiences crafting modern UIs using React, React Native,
                Next.js, and TypeScript, I focus on creating interfaces that are
                fast, clean, and scalable. I also love turning complex technical
                concepts into clear, developer-friendly content.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-lg text-muted-foreground">
                Lately, I’ve been focusing on building AI-driven applications
                that can enhance user experiences and provide intelligent
                insights. Whether it's for personalized recommendations,
                simplifying complex workflow or automation, I'm exploring ways
                to integrate AI in everyday tools.
              </p>
            </Reveal>
          </div>
          <Reveal>
            <Button
              className="inline-flex items-center gap-2"
              onClick={() =>
                window.open(
                  "/Abdulrasheed_Abdulsalam_Software_Engineering_Resume.pdf"
                )
              }
              variant="outline"
            >
              <ViewIcon className="h-4 w-4" />
              View Resume
            </Button>
          </Reveal>
        </div>
        <div className="h-60 md:h-60 flex flex-col items-center absolute -right-60 -bottom-0 bg-transparent dark:bg-transparent mt-10">
          <Globe />
        </div>
      </div>
    </section>
  );
}
