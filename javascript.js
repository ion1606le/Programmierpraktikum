//Hier werden alle Bilder in eines mehrdimensionale Array hochgeladen
function preloader(){
    var i=0;
    var j=0;
    imageObj=[
        [],[],[],[],[],[],[],[],[],[]
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
        /*Icon_Antworten*/ ["images/cc_Icon/Icon_2/cc0.png", "images/cc_Icon/Icon_2/cc-by.png", "images/cc_Icon/Icon_2/cc-by-nc.png", "images/cc_Icon/Icon_2/cc-by-sa.png", "images/cc_Icon/Icon_2/cc-by-nd.png", "images/cc_Icon/Icon_2/cc-by-nc-nd.png", "images/cc_Icon/Icon_2/cc-by-nc-sa.png"], 
        /* Tutorial */ ["images/Spielkarten_2/kürzel_0.png", "images/Spielkarten_2/kürzel_by.png", "images/Spielkarten_2/kürzel_sa.png", "images/Spielkarten_2/kürzel_nc.png", "images/Spielkarten_2/icon_Kürzel_ND.png", "images/Spielkarten_2/kürzel_by_nc.png", "images/Spielkarten_2/kürzel_by_sa.png", "images/Spielkarten_2/kürzel_by_nd.png", "images/Spielkarten_2/kürzel_by_nc_nd.png", "images/Spielkarten_2/kürzel_by_nc_sa.png"],
        /* Tutorial-Antworten */ ["images/cc_Icon/Icon_1/cc0.png", "images/cc_Icon/Icon_1/cc-by.png", "images/cc_Icon/Icon_1/cc-sa.png", "images/cc_Icon/Icon_1/cc-nc.png", "images/cc_Icon/Icon_1/cc-nd.png", "images/cc_Icon/Icon_1/cc-by-nc.png", "images/cc_Icon/Icon_1/cc-by-sa.png", "images/cc_Icon/Icon_1/cc-by-nd.png", "images/cc_Icon/Icon_1/cc-by-nc-nd.png", "images/cc_Icon/Icon_1/cc-by-nc-sa.png"]
    ]; 

     //Preloading starten
     for (i=0; i<=9; i++)
     {
         for (j=0; j<imageArray[i].length; j++){
         imageObj[i][j]=new Image();
         imageObj[i][j].src=imageArray[i][j];
        }
    }
}

