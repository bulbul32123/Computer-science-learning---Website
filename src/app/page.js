import CoursesSection from '@/components/CoursesSection'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Testimonial from '@/components/Testimonial'

export default function Home() {
  return (
    <>
      <div className="pl-5 pr-5 md:pl-20 md:pr-20 3xl:pl-80 3xl:pr-80 relative h-full w-full">
        <Navbar />
        <Hero />
        <CoursesSection />
        <Testimonial />
      </div>
      <Footer />
    </>
  )
}
