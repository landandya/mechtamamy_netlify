# МечтаМамы - Портрет будущего ребенка

## Описание проекта
Веб-приложение для создания портретов будущих детей с помощью нейросетей по фотографиям родителей. Проект мигрирован с Vercel на Netlify.

## Технологии
- **Frontend**: Next.js 15, TypeScript, TailwindCSS, Framer Motion
- **UI**: shadcn/ui компоненты
- **Backend**: Next.js API Routes (автоматически развертываются как Netlify Functions)
- **Интеграции**: Telegram Bot API, Яндекс.Метрика
- **Хостинг**: Netlify

## Структура проекта

```
├── app/
│   ├── api/                    # API routes (автоматически становятся Netlify Functions)
│   │   ├── submit/            # Обработка заявок
│   │   └── telegram-debug/    # Отладка Telegram бота
│   ├── faq/                   # Страница FAQ
│   ├── reviews/               # Страница отзывов
│   ├── special-offer/         # Страница акции
│   ├── user-agreement/        # Пользовательское соглашение
│   ├── public-offer/          # Публичная оферта
│   ├── not-found.tsx          # 404 страница
│   ├── layout.tsx             # Основной layout
│   └── page.tsx               # Главная страница
├── components/                # React компоненты
│   ├── ui/                    # shadcn/ui компоненты
│   ├── contact-form.tsx       # Форма заказа
│   ├── hero.tsx               # Главный баннер
│   ├── how-it-works.tsx       # Как это работает
│   ├── examples.tsx           # Примеры работ
│   ├── reviews.tsx            # Отзывы
│   ├── faq.tsx                # FAQ компонент
│   └── ...                    # Другие компоненты
├── public/                    # Статические файлы
│   ├── *.jpg, *.png          # Изображения
│   ├── robots.txt            # SEO
│   ├── sitemap.xml           # Карта сайта
│   └── sw.js                 # Service Worker
└── netlify.toml              # Конфигурация Netlify
```

## Особенности миграции

### API Routes → Netlify Functions
- API routes автоматически развертываются как Netlify Functions
- Поддерживается полная совместимость с Next.js API
- Переменные окружения настраиваются в панели Netlify

### Telegram Integration
Проект интегрирован с Telegram Bot API для:
- Получения уведомлений о новых заявках
- Отладки и мониторинга работы бота

### SEO и производительность
- Настроена Яндекс.Метрика
- Оптимизированы изображения
- Настроен Service Worker для кэширования
- Добавлены meta-теги и Open Graph

## Настройка окружения

1. Скопируйте `.env.example` в `.env.local`:
```bash
cp .env.example .env.local
```

2. Заполните переменные окружения:
```env
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_ADMIN_CHAT_ID=your_chat_id
```

## Развертывание на Netlify

1. Подключите репозиторий к Netlify
2. Настройте переменные окружения в панели Netlify
3. Netlify автоматически определит Next.js и настроит сборку

### Переменные окружения для Netlify:
- `TELEGRAM_BOT_TOKEN` - токен Telegram бота
- `TELEGRAM_ADMIN_CHAT_ID` - ID чата для уведомлений
- `NEXT_PUBLIC_YANDEX_METRIKA_ID` - ID Яндекс.Метрики

## Локальная разработка

```bash
# Установка зависимостей
pnpm install

# Запуск в режиме разработки
pnpm dev

# Сборка для продакшена
pnpm build
```

## Основные функции

### 🎨 Создание портретов
- Форма заказа с выбором размера
- Интеграция с Telegram для уведомлений
- Система согласий и правовых документов

### 📱 Адаптивный дизайн
- Полностью адаптивный интерфейс
- Оптимизация для мобильных устройств
- Современные анимации с Framer Motion

### 🔧 Административные функции
- Отладка Telegram бота через `/api/telegram-debug`
- Логирование всех заявок
- Система уведомлений

## Структура данных заявки

```typescript
interface OrderData {
  name: string              // Имя клиента
  contact: string          // Email или телефон
  size: 'a2'|'a3'|'a4'|'a5' // Размер портрета
  comment?: string         // Дополнительный комментарий
  agreeToTerms: boolean    // Согласие с условиями
  agreeToPrivacy: boolean  // Согласие с офертой
  agreeToMarketing: boolean // Согласие на рекламу
}
```

## Мониторинг и аналитика
- Яндекс.Метрика для отслеживания посещений
- Логирование API запросов
- Telegram уведомления о новых заявках

## Поддержка
- Email: hello@мечтамамы.рф
- Telegram: @mechtamamy
- Телефон: +7 (993) 553-27-48