export class Proprietario {
    private _nome: string
    private _telefone: string
    private _dataNascimento: Date
    private _sexo: string
    private _fone: string
    private _email: string
  
    constructor(nome: string, telefone: string, dataNascimento: Date, sexo: string, fone: string, email: string){
      this._nome = nome
      this._telefone = telefone
      this._dataNascimento = dataNascimento
      this._sexo = sexo
      this._fone = fone
      this._email = email
    }
  
    // nome
    public get nome(): string{
        return this._nome
    }
  
    public set nome(nome: string){
        this._nome = nome
    }
  
    // telefone
    public get telefone(): string{
        return this._telefone
    }
  
    public set telefone(telefone: string){
        this._telefone = telefone
    }
  
    // dataNascimento
    public get dataNascimento(): Date{
        return this._dataNascimento
    }
  
    public set dataNascimento(dataNascimento: Date){
        this._dataNascimento = dataNascimento
    }
  
    // sexo
    public get sexo(): string{
        return this._sexo
    }
  
    public set sexo(sexo: string){
        this._sexo = sexo
    }
  
    // fone
    public get fone(): string{
        return this._fone
    }
  
    public set fone(fone: string){
        this._fone = fone
    }
  
    // email
    public get email(): string{
        return this._email
    }
  
    public set email(email: string){
        this._email = email
    }
}
  