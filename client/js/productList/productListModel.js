import Observable from "../observable.js";

class ProductListModel extends Observable {
  constructor(productInfoList) {
    super();
    this.productInfoList = productInfoList;
    this.saveNumber = '';

    this.selectProductInfo = {
      name: null,
      price: null,
      isActive: null
    };
  }

  getSelectProductInfo({ target }) {
    const buttonTarget = target.closest("button");
    console.log("", buttonTarget);
    const productInfos = buttonTarget.innerText.split("\n");

    this.selectProductInfo.name = buttonTarget.value;
    this.selectProductInfo.price = productInfos[2];
    this.selectProductInfo.isActive = buttonTarget.parentElement.className === "active";

    this.notify(this.selectProductInfo);
  }

  pushButtons(event) {
    const pushBtn = event.target.innerText;
    // const pushNum = this.saveNumber;
    // 예외처리 1) 버튼이 아니면 x
    console.log("pushButton", pushBtn);
    this.saveNumber += pushBtn;
    // 1~20
    // if ()
    // if (this.saveNumber.length > 2) 
    console.log(this.saveNumber);
    

    // ""따옴표 없애주고 문자열+문자열 한 다음에 나중에 숫자로 변경


  }
}

export default ProductListModel;
