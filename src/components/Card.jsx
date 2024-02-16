import React from "react";
import { LuFileText } from "react-icons/lu";
import { MdDownloadForOffline } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { motion } from "framer-motion"

const Card = ({data, reference}) => {
  return (
    <>
      <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} className="relative w-60 h-72 bg-zinc-900/90 rounded-[40px] text-white overflow-hidden">
        <LuFileText className="absolute top-4 left-8" />
        <p className="text-sm leading-tight mt-16 px-5 font-semibold">
          {data.desc}
        </p>
        <div className="footer absolute w-[100%] h-20 bottom-0">
            <div className="relative">
                <div className="absolute left-4">{data.fileSize}</div>
                <div className="absolute right-4 text-2xl">
                  {data.close ? <IoMdCloseCircle className="text-slate-400" /> : <MdDownloadForOffline  className="text-slate-400"/>}
                </div>
            </div>
            {data.tag.isOpen && (
              <div className={`absolute bottom-0 ${data.tag.tagcolor ==="blue" ? "bg-blue-600": "bg-green-600"} w-[100%] h-12 text-center items-center flex justify-center`}>{data.tag.tagTitle}</div>
            )}
            
        </div>
      </motion.div>
    </>
  );
};

export default Card;
