const STORE = [
    {
      question: 'Who is the main character of the "Halo" gaming series?',
      answers: [
        'Mario',
        'Master Deaf',
        'Master Chief',
        'Master Chef'
        ],
      correctAnswer: 'Master Chief',
      icon: 'https://banner2.kisspng.com/20180331/eww/kisspng-halo-the-master-chief-collection-halo-2-halo-com-chief-5ac019066bd7a6.7093962715225387584417.jpg',
      alt: 'Master Chief Logo'
    },
    {
      question: 'What is the name of the most popular MMORPG',
      answers: [
        'World of Warcraft',
        'Final Fantasy XIV',
        'Guild Wars 2',
        'The Elder Scrolls Online'
        ],
        correctAnswer: 'World of Warcraft',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/WoW_icon.svg/1024px-WoW_icon.svg.png',
        alt: 'World of Warcraft Icon'
    },
    {
      question: 'What is the most popular fighting game?',
      answers: [
        'Super Smash Bros',
        'Injustice',
        'Mortal Kombat',
        'Cooking Mama'
        ],
        correctAnswer: 'Mortal Kombat',
        icon: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Mortal_Kombat_Logo.svg/1200px-Mortal_Kombat_Logo.svg.png',
        alt: 'Mortal Kombat Icon'
    },
    {
      question: 'What Zombie game has the city "Racoon city"',
      answers: [
        'Left for Dead',
        'Resident Evil',
        'Dying Light',
        'The last of Us'
        ],
      correctAnswer: 'Resident Evil',
      icon: 'http://orig12.deviantart.net/1b18/f/2016/364/6/1/resident_evil_7___biohazard_icon_by_andonovmarko-datgxhs.png',
      alt: 'Resident Evil Icon'
    },
    {
      question: 'What is the most popular Battle Royale Game?',
      answers: [
        'Apex Legends',
        'Black Ops 4',
        'PUBG',
        'Fortnite'
        ],
      correctAnswer: 'Fortnite',
      icon: 'https://discordemoji.com/assets/emoji/fortnite.png',
      alt: 'fortnite icon'
    },
    {
      question: 'what was the first arcade game ever released?',
      answers: [
        'Pong',
        'Spacewar',
        'Moto-Cross',
        'Space Invaders'
        ],
      correctAnswer: 'Spacewar',
      icon: 'https://www.masswerk.at/visuals/insidespacewar200.png',
      alt: 'SpaceShip'
    },
    {
      question: 'What is the most popular arcade game?',
      answers: [
      'Pac-Man',
      'Space Invaders',
      'Donkey Kong',
      'Street Fighter'
      ],
      correctAnswer: 'Space Invaders',
      icon: 'http://forum.curvefever.com/sites/default/files/ideas14Mar/SpaceInvader_0.png',
      alt: 'space invaders icon'
    },
    {
      question: 'Which was the first gaming console?',
      answers: [
        'Playstation',
        'Xbox',
        'N64',
        'Sega',
      ],
      correctAnswer: 'Playstation',
      icon: 'https://cdn3.iconfinder.com/data/icons/flat-icons-web/40/PlayStation-512.png',
      alt: 'Playstation Icon'
    },
    {
      question: 'What is the top selling videogame?',
      answers: [
      'Minecraft',
      'Tetris',
      'GTA 5',
      'Skyrim'
      ],
      correctAnswer: 'Tetris',
      icon: 'https://image.flaticon.com/icons/png/512/806/806099.png',
      alt: 'tetris icon'
    },
    {
      question: 'What is the most popular Gameboy Game',
      answers: [
        'Pokemon',
        'Tetris',
        'The legend of Zelda',
        'Metroid'
    ],
    correctAnswer: 'Tetris',
    icon: 'https://image.flaticon.com/icons/png/512/806/806099.png',
    alt: 'Tetris Icon'
    }
];



