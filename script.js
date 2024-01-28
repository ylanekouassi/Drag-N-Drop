let lists = document.querySelectorAll(".item");
let leftTable = document.getElementById("left");
let rightTable = document.getElementById("right");

for(item of lists){
    item.addEventListener("dragstart", function(e){
        let selected = e.target;

        rightTable.addEventListener("dragover", function(e){
            e.preventDefault();
        });
        rightTable.addEventListener("drop", function(e){
            if(selected !== null)
            rightTable.append(selected);
            selected = null;
        })
    })



    } 
        
