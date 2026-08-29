"use client";

import { motion, type Variants } from "motion/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { MaskContainer } from "./svg-mask-effect";

interface FloatingShapeProps {
  className: string;
}

const FloatingShape = ({ className }: FloatingShapeProps) => (
  <motion.div
    aria-hidden="true"
    className={`absolute rounded-full blur-2xl
    bg-gradient-to-br from-primary/50 to-primary/5 
    dark:from-primary/20 dark:to-primary/10
    ${className}
  `}
    animate={{
      y: [0, -20, 0],
      x: [0, 10, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    }}
  />
);

const GridPattern = () => (
  <div
    aria-hidden="true"
    className="absolute -z-20 inset-0 
    bg-[linear-gradient(rgba(0,0,0,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.09)_1px,transparent_1px)] 
    dark:bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]
    bg-[size:4rem_4rem] 
    [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"
  />
);

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Hero section"
      className="relative flex mt-10 min-h-screen w-full items-center justify-center overflow-hidden"
    >
      {/* Background Elements */}
      <GridPattern />
      <FloatingShape className="h-96 w-96 -z-20 left-1/4 top-1/4 opacity-40" />
      <FloatingShape className="h-64 w-64 -z-20 right-1/4 bottom-1/4 opacity-30" />
      <MaskContainer
        revealText={
          <div className="w-full px-4 py-8">
            <div className="flex flex-col space-y-4 items-center justify-center text-center">
              <motion.h1
                className="text-4xl max-w-2xl font-bold tracking-tight sm:text-5xl xl:text-6xl "
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Engineering Digital Experiences That Solve Problems & Drive Growth
              </motion.h1>

              <motion.p
                className="mx-auto max-w-2xl text-lg leading-relaxed text-secondary-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                I am a Software Engineer dedicated to solving complex technical challenges. I build
                scalable, high-performance applications that transform ideas into impactful business
                solutions.
              </motion.p>

              <motion.p
                className="text-lg text-muted-foreground"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Software Engineer • Technical Writer
              </motion.p>

              <motion.div
                className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="w-full transition-all hover:scale-105 hover:shadow-lg"
                >
                  <a
                    href="/Abdulrasheed_Abdulsalam_Software_Engineer.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Resume PDF (opens in new tab)"
                  >
                    View Resume
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full transition-all hover:scale-105 hover:shadow-lg"
                >
                  <Link href="/#contact" aria-label="Contact Me">
                    Contact Me
                  </Link>
                </Button>
              </motion.div>

              <SocialIcons />
            </div>
          </div>
        }
      >
        <div className="flex flex-col space-y-4 items-center justify-center text-center">
          <motion.h1
            className="text-4xl max-w-2xl font-bold tracking-tight sm:text-5xl  xl:text-6xl text-background"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Engineering Digital Experiences That Solve Problems & Drive Growth
          </motion.h1>

          <motion.p
            className="mx-auto max-w-2xl text-lg leading-relaxed text-secondary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I am a Software Engineer dedicated to solving complex technical challenges. I build
            scalable, high-performance applications that transform ideas into impactful business
            solutions.
          </motion.p>

          <motion.p
            className="text-lg text-background"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Software Engineer • Technical Writer
          </motion.p>

          <motion.div
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full transition-all hover:scale-105 hover:shadow-lg"
            >
              <a
                href="/Abdulrasheed_Abdulsalam_Software_Engineer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Resume PDF (opens in new tab)"
              >
                View Resume
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full transition-all hover:scale-105 hover:shadow-lg"
            >
              <Link href="/#contact" aria-label="Contact Me">
                Contact Me
              </Link>
            </Button>
          </motion.div>

          <SocialIcons />
        </div>
      </MaskContainer>
    </section>
  );
}

interface SocialIconProps {
  href: string;
  ariaLabel: string;
  icon: React.ReactNode;
}

const SocialIcon = ({ href, ariaLabel, icon }: SocialIconProps) => {
  const iconAnimation: Variants = {
    rest: {
      scale: 1,
      rotate: 0,
    },
    hover: {
      scale: 1.1,
      rotate: [0, -10, 10, 0],
      transition: {
        rotate: {
          duration: 0.4,
          ease: "easeInOut",
        },
        scale: {
          duration: 0.2,
          ease: "easeInOut",
        },
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <motion.div initial="rest" whileHover="hover" whileTap="tap" animate="rest">
      <Link
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        aria-label={ariaLabel}
        className="block text-muted-foreground transition-colors hover:text-primary focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary rounded-md p-1"
      >
        <motion.div variants={iconAnimation}>{icon}</motion.div>
      </Link>
    </motion.div>
  );
};

const SocialIcons = () => {
  return (
    <motion.div
      className="mt-10 flex items-center justify-center gap-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <SocialIcon
        href="https://github.com/TRIPLE-ADE"
        ariaLabel="Visit GitHub Profile (opens in new tab)"
        icon={<GithubIcon className="h-6 w-6" />}
      />
      <SocialIcon
        href="https://linkedin.com/in/abdulsalam-dev/"
        ariaLabel="Visit LinkedIn Profile (opens in new tab)"
        icon={<LinkedinIcon className="h-6 w-6" />}
      />
      <SocialIcon
        href="mailto:adetomiwaabdul@gmail.com"
        ariaLabel="Send an email to Abdulrasheed"
        icon={<Mail className="h-6 w-6" />}
      />
    </motion.div>
  );
};

export default HeroSection;
