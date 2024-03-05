function daysPassed(){
    window.document.write('<h1>Задание 1</h1>')
    var n = 0;
    let dt1 = new Date(window.prompt('Год', 2024),window.prompt('Месяц', 12)-1,window.prompt('День', 31));
    let dt2 = dt1.getMonth();
    switch(dt2){
    case 1:
        var n = 31;
        break;
    case 2:
        var n = 59;
        break;
    case 3:
        var n = 90;
        break;
    case 4:
        var n = 120;
        break;
    case 5:
        var n = 151;
        break;
    case 6:
        var n = 181;
        break;
    case 7:
        var n = 212;
        break;
    case 8:
        var n = 243;
        break;
    case 9:
        var n = 273;
        break;
    case 10:
        var n = 304;
        break;
    case 11:
        var n = 334;
        break;
    }
    if (dt2>1 & dt1.getFullYear()%4==0)
        n++;
    var dt3 = dt1.getDate() + n;
    window.document.write('<p>Дней прошло с начала ',dt1.getFullYear(),' до ',dt1.getDate(),'.',(dt1.getMonth()+1),'.',dt1.getFullYear(),' - ', dt3, '</p>','<h1>Задание 2</h1>','<button id="btn" type="button" onclick="age();">start</button>')
}

function age(){
    let button = document.getElementById('btn');
    button.style.display = "none"
    let dt1 = new Date(Date.now());
    let dt2 = new Date(window.prompt('Год рождения', 2005),window.prompt('Месяц рождения', 1)-1,window.prompt('День рождения', 21));
    var n = dt1.getFullYear() - dt2.getFullYear();
    if (dt1.getMonth()==dt2.getMonth() & dt1.getDate()<dt2.getDate())
        var n = n - 1;
    else if(dt1.getMonth()<dt2.getMonth())
        var n = n - 1;
    window.document.write('<p>День рождения: ',dt2.getDate(),'.',(dt2.getMonth()+1),'.',dt2.getFullYear(),'</p>','<p>Тебе ',n,' лет</p>','<h1>Задание 3</h1>','<button type="button" id="btn2" onclick="task3();">start</button>');
}

function task3(){
    let button = document.getElementById('btn2');
    button.style.display = "none"
    let dt1 = new Date(window.prompt('Первая дата. Год', 2024),window.prompt('Первая дата. Месяц', 2)-1,window.prompt('Первая дата. День', 21),window.prompt('Первая дата. Часы',8),window.prompt('Первая дата. Минуты',30));
    let dt2 = new Date(window.prompt('Вторая дата. Год', 2024),window.prompt('Вторая дата. Месяц', 2)-1,window.prompt('Вторая дата. День', 21),window.prompt('Вторая дата. Часы',15),window.prompt('Вторая дата. Минуты',50));
    window.document.write('<p>Разница между ',dt1.getDate(),'.',(dt1.getMonth()+1),'.',dt1.getFullYear(),'(',dt1.getHours(),':',dt1.getMinutes(),')',' и ',dt2.getDate(),'.',(dt2.getMonth()+1),'.',dt2.getFullYear(),'(',dt2.getHours(),':',dt2.getMinutes(),')','</p>','<p>',(dt2-dt1)/60000,' минут</p>','<h1>Задание 4</h1>','<button type="button" id="btn3" onclick="task4();">start</button>');
}

function task4(){
    let button = document.getElementById('btn3');
    button.style.display = "none"
    var n = window.prompt('Введите минуты',200);
    window.document.write('<p>',n,' минут = ',(n-n%60)/60,' часа, ',n%60,' минут','<h1>Задание 5</h1>','<button type="button" id="btn4" onclick="task5();">start</button>')
}

function task6(){
    let button = document.getElementById('btn5');
    button.style.display = "none"
    var dates =[];
    let maks = new Date(0,0,0);
    var n = window.prompt('Количество дат',3);
    window.document.write('<p>Массив дат: [')
    for (i = 1; i <= n; ++i){
        let dt = new Date(window.prompt('Год:',2015),window.prompt('Месяц:',i)-1,window.prompt('День:',i));
        dates.push(dt);
        if (maks < dt)
            maks = dt;
        if (i==n)
            window.document.write(dt.getDate(),'.',(dt.getMonth()+1),'.',dt.getFullYear());
        else
            window.document.write(dt.getDate(),'.',(dt.getMonth()+1),'.',dt.getFullYear(),', ');
    }
    window.document.write(']','<p>Максимальная дата: ',maks.getDate(),'.',(maks.getMonth()+1),'.',maks.getFullYear(),'</p>','<h1>Задание 7</h1>','<button type="button" id="btn6" onclick="task7();">start</button>')
}

