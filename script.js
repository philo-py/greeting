window.addEventListener('DOMContentLoaded', () => {
  const greetBtn = document.querySelector('#greetBtn');
  const nameInput = document.querySelector('#nameInput');
  const greetingMsg = document.querySelector('#greetingMsg');

  greetBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();

    if (name === '') {
      greetingMsg.textContent = '名前を入力してください。';
    } else {
      greetingMsg.textContent = `こんにちは、${name}さん！`;
    }
  });
});