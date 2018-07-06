//Bilder hochlade
function preloader(){
    var i=0;
    var j=0;
    imageObj=[
        [],[],[],[],[],[],[],[],[]
    ];
    //Multidimensionales Array für Images imageArray[][]
    var imageArray=[
        /*CC0*/ ["images/Spielkarten_1/cc0/Spielkarte_0.png", "images/Spielkarten_1/cc0/Spielkarte_1.png", "images/Spielkarten_1/cc0/Spielkarte_2.png", "images/Spielkarten_1/cc0/Spielkarte_3.png", "images/Spielkarten_1/cc0/Spielkarte_4.png", "images/Spielkarten_1/cc0/Spielkarte_5.png", "images/Spielkarten_1/cc0/Spielkarte_6.png", "images/Spielkarten_1/cc0/Spielkarte_7.png", "images/Spielkarten_1/cc0/Spielkarte_8.png", "images/Spielkarten_1/cc0/Spielkarte_9.png", "images/Spielkarten_1/cc0/Spielkarte_10.png", "images/Spielkarten_1/cc0/Spielkarte_11.png"],
        /*CC-BY*/ ["images/Spielkarten_1/cc-by/Spielkarte_01-cc-by.png", "images/Spielkarten_1/cc-by/Spielkarte_02-cc-by.png", "images/Spielkarten_1/cc-by/Spielkarte_03-cc-by.png", "images/Spielkarten_1/cc-by/Spielkarte_b_3D-cc-by.png", "images/Spielkarten_1/cc-by/Spielkarte_b_elp-cc-by.png", "images/Spielkarten_1/cc-by/Spielkarte_b_foto-cc-by.png", "images/Spielkarten_1/cc-by/Spielkarte_b_platine-cc-by.png", "images/Spielkarten_1/cc-by/Spielkarte_b_ppt-cc-by.png","images/Spielkarten_1/cc-by/Spielkarte_b_tabelle-cc-by.png", "images/Spielkarten_1/cc-by/Spielkarte_b_text-cc-by.png", "images/Spielkarten_1/cc-by/Spielkarte_b_ton-cc-by.png", "images/Spielkarten_1/cc-by/Spielkarte_b_video-cc-by.png", "images/Spielkarten_1/cc-by/Spielkarte_b_worte-cc-by.png", "images/Spielkarten_1/cc-by/Spielkarte_g_film-cc-by.png", "images/Spielkarten_1/cc-by/Spielkarte_g_wuerfel-cc-by.png", "images/Spielkarten_1/cc-by/Spielkarte_rand_grau_01-cc-by.png"],
        /*CC-BY-NC*/ ["images/Spielkarten_1/cc-by-nc/Spielkarte_g-grafik-cc-by-nc.png", "images/Spielkarten_1/cc-by-nc/Spielkarte_g-zahnrad-cc-by-nc.png", "images/Spielkarten_1/cc-by-nc/Spielkarte_g_3D-cc-by-nc.png", "images/Spielkarten_1/cc-by-nc/Spielkarte_g_elp-cc-by-nc.png", "images/Spielkarten_1/cc-by-nc/Spielkarte_g_foto-cc-by-nc.png", "images/Spielkarten_1/cc-by-nc/Spielkarte_g_platine-cc-by-nc.png", "images/Spielkarten_1/cc-by-nc/Spielkarte_g_ppt-cc-by-nc.png", "images/Spielkarten_1/cc-by-nc/Spielkarte_g_tabelle-cc-by-nc.png", "images/Spielkarten_1/cc-by-nc/Spielkarte_g_text-cc-by-nc.png", "images/Spielkarten_1/cc-by-nc/Spielkarte_g_ton-cc-by-nc.png", "images/Spielkarten_1/cc-by-nc/Spielkarte_g_video-cc-by-nc.png", "images/Spielkarten_1/cc-by-nc/Spielkarte_g_worte-cc-by-nc.png"],
        /*CC-BY-SA*/ ["images/Spielkarten_1/cc-by-sa/Spielkarte_0_ton-cc-by-sa.png", "images/Spielkarten_1/cc-by-sa/Spielkarte_O-grafik-cc-by-sa.png", "images/Spielkarten_1/cc-by-sa/Spielkarte_o-zahnrad-cc-by-sa.png", "images/Spielkarten_1/cc-by-sa/Spielkarte_o_3D-cc-by-sa.png", "images/Spielkarten_1/cc-by-sa/Spielkarte_O_elp-cc-by-sa.png", "images/Spielkarten_1/cc-by-sa/Spielkarte_o_film-cc-by-sa.png", "images/Spielkarten_1/cc-by-sa/Spielkarte_o_foto-cc-by-sa.png", "images/Spielkarten_1/cc-by-sa/Spielkarte_o_platine-cc-by-sa.png", "images/Spielkarten_1/cc-by-sa/Spielkarte_o_ppt-cc-by-sa.png", "images/Spielkarten_1/cc-by-sa/Spielkarte_o_tabelle-cc-by-sa.png", "images/Spielkarten_1/cc-by-sa/Spielkarte_O_text-cc-by-SA.png", "images/Spielkarten_1/cc-by-sa/Spielkarte_o_video-cc-by-sa.png", "images/Spielkarten_1/cc-by-sa/Spielkarte_O_worte-cc-by-sa.png", "images/Spielkarten_1/cc-by-sa/Spielkarte_o_wuerfel-cc-by-sa.png"],
        /*CC-BY-ND*/ ["images/Spielkarten_1/cc-by-nd/Spielkarte_g2-cc-by-nd.png", "images/Spielkarten_1/cc-by-nd/Spielkarte_g2-zahnrad-cc-by-nd.png","images/Spielkarten_1/cc-by-nd/Spielkarte_g2_3D-cc-by-nd.png", "images/Spielkarten_1/cc-by-nd/Spielkarte_g2_elp-cc-by-nd.png", "images/Spielkarten_1/cc-by-nd/Spielkarte_g2_film-cc-by-nd.png", "images/Spielkarten_1/cc-by-nd/Spielkarte_g2_foto-cc-by-nd.png", "images/Spielkarten_1/cc-by-nd/Spielkarte_g2_platine-cc-by-nd.png", "images/Spielkarten_1/cc-by-nd/Spielkarte_g2_ppt-cc-by-nd.png", "images/Spielkarten_1/cc-by-nd/Spielkarte_g2_tabelle-cc-by-nd.png", "images/Spielkarten_1/cc-by-nd/Spielkarte_g2_text-cc-by-nd.png", "images/Spielkarten_1/cc-by-nd/Spielkarte_g2_ton-cc-by-nd.png", "images/Spielkarten_1/cc-by-nd/Spielkarte_g2_video-cc-by-nd.png", "images/Spielkarten_1/cc-by-nd/Spielkarte_g2_worte-cc-by-nd.png", "images/Spielkarten_1/cc-by-nd/Spielkarte_g2_wuerfel-cc-by-nd.png", "images/Spielkarten_1/cc-by-nd/Spielkarte_grafik-cc-b-ndy.png"],
        /*CC-BY-NC-ND*/ ["images/Spielkarten_1/cc-by-nc-nd/Spielkarte_b_text-cc-by-nc-nd.png", "images/Spielkarten_1/cc-by-nc-nd/Spielkarte_g_text-cc-by-nc-nd.png", "images/Spielkarten_1/cc-by-nc-nd/Spielkarte_gr-cc-by-nc-nd.png", "images/Spielkarten_1/cc-by-nc-nd/Spielkarte_gr-zahnrad-cc-by-nc-nd.png", "images/Spielkarten_1/cc-by-nc-nd/Spielkarte_gr_3D-cc-by-nc-nd.png", "images/Spielkarten_1/cc-by-nc-nd/Spielkarte_gr_elp-cc-by-nc-nd.png", "images/Spielkarten_1/cc-by-nc-nd/Spielkarte_gr_film-cc-by-nc-nd.png", "images/Spielkarten_1/cc-by-nc-nd/Spielkarte_gr_foto-cc-by-nc-nd.png", "images/Spielkarten_1/cc-by-nc-nd/Spielkarte_gr_platine-cc-by-nc-nd.png", "images/Spielkarten_1/cc-by-nc-nd/Spielkarte_gr_ppt-cc-by-nd-nc.png", "images/Spielkarten_1/cc-by-nc-nd/Spielkarte_gr_tabelle-cc-by-nc-nd.png", "images/Spielkarten_1/cc-by-nc-nd/Spielkarte_gr_ton-cc-by-nc-nd.png", "images/Spielkarten_1/cc-by-nc-nd/Spielkarte_gr_video-cc-by-nn-nd.png", "images/Spielkarten_1/cc-by-nc-nd/Spielkarte_gr_worte-cc-by-nc-nd.png", "images/Spielkarten_1/cc-by-nc-nd/Spielkarte_gr_wuerfel-cc-by-nc-nd.png"],
        /*CC-BY-NC-SA*/ ["images/Spielkarten_1/cc-by-nc-sa/Sk_detektive-cc-by-nc-sa.png", "images/Spielkarten_1/cc-by-nc-sa/Sk_fi_text-cc-by-nc-sa.png", "images/Spielkarten_1/cc-by-nc-sa/Spielkarte_fl-cc-by-nc-sa.png", "images/Spielkarten_1/cc-by-nc-sa/Spielkarte_fl-zahnrad-cc-by-nc-sa.png", "images/Spielkarten_1/cc-by-nc-sa/Spielkarte_fl_3D-cc-by-nc-sa.png", "images/Spielkarten_1/cc-by-nc-sa/Spielkarte_fl_elp-cc-by-nc-sa.png", "images/Spielkarten_1/cc-by-nc-sa/Spielkarte_fl_film-cc-by-nc-sa.png", "images/Spielkarten_1/cc-by-nc-sa/Spielkarte_fl_foto-cc-by-nc-sa.png", "images/Spielkarten_1/cc-by-nc-sa/Spielkarte_fl_platine-cc-by-nc-sa.png", "images/Spielkarten_1/cc-by-nc-sa/Spielkarte_fl_ppt-cc-by-nc-sa.png", "images/Spielkarten_1/cc-by-nc-sa/Spielkarte_fl_tabelle-cc-by-nc-sa.png", "images/Spielkarten_1/cc-by-nc-sa/Spielkarte_fl_ton-cc-by-nc-sa.png", "images/Spielkarten_1/cc-by-nc-sa/Spielkarte_fl_video-cc-by-nc-sa.png", "images/Spielkarten_1/cc-by-nc-sa/Spielkarte_fl_worte-cc-by-nc-sa.png", "images/Spielkarten_1/cc-by-nc-sa/Spielkarte_fl_wuerfel-cc-by-nc-sa.png"],
       /*Icon_Antworten*/ ["images/cc_Icon/Icon_2/cc0.png", "images/cc_Icon/Icon_2/cc-by.png", "images/cc_Icon/Icon_2/cc-by-nc.png", "images/cc_Icon/Icon_2/cc-by-sa.png", "images/cc_Icon/Icon_2/cc-by-nd.png", "images/cc_Icon/Icon_2/cc-by-nc-nd.png", "images/cc_Icon/Icon_2/cc-by-nc-sa.png"],
        /* Tafel */ ["images/tafel.png"]
    ]; 

     //Preloading starten
     for (i=0; i<=8; i++)
     {
         for (j=0; j<imageArray[i].length; j++){
         imageObj[i][j]=new Image();
         imageObj[i][j].src=imageArray[i][j];
        }
    }
}


