const alphabet = "abcdefghijklmnopqrstuvwxyz";

function encode(offset, message) {
  if (typeof offset !== "number" || typeof message !== "string") {
    throw new TypeError("Por favor, insira a chave secreta e uma mensagem!");
  }
  let encryptedMessage = "";
  const offsetNumber = parseInt(offset);
  const alphabetMajuscule = alphabet.toUpperCase();
  for (let i = 0; i < message.length; i++) {
    const msg = message[i];
    if (/[a-zA-Z]/.test(msg)) {
      const originalPositionNumber = msg === msg.toUpperCase() ? alphabetMajuscule.indexOf(msg) : alphabet.indexOf(msg);
      const newPositionLetter = (originalPositionNumber + offsetNumber + alphabet.length) % alphabet.length;
      encryptedMessage += msg === msg.toUpperCase() ? alphabetMajuscule[newPositionLetter] : alphabet[newPositionLetter];
    } else {
      encryptedMessage += msg;
    }
  }
  return encryptedMessage;
}

function decode(offset, message) {
  if (typeof offset !== "number" || typeof message !== "string") {
    throw new TypeError("Por favor, insira a chave secreta e uma mensagem!");
  }
  let decryptedMessage= "";
  const offsetNumber = parseInt(offset);
  const alphabetMajuscule = alphabet.toUpperCase();
  for (let i = 0; i < message.length; i++) {
    const msg = message[i];
    if (/[a-zA-Z]/.test(msg)) {
      const originalPositionNumber = msg === msg.toUpperCase() ? alphabetMajuscule.indexOf(msg) : alphabet.indexOf(msg);
      const newPositionLetter = (originalPositionNumber - (offsetNumber % alphabet.length) + alphabet.length) % alphabet.length;
      decryptedMessage+= msg === msg.toUpperCase() ? alphabetMajuscule[newPositionLetter] : alphabet[newPositionLetter];
    } else {
      decryptedMessage+= msg;
    }
  }
  return decryptedMessage;
}

const cipher = {
  encode,
  decode
};

export default cipher;