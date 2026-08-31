import { ArrowUpRight, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="section-block">
      <div className="page-shell">
        <div className="relative overflow-hidden rounded-4xl bg-primary px-6 py-12 text-primary-foreground sm:px-10 sm:py-16 lg:px-16">
          <div
            className="pointer-events-none absolute -right-24 -bottom-32 size-96 rounded-full border-[4rem] border-white/10"
            aria-hidden="true"
          />
          <p className="label text-primary-foreground/65">Start a conversation</p>
          <div className="relative mt-5 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="max-w-4xl text-4xl font-extrabold tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                Hiring a product engineer—or building something that needs one?
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/75">
                I’m open to frontend and mobile engineering roles, contract product work, and
                focused technical collaborations.
              </p>
            </div>
            <a
              href="mailto:abdulrasheedabdulsalam13603@gmail.com"
              className="pressable inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-primary-foreground px-6 py-4 font-extrabold text-primary"
            >
              <Mail className="size-5" aria-hidden="true" />
              Start a conversation
              <ArrowUpRight className="size-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
