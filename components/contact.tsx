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
      className="flex min-h-screen w-full items-center justify-center py-16 scroll-mt-10"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Let's Connect
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Whether you're looking to collaborate on a project or just want
              to chat, I'm always open to connecting.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-12 md:grid-cols-2 lg:gap-16">
            {/* Social Links Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center md:items-start"
            >
              <div className="w-full text-center md:text-left">
              <h3 className="text-2xl font-semibold">Connect With Me</h3>
                <p className="mt-2 text-muted-foreground">
                  Whether it's for a potential project, a collaboration, or just
                  to say hi, you can find me on these platforms. Let's stay in
                  touch!
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-4 md:justify-start">
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

            {/* Contact Details Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-8 md:items-start"
            >
              <div className="w-full text-center md:text-left">
                <h3 className="text-2xl font-semibold">Contact Me</h3>
                <p className="mt-2 text-muted-foreground">
                  Feel free to reach out to me via email for project inquiries,
                  collaborations, or just a chat. I look forward to hearing from
                  you!
                </p>
                <motion.a
                  href="mailto:adetomiwaabdul@gmail.com"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary/10 px-6 py-3 text-primary transition-all hover:bg-primary/20 hover:shadow-md focus:outline-hidden focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Send me an email"
                >
                  <Mail className="h-5 w-5" />
                  <span className="text-sm font-medium">Send an Email</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
