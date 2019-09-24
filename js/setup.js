'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var WIZARDS_COUNT = 4;
var wizardName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurname = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomInt = function (max) {
  return Math.floor(Math.random() * Math.floor(max));
};

var createWizards = function (count) {
  var wizards = [];
  for (var i = 0; i < count; i++) {
    var wizardsObject = {};
    wizardsObject.name = wizardName[getRandomInt(wizardName.length)] + ' ' + wizardSurname[getRandomInt(wizardSurname.length)];
    wizardsObject.coatColor = coatColors[getRandomInt(coatColors.length)];
    wizardsObject.eyesColor = eyesColors[getRandomInt(eyesColors.length)];
    wizards[i] = wizardsObject;
  }
  return wizards;
};

var renderElement = function (wizardElement, element) {
  wizardElement.querySelector('.setup-similar-label').textContent = element.name;
  wizardElement.querySelector('.wizard-coat').style.fill = element.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = element.eyesColor;
};

var renderElements = function (array) {
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < array.length; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    renderElement(wizardElement, array[i]);
    fragment.appendChild(wizardElement);
  }
  similarListElement.appendChild(fragment);
};

renderElements(createWizards(WIZARDS_COUNT));
