


var like = document.getElementsByClassName('like');


for(let i=0; i<like.length; i++){
 let lik= like[i]
 lik.addEventListener('click', function(){
  if(lik.style.color == "rgb(219, 155, 165)"){
    lik.style.color = "black"
  } else{
    lik.style.color = "rgb(219, 155, 165)"
  }
})
}

var up= document.getElementsByClassName('plus-btn');

for(let i =0; i<up.length; i++){
  let plus=up[i];
  plus.addEventListener('click', function(){
    plus.previousElementSibling.value++;
    total();
  
  });
}

var down=document.getElementsByClassName('minus-btn');

for (let i=0; i<down.length;i++){
  let minus=down[i];
  minus.addEventListener('click', function(){
    if(minus.nextElementSibling.value>1)
    {minus.nextElementSibling.value--;}
    total();
    
  });
}

var effacer = document.getElementsByClassName('delete');
 for(let i=0; i<effacer.length;i++){
   let eff=effacer[i];
   eff.addEventListener('click', function(){
     eff.parentElement.remove();
     total();
   });
 }

var Itm=document.getElementsByClassName('Item');
var final = document.getElementById('finalPrice');
function total(){
  let s=0;
  for(let i=0; i<Itm.length; i++){
    s=
    s +
    Itm[i].querySelector(".price").innerText *
    Itm[i].querySelector(".Quant").value;
  }
  return (final.value = s);
}

