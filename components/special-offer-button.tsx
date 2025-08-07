"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Gift, ArrowRight, Clock } from "lucide-react"

export default function SpecialOfferButton() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-16 bg-gradient-to-br from-dream-50 to-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-gradient-to-r from-dream-500 to-dream-600 border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                {/* Background decoration */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 right-4 w-16 h-16 bg-white rounded-full blur-xl" />
                  <div className="absolute bottom-4 left-4 w-20 h-20 bg-white rounded-full blur-xl" />
                </div>

                <div className="relative p-8 md:p-12 text-white text-center">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className="inline-block mb-4"
                  >
                    <Gift className="w-16 h-16 mx-auto mb-4" />
                  </motion.div>

                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Специальная акция -50%</h2>

                  <p className="text-xl mb-2 opacity-90">
                    Только до <strong>07.07.2025</strong>
                  </p>

                  <p className="text-lg mb-8 opacity-80">Узнайте все подробности акции и условия предзаказа</p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link href="/special-offer">
                      <Button
                        size="lg"
                        variant="secondary"
                        className="bg-white text-dream-600 hover:bg-gray-100 py-4 px-8 text-lg rounded-full shadow-lg group transition-all duration-300"
                      >
                        <span className="flex items-center gap-2">
                          Подробности акции
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </Button>
                    </Link>

                    <div className="flex items-center gap-2 text-white/80">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">Ограниченное предложение</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
