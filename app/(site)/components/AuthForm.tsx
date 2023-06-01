'use client'//é necessario caso vai manipular com o cliente utilizando useEffects hooks useState...


import Input from "@/app/components/inputs/Input"
//npm install react-icons react-hook-form clsx
//react icons:  adiciona icons 
//reacct hook form: permite a utilização de hooks para manipular os FOrmularios
//clsx:

import { useCallback, useState } from "react"
import { useForm, FieldValues, SubmitHandler } from "react-hook-form"
type TypeForm = 'LOGIN' | 'REGISTER'

const AuthForm = ()=>{
    const [typeForm, setTypeForm] = useState<TypeForm>('LOGIN')
    const [isLoading, setIsLoading] = useState(false)


    //alternar entre Login e registro de usuarios
    const toggleTypeForm = useCallback(()=>{
        typeForm === 'LOGIN' ? setTypeForm('REGISTER'): setTypeForm('LOGIN')

    },[typeForm])


    //Use form já cria todas as funções necessarias e os campos que estarão no formulario
    const {
        register,
        handleSubmit,
        formState:{
            errors
        }
    } = useForm<FieldValues>({
        defaultValues:{
            name: '',
            email: '',
            password: ''
        }
    })

    //Funccoes para logar ou registrar
    const onSubmit: SubmitHandler<FieldValues> = (data)=>{
        setIsLoading(true)

        if(typeForm === 'REGISTER'){
            //do
        }
        if(typeForm === 'LOGIN'){
            //do this
        }

    }

    const socialAction = (action: string)=>{
        setIsLoading(true)
        //do
    }


    return(
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">

                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <Input id="name" label="name" register={register} errors={errors} />
                    <Input id="email" label="Email" register={register} errors={errors} />
                    <Input id="password" label="password" register={register} errors={errors} />

                </form>

            </div>
        </div>

    )
}

export default AuthForm