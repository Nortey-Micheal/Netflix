const buttons = document.querySelectorAll("section:last-of-type button");
const img = document.querySelectorAll("section:last-of-type button>img");
let para1 = document.querySelector(".first");
let para2 = document.querySelector(".second");
let para3 = document.querySelector(".third");
let para4 = document.querySelector(".fourth");
let para5 = document.querySelector(".fifth");
let para6 = document.querySelector(".sixth");



buttons.forEach(function (button) {
    button.addEventListener("click" , verifyRotate);
    button.addEventListener("click" , verifyPara);
})

function verifyRotate(event) {
    if (event.target == buttons[0]&&img[0].style.transform =="rotate(90deg)" ||
        event.target == buttons[1]&&img[1].style.transform =="rotate(90deg)" ||
        event.target == buttons[2]&&img[2].style.transform =="rotate(90deg)" ||
        event.target == buttons[3]&&img[3].style.transform =="rotate(90deg)" ||
        event.target == buttons[4]&&img[4].style.transform =="rotate(90deg)" ||
        event.target == buttons[5]&&img[5].style.transform =="rotate(90deg)") {
        switch (event.target) {
        case buttons[0]:
            img[0].style.transform = "rotate(-45deg)";
            break;
        case buttons[1]:
            img[1].style.transform = "rotate(-45deg)";
            break;
        case buttons[2]:
            img[2].style.transform = "rotate(-45deg)";
            break;
        case buttons[3]:
            img[3].style.transform = "rotate(-45deg)";
            break;
        case buttons[4]:
            img[4].style.transform = "rotate(-45deg)";
            break;
        case buttons[5]:
            img[5].style.transform = "rotate(-45deg)";
            break;
        default:
            break;
        }
    } else{
        img[0].style.transform ="rotate(90deg)";
        img[1].style.transform ="rotate(90deg)";
        img[2].style.transform ="rotate(90deg)";
        img[3].style.transform ="rotate(90deg)";
        img[4].style.transform ="rotate(90deg)";
        img[5].style.transform ="rotate(90deg)";
    }
}

function verifyPara(event) {
    if (event.target ==buttons[0]&&img[0].style.transform =="rotate(-45deg)" ||
        event.target ==buttons[1]&&img[1].style.transform =="rotate(-45deg)" ||
        event.target ==buttons[2]&&img[2].style.transform =="rotate(-45deg)" ||
        event.target ==buttons[3]&&img[3].style.transform =="rotate(-45deg)" ||
        event.target ==buttons[4]&&img[4].style.transform =="rotate(-45deg)" ||
        event.target ==buttons[5]&&img[5].style.transform =="rotate(-45deg)") {
        switch (event.target) {
            case buttons[0]:
                para1.style.display = "block";
                para2.style.display = "none";
                para3.style.display = "none";
                para4.style.display = "none";
                para5.style.display = "none";
                para6.style.display = "none";
                img[1].style.transform ="rotate(90deg)";
                img[2].style.transform ="rotate(90deg)";
                img[3].style.transform ="rotate(90deg)";
                img[4].style.transform ="rotate(90deg)";
                img[5].style.transform ="rotate(90deg)";
                break;
            case buttons[1]:
                para2.style.display = "block";
                para1.style.display = "none";
                para3.style.display = "none";
                para4.style.display = "none";
                para5.style.display = "none";
                para6.style.display = "none";
                img[0].style.transform ="rotate(90deg)";
                img[2].style.transform ="rotate(90deg)";
                img[3].style.transform ="rotate(90deg)";
                img[4].style.transform ="rotate(90deg)";
                img[5].style.transform ="rotate(90deg)";
                
                break;
            case buttons[2]:
                para3.style.display = "block";
                para1.style.display = "none";
                para2.style.display = "none";
                para4.style.display = "none";
                para5.style.display = "none";
                para6.style.display = "none";
                img[0].style.transform ="rotate(90deg)";
                img[1].style.transform ="rotate(90deg)";
                img[3].style.transform ="rotate(90deg)";
                img[4].style.transform ="rotate(90deg)";
                img[5].style.transform ="rotate(90deg)";
                break;
            case buttons[3]:
                para4.style.display = "block";
                para1.style.display = "none";
                para2.style.display = "none";
                para3.style.display = "none";
                para5.style.display = "none";
                para6.style.display = "none";
                img[0].style.transform ="rotate(90deg)";
                img[1].style.transform ="rotate(90deg)";
                img[2].style.transform ="rotate(90deg)";
                img[4].style.transform ="rotate(90deg)";
                img[5].style.transform ="rotate(90deg)";
                break;
            case buttons[4]:
                para5.style.display = "block";
                para1.style.display = "none";
                para2.style.display = "none";
                para3.style.display = "none";
                para4.style.display = "none";
                para6.style.display = "none";
                img[0].style.transform ="rotate(90deg)";
                img[1].style.transform ="rotate(90deg)";
                img[2].style.transform ="rotate(90deg)";
                img[3].style.transform ="rotate(90deg)";
                img[5].style.transform ="rotate(90deg)";
                break;
            case buttons[5]:
                para6.style.display = "block";
                para1.style.display = "none";
                para2.style.display = "none";
                para3.style.display = "none";
                para4.style.display = "none";
                para5.style.display = "none";
                img[0].style.transform ="rotate(90deg)";
                img[1].style.transform ="rotate(90deg)";
                img[2].style.transform ="rotate(90deg)";
                img[3].style.transform ="rotate(90deg)";
                img[4].style.transform ="rotate(90deg)";
                break;
        }
    } else {
        para1.style.display = "none";
        para2.style.display = "none";
        para3.style.display = "none";
        para4.style.display = "none";
        para5.style.display = "none";
        para6.style.display = "none";
    }
}