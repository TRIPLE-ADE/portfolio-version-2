"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/TRIPLE-ADE",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/abdulsalam-dev",
    icon: Linkedin,
  },
  {
    name: "X",
    url: "https://x.com/Triple123A",
    icon: "x",
  },
  {
    name: "Email",
    url: "mailto:adetomiwaabdul@gmail.com",
    icon: Mail,
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="flex w-full justify-center py-16 scroll-mt-10"
    >
      <div className="container max-w-2xl mx-auto px-4">
        {/* Social Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="w-full text-center">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Let's Connect
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Whether it's for a potential project, a collaboration, or just to
              say hi, you can find me on these platforms. Let's stay in touch!
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-3 text-primary transition-all hover:bg-primary/20 hover:shadow-md focus:outline-hidden focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Visit my ${link.name} profile`}
                >
                  {link.icon === "x" ? (
                    <Image
                      src="/x.svg"
                      alt="X Logo"
                      width={20}
                      height={20}
                      className="h-5 w-5 dark:invert"
                    />
                  ) : (
                    <link.icon className="h-5 w-5" />
                  )}
                  <span className="text-sm font-medium">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;
