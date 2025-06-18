// array to store the tasks
let myTask = [
    {
        id:0,
        title:'JS CLASS',
        description:'New project'
    },
    {
        id:1,
        title:"Graphics class",
        description:"Making new posts with gradient colors"
    }
]

// add task
document.getElementById("myForm").addEventListener('submit',function(event){
    event.preventDefault()
    // form validation
    let title = document.getElementById("title").value
    let description = document.getElementById("description").value

    // title validation
    title = title.trim()
    if(title.length == 0){
        alert('Title cannot be null')
        return
    }

    // description validation 
    description = description.trim()
    if(description.length == 0){
        alert('Description cannot be null')
        return
    }
   
    // create a task object
    let new_task = {
        id:null,
        title:null,
        description:null,
    }
    // assign value to the object
    new_task.id = myTask.length 
    new_task.title = title
    new_task.description = description
    
    // add to the array
    myTask.push(new_task)


    // make the html inputs blank
    document.getElementById("title").value = ''
    document.getElementById("description").value = ''

    // update the html side
    updateMyTasks()
})
// delete tasks
function  deleteTask(task){
    let rem_tasks = myTask.filter((item)=> item.id != task.id )
    myTask = []
    rem_tasks.forEach(element=>{
        myTask.push(element)
    })
    updateMyTasks()
}
// edit tasks

// update the tasks
function updateMyTasks(){
    let list =  document.getElementById("list")
    //clearing the list
    list.innerHTML = ''
    
    myTask.forEach(element=>{
        // create tags
        let container = document.createElement("div")
        let title_div = document.createElement("div")
        let button_div = document.createElement("div")
        let title = document.createElement("h3")
        let delete_button = document.createElement("button")
        let edit_button = document.createElement("button")
        let description_div = document.createElement("div")
        let description = document.createElement("p")

        // assign classnames
        container.className = "container"
        title_div.className = "title_div"
        button_div.className = "button_div"
        delete_button.className = "delete_btn"
        edit_button.className = "edit_btn"
        description_div.className = "list_desc"
        description.className = "description"

        //assigning data
        title.innerHTML = element.title
        description.appendChild(document.createTextNode(element.description))
        delete_button.innerHTML = "Delete"
        edit_button.innerHTML = "Edit"
        
        
        // adding event listener to the button
        delete_button.addEventListener('click',()=>{
            deleteTask(element)
        })
        // add event listener to the title
        title_div.addEventListener('click',()=>{
            if(description_div.style.display == 'none'){
                description_div.style.display = 'block'
            }else{
               description_div.style.display = 'none' 
            }            
        })

        // push to html
        title_div.appendChild(title)
        button_div.appendChild(edit_button)
        button_div.appendChild(delete_button)
        title_div.appendChild(button_div)
        description_div.appendChild(description)
        container.appendChild(title_div)
        container.appendChild(description_div)

        list.appendChild(container)
    })
}

updateMyTasks()