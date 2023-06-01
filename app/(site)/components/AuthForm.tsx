'use client'//é necessario caso vai manipular com o cliente utilizando useEffects hooks useState...


import Button from "@/app/components/Button"
import Input from "@/app/components/inputs/Input"
//react icons:  adiciona icons 
//reacct hook form: permite a utilização de hooks para manipular os FOrmularios

import axios from "axios"
import { useCallback, useState } from "react"
import { useForm, FieldValues, SubmitHandler } from "react-hook-form"
import { BsGoogle} from 'react-icons/bs'

import AuthSocialButton from "./AuthSocialButton"

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
            axios.post('/api/register', data)
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

                    {/* Name so vai aparecer see for para rgistrar um novo usuario */}
                    {typeForm ==="REGISTER" && (
                        <Input id="name" label="Nome" register={register} errors={errors} />
                    )}
                    <Input id="email" label="Email" type="email" register={register} errors={errors} />
                    <Input id="password" label="Senha" type="password" register={register} errors={errors} />

                    <div>
                        <Button 
                            disabled={isLoading}
                            fullWidth
                            type="submit"

                        >{typeForm ==='LOGIN'? "Login": "Registrar"}</Button>
                    </div>
                </form>

                <div className="mt-6">

                    <div className="relative">
                        {/*Linha cinza no fundo */}
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300" />
                        </div>
                        {/* NOme no centro da linha */}
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-white px-2 text-gray-500">Ou continue com</span>
                        </div>
                    </div>
                    
                    <div className="mt-6 fleex gap-2">
                        <AuthSocialButton icon={BsGoogle} onClick={()=>socialAction('google')}/>
                    </div>

                </div>
                <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
                    <div>
                        {typeForm === 'LOGIN'?'Novo por Aqui?': 'Já possui uma conta?'}
                    </div>
                    <div onClick={toggleTypeForm} className="underline cursor-pointer">
                        {typeForm === 'LOGIN'?'Crie uma conta': 'Login'}
                    </div>

                </div>




            </div>
        </div>

    )
}

export default AuthForm