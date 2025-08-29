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

        const service = calls[i].parentNode.parentNode.children[1].children[1].innerText;
        const num = calls[i].parentNode.parentNode.children[1].children[2].innerText;

        if (totalCoins >= 20) {
            totalCoins = totalCoins - 20;
            coin.textContent = totalCoins;

            alert(`Calling ${service} ${num}`)
        }
        else {
            alert(`Opps! You're out of coins. you need 20 coins to call.`)
        }
    })

// history add js

for (let call of calls) {
    call.addEventListener("click", function () {

        const callTitle = call.parentNode.parentNode.children[1].children[0].innerText;
        const callNum = call.parentNode.parentNode.children[1].children[2].innerText;

        const history = document.getElementsByClassName("history")[0];
        const callHistory = document.createElement("div");
        const now = new Date()
        const time = now.toLocaleTimeString();

        callHistory.innerHTML = `
         <div class="flex justify-between items-center p-4 bg-gray-100 my-1 rounded-xl">
            <div>
                <h2>
                    ${callTitle}
                </h2>
                <h2 class="text-gray-700">
                    ${callNum}
                </h2>
            </div>
            <div>
               <h2>
                   ${time}
                </h2>
            </div>
        </div>
        `;

        history.append(callHistory)
    })
}

// history remove js 

const clear = document.getElementById("clear").addEventListener("click", function () {
    const history = document.getElementsByClassName("history")[0];
    history.innerHTML = "";
})
