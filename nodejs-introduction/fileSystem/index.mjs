import { readFile, writeFile } from 'fs/promises'

//readfile(absolutePath)

let template = await readFile(new URL('./template.html', import.meta.url), 'utf-8')

const data = {
    title: 'Learn Node.js',
    body: 'This is the final HTML'
}




for(const [k, v] of Object.entries(data)){
    // Object.entries(data) --> [ [ 'title', 'Learn Node.js' ], [ 'body', 'This is the final HTML' ] ]
    //k --> key
    //v --> value

    template = template.replace(`{${k}}`, v)
}

//write file

console.log(template)

await writeFile(new URL('index.html', import.meta.url), template)

