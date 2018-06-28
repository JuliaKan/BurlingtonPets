


function holdState(animal) {

    let selectedImg = document.getElementById(animal)
    let animalClass = document.getElementsByClassName('barAnimals')
    let dropDown = document.getElementById("content")



    for (i = 0; i < animalClass.length; i++) {
        
        animalClass[i].setAttribute("style", "border: 0px")

    }

    if (selectedImg.selected === true) {
        dropDown.setAttribute("style", "display: none;")
        selectedImg.setAttribute("style", "border: 0px solid black")
        selectedImg.selected = false;
    }
    else {
        dropDown.setAttribute("style", "display: flex;")
        selectedImg.setAttribute("style", "border: 5px solid black")
        selectedImg.selected = true;
    }

    
    
}