function task5(){
    let button = document.getElementById('btn4');
    button.style.display = "none"
    var dates =[];
    let mini = new Date(9999,11,31);
    var n = window.prompt('Количество дат',3);
    window.document.write('<p>Массив дат: [')
    for (i = 1; i <= n; ++i){
        let dt = new Date(window.prompt('Год:',2015),window.prompt('Месяц:',i)-1,window.prompt('День:',i));
        dates.push(dt);
        if (mini > dt)
            mini = dt;
        if (i==n)
            window.document.write(dt.getDate(),'.',(dt.getMonth()+1),'.',dt.getFullYear());
        else
            window.document.write(dt.getDate(),'.',(dt.getMonth()+1),'.',dt.getFullYear(),', ');
    }
    window.document.write(']','<p>Минимальная дата: ',mini.getDate(),'.',(mini.getMonth()+1),'.',mini.getFullYear(),'</p>','<h1>Задание 6</h1>','<button type="button" id="btn5" onclick="task6();">start</button>')
}

function task7(){
    let button = document.getElementById('btn6');
    button.style.display = "none"
    let dt1 = new Date(window.prompt('Первая дата. Год', 2024),window.prompt('Первая дата. Месяц', 2)-1,window.prompt('Первая дата. День', 21),window.prompt('Первая дата. Часы',8),window.prompt('Первая дата. Минуты',30));
    let dt2 = new Date(window.prompt('Вторая дата. Год', 2024),window.prompt('Вторая дата. Месяц', 2)-1,window.prompt('Вторая дата. День', 21),window.prompt('Вторая дата. Часы',15),window.prompt('Вторая дата. Минуты',50));
    window.document.write('<p>Разница между ',dt1.getDate(),'.',(dt1.getMonth()+1),'.',dt1.getFullYear(),'(',dt1.getHours(),':',dt1.getMinutes(),')',' и ',dt2.getDate(),'.',(dt2.getMonth()+1),'.',dt2.getFullYear(),'(',dt2.getHours(),':',dt2.getMinutes(),')','</p>','<p>',(dt2-dt1)/60000,' минут</p>','<h1>Задание 8</h1>','<button type="button" id="btn7" onclick="task8();">start</button>');
}

function task8(){
    let button = document.getElementById('btn7');
    button.style.display = "none"
    let dt1 = new Date(window.prompt('Первая дата. Год', 2024),window.prompt('Первая дата. Месяц', 2)-1,window.prompt('Первая дата. День', 21),window.prompt('Первая дата. Часы',7),window.prompt('Первая дата. Минуты',10));
    let dt2 = new Date(window.prompt('Вторая дата. Год', 2024),window.prompt('Вторая дата. Месяц', 2)-1,window.prompt('Вторая дата. День', 21),window.prompt('Вторая дата. Часы',16),window.prompt('Вторая дата. Минуты',10));
    window.document.write('<p>Разница между ',dt1.getDate(),'.',(dt1.getMonth()+1),'.',dt1.getFullYear(),'(',dt1.getHours(),':',dt1.getMinutes(),')',' и ',dt2.getDate(),'.',(dt2.getMonth()+1),'.',dt2.getFullYear(),'(',dt2.getHours(),':',dt2.getMinutes(),')','</p>','<p>',(dt2-dt1)/3600000,' часов</p>','<h1>Задание 9</h1>','<button type="button" id="btn8" onclick="task9();">start</button>');
}

function task9(){
    let button = document.getElementById('btn8');
    button.style.display = "none"
    let dt1 = new Date(window.prompt('Первая дата. Год', 2024),window.prompt('Первая дата. Месяц', 2)-1,window.prompt('Первая дата. День', 14),window.prompt('Первая дата. Часы',0),window.prompt('Первая дата. Минуты',0));
    let dt2 = new Date(window.prompt('Вторая дата. Год', 2024),window.prompt('Вторая дата. Месяц', 2)-1,window.prompt('Вторая дата. День', 21),window.prompt('Вторая дата. Часы',0),window.prompt('Вторая дата. Минуты',0));
    window.document.write('<p>Разница между ',dt1.getDate(),'.',(dt1.getMonth()+1),'.',dt1.getFullYear(),' и ',dt2.getDate(),'.',(dt2.getMonth()+1),'.',dt2.getFullYear(),'</p>','<p>',(dt2-dt1)/3600000/24,' дней</p>','<h1>Задание 10</h1>','<button type="button" id="btn9" onclick="task10();">start</button>');
}

