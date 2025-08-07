import type { Metadata } from "next"
import FAQClientPage from "./FAQClientPage"

export const metadata: Metadata = {
  title: "Часто задаваемые вопросы | МечтаМамы",
  description:
    "Ответы на самые популярные вопросы о создании фотографий будущего малыша с помощью нейросетей. Узнайте все о наших услугах.",
  keywords: "FAQ, вопросы, ответы, МечтаМамы, фото малыша, нейросеть",
  openGraph: {
    title: "Часто задаваемые вопросы | МечтаМамы",
    description: "Ответы на самые популярные вопросы о создании фотографий будущего малыша",
    type: "website",
  },
}

export default function FAQPage() {
  return <FAQClientPage />
}
