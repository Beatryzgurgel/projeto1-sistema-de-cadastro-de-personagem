class Personagem{
    #vida
    constructor(nome, classe, vida){
        this.nome = nome
        this.classe = classe
        this.#vida = vida
    }
    ataque(){
        console.log(`O personagem ${this.nome} atacou`)
    }
    mostraInfo(){
        console.log(`
            nome: ${this.nome}
            classe: ${this.classe}
            pontos de vida: ${this.#vida}
            ` )
    }
}
module.exports = Personagem