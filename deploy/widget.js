const lastSection = document.querySelector('.section:last-child');
const activeProduct = document.querySelector('.active');
const productPrice = activeProduct.getAttribute('data-price');
const priceInCents = productPrice.replace( /[^ 0-9.]/g, '');

fetchData(priceInCents);

function fetchData(value) {
  const url = `http://localhost:8080/credit_agreements?totalWithTax= ${value }`;
  
  fetch(url, {
    mode: 'cors'
  })
  .then(response => {
    return response.text();
  })
  .then(text => {
    const dataArray = JSON.parse(text);
    createNewSection(dataArray);
  })
  .catch(error => {
    console.log( '!error!', error);
    // do more things here eventually
  });
}

function createNewSection(instalments) {
  const items = ['<select class="widget-select">','</select>'];

  instalments. map((p, i) => items.splice(i + 1, 0,
  `<option value=${p.instalment_count}>${p.instalment_count} cuotas de ${p.instalment_total.string}/mes</option>`)
  );

  const select = items.join('');

  lastSection.insertAdjacentHTML('beforeend', select);
  // more things to be added here, like "More info" link and the modal itself
}