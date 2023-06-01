import bcrypt from "bcrypt";

import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {

    //pega o body ddda requisicao e pega somente o eemail nome e senha
  const body = await request.json();
  const { email, name, password} = body;

  //criptografa a senha para salvar no banco
  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword
    }
  });

  return NextResponse.json(user);
}