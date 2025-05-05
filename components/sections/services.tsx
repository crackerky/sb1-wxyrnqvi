"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dumbbell, Utensils, Brain, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Services = () => {
  const services = [
    {
      title: "パーソナルトレーニング",
      description: "科学的根拠に基づくトレーニング指導で、あなたの目標達成をサポート。初心者から上級者まで、一人ひとりに合わせた指導を提供します。",
      icon: <Dumbbell className="h-8 w-8 sm:h-10 sm:w-10 text-blue-500" />,
      features: [
        "完全個別指導",
        "目標設定サポート",
        "定期的な進捗確認",
        "フォーム修正"
      ]
    },
    {
      title: "栄養指導",
      description: "トレーニング効果を最大化する食事プランをご提案。体質や生活スタイルに合わせた栄養指導を行います。",
      icon: <Utensils className="h-8 w-8 sm:h-10 sm:w-10 text-green-500" />,
      features: [
        "食事記録分析",
        "買い物ガイド",
        "レシピ提案",
        "サプリメントアドバイス"
      ]
    },
    {
      title: "メンタルコーチング",
      description: "目標達成に不可欠なマインドセットを構築。モチベーション維持と心理的障壁の克服をサポートします。",
      icon: <Brain className="h-8 w-8 sm:h-10 sm:w-10 text-purple-500" />,
      features: [
        "目標設定ワークショップ",
        "習慣形成サポート",
        "障害克服戦略",
        "定期的な1on1セッション"
      ]
    },
    {
      title: "グループトレーニング",
      description: "少人数制のグループセッションで、コミュニティの力を活かしながら効率的にトレーニングを行います。",
      icon: <Users className="h-8 w-8 sm:h-10 sm:w-10 text-orange-500" />,
      features: [
        "最大4名まで",
        "仲間との切磋琢磨",
        "コスト効率の良いトレーニング",
        "週2回のセッション"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">サービス紹介</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            あなたの目標達成をトータルでサポート。
            体づくりだけでなく、食事とマインドセットの両面からアプローチします。
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="h-full flex flex-col">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-3 sm:mb-4">{service.icon}</div>
                  <CardTitle className="text-lg sm:text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">{service.description}</p>
                  <ul className="space-y-1 sm:space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-xs sm:text-sm flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-4 sm:pt-6">
                  <Button asChild className="w-full h-9 sm:h-12 text-xs sm:text-sm">
                    <Link href="#contact">詳細を問い合わせる</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 sm:mt-16 text-center">
          <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
            すべてのサービスは個別に受講可能ですが、組み合わせることでより効果的な結果を実現できます。
            まずは無料カウンセリングで、あなたの目標と現状をお聞かせください。
          </p>
          <Button asChild size="lg" className="text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3">
            <Link href="#contact">無料カウンセリングを予約する</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
