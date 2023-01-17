function findMax(a,b,c){
    a=Number(prompt('Введите a'));
    b=Number(prompt('Введите b')); 
    c=Number(prompt('Введите c'));
    if (a*b*c>a+b+c){
        console.log(a*b*c+3);
    }
    else{
        console.log(a+b+c+3);
    }
  
}
findMax("Ваш результат");