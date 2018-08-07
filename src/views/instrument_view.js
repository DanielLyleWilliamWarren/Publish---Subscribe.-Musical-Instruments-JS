const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamiliesInfoView = function(container){
  this.container = container;
};


InstrumentFamiliesInfoView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:selected-family-ready', (evt) =>{
    const family = evt.detail;
    this.render(family)
  });
};

nimalInfoView.prototype.render = function(animal){
  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = `The ${animal.species}, of class '${animal.class}', has a maximum speed of ${animal.maxSpeed} km/h.`;
  this.container.innerHTML = '';
  this.container.appendChild(infoParagraph);
};
