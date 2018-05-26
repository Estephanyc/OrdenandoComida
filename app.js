order();
function order()
{   
   let ceviche = 0;
   let tacosAlPastor = 0;
   let empanadaChilena =0;
   let hamburguesa = 1;

   if (ceviche ==1)
   {
       document.write("Mi orden es ceviche");
   }
   else if(tacosAlPastor == 1)
   {
       document.write("Mi orden es tacos al pastor");
   }
   else if (empanadaChilena == 1)
   {
       document.write("mi orden es empanada chilena");
   }
   else if (hamburguesa == 1)
   {
       document.write("ya que no habia mas me voy por la hamburguesa");
   }
}