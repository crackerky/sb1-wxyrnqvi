"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-12 sm:py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">あなたの変化は今日から始まります</h2>
          <p className="text-base sm:text-xl opacity-90 mb-6 sm:mb-8">
            最初の一歩を踏み出してみませんか？<br />
            無料カウンセリングであなたの目標と可能性について話し合いましょう。
          </p>
          <Button asChild size="lg" variant="secondary" className="group text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3">
            <Link href="#contact">
              <span>無料カウンセリングを予約する</span>
              <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
