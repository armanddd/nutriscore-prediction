function calculateNutriScore(){
    energie = document.getElementById("Energie").value;
    mg = document.getElementById("Mg").value;
    acideGrasSature = document.getElementById("AcideGrasSature").value;
    sucres = document.getElementById("Sucres").value;
    proteines = document.getElementById("Proteines").value;
    fibres = document.getElementById("Fibres").value;
    sel = document.getElementById("Sel").value;


    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
           if (xmlhttp.status == 200) {
               switch (JSON.parse(xmlhttp.responseText).nutriscore){
                   case 'a':
                       document.getElementById("showDiv").innerHTML = '<img src="static/img/A.png" alt="A" style="max-height: 100%;max-width: 100%;"/>'
                       document.getElementById("showDiv").style.height = "300px";
                       document.getElementById("showDiv").style.display = "block";
                       break;
                   case 'b':
                       document.getElementById("showDiv").innerHTML = '<img src="static/img/B.png" alt="B" style="max-height: 100%;max-width: 100%;"/>'
                       document.getElementById("showDiv").style.height = "300px";
                       document.getElementById("showDiv").style.display = "block";
                       break;
                   case 'c':
                       document.getElementById("showDiv").innerHTML = '<img src="static/img/C.png" alt="C" style="max-height: 100%;max-width: 100%;"/>'
                       document.getElementById("showDiv").style.height = "300px";
                       document.getElementById("showDiv").style.display = "block";
                       break;
                   case 'd':
                       document.getElementById("showDiv").innerHTML = '<img src="static/img/D.png" alt="D" style="max-height: 100%;max-width: 100%;"/>'
                       document.getElementById("showDiv").style.height = "300px";
                       document.getElementById("showDiv").style.display = "block";
                       break;
                   case 'e':
                       document.getElementById("showDiv").innerHTML = '<img src="static/img/E.png" alt="E" style="max-height: 100%;max-width: 100%;"/>'
                       document.getElementById("showDiv").style.height = "300px";
                       document.getElementById("showDiv").style.display = "block";
                       break;
                   default:
                       return false;


               }
               //document.getElementById("showDiv").innerHTML = '<img src="" alt=""/>'
               //document.getElementById("showDiv").innerHTML = "Nutriscore = " + JSON.parse(xmlhttp.responseText).nutriscore;
           }
           else if (xmlhttp.status == 400)
              alert('There was an error 400');
           else
               alert('something else other than 200 was returned');
        }
    };

    xmlhttp.open("POST", "/prediction", true);
    xmlhttp.send(JSON.stringify({energie: energie, mg: mg, acideGrasSature: acideGrasSature, sucres: sucres, proteines: proteines, fibres: fibres, sel: sel}));

}
