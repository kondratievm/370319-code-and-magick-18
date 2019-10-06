'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var WIZARDS_COUNT = 4;
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var getRandomInt = function (max) {
  return Math.floor(Math.random() * Math.floor(max));
};

var createWizards = function (count) {
  var wizards = [];
  for (var i = 0; i < count; i++) {
    var wizardsObject = {};
    wizardsObject.name = WIZARD_NAMES[getRandomInt(WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAMES[getRandomInt(WIZARD_SURNAMES.length)];
    wizardsObject.coatColor = COAT_COLORS[getRandomInt(COAT_COLORS.length)];
    wizardsObject.eyesColor = EYES_COLORS[getRandomInt(EYES_COLORS.length)];
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

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
var inputUserName = document.querySelector('.setup-user-name');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

inputUserName.addEventListener('focus', function () {
  document.removeEventListener('keydown', onPopupEscPress);
});

inputUserName.addEventListener('blur', function () {
  document.addEventListener('keydown', onPopupEscPress);
});

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

var wizardCoatColor = document.querySelector('.wizard-coat');
var wizardEyeColor = document.querySelector('.wizard-eyes');
var wizardFireballColor = document.querySelector('.setup-fireball-wrap');

var changeCoatColor = function () {
  wizardCoatColor.style.fill = COAT_COLORS[getRandomInt(COAT_COLORS.length)];
};

wizardCoatColor.addEventListener('click', function () {
  changeCoatColor();
});

var changeEyeColor = function () {
  wizardEyeColor.style.fill = EYES_COLORS[getRandomInt(EYES_COLORS.length)];
};

wizardEyeColor.addEventListener('click', function () {
  changeEyeColor();
});

var changeFireballColor = function () {
  wizardFireballColor.style.background = FIREBALL_COLORS[getRandomInt(FIREBALL_COLORS.length)];
};

wizardFireballColor.addEventListener('click', function () {
  changeFireballColor();
});
