"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { motion, type TargetAndTransition } from 'framer-motion';
import { ArrowDownCircle, Dumbbell, Sparkles } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } },
  };

  const floatingAnimation: TargetAndTransition = {
    y: [-10, 10],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
      </div>

      <motion.div 
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${20 + i * 30}%`,
              left: `${10 + i * 30}%`,
            }}
            animate={floatingAnimation}
          >
            <Sparkles className="text-blue-400/30 h-12 w-12" />
          </motion.div>
        ))}
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-white mt-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div 
            variants={item}
            className="flex items-center justify-center gap-12 mb-16"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Dumbbell className="h-16 w-16 text-blue-400" />
            </motion.div>
            <span className="text-7xl md:text-8xl tracking-tight font-bold">Evolvix</span>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Dumbbell className="h-16 w-16 text-blue-400" />
            </motion.div>
          </motion.div>

          <motion.h1 
            variants={item} 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 tracking-tight"
          >
            <span className="block mb-2">あなたの<span className="text-blue-400 inline-block hover:scale-110 transition-transform">成功体験</span>を、</span>
            <span className="relative inline-block">
              ここから
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-blue-400"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
              />
            </span>
          </motion.h1>
          
          <motion.p 
            variants={item} 
            className="text-lg md:text-xl opacity-90 mb-12 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            筋トレ×栄養学×目標達成マインドで<br className="hidden sm:block" />
            <span className="text-blue-400">人生を変える。</span>
          </motion.p>
          
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 relative overflow-hidden group"
            >
              <Link href="#contact">
                <span className="relative z-10">無料カウンセリングを予約</span>
                <motion.div
                  className="absolute inset-0 bg-blue-500"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="bg-white/10 text-white border-white hover:bg-white/20 text-lg px-8 py-6"
            >
              <Link href="#programs">プログラムを見る</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 1.5,
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.2
        }}
      >
        <Link href="#services" aria-label="Scroll down">
          <ArrowDownCircle className="h-12 w-12 text-white hover:text-blue-400 transition-colors" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;