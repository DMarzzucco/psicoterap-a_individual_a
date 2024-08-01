import {headerlogo}from "@/assets"
import Image from "next/image"

export default function Header() {
    return (
        <header className="flex justify-center items-center w-full">
            <Image width={305} height={70} src={headerlogo} alt="" />
        </header>
    )
}