function task10(){
    let button = document.getElementById('btn9');
    button.style.display = "none"
    let dt1 = new Date(window.prompt('Первая дата. Год', 2024),window.prompt('Первая дата. Месяц', 2)-1,window.prompt('Первая дата. День', 7),window.prompt('Первая дата. Часы',0),window.prompt('Первая дата. Минуты',0));
    let dt2 = new Date(window.prompt('Вторая дата. Год', 2024),window.prompt('Вторая дата. Месяц', 2)-1,window.prompt('Вторая дата. День', 21),window.prompt('Вторая дата. Часы',0),window.prompt('Вторая дата. Минуты',0));
    window.document.write('<p>Разница между ',dt1.getDate(),'.',(dt1.getMonth()+1),'.',dt1.getFullYear(),' и ',dt2.getDate(),'.',(dt2.getMonth()+1),'.',dt2.getFullYear(),'</p>','<p>',(dt2-dt1)/3600000/24/7,' недель</p>','<h1>Задание 11</h1>','<button type="button" id="btn10" onclick="task11();">start</button>');
}

function task11(){
    let button = document.getElementById('btn10');
    button.style.display = "none"
    let dt1 = new Date(window.prompt('Первая дата. Год', 2024),window.prompt('Первая дата. Месяц', 4)-1,window.prompt('Первая дата. День', 1),window.prompt('Первая дата. Часы',0),window.prompt('Первая дата. Минуты',0));
    let dt2 = new Date(window.prompt('Вторая дата. Год', 2024),window.prompt('Вторая дата. Месяц', 5)-1,window.prompt('Вторая дата. День', 1),window.prompt('Вторая дата. Часы',0),window.prompt('Вторая дата. Минуты',0));
    window.document.write('<p>Разница между ',dt1.getDate(),'.',(dt1.getMonth()+1),'.',dt1.getFullYear(),' и ',dt2.getDate(),'.',(dt2.getMonth()+1),'.',dt2.getFullYear(),'</p>','<p>',(dt2-dt1)/3600000/24/30,' месяцев</p>','<h1>Задание 12</h1>','<button type="button" id="btn11" onclick="task12();">start</button>');
}

function task12(){
    let button = document.getElementById('btn11');
    button.style.display = "none"
    let my = window.prompt('мм/гггг','03/2024')
    let dt = new Date(my.match(/\d\d\d\d/), my.match(/\d\d/) - 1, 1)
    window.document.write('<table><tr>(', dt.getMonth()+1,'/', dt.getFullYear(), ')</tr><tr><td>Пн</td><td>Вт</td><td>Ср</td><td>Чт</td><td>Пт</td><td>Сб</td><td>Вс</td></tr><tr>') 
    for (i = 1, d = 1; d <= 31; ++i){
        dt.setDate(d)
        if (dt.getDate() != d) 
            break
        if (dt.getDay() == i){
            window.document.write('<td>', dt.getDate(), '</td>')
            ++d
        }
        else if (i == 7){
            window.document.write('<td>', dt.getDate(), '</td>')
            ++d
            i = 0
            window.document.write('</tr><tr>')
        }
        else
            window.document.write('<td></td>')
    }
    window.document.write('</tr></table><h1>Задание 12</h1><button type="button" id="btn12" onclick="task13();">start</button>')
}

function task13(){
    let button = document.getElementById('btn12');
    button.style.display = "none"
    let dmy = window.prompt('дд/мм/гггг','06/03/2024')
    let arr = dmy.split('/')
    let dt = new Date(arr[2], arr[1] - 1, arr[0])
    window.document.write('<p>', dmy,'</p>')
    switch(dt.getDay()){
        case 1:
            window.document.write('Понедельник')
            break;
        case 2:
            window.document.write('Вторник')
            break;
        case 3:
            window.document.write('Среда')
            break;
        case 4:
            window.document.write('Четверг')
            break;
        case 5:
            window.document.write('Пятница')
            break;
        case 6:
            window.document.write('Суббота')
            break;
        case 0:
            window.document.write('Воскресенье')
            break;
    }
}