// Generate a key

// Plain text information to demo

const { strictEqual } = require("assert");
const crypto = require("crypto");
const { text } = require("stream/consumers");

// Function to encrypt a message using AES-128-CBC
function aesEncrypt(text, secretKey) {
  // Your implementation here
  //generate iv 
  //console.log("before encryt plain text:" + text);
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv("aes-128-cbc", secretKey, iv);

  const encryptedMessage = cipher.update(text, "utf-8", "hex") + cipher.final("hex");

  return { encryptedMessage, iv: iv.toString("hex") };
}

// Function to decrypt a message using AES-128-CBC
function aesDecrypt(encryptedMessage, secretKey, ivHex) {
  // Your implementation here
  const iv = Buffer.from(ivHex, "hex");
  const decipher = crypto.createDecipheriv("aes-128-cbc", secretKey, iv);
  const decryptedMessage = decipher.update(encryptedMessage, "hex", "utf8") + decipher.final("utf8");
  return decryptedMessage;
}

// Test your functions
const secretKey = Buffer.from("mysecretkey12345"); // 16-byte key (128-bit)
//const textToEncrypt = "This is a secret message!";
const textToEncrypt = process.argv[2];
// if(textToEncrypt){

// }

// Encrypt the message
const { encryptedMessage, iv } = aesEncrypt(textToEncrypt, secretKey);
console.log("Encrypted Message:", encryptedMessage);
console.log("IV:", iv);

// Decrypt the message
const decryptedMessage = aesDecrypt(encryptedMessage, secretKey, iv);
console.log("Decrypted Message:", decryptedMessage);