let questionNumber = 0;
let score = 0;
function generateQuestion () {
  if (questionNumber < STORE.length) {
    return `<div class="question-${questionNumber}">
    <h2>${STORE[questionNumber].question}</h2>
    <form>
    <fieldset>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[0]}" name="answer" required>
    <span>${STORE[questionNumber].answers[0]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[1]}" name="answer" required>
    <span>${STORE[questionNumber].answers[1]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[2]}" name="answer" required>
    <span>${STORE[questionNumber].answers[2]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[3]}" name="answer" required>
    <span>${STORE[questionNumber].answers[3]}</span>
    </label>
    <button type="submit" class="submitButton">Submit</button>
    </fieldset>
    </form>
    </div>`;
} 

else {
    renderResults();
    restartQuiz();
    $('.questionNumber').text(10)
  }
}


function changeQuestionNumber () {
    questionNumber ++;
  $('.questionNumber').text(questionNumber+1);
}


function changeScore () {
  score ++;
}


function startQuiz () {
  $('.quizStart').on('click', '.startButton', function (event) {
    $('.quizStart').remove();
    $('.questionAnswerForm').css('display', 'block');
    $('.questionNumber').text(1);
});
}

function renderQuestion () {
  $('.questionAnswerForm').html(generateQuestion());
}


function userSelectAnswer () {
  $('form').on('submit', function (event) {
    event.preventDefault();
  
    let selected = $('input:checked');
  
    let answer = selected.val();
    
    let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
    
    if (answer === correctAnswer) {
      selected.parent().addClass('correct');
      ifAnswerIsCorrect();
  
    } else {
      selected.parent().addClass('wrong');
      ifAnswerIsWrong();
    }
  });
}

function ifAnswerIsCorrect () {
  userAnswerFeedbackCorrect();
  updateScore();
}

function ifAnswerIsWrong () {
  userAnswerFeedbackWrong();
}


function userAnswerFeedbackCorrect () {
  let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
  $('.questionAnswerForm').html(`<div class="correctFeedback"><div class="icon"><img src="${STORE[questionNumber].icon}" alt="${STORE[questionNumber].alt}"/></div><p><b>You got it right!</b></p><button type=button class="nextButton">Next</button></div>`);
}


function userAnswerFeedbackWrong () {
  let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
  $('.questionAnswerForm').html(`<div class="correctFeedback"><div class="icon"><img src="${STORE[questionNumber].icon}" alt="${STORE[questionNumber].alt}"/></div><p><b>You got it wrong</b><br>the correct answer is <span>"${correctAnswer}"</span></p><button type=button class="nextButton">Next</button></div>`);
}


function updateScore () {
  changeScore();
  $('.score').text(score);
}

function renderResults () {
  if (score >= 8) {
    $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>Nice work!</h3><img src="https://guernseydonkey.com/wp-content/uploads/2018/12/Thumbs_Up_Skin-Color.png" alt="thumbs up"/><p>You got ${score} / 10</p><p>you know your stuff!</p><button class="restartButton">Restart Quiz</button></div>`);
  } else if (score < 8 && score >= 5) {
    $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>Almost there!</h3><img src="https://t7.rbxcdn.com/5b8f4b84c18e6db29aa5aa170acf1393" alt="whatever emoji icon"/><p>You got ${score} / 10</p><p>you almost got it!</p><button class="restartButton">Restart Quiz</button></div>`);
  } else {
    $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>You might want to play some videogames</h3><img src="https://i0.kym-cdn.com/photos/images/facebook/001/193/394/01c.jpg" alt="squidward dabbing"/><p>You got ${score} / 10</p><p>Just go play a few games!</p><button class="restartButton">Restart Quiz</button></div>`);
  }
}


function renderNextQuestion () {
  $('main').on('click', '.nextButton', function (event) {
    changeQuestionNumber();
    renderQuestion();
    userSelectAnswer();
  });
}


function restartQuiz () {
  $('main').on('click', '.restartButton', function (event) {
    location.reload();
  });
}


function createQuiz () {
  startQuiz();
  renderQuestion();
  userSelectAnswer();
  renderNextQuestion();
}

$(createQuiz);
