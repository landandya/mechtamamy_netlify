import { Suspense } from "react"
import PregnancyJourney from "@/components/pregnancy-journey"
import Hero from "@/components/hero"
import HowItWorks from "@/components/how-it-works"
import Examples from "@/components/examples"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"
import SpecialOfferButton from "@/components/special-offer-button"
import ReviewsButton from "@/components/reviews-button"

// Компонент загрузки
function LoadingSection() {
  return (
    <div className="w-full h-32 bg-gray-100 animate-pulse rounded-lg flex items-center justify-center">
      <div className="text-gray-400">Загрузка...</div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* Динамическая шапка */}
      <PregnancyJourney />

      <main className="min-h-screen">
        {/* Критически важный контент загружается сразу */}
        <Hero />

        {/* Кнопка с подробностями об акции */}
        <SpecialOfferButton />

        {/* Остальные секции загружаются по мере необходимости */}
        <Suspense fallback={<LoadingSection />}>
          <HowItWorks />
        </Suspense>

        <Suspense fallback={<LoadingSection />}>
          <Examples />
        </Suspense>

        {/* Кнопка для перехода на страницу отзывов */}
        <ReviewsButton />

        <Suspense fallback={<LoadingSection />}>
          <ContactForm />
        </Suspense>

        <Footer />
      </main>
    </>
  )
}
