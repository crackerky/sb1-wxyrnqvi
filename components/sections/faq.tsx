"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "トレーニング経験がない初心者でも参加できますか？",
      answer: "はい、もちろん可能です。初心者の方には基礎から丁寧に指導いたします。正しいフォームの習得から始め、段階的に強度を上げていくので安心してご参加いただけます。"
    },
    {
      question: "どのくらいの頻度でトレーニングすれば効果が出ますか？",
      answer: "効果的な結果を得るためには、週に2〜3回のトレーニングをお勧めしています。ただし、これは目標や現在の体力レベルによって異なります。初回カウンセリングで、あなたに最適なトレーニング頻度をご提案します。"
    },
    {
      question: "食事制限は厳しいですか？",
      answer: "極端な食事制限は行いません。持続可能な食習慣の形成を重視し、あなたのライフスタイルや好みに合わせた実践的な栄養プランを提案します。長期的に続けられる食事法を一緒に見つけていきましょう。"
    },
    {
      question: "どのような支払い方法がありますか？",
      answer: "クレジットカード、銀行振込、電子マネー（PayPay、LINE Pay）でのお支払いに対応しています。月払い、3ヶ月一括払い、半年一括払い（割引あり）から選択いただけます。"
    },
    {
      question: "予約をキャンセルしたい場合はどうすればいいですか？",
      answer: "予約の24時間前までにご連絡いただければ、キャンセル料は発生しません。24時間を切ったキャンセルの場合、セッション料金の50%のキャンセル料が発生します。ただし、月に1回までは緊急キャンセル（無料）が可能です。"
    },
    {
      question: "どのくらいの期間で結果が出ますか？",
      answer: "個人差はありますが、適切なトレーニングと栄養管理を継続した場合、多くの方は4〜8週間で目に見える変化を実感されます。ただし、大きな体組成の変化には3〜6ヶ月の継続的な取り組みが必要です。定期的な測定と評価で進捗を確認していきます。"
    }
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">よくある質問</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            お客様からよくいただくご質問とその回答をまとめました。
            他にもご不明点があれば、お気軽にお問い合わせください。
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;