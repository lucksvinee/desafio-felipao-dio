let nomeHeroi = "Hitsuagaya"
let xpDoHeroi = 9001
let categoria = ""

switch (true){
    case  xpDoHeroi <= 1000:
        categoria = "Ferro"
        break

    case xpDoHeroi >= 1001 && xpDoHeroi <=2000:
        categoria = "Bronze" 
        break   

    case xpDoHeroi >= 2001 && xpDoHeroi <=5000:
        categoria = "Prata"
        break
        
    case xpDoHeroi >= 6001 && xpDoHeroi <=7000:
        categoria = "Ouro"
        break

    case xpDoHeroi >= 7001 && xpDoHeroi <=8000:
        categoria = "Platina"
        break
        
    case xpDoHeroi >= 8001 && xpDoHeroi <=9000:
        categoria = "Ascendente" 
        break

    case xpDoHeroi >= 9001 && xpDoHeroi <=10000:
        categoria = "Imortal" 
        break

    case xpDoHeroi >= 10001:
        categoria = "Radiante"

}

    console.log(`O herói de nome ${nomeHeroi} está no nível ${xpDoHeroi} e está no elo ${categoria} :)`)
