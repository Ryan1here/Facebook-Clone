const toggleProfile = document.querySelector(".right-user-icon")

const toggleClass = document.querySelector(".Toggle-Menu")

const darkBtn = document.querySelector("#dark-btn")

toggleProfile.addEventListener("click", function () {
  // console.log("hello")
  // toggleClass.classList.toggle("Toggle-Menu-Open")
  const items = toggleClass.classList
  if (items.contains("Toggle-Menu-Open")) {
    items.remove("Toggle-Menu-Open")
  } else {
    items.add("Toggle-Menu-Open")
  }
})

darkBtn.addEventListener("click", function () {
  darkBtn.classList.toggle("dark-btn-on")
})

// toggleProfile.addEventListener("click", function () {
//   if (toggleProfile.classList.contains("Toggle-Menu-open")) {
//     toggleProfile.classList.remove("Toggle-menu-open")
//   } else {
//     toggleProfile.classList.add("Toggle-menu-open")
//   }
// })
