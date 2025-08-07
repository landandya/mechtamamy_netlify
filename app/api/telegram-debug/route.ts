import { NextResponse } from "next/server"

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const TELEGRAM_API_URL = process.env.TELEGRAM_API_URL || `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}`
const ADMIN_CHAT_ID = process.env.TELEGRAM_ADMIN_CHAT_ID

export async function GET() {
  try {
    // Проверяем статус бота
    const meResponse = await fetch(`${TELEGRAM_API_URL}/getMe`)
    const meData = await meResponse.json()

    // Получаем обновления
    const updatesResponse = await fetch(`${TELEGRAM_API_URL}/getUpdates?limit=100`)
    const updatesData = await updatesResponse.json()

    // Проверяем, есть ли наш админ в обновлениях
    let adminFound = false
    let adminInfo = null

    if (updatesData.ok) {
      for (const update of updatesData.result) {
        if (update.message?.chat?.id?.toString() === ADMIN_CHAT_ID) {
          adminFound = true
          adminInfo = {
            chat_id: update.message.chat.id,
            username: update.message.chat.username,
            first_name: update.message.chat.first_name,
            last_name: update.message.chat.last_name,
            type: update.message.chat.type,
          }
          break
        }
      }
    }

    // Отправляем тестовое сообщение админу
    let testMessageSent = false
    if (adminFound) {
      try {
        const testResponse = await fetch(`${TELEGRAM_API_URL}/sendMessage`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: ADMIN_CHAT_ID,
            text: `${process.env.TELEGRAM_DEBUG_MESSAGE || "🔧 <b>Тест уведомлений МечтаМамы</b>\n\n✅ Бот работает корректно!\n⏰ "}${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })}`,
            parse_mode: "HTML",
          }),
        })

        const testData = await testResponse.json()
        testMessageSent = testData.ok
      } catch (error) {
        console.error("Ошибка отправки тестового сообщения:", error)
      }
    }

    return NextResponse.json({
      botInfo: meData,
      adminChatId: ADMIN_CHAT_ID,
      adminFound: adminFound,
      adminInfo: adminInfo,
      testMessageSent: testMessageSent,
      status: {
        botActive: meData.ok,
        adminInUpdates: adminFound,
        canSendMessages: testMessageSent,
      },
      instructions: adminFound
        ? "✅ Админ найден в обновлениях. Уведомления должны работать."
        : "❌ Админ не найден. Отправьте сообщение боту с ID 785737381.",
    })
  } catch (error) {
    return NextResponse.json({
      error: "Ошибка при получении данных Telegram",
      details: error instanceof Error ? error.message : "Неизвестная ошибка",
    })
  }
}
