var menuInventory = [
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
  }
]

var myJSON;

function holdState(animal) {

 

  let animalMenuBarElement = document.getElementById(animal)
  let animalClass = document.getElementsByClassName('barAnimals')
  let dropDownContectElements = document.getElementById("content")
  for (i = 0; i < animalClass.length; i++) {

    animalClass[i].setAttribute("style", "border: 0px")

  }

  if (animalMenuBarElement.selected === true) {
    dropDownContectElements.setAttribute("style", "display: none;")
    animalMenuBarElement.setAttribute("style", "border: 0px solid black")
    animalMenuBarElement.selected = false;
  }
  else {
    myJSON = JSON.stringify(menuInventory);
    dropDownContectElements.setAttribute("style", "display: flex;")
    animalMenuBarElement.setAttribute("style", "border: 5px solid black")
    animalMenuBarElement.selected = true;
  }

}
