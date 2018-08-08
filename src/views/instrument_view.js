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

InstrumentFamiliesInfoView.prototype.render = function (family) {
  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = `${family.description} `;
  this.container.innerHTML = '';
  this.container.appendChild(infoParagraph);
};

InstrumentFamiliesInfoView.prototype.populteListOfInstruments = function (instrument) {
  listOfInstruments = document.createElement('ol');
  instrumentHeading = document.createElement('h1');
  listOfInstruments.textContent = instrument.name;


  instrument.instruments.forEach(information => {
    const listItem = document.createElement('li');
    listItem.textContent = information;
    listOfInstruments.appendChild(listItem);
  })
};


module.exports = InstrumentFamiliesInfoView;
