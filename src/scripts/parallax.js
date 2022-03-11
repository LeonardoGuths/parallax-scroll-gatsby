function parallax() {
  let stars = document.getElementById("stars")
  window.addEventListener("scroll", function () {
    let value = window.scrollY
    stars.style.left = value + "px"
  })
}
