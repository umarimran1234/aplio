import Clients from '@/components/Clients'
import Counter from '@/components/Counter'
import FAQ from '@/components/FAQ'
import Hero from '@/components/heros/Hero'
import HomeBlog from '@/components/HomeBlog'
import HomeCta from '@/components/HomeCTA'
import Integration from '@/components/Integration'
import Services from '@/components/Services'
import Solution from '@/components/Solution'
import Testimonial from '@/components/Testimonial'
import Vision from '@/components/Vision'
import './styl.css'
export const metadata = {
  title: 'Paytirement',
  description: 'Generated by StaticMania',
}
export default function Home() {
  return (
    <>
      <Hero />
      <Vision />
      <Solution />
       {/* <Clients />
       <Services />
      <Counter />
      <Integration />
      <Testimonial />
      <HomeBlog /> 
      <FAQ /> */}
      <HomeCta />
    </>
  )
}
