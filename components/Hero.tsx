'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  const tagline = "Building reliable software, from first line to final test.";
  const subtitle =
    "Full-stack developer and QA engineer who delivers clean, well-tested web applications — and catches the bugs before your users do.";
  const aboutParagraph =
    "I'm a passionate software developer and QA engineer based in Nairobi, Kenya. With experience spanning full-stack development and quality assurance, I bring a unique perspective to building robust software. I specialize in React, Node.js,Typescript and QA testing, and I'm committed to writing code that's not just functional, but maintainable and thoroughly tested. When I'm not coding, you'll find me exploring new technologies, contributing to open source, or mentoring aspiring developers.";

  return (
    <section className="min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px]">

              {/* Soft glow background */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-400/30 to-blue-400/30 blur-3xl scale-110"></div>

              {/* Floating animation */}
              <motion.div
                className="relative w-full h-full"
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Image frame */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <Image
                    src="/images/profile-animated.png"
                    alt="Sandra Kihoro - Full-stack Developer and QA Engineer"
                    fill
                    className="object-cover object-[50%_30%]"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {tagline}
            </h1>

            <p className="text-xl sm:text-2xl text-primary-600 font-medium mb-6">
              {subtitle}
            </p>

            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl">
              {aboutParagraph}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/#experiences"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white text-lg font-semibold rounded-xl hover:bg-primary-700 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                View My Work
              </Link>

              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 text-lg font-semibold rounded-xl border-2 border-primary-600 hover:bg-primary-50 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}