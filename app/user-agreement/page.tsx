"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function UserAgreementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dream-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-4">Пользовательское соглашение</h1>
          <p className="text-xl text-neutral-600">МечтаМамы</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-center text-2xl text-neutral-800">Условия использования сайта</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-neutral max-w-none">
              <div className="space-y-6 text-neutral-700 leading-relaxed">
                <p>
                  Настоящее Пользовательское Соглашение (Далее Соглашение) регулирует отношения между владельцем
                  мечтамамы.рф (далее МечтаМамы или Администрация) с одной стороны и пользователем сайта с другой.
                </p>
                <p>Сайт МечтаМамы не является средством массовой информации.</p>
                <p>
                  <strong>Используя сайт, Вы соглашаетесь с условиями данного соглашения.</strong>
                </p>
                <p>Если Вы не согласны с условиями данного соглашения, не используйте сайт МечтаМамы!</p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">Предмет соглашения</h3>
                <p>Администрация предоставляет пользователю право на размещение на сайте следующей информации:</p>
                <ul className="list-disc pl-6">
                  <li>Текстовой информации</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">Права и обязанности сторон</h3>

                <h4 className="text-lg font-semibold text-neutral-800 mt-6 mb-3">Пользователь имеет право:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>осуществлять поиск информации на сайте</li>
                  <li>получать информацию на сайте</li>
                  <li>распространять информацию на сайте</li>
                  <li>комментировать контент, выложенный на сайте</li>
                  <li>копировать информацию на другие сайты с разрешения Администрации сайта</li>
                  <li>использовать информацию сайта в личных некоммерческих целях</li>
                </ul>

                <h4 className="text-lg font-semibold text-neutral-800 mt-6 mb-3">Администрация имеет право:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>по своему усмотрению и необходимости создавать, изменять, отменять правила</li>
                  <li>ограничивать доступ к любой информации на сайте</li>
                </ul>

                <h4 className="text-lg font-semibold text-neutral-800 mt-6 mb-3">Пользователь обязуется:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>обеспечить достоверность предоставляемой информации</li>
                  <li>
                    не распространять информацию, которая направлена на пропаганду войны, разжигание национальной,
                    расовой или религиозной ненависти и вражды
                  </li>
                  <li>не нарушать работоспособность сайта</li>
                  <li>не совершать действия, направленные на введение других Пользователей в заблуждение</li>
                  <li>
                    не регистрировать учетную запись от имени или вместо другого лица за исключением случаев,
                    предусмотренных законодательством РФ
                  </li>
                  <li>
                    не размещать материалы рекламного, эротического, порнографического или оскорбительного характера
                  </li>
                  <li>не использовать скрипты (программы) для автоматизированного сбора информации</li>
                </ul>

                <h4 className="text-lg font-semibold text-neutral-800 mt-6 mb-3">Администрация обязуется:</h4>
                <ul className="list-disc pl-6">
                  <li>
                    поддерживать работоспособность сайта за исключением случаев, когда это невозможно по независящим от
                    Администрации причинам
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">Ответственность сторон</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>пользователь лично несет полную ответственность за распространяемую им информацию</li>
                  <li>
                    администрация не несет никакой ответственности за достоверность информации, скопированной из других
                    источников
                  </li>
                  <li>
                    администрация не несёт ответственность за несовпадение ожидаемых Пользователем и реально полученных
                    услуг (за исключением согласованного фото будущего малыша)
                  </li>
                  <li>администрация не несет никакой ответственности за услуги, предоставляемые третьими лицами</li>
                  <li>
                    в случае возникновения форс-мажорной ситуации Администрация не гарантирует сохранность информации и
                    бесперебойную работу ресурса
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">Условия действия Соглашения</h3>
                <p>Данное Соглашение вступает в силу при любом использовании данного сайта.</p>
                <p>Соглашение перестает действовать при появлении его новой версии.</p>
                <p>
                  Администрация оставляет за собой право в одностороннем порядке изменять данное соглашение по своему
                  усмотрению.
                </p>
                <p>Администрация не оповещает пользователей об изменении в Соглашении.</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
          <Link href="/">
            <Button className="bg-dream-500 hover:bg-dream-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Вернуться на главную
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
