import React from 'react'
import {mission} from '../../assets/contents/homePage'
export default function Missions() {
  return (
      <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-12">
        <div className="mx-auto lg:mx-0">
          <h2 className="text-xl font-bold tracking-tight text-primary sm:text-2xl animate-slidein500 opacity-0">NOTRE MISSION</h2>
          <p className="mt-6 text-xl text-[#54595f] lg:leading-loose text-center animate-slidein700 opacity-0">
            {mission}
          </p>
        </div>

      </section>
  )
}
