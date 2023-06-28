"use strict";
var _a, _b, _c, _d, _e, _f, _g;
const userInputName = document.createElement("INPUT");
userInputName.setAttribute("placeholder", "Your Name");
(_a = document.getElementById("card")) === null || _a === void 0 ? void 0 : _a.appendChild(userInputName);
const userName = document.createElement("P");
userName.setAttribute("id", "nameValue");
(_b = document.getElementById("card")) === null || _b === void 0 ? void 0 : _b.appendChild(userName);
const userNameText = document.getElementById("nameValue");
userInputName === null || userInputName === void 0 ? void 0 : userInputName.addEventListener("input", updateValue);
function updateValue(e) {
    userNameText.textContent = e.target.value;
}
const dropDown = document.createElement("SELECT");
dropDown.setAttribute("id", "gender");
dropDown.setAttribute("id", "gender");
(_c = document.getElementById("card")) === null || _c === void 0 ? void 0 : _c.appendChild(dropDown);
let genderList = ["Select Gender", "Female", "Male"];
for (let i = 0; i < genderList.length; i++) {
    let option = document.createElement("option");
    if (i === 0) {
        option.setAttribute("value", "none");
    }
    else {
        option.setAttribute("value", genderList[i]);
    }
    option.text = genderList[i];
    dropDown.appendChild(option);
}
const dropDown2 = document.createElement("SELECT");
dropDown2.setAttribute("id", "race");
dropDown2.setAttribute("onclick", "changeImg()");
(_d = document.getElementById("card")) === null || _d === void 0 ? void 0 : _d.appendChild(dropDown2);
let raceList = ["Select Race", "Fairy", "Centaur", "Genasi", "Triton"];
for (let index = 0; index < raceList.length; index++) {
    let option = document.createElement("option");
    if (index === 0) {
        option.setAttribute("value", "none");
    }
    else {
        option.setAttribute("value", raceList[index]);
    }
    option.text = raceList[index];
    dropDown2.appendChild(option);
}
const dropDown3 = document.createElement("SELECT");
dropDown3.setAttribute("id", "class");
(_e = document.getElementById("card")) === null || _e === void 0 ? void 0 : _e.appendChild(dropDown3);
let classList = ["Wizard", "Warrior"];
for (let index = 0; index < classList.length; index++) {
    let option = document.createElement("option");
    option.setAttribute("value", classList[index]);
    option.text = classList[index];
    dropDown3.appendChild(option);
}
const characterImage = document.createElement("img");
characterImage.setAttribute("id", "characterImage");
(_f = document.getElementById("pictures")) === null || _f === void 0 ? void 0 : _f.appendChild(characterImage);
const pictures2 = document.createElement("IMG");
pictures2.setAttribute("id", "classImage");
(_g = document.getElementById("card")) === null || _g === void 0 ? void 0 : _g.appendChild(pictures2);
const classSelect = document.getElementById("class");
classSelect === null || classSelect === void 0 ? void 0 : classSelect.addEventListener("change", changeImgClass);
function changeImgClass() {
    const classSelected = document.getElementById("class");
    const classValue = classSelected === null || classSelected === void 0 ? void 0 : classSelected.value;
    const classImage = document.getElementById("classImage");
    if (classValue === "Wizard") {
        classImage === null || classImage === void 0 ? void 0 : classImage.setAttribute("src", "img/wizard.png");
    }
    else if (classValue === "Warrior") {
        classImage === null || classImage === void 0 ? void 0 : classImage.setAttribute("src", "img/warrior.jpg");
    }
    else {
        classImage === null || classImage === void 0 ? void 0 : classImage.setAttribute("src", "");
    }
}
const raceImage = document.getElementById("characterImage");
raceImage === null || raceImage === void 0 ? void 0 : raceImage.setAttribute("src", "img/default.jpg");
const characterGender = document.getElementById("gender");
const characterRace = document.getElementById("race");
characterRace === null || characterRace === void 0 ? void 0 : characterRace.addEventListener("change", characterImgRace);
characterGender === null || characterGender === void 0 ? void 0 : characterGender.addEventListener("change", characterImgRace);
function characterImgRace() {
    const chosenRace = document.getElementById("race");
    const chosenGender = document.getElementById("gender");
    const raceValue = chosenRace === null || chosenRace === void 0 ? void 0 : chosenRace.value;
    const genderValue = chosenGender === null || chosenGender === void 0 ? void 0 : chosenGender.value;
    if (raceValue === "Centaur" && genderValue == "Female")
        raceImage === null || raceImage === void 0 ? void 0 : raceImage.setAttribute("src", "img/centaur_female.jpg");
    if (raceValue === "Centaur" && genderValue == "Male")
        raceImage === null || raceImage === void 0 ? void 0 : raceImage.setAttribute("src", "img/centaur_male.jpg");
    if (raceValue === "Fairy" && genderValue == "Female")
        raceImage === null || raceImage === void 0 ? void 0 : raceImage.setAttribute("src", "img/fairy_female.jpg");
    if (raceValue === "Fairy" && genderValue == "Male")
        raceImage === null || raceImage === void 0 ? void 0 : raceImage.setAttribute("src", "img/fairy_male.jpg");
    if (raceValue === "Triton" && genderValue == "Female")
        raceImage === null || raceImage === void 0 ? void 0 : raceImage.setAttribute("src", "img/triton_female.jpg");
    if (raceValue === "Triton" && genderValue == "Male")
        raceImage === null || raceImage === void 0 ? void 0 : raceImage.setAttribute("src", "img/triton_male.jpg");
    if (raceValue === "Genasi" && genderValue == "Female")
        raceImage === null || raceImage === void 0 ? void 0 : raceImage.setAttribute("src", "img/genasi_female.jpg");
    if (raceValue === "Genasi" && genderValue == "Male")
        raceImage === null || raceImage === void 0 ? void 0 : raceImage.setAttribute("src", "img/genasi_male.jpg");
    if (raceValue === "none" || genderValue == "none")
        raceImage === null || raceImage === void 0 ? void 0 : raceImage.setAttribute("src", "img/default.jpg");
}
