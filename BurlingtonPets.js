var categoryDepts =
  {
    "Category": "Department",
    "Aquariums": "Habitat",
    "Beds": "Habitat",
    "Crates": "Habitat",
    "Kennels": "Habitat",
    "Raw Water": "Habitat",
    "Chews": "Food & Treats",
    "Small Pet Food": "Food & Treats",
    "Dog Food": "Food & Treats",
    "Dry Cat Food": "Food & Treats",
    "Wet Cat Food": "Food & Treats",
    "Natural Foods": "Food & Treats",
    "Treats": "Food & Treats",
    "Coats": "Accessories",
    "Collars": "Accessories",
    "Leashes": "Accessories",
    "Toys": "Accessories",
    "Whistles": "Accessories"
  }

var petCategories = [
  {
    "Category": "Dogs",
    "Aquariums": "",
    "Beds": "x",
    "Crates": "x",
    "Kennels": "x",
    "Raw Water": "x",
    "Chews": "x",
    "Small Pet Food": "",
    "Dog Food": "x",
    "Dry Cat Food": "",
    "Wet Cat Food": "",
    "Natural Foods": "x",
    "Treats": "x",
    "Coats": "x",
    "Collars": "x",
    "Leashes": "x",
    "Toys": "x",
    "Whistles": "x"
  },
  {
    "Category": "Cat",
    "Aquariums": "",
    "Beds": "x",
    "Crates": "x",
    "Kennels": "x",
    "Raw Water": "x",
    "Chews": "",
    "Small Pet Food": "",
    "Dog Food": "",
    "Dry Cat Food": "x",
    "Wet Cat Food": "x",
    "Natural Foods": "x",
    "Treats": "x",
    "Coats": "x",
    "Collars": "x",
    "Leashes": "x",
    "Toys": "x",
    "Whistles": ""
  },
  {
    "Category": "Bird",
    "Aquariums": "",
    "Beds": "",
    "Crates": "",
    "Kennels": "",
    "Raw Water": "x",
    "Chews": "",
    "Small Pet Food": "x",
    "Dog Food": "",
    "Dry Cat Food": "",
    "Wet Cat Food": "",
    "Natural Foods": "x",
    "Treats": "x",
    "Coats": "",
    "Collars": "",
    "Leashes": "",
    "Toys": "x",
    "Whistles": ""
  },
  {
    "Category": "Reptile",
    "Aquariums": "x",
    "Beds": "",
    "Crates": "",
    "Kennels": "",
    "Raw Water": "x",
    "Chews": "",
    "Small Pet Food": "x",
    "Dog Food": "",
    "Dry Cat Food": "",
    "Wet Cat Food": "",
    "Natural Foods": "x",
    "Treats": "x",
    "Coats": "x",
    "Collars": "x",
    "Leashes": "x",
    "Toys": "x",
    "Whistles": ""
  },
  {
    "Category": "Fish",
    "Aquariums": "x",
    "Beds": "",
    "Crates": "",
    "Kennels": "",
    "Raw Water": "x",
    "Chews": "",
    "Small Pet Food": "x",
    "Dog Food": "",
    "Dry Cat Food": "",
    "Wet Cat Food": "",
    "Natural Foods": "x",
    "Treats": "x",
    "Coats": "",
    "Collars": "",
    "Leashes": "",
    "Toys": "",
    "Whistles": ""
  }
]

var myJSON;

let currentDepartment



function holdState(animal) {
  let count = 0
  let animalMenuBarElement = document.getElementById(animal)
  let animalClass = document.getElementsByClassName('barAnimals')
  let dropDownContectElements = document.getElementById("content")
  let animCol
  // console.log("Animal is " + animal + "animCol is " + animCol);

  switch (animal) {
    case "dog": animCol = 1;
      break;
    case "cat": animCol = 2;
      break;
    case "bird": animCol = 3;
      break;
    case "reptile": animCol = 4;
      break;
    case "fish": animCol = 5;
      break;
      console.log("Animal is " + currentAnimal + "animCol is " + animCol);
      break;
    default: console.log("Animal Malfunction! animCol is " + animCol)
  }

  for (i = 0; i < animalClass.length; i++) {                    ////CLEAR ALL BORDERS
    animalClass[i].setAttribute("style", "border: 0px")
  }

  if (animalMenuBarElement.selected === true) {                 ////If open nav re-click, close and change state
    dropDownContectElements.setAttribute("style", "display: none;")
    animalMenuBarElement.setAttribute("style", "border: 0px solid black")
    animalMenuBarElement.selected = false;
  }
  else {

    clearCategories(animal)
    // dropDownContectElements.innerHTML = petCategories[animCol - 1][['Category']]
    //console.log(petCategories[animCol - 1]['Category'][1])
    
    var currentPet = petCategories[animCol - 1]


    Object.keys(currentPet).forEach(function (key) {          ///LOOP Through all keys in CurrentPet
      // console.log(currentPet)
      if (currentPet[key] === "x") {
        //console.log(key);

        let departArray = Object.keys(categoryDepts)

        let dept
        //console.log(departArray, departArray.length)

        for (let i = 1; i < departArray.length; i++) {   //Get the departments that correspond to pet

          if (departArray[i] === key) {

            dept = categoryDepts[departArray[i]]

            if (currentDepartment === "" || currentDepartment != dept) {
              appendHeading(dept + '\n')

              currentDepartment = dept
            }

            else {

            }

          }


        }

        let animArray = Object.keys(petCategories)

        if (animArray[0] != "Dogs") {
          appendItem(key)
        }
        count++



      }
    });

    var rect = animalMenuBarElement.getBoundingClientRect();
    console.log(rect.top, rect.right, rect.bottom, rect.left);

    dropDownContectElements.setAttribute("style", "display: flex; margin-left: "+(rect.left-170)+"px")
    animalMenuBarElement.setAttribute("style", "border: 5px solid black")
    animalMenuBarElement.selected = true;
  }
  applyHeadingStyle()
  applyCategoryStyle()
}



function appendHeading(message) {
  var pre = document.getElementById('content');
  var para = document.createElement("p");
  para.classList.add('department');
  para.innerHTML = message;
  pre.appendChild(para);

}
function appendItem(message) {
  var pre = document.getElementById('content');
  var bItem = document.createElement("p");
  bItem.classList.add("categories")
  bItem.innerHTML = message;
  pre.appendChild(bItem);
  
}

function applyHeadingStyle() {

  var headings = document.getElementsByClassName('department')

  for (var i = 0; i < headings.length; i++) {
    headings[i].setAttribute("style", "font-size: 20px; font-weight: bold; clear: right; width: 100%; margin: 3px; padding: 3px")
  }

}

function applyCategoryStyle() {

  var categories = document.getElementsByClassName('categories')

  for (var i = 0; i < categories.length; i++) {
    categories[i].setAttribute("style", "font-size: 15px; clear: right; width: 100%; margin: 3px; padding: 3px")
  }

}

function clearCategories(animal) {
  var elements = document.getElementById('content').getElementsByClassName('categories');
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
  var departs = document.getElementById('content').getElementsByClassName('department');
  while (departs.length > 0) {
    departs[0].parentNode.removeChild(departs[0]);
  }
}