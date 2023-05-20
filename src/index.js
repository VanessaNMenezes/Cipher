import cipher from "./cipher.js";

const encryptButton = document.getElementById("encrypt");
encryptButton.addEventListener("click", function () {
  const originalMessage = document.getElementById("message").value;
  const offSet = document.getElementById("displacement").value;
  if (offSet !== "") {
    const encryptedMessage = cipher.encode(parseInt(offSet), originalMessage);
    document.getElementById("result").value = encryptedMessage;
  } else if (originalMessage === "" ) {
    alert("Por favor, insira uma mensagem para criptografar!");
  } else {
    alert("Por favor, escolha um número para a chave secreta!");
  }
});

const decryptButton = document.getElementById("decrypt");
decryptButton.addEventListener("click", function () {
  const originalMessage = document.getElementById("message").value;
  const offSet = document.getElementById("displacement").value;
  if (offSet !== "") {
    const decryptedMessage = cipher.decode(parseInt(offSet), originalMessage);
    document.getElementById("result").value = decryptedMessage;
  } else if (originalMessage === "" ) {
    alert("Por favor, insira uma mensagem para descriptografar!");
  } else {
    alert("Por favor, escolha um número para a chave secreta!");
  }
});

const clean = () => {
    
  document.getElementById("result").innerHTML = "";
  document.querySelector("#message").value = "";
  document.querySelector("#displacement").value = "";
  
}
document.getElementById("clean").addEventListener("click", clean);