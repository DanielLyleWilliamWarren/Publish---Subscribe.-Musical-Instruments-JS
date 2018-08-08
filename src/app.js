const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');
const InstrumentFamiliesInfoView = require('./views/instrument_view.js');


document.addEventListener('DOMContentLoaded', function (){
    const selectElement = document.querySelector('select#instrument-families');
    const familiesDropdown = new SelectView(selectElement);
    familiesDropdown.bindEvents();

    const infoDiv = document.querySelector('div#instrument-info')
    const instrumentFamilyInfoDisplay = new InstrumentFamiliesInfoView(infoDiv);
    instrumentFamilyInfoDisplay.bindEvents();

    const familyDataSource = new InstrumentFamilies();
    familyDataSource.bindEvents(); //Must have data model last.
});
