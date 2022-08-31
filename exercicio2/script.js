const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
console.log(minhaString.trim())

console.log("Antes da remoção do espaço tinham " + minhaString.length + " caracteres")

console.log("Depois da remoção ficaram " + ((minhaString.trim()).length) + " caracteres")

const novafrase = minhaString.replace("________" , "sticioso")
console.log(novafrase)