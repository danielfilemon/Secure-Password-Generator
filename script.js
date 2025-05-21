const lengthInput = document.getElementById('length');
const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const generateBtn = document.getElementById('generate');
const passwordInput = document.getElementById('password');
const copyBtn = document.getElementById('copy');

function generatePassword() {
  const length = parseInt(lengthInput.value);
  const charset = [];

  if (uppercase.checked) charset.push(...'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  if (lowercase.checked) charset.push(...'abcdefghijklmnopqrstuvwxyz');
  if (numbers.checked) charset.push(...'0123456789');
  if (symbols.checked) charset.push(...'!@#$%^&*()_+-=[]{};:,.<>?');

  if (charset.length === 0) return alert('Please select at least one option.');

  let password = '';
  for (let i = 0; i < length; i++) {
    password += charset[Math.floor(Math.random() * charset.length)];
  }

  passwordInput.value = password;
}

generateBtn.addEventListener('click', generatePassword);

copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(passwordInput.value)
    .then(() => alert('Password copied to clipboard!'))
    .catch(() => alert('Failed to copy.'));
});
