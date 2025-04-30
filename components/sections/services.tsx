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
      icon: <Dumbbell className="h-10 w-10 text-blue-500" />,
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
      icon: <Utensils className="h-10 w-10 text-green-500" />,
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
      icon: <Brain className="h-10 w-10 text-purple-500" />,
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
      icon: <Users className="h-10 w-10 text-orange-500" />,
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
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">サービス紹介</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            あなたの目標達成をトータルでサポート。
            体づくりだけでなく、食事とマインドセットの両面からアプローチします。
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="h-full flex flex-col">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-6">
                  <Button asChild className="w-full h-12">
                    <Link href="#contact">詳細を問い合わせる</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            すべてのサービスは個別に受講可能ですが、組み合わせることでより効果的な結果を実現できます。
            まずは無料カウンセリングで、あなたの目標と現状をお聞かせください。
          </p>
          <Button asChild size="lg">
            <Link href="#contact">無料カウンセリングを予約する</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;