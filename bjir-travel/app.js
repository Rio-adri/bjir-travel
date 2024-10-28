

document.addEventListener('DOMContentLoaded' ,function(){
    let start = 0;
    otomatis();

    function otomatis(){
        const sliders = document.querySelectorAll('.picture');

        for (let i = 0; i < sliders.length; i++){
            sliders[i].style.display = "none";
        }
        
        if(start > sliders.length - 1){
            start = 0;
        }

        sliders[start].style.display = "block";
        start++;

        setTimeout(otomatis, 3000);

    }


    const burger = document.getElementById('burger');
    const menu = document.getElementById('menu');

    burger.addEventListener('click', function(){
        if(window.innerWidth <= 768){
            if (menu.style.display === "block") {
                menu.style.display = "none";
            } else {
                menu.style.display = "block";
            }
        }
        else{
            menu.style.display === "block"
        }
        
    })

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            menu.style.display = "flex"; 
        } else {
            menu.style.display = "none"; 
        }
    });
    

    
})




