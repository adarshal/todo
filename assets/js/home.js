console.log('Assets . home.js loaded');

let cat=document.getElementsByClassName('category-show');
console.log(cat);

for(let i of cat){
    let catCurr=i.dataset.cat;
    if(catCurr== 'Home'){
        i.style.background="darkorange";
    }else if(catCurr== 'Work'){
        i.style.background="purple";
    }else if(catCurr== 'Health'){
        i.style.background="green";
    }else if(catCurr== 'Important'){
        i.style.background="crimson";
    }
}


//&&&& following code not used ; checkbox are now handled from backend deletmultple controller
let checkboxes=document.querySelectorAll('.checkbox');
let deleteTasks=[];
 for(let i of checkboxes){
    i.addEventListener('click', function(){
        if(this.checked==true){
            console.log(this.value);
            deleteTasks.push(this.value);
        }
        else{
            let index = deleteTasks.indexOf(this.value);
            if (index !== -1) {
                deleteTasks.splice(index, 1);
            }
        }
    })
 }
 console.log(deleteTasks);

let delBtn=document.getElementById('deleteButton');
 delBtn.addEventListener('click',del )

  function del(){
    console.log("here adding del tasks");
    
    if(deleteTasks){
        for (let i of deleteTasks){
             function f(){
              document.location.href ="/delete-tasks-many1/?id= " +i;
            };
        }
        //deleteTasks=[];
    }
}