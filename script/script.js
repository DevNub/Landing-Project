window.onload = function(){
    //Part1
    //get social buttons /mote elements
    //find a way to move them randomly, within a limited space around the main logo
    var fb = document.getElementById("facebook");
    var tw = document.getElementById("twitter");
    var ig = document.getElementById("instagram");
    var us = document.getElementById("photoshelter");
    var jm = document.getElementById("jamaicaStore");
    var fpx = document.getElementById("i500px");
    var logo = document.getElementById("logo");
    var r1=-1;
    var r2=0;
    var r3=0;
    var r4=1;
    var r5=0;
    var count=0;
    var count2=0;
    var count3=1;
    
    //BUTTON POSITIONs
    var fbi_l = fb.style.left;
    var fbi_r = fb.style.right;
    var fbi_t =fb.style.top;
    var fbi_b =fb.style.bottom;
    
    var igi_l = ig.style.left;
    var igi_r = ig.style.right;
    var igi_t =ig.style.top;
    var igi_b =ig.style.bottom;
    
    var fpxi_l = fpx.style.left;
    var fpxi_r = fpx.style.right;
    var fpxi_t =fpx.style.top;
    var fpxi_b =fpx.style.bottom;
    
    var twi_l = tw.style.left;
    var twi_r = tw.style.right;
    var twi_t =tw.style.top;
    var twi_b =tw.style.bottom;
    
    //STATES
    var comeback = false;
    var goup =false;
    var jigglebot = false;
    var jiggletop = false;
    
    var igcomeback = true;
    var dontcomeback = false;
    var iggoup =false;
    var iggodown = false;
    var igjigglebot = false;
    var igjiggletop = false;
    
    var fpxup = false;
    var fpxleft = false;
    var fpxreturn =false;
    
    var twdown = false;
    var twright = false;
    var twreturn = false;
    
    //TIMERS
    
    var dpm = setInterval(randmotes, 100);  //displacement
    var rpm = setInterval(rotamotes, 160);  //rotations
    //var ppm = setInterval(pulsemotes, 50); //pulse/breathing effect

    
    //rotamotes;
    
    
    
    function rotamotes(){  //rotations
    
        if(count==19){
            
            count2=20;
            count=0;
            count3=0;
            r5=-3;
        }
        if(count2==60){
            count2=2;
            count3=0;
        }
        
        if(count3!=1){
            r3-=10;
            tw.style.transform="rotate("+r3+"deg)";
            //us.style.transform="rotate("+r3+"deg)";
        }
        if(count3!=1){
            //r4+=15;
            count3=1;
            //fpx.style.transform="rotate("+r4+"deg)";
        }
        
        if(count2<=40){
            r2=r2-2;
            count2+=1;
            ig.style.transform="rotate("+r2+"deg)";
            //jm.style.transform="rotate("+r5+"deg)";
            
        }
        
        if(count2<=40){
            //r5=r5+1;
            count2+=1;
            tw.style.transform="rotate("+r5+"deg)";
            
        }
        
        
        
        
        
        if(count<7){
            
            r1+=1;
            r4-=1;
            r5+=1;
            
            count+=1;
            fb.style.transform="rotate("+r1+"deg)";
            fpx.style.transform="rotate("+r4+"deg)";
            us.style.transform="rotate("+r5+"deg)";
            jm.style.transform="rotate("+r5+"deg)";
            
        }
        if((count>6)&&(count<19)){
            
            r1-=1;
            r4+=1;
            r5-=1;
            count+=1;
            fb.style.transform="rotate("+r1+"deg)";
            fpx.style.transform="rotate("+r4+"deg)";
            us.style.transform="rotate("+r5+"deg)";
            jm.style.transform="rotate("+r5+"deg)";
            
        }
    }
    
    function randmotes(){  //displacement
        
       
       
//FACEBOOK DISPLACEMENT 
        //object.style.left = "auto|length|%|initial|inherit"
        //left distance range -100 to 330px
        //top distance range  -100 to 440px
        
        
        
        
        //dont pass left floor boundary
        if(fbi_l<=-100){
            //comeback=false;
            //goup=true;
        }
        if(fbi_t<=-100){
            //goup=true;
            //goup=false;
        }
        
        if(fbi_r>=100){
            //comeback=false;
        }
        //if not at left ceiling boundary continue right**
        if(comeback===false){
            fbi_r-=1;  //M O V E RIGHT 
        }
        //else come back but dont pass left floor boundary
        if(fbi_r<=-300){
            if(goup===false){
                fbi_b-=1;    // M O V E  DOWN
                if(fbi_r<-350){
                    comeback=true;
                    jiggletop = false;
                }
                if(fbi_r>-320){    //JIGGLE WITHIN RIGHTleftBOUNDS
                    comeback=false;
                }
                if(fbi_b<-400){    //GO LEFT IF  HIT BOTTOM
                    comeback=true;
                    jigglebot=true;  //STATE WHEN CAN JIGGLE AT THE BOTTOM (awks ik)
                }
                if(fbi_r>=10){    //JIGGLE WITHIN RIGHTrightBOUNDS
                    comeback=false;
                    goup=true;
                    jigglebot = false;
                }
            }
            
        }
        
        if(comeback===true){
            fbi_r+=1;
            if(fbi_r>=150){
                //comeback=false;
                goup=true;
            }
            if(fbi_r>=150){
                comeback=false; // JIGGLE WITHIN LEFTleftBOUNDS
                //fbi_l-=1;
            }
            
            
        }
        if(goup===true){
                //fbi_t-=1;
                fbi_b+=1;   // M O V E  UP
                
                if(fbi_r<=100){
                    comeback=true; //JIGGLE WITHIN LEFTrightBOUNDS
                }
        }
            
            if(fbi_b>=50){   //STOP MOVING UP
                comeback=false;
                goup=false;
                jiggletop=true;  //STATE WHEN CAN PERFORM JIGGLE MOVEMENT AT THE TOP (awks)
            }
            
            
        //KEEP THE JIGGLE IN CONTROL   this shit not worrkinggg 
            if(jigglebot===true){
                if(goup===false){
                    if(comeback===true){//if(at or past floor)aka when comeback is enabled
                       if((fbi_b<-320)&&(fbi_r<=-200)){//(under upper floor limit){
                            fbi_b+=1;//move up 
                       }
                       
                       if((fbi_b>=-450)&&(fbi_r<=-150)){//(at or past upper floor limit){
                            fbi_b-=1;//move down
                        }
                    }
                    
                    
                    if((fbi_b>=-400)&&(fbi_r>300)){//(at or past upper floor limit){
                        //goup=false;
                        //if(fbi_b>=-400){//(above floor lower limit){
                            //fbi_b-=1;//move down
                        //}
                    }
                }
            }
            
            if(jiggletop===true){
                //if(at or past ceiling){
                  //  move down
                //}
            }
            
            
        //moving along le sides with changing conditions & values in the function
        
        //fb
        fb.style.position = "relative"
        fb.style.left = ""+fbi_l+"px";
        fb.style.right = ""+fbi_r+"px";
        fb.style.bottom = ""+fbi_b+"px";
        fb.style.top = ""+fbi_t+"px";






        
//INSTAGRAM DISPLACEMENT  SAME DIRECTION AS FB
        //ig
        
        //object.style.left = "auto|length|%|initial|inherit"
        //left distance range -130 to 380px  l
        //top distance range  130 to 430px   t
        
        
        if(igcomeback===true){
            igi_l-=2;
        }
        if(igi_l<=-130){
            igcomeback=false;
            iggoup=true;
        }
        
        if(iggoup===true){
            igi_t-=1;
            
            if(igcomeback===false){
                igi_l+=1;
            }
            if(igi_l>-80){
                if(!dontcomeback){
                    igcomeback=true;
                }
            }
            if(igi_t<=-430){
                iggoup=false;
                igcomeback=false;
            }
        }
        
        if(iggoup===false){
            
            if(iggodown===false){
            if(igcomeback===false){
                igi_l+=1;
                
                if(igi_t<=-350){
                    igi_t+=1;
                }
                
                if(igi_t>=-350){
                    dontcomeback=true;
                    iggoup=true;
                }
                
                if(igi_l>=320){
                    dontcomeback=false;
                    //igcomeback=true;
                    iggoup=false;
                    iggodown=true;
                }
            }}
            if(iggodown===true){
                igi_t+=1;
                
                if(igcomeback===false){
                    igi_l+=1;
                }
                if(igi_l>=360){
                    if(!dontcomeback){
                        igcomeback=true;
                    }
                }
                if(igi_l<=320){
                    igcomeback=false;
                }
                if(igi_t>=100){
                    iggodown=false;
                }
            }
        }
         
        //moving along le sides with changing conditions & values in the function
        
        //fb
        ig.style.position = "relative"
        ig.style.left = ""+igi_l+"px";
        ig.style.right = ""+igi_r+"px";
        //ig.style.bottom = ""+igi_b+"px";
        ig.style.top = ""+igi_t+"px";
    

    
    



//500PX DISPLACEMENT  OPPOSITE DIRECTION
        if(fpxreturn===false){
            if(fpxleft===false){
                if(fpxi_r>=-310){
                    fpxi_r-=1;
                }
                if(fpxi_r<=-240){
                    fpxup=true;
                }
            }
            
            if(fpxup===true){
                if(fpxi_t>=-350){
                    fpxi_t-=1;
                }
                if(fpxi_t<=-320){
                    fpxleft=true;
                }
                if(fpxi_t<=-350){
                    fpxup=false;
                }
            }
            if(fpxleft===true){
               if(fpxi_r<=1){
                    fpxi_r+=1;
                }
                
                if(fpxi_r>=0){
                    fpxreturn=true;
                    fpxleft=false;
                }
            }
        }
        
        if(fpxreturn===true){
            if(fpxi_r>=-310){
                fpxi_r-=1;
            }
            if(fpxi_r<=-280){
                if(fpxi_t<=1){
                    fpxi_t+=1;
                }
            }
            if(fpxi_t>=1){
                    if(fpxi_r<=1){
                    fpxi_r+=1;
                }
                    fpxreturn=false;
                }
        }
        
        //fpx  go right,up towards twitter initial position then back
        fpx.style.position = "relative"
        fpx.style.left = ""+fpxi_l+"px";
        fpx.style.right = ""+fpxi_r+"px";
        fpx.style.bottom = ""+fpxi_b+"px";
        fpx.style.top = ""+fpxi_t+"px";
        
        
//TWITTER DISPLACEMENT OPPOSITE DIRECTION

        if(twreturn===false){
            if(twright===false){
                if(twi_l>=-290){
                    twi_l-=1;
                }
                if(twi_l<=-230){
                    twdown=true;
                }
            }
        
            if(twdown===true){
                if(twi_b>=-370){
                    twi_b-=1;
                }
                if(twi_b<=-320){
                    twright=true;
                }
                if(twi_b<=-370){
                    twdown=false;
                }
            }
            
            if(twright===true){
               if(twi_l<=1){
                    twi_l+=1;
                }
                
                if(twi_l>=0){
                    twreturn=true;
                    twright=false;
                }
            }
        }
        if(twreturn===true){
            if(twi_l>=-290){
                twi_l-=1;
            }
            if(twi_l<=-210){
                if(twi_b<=0){
                    twi_b+=1;
                }
                if(twi_b>=0){
                    if(twi_l<=1){
                    twi_l+=1;
                }
                    twreturn=false;
                }
            }
            
        }
        
        //tw go left,down towards 500px initial position then back 
        tw.style.position = "relative"
        tw.style.left = ""+twi_l+"px";
        tw.style.right = ""+twi_r+"px";
        tw.style.bottom = ""+twi_b+"px";
        tw.style.top = ""+twi_t+"px";
    
        }
    

































    //Part 2  DONE IN CSS :O
    //Blurry Panoramic Background Image Loop
    //there must be a way lol  
    //RESULT => PART 2 DONE IN CSS :O
    
    
    
    //Part 3 - Final
    //Pulsating and glow effect on social icons and main logo
    //implement by changing icon names to their pulse and glow style
    //but this has to be placed in a function that loops the changes at a moderate pace o.0
    //RESULT => given up on this function because it was hiding the glow effect
    
    
    //NB glow effect (hover) might be possible to implement in css
    //RESULT => NVM DID IT IN HTML LOL
   
    
    
    
/*    loops the ICON changes at a moderate pace

    function pulsemotes(){
        
        var dist=fbi_r;
            var dist=fbi_r;
        if(((dist)%1)===0){
            fb.setAttribute('src', 'fb-p.png');//change image to pulse 1
            ig.setAttribute('src', 'fb-p.png');//change image to pulse 1
        }
        if(((dist+1)%17)!==0){
            fb.setAttribute('src', 'fb-d.png');//change image to default
            ig.setAttribute('src', 'ig-d.png');//change image to default
        }
        else{
            fb.setAttribute('src', 'fb-pp.png');//change to pulse 2
            ig.setAttribute('src', 'fb-pp.png');//change to pulse 2
        }
        
    }*/
}