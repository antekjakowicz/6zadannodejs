import readline from 'readline'
import fs from 'fs/promises'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function askQuestion(question) {
    return new Promise(resolve=>{
        rl.question(question, answer=>{
            resolve(answer)
        })
    })
}

async function main() {
    try{
        const name = await askQuestion("Jak masz na imie? ")
        const surname = await askQuestion("Jak masz na nazwisko? ")
        const age = await askQuestion("Ile masz lat? ")

        const userInfo = {
            name,
            surname,
            age
        }

        await fs.writeFile('userInfo.json', JSON.stringify(userInfo, null, 2))

        const data = await fs.readFile('userInfo.json','utf-8')
        const parsedData = JSON.parse(data)

        console.log("Data Log:", parsedData)
    } catch(err){
        console.log(err)
    } finally {
        rl.close()
    }
}

main()