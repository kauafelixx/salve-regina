document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card")
  let activeCard = null

  
  function closeAllCards() {
    cards.forEach((card) => {
      card.classList.remove("active")
    })
    activeCard = null
  }

  
  cards.forEach((card) => {
    card.addEventListener("click", function (e) {
 
      if (e.target.tagName === "A") {
        return 
      }

      e.preventDefault()
      e.stopPropagation()

     
      if (this.classList.contains("active")) {
        this.classList.remove("active")
        activeCard = null
      } else {
      
        closeAllCards()
      
        this.classList.add("active")
        activeCard = this
      }
    })

 
    const info = card.querySelector(".info")
    if (info) {
      info.addEventListener("click", (e) => {
        e.stopPropagation()
      })
    }
  })

  
  document.addEventListener("click", (e) => {
    if (activeCard && !activeCard.contains(e.target)) {
      closeAllCards()
    }
  })

  
  cards.forEach((card) => {
    let touchStartTime = 0

    card.addEventListener("touchstart", (e) => {
      touchStartTime = Date.now()
    })

    card.addEventListener("touchend", function (e) {
      const touchDuration = Date.now() - touchStartTime

      if (touchDuration < 200) {
      
        e.preventDefault()

      
        if (e.target.tagName === "A") {
          return 
        }

        if (this.classList.contains("active")) {
          this.classList.remove("active")
          activeCard = null
        } else {
          closeAllCards()
          this.classList.add("active")
          activeCard = this
        }
      }
    })
  })

 
  cards.forEach((card) => {
    card.setAttribute("tabindex", "0")
    card.setAttribute("role", "button")
    card.setAttribute("aria-label", "Clique para ver detalhes do livro")

    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()

        if (this.classList.contains("active")) {
          this.classList.remove("active")
          activeCard = null
        } else {
          closeAllCards()
          this.classList.add("active")
          activeCard = this
        }
      }

      if (e.key === "Escape") {
        closeAllCards()
      }
    })
  })

  console.log("[v0] Mobile interactions initialized for", cards.length, "cards")
})
