import Image from "next/image";


export default function Home() {
    return (
      <div className="
        flex
        min-h-full
        flex-col
        py-12
        sm:px-6
        lg:px-8
        bg-gray-100
      "
      >
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <Image alt="logo" height="48" width="48" className="mx-auto w-auto" src="/images/logo.jpg"/>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                Entre com sua Conta
            </h2>
        </div>
      </div>
    )
  }
  