const xhr = new XMLHttpRequest();
const pollAnswers = document.getElementById('poll__answers');
const pollTitle = document.getElementById('poll__title')

xhr.responseType = 'json';
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        const response = xhr.response;
        pollTitle.insertAdjacentText('afterbegin', `${response.data.title}`)

      if (response.data.answers.length == 3) {
        pollAnswers.insertAdjacentHTML('afterbegin', `<button class="poll__answer">
        ${response.data.answers[0]}
      </button>
      <button class="poll__answer">
      ${response.data.answers[1]}
      </button>
      <button class="poll__answer">
      ${response.data.answers[2]}
      </button>`)
      }
      else if (response.data.answers.length == 2) {
        pollAnswers.insertAdjacentHTML('afterbegin', `<button class="poll__answer">
        ${response.data.answers[0]}
      </button>
      <button class="poll__answer">
      ${response.data.answers[1]}
      </button>`)
      } else if (response.data.answers.length == 4) {
        pollAnswers.insertAdjacentHTML('afterbegin', `<button class="poll__answer">
        ${response.data.answers[0]}
      </button>
      <button class="poll__answer">
      ${response.data.answers[1]}
      </button>
      <button class="poll__answer">
      ${response.data.answers[2]}
      </button>
      <button class="poll__answer">
      ${response.data.answers[3]}
      </button>`)
      } else if (response.data.answers.length == 5) {
        pollAnswers.insertAdjacentHTML('afterbegin', `<button class="poll__answer">
        ${response.data.answers[0]}
      </button>
      <button class="poll__answer">
      ${response.data.answers[1]}
      </button>
      <button class="poll__answer">
      ${response.data.answers[2]}
      </button>
      <button class="poll__answer">
      ${response.data.answers[3]}
      </button>
      <button class="poll__answer">
      ${response.data.answers[4]}
      </button>`)
      }
    }
});

function callAnAlert(event) {
    if (event.target.closest('.poll__answers')) {
        alert('Спасибо, ваш голос засчитан!');
    }
    
}

pollAnswers.addEventListener('click', callAnAlert)

