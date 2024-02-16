import React, { useRef } from 'react'
import Card from './Card'


const Foreground = () => {
  const ref = useRef(null);
  const data = [{
    desc:"Contract for the provision of paid veterinary services vet.city",
    fileSize:"0.9mb",
    close: false,
    tag: {isOpen: true, tagTitle: "Download Now", tagcolor:"green"},
  },
  {
    desc:"Conditions for processing personal data. e vet.city",
    fileSize:"0.9mb",
    close: false,
    tag: {isOpen: true, tagTitle: "Download Now", tagcolor:"blue"},
  },
  {
    desc:"Conditions for processing personal data. e vet.city",
    fileSize:"0.9mb",
    close: false,
    tag: {isOpen: false, tagTitle: "Download Now", tagcolor:"green"},
  }
]
  return (
    <>
        <div ref={ref} className="fixed z-[3] top-0 left-0 w-full h-full flex flex-wrap gap-10 p-10">
           {data.map((item,index)=>{
            return(
              <Card key={index} data={item} reference={ref}/>
            )
           })}
        </div>
    </>
  )
}

export default Foreground