export class Imovel {
    private _endereco: string
    private _bairro: string
    private _cep: string
    private _cidade: string
    private _uf: string
    private _qtdQuartos: number
    private _qtdSalas: number
    private _qtdBanheiros: number
    private _qtdCozinhas: number
    private _andares: number
    private _complemento: string
    private _valorVenal: number
    private _valorLocacao: number
    private _isLocavel: boolean
    private _isVenal: boolean
    private _situacao: string
  
    constructor(endereco: string, bairro: string, cep: string, cidade: string, uf: string, qtdQuartos: number, qtdSalas: number, qtdBanheiros: number, qtdCozinhas: number, andares: number, complemento: string, valorVenal: number, valorLocacao: number, isLocavel: boolean, isVenal: boolean, situacao: string){
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
    public get endereco(): string{
      return this._endereco
    }
  
    public set endereco(endereco: string){
      this._endereco = endereco
    }
  
    // bairro
    public get bairro(): string{
      return this._bairro
    }
  
    public set bairro(bairro: string){
      this._bairro = bairro
    }
  
    // cep
    public get cep(): string{
      return this._cep
    }
  
    public set cep(cep: string){
      this._cep = cep
    }
  
    // cidade
    public get cidade(): string{
      return this._cidade
    }
  
    public set cidade(cidade: string){
      this._cidade = cidade
    }
  
    // uf 
    public get uf(): string{
      return this._uf
    }
  
    public set uf(uf: string){
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
    public get complemento(): string{
      return this._complemento
    }
  
    public set complemento(complemento: string){
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
    public get situacao(): string{
      return this._situacao
    }
  
    public set situacao(situacao: string){
      this._situacao = situacao
    }
}
  
  