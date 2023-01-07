let flag=1;
export default function expandMenu(menu)
{
    if(flag===1)
    {
        menu.current.style.left="-100%";    
        flag=0;
        
        menu.current.addEventListener("click",()=>
        {
            menu.current.style.left="-100%";
        })
    }
    menu.current.style.left=(menu.current.style.left=="-100%")?"0%":"-100%";
}

