export class Locador {
  private _nome : String 
  private _telefone : String
  private _dataNascimento: Date
  private _email : String
  private _fone : String
  private _sexo : String
  private _rendaMensal: number
  private _nomeFiador: String

 constructor(nome: String, telefone: String, dataNascimento: Date, email: String, fone: String, sexo: String, rendaMensal: number, nomeFiador: String) {
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
 public set nome(nome: String){
   this._nome = nome
 }
 
 public get nome(): String{
   return this._nome
}

 // Telefone
 public set telefone(telefone: String){
  this._telefone = telefone
}

public get telefone(): String{
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
 public set email(email: String){
  this._email = email
}

public get email(): String{
  return this._email
}

 // Fone
 public set fone(fone: String){
  this._fone = fone
}

public get fone(): String{
  return this._fone
}

 // Sexo
 public set sexo(sexo: String){
  this._sexo = sexo
}

public get sexo(): String{
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
public set nomeFiador(nomeFiador: String){
  this._nomeFiador = nomeFiador
}

public get nomeFiador(): String{
  return this._nomeFiador
}

}
