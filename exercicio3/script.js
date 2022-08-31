//Crie a const para a frase aqui

const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres:"BOAS VINDAS, mas não deixe o gato sair".`
console.log(frase)

const novafrase = frase.replaceAll("verde" , "rosa") 
const novafrase2 = novafrase.replaceAll("azul" , "laranja")
console.log(novafrase2)

console.log(novafrase2.includes("verde") && novafrase2.includes("laranja"))

let fraseExtra = novafrase2.replace("mas não deixe o gato sair", "MAS NÃO DEIXE O GATO SAIR")
console.log(fraseExtra)



// const frase3 = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS,`
// const extra = `mas não deixe o gato sair.`
// const fraseMaiuscula = extra.toUpperCase()
// console.log(frase3 + fraseMaiuscula)

//outra maneira de fazer:
//const novafrase = frase.replace("verde","rosa").replace("azul","laranja")






