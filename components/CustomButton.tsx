"use client";
import Image from 'next/image';
import { CustomButtonProps }  from "@/types";

//default all components are server side rendered 

const CustomButton = ({title, containerStyles, handleClick, btnType} : CustomButtonProps) => {
  return (
    <button
    disabled={false}
    type={btnType || "button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
        >
        <span className={`flex-1`}>
            {title}
        </span>

    </button>
  )
}

export default CustomButton

//turn into a useable component using props
