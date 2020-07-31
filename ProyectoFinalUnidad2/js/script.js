$(document).ready(function () {
    console.log(" Confirmado ")
 });

 $("li").click(function () {
   $(this).addClass("resaltar1")
})

$("li").dblclick(function () {
   $(this).addClass("resaltar2")
})

 
 $(".titulo").mouseover(function () {
    $(this).css("background", "purple").css("color", "white")
 });
 
 $(".titulo").mouseout(function () {
    $(this).css("background", "black").css("color", "white")
 });



 $(".final").mouseover(function () {
    $(this).css("background", "blue").css("color", "white")
 });
 
 $(".final").mouseout(function () {
    $(this).css("background", "black").css("color", "white")
 });


 function enviarDatos  () { alert ( "Datos Enviados"); }





 
 