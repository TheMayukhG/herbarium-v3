let chart = document.querySelector(".data_chart")
let nest = document.querySelectorAll(".nest")
let nestClick = document.querySelector(".nest")
nestClick.click()
let tp = document.querySelector(".tpDown");
let toolTip = document.querySelectorAll("tooltip");
let parent;
let triggerer;

nest.forEach(e => {
    triggerer = e;
    parent = e.parentElement;
    let title = e.querySelector(".backtitle")
    let img = e.querySelector(".image");
    e.addEventListener("mouseover", () => {
        e.parentElement.style.zIndex = 500
    })
    e.addEventListener("mouseleave", () => {
        img.style.transform = "translateY(0px)"
        e.parentElement.style.zIndex = 1
        removethetitle();
        removeToolTip();

    })

    e.addEventListener("click", () => {
        img.style.transform = "translateY(-50px)"
        getTheBackTitle();
        fadeInOut();
        showToolTip(e.parentElement);
        // console.log(e);
        triggerer = e;
        // console.log(triggerer);
        parent = e.parentElement;
        startScrollScan();
        scrollToPosition();
        // if(e.parentElement == )
        if (e.parentElement.id=="pot9" || e.parentElement.id=="pot10") {
            updateChart(e)
        }
    })

    // if (triggerer.parentElement.querySelector(".tooltip").classList.contains("active")) {

    // }

    function getTheBackTitle() {
        title.classList.add("active")
    }

    function removethetitle() {
        title.classList.remove("active");
        // e.parentElement.querySelector(".tooltip").classList.remove("active")
    }


})
toolTip.forEach(elem => {
    if (elem.classList.contains("active")) {
        elem.classList.remove("active")
    }
})

function startScrollScan() {

    window.addEventListener("scroll", () => {
        if (parent.querySelector(".tooltip").classList.contains("active")) {

            //    console.log("js is shit");     
            // triggerer.parentElement.querySelector(".tooltip").classList.remove("active")
            removeToolTip()
        }
    })
}

function scrollToPosition() {
    
    if (parent.querySelector(".tooltip").classList.contains("active")) {
        updateChart(triggerer);
        tp.scrollIntoView()

    }
    // window.scroll(0,findPos(tp));
}

function removeToolTip() {
    setTimeout(() => {
        triggerer.parentElement.querySelector(".tooltip").classList.remove("active")

        toolTip.forEach(e => {
            e.classList.remove("active")
        })
    }, 200);
    // removeToolTip()
    // setTimeout(() => {
    //     waitAndDoAgain()
    //     //     triggerer.parentElement.querySelector(".tooltip").classList.remove("active")
    // }, 200);
}

function waitAndDoAgain() {
    removeToolTip()
}

function showToolTip(card) {
    let elem = card.querySelector(".image");
    let styles = window.getComputedStyle(elem)
    let product = styles.getPropertyValue('filter')
    console.log(product);
    setTimeout(() => {
        if (styles.getPropertyValue('filter') == "brightness(1)") {
            card.querySelector(".tooltip").classList.add("active");
            console.log("that works");
        }
    }, 300);
}

// name 
// scname
// uses 
// lifespan
// growthSeason

function updateChart(e) {
    setTimeout(() => {

        let dataDiv = e.querySelector(".data");
        let name = dataDiv.dataset.name;
        let scname = dataDiv.dataset.scname;
        let type = dataDiv.dataset.pltp;
        let uses = dataDiv.dataset.uses;
        let lifespan = dataDiv.dataset.lifespan;
        let growthSeason = dataDiv.dataset.gthsn;
        let origin = dataDiv.dataset.origin;
        let lclname = dataDiv.dataset.lclname;
        // console.log(dataDiv.dataset.pltp);

        chart.querySelector(".name").querySelector(".data").innerHTML = name;
        chart.querySelector(".scname").querySelector(".data").innerHTML = scname;
        chart.querySelector(".type").querySelector(".data").innerHTML = type;
        chart.querySelector(".uses").querySelector(".data").innerHTML = uses;
        chart.querySelector(".lifespan").querySelector(".data").innerHTML = lifespan;
        chart.querySelector(".growthSeason").querySelector(".data").innerHTML = growthSeason;
        chart.querySelector(".origin").querySelector(".data").innerHTML = origin;
        chart.querySelector(".localName").querySelector(".data").innerHTML = lclname;
    }, 250);

}

function fadeInOut() {

    let Datas = chart.querySelectorAll(".data");
    Datas.forEach(e => {
        if (e == "") {
            null
        } else {
            e.style.opacity = 0;
            setTimeout(() => {
                e.style.opacity = "100%";
            }, 300);
        }
    })

}
//Get the button
var mybutton = document.querySelector("#myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#ff008a ${scrollValue}%,#000 ${scrollValue-50}%)`;
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;