"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Crown, Star } from 'lucide-react';
import Link from 'next/link';

const Programs = () => {
  const pricingPlans = [
    {
      title: "ベーシック",
      price: "¥1,000",
      description: "オンラインでの基本的なサポートプラン",
      features: [
        "週２回のオンラインコーチング（メニューや現状について）",
        "科学的根拠に基づいたトレーニング指導",
        "科学的根拠に基づく栄養学指導",
        "目標達成プログラムシートの作成",
        "常時LINEでの相談対応"
      ],
      icon: <CheckCircle2 className="h-10 w-10 text-blue-500" />,
      color: "blue"
    },
    {
      title: "アドバンス",
      price: "¥3,000",
      description: "対面指導とオンラインを組み合わせた総合的なサポート",
      features: [
        "週一回の対面トレーニング",
        "オンラインコーチング",
        "一人一人に合わせたトレーニングメニュー作成",
        "科学的根拠に基づいたトレーニング指導",
        "科学的根拠に基づく栄養学指導",
        "目標達成のためのマインドセット指導",
        "目標達成プログラムシート作成",
        "常時LINEでの相談対応",
        "VIPブラックメンバーズカード"
      ],
      icon: <Star className="h-10 w-10 text-purple-500" />,
      color: "purple",
      popular: true
    },
    {
      title: "プロ",
      price: "¥5,000",
      description: "無制限の対面指導による最高峰のサポート",
      features: [
        "無制限の対面トレーニング",
        "オンラインコーチング",
        "一人一人に合わせたトレーニングメニュー作成",
        "科学的根拠に基づいたトレーニング指導",
        "科学的根拠に基づく栄養学指導",
        "目標達成のためのマインドセット指導",
        "目標達成プログラムシート作成",
        "常時LINEでの相談対応",
        "VIPゴールドメンバーズカード"
      ],
      icon: <Crown className="h-10 w-10 text-yellow-500" />,
      color: "yellow"
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="programs" className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">料金プラン</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              あなたの目標と予算に合わせて、最適なプランをお選びいただけます。
              すべてのプランで科学的根拠に基づいた指導を提供します。
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2 }}
              className="h-full"
            >
              <Card className={`relative h-full flex flex-col ${plan.popular ? 'border-2 border-purple-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white text-xs sm:text-sm px-3 sm:px-4 py-1 rounded-full font-medium">
                      人気プラン
                    </span>
                  </div>
                )}
                <CardHeader>
                  <div className="flex justify-center mb-3 sm:mb-4">{plan.icon}</div>
                  <CardTitle className="text-center text-lg sm:text-xl">{plan.title}</CardTitle>
                  <div className="text-center mt-2">
                    <span className="text-2xl sm:text-3xl font-bold">{plan.price}</span>
                    <span className="text-gray-600 ml-1">/月</span>
                  </div>
                  <CardDescription className="text-center mt-2 text-sm sm:text-base">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2 sm:space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="mt-auto pt-4 sm:pt-6">
                  <Button 
                    asChild 
                    className="w-full h-10 sm:h-12 text-sm sm:text-base"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    <Link href="#contact">無料カウンセリングを予約する</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
            まずは無料カウンセリングで、あなたの目標と現状をお聞かせください。
            最適なプランをご提案させていただきます。
          </p>
          <Button asChild size="lg" className="text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3">
            <Link href="#contact">無料カウンセリングを予約する</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
