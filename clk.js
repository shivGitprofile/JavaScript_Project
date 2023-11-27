let a;
let date;
let time;
const option={weekday: 'long', year: 'numeric' , month: 'long', day: 'numeric'};
log=setInterval(()=>
{
    a=new Date();
    date=a.toLocaleDateString(undefined,option);
    time=a.getHours()+':'+a.getMinutes()+':'+a.getSeconds();
    document.getElementById('time').innerHTML=time+"<br>"+date;
        },1000);
        clr=setInterval(log,1000)