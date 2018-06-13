//Dies mit windows.onload könnte eventuell lange dauern, bis die Seit komplet geladen ist

$(document).ready(function() {

    var canvas=document.getElementById("main_canvas");
    var context=main_canvas.getContext("2d");
    var hintergrund=new Image();

    var playing=false;
    //$("div.grün_container, #hilfe, #sound").fadeOut();
    //$("div.grün_container, #hilfe, #sound").delay(4000).fadeIn();
    //$('#logo').delay(4000).fadeOut();
    

    $('#start').click(function(){
        $(this).parent().fadeOut();
        hintergrund.onload=function(){
            context.drawImage(hintergrund, 10, 10, 840, 520);
        };
        hintergrund.src='images/tafel03_1.png';
        context.shadowBlur=8;
        context.shadowOffsetY=5;
        context.shadowColor="gray";
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

    $('#a_rechts').click(function(){
        $('#id_hilfeseite_2').toggleClass("rueckseite");
    });

    $('#a_links').click(function(){
        $('#id_hilfeseite_2').toggleClass("rueckseite");
    });
});

