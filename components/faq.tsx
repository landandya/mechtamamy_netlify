"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqData = [
  {
    question: "📢 Есть ли сейчас акции?",
    answer: [
      "Да! До 07.07 июля действует уникальная акция:",
      "— Вы оформляете предзаказ всего за 50% от полной стоимости",
      "— Получаете электронную версию фото малыша",
      "— А 07.07 курьер доставит вам подарочный набор в рамке",
      "",
      "⚡️ Количество заказов по акции ограничено!",
    ],
  },
  {
    question: "🚚 Как осуществляется доставка?",
    answer: [
      "Самовывоз в г. Чебоксары — бесплатно",
      "Доставка по Чебоксарам — 200₽",
      "Доставка в Новочебоксарск — 300₽",
      "Другие города России — от 500 ₽ (точную стоимость уточните у менеджера)",
      "",
      "📦 Все заказы бережно упаковываются, особенно если это подарок 🎁",
    ],
  },
  {
    question: "🏢 Кто вы и что вы делаете?",
    answer: [
      "«МечтаМамы» — это креативный проект, который создаёт фотографию будущего малыша по снимкам родителей с помощью продвинутых нейросетевых технологий.",
      "",
      "📷 Это трогательный, уникальный подарок, который можно подарить:",
      "• будущей маме",
      "• подруге, сестре, супруге",
      "• семье в ожидании малыша",
      "",
      "Фото создаётся в развлекательных целях. Мы не гарантируем абсолютное сходство с будущим ребёнком. В будущем планируется возможность получения медицинского заключения.",
    ],
  },
  {
    question: "🧠 Как создаётся изображение?",
    answer: [
      "Мы используем передовые технологии искусственного интеллекта, которые анализируют черты лица родителей и создают уникальный портрет будущего малыша.",
      "",
      "Процесс полностью автоматизирован, контроллируется операторами и занимает от 24 до 48 часов.",
    ],
  },
  {
    question: "Насколько точным будет портрет?",
    answer: [
      "Наша нейросеть обучена на миллионах изображений и показывает высокую точность в предсказании черт лица.",
      "",
      "Однако это художественная интерпретация, а не медицинский прогноз. Результат может отличаться от реального внешнего вида ребенка.",
    ],
  },
  {
    question: "Сколько времени занимает создание портрета?",
    answer: [
      "Обработка фотографий занимает от 24 до 48 часов. После готовности вы получите электронную версию на email/мессенджер.",
      "",
      "Печать и оформление в рамку занимает дополнительно 2-3 рабочих дня.",
    ],
  },
  {
    question: "Можно ли заказать портрет, если у нас уже есть дети?",
    answer: [
      "Конечно! Многие родители заказывают портреты для сравнения или просто из любопытства.",
      "",
      "Это отличный способ создать уникальный семейный подарок или украшение для дома.",
    ],
  },
  {
    question: "Что делать, если результат не понравился?",
    answer: ["Мы гарантируем качество наших работ и готовы обсудить любые вопросы индивидуально."],
  },
  {
    question: "Какие размеры портретов доступны?",
    answer: [
      "Мы предлагаем портреты в форматах:",
      "• A5 (15×21 см) за 1500₽",
      "• A4 (21×30 см) за 2000₽",
      "• A3 (30×42 см) за 3000₽",
      "• A2 (42×59 см) за 5000₽",
      "",
      "Все портреты поставляются в красивых рамках.",
    ],
  },
  {
    question: "Безопасно ли предоставлять свои фотографии?",
    answer: [
      "Абсолютно безопасно. Мы используем защищенные каналы передачи данных, не храним фотографии дольше необходимого для обработки и никогда не передаем их третьим лицам.",
      "",
      "Все данные удаляются после завершения заказа.",
    ],
  },
  {
    question: "🔐 Политика конфиденциальности",
    answer: [
      "Все переданные фото и данные используются только для создания изображения.",
      "",
      "Мы не храним и не передаём ваши материалы третьим лицам.",
    ],
  },
  {
    question: "📄 Правила пользования",
    answer: [
      "Пользуясь сервисом, вы соглашаетесь:",
      "• на развлекательный характер результата",
      "• на возможные отличия от реального внешнего вида ребёнка",
      "• на то, что вы обладаете правами на передаваемые фотографии",
    ],
  },
  {
    question: "📝 Пользовательское соглашение",
    answer: [
      "Подробное пользовательское соглашение вы можете найти на нашем сайте.",
      "",
      "Оно регулирует использование сервиса, права сторон и условия возврата.",
    ],
  },
]

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
  }

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-4">Часто задаваемые вопросы</h2>
          <p className="text-xl text-neutral-600">Ответы на самые популярные вопросы о наших услугах</p>
        </motion.div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-dream-50 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-neutral-800 pr-4">{item.question}</h3>
                    <motion.div
                      animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0"
                    >
                      {openItems.includes(index) ? (
                        <ChevronUp className="w-5 h-5 text-dream-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-dream-500" />
                      )}
                    </motion.div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: openItems.includes(index) ? "auto" : 0,
                      opacity: openItems.includes(index) ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="text-neutral-600 leading-relaxed space-y-2">
                        {item.answer.map((line, lineIndex) => (
                          <p key={lineIndex} className={line === "" ? "h-2" : ""}>
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Card className="bg-dream-50 border-dream-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-neutral-800 mb-4">Не нашли ответ на свой вопрос?</h3>
              <p className="text-neutral-600 mb-6">
                Свяжитесь с нами любым удобным способом, и мы с радостью ответим на все ваши вопросы!
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-neutral-600">
                <span>📧 hello@мечтамамы.рф</span>
                <span>📱 +7 (993) 553-27-48</span>
                <span>💬 Telegram: @mechtamamy</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
