'use Client'

import clsx from 'clsx'

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset' | undefined
    fullWidth?: boolean;
    children?: React.ReactNode
    onClick?: () => void
    secondary?: boolean
    danger?: boolean
    disabled?: boolean
}


const Button = (props:ButtonProps) =>{
    return(
        <button 
            onClick={props.onClick}
            type={props.type}
            disabled= {props.disabled}
            className={clsx(`
            flex
            justify-center
            rounded-md
            px-3
            py-2
            txt-sm
            font-smibold
            focus-visible:outline
            focus-visible:outline-2
            focus-visible:outline-offset-2
            `,
            props.disabled && "opacity-50 cursor-default",
            props.fullWidth && "w-full",
            props.secondary ? 'text-gray-900': 'text-white',
            props.danger && 'bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600',
            !props.secondary && !props.danger && 'bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600'
            )}
        >
            {props.children}
        </button>
    )
}

export default Button