//Bilder hochlade
function preloader(){
    var i=0;
    var j=0;
    imageObj=[
        [],[],[],[],[],[],[],[],[],[],[],[]
    ];
    //Multidimensionales Array für Images imageArray[][]
    var imageArray=[
        /*CC0*/ ["images/Spielkarten_1/cc0/Spielkarte_0.png", "images/Spielkarten_1/cc0/Spielkarte_1.png", "images/Spielkarten_1/cc0/Spielkarte_2.png", "images/Spielkarten_1/cc0/Spielkarte_3.png", "images/Spielkarten_1/cc0/Spielkarte_4.png", "images/Spielkarten_1/cc0/Spielkarte_5.png", "images/Spielkarten_1/cc0/Spielkarte_6.png", "images/Spielkarten_1/cc0/Spielkarte_7.png", "images/Spielkarten_1/cc0/Spielkarte_8.png", "images/Spielkarten_1/cc0/Spielkarte_9.png", "images/Spielkarten_1/cc0/Spielkarte_10.png", "images/Spielkarten_1/cc0/Spielkarte_11.png", "images/Spielkarten_1/cc0/Spielkarte_12.png", "images/Spielkarten_1/cc0/Spielkarte_13.png", "images/Spielkarten_1/cc0/Spielkarte_14.png"],
        /*CC-BY*/ ["images/Spielkarten_1/cc-by/Spielkarte_01-cc-by.png", "images/Spielkarten_1/cc-by/Spielkarte_02-cc-by.png", "images/Spielkarten_1/cc-by/Spielkarte_03-cc-by.png", "images/Spielkarten_1/cc-by/Spielkarte_b_3D-cc-by.png", "images/Spielkarten_1/cc-by/Spielkarte_b_elp-cc-by.png", "images/Spielkarten_1/cc-by/Spielkarte_b_foto-cc-by.png", "images/Spielkarten_1/cc-by/Spielkarte_b_platine-cc-by.png", "images/Spielkarten_1/cc-by/Spielkarte_b_ppt-cc-by.png","images/Spielkarten_1/cc-by/Spielkarte_b_tabelle-cc-by.png", "images/Spielkarten_1/cc-by/Spielkarte_b_text-cc-by.png", "images/Spielkarten_1/cc-by/Spielkarte_b_ton-cc-by.png", "images/Spielkarten_1/cc-by/Spielkarte_b_video-cc-by.png", "images/Spielkarten_1/cc-by/Spielkarte_b_worte-cc-by.png", "images/Spielkarten_1/cc-by/Spielkarte_g_film-cc-by.png", "images/Spielkarten_1/cc-by/Spielkarte_g_wuerfel-cc-by.png"],
        /*CC-BY-NC*/ ["images/Spielkarten_1/cc-by-nc/Spielkarte_g-grafik-cc-by-nc.png", "images/Spielkarten_1/cc-by-nc/Spielkarte_g-zahnrad-cc-by-nc.png", "images/Spielkarten_1/cc-by-nc/Spielkarte_g_3D-cc-by-nc.png", "images/Spielkarten_1/cc-by-nc/Spielkarte_g_elp-cc-by-nc.png", "images/Spielkarten_1/cc-by-nc/Spielkarte_g_elp-cc-by-nc-1.png", "images/Spielkarten_1/cc-by-nc/Spielkarte_g_foto-cc-by-nc.png", "images/Spielkarten_1/cc-by-nc/Spielkarte_g_platine-cc-by-nc.png", "images/Spielkarten_1/cc-by-nc/Spielkarte_g_platine-cc-by-nc-1.png", "images/Spielkarten_1/cc-by-nc/Spielkarte_g_ppt-cc-by-nc.png", "images/Spielkarten_1/cc-by-nc/Spielkarte_g_ppt-cc-by-nc-1.png", "images/Spielkarten_1/cc-by-nc/Spielkarte_g_tabelle-cc-by-nc.png", "images/Spielkarten_1/cc-by-nc/Spielkarte_g_text-cc-by-nc.png", "images/Spielkarten_1/cc-by-nc/Spielkarte_g_ton-cc-by-nc.png", "images/Spielkarten_1/cc-by-nc/Spielkarte_g_video-cc-by-nc.png", "images/Spielkarten_1/cc-by-nc/Spielkarte_g_worte-cc-by-nc.png"],
        /*CC-BY-SA*/ ["images/Spielkarten_1/cc-by-sa/Spielkarte_0_ton-cc-by-sa.png", "images/Spielkarten_1/cc-by-sa/Spielkarte_O-grafik-cc-by-sa.png", "images/Spielkarten_1/cc-by-sa/Spielkarte_o-zahnrad-cc-by-sa.png", "images/Spielkarten_1/cc-by-sa/Spielkarte_o_3D-cc-by-sa.png", "images/Spielkarten_1/cc-by-sa/Spielkarte_o_3D-cc-by-sa-1.png", "images/Spielkarten_1/cc-by-sa/Spielkarte_O_elp-cc-by-sa.png", "images/Spielkarten_1/cc-by-sa/Spielkarte_o_film-cc-by-sa.png", "images/Spielkarten_1/cc-by-sa/Spielkarte_o_foto-cc-by-sa.png", "images/Spielkarten_1/cc-by-sa/Spielkarte_o_platine-cc-by-sa.png", "images/Spielkarten_1/cc-by-sa/Spielkarte_o_ppt-cc-by-sa.png", "images/Spielkarten_1/cc-by-sa/Spielkarte_o_tabelle-cc-by-sa.png", "images/Spielkarten_1/cc-by-sa/Spielkarte_O_text-cc-by-SA.png", "images/Spielkarten_1/cc-by-sa/Spielkarte_o_video-cc-by-sa.png", "images/Spielkarten_1/cc-by-sa/Spielkarte_O_worte-cc-by-sa.png", "images/Spielkarten_1/cc-by-sa/Spielkarte_o_wuerfel-cc-by-sa.png"],
        /*CC-BY-ND*/ ["images/Spielkarten_1/cc-by-nd/Spielkarte_g2-cc-by-nd.png", "images/Spielkarten_1/cc-by-nd/Spielkarte_g2-zahnrad-cc-by-nd.png","images/Spielkarten_1/cc-by-nd/Spielkarte_g2_3D-cc-by-nd.png", "images/Spielkarten_1/cc-by-nd/Spielkarte_g2_elp-cc-by-nd.png", "images/Spielkarten_1/cc-by-nd/Spielkarte_g2_film-cc-by-nd.png", "images/Spielkarten_1/cc-by-nd/Spielkarte_g2_foto-cc-by-nd.png", "images/Spielkarten_1/cc-by-nd/Spielkarte_g2_platine-cc-by-nd.png", "images/Spielkarten_1/cc-by-nd/Spielkarte_g2_ppt-cc-by-nd.png", "images/Spielkarten_1/cc-by-nd/Spielkarte_g2_tabelle-cc-by-nd.png", "images/Spielkarten_1/cc-by-nd/Spielkarte_g2_text-cc-by-nd.png", "images/Spielkarten_1/cc-by-nd/Spielkarte_g2_ton-cc-by-nd.png", "images/Spielkarten_1/cc-by-nd/Spielkarte_g2_video-cc-by-nd.png", "images/Spielkarten_1/cc-by-nd/Spielkarte_g2_worte-cc-by-nd.png", "images/Spielkarten_1/cc-by-nd/Spielkarte_g2_wuerfel-cc-by-nd.png", "images/Spielkarten_1/cc-by-nd/Spielkarte_grafik-cc-b-ndy.png"],
        /*CC-BY-NC-ND*/ ["images/Spielkarten_1/cc-by-nc-nd/Spielkarte_b_text-cc-by-nc-nd.png", "images/Spielkarten_1/cc-by-nc-nd/Spielkarte_g_text-cc-by-nc-nd.png", "images/Spielkarten_1/cc-by-nc-nd/Spielkarte_gr-cc-by-nc-nd.png", "images/Spielkarten_1/cc-by-nc-nd/Spielkarte_gr-zahnrad-cc-by-nc-nd.png", "images/Spielkarten_1/cc-by-nc-nd/Spielkarte_gr_3D-cc-by-nc-nd.png", "images/Spielkarten_1/cc-by-nc-nd/Spielkarte_gr_elp-cc-by-nc-nd.png", "images/Spielkarten_1/cc-by-nc-nd/Spielkarte_gr_film-cc-by-nc-nd.png", "images/Spielkarten_1/cc-by-nc-nd/Spielkarte_gr_foto-cc-by-nc-nd.png", "images/Spielkarten_1/cc-by-nc-nd/Spielkarte_gr_platine-cc-by-nc-nd.png", "images/Spielkarten_1/cc-by-nc-nd/Spielkarte_gr_ppt-cc-by-nd-nc.png", "images/Spielkarten_1/cc-by-nc-nd/Spielkarte_gr_tabelle-cc-by-nc-nd.png", "images/Spielkarten_1/cc-by-nc-nd/Spielkarte_gr_ton-cc-by-nc-nd.png", "images/Spielkarten_1/cc-by-nc-nd/Spielkarte_gr_video-cc-by-nn-nd.png", "images/Spielkarten_1/cc-by-nc-nd/Spielkarte_gr_worte-cc-by-nc-nd.png", "images/Spielkarten_1/cc-by-nc-nd/Spielkarte_gr_wuerfel-cc-by-nc-nd.png"],
        /*CC-BY-NC-SA*/ ["images/Spielkarten_1/cc-by-nc-sa/Sk_detektive-cc-by-nc-sa.png", "images/Spielkarten_1/cc-by-nc-sa/Sk_fi_text-cc-by-nc-sa.png", "images/Spielkarten_1/cc-by-nc-sa/Spielkarte_fl-cc-by-nc-sa.png", "images/Spielkarten_1/cc-by-nc-sa/Spielkarte_fl-zahnrad-cc-by-nc-sa.png", "images/Spielkarten_1/cc-by-nc-sa/Spielkarte_fl_3D-cc-by-nc-sa.png", "images/Spielkarten_1/cc-by-nc-sa/Spielkarte_fl_elp-cc-by-nc-sa.png", "images/Spielkarten_1/cc-by-nc-sa/Spielkarte_fl_film-cc-by-nc-sa.png", "images/Spielkarten_1/cc-by-nc-sa/Spielkarte_fl_foto-cc-by-nc-sa.png", "images/Spielkarten_1/cc-by-nc-sa/Spielkarte_fl_platine-cc-by-nc-sa.png", "images/Spielkarten_1/cc-by-nc-sa/Spielkarte_fl_ppt-cc-by-nc-sa.png", "images/Spielkarten_1/cc-by-nc-sa/Spielkarte_fl_tabelle-cc-by-nc-sa.png", "images/Spielkarten_1/cc-by-nc-sa/Spielkarte_fl_ton-cc-by-nc-sa.png", "images/Spielkarten_1/cc-by-nc-sa/Spielkarte_fl_video-cc-by-nc-sa.png", "images/Spielkarten_1/cc-by-nc-sa/Spielkarte_fl_worte-cc-by-nc-sa.png", "images/Spielkarten_1/cc-by-nc-sa/Spielkarte_fl_wuerfel-cc-by-nc-sa.png"],
        /*Icon_Antworten*/ ["images/cc_Icon/Icon_2/cc0.png", "images/cc_Icon/Icon_2/cc-by.png", "images/cc_Icon/Icon_2/cc-by-nc.png", "images/cc_Icon/Icon_2/cc-by-sa.png", "images/cc_Icon/Icon_2/cc-by-nd.png", "images/cc_Icon/Icon_2/cc-by-nc-nd.png", "images/cc_Icon/Icon_2/cc-by-nc-sa.png", "images/cc_Icon/Icon_2/Keine_Auswahl.png"],
        /* Kreise */ ["images/kreis_grau.png", "images/kreis_gruen.png", "images/kreis_rot.png"], 
        /* Tafel */ ["images/tafel.png"],
        /* Tutorial */ ["images/Spielkarten_2/kürzel_0.png", "images/Spielkarten_2/kürzel_by.png", "images/Spielkarten_2/kürzel_sa.png", "images/Spielkarten_2/kürzel_nc.png", "images/Spielkarten_2/icon_Kürzel_ND.png", "images/Spielkarten_2/kürzel_by_nc.png", "images/Spielkarten_2/kürzel_by_sa.png", "images/Spielkarten_2/kürzel_by_nd.png", "images/Spielkarten_2/kürzel_by_nc_nd.png", "images/Spielkarten_2/kürzel_by_nc_sa.png"],
        /* Tutorial-Antworten */ ["images/cc_Icon/Icon_1/cc0.png", "images/cc_Icon/Icon_1/cc-by.png", "images/cc_Icon/Icon_1/cc-sa.png", "images/cc_Icon/Icon_1/cc-nc.png", "images/cc_Icon/Icon_1/cc-nd.png", "images/cc_Icon/Icon_1/cc-by-nc.png", "images/cc_Icon/Icon_1/cc-by-sa.png", "images/cc_Icon/Icon_1/cc-by-nd.png", "images/cc_Icon/Icon_1/cc-by-nc-nd.png", "images/cc_Icon/Icon_1/cc-by-nc-sa.png"]
    ]; 

     //Preloading starten
     for (i=0; i<=11; i++)
     {
         for (j=0; j<imageArray[i].length; j++){
         imageObj[i][j]=new Image();
         imageObj[i][j].src=imageArray[i][j];
        }
    }
}

