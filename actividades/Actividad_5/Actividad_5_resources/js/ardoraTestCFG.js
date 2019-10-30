//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=3; attempts=0; attemptsMax=1;
var score=0; scoreMax=3; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fResp="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Respuesta correcta, bien hecho!!!"; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="QWN0aXZpZGFkXzU"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["Especifica la dirección horizontal del texto en un elemento.","Representa un contenedor genérico sin ningún significado especial.","representa una propiedad de CSS."];
var answers1=["MXRleHQtYWxpZ24","MGZvbnQtZmFtaWx5","MGRpc3BsYXk","MGNvbnRlbnQ"];
var answers2=["MWRpdg","MGNvbnRlbnQ","MGZvcm0","MHNlY3Rpb24"];
var answers3=["MW1hcmdpbg","MGZvb3Rlcg","MGlmcmFtZQ","MHRhYmxl"];
var ans=[answers1,answers2,answers3];
var err=["No es correcto, debes estudiar","No es correcto, debes estudiar.","No es correcto, debes estudiar."];
var ima=["","",""];
var mp4=["","",""];
var ogv=["","",""];
var indexTag=0; actualAnswers=[]; dirMedia="Actividad_5_resources/media/";
var tiRandOrder=false;
var iT=0;var r_order=[];
