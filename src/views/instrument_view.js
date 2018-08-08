const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamiliesInfoView = function(container){
  this.container = container;
};


InstrumentFamiliesInfoView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:selected-family-ready', (evt) =>{
    const family = evt.detail;
    this.render(family);
  });
};

// InstrumentFamiliesInfoView.prototype.render = function (family) {
//   const infoParagraph = document.createElement('p');
//   infoParagraph.textContent = `${family.description} `;
//   this.container.innerHTML = '';
//   this.container.appendChild(infoParagraph);
// };
//
// InstrumentFamiliesInfoView.prototype.populteListOfInstruments = function (instuments) {
// const  listOfInstruments = document.createElement('ul');
//   instrument.instruments.forEach(information => {
//     const listItem = this.createElement('li', family.instruments);
//     listItem.textContent = information;
//     this.container.appendChild(listItem);
//     this.container.appendChild(instrumentHeading);
//
//   })
// };

InstrumentFamiliesInfoView.prototype.render = function (family) {
  this.container.innerHTML = '';

  const familyName = this.createElement('h2', family.name);
  this.container.appendChild(familyName);

  const familyDescription = this.createElement('p', family.description);
  this.container.appendChild(familyDescription);

  const instrumentListTitle = this.createElement('h3', 'Instruments include:');
  this.container.appendChild(instrumentListTitle);

  const instrumentList = this.createInstrumentList(family.instruments);
  this.container.appendChild(instrumentList);
};

InstrumentFamiliesInfoView.prototype.createElement = function (elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element;
};

InstrumentFamiliesInfoView.prototype.createInstrumentList = function (instruments) {
  const list = document.createElement('ul');

  instruments.forEach((instrument) => {
    const listItem = document.createElement('li');
    listItem.textContent = instrument;
    list.appendChild(listItem);
  });

  return list;
};


module.exports = InstrumentFamiliesInfoView;
