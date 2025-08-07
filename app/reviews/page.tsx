import type { Metadata } from "next"
import ReviewsClientPage from "./ReviewsClientPage"

export const metadata: Metadata = {
  title: "Отзывы клиентов | Мечта Мамы - Портреты будущих детей",
  description:
    "Читайте реальные отзывы родителей о наших портретах будущих детей. Более 1000 довольных семей уже получили свои волшебные портреты.",
  keywords: "отзывы, портреты детей, мечта мамы, отзывы клиентов, портреты будущих детей",
  openGraph: {
    title: "Отзывы наших клиентов - Мечта Мамы",
    description: "Реальные истории и отзывы родителей о портретах будущих детей",
    type: "website",
  },
}

export default function ReviewsPage() {
  return <ReviewsClientPage />
}
