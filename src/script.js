document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("newsletter-form");
  const emailInput = form.querySelector("input[type=email]");
  const successMessage = document.getElementById("success-message");
  const errorMessage = document.getElementById("error-message");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    const email = emailInput.value;
    if (validateEmail(email)) {
      successMessage.style.display = "block";
      errorMessage.style.display = "none";
      successMessage.textContent = "Obrigado! O Formulário foi enviado =)";
      // Aqui você pode adicionar o código para enviar o formulário para o servidor, se necessário
    } else {
      errorMessage.style.display = "block";
      successMessage.style.display = "none";
      errorMessage.textContent = "Por favor, insira um e-mail válido.";
    }
  });

  function validateEmail(email) {
    // Expressão regular para validar o formato do e-mail
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
});
