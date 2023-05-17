import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { renderMurkup, renderMultipleMurkup } from './renderMurkup';

const DEBOUNCE_DELAY = 300;

const searchBoxEl = document.querySelector('input#search-box');
const countryListEl = document.querySelector('ul.country-list');
const countryInfoEl = document.querySelector('div.country-info');

searchBoxEl.addEventListener(
  'input',
  debounce(handleSearchBoxInput, DEBOUNCE_DELAY)
);

function handleSearchBoxInput(event) {
  let countryName = event.target.value.trim();

  if (!countryName) {
    clearInterface();
    return;
  }

  fetchCountries(countryName)
    .then(data => {
      if (data.length === 1) {
        clearInterface();
        countryInfoEl.innerHTML = renderMurkup(data);
      } else if (data.length > 1 && data.length <= 10) {
        clearInterface();
        countryListEl.innerHTML = renderMultipleMurkup(data);
      } else {
        clearInterface();
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      }
    })
    .catch(error => {
      clearInterface();
      Notify.failure('Oops, there is no country with that name');
    });
}

function clearInterface() {
  countryListEl.innerHTML = '';
  countryInfoEl.innerHTML = '';
}
