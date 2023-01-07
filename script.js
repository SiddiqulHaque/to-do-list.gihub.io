let addtask = document.getElementById("addtask");
let inputtask = document.getElementById("inputtask");
addtask.addEventListener("click", function () {
  let inputtaskval = inputtask.value;
  let taskdisplay = document.getElementById("taskdisplay");
  if (inputtaskval.length == 0) {
    alert("Please add some task....");
  } else {
    taskdisplay.innerHTML += `
    <div class="taskaddedcontainer">
            <div class="taskadded">
                <input type="text" name="" id="forchecking" class="temp" value="${inputtaskval}" readonly>
            </div>
              <i class="far fa-trash-alt deletebtn"></i>
              <i class="fa fa-check  checkbtn"></i>
    </div>
    `;
  }
  inputtask.value="";
  let deletebtn=document.querySelectorAll(".deletebtn");
  for(var i=0;i<deletebtn.length;i++){
    deletebtn[i].onclick=function(){
      this.parentNode.remove();
    }
  }
  let checkbtn=document.querySelectorAll(".checkbtn");
  for(var j=0;j<checkbtn.length;j++){
    let count=0;
    checkbtn[j].onclick=function(){
      count++;
      if(count%2!=0){
        this.parentNode.firstElementChild.style.textDecoration="line-through";
      }
      else{
        this.parentNode.firstElementChild.style.textDecoration="none";
      }
    }
  }
});


