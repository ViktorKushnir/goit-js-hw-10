export function renderMurkup(data) {
  const languages = Object.values(data[0].languages).join(', ');

  return data
    .map(({ capital, flags, name, population }) => {
      return `<div class="country-info__wrapper">
                      <img src="${flags.svg}" alt="Country flag" width="40" height="30" class="country-info__flag" />
                      <p class="country-info__name">${name.official}</p>
                  </div>
                  <p class="country-info__capital"><b>Capital:</b> ${capital}</p>
                  <p class="country-info__population"><b>Population:</b> ${population}</p>
                  <p class="languages"><b>Languages:</b> ${languages}</p>`;
    })
    .join('');
}

export function renderMultipleMurkup(data) {
  return data
    .map(({ flags, name }) => {
      return `<li class="country-list__item">
                      <img src="${flags.svg}" alt="Country flag" width="40" height="30" class="country-list__flag">
                      <p class="country-list__name">${name.official}</p>
                  </li>`;
    })
    .join('');
}
export default { renderMurkup, renderMultipleMurkup };
