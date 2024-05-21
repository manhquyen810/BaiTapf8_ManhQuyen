//ex01
console.log("Bài 1: ");
var errors = {
  name: {
    required: "Vui lòng nhập họ tên",
    min: "Họ tên phải từ 5 ký tự",
  },
  email: {
    email: "Định dạng email không hợp lệ",
    unique: "Email đã có người sử dụng",
    required: "Vui lòng nhập địa chỉ email",
  },
  password: {
    required: "Vui lòng nhập mật khẩu",
    same: "Mật khẩu phải khớp với mật khẩu nhập lại",
  },
};

function getError(field) {
  var fields = field.split(".");
  var error = errors[fields[0]];

  if (fields.length === 2) {
    return error[fields[1]];
  }

  if (error) {
    if (error.required) {
      return error.required;
    }

    for (var key in error) {
      return error[key];
    }
  }
}
console.log(getError("email"));
console.log(getError("email.email"));

//ex02
console.log("\nBài 2: ");
const customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];
function getCustomers(name, age, address) {
  return { name, age, address };
}

function createCustomers(customers) {
  var newCustomers = customers.map(function (customer) {
    var newCustomer = getCustomers(
      customer.name,
      customer.age,
      customer.address
    );
    var cutName = customer.name.split(" ");
    newCustomer.shortName = cutName.slice(0, 1) + " " + cutName.slice(-1);
    return newCustomer;
  });
  newCustomers.sort(function (a, b) {
    if (a.age < b.age) {
      return -1;
    }
  });
  return newCustomers;
}

const result = createCustomers(customers);
console.log(result);

//ex03
