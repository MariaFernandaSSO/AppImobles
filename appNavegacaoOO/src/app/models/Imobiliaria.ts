export class Imobiliaria {
  private _nome : String 
  private _endereco : String
  private _cidade : String 
  private _bairro: String
  private _fone: String
  private _site: String

 constructor(nome: String, endereco: String, cidade: String, bairro: String, fone: String, site: String) {
   this._nome = nome
   this._endereco = endereco
   this._cidade = cidade
   this._bairro = bairro
   this._fone = fone
   this._site = site
 }

 // Nome
 public set nome(nome: String){
   this._nome = nome
 }
 
 public get nome(): String{
   return this._nome
}

 // Endereco

 public set endereco(endereco: String){
   this._endereco = endereco
 }

 public get endereco(): String {
   return this._endereco
 }

 // Cidade
 
 public set cidade(cidade: String){
   this._cidade = cidade 
 }

 public get cidade(): String {
   return this._cidade
 }

 // Bairro

 public set bairro(bairro: String){
   this._bairro = bairro
 }

 public get bairro(): String {
   return this._bairro
 }
 // Fone

 public set fone(fone: String){
   this._fone = fone
 }

 public get fone(): String {
   return this._fone;
 }

 // Site

 public set site(site: String){
   this._fone = site
 }

 public get site(): String {
   return this._site
 }
}
