const btn = document.querySelector(".changeTheme");
    const body = document.querySelector("body");
    const theme = document.querySelector(".themeChange");
    const cards_overview = document.querySelectorAll(".card-overview")
    const cards_follow = document.querySelectorAll(".card-follow")
    let mode = "Dark Mode";

    removeCard();
    
    // change theme
    btn.addEventListener("input", (e) => {
    removeCard();
      body.classList.toggle("light") ? mode = "Light Mode" : mode = "Dark Mode"
      theme.textContent = mode;
      setTimeout(showCard, 200);

    });
    // load cards
    window.addEventListener('DOMContentLoaded', () => {
      showCard();
    });

    function showCard() {
      [cards_overview, cards_follow].forEach(cards => {
        cards.forEach((card, i) => {
          setTimeout(() => {
            card.classList.add("visible")
          }, i * 100);
        });
      });
    }
    function removeCard() {
        [cards_overview, cards_follow].forEach(cards => {
        cards.forEach((card, i) => {
          card.classList.remove("visible")
        });
      });
    }