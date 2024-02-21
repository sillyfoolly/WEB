let remontlist = new Array(25, 60, 144, 256)
let svoilist = new Array (15, 40, 44, 200)
let telephlist = new Array (5000, 10000, 15000)

function calcteleph()
{
    document.all.teltotal.value = parseInt(document.all.teleph.value) * 1;
    calcall();
}

function calcacs()
{
    document.all.acstotal.value = parseInt(document.all.acs.value) * 100;
    calcall();
}

function calcrem()
{
    document.all.remtotal.value = 0;
    for (let i = 0; i < 4; i++){
        if(document.all.rem[i].selected){
            document.all.remtotal.value = parseInt(document.all.remtotal.value) + parseInt(remontlist[i])
            if(document.all.svoi.checked)
            {
                document.all.remtotal.value = parseInt(document.all.remtotal.value) - parseInt(svoilist[i])
            }
        }
    }
    calcall();
}

function calcsetkart()
{
    document.all.setkarttotal.value = parseInt(document.all.setkart.value) * 300;
    calcall();
}

function calcall()
{
    document.all.total.value = parseInt(document.all.teltotal.value) + parseInt(document.all.acstotal.value) + parseInt(document.all.remtotal.value) + parseInt(document.all.setkarttotal.value)
}