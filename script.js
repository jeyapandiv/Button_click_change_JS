// let colo1 = document.getElementById("btnom1");
// let colo2 = document.getElementById("btnom2");
// let colo3 = document.getElementById("btnom3");
// colo1.addEventListener("click", coLour);
// function coLour()
// {
//     colo1.style.backgroundColor = "Indigo"
//     colo1.style.color = "Yellow"
//     colo1.innerHTML = "Clicked";
// }
// colo2.addEventListener("click", cOlour);
// function cOlour()
// {
//     colo2.style.backgroundColor = "Indigo"
//     colo2.style.color = "Yellow"
//     colo2.innerHTML = "Clicked";
// }
// colo3.addEventListener("click", colOur);
// function colOur()
// {
//     colo3.style.backgroundColor = "Indigo"
//     colo3.style.color = "Yellow"
//     colo3.innerHTML = "Clicked";
// }


//------------------------------------Another method using flag-----------------------------------------------------------
let btn = document.querySelectorAll("button");

console.log(btn);

for(let i=0; i<= btn.length-1;i++)
{
    console.log("loop")
    btn[i].flag = false;
    btn[i].addEventListener("click",function()
    {
        console.log("Incoming");
        console.log("btn flag check : "+btn[i].flag )
        if(btn[i].flag == false)
        {
            console.log("if block")
            btn[i].style.backgroundColor = "#c4fde3";
            btn[i].style.color = "#03532f";
            btn[i].innerText ="Clicked";
            btn[i].flag = true;
            console.log(btn[i])
        }
        else
        {
            btn[i].style.backgroundColor = "#eddbfd";
            btn[i].innerText ="click me";

            btn[i].flag = false;
        }
    });
}