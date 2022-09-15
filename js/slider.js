
(function(){
    console.log("start");
    const buttons=document.querySelectorAll(".btn");
    const images=["1","2","3","4","5"];
    let slidersContainer=document.querySelector(".sliders");
    let counter=0;
    buttons.forEach(function(e){
        e.addEventListener("click",function (){
            if(e.classList.contains("btn-left"))
                 {
                     counter--;
                     if(counter<0)
                     {
                        counter=images.length-1;
                        
                     }
                    slidersContainer.style.background=`url("/img/${images[counter]}.jpg") center/cover no-repeat`
                }
            else if(e.classList.contains("btn-right"))
            {
                counter++;
                if(counter>images.length-1)
                {
                   counter=0;
                   
                }
               slidersContainer.style.background=`url("/img/${images[counter]}.jpg") center/cover no-repeat`
           }
        })

        
    })


})();