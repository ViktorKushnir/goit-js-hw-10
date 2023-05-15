const URL = 'https://restcountries.com/v3.1/name/';
const searchParams = new URLSearchParams({
  fields: ['name', 'capital ', 'population ', 'flags', 'languages '],
});

export const fetchCountries = countryName =>
  fetch(`${URL}${countryName}?${searchParams}`)
  .then(Response=>{
    if(!Response.ok){
        throw new Error(Response.status);
    }
    return Response.json()
  })
