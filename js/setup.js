'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var WIZARDS = [];
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAME = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var createWizards = function (WIZARDS_COUNT) {
  for (var i = 0; i < WIZARDS_COUNT; i++) {
    var WIZARDS_OBJECT = {};
    WIZARDS_OBJECT.name = WIZARD_NAMES[getRandomInt(WIZARD_NAMES.length)] + WIZARD_SURNAME[getRandomInt(WIZARD_SURNAME.length)];
    WIZARDS_OBJECT.coatColor = COAT_COLOR[getRandomInt(COAT_COLOR.length)];
    WIZARDS_OBJECT.eyesColor = EYES_COLOR[getRandomInt(EYES_COLOR.length)];
    WIZARDS[i] = WIZARDS_OBJECT;
  }
};

createWizards(4);

var renderElement = function (array) {
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  for (var i = 0; i < array.length; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = array[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = array[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = array[i].eyesColor;
    similarListElement.appendChild(wizardElement);
  }
};

renderElement(WIZARDS);
