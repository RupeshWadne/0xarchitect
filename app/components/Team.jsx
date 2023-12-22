import React from 'react'
import { team } from '../const/data'
import Image from 'next/image'

const Team = () => {
  return (
    <div className="mt-20 mb-20 flex flex-col items-center w-1/3">
      <h1 className="text-3xl font-bold">Team</h1>
      <p className="text-sm text-center mt-4">Meet our dynamic team</p>
      <div className="flex flex-wrap justify-center items-center p-5 w-[80vw]">
        {team.map((member, i) => {
          return (
            <div key={i} className="flex flex-col items-center gap-2 w-[55vh] h-[35vh] my-4">
                <Image
                  className="rounded-full"
                  alt="image"
                  width={150}
                  height={150}
                  src={`/${member.src}`}
                />
                <h1 className="font-bold text-xl">{member.name}</h1>
                <p>{member.role}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Team
