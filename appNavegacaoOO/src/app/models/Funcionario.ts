import { Usuario } from "./Usuario"

export class Funcionario extends Usuario {
    data_admissao: Date
    salario: number
    cargo: string
}