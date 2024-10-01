"use strict"

const resp_menu = document.getElementById("resp_menu")
const resp_menu_otvor = document.getElementById("resp_menu_otvor")
const resp_menu_zavri = document.getElementById("resp_menu_zavri")

resp_menu_otvor.addEventListener("click",otvor_menu)

function otvor_menu(event) {
    event.preventDefault()
    resp_menu.style.transform = "translate(0%,0%)"
}

resp_menu_zavri.addEventListener("click",zavri_menu)

function zavri_menu(event) {
    event.preventDefault()
    resp_menu.style.transform = "translate(0%,-100%)"
}

function zavri_menu_btn() {
    resp_menu.style.transform = "translate(0%,-100%)"
}