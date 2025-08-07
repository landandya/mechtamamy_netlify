"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Star } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Анна Иванова",
    photo: "/review1.jpg?height=200&width=200",
    text: "Невероятно! Портрет получился очень похожим на нашего малыша, который родился через 3 месяца после заказа. Просто магия!",
    rating: 5,
  },
  {
    id: 2,
    name: "Мария Васильева",
    photo: "/review2.jpg?height=200&width=200",
    text: "Качество работы превзошло все ожидания. Портрет в красивой рамке стал украшением нашего дома. Спасибо!",
    rating: 5,
  },
  {
    id: 3,
    name: "Елена Кузнецова",
    photo: "/review3.jpg?height=200&width=200",
    text: "Заказывала портрет в подарок сестре. Она была в восторге! Очень быстро и качественно выполнили заказ.",
    rating: 5,
  },
]

export default function Reviews() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-4">Отзывы наших клиентов</h2>
          <p className="text-xl text-neutral-600">Смотрите, какие трогательные и реалистичные лица мы создаём. Фото родителей — наш ориентир, результат — вашего будущего ребёнка.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-dream-200">
                    <Image src={review.photo || "/placeholder.svg"} alt={review.name} fill className="object-cover" />
                  </div>

                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">{review.name}</h3>

                  <div className="flex justify-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <p className="text-neutral-600 leading-relaxed">&quot;{review.text}&quot;</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
