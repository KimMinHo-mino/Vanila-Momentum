const quotes = [
    { quote: "Actions speak louder than words.", author: "Mark Twain" },
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "Don't count your chickens before they hatch.", author: "Aesop" },
    { quote: "All that glitters is not gold.", author: "William Shakespeare" },
    { quote: "Every cloud has a silver lining.", author: "John Milton" },
    { quote: "The early bird catches the worm.", author: "English Proverb" },
    { quote: "Two heads are better than one.", author: "John Heywood" },
    { quote: "Don't put all your eggs in one basket.", author: "Miguel de Cervantes" },
    { quote: "Haste makes waste.", author: "John Ray" },
    { quote: "Patience is a virtue.", author: "Geoffrey Chaucer" }
  ];


  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");

  const length = quotes.length;
  const random = Math.floor(Math.random() * length);
  const todaysQuote = quotes[Math.floor(random)];

  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;

  // Math.random이 0~1까지의 값을 만들어주고 그 값에 10을 곱하고 내림해주면 0부터 9까지의 값이 나온다.