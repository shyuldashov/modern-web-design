;(function () {
  const listItems = document.querySelectorAll(".menu__item--show")
  const links = document.querySelector(".menu__links")
  const menu = document.querySelector(".menu__hamburger")

  const addClick = () => {
    listItems.forEach((item) => {
      item.addEventListener("click", () => {
        let subMenu = item.children[1]
        let height = 0
        item.classList.toggle("menu__item--active")

        if (subMenu.clientHeight === 0) {
          height = subMenu.scrollHeight
        }

        subMenu.style.height = `${height}px`
      })
    })
  }

  const deleteStyleHeight = () => {
    listItems.forEach((item) => {
      if (item.children[1].getAttribute("style")) {
        item.children[1].removeAttribute("style")
        item.classList.remove("menu__item--active")
      }
    })
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth > 800) {
      deleteStyleHeight()
      if (links.classList.contains("menu__links--show")) {
        links.classList.remove("menu__links--show")
      }
    } else {
      addClick()
    }
  })

  if (window.innerWidth <= 800) {
    addClick()
  }

  menu.addEventListener("click", () => {
    links.classList.toggle("menu__links--show")
  })
})()