$(document).ready(function() {

    var main_canvas=document.getElementById("main_canvas");
    var context=main_canvas.getContext("2d");
    document.addEventListener('click', mouseClicked, false);

    var playing=false;
    var min=0;
    var min_1=1;
    var max_1=14;
    var max_2=6;
    var max_3=9;
    var max_4=7;
    var score=0;
    var gindex_1=0;
    var gindex_2=0;
    var gicon_index=[];
    var n=0;
    var gkindex=0
    var gkicon_index=[];
    
    if (localStorage.getItem('INDEX_1')!=null)
    {
        $('#fortsetzen').removeClass("disabled");
    }

    // Tutorialbutton Click
    $('#tutorial').click(function(){
        $(this).parent().fadeOut();
        $('#main_canvas').removeClass("canvas_style", 25, 50, "text");
       //Hintergrung bzw. Tafel
        context.drawImage(imageObj[9][0], 10, 11, 840, 520);
        //Kartenstapel_2 ein-/ ausblenden
        $('#kartenstapel_2').removeClass("displaynone");
        $('#k_play_2').toggleClass("kartenstapel_play fa fa-play fa-3x");
        document.getElementById("home").style.display = "block";
        
    });

    // Neustartbutton Click
    $('#neustart').click(function(){
        context.clearRect(10, 11, 840, 520);
        $(this).parent().fadeOut();
        $('#main_canvas').removeClass("canvas_style", 25, 50, "text");
       //Hintergrung bzw. Tafel
        context.drawImage(imageObj[9][0], 10, 11, 840, 520);
        //Score
        context.font="20px Georgia";
        context.fillStyle="white";
        context.fillText("Score: " + score,740,50); 
        $('#level').toggleClass("disabled_1");
        $('#k_play').toggleClass("kartenstapel_play fa fa-play fa-3x");
        $('#kartenstapel').removeClass("displaynone");
        $('#kartenstapel_2').addClass("displaynone");
        document.getElementById("home").style.display = "block";

        
    });

    // Fortsetzenbutton Click
    $('#fortsetzen').click(function(){
        $(this).parent().fadeOut();
        var index_1_1 = JSON.parse(localStorage.getItem('INDEX_1'));
        var index_2_2 = JSON.parse(localStorage.getItem('INDEX_2'));
        var i_1 = JSON.parse(localStorage.getItem('I'));
        var j_1 = JSON.parse(localStorage.getItem('J'));
        var score_1 = JSON.parse(localStorage.getItem('SCORE'));
        score=score_1;
        var icon_index_1 = JSON.parse(localStorage.getItem('ICON_INDEX'));
        $('#level').toggleClass("disabled_1");
        $('#k_play').toggleClass("kartenstapel_play fa fa-play fa-3x");
        $('#kartenstapel').removeClass("displaynone");
        $('#kartenstapel_2').addClass("displaynone");
        document.getElementById("home").style.display = "block";

        //Hintergrung bzw. Tafel
        context.drawImage(imageObj[9][0], 10, 11, 840, 520);
        //Score
        context.font="20px Georgia";
        context.fillStyle="white";
        context.fillText("Score: " + score_1,740,50);
        //Karte 1 und 2
        context.drawImage(imageObj[index_1_1][i_1], 140, 60, 213, 320);
        context.drawImage(imageObj[index_2_2][j_1], 470, 60, 213, 320);
        //Antworten
        context.drawImage(imageObj[7][icon_index_1[0]], 50, 450, 100, 32);
        context.drawImage(imageObj[7][icon_index_1[1]], 160, 450, 100, 32);
        context.drawImage(imageObj[7][icon_index_1[2]], 270, 450, 100, 32);
        context.drawImage(imageObj[7][icon_index_1[3]], 380, 450, 100, 32);
        context.drawImage(imageObj[7][icon_index_1[4]], 490, 450, 100, 32);
        context.drawImage(imageObj[7][icon_index_1[5]], 600, 450, 100, 32);
        context.drawImage(imageObj[7][icon_index_1[6]], 710, 450, 100, 32);

        //Kreise zeichen
        for (n=55; n<=727; n=n+110){
        context.drawImage(imageObj[8][0], n, 422, 25, 25);
        }

    });

    //Kartenstapel_Tutorial Click
    $('#kartenstapel_2').click(function(){
        var kindex=Math.floor(Math.random()*(max_3-min+1))+min;
        gkindex=kindex;
        var p=Math.floor(Math.random()*(max_2-min+1))+min;
        var kicon_index=[];
        gkicon_index=kicon_index;
        var m=0;
        $('#k_play_2').removeClass("fa-play").addClass("fa-hand-o-right");
        
        while (m<=6){
            var x=Math.floor(Math.random()*(max_3-min+1))+min;
            if (kicon_index.includes(x)==false && m<=6){
                kicon_index[m]=x;
                m++;
            }
            else if (kicon_index.includes(x)==true && m<=6){
                continue;
            }
        }

        for (var i=0; i<=6; i++)
        {
            if(kicon_index.includes(kindex)==false && i<=6){
                kicon_index.splice(p, 1, kindex);
            }
            else if (kicon_index.includes(kindex)==true && i<=6){
                continue;
            }
        }
        context.drawImage(imageObj[10][kindex], 313, 60, 213, 320);
       
     

        //Antworten
        context.drawImage(imageObj[11][kicon_index[0]], 50, 450, 100, 32);
        context.drawImage(imageObj[11][kicon_index[1]], 160, 450, 100, 32);
        context.drawImage(imageObj[11][kicon_index[2]], 270, 450, 100, 32);
        context.drawImage(imageObj[11][kicon_index[3]], 380, 450, 100, 32);
        context.drawImage(imageObj[11][kicon_index[4]], 490, 450, 100, 32);
        context.drawImage(imageObj[11][kicon_index[5]], 600, 450, 100, 32);
        context.drawImage(imageObj[11][kicon_index[6]], 710, 450, 100, 32);

        //Kreise zeichen
        for (n=55; n<=727; n=n+110){
        context.drawImage(imageObj[8][0], n, 422, 25, 25);
        }
    });

    //Kartenstappel Click
    $('#kartenstapel').click(function(){
        var index_1=Math.floor(Math.random()*(max_2-min+1))+min;
        gindex_1=index_1;
        var index_2=Math.floor(Math.random()*(max_2-min+1))+min;
        gindex_2=index_2;
        var i=Math.floor(Math.random()*(max_2-min+1))+min;
        var j=Math.floor(Math.random()*(max_1-min+1))+min;
        var icon_index=[];
        gicon_index=icon_index;
        var m=0;
        context.drawImage(imageObj[9][0], 735, 30, 96, 30, 735, 30, 96, 30);
        context.fillText("Score: " + score,740,50);
        $('#k_play').removeClass("fa-play").addClass("fa-hand-o-right");
        
        if (((gindex_1==6 && (gindex_2==0 || gindex_2==1 || gindex_2==2 || gindex_2==6)) || (gindex_2==6 && (gindex_1==0 || gindex_1==1 || gindex_1==2 || gindex_1==6))) || ((gindex_1==2 && (gindex_2==0 || gindex_2==1 || gindex_2==2)) || (gindex_2==2 && (gindex_1==0 || gindex_1==1 || gindex_1==2))) || ((gindex_1==3 && (gindex_2==0 || gindex_2==1 || gindex_2==3)) || (gindex_2==3 && (gindex_1==0 || gindex_1==1 || gindex_1==3))) || ((gindex_1==1 && (gindex_2==0 || gindex_2==1)) || (gindex_2==1 && (gindex_1==0 || gindex_1==1)))){
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
        }else { 
            while (m<=6){
                var x=Math.floor(Math.random()*(max_4-min_1+1))+min_1;
                if (icon_index.includes(x)==false && m<=6){
                    icon_index[m]=x;
                    m++;
                }
                else if (icon_index.includes(x)==true && m<=6){
                    continue;
                }
            }   
        }
        console.log(icon_index);
        //Karte 1 und 2
        context.drawImage(imageObj[index_1][i], 140, 60, 213, 320);
        context.drawImage(imageObj[index_2][j], 470, 60, 213, 320);
        //Antworten
        context.drawImage(imageObj[7][icon_index[0]], 50, 450, 100, 32);
        context.drawImage(imageObj[7][icon_index[1]], 160, 450, 100, 32);
        context.drawImage(imageObj[7][icon_index[2]], 270, 450, 100, 32);
        context.drawImage(imageObj[7][icon_index[3]], 380, 450, 100, 32);
        context.drawImage(imageObj[7][icon_index[4]], 490, 450, 100, 32);
        context.drawImage(imageObj[7][icon_index[5]], 600, 450, 100, 32);
        context.drawImage(imageObj[7][icon_index[6]], 710, 450, 100, 32);

        //Kreise zeichen
        for (n=55; n<=727; n=n+110){
        context.drawImage(imageObj[8][0], n, 422, 25, 25);
        }

        localStorage.setItem('INDEX_1', JSON.stringify(index_1));
        localStorage.setItem('INDEX_2', JSON.stringify(index_2));
        localStorage.setItem('I', JSON.stringify(i));
        localStorage.setItem('J', JSON.stringify(j));
        localStorage.setItem('SCORE', JSON.stringify(score));
        localStorage.setItem('ICON_INDEX', JSON.stringify(icon_index));

    });
    

    function mouseClicked(event) {
        canvas_x=event.pageX;
        canvas_y=event.pageY;

    /* BY-NC-SA */
        if ((gindex_1==6 && (gindex_2==3 || gindex_2==4 || gindex_2==5)) || (gindex_2==6 && (gindex_1==3 || gindex_1==4 || gindex_1==5)))
        {
            if (btnplay.checkClicked() && gicon_index[0]==7)
            {
                context.drawImage(imageObj[8][1], 55, 422, 25, 25);
                score=score+2;
            } else if (btnplay.checkClicked() && gicon_index[0]!=7) 
            {
                context.drawImage(imageObj[8][2], 55, 422, 25, 25);
                score--;
            } else if (btnplay_1.checkClicked() && gicon_index[1]==7)
            {
                context.drawImage(imageObj[8][1], 165, 422, 25, 25);
                score=score+2;
            } else if (btnplay_1.checkClicked() && gicon_index[1]!=7) 
            {
                context.drawImage(imageObj[8][2], 165, 422, 25, 25);
                score--;
            } else if (btnplay_2.checkClicked() && gicon_index[2]==7)
            {
                context.drawImage(imageObj[8][1], 275, 422, 25, 25);
                score=score+2;
            } else if (btnplay_2.checkClicked() && gicon_index[2]!=7) 
            {
                context.drawImage(imageObj[8][2], 275, 422, 25, 25);
                score--;
            } else if (btnplay_3.checkClicked() && gicon_index[3]==7)
            {
                context.drawImage(imageObj[8][1], 385, 422, 25, 25);
                score=score+2;
            } else if (btnplay_3.checkClicked() && gicon_index[3]!=7)
            {
                context.drawImage(imageObj[8][2], 385, 422, 25, 25);
                score--;
            } else if (btnplay_4.checkClicked() && gicon_index[4]==7)
            {
                context.drawImage(imageObj[8][1], 495, 422, 25, 25);
                score=score+2;
            } else if (btnplay_4.checkClicked() && gicon_index[4]!=7)
            {
                context.drawImage(imageObj[8][2], 495, 422, 25, 25);
                score--;
            }
            else if (btnplay_5.checkClicked() && gicon_index[5]==7)
            {
                context.drawImage(imageObj[8][1], 605, 422, 25, 25);
                score=score+2;
            } else if (btnplay_5.checkClicked() && gicon_index[5]!=7) 
            {
                context.drawImage(imageObj[8][2], 605, 422, 25, 25);
                score--;
            } else if (btnplay_6.checkClicked() && gicon_index[6]==7)
            {
                context.drawImage(imageObj[8][1], 715, 422, 25, 25);
                score=score+2;
            } else if (btnplay_6.checkClicked() && gicon_index[6]!=7)
            {
                context.drawImage(imageObj[8][2], 715, 422, 25, 25);
                score--;
            }
        } 

        else if ((gindex_1==6 && (gindex_2==0 || gindex_2==1 || gindex_2==2 || gindex_2==6)) || (gindex_2==6 && (gindex_1==0 || gindex_1==1 || gindex_1==2 || gindex_1==6))) 
        {
            if (btnplay.checkClicked() && gicon_index[0]==6)
            {
                context.drawImage(imageObj[8][1], 55, 422, 25, 25);
                score=score+2;
            } else if (btnplay.checkClicked() && gicon_index[0]!=6) 
            {
                context.drawImage(imageObj[8][2], 55, 422, 25, 25);
                score--;
            } else if (btnplay_1.checkClicked() && gicon_index[1]==6)
            {
                context.drawImage(imageObj[8][1], 165, 422, 25, 25);
                score=score+2;
            } else if (btnplay_1.checkClicked() && gicon_index[1]!=6) 
            {
                context.drawImage(imageObj[8][2], 165, 422, 25, 25);
                score--;
            } else if (btnplay_2.checkClicked() && gicon_index[2]==6)
            {
                context.drawImage(imageObj[8][1], 275, 422, 25, 25);
                score=score+2;
            } else if (btnplay_2.checkClicked() && gicon_index[2]!=6) 
            {
                context.drawImage(imageObj[8][2], 275, 422, 25, 25);
                score--;
            } else if (btnplay_3.checkClicked() && gicon_index[3]==6)
            {
                context.drawImage(imageObj[8][1], 385, 422, 25, 25);
                score=score+2;
            } else if (btnplay_3.checkClicked() && gicon_index[3]!=6)
            {
                context.drawImage(imageObj[8][2], 385, 422, 25, 25);
                score--;
            } else if (btnplay_4.checkClicked() && gicon_index[4]==6)
            {
                context.drawImage(imageObj[8][1], 495, 422, 25, 25);
                score=score+2;
            } else if (btnplay_4.checkClicked() && gicon_index[4]!=6)
            {
                context.drawImage(imageObj[8][2], 495, 422, 25, 25);
                score--;
            }
            else if (btnplay_5.checkClicked() && gicon_index[5]==6)
            {
                context.drawImage(imageObj[8][1], 605, 422, 25, 25);
                score=score+2;
            } else if (btnplay_5.checkClicked() && gicon_index[5]!=6) 
            {
                context.drawImage(imageObj[8][2], 605, 422, 25, 25);
                score--;
            } else if (btnplay_6.checkClicked() && gicon_index[6]==6)
            {
                context.drawImage(imageObj[8][1], 715, 422, 25, 25);
                score=score+2;
            } else if (btnplay_6.checkClicked() && gicon_index[6]!=6)
            {
                context.drawImage(imageObj[8][2], 715, 422, 25, 25);
                score--;
            }  
        } 
        
    /* BY-NC-ND */
        else if ((gindex_1==5 && (gindex_2==0 || gindex_2==1 || gindex_2==2 || gindex_2==3 || gindex_2==4 || gindex_2==5)) || (gindex_2==5 && (gindex_1==0 || gindex_1==1 || gindex_1==2 || gindex_1==3 || gindex_1==4 || gindex_1==5)))
        {
            if (btnplay.checkClicked() && gicon_index[0]==7)
            {
                context.drawImage(imageObj[8][1], 55, 422, 25, 25);
                score=score+2;
            } else if (btnplay.checkClicked() && gicon_index[0]!=7) 
            {
                context.drawImage(imageObj[8][2], 55, 422, 25, 25);
                score--;
            } else if (btnplay_1.checkClicked() && gicon_index[1]==7)
            {
                context.drawImage(imageObj[8][1], 165, 422, 25, 25);
                score=score+2;
            } else if (btnplay_1.checkClicked() && gicon_index[1]!=7) 
            {
                context.drawImage(imageObj[8][2], 165, 422, 25, 25);
                score--;
            } else if (btnplay_2.checkClicked() && gicon_index[2]==7)
            {
                context.drawImage(imageObj[8][1], 275, 422, 25, 25);
                score=score+2;
            } else if (btnplay_2.checkClicked() && gicon_index[2]!=7) 
            {
                context.drawImage(imageObj[8][2], 275, 422, 25, 25);
                score--;
            } else if (btnplay_3.checkClicked() && gicon_index[3]==7)
            {
                context.drawImage(imageObj[8][1], 385, 422, 25, 25);
                score=score+2;
            } else if (btnplay_3.checkClicked() && gicon_index[3]!=7)
            {
                context.drawImage(imageObj[8][2], 385, 422, 25, 25);
                score--;
            } else if (btnplay_4.checkClicked() && gicon_index[4]==7)
            {
                context.drawImage(imageObj[8][1], 495, 422, 25, 25);
                score=score+2;
            } else if (btnplay_4.checkClicked() && gicon_index[4]!=7)
            {
                context.drawImage(imageObj[8][2], 495, 422, 25, 25);
                score--;
            }
            else if (btnplay_5.checkClicked() && gicon_index[5]==7)
            {
                context.drawImage(imageObj[8][1], 605, 422, 25, 25);
                score=score+2;
            } else if (btnplay_5.checkClicked() && gicon_index[5]!=7) 
            {
                context.drawImage(imageObj[8][2], 605, 422, 25, 25);
                score--;
            } else if (btnplay_6.checkClicked() && gicon_index[6]==7)
            {
                context.drawImage(imageObj[8][1], 715, 422, 25, 25);
                score=score+2;
            } else if (btnplay_6.checkClicked() && gicon_index[6]!=7)
            {
                context.drawImage(imageObj[8][2], 715, 422, 25, 25);
                score--;
            }
        }   
        
    /* BY-ND */
        else if ((gindex_1==4 && (gindex_2==0 || gindex_2==1 || gindex_2==2 || gindex_2==3 || gindex_2==4)) || (gindex_2==4 && (gindex_1==0 || gindex_1==1 || gindex_1==2 || gindex_1==3 || gindex_1==4)))
        {
            if (btnplay.checkClicked() && gicon_index[0]==7)
            {
                context.drawImage(imageObj[8][1], 55, 422, 25, 25);
                score=score+2;
            } else if (btnplay.checkClicked() && gicon_index[0]!=7) 
            {
                context.drawImage(imageObj[8][2], 55, 422, 25, 25);
                score--;
            } else if (btnplay_1.checkClicked() && gicon_index[1]==7)
            {
                context.drawImage(imageObj[8][1], 165, 422, 25, 25);
                score=score+2;
            } else if (btnplay_1.checkClicked() && gicon_index[1]!=7) 
            {
                context.drawImage(imageObj[8][2], 165, 422, 25, 25);
                score--;
            } else if (btnplay_2.checkClicked() && gicon_index[2]==7)
            {
                context.drawImage(imageObj[8][1], 275, 422, 25, 25);
                score=score+2;
            } else if (btnplay_2.checkClicked() && gicon_index[2]!=7) 
            {
                context.drawImage(imageObj[8][2], 275, 422, 25, 25);
                score--;
            } else if (btnplay_3.checkClicked() && gicon_index[3]==7)
            {
                context.drawImage(imageObj[8][1], 385, 422, 25, 25);
                score=score+2;
            } else if (btnplay_3.checkClicked() && gicon_index[3]!=7)
            {
                context.drawImage(imageObj[8][2], 385, 422, 25, 25);
                score--;
            } else if (btnplay_4.checkClicked() && gicon_index[4]==7)
            {
                context.drawImage(imageObj[8][1], 495, 422, 25, 25);
                score=score+2;
            } else if (btnplay_4.checkClicked() && gicon_index[4]!=7)
            {
                context.drawImage(imageObj[8][2], 495, 422, 25, 25);
                score--;
            }
            else if (btnplay_5.checkClicked() && gicon_index[5]==7)
            {
                context.drawImage(imageObj[8][1], 605, 422, 25, 25);
                score=score+2;
            } else if (btnplay_5.checkClicked() && gicon_index[5]!=7) 
            {
                context.drawImage(imageObj[8][2], 605, 422, 25, 25);
                score--;
            } else if (btnplay_6.checkClicked() && gicon_index[6]==7)
            {
                context.drawImage(imageObj[8][1], 715, 422, 25, 25);
                score=score+2;
            } else if (btnplay_6.checkClicked() && gicon_index[6]!=7)
            {
                context.drawImage(imageObj[8][2], 715, 422, 25, 25);
                score--;
            }
        }   
        
    /* BY-NC  */
        else if ((gindex_1==2 && gindex_2==3) || (gindex_1==3 && gindex_2==2))
        {
            if (btnplay.checkClicked() && gicon_index[0]==7)
            {
                context.drawImage(imageObj[8][1], 55, 422, 25, 25);
                score=score+2;
            } else if (btnplay.checkClicked() && gicon_index[0]!=7) 
            {
                context.drawImage(imageObj[8][2], 55, 422, 25, 25);
                score--;
            } else if (btnplay_1.checkClicked() && gicon_index[1]==7)
            {
                context.drawImage(imageObj[8][1], 165, 422, 25, 25);
                score=score+2;
            } else if (btnplay_1.checkClicked() && gicon_index[1]!=7) 
            {
                context.drawImage(imageObj[8][2], 165, 422, 25, 25);
                score--;
            } else if (btnplay_2.checkClicked() && gicon_index[2]==7)
            {
                context.drawImage(imageObj[8][1], 275, 422, 25, 25);
                score=score+2;
            } else if (btnplay_2.checkClicked() && gicon_index[2]!=7) 
            {
                context.drawImage(imageObj[8][2], 275, 422, 25, 25);
                score--;
            } else if (btnplay_3.checkClicked() && gicon_index[3]==7)
            {
                context.drawImage(imageObj[8][1], 385, 422, 25, 25);
                score=score+2;
            } else if (btnplay_3.checkClicked() && gicon_index[3]!=7)
            {
                context.drawImage(imageObj[8][2], 385, 422, 25, 25);
                score--;
            } else if (btnplay_4.checkClicked() && gicon_index[4]==7)
            {
                context.drawImage(imageObj[8][1], 495, 422, 25, 25);
                score=score+2;
            } else if (btnplay_4.checkClicked() && gicon_index[4]!=7)
            {
                context.drawImage(imageObj[8][2], 495, 422, 25, 25);
                score--;
            }
            else if (btnplay_5.checkClicked() && gicon_index[5]==7)
            {
                context.drawImage(imageObj[8][1], 605, 422, 25, 25);
                score=score+2;
            } else if (btnplay_5.checkClicked() && gicon_index[5]!=7) 
            {
                context.drawImage(imageObj[8][2], 605, 422, 25, 25);
                score--;
            } else if (btnplay_6.checkClicked() && gicon_index[6]==7)
            {
                context.drawImage(imageObj[8][1], 715, 422, 25, 25);
                score=score+2;
            } else if (btnplay_6.checkClicked() && gicon_index[6]!=7)
            {
                context.drawImage(imageObj[8][2], 715, 422, 25, 25);
                score--;
            }
        }    

        else if ((gindex_1==2 && (gindex_2==0 || gindex_2==1 || gindex_2==2)) || (gindex_2==2 && (gindex_1==0 || gindex_1==1 || gindex_1==2))) 
        {
            if (btnplay.checkClicked() && (gicon_index[0]==2 || gicon_index[0]==5 || gicon_index[0]==6))
            {
                context.drawImage(imageObj[8][1], 55, 422, 25, 25);
                score=score+2;
            } else if (btnplay.checkClicked() && (gicon_index[0]!=2 || gicon_index[0]!=5 || gicon_index[0]!=6)) 
            {
                context.drawImage(imageObj[8][2], 55, 422, 25, 25);
                score--;
            } else if (btnplay_1.checkClicked() && (gicon_index[1]==2 || gicon_index[1]==5 || gicon_index[1]==6))
            {
                context.drawImage(imageObj[8][1], 165, 422, 25, 25);
                score=score+2;
            } else if (btnplay_1.checkClicked() && (gicon_index[1]!=2 || gicon_index[1]!=5 || gicon_index[1]!=6)) 
            {
                context.drawImage(imageObj[8][2], 165, 422, 25, 25);
                score--;
            } else if (btnplay_2.checkClicked() && (gicon_index[2]==2 || gicon_index[2]==5 || gicon_index[2]==6))
            {
                context.drawImage(imageObj[8][1], 275, 422, 25, 25);
                score=score+2;
            } else if (btnplay_2.checkClicked() && (gicon_index[2]!=2 || gicon_index[2]!=5 || gicon_index[2]!=6)) 
            {
                context.drawImage(imageObj[8][2], 275, 422, 25, 25);
                score--;
            } else if (btnplay_3.checkClicked() && (gicon_index[3]==2 || gicon_index[3]==5 || gicon_index[3]==6))
            {
                context.drawImage(imageObj[8][1], 385, 422, 25, 25);
                score=score+2;
            } else if (btnplay_3.checkClicked() && (gicon_index[3]!=2 || gicon_index[3]!=5 || gicon_index[3]!=6))
            {
                context.drawImage(imageObj[8][2], 385, 422, 25, 25);
                score--;
            } else if (btnplay_4.checkClicked() && (gicon_index[4]==2 || gicon_index[4]==5 || gicon_index[4]==6))
            {
                context.drawImage(imageObj[8][1], 495, 422, 25, 25);
                score=score+2;
            } else if (btnplay_4.checkClicked() && (gicon_index[4]!=2 || gicon_index[4]!=5 || gicon_index[4]!=6))
            {
                context.drawImage(imageObj[8][2], 495, 422, 25, 25);
                score--;
            }
            else if (btnplay_5.checkClicked() && (gicon_index[5]==2 || gicon_index[5]==5 || gicon_index[5]==6))
            {
                context.drawImage(imageObj[8][1], 605, 422, 25, 25);
                score=score+2;
            } else if (btnplay_5.checkClicked() && (gicon_index[5]!=2 || gicon_index[5]!=5 || gicon_index[5]!=6)) 
            {
                context.drawImage(imageObj[8][2], 605, 422, 25, 25);
                score--;
            } else if (btnplay_6.checkClicked() && (gicon_index[6]==2 || gicon_index[6]==5 || gicon_index[6]==6))
            {
                context.drawImage(imageObj[8][1], 715, 422, 25, 25);
                score=score+2;
            } else if (btnplay_6.checkClicked() && (gicon_index[6]!=2 || gicon_index[6]!=5 || gicon_index[6]!=6))
            {
                context.drawImage(imageObj[8][2], 715, 422, 25, 25);
                score--;
            }
        }

    /* BY-SA */
        else if ((gindex_1==3 && (gindex_2==0 || gindex_2==1 || gindex_2==3)) || (gindex_2==3 && (gindex_1==0 || gindex_1==1 || gindex_1==3))) 
        {
            if (btnplay.checkClicked() && gicon_index[0]==3)
            {
                context.drawImage(imageObj[8][1], 55, 422, 25, 25);
                score=score+2;
            } else if (btnplay.checkClicked() && gicon_index[0]!=3) 
            {
                context.drawImage(imageObj[8][2], 55, 422, 25, 25);
                score--;
            } else if (btnplay_1.checkClicked() && gicon_index[1]==3)
            {
                context.drawImage(imageObj[8][1], 165, 422, 25, 25);
                score=score+2;
            } else if (btnplay_1.checkClicked() && gicon_index[1]!=3) 
            {
                context.drawImage(imageObj[8][2], 165, 422, 25, 25);
                score--;
            } else if (btnplay_2.checkClicked() && gicon_index[2]==3)
            {
                context.drawImage(imageObj[8][1], 275, 422, 25, 25);
                score=score+2;
            } else if (btnplay_2.checkClicked() && gicon_index[2]!=3) 
            {
                context.drawImage(imageObj[8][2], 275, 422, 25, 25);
                score--;
            } else if (btnplay_3.checkClicked() && gicon_index[3]==3)
            {
                context.drawImage(imageObj[8][1], 385, 422, 25, 25);
                score=score+2;
            } else if (btnplay_3.checkClicked() && gicon_index[3]!=3)
            {
                context.drawImage(imageObj[8][2], 385, 422, 25, 25);
                score--;
            } else if (btnplay_4.checkClicked() && gicon_index[4]==3)
            {
                context.drawImage(imageObj[8][1], 495, 422, 25, 25);
                score=score+2;
            } else if (btnplay_4.checkClicked() && gicon_index[4]!=3)
            {
                context.drawImage(imageObj[8][2], 495, 422, 25, 25);
                score--;
            }
            else if (btnplay_5.checkClicked() && gicon_index[5]==3)
            {
                context.drawImage(imageObj[8][1], 605, 422, 25, 25);
                score=score+2;
            } else if (btnplay_5.checkClicked() && gicon_index[5]!=3) 
            {
                context.drawImage(imageObj[8][2], 605, 422, 25, 25);
                score--;
            } else if (btnplay_6.checkClicked() && gicon_index[6]==3)
            {
                context.drawImage(imageObj[8][1], 715, 422, 25, 25);
                score=score+2;
            } else if (btnplay_6.checkClicked() && gicon_index[6]!=3)
            {
                context.drawImage(imageObj[8][2], 715, 422, 25, 25);
                score--;
            }
        }    
    
    /* BY */
        else if ((gindex_1==1 && (gindex_2==0 || gindex_2==1)) || (gindex_2==1 && (gindex_1==0 || gindex_1==1))) 
        {
            if (btnplay.checkClicked() && (gicon_index[0]==1 || gicon_index[0]==2 || gicon_index[0]==3 || gicon_index[0]==4 || gicon_index[0]==5 || gicon_index[0]==6))
            {
                context.drawImage(imageObj[8][1], 55, 422, 25, 25);
                score=score+2;
            } else if (btnplay.checkClicked() && (gicon_index[0]!=1 || gicon_index[0]!=2 || gicon_index[0]!=3 || gicon_index[0]!=4 || gicon_index[0]!=5 || gicon_index[0]!=6)) 
            {
                context.drawImage(imageObj[8][2], 55, 422, 25, 25);
                score--;
            } else if (btnplay_1.checkClicked() && (gicon_index[1]==1 || gicon_index[1]==2 || gicon_index[1]==3 || gicon_index[1]==4 || gicon_index[1]==5 || gicon_index[1]==6))
            {
                context.drawImage(imageObj[8][1], 165, 422, 25, 25);
                score=score+2;
            } else if (btnplay_1.checkClicked() && (gicon_index[1]!=1 || gicon_index[1]!=2 || gicon_index[1]!=3 || gicon_index[1]!=4 || gicon_index[1]!=5 || gicon_index[1]!=6)) 
            {
                context.drawImage(imageObj[8][2], 165, 422, 25, 25);
                score--;
            } else if (btnplay_2.checkClicked() && (gicon_index[2]==1 || gicon_index[2]==2 || gicon_index[2]==3 || gicon_index[2]==4 || gicon_index[2]==5 || gicon_index[2]==6))
            {
                context.drawImage(imageObj[8][1], 275, 422, 25, 25);
                score=score+2;
            } else if (btnplay_2.checkClicked() && (gicon_index[2]!=1 || gicon_index[2]!=2 || gicon_index[2]!=3 || gicon_index[2]!=4 || gicon_index[2]!=5 || gicon_index[2]!=6)) 
            {
                context.drawImage(imageObj[8][2], 275, 422, 25, 25);
                score--;
            } else if (btnplay_3.checkClicked() && (gicon_index[3]==1 || gicon_index[3]==2 || gicon_index[3]==3 || gicon_index[3]==4 || gicon_index[3]==5 || gicon_index[3]==6))
            {
                context.drawImage(imageObj[8][1], 385, 422, 25, 25);
                score=score+2;
            } else if (btnplay_3.checkClicked() && (gicon_index[3]!=1 || gicon_index[3]!=2 || gicon_index[3]!=3 || gicon_index[3]!=4 || gicon_index[3]!=5 || gicon_index[3]!=6))
            {
                context.drawImage(imageObj[8][2], 385, 422, 25, 25);
                score--;
            } else if (btnplay_4.checkClicked() && (gicon_index[4]==1 || gicon_index[4]==2 || gicon_index[4]==3 || gicon_index[4]==4 || gicon_index[4]==5 || gicon_index[4]==6))
            {
                context.drawImage(imageObj[8][1], 495, 422, 25, 25);
                score=score+2;
            } else if (btnplay_4.checkClicked() && (gicon_index[4]!=1 || gicon_index[4]!=2 || gicon_index[4]!=3 || gicon_index[4]!=4 || gicon_index[4]!=5 || gicon_index[4]!=6))
            {
                context.drawImage(imageObj[8][2], 495, 422, 25, 25);
                score--;
            }
            else if (btnplay_5.checkClicked() && (gicon_index[5]==1 || gicon_index[5]==2 || gicon_index[5]==3 || gicon_index[5]==4 || gicon_index[5]==5 || gicon_index[5]==6))
            {
                context.drawImage(imageObj[8][1], 605, 422, 25, 25);
                score=score+2;
            } else if (btnplay_5.checkClicked() && (gicon_index[5]!=1 || gicon_index[5]!=2 || gicon_index[5]!=3 || gicon_index[5]!=4 || gicon_index[5]!=5 || gicon_index[5]!=6)) 
            {
                context.drawImage(imageObj[8][2], 605, 422, 25, 25);
                score--;
            } else if (btnplay_6.checkClicked() && (gicon_index[6]==1 || gicon_index[6]==2 || gicon_index[6]==3 || gicon_index[6]==4 || gicon_index[6]==5 || gicon_index[6]==6))
            {
                context.drawImage(imageObj[8][1], 715, 422, 25, 25);
                score=score+2;
            } else if (btnplay_6.checkClicked() && (gicon_index[6]!=1 || gicon_index[6]!=2 || gicon_index[6]!=3 || gicon_index[6]!=4 || gicon_index[6]!=5 || gicon_index[6]!=6))
            {
                context.drawImage(imageObj[8][2], 715, 422, 25, 25);
                score--;
            }
        }   
        
    /* Lösungen für Tutorial */
    /* Zero */
        else if (gkindex==0){
            if(btnplay.checkClicked() && gkicon_index[0]==0){
                context.drawImage(imageObj[8][1], 55, 422, 25, 25);
            }else if (btnplay.checkClicked() && gkicon_index[0]!=0){
                context.drawImage(imageObj[8][2], 55, 422, 25, 25);
            }
            else if (btnplay_1.checkClicked() && gkicon_index[1]==0){
                context.drawImage(imageObj[8][1], 165, 422, 25, 25);
            }else if (btnplay_1.checkClicked() && gkicon_index[1]!=0){
                context.drawImage(imageObj[8][2], 165, 422, 25, 25);
            }
            else if (btnplay_2.checkClicked() && gkicon_index[2]==0){
                context.drawImage(imageObj[8][1], 275, 422, 25, 25);
            }else if (btnplay_2.checkClicked() && gkicon_index[2]!=0){
                context.drawImage(imageObj[8][2], 275, 422, 25, 25);
            }
            else if (btnplay_3.checkClicked() && gkicon_index[3]==0){
                context.drawImage(imageObj[8][1], 385, 422, 25, 25);
            }else if (btnplay_3.checkClicked() && gkicon_index[3]!=0){
                context.drawImage(imageObj[8][2], 385, 422, 25, 25);
            }
            else if (btnplay_4.checkClicked() && gkicon_index[4]==0){
                context.drawImage(imageObj[8][1], 495, 422, 25, 25);
            }else if (btnplay_4.checkClicked() && gkicon_index[4]!=0){
                context.drawImage(imageObj[8][2], 495, 422, 25, 25);
            }
            else if (btnplay_5.checkClicked() && gkicon_index[5]==0){
                context.drawImage(imageObj[8][1], 605, 422, 25, 25);
            }else if (btnplay_5.checkClicked() && gkicon_index[5]!=0){
                context.drawImage(imageObj[8][2], 605, 422, 25, 25);
            }
            else if (btnplay_6.checkClicked() && gkicon_index[6]==0){
                context.drawImage(imageObj[8][1], 715, 422, 25, 25);
            }else if (btnplay_6.checkClicked() && gkicon_index[6]!=0){
                context.drawImage(imageObj[8][2], 715, 422, 25, 25);
            }
        }    
     
    /* BY */
        else if (gkindex==1){
            if(btnplay.checkClicked() && gkicon_index[0]==1){
                context.drawImage(imageObj[8][1], 55, 422, 25, 25);
            }else if (btnplay.checkClicked() && gkicon_index[0]!=1){
                context.drawImage(imageObj[8][2], 55, 422, 25, 25);
            }
            else if (btnplay_1.checkClicked() && gkicon_index[1]==1){
                context.drawImage(imageObj[8][1], 165, 422, 25, 25);
            }else if (btnplay_1.checkClicked() && gkicon_index[1]!=1){
                context.drawImage(imageObj[8][2], 165, 422, 25, 25);
            }
            else if (btnplay_2.checkClicked() && gkicon_index[2]==1){
                context.drawImage(imageObj[8][1], 275, 422, 25, 25);
            }else if (btnplay_2.checkClicked() && gkicon_index[2]!=1){
                context.drawImage(imageObj[8][2], 275, 422, 25, 25);
            }
            else if (btnplay_3.checkClicked() && gkicon_index[3]==1){
                context.drawImage(imageObj[8][1], 385, 422, 25, 25);
            }else if (btnplay_3.checkClicked() && gkicon_index[3]!=1){
                context.drawImage(imageObj[8][2], 385, 422, 25, 25);
            }
            else if (btnplay_4.checkClicked() && gkicon_index[4]==1){
                context.drawImage(imageObj[8][1], 495, 422, 25, 25);
            }else if (btnplay_4.checkClicked() && gkicon_index[4]!=1){
                context.drawImage(imageObj[8][2], 495, 422, 25, 25);
            }
            else if (btnplay_5.checkClicked() && gkicon_index[5]==1){
                context.drawImage(imageObj[8][1], 605, 422, 25, 25);
            }else if (btnplay_5.checkClicked() && gkicon_index[5]!=1){
                context.drawImage(imageObj[8][2], 605, 422, 25, 25);
            }
            else if (btnplay_6.checkClicked() && gkicon_index[6]==1){
                context.drawImage(imageObj[8][1], 715, 422, 25, 25);
            }else if (btnplay_6.checkClicked() && gkicon_index[6]!=1){
                context.drawImage(imageObj[8][2], 715, 422, 25, 25);
            }
        }
    
    /* SA */
        else if (gkindex==2){
            if(btnplay.checkClicked() && gkicon_index[0]==2){
                context.drawImage(imageObj[8][1], 55, 422, 25, 25);
            }else if (btnplay.checkClicked() && gkicon_index[0]!=2){
                context.drawImage(imageObj[8][2], 55, 422, 25, 25);
            }
            else if (btnplay_1.checkClicked() && gkicon_index[1]==2){
                context.drawImage(imageObj[8][1], 165, 422, 25, 25);
            }else if (btnplay_1.checkClicked() && gkicon_index[1]!=2){
                context.drawImage(imageObj[8][2], 165, 422, 25, 25);
            }
            else if (btnplay_2.checkClicked() && gkicon_index[2]==2){
                context.drawImage(imageObj[8][1], 275, 422, 25, 25);
            }else if (btnplay_2.checkClicked() && gkicon_index[2]!=2){
                context.drawImage(imageObj[8][2], 275, 422, 25, 25);
            }
            else if (btnplay_3.checkClicked() && gkicon_index[3]==2){
                context.drawImage(imageObj[8][1], 385, 422, 25, 25);
            }else if (btnplay_3.checkClicked() && gkicon_index[3]!=2){
                context.drawImage(imageObj[8][2], 385, 422, 25, 25);
            }
            else if (btnplay_4.checkClicked() && gkicon_index[4]==2){
                context.drawImage(imageObj[8][1], 495, 422, 25, 25);
            }else if (btnplay_4.checkClicked() && gkicon_index[4]!=2){
                context.drawImage(imageObj[8][2], 495, 422, 25, 25);
            }
            else if (btnplay_5.checkClicked() && gkicon_index[5]==2){
                context.drawImage(imageObj[8][1], 605, 422, 25, 25);
            }else if (btnplay_5.checkClicked() && gkicon_index[5]!=2){
                context.drawImage(imageObj[8][2], 605, 422, 25, 25);
            }
            else if (btnplay_6.checkClicked() && gkicon_index[6]==2){
                context.drawImage(imageObj[8][1], 715, 422, 25, 25);
            }else if (btnplay_6.checkClicked() && gkicon_index[6]!=2){
                context.drawImage(imageObj[8][2], 715, 422, 25, 25);
            }
        }
       
    /* NC */
        else if (gkindex==3){
            if(btnplay.checkClicked() && gkicon_index[0]==3){
                context.drawImage(imageObj[8][1], 55, 422, 25, 25);
            }else if (btnplay.checkClicked() && gkicon_index[0]!=3){
                context.drawImage(imageObj[8][2], 55, 422, 25, 25);
            }
            else if (btnplay_1.checkClicked() && gkicon_index[1]==3){
                context.drawImage(imageObj[8][1], 165, 422, 25, 25);
            }else if (btnplay_1.checkClicked() && gkicon_index[1]!=3){
                context.drawImage(imageObj[8][2], 165, 422, 25, 25);
            }
            else if (btnplay_2.checkClicked() && gkicon_index[2]==3){
                context.drawImage(imageObj[8][1], 275, 422, 25, 25);
            }else if (btnplay_2.checkClicked() && gkicon_index[2]!=3){
                context.drawImage(imageObj[8][2], 275, 422, 25, 25);
            }
            else if (btnplay_3.checkClicked() && gkicon_index[3]==3){
                context.drawImage(imageObj[8][1], 385, 422, 25, 25);
            }else if (btnplay_3.checkClicked() && gkicon_index[3]!=3){
                context.drawImage(imageObj[8][2], 385, 422, 25, 25);
            }
            else if (btnplay_4.checkClicked() && gkicon_index[4]==3){
                context.drawImage(imageObj[8][1], 495, 422, 25, 25);
            }else if (btnplay_4.checkClicked() && gkicon_index[4]!=3){
                context.drawImage(imageObj[8][2], 495, 422, 25, 25);
            }
            else if (btnplay_5.checkClicked() && gkicon_index[5]==3){
                context.drawImage(imageObj[8][1], 605, 422, 25, 25);
            }else if (btnplay_5.checkClicked() && gkicon_index[5]!=3){
                context.drawImage(imageObj[8][2], 605, 422, 25, 25);
            }
            else if (btnplay_6.checkClicked() && gkicon_index[6]==3){
                context.drawImage(imageObj[8][1], 715, 422, 25, 25);
            }else if (btnplay_6.checkClicked() && gkicon_index[6]!=3){
                context.drawImage(imageObj[8][2], 715, 422, 25, 25);
            }
        }  
        
    /* ND */
        else if (gkindex==4){
        if(btnplay.checkClicked() && gkicon_index[0]==4){
            context.drawImage(imageObj[8][1], 55, 422, 25, 25);
        }else if (btnplay.checkClicked() && gkicon_index[0]!=4){
            context.drawImage(imageObj[8][2], 55, 422, 25, 25);
        }
        else if (btnplay_1.checkClicked() && gkicon_index[1]==4){
            context.drawImage(imageObj[8][1], 165, 422, 25, 25);
        }else if (btnplay_1.checkClicked() && gkicon_index[1]!=4){
            context.drawImage(imageObj[8][2], 165, 422, 25, 25);
        }
        else if (btnplay_2.checkClicked() && gkicon_index[2]==4){
            context.drawImage(imageObj[8][1], 275, 422, 25, 25);
        }else if (btnplay_2.checkClicked() && gkicon_index[2]!=4){
            context.drawImage(imageObj[8][2], 275, 422, 25, 25);
        }
        else if (btnplay_3.checkClicked() && gkicon_index[3]==4){
            context.drawImage(imageObj[8][1], 385, 422, 25, 25);
        }else if (btnplay_3.checkClicked() && gkicon_index[3]!=4){
            context.drawImage(imageObj[8][2], 385, 422, 25, 25);
        }
        else if (btnplay_4.checkClicked() && gkicon_index[4]==4){
            context.drawImage(imageObj[8][1], 495, 422, 25, 25);
        }else if (btnplay_4.checkClicked() && gkicon_index[4]!=4){
            context.drawImage(imageObj[8][2], 495, 422, 25, 25);
        }
        else if (btnplay_5.checkClicked() && gkicon_index[5]==4){
            context.drawImage(imageObj[8][1], 605, 422, 25, 25);
        }else if (btnplay_5.checkClicked() && gkicon_index[5]!=4){
            context.drawImage(imageObj[8][2], 605, 422, 25, 25);
        }
        else if (btnplay_6.checkClicked() && gkicon_index[6]==4){
            context.drawImage(imageObj[8][1], 715, 422, 25, 25);
        }else if (btnplay_6.checkClicked() && gkicon_index[6]!=4){
            context.drawImage(imageObj[8][2], 715, 422, 25, 25);
        }
        }
    
    /* BY-NC */
        else if (gkindex==5){
        if(btnplay.checkClicked() && gkicon_index[0]==5){
            context.drawImage(imageObj[8][1], 55, 422, 25, 25);
        }else if (btnplay.checkClicked() && gkicon_index[0]!=5){
            context.drawImage(imageObj[8][2], 55, 422, 25, 25);
        }
        else if (btnplay_1.checkClicked() && gkicon_index[1]==5){
            context.drawImage(imageObj[8][1], 165, 422, 25, 25);
        }else if (btnplay_1.checkClicked() && gkicon_index[1]!=5){
            context.drawImage(imageObj[8][2], 165, 422, 25, 25);
        }
        else if (btnplay_2.checkClicked() && gkicon_index[2]==5){
            context.drawImage(imageObj[8][1], 275, 422, 25, 25);
        }else if (btnplay_2.checkClicked() && gkicon_index[2]!=5){
            context.drawImage(imageObj[8][2], 275, 422, 25, 25);
        }
        else if (btnplay_3.checkClicked() && gkicon_index[3]==5){
            context.drawImage(imageObj[8][1], 385, 422, 25, 25);
        }else if (btnplay_3.checkClicked() && gkicon_index[3]!=5){
            context.drawImage(imageObj[8][2], 385, 422, 25, 25);
        }
        else if (btnplay_4.checkClicked() && gkicon_index[4]==5){
            context.drawImage(imageObj[8][1], 495, 422, 25, 25);
        }else if (btnplay_4.checkClicked() && gkicon_index[4]!=5){
            context.drawImage(imageObj[8][2], 495, 422, 25, 25);
        }
        else if (btnplay_5.checkClicked() && gkicon_index[5]==5){
            context.drawImage(imageObj[8][1], 605, 422, 25, 25);
        }else if (btnplay_5.checkClicked() && gkicon_index[5]!=5){
            context.drawImage(imageObj[8][2], 605, 422, 25, 25);
        }
        else if (btnplay_6.checkClicked() && gkicon_index[6]==5){
            context.drawImage(imageObj[8][1], 715, 422, 25, 25);
        }else if (btnplay_6.checkClicked() && gkicon_index[6]!=5){
            context.drawImage(imageObj[8][2], 715, 422, 25, 25);
        }
        }
    
    /* BY-SA */
        else if (gkindex==6){
        if(btnplay.checkClicked() && gkicon_index[0]==6){
            context.drawImage(imageObj[8][1], 55, 422, 25, 25);
        }else if (btnplay.checkClicked() && gkicon_index[0]!=6){
            context.drawImage(imageObj[8][2], 55, 422, 25, 25);
        }
        else if (btnplay_1.checkClicked() && gkicon_index[1]==6){
            context.drawImage(imageObj[8][1], 165, 422, 25, 25);
        }else if (btnplay_1.checkClicked() && gkicon_index[1]!=6){
            context.drawImage(imageObj[8][2], 165, 422, 25, 25);
        }
        else if (btnplay_2.checkClicked() && gkicon_index[2]==6){
            context.drawImage(imageObj[8][1], 275, 422, 25, 25);
        }else if (btnplay_2.checkClicked() && gkicon_index[2]!=6){
            context.drawImage(imageObj[8][2], 275, 422, 25, 25);
        }
        else if (btnplay_3.checkClicked() && gkicon_index[3]==6){
            context.drawImage(imageObj[8][1], 385, 422, 25, 25);
        }else if (btnplay_3.checkClicked() && gkicon_index[3]!=6){
            context.drawImage(imageObj[8][2], 385, 422, 25, 25);
        }
        else if (btnplay_4.checkClicked() && gkicon_index[4]==6){
            context.drawImage(imageObj[8][1], 495, 422, 25, 25);
        }else if (btnplay_4.checkClicked() && gkicon_index[4]!=6){
            context.drawImage(imageObj[8][2], 495, 422, 25, 25);
        }
        else if (btnplay_5.checkClicked() && gkicon_index[5]==6){
            context.drawImage(imageObj[8][1], 605, 422, 25, 25);
        }else if (btnplay_5.checkClicked() && gkicon_index[5]!=6){
            context.drawImage(imageObj[8][2], 605, 422, 25, 25);
        }
        else if (btnplay_6.checkClicked() && gkicon_index[6]==6){
            context.drawImage(imageObj[8][1], 715, 422, 25, 25);
        }else if (btnplay_6.checkClicked() && gkicon_index[6]!=6){
            context.drawImage(imageObj[8][2], 715, 422, 25, 25);
        }
        }

    /* BY-ND */
        else if (gkindex==7){
        if(btnplay.checkClicked() && gkicon_index[0]==7){
            context.drawImage(imageObj[8][1], 55, 422, 25, 25);
        }else if (btnplay.checkClicked() && gkicon_index[0]!=7){
            context.drawImage(imageObj[8][2], 55, 422, 25, 25);
        }
        else if (btnplay_1.checkClicked() && gkicon_index[1]==7){
            context.drawImage(imageObj[8][1], 165, 422, 25, 25);
        }else if (btnplay_1.checkClicked() && gkicon_index[1]!=7){
            context.drawImage(imageObj[8][2], 165, 422, 25, 25);
        }
        else if (btnplay_2.checkClicked() && gkicon_index[2]==7){
            context.drawImage(imageObj[8][1], 275, 422, 25, 25);
        }else if (btnplay_2.checkClicked() && gkicon_index[2]!=7){
            context.drawImage(imageObj[8][2], 275, 422, 25, 25);
        }
        else if (btnplay_3.checkClicked() && gkicon_index[3]==7){
            context.drawImage(imageObj[8][1], 385, 422, 25, 25);
        }else if (btnplay_3.checkClicked() && gkicon_index[3]!=7){
            context.drawImage(imageObj[8][2], 385, 422, 25, 25);
        }
        else if (btnplay_4.checkClicked() && gkicon_index[4]==7){
            context.drawImage(imageObj[8][1], 495, 422, 25, 25);
        }else if (btnplay_4.checkClicked() && gkicon_index[4]!=7){
            context.drawImage(imageObj[8][2], 495, 422, 25, 25);
        }
        else if (btnplay_5.checkClicked() && gkicon_index[5]==7){
            context.drawImage(imageObj[8][1], 605, 422, 25, 25);
        }else if (btnplay_5.checkClicked() && gkicon_index[5]!=7){
            context.drawImage(imageObj[8][2], 605, 422, 25, 25);
        }
        else if (btnplay_6.checkClicked() && gkicon_index[6]==7){
            context.drawImage(imageObj[8][1], 715, 422, 25, 25);
        }else if (btnplay_6.checkClicked() && gkicon_index[6]!=7){
            context.drawImage(imageObj[8][2], 715, 422, 25, 25);
        }
        }

    /* BY-NC-ND */
        else if (gkindex==8){
        if(btnplay.checkClicked() && gkicon_index[0]==8){
            context.drawImage(imageObj[8][1], 55, 422, 25, 25);
        }else if (btnplay.checkClicked() && gkicon_index[0]!=8){
            context.drawImage(imageObj[8][2], 55, 422, 25, 25);
        }
        else if (btnplay_1.checkClicked() && gkicon_index[1]==8){
            context.drawImage(imageObj[8][1], 165, 422, 25, 25);
        }else if (btnplay_1.checkClicked() && gkicon_index[1]!=8){
            context.drawImage(imageObj[8][2], 165, 422, 25, 25);
        }
        else if (btnplay_2.checkClicked() && gkicon_index[2]==8){
            context.drawImage(imageObj[8][1], 275, 422, 25, 25);
        }else if (btnplay_2.checkClicked() && gkicon_index[2]!=8){
            context.drawImage(imageObj[8][2], 275, 422, 25, 25);
        }
        else if (btnplay_3.checkClicked() && gkicon_index[3]==8){
            context.drawImage(imageObj[8][1], 385, 422, 25, 25);
        }else if (btnplay_3.checkClicked() && gkicon_index[3]!=8){
            context.drawImage(imageObj[8][2], 385, 422, 25, 25);
        }
        else if (btnplay_4.checkClicked() && gkicon_index[4]==8){
            context.drawImage(imageObj[8][1], 495, 422, 25, 25);
        }else if (btnplay_4.checkClicked() && gkicon_index[4]!=8){
            context.drawImage(imageObj[8][2], 495, 422, 25, 25);
        }
        else if (btnplay_5.checkClicked() && gkicon_index[5]==8){
            context.drawImage(imageObj[8][1], 605, 422, 25, 25);
        }else if (btnplay_5.checkClicked() && gkicon_index[5]!=8){
            context.drawImage(imageObj[8][2], 605, 422, 25, 25);
        }
        else if (btnplay_6.checkClicked() && gkicon_index[6]==8){
            context.drawImage(imageObj[8][1], 715, 422, 25, 25);
        }else if (btnplay_6.checkClicked() && gkicon_index[6]!=8){
            context.drawImage(imageObj[8][2], 715, 422, 25, 25);
        }
        }

    /* BY-NC-SA*/
        else if (gkindex==9){
        if(btnplay.checkClicked() && gkicon_index[0]==9){
            context.drawImage(imageObj[8][1], 55, 422, 25, 25);
        }else if (btnplay.checkClicked() && gkicon_index[0]!=9){
            context.drawImage(imageObj[8][2], 55, 422, 25, 25);
        }
        else if (btnplay_1.checkClicked() && gkicon_index[1]==9){
            context.drawImage(imageObj[8][1], 165, 422, 25, 25);
        }else if (btnplay_1.checkClicked() && gkicon_index[1]!=9){
            context.drawImage(imageObj[8][2], 165, 422, 25, 25);
        }
        else if (btnplay_2.checkClicked() && gkicon_index[2]==9){
            context.drawImage(imageObj[8][1], 275, 422, 25, 25);
        }else if (btnplay_2.checkClicked() && gkicon_index[2]!=9){
            context.drawImage(imageObj[8][2], 275, 422, 25, 25);
        }
        else if (btnplay_3.checkClicked() && gkicon_index[3]==9){
            context.drawImage(imageObj[8][1], 385, 422, 25, 25);
        }else if (btnplay_3.checkClicked() && gkicon_index[3]!=9){
            context.drawImage(imageObj[8][2], 385, 422, 25, 25);
        }
        else if (btnplay_4.checkClicked() && gkicon_index[4]==9){
            context.drawImage(imageObj[8][1], 495, 422, 25, 25);
        }else if (btnplay_4.checkClicked() && gkicon_index[4]!=9){
            context.drawImage(imageObj[8][2], 495, 422, 25, 25);
        }
        else if (btnplay_5.checkClicked() && gkicon_index[5]==9){
            context.drawImage(imageObj[8][1], 605, 422, 25, 25);
        }else if (btnplay_5.checkClicked() && gkicon_index[5]!=9){
            context.drawImage(imageObj[8][2], 605, 422, 25, 25);
        }
        else if (btnplay_6.checkClicked() && gkicon_index[6]==9){
            context.drawImage(imageObj[8][1], 715, 422, 25, 25);
        }else if (btnplay_6.checkClicked() && gkicon_index[6]!=9){
            context.drawImage(imageObj[8][2], 715, 422, 25, 25);
        }
        }
}

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

    //Klick Einleitung
    $('#einleitung').click(function(){
        $(this).parent().fadeOut();
        $('#id_einleitung').toggleClass("rueckseite");
    });

    $('#einleitung_close').click(function(){
        $('#id_einleitung').addClass("rueckseite"); 
        $('#container_grün').fadeIn();   
    });    

    //Klick Home
    $('#home').click(function(){
        context.clearRect(10, 11, 840, 520);
        $('#main_canvas').addClass("canvas_style");
        $('#container_grün').fadeIn();
        document.getElementById("home").style.display = "none";
        $('#level').addClass("disabled_1");
        $('#k_play').toggleClass("kartenstapel_play fa fa-play fa-3x");
        $('#kartenstapel').addClass("displaynone");
        $('#kartenstapel_2').addClass("displaynone");
    });
});

preloader();
var btnplay = new Button(280, 380, 480, 510);
var btnplay_1 = new Button(390, 490, 480, 510); 
var btnplay_2 = new Button(500, 600, 480, 510);
var btnplay_3 = new Button(610, 710, 480, 510);
var btnplay_4 = new Button(720, 820, 480, 510);
var btnplay_5 = new Button(830, 930, 480, 510);
var btnplay_6 = new Button(940, 1040, 480, 510);
function Button(xL, xR, yT, yB) {
    this.xLeft=xL;
    this.xRight=xR;
    this.yTop=yT;
    this.yBottom=yB;
}

Button.prototype.checkClicked=function() {
    if (this.xLeft <= canvas_x && canvas_x <= this.xRight && this.yTop <=canvas_y && canvas_y <= this.yBottom) {return true;}
}

