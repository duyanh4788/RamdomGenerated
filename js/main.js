const getEle = (id) => {
    return document.getElementById(id)
}
let themesRanDom = ["themeOne", "themeTwo", "themeThere"]
let imgRanDom = [
    { img: "./images/1.jpg", title: "Vũ Duy Anh", sub: "Đẹp Trai" },
    { img: "./images/2.jpg", title: "Lorem ipsum", sub: "Nemo rerum quod" },
    { img: "./images/3.jpg", title: "Dolor sit amet consectetur", sub: "Adipisicing elit" },
    { img: "./images/4.jpg", title: "Provident enim voluptas", sub: "Veniam optio aliquid" },
    { img: "./images/5.jpg", title: "Ea animi aspernatur", sub: "Mollitia reiciendis" },
    { img: "./images/6.jpg", title: "Non odit nisi nesciunt", sub: "Possimus. Non, at iure" },
    { img: "./images/7.jpg", title: "I select a random value from this array using JavaScript", sub: "Communities are a catalyst for technology development" },
    { img: "./images/8.jpg", title: "Getting a random value from a JavaScript array", sub: "Podcast 363: Highlights from our 2021 Developer Survey" },
]

getEle("selectTheme").addEventListener("change", function () {
    let element = document.body
    switch (this.value) {
        case "themeOne":
            element.classList = "themeOne"
            break;
        case "themeTwo":
            element.classList = "themeTwo"
            break;
        case "themeThere":
            element.classList = "themeThere"
            break;
        case "none":
            element.classList = ""
            break;
        default:
            break;
    }

})

const countdownTimerS = () => {
    let seconds = 10;
    let countdownTimer = setInterval(secondPassed, 1000);
    let valid = true
    function secondPassed() {
        let minutes = Math.round((seconds - 30) / 60);
        let second = seconds % 60;
        if (second < 10) {
            second = "0" + second;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (document.getElementById("countdownTimer") !== null) {
            document.getElementById("countdownTimer").innerHTML =
                minutes + ":" + second;
        }
        if (seconds === 0) {
            clearInterval(countdownTimer);
            valid = false
            let ranDom = Math.floor(Math.random() * themesRanDom.length)
            let element = document.body
            element.classList = themesRanDom[ranDom]
            let imgRD1 = Math.floor(Math.random() * imgRanDom.length)
            let imgRD2 = Math.floor(Math.random() * imgRanDom.length)
            let imgRD3 = Math.floor(Math.random() * imgRanDom.length)
            let imgRD4 = Math.floor(Math.random() * imgRanDom.length)
            getEle("imgRanDomOne").innerHTML = "<div class='col-4'><img " + ` src=${imgRanDom[imgRD1].img}` + " alt=''></div>" +
                "<div class='col-8'><p> " + `${imgRanDom[imgRD1].title}` + "</p><p> " + `${imgRanDom[imgRD1].sub}` + " </p></div>"

            getEle("imgRanDomTwo").innerHTML = "<div class='col-4'><img " + ` src=${imgRanDom[imgRD2].img}` + " alt=''></div>" +
                "<div class='col-8'><p> " + `${imgRanDom[imgRD2].title}` + "</p><p> " + `${imgRanDom[imgRD2].sub}` + " </p></div>"

            getEle("imgRanDomThere").innerHTML = "<div class='col-4'><img " + ` src=${imgRanDom[imgRD3].img}` + " alt=''></div>" +
                "<div class='col-8'><p> " + `${imgRanDom[imgRD3].title}` + "</p><p> " + `${imgRanDom[imgRD3].sub}` + " </p></div>"

            getEle("imgRanDomFoure").innerHTML = "<div class='col-4'><img " + ` src=${imgRanDom[imgRD4].img}` + " alt=''></div>" +
                "<div class='col-8'><p> " + `${imgRanDom[imgRD4].title}` + "</p><p> " + `${imgRanDom[imgRD4].sub}` + " </p></div>"
        } else {
            seconds--
        }
        if (!valid) {
            seconds = 10
            countdownTimer = setInterval(secondPassed, 1000);
            return valid = true
        }
    }

};
countdownTimerS()