import { readFile } from 'fs/promises'

process.on('uncaughtException', (e) =>{
    console.log(e);
})

let template = await readFile(new URL('./template.html', import.meta.url), 'utf-8')



console.log('test');