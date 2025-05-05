"use client";

import Link from 'next/link';
import { Dumbbell, Mail, Phone, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center space-x-2">
              <Dumbbell className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="font-bold text-lg sm:text-xl">Evolvix</span>
            </div>
            <p className="text-xs sm:text-sm text-primary-foreground/80 max-w-xs">
              あなたの成功体験をサポートし、目標達成を加速させるパーソナルトレーニング
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">リンク</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link href="#services" className="text-xs sm:text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  サービス
                </Link>
              </li>
              <li>
                <Link href="#philosophy" className="text-xs sm:text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  理念
                </Link>
              </li>
              <li>
                <Link href="#programs" className="text-xs sm:text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  プログラム
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-xs sm:text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  よくある質問
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">連絡先</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-primary-foreground/80" />
                <span className="text-xs sm:text-sm text-primary-foreground/80">jikidera0102@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-primary-foreground/80" />
                <span className="text-xs sm:text-sm text-primary-foreground/80">090-8861-9971</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-primary-foreground/80 mt-0.5" />
                <span className="text-xs sm:text-sm text-primary-foreground/80">
                  〒252-0882 神奈川県藤沢市遠藤5322<br />
                  慶應義塾大学 湘南藤沢キャンパス
                </span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">ソーシャルメディア</h3>
            <div className="flex space-x-3 sm:space-x-4">
              <Link 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors rounded-full p-1.5 sm:p-2"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors rounded-full p-1.5 sm:p-2"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors rounded-full p-1.5 sm:p-2"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <div className="text-xs sm:text-sm text-primary-foreground/80">
              &copy; {currentYear} Evolvix. All rights reserved.
            </div>
            <div className="flex space-x-4 sm:space-x-6">
              <Link href="/privacy-policy" className="text-xs sm:text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                プライバシーポリシー
              </Link>
              <Link href="/terms" className="text-xs sm:text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                利用規約
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
