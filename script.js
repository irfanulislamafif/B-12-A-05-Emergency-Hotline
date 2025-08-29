document.addEventListener("DOMContentLoaded", function () {
  const heartDisplay = document.getElementById("heart-count");
  const coinDisplay = document.getElementById("coin-count");
  const copyBtn = document.getElementById("copy-count-btn");
  const cardsContainer = document.querySelector(".card-section");
  const historyList = document.getElementById("history-container");
  const clearBtn = document.getElementById("clear-history-btn");

  let copyClicks = 0;

  function addCallToHistory(name, num) {
    const timeOptions = {

      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    const time = new Date().toLocaleTimeString([], timeOptions);

    const newEntry = document.createElement("div");
    newEntry.className = "flex justify-between items-center";
    newEntry.innerHTML = `
        <div>
            <p class="font-semibold text-gray-700">${name}</p>
            <p class="text-sm font-bold text-gray-500">${num}</p>
        </div>
        <p class="text-xs font-bold text-gray-600">${time}</p>
    `;

    historyList.appendChild(newEntry);
  }

  cardsContainer.addEventListener("click", function (e) {
    let currentElement = e.target;

    while (currentElement && currentElement !== cardsContainer) {
      if (currentElement.classList.contains("love")) {
        let currentHearts = parseInt(heartDisplay.textContent);
        heartDisplay.textContent = currentHearts + 1;
        break;
      }

      if (currentElement.classList.contains("btn-copy")) {
        const card = currentElement.closest(".card");
        const phoneNum = card.querySelector(".number").textContent.trim();

        navigator.clipboard
          .writeText(phoneNum)
          .then(function () {
            alert(`Copied: ${phoneNum}`);
            copyClicks++;
            copyBtn.textContent = `${copyClicks} Copy`;
          })
          .catch(function (err) {
            console.error("Copy failed", err);
          });
        break;
      }

      if (currentElement.classList.contains("btn-call")) {
        let coinAmount = parseInt(coinDisplay.textContent);

        if (coinAmount < 20) {
          alert("You don't have enough coins!");
          return;
        }

        coinDisplay.textContent = coinAmount - 20;

        const card = currentElement.closest(".card");
        const name = card.querySelector(".card-title").textContent.trim();
        const num = card.querySelector(".number").textContent.trim();

        alert(`Calling ${name} (${num})...`);
        addCallToHistory(name, num);
        break;
      }

      currentElement = currentElement.parentElement;
    }
  });

  clearBtn.addEventListener("click", function () {
    historyList.innerHTML = "";
    alert("History cleared.");
  });
});
