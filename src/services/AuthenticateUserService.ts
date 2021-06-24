import { UsersRepositories } from "../repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";
import { sign } from "jsonwebtoken";
import { compare } from "bcryptjs";


interface IAuthenticateRequest {
    email: string,
    password: string
}

class AuthenticateUserService {
    async execute({ email, password }: IAuthenticateRequest ) {
        const usersRepositories = getCustomRepository(UsersRepositories);
        //Verificando se existe o email
        const usersExists = await usersRepositories.findOne({
            email
        });

        if (!usersExists) {
            throw new Error("Email/Password Incorrect!")
        }

        //Verificando a senha, correto ? gerando token
        const passwordMath = await compare(password, usersExists.password);

        if (!passwordMath) {
            throw new Error("Email/PassWord Incorrect!")
        }

        const token = sign({
            email: usersExists.email,
        }, "5d589c15337c89b4a5ff67e923357b3b", {
            subject: usersExists.id,
            expiresIn: "15m"   
        }
    );
    return token;
    };
}

export { AuthenticateUserService }