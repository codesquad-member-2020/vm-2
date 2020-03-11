const JSON_FILE_URL = ".././../../server/vmData.json";

fetch(JSON_FILE_URL)
  .then(response => response.json())
  .then(data => render(data));

const render = data => {
  const wrap = `
    <div class="wrap">
      ${addProductList(data.productInfoList)}
      ${addProductSelect()}
      ${addWallet(data.currencyList, data.totalAmount)}
    </div>`;
  const body = document.querySelector("body");

  body.innerHTML = wrap;
};

const addProductList = list => {
  const productListView = `
  <div class="product-view">
    <ul class="product">
      ${productList(list)}
    </ul>
  </div>
  `;

  return productListView;
};

const productList = list => {
  let li = ``;

  list.forEach(productInfo => {
    const { productIndex, productImg, productName, productPrice } = productInfo;

    li += `
    <li>
    <button>
      <div class="product-image"><span>${productIndex}</span>${productImg}</div>
      <div class="product-content">
        <span>${productPrice}</span>
      </div>
    </button>
    </li>`;
  });

  return li;
};

const addProductSelect = () => {
  let buttons = ``;
  const indexArray = Array.from({ length: 9 }, (v, k) => k + 1);
  indexArray.forEach(el => (buttons += `<li><button>${el}</button></li>`));

  const productSelect = `
  <div class="product-select">
  <div class="input-amount"></div>
  <div class="select-number">
  <ul>
    ${buttons}
    <li class="select-button"><button>취소</button></li>
    <li><button>0</button></li>
    <li class="select-button"><button>입력</button></li>
  </ul>
  </div>
  <div class="message-window">
          <ol>
            <li>sample</li>
          </ol>
        </div>
  </div>`;

  return productSelect;
};

const addWallet = (currency, amount) => {
  let moneyWrap = ``;
  currency.forEach(el => {
    moneyWrap += `<div class="money-unit"><button>${el}</button><span>0</span></div>`;
  });

  const wallet = `
  <div class="wallet">
    <div class="money-wrap">
      ${moneyWrap}
    </div>
    <div class="total-money">${amount}</div>
  </div>`;

  return wallet;
};
