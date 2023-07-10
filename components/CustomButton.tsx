"use client";
import Image from "next/image"
//default all components are server side rendered 

const CustomButton = () => {
  return (
    <button
    disabled={false}
    type={"button"}
    className={`custom-btn`}
    onClick={()=>{}}
        >
        <span className={`flex-1`}>
            Title
        </span>

    </button>
  )
}

export default CustomButton
