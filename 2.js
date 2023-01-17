function findQuarter(x,y){
    x=Number(prompt('Введите x'));
    y=Number(prompt('Введите y'));  
   if (x<0, y>0){
       console.log("1 четверть");
   }
   if (x>0, y>0){
    console.log("2 четверть");
}
if (x<0, y<0){
    console.log("3 четверть");
}
if (x>0, y<0){
    console.log("4 четверть");
}
   else{
       console.log("точка принадлежит оси");
   }
}
findQuarter("Ваш результат");