export class Imovel {
    private _endereco: String
    private _bairro: String
    private _cep: String
    private _cidade: String
    private _uf: String
    private _qtdQuartos: number
    private _qtdSalas: number
    private _qtdBanheiros: number
    private _qtdCozinhas: number
    private _andares: number
    private _complemento: String
    private _valorVenal: number
    private _valorLocacao: number
    private _isLocavel: boolean
    private _isVenal: boolean
    private _situacao: String
  
    constructor(endereco: String, bairro: String, cep: String, cidade: String, uf: String, qtdQuartos: number, qtdSalas: number, qtdBanheiros: number, qtdCozinhas: number, andares: number, complemento: String, valorVenal: number, valorLocacao: number, isLocavel: boolean, isVenal: boolean, situacao: String){
      this._endereco = endereco
      this._bairro = bairro
      this._cep = cep
      this._cidade = cidade
      this._uf = uf
      this._qtdQuartos = qtdQuartos
      this._qtdSalas = qtdSalas
      this._qtdBanheiros = qtdBanheiros
      this._qtdCozinhas = qtdCozinhas
      this._andares = andares
      this._complemento = complemento
      this._valorVenal = valorVenal
      this._valorLocacao = valorLocacao
      this._isLocavel = isLocavel
      this._isVenal = isVenal
      this._situacao = situacao
    }
  
    // endereco
    public get endereco(): String{
      return this._endereco
    }
  
    public set endereco(endereco: String){
      this._endereco = endereco
    }
  
    // bairro
    public get bairro(): String{
      return this._bairro
    }
  
    public set bairro(bairro: String){
      this._bairro = bairro
    }
  
    // cep
    public get cep(): String{
      return this._cep
    }
  
    public set cep(cep: String){
      this._cep = cep
    }
  
    // cidade
    public get cidade(): String{
      return this._cidade
    }
  
    public set cidade(cidade: String){
      this._cidade = cidade
    }
  
    // uf 
    public get uf(): String{
      return this._uf
    }
  
    public set uf(uf: String){
      this._uf = uf
    }
  
    // qtdQuartos
    public get qtdQuartos(): number{
      return this._qtdQuartos
    }
  
    public set qtdQuartos(qtdQuartos: number){
      this._qtdQuartos = qtdQuartos
    }
  
    // qtdSalas
    public get qtdSalas(): number{
      return this._qtdSalas
    }
  
    public set qtdSalas(qtdSalas: number){
      this._qtdSalas = qtdSalas
    }
  
    // qtdBanheiros
    public get qtdBanheiros(): number{
      return this._qtdBanheiros
    }
  
    public set qtdBanheiros(qtdBanheiros: number){
      this._qtdBanheiros = qtdBanheiros
    }
  
    // qtdCozinhas
    public get qtdCozinhas(): number{
      return this._qtdCozinhas
    }
  
    public set qtdCozinhas(qtdCozinhas: number){
      this._qtdCozinhas = qtdCozinhas 
    }
  
    // andares
    public get andares(): number{
      return this._andares
    }
  
    public set andares(andares: number){
      this._andares = andares
    }
  
    // complemento
    public get complemento(): String{
      return this._complemento
    }
  
    public set complemento(complemento: String){
      this._complemento = complemento
    }
  
    // valorVenal
    public get valorVenal(): number{
      return this._valorVenal
    }
  
    public set valorVenal(valorVenal: number){
      this._valorVenal = valorVenal
    }
  
    // valorLocacao
    public get valorLocacao(): number{
      return this._valorLocacao
    }
  
    public set valorLocacao(valorLocacao: number){
      this._valorLocacao = valorLocacao
    }
  
    // isLocavel
    public get isLocavel(): boolean{
      return this._isLocavel
    }
  
    public set isLocavel(isLocavel: boolean){
      this._isLocavel = isLocavel
    }
  
    // isVenal
    public get isVenal(): boolean{
      return this._isVenal
    }
  
    public set isVenal(isVenal: boolean){
      this._isVenal = isVenal
    }
  
    // situacao
    public get situacao(): String{
      return this._situacao
    }
  
    public set situacao(situacao: String){
      this._situacao = situacao
    }
}
  
  