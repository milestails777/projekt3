
const questions = [
  {
    category: "Programmerimine",
    questions: [
      {
        question: "What does HTML stand for?",
        options: ["HyperText Markdown Language", "HyperText Markup Language", "HighText Machine Language"],
        correctAnswer: 1,
      },
      {
        question: "In which language would you most likely use the command print(''Hello, world!'')?",
        options: ["C++", "Python", "Java", "SQL"],
        correctAnswer: 1,
      },
      {
        question: "Which programming language is primarily used for developing Android mobile applications?",
        options: ["Python", "Java", "Swift"],
        correctAnswer: 1,
      },
      {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets", "Cascading Simple Sheets"],
        correctAnswer: 0,
      },
      {
        question: "In JavaScript, how do you create a function?",
        options: ["create function myFunction()", "def function myFunction()", "func myFunction()", "function myFunction()"],
        correctAnswer: 3,
      },
      {
        question: "What does the 'typeof' operator do in JavaScript?",
        options: ["Checks the type of a variable", "Declares a variable", "Assigns a value to a variable", "Converts a variable to another type"],
        correctAnswer: 0,
      },
      {
        question: "In C, how do you define a function?",
        options: ["function myFunction()", "def myFunction()", "void myFunction()", "func myFunction()"],
        correctAnswer: 2,
      },
      {
        question: "Which of the following is a characteristic of Python?",
        options: ["Compiled language", "Dynamic typing", "Low-level language", "Static typing"],
        correctAnswer: 3,
      },
      {
        question: "Which language is used for Android development?",
        options: ["Python", "Java", "JavaScript", "C++"],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of the 'forEach()' method in JavaScript?",
        options: ["Removes duplicate elements from an array", "Filters elements in an array", "Sorts an array", "Iterates through each element in an array"],
        correctAnswer: 3,
      },
      {
        question: "What does the 'return' keyword do in a function?",
        options: ["Ends the function and returns a value", "Continues the function", "Exits the function without value", "Ends the program execution"],
        correctAnswer: 0,
      },
      {
        question: "Which of the following is NOT a semantic HTML element?",
        options: ["<header>", "<footer>", "<div>", "<article>"],
        correctAnswer: 2,
      },
      {
        question: "What is the primary purpose of a 'for' loop in programming?",
        options: ["Repeat code for a specified number of times", "Repeat code until a condition is true", "Define a function", "Evaluate conditions in the loop"],
        correctAnswer: 0,
      },
      {
        question: "Which data structure is ideal for LIFO (Last In First Out)?",
        options: ["Queue", "Stack", "Linked list", "Array"],
        correctAnswer: 1,
      },
      {
        question: "Which command is used in Git to store changes in the repository?",
        options: ["git commit", "git push", "git pull", "git add"],
        correctAnswer: 0,
      },
      {
        question: "What does the 'map()' function do in JavaScript?",
        options: ["Sorts an array", "Filters out items", "Creates a new array", "Modifies the original array"],
        correctAnswer: 2,
      },
      {
        question: "What is an IDE?",
        options: ["An Integrated Development Environment", "A function for code execution", "An interpreter", "An input method for writing code"],
        correctAnswer: 0,
      },
      {
        question: "Which of the following is a feature of object-oriented programming?",
        options: ["Encapsulation", "Modularity", "Recursion", "Memory Management"],
        correctAnswer: 0,
      },
      {
        question: "What does SQL stand for?",
        options: ["Simple Question Language", "Systematic Query Language", "Standard Question Language", "Structured Query Language"],
        correctAnswer: 3,
      },
      {
        question: "Which of these is an example of a non-relational database?",
        options: ["MongoDB", "MySQL", "PostgreSQL", "Oracle"],
        correctAnswer: 0,
      },
      {
        question: "How do you write comment in CSS?",
        options: ["// This is a comment", "/* This is a comment */", "# This is a comment", "<!-- This is a comment -->"],
        correctAnswer: 1,
      },
      {
        question: "Which of the following algorithms is used to sort an array by comparing elements?",
        options: ["Bubble sort", "Insertion sort", "Quick sort", "Merge sort"],
        correctAnswer: 0,
      },
      {
        question: "What does the 'finally' block in Java do?",
        options: ["Handles all exceptions", "Attempts to handle runtime exceptions", "Executes code after try-catch", "Defines execution start point"],
        correctAnswer: 2,
      },
      {
        question: "Which data structure is best for searching elements quickly?",
        options: ["Binary search tree", "Array", "Linked list", "Queue"],
        correctAnswer: 0,
      },
      {
        question: "What is the correct syntax for a JavaScript if statement?",
        options: ["if (condition) {}", "if condition {}", "if {} else", "if {condition}"],
        correctAnswer: 0,
      },
    ],
  },

  {
    category: "Eesti Kääned",
    questions: [
      {
        question: "Laps tuleb varsti 'kuST?'",
        options: ["Lasteajast", "Lasteajas", "Lasteajale"],
        correctAnswer: 1,
      },
      {
        question: "Ma lähen kuhu:",
        options: ["kodu", "kodus", "koju", "majas"],
        correctAnswer: 2,
      },
      {
        question: "Ema käib iga päev kuS?",
        options: ["poodi", "poes", "pood"],
        correctAnswer: 3,
      },
      {
        question: "Which part of Estonian Cases we are using to say 'with something or with someone'?",
        options: ["Saav", "Olev", "Kaasaütlev", "Rajav"],
        correctAnswer: 2,
      },
      {
        question: "Which part of Estonian Cases we are using to say 'without something or without someone?'",
        options: ["Alalütlev", "Ilmaütlev", "Kaasaütlev", "Alaltütlev"],
        correctAnswer: 1,
      },
      {
        question: "Which part of Estonian Cases we are using to say 'i want to be someone in future? (example)'",
        options: ["Sisseütlev", "Rajav", "Saav", "Nimetav"],
        correctAnswer: 2,
      },
      {
        question: "What are we need to put at the end of word, when you're using Kaasaütlev case?",
        options: ["-lt", "-ga", "-na", "-ks"],
        correctAnswer: 1,
      },
      {
        question: "What are we need to put at the end of word, when you're using Ilmaütlev case?",
        options: ["-le", "-l", "-ta", "-ni"],
        correctAnswer: 2,
      },
      {
        question: "What are we need to put at the end of word, when you're using Saav case?",
        options: ["-s", "-st", "nothing", "-ks"],
        correctAnswer: 3,
      },
      {
        question: "How many cases in the Estonian Language?",
        options: ["14", "6", "15", "only 3"],
        correctAnswer: 0,
      },
      {
        question: "We have a question 'where?', how you'll translate this word in Estonian?",
        options: ["kes", "kellel", "keda", "kus"],
        correctAnswer: 3,
      },
      {
        question: "What ilma means?",
        options: ["no", "without", "with", "nothing"],
        correctAnswer: 1,
      },
      {
        question: "How you would say? I without car now",
        options: ["Ma olen ilma autota praegu", "Ma ilma autota praegu", "Ma olen ilma auto"],
        correctAnswer: 0,
      },
      {
        question: "What are we need to put at the end of word, when you're using Alaleütlev case?",
        options: ["-sse", "-na", "-l", "-le"],
        correctAnswer: 3,
      },
      {
        question: "Which case answers the question kelle? (whose)?",
        options: ["nimetav", "omastav", "osastav", "alaleütlev"],
        correctAnswer: 2,
      },
      {
        question: "Which verb form is used for 'to be' in the 1st person singular present tense?",
        options: ["oled", "olen", "oleme", "olid"],
        correctAnswer: 1,
      },
      {
        question: "Which of the following cases indicates movement into something?",
        options: ["sisseütlev", "seestütlev", "alaleütlev", "kohakäänded"],
        correctAnswer: 0,
      },
      {
        question: "Which of these is the correct partitive form of 'raamat' (book)?",
        options: ["raamatuga", "raamatul", "raamatut", "raamatuna"],
        correctAnswer: 2,
      },
      {
        question: "What is the correct elative case form of the noun maja (house)?",
        options: ["majast", "majasse", "majani", "majale"],
        correctAnswer: 0,
      },
      {
        question: "Which word means with a friend using the kaasütlev case?",
        options: ["sõbrale", "sõbra", "sõbraga", "sõbrast"],
        correctAnswer: 2,
      },
      {
        question: "What is the correct omastav form of 'õpilane'?",
        options: ["õpilane", "õpilasel", "õpilast", "õpilase "],
        correctAnswer: 3,
      },
      {
        question: "What is the correct osastav form of 'kohv'?",
        options: ["kohvi", "kohv", "kohviga", "kohvile"],
        correctAnswer: 0,
      },
      {
        question: "What is the correct seestütlev form of 'maja'",
        options: ["majas", "majasse", "majast", "majale"],
        correctAnswer: 2,
      },
      {
        question: "What is the correct form in the lause: 'Me arutame seda ___.' (We’re discussing the topic.)",
        options: ["teema", "teemal", "teemasse", "teemana"],
        correctAnswer: 1,
      },
      {
        question: "What is the function of the translatiiv case (-ks)?",
        options: ["Indicates being 'inside' something", "Shows transformation or change into something", "Shows ownership", "Expresses origin"],
        correctAnswer: 1,
      },
    ],
  },

  {
    category: "Sõnad",
    questions: [
      {
        question: "What does this word mean? Kasutamine",
        options: ["Destroy", "Say", "Use", "Create"],
        correctAnswer: 2,
      },
      {
        question: "What does this word mean? Kuulama",
        options: ["Listen", "Write", "Cooling"],
        correctAnswer: 0,
      },
      {
        question: "What does this word mean? Mäng",
        options: ["Music", "Game", "Book"],
        correctAnswer: 1,
      },
      {
        question: "What does this word mean? Aeg",
        options: ["Time", "Aegna Island", "Watch"],
        correctAnswer: 0,
      },
      {
        question: "What differences, between AEG and KELL?",
        options: ["Aeg we are using to say, that this is watches or what time it is, but Kell for other time or conversations", "Kell we are using to say, what time it is only and it's watch, but Aeg we are using for other time or for correct conversation", "I don't know"],
        correctAnswer: 1,
      },
      {
        question: "Who is this bird? PAPAGOI",
        options: ["Seagull", "Eagle", "Duck", "Parrot"],
        correctAnswer: 3,
      },
      {
        question: "How you would say 'Today is a beautiful weather'?",
        options: ["Taevas on pilves", "Eile oli ilus ilm", "Täna on ilus ilm", "Täna on päike paistab"],
        correctAnswer: 2,
      },
      {
        question: "What does this word mean? Arvuti",
        options: ["AI", "Remote", "Computer", "Machine"],
        correctAnswer: 2,
      },
      {
        question: "What does this word mean? Weather",
        options: ["ilm", "toit", "linn", "lind"],
        correctAnswer: 0,
      },
      {
        question: "What does this word mean? Ausalt",
        options: ["Weird", "Fair", "Think", "Honestly"],
        correctAnswer: 3,
      },
      {
        question: "What does this word mean? Hind",
        options: ["Grade", "Number", "Price"],
        correctAnswer: 2,
      },
      {
        question: "What would you add, if you say in Estonian: Ma tahan poes osta ''",
        options: ["koer", "süüa", "auto", "kass"],
        correctAnswer: 1,
      },
      {
        question: "Which word you can use instead of Pühahoone?",
        options: ["Hullumaja", "Klooster", "Riigikogu", "Politsei osakond"],
        correctAnswer: 1,
      },
      {
        question: "How do you named a person with strong conservative national point of views?",
        options: ["Martin Helme", "Patrioot", "Natsist", "Rahvuslanne"],
        correctAnswer: 3,
      },
      {
        question: "What does this word mean? Ajuküpsemine",
        options: ["Mathematics", "Middle-rare", "Growing", "Brainrot"],
        correctAnswer: 2,
      },
      {
        question: "What does this word mean? Suulane",
        options: ["Slave (Talupoeg)", "Servant"],
        correctAnswer: 1,
      },
      {
        question: "What does this word mean? Sööma",
        options: ["drink", "cook", "eat"],
        correctAnswer: 2,
      },
      {
        question: "What does this word mean? Suur",
        options: ["Big", "Small"],
        correctAnswer: 0,
      },
      {
        question: "What does this word mean? Väike",
        options: ["Small", "Snail", "Great"],
        correctAnswer: 0,
      },
      {
        question: "How you could say the biggest or the smallest in Estonian?",
        options: ["suur või väike", "kõige suurem või kõige väiksem", "suurim või väiksem"],
        correctAnswer: 1,
      },
      {
        question: "What does this word mean? Kasutamine",
        options: ["150", "160", "170", "180"],
        correctAnswer: 3,
      },
      {
        question: "How you could say in Estonian word Beautiful?",
        options: ["parem", "meeldib", "armas", "ilus"],
        correctAnswer: 3,
      },
      {
        question: "What means word parem in 2 variations?",
        options: ["only better", "right or better", "only right", "right and beautiful"],
        correctAnswer: 1,
      },
      {
        question: "What does this word mean? Ema",
        options: ["Mom", "Dad", "Grandma", "Grandpa"],
        correctAnswer: 0,
      },
      {
        question: "What does this word mean? Isa",
        options: ["Son", "Grandpa", "Dad", "Uncle"],
        correctAnswer: 2,
      },
    ],
  },

  {
    category: "Numbrid",
    questions: [
      {
        question: "What does this number mean? tuhat",
        options: ["one hundred", "one thousand", "ten", "fifthteen"],
        correctAnswer: 1,
      },
      {
        question: "Try to found, what is it equal in Estonian: 1000 * 10",
        options: ["tuhat", "kümme tuhat", "sada tuhat", "üks tuhat"],
        correctAnswer: 1,
      },
      {
        question: "How to pronouce this number? 17",
        options: ["Seitse sada", "Seitsekümmend", "Seitseteist"],
        correctAnswer: 2,
      },
      {
        question: "How to pronouce this number? 111",
        options: ["Sada üksteist", "üksteist sada", "üks tuhat"],
        correctAnswer: 0,
      },
      {
        question: "What does this number mean? sada kolmkümmend üks",
        options: ["121", "131", "141", "111"],
        correctAnswer: 1,
      },
      {
        question: "What does this number mean? kaheksasada nelikümmend viis",
        options: ["314", "567", "845", "999"],
        correctAnswer: 2,
      },
      {
        question: "Choose the correct answer for this numeration: 1,2,3,4,5,6,7,8,9,10",
        options: ["Üks, Kaheksa, Kuus, viis, neli, Kolm, Seitse, Kaks, Üheksa, Kümme", "Yksi, Kaksi, Kolma, Nelja, Viisi, Kuusi, Seitsemän, Kahdeksän, Yhdeksän, Kymmenen", "Ein, Zwei, Drei, Vier, Fünf, Sechs, Sieben, Acht, Noin, Zehn", "Üks, Kaks, Kolm, Neli, Viis, Kuus, Seitse, Kaheksa, Üheksa, Kümme"],
        correctAnswer: 3,
      },
      {
        question: "Try to found, what is it equal in Estonian: 150-35",
        options: ["sada kolmkümmend viis", "sada kakskümmend viis", "sada viisteist", "sada nelikümmend viis"],
        correctAnswer: 2,
      },
      {
        question: "Logical Question: How you can pronouce decimal numbers shorter, when you're talking with someone? For Example: 20",
        options: ["kakski", "ei või öelda lühikem", "kakskend", "kakskümmd"],
        correctAnswer: 2,
      },
      {
        question: "What is 3 + 5 in Estonian?",
        options: ["kaks", "kaheksa", "üheksa", "kümme"],
        correctAnswer: 1,
      },
      {
        question: "What is half of 30 in Estonian?",
        options: ["viis", "kakskümmend viis", "viisteist"],
        correctAnswer: 2,
      },
      {
        question: "What does mean number 2018?",
        options: ["Kaks tuhat kaheksateist", "Kaks tuhat kaheksakümmend", "Kaks sada kaheksa"],
        correctAnswer: 0,
      },
      {
        question: "What is the square of 5 in Estonian?",
        options: ["viis", "Kahekümne viis", "Kakskümmend viis", "kaksteist"],
        correctAnswer: 2
      },
      {
        question: "Historical Question: When Estonia was in independence for the first time?",
        options: ["tuhat üheksasaja kaheksateist kümnendal aastal.", "tuhat üheksasaja seitsmeteist kümnendal aastal.", "tuhat üheksasaja kuueteist kümnendal aastal.", "tuhat üheksasaja üheteist kümnendal aastal."],
        correctAnswer: 0,
      },
      {
        question: "How do you say 0 in Estonian?",
        options: ["null", "noll", "zero", "ei tea"],
        correctAnswer: 0,
      },
      {
        question: "If you have at the end of your sentence aastal, then how will write numbers? For Example, use number viis",
        options: ["viies", "viiendal", "viis", "viit"],
        correctAnswer: 1,
      },
      {
        question: "What does mean number 1998?",
        options: ["tuhat neli sada üksteist", "kaks tuhat üheksa", "tuhat üheksa sada üheksakümmend kaheksa", "tuhat seitse sada seitseteist"],
        correctAnswer: 2,
      },
      {
        question: "What is 0 - 5 in Estonian?",
        options: ["viis", "null", "miinus viis", "pluus viis"],
        correctAnswer: 2,
      },
      {
        question: "How to say `first` in Estonian?",
        options: ["pervoi", "üks", "esimene"],
        correctAnswer: 2,
      },
      {
        question: "How to say `third` in Estonian?",
        options: ["kolmas", "viies", "teine", "kolm"],
        correctAnswer: 0,
      },
      {
        question: "How to say `seventh` in Estonian?",
        options: ["kuues", "seitsmes", "seitsmendal", "seitse"],
        correctAnswer: 1,
      },
      {
        question: "How to say `in first` in Estonian?",
        options: ["esimeses", "esimesel", "esiteks", "üks"],
        correctAnswer: 0,
      },
      {
        question: "What is 67 - 34 in Estonian?",
        options: ["kolmkümmend kaks", "kolmkümmend kolm", "kolmteist", "kolmkümmend neli"],
        correctAnswer: 1,
      },
      {
        question: "Do you like our quiz? Don't worry about the colors.",
        options: ["Jah", "Ei"],
        correctAnswer: 0,
      },
      {
        question: "Rate our Quiz) Don't worry about the colors.",
        options: ["1", "2", "3", "4", "5"],
        correctAnswer: 0, 
      },
    ],
  },
];
