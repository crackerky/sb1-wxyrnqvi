"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Medal, Target, Trophy, TrendingUp } from 'lucide-react';

const Philosophy = () => {
  const philosophyPoints = [
    {
      icon: <Medal className="h-8 w-8 sm:h-12 sm:w-12 text-blue-500" />,
      title: "武道の精神",
      description: "17年間の武道経験から学んだ「継続は力なり」の精神。小さな積み重ねが大きな変化を生み出します。"
    },
    {
      icon: <Target className="h-8 w-8 sm:h-12 sm:w-12 text-green-500" />,
      title: "目標達成プロセス",
      description: "駅伝選手として培った「チームと個人の調和」の考え方。個性を尊重しながら、明確な目標に向かって進みます。"
    },
    {
      icon: <Trophy className="h-8 w-8 sm:h-12 sm:w-12 text-orange-500" />,
      title: "成功体験の力",
      description: "フィジーク大会出場経験による「自己変革」の可能性。小さな成功体験の積み重ねが自信と行動力を生み出します。"
    },
    {
      icon: <TrendingUp className="h-8 w-8 sm:h-12 sm:w-12 text-purple-500" />,
      title: "科学的アプローチ",
      description: "最新の運動生理学と栄養学を取り入れた「エビデンスベース」のトレーニング。効率的に結果を出すためのメソッドを提供します。"
    }
  ];

  return (
    <section id="philosophy" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-center">
          {/* Image */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative">
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-full h-full border-2 border-primary rounded-lg"></div>
              <img 
                src="https://images.pexels.com/photos/6551133/pexels-photo-6551133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="トレーナーの指導風景" 
                className="rounded-lg w-full h-auto object-cover shadow-lg"
              />
            </div>
          </motion.div>

          {/* Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">理念・ストーリー</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                「人は誰でも変われる」という強い信念を持っています。武道、駅伝、フィジークの経験から培った「目標達成」の哲学をベースに、あなたの成功をサポートします。
              </p>
              
              <div className="space-y-4 sm:space-y-6">
                {philosophyPoints.map((point, index) => (
                  <motion.div 
                    key={index} 
                    className="flex gap-3 sm:gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <div className="flex-shrink-0 mt-1">{point.icon}</div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{point.title}</h3>
                      <p className="text-sm sm:text-base text-gray-600">{point.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
