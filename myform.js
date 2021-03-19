$(function () {
  $(".myForm").submit(handleFormSubmit);
});

function handleFormSubmit(e) {
  if ($("#name").val() <= 5) {
    $("#name").css({ border: "2px solid red;" });
    $("#n").text("Name must be 5 charcaters long");
  } else if ($("#email").val() == 0) {
    $("#email").css({ border: "2px solid red;" });
    $("#e").text("email must be filled");
  } else if ($("#password").val() < 8) {
    $("#password").css({ border: "2px solid red;" });
    $("#P").text("Password should have minimum 8 charcaters");
  } else if ($("#password").val() != $("#confirmPassword").val()) {
    $("#password").css({ border: "2px solid red" });
    $("#CP").text("Password not Matched");
  } else {
    $("#S").text("Form is being submitted");
  }

  e.preventDefault();
}
