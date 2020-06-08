// side bar functions
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

// products filter



// agreement checker
function checkagreement() {
    var checkBox = document.getElementById("agreement");
    var text = document.getElementById("agreed");

    if (checkBox.checked == true) {
        agreed.style.display = "block";
    } else {
        agreed.style.display = "none";
    }
}



// gototop function
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        document.getElementById("gototop-button").style.display = "block";
    } else {
        document.getElementById("gototop-button").style.display = "none";
    }
}

function gototop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}