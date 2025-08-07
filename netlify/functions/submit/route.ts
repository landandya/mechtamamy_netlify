import { type NextRequest, NextResponse } from "next/server"

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const TELEGRAM_API_URL = process.env.TELEGRAM_API_URL || `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}`

// Конкретный chat_id для получения уведомлений
const ADMIN_CHAT_ID = process.env.TELEGRAM_ADMIN_CHAT_ID as string

if (!ADMIN_CHAT_ID) throw new Error('TELEGRAM_ADMIN_CHAT_ID is not set');

// Функция для отправки сообщения в конкретный чат
async function sendTelegramMessage(chatId: string, message: string) {
  try {
    const response = await fetch(`${TELEGRAM_API_URL}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "HTML",
      }),
    })

    const data = await response.json()

    if (!data.ok) {
      console.error(`Ошибка отправки в чат ${chatId}:`, data.description)
      return false
    }

    console.log(`Сообщение успешно отправлено в чат ${chatId}`)
    return true
  } catch (error) {
    console.error(`Ошибка отправки сообщения в чат ${chatId}:`, error)
    return false
  }
}

// Функция для проверки работоспособности бота
async function checkBotStatus() {
  try {
    const response = await fetch(`${TELEGRAM_API_URL}/getMe`)
    const data = await response.json()

    if (data.ok) {
      console.log("Бот активен:", data.result.username)
      return true
    } else {
      console.error("Бот не активен:", data.description)
      return false
    }
  } catch (error) {
    console.error("Ошибка проверки статуса бота:", error)
    return false
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, contact, size, comment, agreeToTerms, agreeToPrivacy, agreeToMarketing } = body

    // Валидация обязательных полей
    if (!name || !contact || !size) {
      return NextResponse.json({ error: "Заполните все обязательные поля" }, { status: 400 })
    }

    // Проверка согласия с условиями
    if (!agreeToTerms || !agreeToPrivacy) {
      return NextResponse.json(
        {
          error: "Необходимо согласиться с пользовательским соглашением и публичной офертой",
        },
        { status: 400 },
      )
    }

    // Получаем размер и цену
    const sizeLabels: { [key: string]: string } = {
      a2: process.env.SIZE_LABEL_A2 || "A2 (42×59 см) - 5000₽",
      a3: process.env.SIZE_LABEL_A3 || "A3 (30×42 см) - 3000₽",
      a4: process.env.SIZE_LABEL_A4 || "A4 (21×30 см) - 2000₽",
      a5: process.env.SIZE_LABEL_A5 || "A5 (15×21 см) - 1500₽",
    }

    const sizeLabel = sizeLabels[size] || size

    // Формируем сообщение для Telegram
    const telegramMessage = `
${process.env.TELEGRAM_MESSAGE_HEADER || "🎨 <b>НОВАЯ ЗАЯВКА НА ПОРТРЕТ!</b>"}

👤 <b>Имя:</b> ${name}
📞 <b>Контакт:</b> ${contact}
📏 <b>Размер:</b> ${sizeLabel}
${comment ? `💬 <b>Комментарий:</b> ${comment}` : ""}

✅ <b>Согласия:</b>
• Пользовательское соглашение: ✅
• Публичная оферта: ✅
• Рекламные материалы: ${agreeToMarketing ? "✅" : "❌"}

⏰ <b>Время:</b> ${new Date().toLocaleString("ru-RU", {
      timeZone: "Europe/Moscow",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    })}

🌐 <b>Источник:</b> МечтаМамы.рф

#новая_заявка #портрет #mechtamamy
    `.trim()

    // Проверяем статус бота
    const botActive = await checkBotStatus()
    if (!botActive) {
      console.warn("Бот недоступен, но заявка будет обработана")
    }

    // Отправляем уведомление конкретному пользователю
    let telegramSent = false
    if (botActive) {
      console.log(`Отправляем уведомление пользователю ${ADMIN_CHAT_ID}`)
      telegramSent = await sendTelegramMessage(ADMIN_CHAT_ID, telegramMessage)

      if (telegramSent) {
        console.log("✅ Уведомление в Telegram отправлено успешно")
      } else {
        console.error("❌ Не удалось отправить уведомление в Telegram")
      }
    }

    // Логируем заявку в консоль
    console.log("=== НОВАЯ ЗАЯВКА ===")
    console.log("Имя:", name)
    console.log("Контакт:", contact)
    console.log("Размер:", sizeLabel)
    console.log("Комментарий:", comment || "Нет")
    console.log("Согласия:", {
      terms: agreeToTerms,
      privacy: agreeToPrivacy,
      marketing: agreeToMarketing,
    })
    console.log("Время:", new Date().toISOString())
    console.log("Telegram отправлено:", telegramSent ? "Да" : "Нет")
    console.log("==================")

    // Имитация обработки заявки
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json(
      {
        message: "Заявка успешно отправлена",
        telegramSent: telegramSent,
        adminNotified: telegramSent,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Ошибка обработки заявки:", error)
    return NextResponse.json({ error: "Внутренняя ошибка сервера" }, { status: 500 })
  }
}
