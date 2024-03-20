let ok1 = 0; let ok2 = 0; let ok3 = 0; let ok4 = 0; let ok5 = 0;

function checkcode(value){
    let regexp = /\b\d{5}\b|\b(-\d{4})\b/;
    if (regexp.test(value)){
        document.getElementById("check1").innerHTML = "&#10004"
    }
    else{
        document.getElementById("check1").innerHTML = "&#10006"
    }
}

function checknumber(value){
    let regexp = /(\b\d{3}-\d{3}-\d{4}\b)|(\b\d{3}\.\d{3}\.\d{4}\b)|(\b\d{3}\s\d{3}\s\d{4}\b)|(\b\(\d{3}\)\d{3}-\d{4})\b/;
    if (regexp.test(value)){
        document.getElementById("check2").innerHTML = "&#10004"
    }
    else{
        document.getElementById("check2").innerHTML = "&#10006"
    }
}

function checkname(value){
    let regexp = /^[А-Я]{1}[а-я]{1,11}/;
    if (regexp.test(value)){
        document.getElementById("check3").innerHTML = "&#10004"
        ok1 = 1;
        final();
    }
    else{
        document.getElementById("check3").innerHTML = "&#10006"
        ok1 = 0;
    }
}

function checkage(){
    document.getElementById("check4").innerHTML = "&#10004"
    ok2 = 1;
    final();
}

function checkcountry(value){
    document.getElementById("check5").innerHTML = "&#10004"
    ok3 = 1;
    final();
    switch(value){
        case "0": document.getElementById("email").value = ".ru"; break;
        case "1": document.getElementById("email").value = ".de"; break;
        case "2": document.getElementById("email").value = ".ru"; break;
        case "3": document.getElementById("email").value = ".ru"; break;
    }
}

function checkemail(value){
    let regexp = /^[A-Z0-9._]+$/i;
    if (regexp.test(value)){
        document.getElementById("check6").innerHTML = "&#10004"
        ok4 = 1;
        final();
    }
    else{
        document.getElementById("check6").innerHTML = "&#10006"
        ok4 = 0;
    }
}

function checkprod(){
    let regexp = /^[0-9]+$/;
    if (regexp.test(document.getElementById("product1").value) & regexp.test(document.getElementById("product2").value) & regexp.test(document.getElementById("product3").value)){
        document.getElementById("check7").innerHTML = "&#10004";
        ok5 = 1;
        final();
    }
    else{
        document.getElementById("check7").innerHTML = "&#10006";
        ok5 = 0;
    }
}

function final(){
    alert(c)
    if (ok1 & ok2 & ok3 & ok4 & ok5) {
        // document.getElementById("check7").innerHTML = "govno";
        document.getElementById("secret1").style = "visibility: visible";
        document.getElementById("secret2").style = "visibility: visible";
    }
}