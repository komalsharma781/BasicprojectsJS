const inputbox = document.querySelector("#input-box");
const listcontainer = document.querySelector("#list-container");

function addTask(){
    if(inputbox.value === ''){
        alert("You must write something!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span)
        
    }
    inputbox.value = '';
    saveData();
    // js 1 khol
}    
 
listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        // e.target.classList.toggle("checked"); haa vo check koni hota image na aata 
        // hn toggle dom ki a ek feature h yo kise chiz m on off krn k kaam aaya kre mainly yo checkboxes m a kaam aave h 
        // ib apne code m toggel htade h to on off vala system na hota na to yo chiz h toggle oki hn

       saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showTask(){
    listcontainer.innerHTML= localStorage.getItem("data");
}
showTask();
