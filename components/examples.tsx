"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const examples = [
  {
    id: 1,
    parentPhoto: "/parent1.jpg?height=300&width=300",
    childPhoto: "/baby1.jpg?height=300&width=300",
    title: "Семья Ивановых",
  },
  {
    id: 2,
    parentPhoto: "/parent2.jpg?height=300&width=300",
    childPhoto: "/baby2.jpg?height=300&width=300",
    title: "Семья Васильевых",
  },
  {
    id: 3,
    parentPhoto: "/parent3.jpg?height=300&width=300",
    childPhoto: "/baby3.jpg?height=300&width=300",
    title: "Семья Смирновых",
  },
  {
    id: 4,
    parentPhoto: "/parent4.jpg?height=300&width=300",
    childPhoto: "/baby4.jpg?height=300&width=300",
    title: "Семья Павловых",
  },
]

export default function Examples() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-cream-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-4">Примеры наших работ</h2>
          <p className="text-xl text-neutral-600">Посмотрите, какие удивительные портреты мы создаем</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {examples.map((example, index) => (
            <motion.div
              key={example.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-center mb-6 text-neutral-800">{example.title}</h3>

                  <div className="flex items-center justify-center gap-4">
                    <div className="text-center">
                      <p className="text-sm text-neutral-600 mb-2">Родители</p>
                      <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-dream-200">
                        <Image
                          src={example.parentPhoto || "/placeholder.svg"}
                          alt="Фото родителей"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    <div className="text-4xl text-dream-400">→</div>

                    <div className="text-center">
                      <p className="text-sm text-neutral-600 mb-2">Малыш</p>
                      <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-dream-400">
                        <Image
                          src={example.childPhoto || "/placeholder.svg"}
                          alt="Портрет ребенка"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
