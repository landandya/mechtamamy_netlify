"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"

const productSizes = [
  { value: "a2", label: "A2 (42×59 см) -  ̶5̶0̶0̶0̶₽̶ 2499₽" },
  { value: "a3", label: "A3 (30×42 см) -  ̶3̶0̶0̶0̶₽̶ 1499₽" },
  { value: "a4", label: "A4 (21×30 см) -  ̶2̶0̶0̶0̶₽̶ 999₽" },
  { value: "a5", label: "A5 (15×21 см) -  ̶1̶5̶0̶0̶₽̶ 749₽" },
]

export default function ContactForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    size: "",
    comment: "",
    agreeToTerms: false,
    agreeToPrivacy: false,
    agreeToMarketing: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Проверка обязательных согласий
    if (!formData.agreeToTerms || !formData.agreeToPrivacy) {
      toast({
        title: "Ошибка",
        description: "Необходимо согласиться с пользовательским соглашением и публичной офертой",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        toast({
          title: "Заявка отправлена!",
          description: "Мы свяжемся с вами в ближайшее время.",
        })
        setFormData({
          name: "",
          contact: "",
          size: "",
          comment: "",
          agreeToTerms: false,
          agreeToPrivacy: false,
          agreeToMarketing: false,
        })
      } else {
        const errorData = await response.json()
        throw new Error(errorData.error || "Ошибка отправки")
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: error instanceof Error ? error.message : "Не удалось отправить заявку. Попробуйте еще раз.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact-form" ref={ref} className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-4">Оставить заявку</h2>
          <p className="text-xl text-neutral-600">Заполните форму, и мы свяжемся с вами</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-center text-2xl text-neutral-800">Форма заказа</CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✓</span>
                  </div>
                  <h3 className="text-xl font-semibold text-green-600 mb-2">Заявка успешно отправлена!</h3>
                  <p className="text-neutral-600">Мы свяжемся с вами в ближайшее время</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Имя *</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-1"
                      placeholder="Ваше имя"
                    />
                  </div>

                  <div>
                    <Label htmlFor="contact">Email или телефон *</Label>
                    <Input
                      id="contact"
                      type="text"
                      required
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      className="mt-1"
                      placeholder="example@email.com или +7 (999) 123-45-67"
                    />
                  </div>

                  <div>
                    <Label htmlFor="size">Размер портрета *</Label>
                    <Select
                      value={formData.size}
                      onValueChange={(value) => setFormData({ ...formData, size: value })}
                      required
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Выберите размер" />
                      </SelectTrigger>
                      <SelectContent>
                        {productSizes.map((size) => (
                          <SelectItem key={size.value} value={size.value}>
                            {size.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="comment">Комментарий</Label>
                    <Textarea
                      id="comment"
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                      className="mt-1"
                      placeholder="Дополнительные пожелания..."
                      rows={4}
                    />
                  </div>

                  {/* Согласия */}
                  <div className="space-y-4 border-t pt-6">
                    <h4 className="font-semibold text-neutral-800">Согласия</h4>

                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: checked as boolean })}
                        className="mt-1"
                      />
                      <Label htmlFor="agreeToTerms" className="text-sm leading-relaxed cursor-pointer">
                        Я согласен(а) с{" "}
                        <a
                          href="/user-agreement"
                          target="_blank"
                          className="text-dream-600 hover:text-dream-700 underline"
                          rel="noreferrer"
                        >
                          пользовательским соглашением
                        </a>{" "}
                        * (обязательно)
                      </Label>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="agreeToPrivacy"
                        checked={formData.agreeToPrivacy}
                        onCheckedChange={(checked) => setFormData({ ...formData, agreeToPrivacy: checked as boolean })}
                        className="mt-1"
                      />
                      <Label htmlFor="agreeToPrivacy" className="text-sm leading-relaxed cursor-pointer">
                        Я ознакомлен(а) с{" "}
                        <a
                          href="/public-offer"
                          target="_blank"
                          className="text-dream-600 hover:text-dream-700 underline"
                          rel="noreferrer"
                        >
                          публичной офертой
                        </a>{" "}
                        * (обязательно)
                      </Label>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="agreeToMarketing"
                        checked={formData.agreeToMarketing}
                        onCheckedChange={(checked) =>
                          setFormData({ ...formData, agreeToMarketing: checked as boolean })
                        }
                        className="mt-1"
                      />
                      <Label htmlFor="agreeToMarketing" className="text-sm leading-relaxed cursor-pointer">
                        Согласен(а) на получение рекламных материалов и уведомлений (необязательно)
                      </Label>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting || !formData.agreeToTerms || !formData.agreeToPrivacy}
                    className="w-full bg-dream-500 hover:bg-dream-600 text-white py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Отправляем..." : "Отправить заявку"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
