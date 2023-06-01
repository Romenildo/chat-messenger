
'use client'

import clsx from "clsx"
import Link from 'next/link'

interface DesktopItemProps {
    label: string
    icon: any
    href: string
    onClick?: ()=> void
    active?: boolean
}


const DesktopItem = (props:DesktopItemProps) =>{

    const handleClick = () =>{
        if(props.onClick){
            return props.onClick();
        }
    }

    return(
        <li onClick={handleClick} key={props.label}>
            <Link href={props.href}  
                className={clsx(`
                group 
                flex 
                gap-x-3 
                rounded-md 
                p-3 
                text-sm 
                leading-6 
                font-semibold 
                text-gray-500 
                hover:text-black 
                hover:bg-gray-100
                `,
                props.active && 'bg-gray-100 text-black'
            )}>
                <props.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                <span className="sr-only">{props.label}</span>
            </Link>
        </li>
    )
}


export default DesktopItem