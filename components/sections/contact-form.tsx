"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'お名前は2文字以上で入力してください',
  }),
  email: z.string().email({
    message: '有効なメールアドレスを入力してください',
  }),
  phone: z.string().min(10, {
    message: '電話番号は10桁以上で入力してください',
  }),
  program: z.string({
    required_error: 'プログラムを選択してください',
  }),
  message: z.string().min(10, {
    message: 'メッセージは10文字以上で入力してください',
  }).max(500, {
    message: 'メッセージは500文字以内で入力してください',
  }),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'プライバシーポリシーに同意する必要があります' }),
  }),
});

const ContactForm = () => {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    
    // メール送信処理
    const mailtoLink = `mailto:jikidera0102@gmail.com?subject=問い合わせ: ${values.program}&body=名前: ${values.name}%0D%0Aメール: ${values.email}%0D%0A電話番号: ${values.phone}%0D%0Aプログラム: ${values.program}%0D%0A%0D%0Aメッセージ:%0D%0A${values.message}`;
    window.location.href = mailtoLink;
    
    toast({
      title: "送信完了",
      description: "お問い合わせありがとうございます。48時間以内にご連絡いたします。",
    });
    
    form.reset();
  }

  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">お問い合わせ・申し込み</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            無料カウンセリングの予約や、サービスに関するお問い合わせはこちらからお願いします。
            48時間以内にご連絡いたします。
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm sm:text-base">お名前</FormLabel>
                        <FormControl>
                          <Input placeholder="山田 太郎" {...field} className="text-sm sm:text-base h-9 sm:h-10" />
                        </FormControl>
                        <FormMessage className="text-xs sm:text-sm" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm sm:text-base">メールアドレス</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your-email@example.com" {...field} className="text-sm sm:text-base h-9 sm:h-10" />
                        </FormControl>
                        <FormMessage className="text-xs sm:text-sm" />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm sm:text-base">電話番号</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="090-1234-5678" {...field} className="text-sm sm:text-base h-9 sm:h-10" />
                        </FormControl>
                        <FormMessage className="text-xs sm:text-sm" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="program"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm sm:text-base">ご興味のあるプログラム</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="text-sm sm:text-base h-9 sm:h-10">
                              <SelectValue placeholder="プログラムを選択" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="training" className="text-sm sm:text-base">パーソナルトレーニング</SelectItem>
                            <SelectItem value="nutrition" className="text-sm sm:text-base">栄養指導</SelectItem>
                            <SelectItem value="mindset" className="text-sm sm:text-base">メンタルコーチング</SelectItem>
                            <SelectItem value="group" className="text-sm sm:text-base">グループトレーニング</SelectItem>
                            <SelectItem value="all" className="text-sm sm:text-base">すべて</SelectItem>
                            <SelectItem value="not-sure" className="text-sm sm:text-base">まだ決めていない</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-xs sm:text-sm" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm sm:text-base">メッセージ</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="ご質問や目標、現在の状況などをお知らせください" 
                          rows={4} 
                          {...field} 
                          className="text-sm sm:text-base"
                        />
                      </FormControl>
                      <FormDescription className="text-xs sm:text-sm">
                        目標や現在のトレーニング状況、健康状態などをお知らせいただくと、より具体的なご提案が可能です。
                      </FormDescription>
                      <FormMessage className="text-xs sm:text-sm" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="consent"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-2 sm:space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          id="consent"
                          className="mt-1"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel htmlFor="consent" className="text-sm">
                          <span>
                            <a href="/privacy-policy" className="text-primary hover:underline">プライバシーポリシー</a>に同意します
                          </span>
                        </FormLabel>
                        <FormMessage className="text-xs sm:text-sm" />
                      </div>
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full md:w-auto text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3" 
                  size="lg"
                >
                  送信する
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
