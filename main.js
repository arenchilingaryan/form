let button = document.getElementById("btn")
let border1 = document.getElementById("border1")
let border2 = document.getElementById("border2")
let border3 = document.getElementById("border3")
let border4 = document.getElementById("border4")
let container = document.getElementById("block")
button.addEventListener("click", function () {
    if (!(button.classList == "button active")) {
        button.classList.add("active")
        border1.classList.add("activeBord1")
        border2.classList.add("activeBord2")
        border3.classList.add("activeBord3")
        border4.classList.add("activeBord4")
        setInterval(function () {
            if (border1.classList == "a bord activeBord1"){
            border1.classList.add("bordColor1")
            border2.classList.add("bordColor2")
            border3.classList.add("bordColor3")
            border4.classList.add("bordColor4")
            container.classList.add("content")
            button.classList.add("btnColor")
        } else {
            border1.classList.remove("bordColor1")
            border2.classList.remove("bordColor2")
            border3.classList.remove("bordColor3")
            border4.classList.remove("bordColor4")
            container.classList.remove("content")
            button.classList.remove("btnColor")
        }
    }, 1000) 
    setInterval(function () {
        if (border1.classList == "a bord activeBord1 bordColor1"){
        border1.classList.add("bordType1")
        border2.classList.add("bordType2")
        border3.classList.add("bordType3")
        border4.classList.add("bordType4")
        container.classList.add("content2")
    } else {
        border1.classList.remove("bordType1")
        border2.classList.remove("bordType2")
        border3.classList.remove("bordType3")
        border4.classList.remove("bordType4")
        container.classList.remove("content2")
    }
}, 3000)
    } else {
        button.classList.remove("active")
        border1.classList.remove("activeBord1")
        border2.classList.remove("activeBord2")
        border3.classList.remove("activeBord3")
        border4.classList.remove("activeBord4")
    }
})

            