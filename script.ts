
const userInputName = document.createElement("INPUT")
userInputName.setAttribute("placeholder", "Your Name")
document.getElementById("card")?.appendChild(userInputName)

const userName = document.createElement("P")
userName.setAttribute("id", "nameValue")
document.getElementById("card")?.appendChild(userName)


const userNameText = document.getElementById("nameValue")
userInputName?.addEventListener("input", updateValue)
function updateValue(e:string) {  
userNameText.textContent = e.target.value
}


const dropDown = document.createElement("SELECT")
dropDown.setAttribute("id", "gender")
dropDown.setAttribute("id", "gender")
document.getElementById("card")?.appendChild(dropDown)

let genderList: string [] = ["Select Gender","Female", "Male"]
for (let i = 0; i < genderList.length; i++) {
    let option = document.createElement("option");
    if (i === 0) {
        option.setAttribute("value", "none"); 
    } else {
        option.setAttribute("value", genderList[i])
    }
    option.text = genderList[i];
    dropDown.appendChild(option);}

const dropDown2 = document.createElement("SELECT")
dropDown2.setAttribute("id", "race")
dropDown2.setAttribute("onclick", "changeImg()")

document.getElementById("card")?.appendChild(dropDown2)

let raceList: string [] = ["Select Race","Fairy", "Centaur", "Genasi", "Triton"]
for (let index = 0; index < raceList.length; index++) {
    let option = document.createElement("option")
    if (index === 0) {
        option.setAttribute("value", "none")
    } else {
        option.setAttribute("value", raceList[index])
        
    }
    option.text = raceList[index]
    dropDown2.appendChild(option)
}
   
const dropDown3 = document.createElement("SELECT")
dropDown3.setAttribute("id", "class")
document.getElementById("card")?.appendChild(dropDown3)

let classList: string [] = ["Select Class","Wizard", "Warrior"]
for (let index = 0; index < classList.length; index++) {
    let option = document.createElement("option")
    if (index === 0) {
        option.setAttribute("value", "none")
    } else {
        option.setAttribute("value", classList[index])
    }
    option.text = classList[index]
    dropDown3.appendChild(option)
}

const characterImage = document.createElement("img");
characterImage.setAttribute("id", "characterImage");
document.getElementById("pictures")?.appendChild(characterImage);

const pictures2 = document.createElement("IMG")
pictures2.setAttribute("id","classImage" )
document.getElementById("card")?.appendChild(pictures2)



const classSelect = document.getElementById("class");
classSelect?.addEventListener("change", changeImgClass)

function changeImgClass() {

    let classSelected = document.getElementById("class")
    let classValue = classSelected?.value
    let classImage = document.getElementById("classImage")

    if (classValue === "Wizard") {
        classImage?.setAttribute("src", "img/wizard.png")
    } else if (classValue === "Warrior") {
        classImage?.setAttribute("src", "img/warrior.jpg")
    } else {
        classImage?.setAttribute("src", "img/default_witcher.png")
      }
     
}
const raceImage = document.getElementById("characterImage")
raceImage?.setAttribute("src", "img/default.jpg")

const classImage = document.getElementById("classImage")
classImage?.setAttribute("src", "img/default_witcher.png")

const characterGender = document.getElementById("gender")
const characterRace = document.getElementById("race")
characterRace?.addEventListener("change", characterImgRace)
characterGender?.addEventListener("change", characterImgRace)

function characterImgRace() {
    let chosenRace = document.getElementById("race");
    let chosenGender = document.getElementById("gender");
    let raceValue = chosenRace?.value
    let genderValue = chosenGender?.value

    if (raceValue === "Centaur" && genderValue == "Female") 
    raceImage?.setAttribute("src", "img/centaur_female.jpg")

    if (raceValue === "Centaur" && genderValue == "Male") 
    raceImage?.setAttribute("src", "img/centaur_male.jpg")

    if (raceValue === "Fairy" && genderValue == "Female") 
    raceImage?.setAttribute("src", "img/fairy_female.jpg")

    if (raceValue === "Fairy" && genderValue == "Male") 
    raceImage?.setAttribute("src", "img/fairy_male.jpg")

    if (raceValue === "Triton" && genderValue == "Female") 
    raceImage?.setAttribute("src", "img/triton_female.jpg")

    if (raceValue === "Triton" && genderValue == "Male") 
    raceImage?.setAttribute("src", "img/triton_male.jpg")
    
    if (raceValue === "Genasi" && genderValue == "Female") 
    raceImage?.setAttribute("src", "img/genasi_female.jpg")

    if (raceValue === "Genasi" && genderValue == "Male") 
    raceImage?.setAttribute("src", "img/genasi_male.jpg")

    if (raceValue === "none" || genderValue =="none")
    raceImage?.setAttribute("src", "img/default.jpg")
}







