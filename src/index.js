document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.getElementById("create-task-form").addEventListener("submit", (e) =>{
    e.preventDefault()
    submitBtn(e.target.newtaskdescription.value)
  })
});
function submitBtn(task){
  let ul = document.getElementById("tasks")
  let li = document.createElement("li")
  let x = document.createElement("button")
  x.addEventListener("click",deleteElem)
   li.innerText = `${task}`
   x.innerHTML = "X"
   ul.appendChild(li)
   li.appendChild(x)

}
function deleteElem(e){
  e.target.parentNode.remove()
}




