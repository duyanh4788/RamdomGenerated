const getEle = (id) => {
    return document.getElementById(id)
}
// random images
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
// change theme
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
    let seconds = 5;
    let countdownTimer = setInterval(secondPassed, 1000);
    let valid = true

    function secondPassed() {
        // random color rgb
        const randomColor = () => {
            return Math.floor(Math.random() * 256)
        }
        const randomNumber = () => {
            let one = randomColor()
            let two = randomColor()
            let there = randomColor()
            let foure = randomColor()
            return [one, two, there, foure]
        }
        let valueColor = randomNumber()
        let rgbColor = "rgb(" + valueColor[0] + "," + valueColor[1] + "," + valueColor[2] + ")"
        let boxShadow = "rgb(" + valueColor[0] + "," + valueColor[1] + "," + valueColor[2] + "," + valueColor[3] + ")"
        const textColor = Math.floor(Math.random() * 16777215).toString(16);
        const fontSizeRanDom = Math.floor(Math.random() * (25 - 15)) + 15;
        // random color rgb

        // set timer
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
            document.body.style.backgroundColor = rgbColor;
            document.body.style.color = "#" + textColor;
            document.body.style.fontSize = fontSizeRanDom + "px";
            getEle("cardOne").style.border = "1px solid " + boxShadow
            getEle("cardTwo").style.border = "1px solid " + boxShadow
            getEle("cardThere").style.border = "1px solid " + boxShadow
            getEle("cardFour").style.border = "1px solid " + boxShadow
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
            seconds = 5
            countdownTimer = setInterval(secondPassed, 1000);
            return valid = true
        }
    }
};
countdownTimerS()