$(document).ready(function() {
    var playing=false;
    var min=0;
    var max_1=14;
    var max_2=6;
    var max_3=9;
    var score=0;
    var gindex_1=0;
    var gindex_2=0;
    var gicon_index=[];
    var n=0;
    var gkindex=0
    var gkicon_index=[];
	
	//Richtige Antworten:
	//Level 1
	var antwort_1 =[];
	antwort_1[0]=[];
	antwort_1[0][0]=[0];
	antwort_1[0][1]=[1];
	antwort_1[0][2]=[2];
	antwort_1[0][3]=[3];
	antwort_1[0][4]=[4];
	antwort_1[0][5]=[5];
	antwort_1[0][6]=[6];
	antwort_1[0][7]=[7];
	antwort_1[0][8]=[8];
	antwort_1[0][9]=[9];
	//Level 2
	var antwort = [];
	antwort[0]=[];
	//Zero
	antwort[0][0]=[0,1,2,3,4,5,6];
	antwort[0][1]=[1,2,3,4,5,6];
	antwort[0][2]=[2,5,6];
	antwort[0][3]=[3];
	antwort[0][4]=[];
	antwort[0][5]=[];
	antwort[0][6]=[6];
	//BY
	antwort[1]=[];
	antwort[1][0]=[1,2,3,4,5,6];
	antwort[1][1]=[1,2,3,4,5,6];
	antwort[1][2]=[2,5,6];
	antwort[1][3]=[3];
	antwort[1][4]=[];
	antwort[1][5]=[];
	antwort[1][6]=[6];
	//BY-NC
	antwort[2]=[];
	antwort[2][0]=[2,5,6];
	antwort[2][1]=[2,5,6];
	antwort[2][2]=[2,5,6];
	antwort[2][3]=[];
	antwort[2][4]=[];
	antwort[2][5]=[];
	antwort[2][6]=[6];
	//BY-SA
	antwort[3]=[];
	antwort[3][0]=[3];
	antwort[3][1]=[3];
	antwort[3][2]=[];
	antwort[3][3]=[3];
	antwort[3][4]=[];
	antwort[3][5]=[];
	antwort[3][6]=[];
	//BY-ND
	antwort[4]=[];
	antwort[4][0]=[];
	antwort[4][1]=[];
	antwort[4][2]=[];
	antwort[4][3]=[];
	antwort[4][4]=[];
	antwort[4][5]=[];
	antwort[4][6]=[];
	//BY-NC-ND
	antwort[5]=[];
	antwort[5][0]=[];
	antwort[5][1]=[];
	antwort[5][2]=[];
	antwort[5][3]=[];
	antwort[5][4]=[];
	antwort[5][5]=[];
	antwort[5][6]=[];
	//BY-NC-SA
	antwort[6]=[];
	antwort[6][0]=[6];
	antwort[6][1]=[6];
	antwort[6][2]=[6];
	antwort[6][3]=[];
	antwort[6][4]=[];
	antwort[6][5]=[];
	antwort[6][6]=[6];
	
	//Arrays für gewählte Antworten und ausgegebene Lizenzen 
	var ang_karte = [];
	var ang_lizenz=[];
	//Der Button "Fortsetzen" wird aktiv, wenn localStorage forhanden sind
	if (localStorage.getItem('INDEX_1')!=null)
    {
        $('#fortsetzen').removeClass("disabled");
	}

    // Neustartbutton Click
    $('#neustart').click(function(){
        $('#container_grün').toggleClass("displaynone");
		$('#level_container').toggleClass("displaynone");  
    });
	
	// Level_1_button Click
	$('#level_1').click(function(){
		$('#level_container').toggleClass("displaynone");
		$('#main_div').toggleClass("displaynone");
		$('#main_div1').toggleClass("displaynone");
		document.getElementById("home").style.display = "block";
		$('#kartenstapel').removeClass("displaynone");
        $('#k_play').toggleClass("kartenstapel_play fa fa-play fa-3x");
		$('#kartenstapel_text').removeClass("displaynone");
	});

	//Level_2_button Click
	$('#level_2').click(function(){
		$('#level_container').toggleClass("displaynone");
		$('#main_div').toggleClass("displaynone");
		$('#main_div2').toggleClass("displaynone");
		document.getElementById("home").style.display = "block";
	    $('#k_play_2').toggleClass("kartenstapel_play fa fa-play fa-3x");
        $('#kartenstapel_2').removeClass("displaynone");
		$('#kartenstapel_2text').removeClass("displaynone");
		
	});
    
	// Fortsetzenbutton Click
    $('#fortsetzen').click(function(){
		var index_1_1 = JSON.parse(localStorage.getItem('INDEX_1'));
        var index_2_2 = JSON.parse(localStorage.getItem('INDEX_2'));
        var i_1 = JSON.parse(localStorage.getItem('I'));
        var j_1 = JSON.parse(localStorage.getItem('J'));
        var score_1 = JSON.parse(localStorage.getItem('SCORE'));
        score=score_1;
        var icon_index_1 = JSON.parse(localStorage.getItem('ICON_INDEX'));
		
        $('#container_grün').toggleClass("displaynone");
		$('#main_div2').toggleClass("displaynone");
		document.getElementById("home").style.display = "block";
		$('#k_play_2').toggleClass("kartenstapel_play fa fa-play fa-3x");
        $('#kartenstapel_2').removeClass("displaynone");
		$('#kartenstapel_2text').removeClass("displaynone");
      
        //Karte 1 und 2
		$('#level2_karte1>img').attr({src:imageObj[index_1_1][i_1].src});
		$('#level2_karte2>img').attr({src:imageObj[index_2_2][j_1].src});
        //Antworten
		$('#antwort_1>img').attr({src:imageObj[7][icon_index_1[0]].src});
		$('#antwort_2>img').attr({src:imageObj[7][icon_index_1[1]].src});
		$('#antwort_3>img').attr({src:imageObj[7][icon_index_1[2]].src});
		$('#antwort_4>img').attr({src:imageObj[7][icon_index_1[3]].src});
		$('#antwort_5>img').attr({src:imageObj[7][icon_index_1[4]].src});
		$('#antwort_6>img').attr({src:imageObj[7][icon_index_1[5]].src});
		$('#antwort_7>img').attr({src:imageObj[7][icon_index_1[6]].src});
    });

    //Kartenstapel_Level_1 Click
    $('#kartenstapel').click(function(){
        var kindex=Math.floor(Math.random()*(max_3-min+1))+min;
        gkindex=kindex;
        var p=Math.floor(Math.random()*(max_2-min+1))+min;
        var kicon_index=[];
        gkicon_index=kicon_index;
        var m=0;
        $('#kartenstapel').toggleClass("displaynone");
		$('#kartenstapel_check').toggleClass("displaynone");
		//Es wird ein Array mit zufälligen Zahlen generiert
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
		// Es wird geprüft, ob die richtige Lizenz auch enthalten ist
        for (var i=0; i<=6; i++)
        {
            if(kicon_index.includes(kindex)==false && i<=6){
                kicon_index.splice(p, 1, kindex);
            }
            else if (kicon_index.includes(kindex)==true && i<=6){
                continue;
            }
        }
        //Karte
        $('#level1_karte>img').attr({src:imageObj[8][kindex].src});
   
        //Antworten
		$('#antwort_11>img').attr({src:imageObj[9][kicon_index[0]].src});
		$('#antwort_21>img').attr({src:imageObj[9][kicon_index[1]].src});
		$('#antwort_31>img').attr({src:imageObj[9][kicon_index[2]].src});
		$('#antwort_41>img').attr({src:imageObj[9][kicon_index[3]].src});
		$('#antwort_51>img').attr({src:imageObj[9][kicon_index[4]].src});
		$('#antwort_61>img').attr({src:imageObj[9][kicon_index[5]].src});
		$('#antwort_71>img').attr({src:imageObj[9][kicon_index[6]].src});
		
		$('.antwort_falsch').removeClass('antwort_falsch');
		$('.antwort_richtig').removeClass('antwort_richtig');
		
		$('#antwort_11').off('click').click(function(){
		  $(this).toggleClass("antwort_checked");
	  });
		$('#antwort_21').off('click').click(function(){
		  $(this).toggleClass("antwort_checked");
	  });
		$('#antwort_31').off('click').click(function(){
		  $(this).toggleClass("antwort_checked");
	  });
		$('#antwort_41').off('click').click(function(){
		  $(this).toggleClass("antwort_checked");
	  });
		$('#antwort_51').off('click').click(function(){
		  $(this).toggleClass("antwort_checked");
	  });
		$('#antwort_61').off('click').click(function(){
		  $(this).toggleClass("antwort_checked");
	  });
		$('#antwort_71').off('click').click(function(){
		  $(this).toggleClass("antwort_checked");
	  });
		
    });
	// Hier wird es geprüft, ob die augewählte Antworten richtig sind oder falsch und dementsprechen gefärbt
	//grün fur richtige und rot für falsche und die, die richtig waren aber nicht ausgewählt wurden 
	$('#kartenstapel_check').click(function(){
		$('#kartenstapel').toggleClass("displaynone");
		$('#kartenstapel_check').toggleClass("displaynone");
		$('.antwort_checked').each(function(){
			var datakey = $(this).data('antwortkey');
			ang_karte.push(datakey);
			ang_lizenz.push(gkicon_index[$(this).data('antwortkey')]);
		});
		
		antwort_1[0][gkindex].forEach(function(element){
			var ang_key = ang_lizenz.findIndex(function(value){return value === element;});
			if (ang_key !== -1) {
				$('#level1_antwort').find('.antwort_button:nth-child('+(ang_karte[ang_key]+1)+')').addClass("antwort_richtig").removeClass("antwort_checked");
				score++;
			} else {
				$('#level1_antwort').find('.antwort_button:nth-child('+(gkicon_index.findIndex(function(value){
					return value==element;
				})+1)+')').addClass("antwort_falsch");
				score--;
			}
		});
		$('#level1_antwort').find('.antwort_checked').each(function(){
			score--;
			$(this).addClass("antwort_falsch").removeClass("antwort_checked");
		});
		ang_karte.splice(0, ang_karte.length);
		ang_lizenz.splice(0, ang_lizenz.length);
		// Score wird ausgegeben
		var ausgabe=document.getElementById("score1");
		var ergebnis=('Score: '+score);
		ausgabe.innerHTML=ergebnis;
		
	});
	

    //Kartenstappel_Level_2 Click
    $('#kartenstapel_2').click(function(){
        var index_1=Math.floor(Math.random()*(max_2-min+1))+min;
        gindex_1=index_1;
        var index_2=Math.floor(Math.random()*(max_2-min+1))+min;
        gindex_2=index_2;
        var i=Math.floor(Math.random()*(max_2-min+1))+min;
        var j=Math.floor(Math.random()*(max_1-min+1))+min;
        var icon_index=[];
        gicon_index=icon_index;
        var m=0;
		$('#kartenstapel_2').toggleClass("displaynone");
		$('#kartenstapel_2check').toggleClass("displaynone");
        $('#frage').removeClass("displaynone");
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
		$('#level2_karte1>img').attr({src:imageObj[index_1][i].src});
		$('#level2_karte2>img').attr({src:imageObj[index_2][j].src});
        //Antworten
		$('#antwort_1>img').attr({src:imageObj[7][icon_index[0]].src});
		$('#antwort_2>img').attr({src:imageObj[7][icon_index[1]].src});
		$('#antwort_3>img').attr({src:imageObj[7][icon_index[2]].src});
		$('#antwort_4>img').attr({src:imageObj[7][icon_index[3]].src});
		$('#antwort_5>img').attr({src:imageObj[7][icon_index[4]].src});
		$('#antwort_6>img').attr({src:imageObj[7][icon_index[5]].src});
		$('#antwort_7>img').attr({src:imageObj[7][icon_index[6]].src});
		
		$('.antwort_falsch').removeClass('antwort_falsch');
		$('.antwort_richtig').removeClass('antwort_richtig');
		
		$('#antwort_1').off('click').click(function(){
		  $(this).toggleClass("antwort_checked");
	  });
		$('#antwort_2').off('click').click(function(){
		  $(this).toggleClass("antwort_checked");
	  });
		$('#antwort_3').off('click').click(function(){
		  $(this).toggleClass("antwort_checked");
	  });
		$('#antwort_4').off('click').click(function(){
		  $(this).toggleClass("antwort_checked");
	  });
		$('#antwort_5').off('click').click(function(){
		  $(this).toggleClass("antwort_checked");
	  });
		$('#antwort_6').off('click').click(function(){
		  $(this).toggleClass("antwort_checked");
	  });
		$('#antwort_7').off('click').click(function(){
		  $(this).toggleClass("antwort_checked");
	  });
		//localStorage für Level 2 werden automatisch gespeichert
		localStorage.setItem('INDEX_1', JSON.stringify(index_1));
        localStorage.setItem('INDEX_2', JSON.stringify(index_2));
        localStorage.setItem('I', JSON.stringify(i));
        localStorage.setItem('J', JSON.stringify(j));
        localStorage.setItem('SCORE', JSON.stringify(score));
        localStorage.setItem('ICON_INDEX', JSON.stringify(icon_index));
    });
	
    // Hier wird es geprüft, ob die augewählte Antworten richtig sind oder falsch und dementsprechen gefärbt
	//grün fur richtige und rot für falsche und die, die richtig waren aber nicht ausgewählt wurden
	$('#kartenstapel_2check').click(function(){
		$('#kartenstapel_2').toggleClass("displaynone");
		$('#kartenstapel_2check').toggleClass("displaynone");
		$('.antwort_checked').each(function(){
			var datakey = $(this).data('antwortkey');
			ang_karte.push(datakey);
			ang_lizenz.push(gicon_index[$(this).data('antwortkey')]);
		});
		
		antwort[gindex_1][gindex_2].forEach(function(element){
			var ang_key = ang_lizenz.findIndex(function(value){return value === element;});
		if (ang_key !== -1) {
			$('#level2_antwort').find('.antwort_button:nth-child('+(ang_karte[ang_key]+1)+')').addClass("antwort_richtig").removeClass("antwort_checked");
			score++;
		} else {
			$('#level2_antwort').find('.antwort_button:nth-child('+(gicon_index.findIndex(function(value){
				return value==element;
			})+1)+')').addClass("antwort_falsch");
			score--;
		}
		});
		$('#level2_antwort').find('.antwort_checked').each(function(){
			score--;
			$(this).addClass("antwort_falsch").removeClass("antwort_checked");
		});
		ang_karte.splice(0, ang_karte.length);
		ang_lizenz.splice(0, ang_lizenz.length);
		var ausgabe=document.getElementById("score2");
		var ergebnis=('Score: '+score);
		ausgabe.innerHTML=ergebnis;
		
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
        $('#main_div').toggleClass("disabled_1");
    });

    $('#a1_rechts').click(function(){
        $('#id_hilfeseite_2').toggleClass("rueckseite");
    });

    $('#a1_close, #a2_close').click(function(){
        $('#id_hilfeseite_1').addClass("rueckseite"); 
        $('#id_hilfeseite_2').addClass("rueckseite");
		$('#main_div').toggleClass("disabled_1");
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
		$('img').removeAttr('src');
        $('#main_div').toggleClass("displaynone");
		$('#main_div2').addClass("displaynone");
		$('#main_div1').addClass("displaynone");
		$('#container_grün').toggleClass("displaynone");
        document.getElementById("home").style.display = "none";
        $('#k_play, #k_play_2').removeClass("kartenstapel_play fa fa-3x fa-play");
        $('#kartenstapel, #kartenstapel_text, #kartenstapel_check').addClass("displaynone");
		$('#kartenstapel_2, #kartenstapel_2text, #kartenstapel_2check').addClass("displaynone");
		$('#frage').addClass("displaynone");
		
    });
});
// Die preloader Funktion wird gestartet
preloader();
