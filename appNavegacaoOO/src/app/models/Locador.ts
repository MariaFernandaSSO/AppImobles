export class Locador {
  private _nome : string 
  private _telefone : string
  private _dataNascimento: Date
  private _email : string
  private _fone : string
  private _sexo : string
  private _rendaMensal: number
  private _nomeFiador: string

 constructor(nome: string, telefone: string, dataNascimento: Date, email: string, fone: string, sexo: string, rendaMensal: number, nomeFiador: string) {
   this._nome = nome
   this._telefone = telefone
   this._dataNascimento = dataNascimento
   this._email = email
   this._fone = fone
   this._sexo = sexo
   this._rendaMensal = rendaMensal
   this._nomeFiador = nomeFiador
 }

 // Nome
 public set nome(nome: string){
   this._nome = nome
 }
 
 public get nome(): string{
   return this._nome
}

 // Telefone
 public set telefone(telefone: string){
  this._telefone = telefone
}

public get telefone(): string{
  return this._telefone
}

 // Data de Nascimento
 public set dataNascimento(dataNascimento: Date){
  this._dataNascimento = dataNascimento
}

public get dataNasc(): Date{
  return this._dataNascimento
}

 // Email
 public set email(email: string){
  this._email = email
}

public get email(): string{
  return this._email
}

 // Fone
 public set fone(fone: string){
  this._fone = fone
}

public get fone(): string{
  return this._fone
}

 // Sexo
 public set sexo(sexo: string){
  this._sexo = sexo
}

public get sexo(): string{
  return this._sexo
}

 // Renda Mensal
 public set rendaMensal(rendaMensal: number){
  this._rendaMensal = rendaMensal
}

public get rendaMensal(): number{
  return this._rendaMensal
}

// Nome do Fiador
public set nomeFiador(nomeFiador: string){
  this._nomeFiador = nomeFiador
}

public get nomeFiador(): string{
  return this._nomeFiador
}

}
