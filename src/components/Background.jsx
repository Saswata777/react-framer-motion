import React from 'react'

const Background = () => {
  return (
    <>
        <div className="w-full h-screen z-[2] fixed">
            <div className="absolute top-[5%] w-full p-10 text-slate-600 flex justify-center font-semibold text-xl">Documentation</div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tighter font-semibold text-slate-900">
            Docs.
            </h1>
        </div>
    </>
  )
}

export default Background