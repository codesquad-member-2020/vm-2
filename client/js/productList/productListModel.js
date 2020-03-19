import Observable from "../observable.js";

class ProductListModel extends Observable {
  constructor(productInfoList) {
    super();
    this.productInfoList = productInfoList;

    this.selectProductInfo = {
      name: null,
      price: null,
      isActive: null
    };
  }

  getSelectProductInfo(buttonTarget, number) {
    this.selectProductInfo.name = buttonTarget.value;
    this.selectProductInfo.price = number;
    this.selectProductInfo.isActive = buttonTarget.parentElement.className === "active";
    this.notify(this.selectProductInfo);
  }

  selectProduct(buttonTarget) {
    const productInfos = buttonTarget.innerText.split("\n");

    this.getSelectProductInfo(buttonTarget, productInfos[2]);
  }

  selectNumber({ target }) {
    const getSelectNumber = target.innerText;
    const numberWindow = document.querySelector(".show-select-number");
    let selectProductNumber = "";

    if (getSelectNumber === "입력") {
      const productList = document.querySelectorAll(".product > li > button");
      this.selectProduct(productList[Number(numberWindow.innerText) - 1]);
      numberWindow.innerHTML = "";
    } else if (getSelectNumber === "취소") {
      selectProductNumber = "";
      numberWindow.innerHTML = selectProductNumber;
    } else {
      selectProductNumber += getSelectNumber;
      numberWindow.innerHTML += selectProductNumber;
    }
  }
}

export default ProductListModel;
