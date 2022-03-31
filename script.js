var plusBtn=document.querySelector(".plus")

var crossBtn=document.querySelector(".cross")

//plus button functions
function plusBtnClick(){
    document.querySelector(".dialog")
    .style.display="flex"
}

//close button function
function closeDialog(){
    document.querySelector(".dialog")
    .style.display="none"
}
//add ticket function
function addTicket(){
    closeDialog()
    var boxes=document.querySelector(".wrapper main")
    var puranaHTML=boxes.innerHTML;
    var boxContent=document.getElementById("box-content")
    var title=document.getElementById("title")
    boxes.innerHTML=puranaHTML+`
    <div class="box">
    <div class="head">
      <div class="box-head">${boxContent.value}</div>
      <div class="symbol"></div>
      <div class="icon1"></div>
      <div class="icon2"></div>
    </div>
    <center>
      <textarea rows="15" cols="30">${boxContent.value}</textarea>
    </center>
  </div>`;
  title.value=""
  boxContent.value=""
  
deletelogic()
}

plusBtn.addEventListener("click",plusBtnClick)
crossBtn.addEventListener("click",closeDialog)

function deletelogic(){
  let crossBtnArr=document.querySelectorAll(".symbol")
  let minimizeArr=document.querySelectorAll(".icon2")

  for(let i=0;i<crossBtnArr.length;i++){
    crossBtnArr[i].addEventListener('click',closeTicket)
  }
  for(let i=0;i<minimizeArr.length;i++){
    minimizeArr[i].addEventListener('click',minimize)
  }

  function closeTicket(e){
    console.log(e.target.closest(".box"))
    let box=e.target.closest('.box')
    box.style.display="none"
  }
  function minimize(e){
    let box=e.target.closest(".box")
    //console.log(box)
    let textAreamain=box.querySelector('center')
    console.log(textAreamain);
    if(textAreamain.style.display!=="none"){
      textAreamain.style.display="none"
    }else{
      textAreamain.style.display="flex"
    }
  }

}