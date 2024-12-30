const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correct: 2, // Index of the correct answer
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correct: 2,
    },
    {
      question: "Who wrote 'Hamlet'?",
      options: ["Charles Dickens", "J.K. Rowling", "William Shakespeare", "Mark Twain"],
      correct: 2,
    },
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionText = document.getElementById("question-text");
  const optionsContainer = document.getElementById("options-container");
  const nextButton = document.getElementById("next-button");
  const resultContainer = document.getElementById("result-container");
  
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
  
    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.className = "option-button";
      button.onclick = () => checkAnswer(index);
      optionsContainer.appendChild(button);
    });
  }
  
  function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const buttons = document.querySelectorAll(".option-button");
  
    if (selectedIndex === currentQuestion.correct) {
      score++;
      buttons[selectedIndex].style.backgroundColor = "green";
    } else {
      buttons[selectedIndex].style.backgroundColor = "red";
      buttons[currentQuestion.correct].style.backgroundColor = "green";
    }
  
    // Disable all buttons after selection
    buttons.forEach((button) => (button.disabled = true));
    nextButton.style.display = "block";
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
      nextButton.style.display = "none";
    } else {
      showResults();
    }
  }
  
  function showResults() {
    questionText.style.display = "none";
    optionsContainer.style.display = "none";
    nextButton.style.display = "none";
  
    resultContainer.innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>Your Score: ${score} / ${questions.length}</p>
    `;
  }
  
  // Initialize the quiz
  loadQuestion();
  nextButton.style.display = "none";
  
