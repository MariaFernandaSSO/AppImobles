import { Usuario } from "./Usuario";

export class Cliente extends Usuario {
    sexo: string
    data_nascimento: Date
    data_cadastro: Date
    orientacao: string
    nome_social: string
    raca: string
    deficiencia: boolean
    descricao_deficiencia: string
}