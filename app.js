let pedido = prompt("Que deseas comer")

order(pedido);
function order(pedido)
{   
   let ceviche = 0;
   let tacosAlPastor = 0;
   let empanadaChilena = 0;
   let hamburguesa = 1;

   if (pedido == "ceviche" & ceviche == 1)
   {
       document.write("Mi orden es ceviche");
   }
   
   {
       pedido = "tacos al pastor"
   }

   if (pedido == "tacos al pastor" & tacosAlPastor == 1)
   {
       document.write("Mi orden es tacos al pastor");
   }
   else 
   {
       pedido = "empanada chilena"
   }

   if (pedido == "empanada chilena" & empanadaChilena == 1)
   {
       document.write("mi orden es empanada chilena");
   }
   else {
       pedido = "hamburguesa"
   }

   if (pedido == "hamburguesa" & hamburguesa == 1)
   {
       document.write("ya que no habia más me voy por la hamburguesa");
   }
}