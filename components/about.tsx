"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { ViewIcon } from "lucide-react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { Globe } from "./ui/globe";

export function AboutSection() {
  return (
    <section
      id="about"
      className="flex min-h-screen w-full items-center overflow-hidden justify-center"
    >
      <div className="container mx-auto relative px-4 max-w-6xl grid items-center gap-6 lg:grid-cols-2">
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl border">
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/rasheednw.PNG"
                alt="Profile"
                height="1000"
                width="1000"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-xl group-hover/card:shadow-xl grayscale-50 group-hover/card:grayscale-0 transition-all duration-500 ease-in-out"
              />
            </CardItem>
          </CardBody>
        </CardContainer>
        <div className="flex flex-col text-justify justify-center p-4 lg:p-0 space-y-8 z-10">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              About Me
            </h2>
          </Reveal>

          <div className="space-y-4 pr-4 pb-4 rounded-lg bg-transparent backdrop-blur-2xl lg:backdrop-blur-none">
            <Reveal>
              <p className="text-lg text-muted-foreground">
                I am a results-driven Software Engineer with a focus on engineering high-performance web solutions that drive business value and solve complex technical challenges.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-lg text-muted-foreground">
                With expertise in React, Next.js, and TypeScript, I build scalable architectures and intuitive interfaces that bridge the gap between business objectives and user needs. My approach combines technical excellence with a deep understanding of product growth.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-lg text-muted-foreground">
                Currently, I am leveraging AI and LLMs to build intelligent automation tools and data-driven applications that enhance productivity and provide actionable insights for modern enterprises.
              </p>
            </Reveal>
          </div>
          <Reveal>
            <Button
              className="inline-flex items-center gap-2"
              onClick={() =>
                window.open(
                  "/Abdulrasheed_Abdulsalam_Software_Engineer.pdf"
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
