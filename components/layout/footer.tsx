"use client";

import Link from 'next/link';
import { Dumbbell, Mail, Phone, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Dumbbell className="h-6 w-6" />
              <span className="font-bold text-xl">Evolvix</span>
            </div>
            <p className="text-sm text-primary-foreground/80 max-w-xs">
              あなたの成功体験をサポートし、目標達成を加速させるパーソナルトレーニング
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">リンク</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  サービス
                </Link>
              </li>
              <li>
                <Link href="#philosophy" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  理念
                </Link>
              </li>
              <li>
                <Link href="#programs" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  プログラム
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  よくある質問
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">連絡先</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary-foreground/80" />
                <span className="text-sm text-primary-foreground/80">jikidera0102@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary-foreground/80" />
                <span className="text-sm text-primary-foreground/80">090-8861-9971</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary-foreground/80 mt-0.5" />
                <span className="text-sm text-primary-foreground/80">
                  〒252-0882 神奈川県藤沢市遠藤5322<br />
                  慶應義塾大学 湘南藤沢キャンパス
                </span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">ソーシャルメディア</h3>
            <div className="flex space-x-4">
              <Link 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors rounded-full p-2"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors rounded-full p-2"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors rounded-full p-2"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/80">
              &copy; {currentYear} Evolvix. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                プライバシーポリシー
              </Link>
              <Link href="/terms" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
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