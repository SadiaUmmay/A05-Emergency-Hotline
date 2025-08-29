// heart increase js 

const hearts = document.getElementsByClassName("heart"); // HTMLCollection
const heartCount = document.getElementById("heart-count");
let totalHeartCount = 0;
for (let i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener("click", function () {
        totalHeartCount++;
        heartCount.textContent = totalHeartCount;
    });
}

// copy increase js and hotline number copy with alert

const copy = document.getElementsByClassName("copy")
const copyCount = document.getElementById("copy-count")
let totalCopyCount = 0
for (let i = 0; i < copy.length; i++) {
    copy[i].addEventListener("click", function () {
        totalCopyCount++;
        copyCount.textContent = totalCopyCount;
        const hotline = copy[i].parentNode.parentNode.children[1].children[2].innerText;
        // console.log(hotline)
        navigator.clipboard.writeText(hotline)
        alert(`Number is copied`)
    })
}

//  call coins decrease js with alert

const calls = document.getElementsByClassName("call")
const coin = document.getElementById("coin")
let totalCoins = 100;
for (let i = 0; i < calls.length; i++)
    calls[i].addEventListener("click", function () {
        if (totalCoins >= 20) {
            totalCoins = totalCoins - 20;
            coin.textContent = totalCoins;
        }
        else {
            alert(`Opps! You're out of coins. you need 20 coins to call.`)
        }
    })
// history add js

for(let call of calls)
    call.addEventListener("click", function(){

        const callTitle = call.parentNode.parentNode.children[1].children[0];
        const callNum = call.parentNode.parentNode.children[1].children[2];

        const history = document.getElementsByClassName("history")
        const callHistory = document.createElement("div");

        callHistory.innerHTML = `
         <div class="flex justify-between p-4 bg-gray-300 my-1">
            <div>
                <h2>
                    ${callTitle}
                </h2>
                <h2 class="text-gray-700">
                    ${callNum}
                </h2>
            </div>
            <div>
            </div>
        </div>
        `;

        history.append(callHistory)
    })

// alert messege 

const alertClass = document.getElementsByClassName("call")

for (let alerts of alertClass)

    alerts.addEventListener("click", function () {

        const service = alerts.parentNode.parentNode.children[1].children[1].innerText;
        const num = alerts.parentNode.parentNode.children[1].children[2].innerText;

        alert(`Calling ${service} ${num}`)
    }
    )