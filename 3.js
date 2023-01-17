function sumPositive(arr){
    let sum = 0;
    arr=[];

    for (let i = 0; i < arr.length; i++) {    
        arr[i] = prompt('Введите любое имя', +i);
      if (arr[i] > 0) sum += arr[i];
    }
    
     console.log(sum);

  }
  
  sumPositive("Ваш результат");