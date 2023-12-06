
function CheckInput()
{
  var a = /^\d+$/;
  var temp1 = document.getElementsByName("FirstDishQuantity")[0].value;
  var temp2 = document.getElementsByName("SecondDishQuantity")[0].value;
  var temp3 = document.getElementsByName("DesertQuantity")[0].value;
  var temp4 = document.getElementsByName("DrinkQuantity")[0].value;
  if( temp1.length === 0 || temp2.length === 0 || temp3.length === 0 || temp4.length === 0 )
  {
    alert("Введите количество блюд");
  }
  else
  {
    if(a.test(temp1)&&a.test(temp2)&&a.test(temp3)&&a.test(temp4))
    {TotalPrice(parseInt(temp1),parseInt(temp2),parseInt(temp3),parseInt(temp4));}
    else{alert("Некорректное количество");}
    
  }
}
function TotalPrice(firstQ,secondQ,desertQ,drinkQ)
{
    var firstT = document.getElementsByName("FirstDish")[0];
    var secondT = document.getElementsByName("SecondDish")[0];
    var desertT = document.getElementsByName("Desert")[0];
    var drinkT = document.getElementsByName("Drink")[0];
    var total = 0;
    switch(firstT.value)
    {
      case "Borsch":{total=total+firstQ*2;break;}
      case "ChickenSoup":{total=total+firstQ*2;break;}
      case "Lagman":{total=total+firstQ*3;break;}
    }
    switch(secondT.value)
    {
      case "Macaroni":{total=total+secondQ*2;break;}
      case "MashedPotatoes":{total=total+secondQ*2;break;}
    }
    switch(desertT.value)
    {
      case "Cake":{total=total+desertQ*1;break;}
      case "Macaroon":{total=total+desertQ*1;break;}
      case "Croissant":{total=total+desertQ*1;break;}
    }
    switch(drinkT.value)
    {
      case "Tea":{total=total+drinkQ*1;break;}
      case "Coffee":{total=total+drinkQ*3;break;}
      case "CocaCola":{total=total+drinkQ*2;break;}
    }
    alert(total);
}
