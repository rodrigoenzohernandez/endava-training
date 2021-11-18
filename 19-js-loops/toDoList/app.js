/**
 * new      --> add a toDo
 * list     --> list all toDo's
 * delete   --> Remove specific todo with index
 * quit     --> quit app
 * other    --> keep asking
 * 
 * TIPS: 
 * - while until input = "q"
 * - new --> if is entered new then you have to ask for the name of the task
 * - to list --> iterate over all the todo's and print them
 *  
 */

let input = prompt('Enter the option')
let toDoList = ['first', 'second']

console.log('outside while')


while (input!='q'){

    console.log('option')
    console.log(input)

    
    if (input == 'new'){
        let task = prompt('Enter the task')
        if(task) {
            toDoList.push(task)
            console.log('added the task ' + task)
        }
        else{
            console.log('invalid task')
        }

    }
    else if(input == 'list'){
        for(let i = 0; i < toDoList.length; i++){
            console.log(`${i}: ${toDoList[i]}`)
        }
    }
    else if(input == 'delete'){
        let index = prompt('Enter the index')
        if(toDoList[index]) {
            let deleted = toDoList.splice(index, 1);
            console.log(`Deleted the task:  ${deleted}`)
        }
        else{
            console.log('Invalid index')
        }
        
    }
    else{
        console.log('wrong input')
    }

    input = prompt('Enter the optionnnnnnnnnnnnnnn')
}

console.log('FINISH')



