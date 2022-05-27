export class Proprietario {
    private _nome: String
    private _telefone: String
    private _dataNascimento: Date
    private _sexo: String
    private _fone: String
    private _email: String
  
    constructor(nome: String, telefone: String, dataNascimento: Date, sexo: String, fone: String, email: String){
      this._nome = nome
      this._telefone = telefone
      this._dataNascimento = dataNascimento
      this._sexo = sexo
      this._fone = fone
      this._email = email
    }
  
    // nome
    public get nome(): String{
        return this._nome
    }
  
    public set nome(nome: String){
        this._nome = nome
    }
  
    // telefone
    public get telefone(): String{
        return this._telefone
    }
  
    public set telefone(telefone: String){
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
    public get sexo(): String{
        return this._sexo
    }
  
    public set sexo(sexo: String){
        this._sexo = sexo
    }
  
    // fone
    public get fone(): String{
        return this._fone
    }
  
    public set fone(fone: String){
        this._fone = fone
    }
  
    // email
    public get email(): String{
        return this._email
    }
  
    public set email(email: String){
        this._email = email
    }
}
  