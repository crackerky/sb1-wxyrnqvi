"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Train } from 'lucide-react';

const Location = () => {
  return (
    <section id="location" className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">アクセス案内</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            慶應義塾大学 湘南藤沢キャンパス（SFC）内のトレーニング施設を利用しています。
            緑豊かな環境で、集中してトレーニングに取り組めます。
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-lg overflow-hidden shadow-lg h-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3252.2894729925846!2d139.4247903!3d35.3883871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601854fc8d8d5d4b%3A0x1ee7abdd98a328d8!2z5oW25oi45aGY6aSo5aSn5a2mIOa4i-WNiOiXnOayu-OCreODo-ODs-ODkeOCuQ!5e0!3m2!1sja!2sjp!4v1696827047322!5m2!1sja!2sjp" 
                width="100%" 
                height="350"
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="慶應義塾大学 湘南藤沢キャンパスの地図"
                className="w-full h-full"
              />
            </div>
          </motion.div>

          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg h-full">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">施設情報</h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1 text-sm sm:text-base">住所</h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      〒252-0882<br />
                      神奈川県藤沢市遠藤5322<br />
                      慶應義塾大学 湘南藤沢キャンパス
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-primary mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1 text-sm sm:text-base">営業時間</h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      平日: 9:00〜21:00<br />
                      土曜: 10:00〜19:00<br />
                      日曜: 10:00〜18:00<br />
                      <span className="text-xs">※祝日は日曜日と同じ営業時間となります</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Train className="h-5 w-5 sm:h-6 sm:w-6 text-primary mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1 text-sm sm:text-base">アクセス方法</h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      <span className="font-medium">小田急江ノ島線</span><br />
                      湘南台駅からバスで約15分<br />
                      「慶応大学」バス停下車、徒歩5分<br /><br />
                      
                      <span className="font-medium">JR東海道線・小田急線・相鉄線</span><br />
                      藤沢駅からバスで約25分<br />
                      「慶応大学」バス停下車、徒歩5分
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
                <h4 className="font-medium mb-2 sm:mb-3 text-sm sm:text-base">設備について</h4>
                <p className="text-xs sm:text-sm text-gray-600">
                  キャンパス内のトレーニング施設は、最新の器具を完備。シャワールーム、ロッカーもございますので、手ぶらでお越しいただけます。タオルとウェアのレンタルも可能です（有料）。
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
