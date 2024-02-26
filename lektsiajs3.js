function test(form)
{
    if (form.username.value == ""){
        alert("Введите имя")
    }
    else{
        alert("Привет, " + form.username.value + "! Поле заполнено корректно");
        document.getElementById("result1").innerHTML = "<p>Спасибо, " + form.username.value + "!</p>";
    }
    if (form.confirm.checked){
        document.getElementById("result2").innerHTML = "<p>Согласие подтверждено</p>";
    }
    if (form.login.value != ""){
        document.getElementById("result3").innerHTML = "<p>Ваш логин: " + form.login.value + "</p>";
    }
    if (form.password.value != ""){
        document.getElementById("result4").innerHTML = "<p>Ваш пароль: " + form.password.value + "</p>";
    }
    if (form.status[0].checked){
        document.getElementById("result5").innerHTML = "<p>Ваш род занятий: студент</p>"
    }
    if (form.status[1].checked){
        document.getElementById("result5").innerHTML = "<p>Ваш род занятий: школьник</p>"
    }
    if (form.status[2].checked){
        document.getElementById("result5").innerHTML = "<p>Ваш род занятий: служащий</p>"
    }
    switch (form.region.value){
        case "0": document.getElementById("result6").innerHTML = "<p>Ваш регион: Калужская обл-ть</p>"; break;
        case "1": document.getElementById("result6").innerHTML = "<p>Ваш регион: Калужская обл-ть</p>"; break;
    }
    if (form.about_you.value != ""){
        document.getElementById("result7").innerHTML = "<p>Информация о Вас: " + form.about_you.value + "</p>"; 
    }
}