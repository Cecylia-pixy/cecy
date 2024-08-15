const quizData= [
    {
    question: 'In what country did the first Starbucks open outside of North America?',
    options: ['North Korea', 'Turkey', 'Japan'],
    answer: 'Japan',
    },
    {
    question:'In a website browser address bar, what does "www" stand for?',
    options: ['Wireless Word Web', 'World Wide Wed','World Wide Web'],
    answer: 'World Wide Web'
    },
    {
    question:'Who wrote the play "Romeo and Julliet"?',
    options: ['Pablo Picasso', 'Leonardo Da Vinci','Wiliam Shakespeare'],
    answer: 'Wiliam Shakespeare'	
    },
    {
    question:'Who painted the Mona Lisa'?
    options: ['Pablo Picasso', 'Leonardo Da Vinci','Wiliam Shakespeare'],
    answer: 'Leonardo Da Vinci'	
    },
    ];
    
    
    const quizContainer= document.getElementById('quiz');
    const resultContainer= document.getElementById('result');
    const submitButton= document.getElementById('submit');
    const retryButton= document.getElementById('retry');
    const showAnswerButton= document.getElementById('showAnswer');
    
    let currentQuestion = 0;
    let score = 0;
    let incorrectAnswers = [];
    
    
    function shuffleArray(array) {
     for (let i = array.length - 1; i>0; i--)  {
    const j= Math.floor (Math.random() * (i + 1) );
    [array[i], array[j]] = [array[j], array[i]];
     }
    }
    
    function displayQuestion()  {
    const questionData = quizData[currentQuestion];
    
    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = questionData.question;
    
    
    const optionsElement = document.createElement('div');
    optionsElement.className = 'options';
    
    const shuffledOptions = [...questionData.options];
    shuffleArray(shuffledOptions);
    
    for (let i =0; i<shuffledOptions.length; i++)  {
        const option = document.createElement('label');
        option.className = 'option';
    
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'Trivia';
        radio.value = shuffledOptions[i];
    
        const optionText = document.createTextNode(shuffledOptions[i]);
    
        option.appenchild(radio);
        option.appenchild(optionText);
        optionsElement.appenchild(option);
    }
    
    quizContainer.innerHTML = '';
    quizContainer.appenchild(optionsElement);
    }
        
    function checkAnswer()   {
    const selectedOption = document.querySelecttor('input[name="Trivia"]:checked');
    if (selectedOption)   {
    const answer = selectedOption.value;
    if (answer === quizData[currentQuestion].answer)  {
        score++;
    }    else  {
        incorrectAnswers.push({
       question: quizData[currentQuestion].question,
       incorrectAnswer: answer,
       correctAnswer: quizData[currentQuestion].answer,
    })
    
    }
    currentQuestion++;
    selectedOption.checked = false;
    if (currentQuestion < quizData.length)  {
        displayQuestion();
    }  else  {
        displayResult();
    }
           }
       }
    
    function displayResult()   {
     currentQuestion = 0;
     score = 0;
     incorrectAnswers = [];
     quizContainer.style.display = 'block';
     submitButton.style.display = 'inline-block';
     retryButton.style.display = 'none';
    showAnswerButton.style.display = 'none';
    resultContainer.innerHTML = '';
    displayQuestion();
    }
    
    function showAnswer()  {
        quizContainer.style.display = 'none';
        submitButton.style.display = 'none';
        retryButton.style.display = 'inline-block';
        showAnswerButton.style.display = 'none';
    
    
        let incorrectAnswersHtml = '';
        for (let i = 0; i < incorrectAnswers.length; length; i++) {
            incorrectAnswersHtml +=
            <p>
            <strong>Question:</strong>  $(incorrectAnswers[i.]question}<br>
            <strong>Your Answer:</strong>  $(incorrectAnswers[i.]incorrectAnswer}<br>
            <strong>correctAnswer:</strong>  $(incorrectAnswer[i].correctAnswer}
            </p>
            ';
        }
    
    
        submitButton.addEventListener('click', checkAnswer);
        retryButton.addEventListener('click',retryQuiz);
        showAnswerButton.addEventListener('click', showAnswer);
    
        displayQuestion()
    
    
    
    
    
    
    
    
    
    
    