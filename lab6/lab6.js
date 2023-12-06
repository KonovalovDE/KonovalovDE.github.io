


function updatePrice() {
    // Находим select по имени в DOM.
    let s = document.getElementsByName("prodType");
    let select = s[0]; 
    let price = 0;
    let prices = getPrices();
    let priceIndex = parseInt(select.value) - 1;
    if (priceIndex >= 0) {
      price = prices.prodTypes[priceIndex];
    }

    //Цена еды
    foodPrices = getFoodPrices();
    var FirstDishPrice = foodPrices.firstDish[document.getElementsByName("FirstDish")[0].value-1]*
    parseInt(document.getElementsByName("FirstDishQuantity")[0].value);
    var SecondDishPrice = foodPrices.secondDish[document.getElementsByName("SecondDish")[0].value-1]*
    parseInt(document.getElementsByName("SecondDishQuantity")[0].value);
    var DesertPrice = foodPrices.Desert[document.getElementsByName("Desert")[0].value-1]*
    parseInt(document.getElementsByName("DesertQuantity")[0].value);
    var DrinkPrice = foodPrices.Drink[document.getElementsByName("Drink")[0].value-1]*
    parseInt(document.getElementsByName("DrinkQuantity")[0].value);

    var TotalFoodPrice = FirstDishPrice+SecondDishPrice+DesertPrice+DrinkPrice;

    // Скрываем или показываем радиокнопки.
    let radioDiv = document.getElementById("radios");
    radioDiv.style.display = (select.value == "3" ? "block" : "none");
    // Смотрим какая товарная опция выбрана.
    let radios = document.getElementsByName("prodOptions");
    radios.forEach(function(radio) {
      if (radio.checked) {
        let optionPrice = prices.prodOptions[radio.value];
        if (optionPrice !== undefined) {
          price += optionPrice;
        }
      }
    });
  
    // Скрываем или показываем чекбоксы.
    let checkboxDiv = document.getElementById("checkboxes");
    checkboxDiv.style.display = ( (select.value == "1" || select.value =="3") ? "none" : "block");
  
    // Смотрим какие товарные свойства выбраны.
    let checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
        let propPrice = prices.prodProperties[checkbox.name];
        if (propPrice !== undefined) {
          price += propPrice;
        }
      }
    });
    
    let prodPrice = document.getElementById("prodPrice");
    let entertainmentQuantity = document.getElementsByName("entertainmentQuantity")[0].value;
    prodPrice.innerHTML = TotalFoodPrice*89 + price*parseInt(entertainmentQuantity) + " рублей";
  }
  
  function getPrices() {
    return {
      prodTypes: [2500, 1500, 3000],
      prodOptions: {
        option1: 500,
        option2: 1000,
        option3: 1500,
      },
      prodProperties: {
        prop1: 500,
      }
    };
  }
  function getFoodPrices()
  {
    let t = {firstDish:[2,2,3], secondDish: [2,2], Desert: [1,1,1], Drink: [1,3,2] };
    return t
  }
  
  window.addEventListener('DOMContentLoaded', function (event) {
    // Скрываем радиокнопки.
    let radioDiv = document.getElementById("radios");
    radioDiv.style.display = "none";
    
    // Находим select по имени в DOM.
    let s = document.getElementsByName("prodType");
    let select = s[0];
    // Назначаем обработчик на изменение select.
    select.addEventListener("change", function(event) {
      let target = event.target;
      console.log(target.value);
      updatePrice();
    });


    //Листенеры для еды
    let select1 = document.getElementsByName("FirstDish")[0];
    select1.addEventListener("change", function(event) {
        let target = event.target;
        console.log(target.value);
        updatePrice();
      });
      let select2 = document.getElementsByName("SecondDish")[0];
    select2.addEventListener("change", function(event) {
        let target = event.target;
        console.log(target.value);
        updatePrice();
      });
      let select3 = document.getElementsByName("Desert")[0];
    select3.addEventListener("change", function(event) {
        let target = event.target;
        console.log(target.value);
        updatePrice();
      });
      let select4 = document.getElementsByName("Drink")[0];
    select4.addEventListener("change", function(event) {
        let target = event.target;
        console.log(target.value);
        updatePrice();
      });
    
    
    // Назначаем обработчик радиокнопок.  
    let radios = document.getElementsByName("prodOptions");
    radios.forEach(function(radio) {
      radio.addEventListener("change", function(event) {
        let r = event.target;
        console.log(r.value);
        updatePrice();
      });
    });

    //Обработики для текстбоксов
    const textboxes = document.querySelectorAll("input.textbox");
    textboxes[0].addEventListener("input", updatePrice);
    textboxes[1].addEventListener("input", updatePrice);
    textboxes[2].addEventListener("input", updatePrice);
    textboxes[3].addEventListener("input", updatePrice);
    textboxes[4].addEventListener("input", updatePrice);

  
      // Назначаем обработчик радиокнопок.  
    let checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener("change", function(event) {
        let c = event.target;
        console.log(c.name);
        console.log(c.value);
        updatePrice();
      });
    });
  
    updatePrice();
  });
  