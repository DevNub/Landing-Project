window.onload = function(){
    //Part1
    //get social buttons /mote elements
    //find a way to move them randomly, within a limited space around the main logo
    var fb = document.getElementById("facebook");
    var tw = document.getElementById("twitter");
    var ig = document.getElementById("instagram");
    var us = document.getElementById("photoshelter");
    var jm = document.getElementById("jamaicaStore");
    var fpx = document.getElementById("500px");
    var logo = document.getElementById("logo");
    var r1=-1;
    var r2=0;
    var r3=0;
    var r4=0;
    var r5=0;
    var count=0;
    var count2=0;
    var count3=1;


    var rpm = setInterval(rotamotes, 160);
    rotamotes;


    function rotamotes(){  //rotations

        if(count==19){

            count2=20;
            count=0;
            count3=0;
        }
        if(count2==60){
            count2=2;
            count3=0;
        }

        if(count3!=1){
            r3-=10;
            tw.style.transform="rotate("+r3+"deg)";
        }
        if(count3!=1){
            r4+=15;
            count3=1;
            fpx.style.transform="rotate("+r4+"deg)";
        }

        if(count2<=40){
            r2=r2-2;
            count2+=1;
            ig.style.transform="rotate("+r2+"deg)";

        }

        if(count2<=40){
            r5=r5+2;
            count2+=1;
            tw.style.transform="rotate("+r5+"deg)";

        }





        if(count<7){

            r1+=1;
            count+=1;
            fb.style.transform="rotate("+r1+"deg)";
            jm.style.transform="rotate("+r1+5+"deg)";
        }
        if((count>6)&&(count<19)){

            r1-=1;
            count+=1;
            fb.style.transform="rotate("+r1+"deg)";
            us.style.transform="rotate("+r1+5+"deg)";
        }
    }

    function randmotes(){  //displacement

    }

    //Part 2
    //Blurry Panoramic Background Image Loop
    //there must be a way lol

    //Part 3 - Final
    //Pulsating and glow effect on social icons and main logo
    //implement by changing icon names to their pulse and glow style
    //but this has to be placed in a function that loops the changes at a moderate pace o.0
}
