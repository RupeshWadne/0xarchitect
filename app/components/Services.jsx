'use client'
import React from 'react'
import { projects } from '../const/data'
import Card from './card/Card'
import { useScroll } from 'framer-motion'
import { useRef, useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

const Services = () => {

    useEffect( () => {
        const lenis = new Lenis()
        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
      })

  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  return (
    <div className="mt-20 mb-20 flex flex-col items-center w-1/3">
      <h1 className="text-3xl font-bold">Services</h1>
      <p className="text-sm text-center mt-4">
        Discover out comprehensive suite of services, meticulously crafted to
        elevate your business through innovate solutions
      </p>
      <main ref={container}>
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05
          return (
            <Card
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          )
        })}
      </main>
    </div>
  )
}

export default Services
