import { MouseEventHandler } from "react";

export interface CustomButtonProps  {
    title: string;   
containerStyles?: string;
handleClick?: 
MouseEventHandler<HTMLButtonElement>;
btnType: "button" | "submit" | "reset";
}


export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}


//specify the types of props that the component will receive
//index.ts file to export and create an interface to specify the specific structures, variables and values it should have