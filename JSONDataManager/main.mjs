import readline from 'readline'
import fs from 'fs'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function askQuestion(question) {
    return new Promise(resolve =>
         rl.question(question, resolve)
    )
}

async function addData(filePath) {
    const name = await askQuestion("Podaj swoje imie: ")
    const age = await askQuestion("Podaj swoj wiek: ")
    const email = await askQuestion("Podaj swoj email: ")
    const userData = {name, age, email}

    let data = []
    if(fs.existsSync(filePath)){
        data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    }

    data.push(userData)
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
    console.log("Dane zostaly zapisane")
}

function displayData(filePath){
    if(fs.existsSync(filePath)){
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
        console.log("Dane z pliku JSON: ",data)
    } else {
        console.log("Plik nie isnieje")
    }
}

async function main() {
    const choice = await askQuestion("Napisz 1 aby dodac dane lub 2 aby wyswietlic dane: ")
    let filePath = await askQuestion("Podaj nazwę pliku JSON: ")
    filePath = filePath+".json"

    if(choice === "1"){
        await addData(filePath)
    } else if(choice === "2"){
        displayData(filePath)
    } else {
        console.log("Nieprawidlowy wybor")
    }

    rl.close()
}

main()