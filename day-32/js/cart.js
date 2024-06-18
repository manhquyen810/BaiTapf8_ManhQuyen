var table = document.querySelector("#product_table");
var tbody = document.querySelector("tbody");
var cartData = document.querySelector("#cart_data");

var addProduct = function (num) {
  return `<tr>
          <td>${num}</td>
          <td>Sản phẩm ${num}</td>
          <td>${num}000</td>
          <td>
            <input type="number" style="display: block; margin: 0 auto" value="1" min="1" class="number"/>
            <button class="btn-add" style="width: 100%; height: 30px" data-name="Sản phẩm ${num}" data-price="${num}000">
              Thêm vào giỏ
            </button>
          </td>
        </tr>`;
};

for (var i = 0; i < 4; i++) {
  tbody.innerHTML += addProduct(i + 1);
}

var cart = [];

function updateCartDisplay() {
  var totalPrice = 0;
  var totalQuantity = 0;
  if (cart.length === 0) {
    cartData.innerHTML = "Giỏ hàng không có sản phẩm";
  } else {
    var cartHTML = `
    <table cellpadding="0" cellspacing="0" width="100%" border="1">
        <thead>
          <tr>
            <th width="5%">STT</th>
            <th>Tên sản phẩm</th>
            <th width="18%">Giá</th>
            <th width="18%">Số lượng</th>
            <th width="18%">Thành tiền</th>
            <th width="5%">Xoá</th>
          </tr>
        </thead>
        <tbody>`;
    cart.forEach(function (item, index) {
      var itemPrice = item.quantity * item.price;
      totalPrice += itemPrice;
      totalQuantity += item.quantity;
      cartHTML += ` 
          <tr>
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>
              <input type="number" class="cart-quantity" value="${
                item.quantity
              }" min="1" data-index="${index}" />
            </td>
            <td>${itemPrice}</td>
            <td>
              <button class="btn-remove" data-index="${index}">Xoá</button>
            </td>
          </tr>`;
    });
    cartHTML += `
    </tbody>
        <tfoot>
            <tr>
              <td colspan="3">Tổng</td>
              <td>${totalQuantity}</td>
              <td colspan="2">${totalPrice}</td>
            </tr>
            <tr>
              <td colspan="6">
                <button id="update-cart" class="btn">Cập nhật giỏ hàng</button>
                <button id="clear-cart" class="btn">Xoá giỏ hàng</button>
              </td>
            </tr>
        </tfoot>
    </table>`;

    cartData.innerHTML = cartHTML;

    var btnRemoveList = document.querySelectorAll(".btn-remove");
    var cartQuantityList = document.querySelectorAll(".cart-quantity");
    var updateCartBtn = document.querySelector("#update-cart");
    var clearCartBtn = document.querySelector("#clear-cart");

    btnRemoveList.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var index = this.getAttribute("data-index");
        if (confirm("Are you sure?")) {
          removeFromCart(index);
        }
      });
    });

    updateCartBtn.addEventListener("click", function () {});

    clearCartBtn.addEventListener("click", function () {
      if (confirm("Are you sure?")) {
        clearCart();
      }
    });
  }
}

var addToCart = function (name, price, quantity) {
  var item = cart.find(function (item) {
    return item.name === name;
  });
  if (item) {
    item.quantity += quantity;
  } else {
    cart.push({ name, price, quantity });
  }
  updateCartDisplay();
};

var removeFromCart = function (index) {
  cart.splice(index, 1);
  updateCartDisplay();
};

var updateCartItem = function (index, quantity) {
  cart[index].quantity = quantity;
  updateCartDisplay();
};

var updateCart = function () {};

var clearCart = function () {
  cart = [];
  updateCartDisplay();
};

tbody.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-add")) {
    var button = e.target;
    var name = button.getAttribute("data-name");
    var price = parseInt(button.getAttribute("data-price"));
    var quantityInput = button.previousElementSibling;
    var quantity = parseInt(quantityInput.value);
    addToCart(name, price, quantity);
  }
});

updateCartDisplay();
