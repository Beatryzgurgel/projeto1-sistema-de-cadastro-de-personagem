const Personagem = require("./class/Personagem")

const raven = new Personagem("Raven", "guerreiro", 170)
const everson = new Personagem("Everson", "mago", 40)
const beatryz = new Personagem("Beatryz", "arqueiro", 60)

raven.ataque()
raven.mostraInfo()

everson.ataque()
everson.mostraInfo()

beatryz.ataque()
beatryz.mostraInfo()