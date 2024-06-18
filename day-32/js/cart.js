var table = document.querySelector("#product_table");
var tbody = document.querySelector("tbody");

var product = "Sản phẩm ";

var addProduct = function (num) {
  return `<tr>
          <td>${num}</td>
          <td>Sản phẩm ${num}</td>
          <td>${num}000</td>
          <td>
            <input type="number" style="display: block; margin: 0 auto" value="1" class="number"/>
            <button class="btn-add" style="width: 100%; height: 30px">
              Thêm vào giỏ
            </button>
          </td>
        </tr>`;
};

for (var i = 0; i < 4; i++) {
  tbody.innerHTML += addProduct(i + 1);
}
