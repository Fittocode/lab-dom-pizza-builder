// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: false,
  mushrooms: false,
  greenPeppers: false,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(mushroom => {
    if (state.mushrooms) {
      mushroom.style.visibility = 'visible'
    } else {
      mushroom.style.visibility = 'hidden'
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(pepper => {
    if (state.greenPeppers) {
      pepper.style.visibility = 'visible'
    } else {
      pepper.style.visibility = 'hidden'
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
    if (state.whiteSauce) {
      document.querySelector('.sauce').classList.add('sauce-white')
    } else {
      document.querySelector('.sauce').classList.remove('sauce-white')
    }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if (state.glutenFreeCrust) {
    document.querySelector('.crust').classList.add('crust-gluten-free')
  } else {
    document.querySelector('.crust').classList.remove('crust-gluten-free')
  }
}
function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
    for (i = 0; i < document.querySelectorAll('.btn').length; i++) {
      if (Object.entries(state)[i][1]) {
        document.querySelectorAll('.btn')[i].classList.add('active')
      } else {
        document.querySelectorAll('.btn')[i].classList.remove('active')
      }
    }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">
  document.querySelectorAll('.btn').forEach(button => {
    if (button.classList.contains('active')) {
      var ul = document.querySelector(".price ul");
      var li = document.createElement("li");
      if (button.innerText === "White sauce") {
        li.appendChild(document.createTextNode("$3 " + button.innerText))
      } else if (button.innerText === "Gluten-free crust") {
        li.appendChild(document.createTextNode("$5 " + button.innerText));
      }  else {
        li.appendChild(document.createTextNode("$1 " + button.innerText));
      }
      ul.appendChild(li);
      } else {
        
      }
    })
  }

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms
  renderEverything()
})
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
})

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce
  console.log(state.whiteSauce)
  renderEverything()
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything() 
})


// if (state.pepperoni) {
//   var ul = document.querySelector(".price ul");
//   var li = document.createElement("li");
//   li.appendChild(document.createTextNode("$1" + button.innerText));
//   ul.appendChild(li);
// } else {
  var ul = document.querySelector(".price ul");
  var item = document.querySelector('.pepperoni')
  ul.removeChild(item)
//   }