"use strick"

let btn = document.querySelectorAll("button");

for(let i=0; i< btn.length;i++)
{
    btn[i].flag = 0;
    btn[i].addEventListener("click",function()
    {
        if(btn[i].flag == 0)
        {
            btn[i].style.backgroundColor = "#c4fde3";
            btn[i].style.color = "#03532f";
            btn[i].innerText ="Clicked";
            btn[i].flag = 1;
        }
        else
        {
            btn[i].style.backgroundColor = "#eddbfd";
            btn[i].innerText ="click me";
            btn[i].flag = 0;
        }
    });
}