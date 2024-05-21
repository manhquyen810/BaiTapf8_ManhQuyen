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

//ex03
