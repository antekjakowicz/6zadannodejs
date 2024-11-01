import fs from 'fs'

const watchedDir = './folder_pegasus'

function logEvent(eventType, fileName) {
    const logMsg = `${new Date().toISOString()} - ${eventType}: ${fileName}\n`
    fs.appendFile('log.txt', logMsg, (err)=>{
        if(err){
            console.log("Błąd zapisania logu")
        }
    })
}

fs.watch(watchedDir, (eventType, fileName)=>{
    if(fileName){
        if(eventType === 'rename'){
            logEvent("DODANO LUB USUNIETO", fileName)
        }
    } else if(eventType ==='change'){
        logEvent("ZMIENIONO", fileName)
    }
})

console.log("Sledze folder pegasus")