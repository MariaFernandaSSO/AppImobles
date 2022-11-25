import { Pessoa } from "./Pessoa"

export class Usuario extends Pessoa{
    username: string
    password: string
    ativo: boolean
}