import React from 'react'
import {vision} from '../../assets/contents/homePage'
export default function Vision() {
  return (
      <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-12">
        <div className="mx-auto lg:mx-0">
          <h2 className="text-xl font-bold tracking-tight text-primary sm:text-2xl animate-slidein500 opacity-0">Notre vision</h2>
          <p className="mt-6 text-xl l leading-loose text-justify animate-slidein700 opacity-0">
            {vision}
          </p>
        </div>

      </section>
  )
}