//Dies mit windows.onload könnte eventuell lange dauern, bis die Seit komplet geladen ist

$(document).ready(function() {

    var canvas=document.getElementById("main_canvas");
    var context=main_canvas.getContext("2d");
    canvas.addEventListener("mousedown", doMouseDown, false);

    var playing=false;
    var min=0;
    var max_1=11;
    var max_2=6;
    var score=0;
    
    
    if (window.localStorage) {
        $('#fortsetzen').toggleClass("disabled");
    }

    // Startbutton Click
    $('#start').click(function(){
        $(this).parent().fadeOut();
        $('#main_canvas').removeClass("canvas_style", 25, 50, "text");
       //Hintergrung bzw. Tafel
        context.drawImage(imageObj[8][0], 10, 11, 840, 520);
        //Score
        context.font="20px Georgia";
        context.fillStyle="white";
        context.fillText("Score: " + score,25,50); 
        
    });

    //Kartenstappel Click
    $('#kartenstapel').click(function(){
        var index_1=Math.floor(Math.random()*(max_2-min+1))+min;
        var index_2=Math.floor(Math.random()*(max_2-min+1))+min;
        var i=Math.floor(Math.random()*(max_2-min+1))+min;
        var j=Math.floor(Math.random()*(max_1-min+1))+min;
        var icon_index=[];
        var m=0;
        score++;
        context.drawImage(imageObj[8][0], 25, 30, 120, 30, 25, 30, 120, 30);
        context.fillText("Score: " + score,25,50);
        
        while (m<=6){
            var x=Math.floor(Math.random()*(max_2-min+1))+min;
            if (icon_index.includes(x)==false && m<=6){
                icon_index[m]=x;
                m++;
            }
            else if (icon_index.includes(x)==true && m<=6){
                continue;
            }
        }

        //Karte 1 und 2
        context.drawImage(imageObj[index_1][i], 140, 60, 250, 300);
        context.drawImage(imageObj[index_2][j], 470, 60, 250, 300);
        //Antworten
        context.drawImage(imageObj[7][icon_index[0]], 50, 450, 100, 40);
        context.drawImage(imageObj[7][icon_index[1]], 160, 450, 100, 40);
        context.drawImage(imageObj[7][icon_index[2]], 270, 450, 100, 40);
        context.drawImage(imageObj[7][icon_index[3]], 380, 450, 100, 40);
        context.drawImage(imageObj[7][icon_index[4]], 490, 450, 100, 40);
        context.drawImage(imageObj[7][icon_index[5]], 600, 450, 100, 40);
        context.drawImage(imageObj[7][icon_index[6]], 710, 450, 100, 40);

    
        
        /* context.shadowBlur=8;
        context.shadowOffsetY=5;
        context.shadowColor="gray"; */
        
    });

    //Klick von Soundsbutton
    $('#sound').click(function(){
        $("#sound").toggleClass("sound_icon fa fa-volume-off sound_icon1 fa fa-volume-up");
        
        if (playing==false) {
            document.getElementById('myAudio').play();
            playing=true;
        }
        else {
            document.getElementById('myAudio').pause();
            playing=false;
        }
    });

    //Klick von Hilfebutton
    $('#hilfe').click(function(){
        $('#id_hilfeseite_1').toggleClass("rueckseite");
    });

    $('#a1_rechts').click(function(){
        $('#id_hilfeseite_2').toggleClass("rueckseite");
    });

    $('#a1_close, #a2_close').click(function(){
        $('#id_hilfeseite_1').addClass("rueckseite"); 
        $('#id_hilfeseite_2').addClass("rueckseite");
    });

    $('#a2_links').click(function(){
        $('#id_hilfeseite_2').toggleClass("rueckseite");
    });
});

preloader();

function doMouseDown(event) {
    canvas_x=event.pageX;
    canvas_y=event.pageY;
    document.getElementById('x').innerHTML=canvas_x;
    document.getElementById('y').innerHTML=canvas_y;
}
