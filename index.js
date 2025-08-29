// console.log(document)
// heart increase js 
const heart = document.getElementById("heart")
const heartCount = document.getElementById("heart-count")
let totalHeartCount = 0
heart.addEventListener("click", function(){
    totalHeartCount++;
   heartCount.textContent=  totalHeartCount;
})

// copy increase js 

const copy = document.getElementById("copy")
const copyCount = document.getElementById("copy-count")
let totalCopyCount = 0 
copy.addEventListener("click", function(){
    totalCopyCount++;
    copyCount.textContent = totalCopyCount;
})

//  call coins decrease js 

const call = document.getElementById("call")
const coin = document.getElementById("coin")
let totalCoins = 100;
call.addEventListener("click", function(){
    if(totalCoins>=20){
        totalCoins = totalCoins - 20;
        coin.textContent= totalCoins
    }
    else{
        
    }
})