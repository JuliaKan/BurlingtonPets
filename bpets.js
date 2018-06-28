


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
        dropDownContectElements.setAttribute("style", "display: flex;")
        animalMenuBarElement.setAttribute("style", "border: 5px solid black")
        animalMenuBarElement.selected = true;
    }

    
    
}