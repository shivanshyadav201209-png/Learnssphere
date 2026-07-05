const chapterCatalog = {
  "Class 1": {
    English: ["Two Little Hands", "Greetings", "Picture Reading", "The Cap Seller and the Monkeys", "A Farm", "Food", "The Four Seasons"],
    Mathematics: ["Finding the Furry Cat", "What is Long? What is Round?", "Mango Treat", "Making 10", "How Many?", "Vegetables", "Lina's Family", "Fun with Numbers"],
    Hindi: ["Mera Parichay", "Swar", "Vyanjan", "Maatra", "Chitra Varnan", "Chhoti Kahaniyan"],
    EVS: ["My Family", "My Body", "Food We Eat", "Water", "Plants Around Us", "Animals Around Us", "My School"],
  },
  "Class 2": {
    English: ["First Day at School", "I am Lucky", "A Smile", "Rain", "Curlylocks and the Three Bears", "The Mumbai Musicians"],
    Mathematics: ["A Day at the Beach", "Shapes Around Us", "Fun with Numbers", "Shadow Story", "Playing with Lines", "Decoration for Festival", "Rani's Gift"],
    Hindi: ["Oont Chala", "Bhalu Ne Kheli Football", "Myaun Myaun", "Titli Aur Kali", "Bahadur Bittu", "Meethi Sarangi"],
    EVS: ["Our Neighbourhood", "Festivals", "Transport", "Plants", "Animals", "Cleanliness", "Safety Rules"],
  },
  "Class 3": {
    English: ["Good Morning", "The Magic Garden", "Bird Talk", "Nina and the Baby Sparrows", "Little by Little", "The Yellow Butterfly"],
    Mathematics: ["Where to Look From", "Fun with Numbers", "Give and Take", "Long and Short", "Shapes and Designs", "Time Goes On", "Smart Charts"],
    Hindi: ["Kakku", "Shekhibaaz Makkhi", "Chand Wali Amma", "Mann Karta Hai", "Bahadur Bitto", "Humse Sab Kehte"],
    EVS: ["Poonam's Day Out", "The Plant Fairy", "Water O Water", "Our First School", "Foods We Eat", "Making Pots", "From Here to There"],
  },
  "Class 4": {
    English: ["Wake Up", "Neha's Alarm Clock", "Noses", "The Little Fir Tree", "Run", "The Scholar's Mother Tongue"],
    Mathematics: ["Building with Bricks", "Long and Short", "A Trip to Bhopal", "Tick Tick Tick", "The Way the World Looks", "Tables and Shares", "Play with Patterns"],
    Hindi: ["Mann Ke Bhole Bhale Badal", "Jaisa Sawal Waisa Jawab", "Kirmit Ki Gend", "Papa Jab Bachche The", "Dost Ki Poshak", "Naukar"],
    EVS: ["Going to School", "Ear to Ear", "A Day with Nandu", "The Story of Amrita", "Anita and the Honeybees", "Omana's Journey", "Changing Families"],
  },
  "Class 5": {
    English: ["Ice Cream Man", "Wonderful Waste", "Teamwork", "Flying Together", "My Shadow", "Robinson Crusoe"],
    Mathematics: ["The Fish Tale", "Shapes and Angles", "How Many Squares", "Parts and Wholes", "Does it Look the Same", "Be My Multiple, I'll be Your Factor", "Tenths and Hundredths"],
    Hindi: ["Raakh Ki Rassi", "Fasalon Ke Tyohar", "Khilonewala", "Nanha Fankar", "Jahan Chah Wahan Rah", "Chitthi Ka Safar"],
    EVS: ["Super Senses", "A Snake Charmer's Story", "From Tasting to Digesting", "Mangoes Round the Year", "Seeds and Seeds", "Every Drop Counts", "Across the Wall"],
  },
  "Class 6": {
    English: ["Who Did Patrick's Homework?", "How the Dog Found Himself a Master", "Taro's Reward", "An Indian-American Woman in Space", "A Different Kind of School", "The Banyan Tree"],
    Mathematics: ["Knowing Our Numbers", "Whole Numbers", "Playing with Numbers", "Basic Geometrical Ideas", "Understanding Elementary Shapes", "Integers", "Fractions", "Decimals", "Data Handling", "Mensuration", "Algebra"],
    Science: ["Food: Where Does It Come From?", "Components of Food", "Fibre to Fabric", "Sorting Materials into Groups", "Separation of Substances", "Changes Around Us", "Getting to Know Plants", "Body Movements", "The Living Organisms", "Motion and Measurement", "Light, Shadows and Reflections", "Electricity and Circuits", "Fun with Magnets", "Water", "Air Around Us", "Garbage In, Garbage Out"],
    "Social Science": ["What, Where, How and When?", "From Hunting-Gathering to Growing Food", "In the Earliest Cities", "What Books and Burials Tell Us", "Kingdoms, Kings and an Early Republic", "New Questions and Ideas", "Ashoka", "Vital Villages", "Traders, Kings and Pilgrims", "The Earth in the Solar System", "Globe: Latitudes and Longitudes", "Motions of the Earth", "Maps", "Major Domains of the Earth", "Understanding Diversity", "Diversity and Discrimination", "Government", "Panchayati Raj"],
    Hindi: ["Vah Chidiya Jo", "Bachpan", "Nadaan Dost", "Chand Se Thodi Si Gappe", "Aksharon Ka Mahatva", "Paar Nazar Ke", "Saathi Haath Badhana"],
  },
  "Class 7": {
    English: ["Three Questions", "A Gift of Chappals", "Gopal and the Hilsa Fish", "The Ashes That Made Trees Bloom", "Quality", "Expert Detectives", "The Invention of Vita-Wonk"],
    Mathematics: ["Integers", "Fractions and Decimals", "Data Handling", "Simple Equations", "Lines and Angles", "The Triangle and its Properties", "Congruence of Triangles", "Comparing Quantities", "Rational Numbers", "Practical Geometry", "Perimeter and Area", "Algebraic Expressions", "Exponents and Powers", "Symmetry", "Visualising Solid Shapes"],
    Science: ["Nutrition in Plants", "Nutrition in Animals", "Fibre to Fabric", "Heat", "Acids, Bases and Salts", "Physical and Chemical Changes", "Weather, Climate and Adaptations", "Winds, Storms and Cyclones", "Soil", "Respiration in Organisms", "Transportation in Animals and Plants", "Reproduction in Plants", "Motion and Time", "Electric Current and its Effects", "Light", "Water", "Forests", "Wastewater Story"],
    "Social Science": ["Tracing Changes Through a Thousand Years", "New Kings and Kingdoms", "The Delhi Sultans", "The Mughal Empire", "Rulers and Buildings", "Towns, Traders and Craftspersons", "Tribes, Nomads and Settled Communities", "Devotional Paths", "Environment", "Inside Our Earth", "Our Changing Earth", "Air", "Water", "On Equality", "Role of the Government in Health", "How the State Government Works", "Growing Up as Boys and Girls", "Women Change the World"],
    Hindi: ["Hum Panchhi Unmukt Gagan Ke", "Dadi Maa", "Himalaya Ki Betiyan", "Kathputli", "Mithaiwala", "Rakt Aur Hamara Sharir", "Papa Kho Gaye"],
  },
  "Class 8": {
    English: ["The Best Christmas Present in the World", "The Tsunami", "Glimpses of the Past", "Bepin Choudhury's Lapse of Memory", "The Summit Within", "This is Jody's Fawn", "A Visit to Cambridge"],
    Mathematics: ["Rational Numbers", "Linear Equations in One Variable", "Understanding Quadrilaterals", "Practical Geometry", "Data Handling", "Squares and Square Roots", "Cubes and Cube Roots", "Comparing Quantities", "Algebraic Expressions and Identities", "Visualising Solid Shapes", "Mensuration", "Exponents and Powers", "Direct and Inverse Proportions", "Factorisation", "Introduction to Graphs"],
    Science: ["Crop Production and Management", "Microorganisms: Friend and Foe", "Synthetic Fibres and Plastics", "Materials: Metals and Non-Metals", "Coal and Petroleum", "Combustion and Flame", "Conservation of Plants and Animals", "Cell Structure and Functions", "Reproduction in Animals", "Reaching the Age of Adolescence", "Force and Pressure", "Friction", "Sound", "Chemical Effects of Electric Current", "Some Natural Phenomena", "Light", "Stars and the Solar System", "Pollution of Air and Water"],
    "Social Science": ["How, When and Where", "From Trade to Territory", "Ruling the Countryside", "Tribals, Dikus and the Vision of a Golden Age", "When People Rebel", "Colonialism and the City", "Resources", "Land, Soil, Water, Natural Vegetation and Wildlife", "Agriculture", "Industries", "Human Resources", "The Indian Constitution", "Understanding Secularism", "Parliament and the Making of Laws", "Judiciary", "Understanding Marginalisation"],
    Hindi: ["Dhvani", "Lakh Ki Chudiyan", "Bus Ki Yatra", "Deewanon Ki Hasti", "Chitthiyon Ki Anokhi Duniya", "Bhagwan Ke Dakiye", "Kya Nirash Hua Jaye"],
  },
  "Class 9": {
    English: ["The Fun They Had", "The Sound of Music", "The Little Girl", "A Truly Beautiful Mind", "The Snake and the Mirror", "My Childhood", "Packing", "Reach for the Top", "The Bond of Love", "Kathmandu"],
    Mathematics: ["Number Systems", "Polynomials", "Coordinate Geometry", "Linear Equations in Two Variables", "Introduction to Euclid's Geometry", "Lines and Angles", "Triangles", "Quadrilaterals", "Circles", "Heron's Formula", "Surface Areas and Volumes", "Statistics"],
    Science: ["Matter in Our Surroundings", "Is Matter Around Us Pure?", "Atoms and Molecules", "Structure of the Atom", "The Fundamental Unit of Life", "Tissues", "Motion", "Force and Laws of Motion", "Gravitation", "Work and Energy", "Sound", "Improvement in Food Resources"],
    "Social Science": ["The French Revolution", "Socialism in Europe and the Russian Revolution", "Nazism and the Rise of Hitler", "India: Size and Location", "Physical Features of India", "Drainage", "Climate", "Natural Vegetation and Wildlife", "Population", "What is Democracy?", "Constitutional Design", "Electoral Politics", "Working of Institutions", "Democratic Rights", "The Story of Village Palampur", "People as Resource", "Poverty as a Challenge", "Food Security in India"],
    Hindi: ["Do Bailon Ki Katha", "Lhasa Ki Or", "Upbhoktavad Ki Sanskriti", "Sanwle Sapnon Ki Yaad", "Premchand Ke Phate Joote", "Mere Bachpan Ke Din"],
  },
  "Class 10": {
    English: ["A Letter to God", "Nelson Mandela: Long Walk to Freedom", "Two Stories About Flying", "From the Diary of Anne Frank", "Glimpses of India", "Mijbil the Otter", "Madam Rides the Bus", "The Sermon at Benares", "The Proposal"],
    Mathematics: ["Real Numbers", "Polynomials", "Pair of Linear Equations in Two Variables", "Quadratic Equations", "Arithmetic Progressions", "Triangles", "Coordinate Geometry", "Introduction to Trigonometry", "Applications of Trigonometry", "Circles", "Areas Related to Circles", "Surface Areas and Volumes", "Statistics", "Probability"],
    Science: ["Chemical Reactions and Equations", "Acids, Bases and Salts", "Metals and Non-Metals", "Carbon and its Compounds", "Life Processes", "Control and Coordination", "How do Organisms Reproduce?", "Heredity", "Light: Reflection and Refraction", "The Human Eye and the Colourful World", "Electricity", "Magnetic Effects of Electric Current", "Our Environment"],
    "Social Science": ["The Rise of Nationalism in Europe", "Nationalism in India", "The Making of a Global World", "Print Culture and the Modern World", "Resources and Development", "Forest and Wildlife Resources", "Water Resources", "Agriculture", "Minerals and Energy Resources", "Manufacturing Industries", "Lifelines of National Economy", "Power Sharing", "Federalism", "Gender, Religion and Caste", "Political Parties", "Outcomes of Democracy", "Development", "Sectors of the Indian Economy", "Money and Credit", "Globalisation and the Indian Economy"],
    Hindi: ["Bade Bhai Sahab", "Diary Ka Ek Panna", "Tatara Vamiro Katha", "Teesri Kasam Ke Shilpkar", "Ab Kahan Doosron Ke Dukh Se Dukhi Hone Wale", "Kartoos", "Sakhi", "Meera Ke Pad", "Manushyata"],
  },
  "Class 11": {
    English: ["The Portrait of a Lady", "We're Not Afraid to Die", "Discovering Tut", "The Adventure", "Silk Road", "A Photograph", "The Laburnum Top", "The Voice of the Rain"],
    Mathematics: ["Sets", "Relations and Functions", "Trigonometric Functions", "Complex Numbers and Quadratic Equations", "Linear Inequalities", "Permutations and Combinations", "Binomial Theorem", "Sequences and Series", "Straight Lines", "Conic Sections", "Introduction to Three Dimensional Geometry", "Limits and Derivatives", "Statistics", "Probability"],
    Physics: ["Units and Measurements", "Motion in a Straight Line", "Motion in a Plane", "Laws of Motion", "Work, Energy and Power", "System of Particles and Rotational Motion", "Gravitation", "Mechanical Properties of Solids", "Mechanical Properties of Fluids", "Thermal Properties of Matter", "Thermodynamics", "Kinetic Theory", "Oscillations", "Waves"],
    Chemistry: ["Some Basic Concepts of Chemistry", "Structure of Atom", "Classification of Elements and Periodicity", "Chemical Bonding and Molecular Structure", "Chemical Thermodynamics", "Equilibrium", "Redox Reactions", "Organic Chemistry: Some Basic Principles and Techniques", "Hydrocarbons"],
    Biology: ["The Living World", "Biological Classification", "Plant Kingdom", "Animal Kingdom", "Morphology of Flowering Plants", "Anatomy of Flowering Plants", "Structural Organisation in Animals", "Cell: The Unit of Life", "Biomolecules", "Cell Cycle and Cell Division", "Photosynthesis in Higher Plants", "Respiration in Plants", "Plant Growth and Development", "Breathing and Exchange of Gases", "Body Fluids and Circulation", "Excretory Products and their Elimination", "Locomotion and Movement", "Neural Control and Coordination", "Chemical Coordination and Integration"],
    Accountancy: ["Introduction to Accounting", "Theory Base of Accounting", "Recording of Transactions", "Bank Reconciliation Statement", "Trial Balance", "Depreciation", "Bills of Exchange", "Financial Statements"],
    Economics: ["Introduction", "Collection of Data", "Organisation of Data", "Presentation of Data", "Measures of Central Tendency", "Correlation", "Index Numbers", "Indian Economy on the Eve of Independence", "Indian Economy 1950-1990", "Liberalisation, Privatisation and Globalisation"],
    "Business Studies": ["Nature and Purpose of Business", "Forms of Business Organisation", "Private, Public and Global Enterprises", "Business Services", "Emerging Modes of Business", "Social Responsibilities of Business", "Formation of a Company", "Sources of Business Finance", "Small Business", "Internal Trade", "International Business"],
  },
  "Class 12": {
    English: ["The Last Lesson", "Lost Spring", "Deep Water", "The Rattrap", "Indigo", "Poets and Pancakes", "The Interview", "Going Places", "My Mother at Sixty-Six", "Keeping Quiet", "A Thing of Beauty", "A Roadside Stand"],
    Mathematics: ["Relations and Functions", "Inverse Trigonometric Functions", "Matrices", "Determinants", "Continuity and Differentiability", "Application of Derivatives", "Integrals", "Application of Integrals", "Differential Equations", "Vector Algebra", "Three Dimensional Geometry", "Linear Programming", "Probability"],
    Physics: ["Electric Charges and Fields", "Electrostatic Potential and Capacitance", "Current Electricity", "Moving Charges and Magnetism", "Magnetism and Matter", "Electromagnetic Induction", "Alternating Current", "Electromagnetic Waves", "Ray Optics and Optical Instruments", "Wave Optics", "Dual Nature of Radiation and Matter", "Atoms", "Nuclei", "Semiconductor Electronics"],
    Chemistry: ["Solutions", "Electrochemistry", "Chemical Kinetics", "d and f Block Elements", "Coordination Compounds", "Haloalkanes and Haloarenes", "Alcohols, Phenols and Ethers", "Aldehydes, Ketones and Carboxylic Acids", "Amines", "Biomolecules"],
    Biology: ["Sexual Reproduction in Flowering Plants", "Human Reproduction", "Reproductive Health", "Principles of Inheritance and Variation", "Molecular Basis of Inheritance", "Evolution", "Human Health and Disease", "Microbes in Human Welfare", "Biotechnology: Principles and Processes", "Biotechnology and its Applications", "Organisms and Populations", "Ecosystem", "Biodiversity and Conservation"],
    Accountancy: ["Accounting for Partnership Firms", "Reconstitution of Partnership", "Dissolution of Partnership", "Accounting for Share Capital", "Issue and Redemption of Debentures", "Financial Statements of a Company", "Analysis of Financial Statements", "Cash Flow Statement"],
    Economics: ["National Income and Related Aggregates", "Money and Banking", "Determination of Income and Employment", "Government Budget", "Balance of Payments", "Indian Economy on the Eve of Independence", "Indian Economy 1950-1990", "Liberalisation, Privatisation and Globalisation", "Human Capital Formation", "Rural Development", "Employment", "Environment and Sustainable Development"],
    "Business Studies": ["Nature and Significance of Management", "Principles of Management", "Business Environment", "Planning", "Organising", "Staffing", "Directing", "Controlling", "Financial Management", "Financial Markets", "Marketing", "Consumer Protection"],
  },
  JEE: {
    Physics: ["Physics and Measurement", "Kinematics", "Laws of Motion", "Work, Energy and Power", "Rotational Motion", "Gravitation", "Properties of Solids and Liquids", "Thermodynamics", "Kinetic Theory of Gases", "Oscillations and Waves", "Electrostatics", "Current Electricity", "Magnetic Effects of Current", "Electromagnetic Induction", "Optics", "Dual Nature of Matter and Radiation", "Atoms and Nuclei", "Electronic Devices"],
    Chemistry: ["Some Basic Concepts of Chemistry", "Atomic Structure", "Chemical Bonding", "Chemical Thermodynamics", "Solutions", "Equilibrium", "Redox Reactions", "Electrochemistry", "Chemical Kinetics", "Classification of Elements", "p Block Elements", "d and f Block Elements", "Coordination Compounds", "Purification of Organic Compounds", "Hydrocarbons", "Haloalkanes and Haloarenes", "Alcohols, Phenols and Ethers", "Aldehydes and Ketones", "Carboxylic Acids", "Amines", "Biomolecules"],
    Mathematics: ["Sets, Relations and Functions", "Complex Numbers", "Matrices and Determinants", "Permutations and Combinations", "Binomial Theorem", "Sequence and Series", "Limit, Continuity and Differentiability", "Integral Calculus", "Differential Equations", "Coordinate Geometry", "Three Dimensional Geometry", "Vector Algebra", "Statistics and Probability", "Trigonometry", "Mathematical Reasoning"],
  },
  NEET: {
    Physics: ["Physics and Measurement", "Kinematics", "Laws of Motion", "Work, Energy and Power", "Rotational Motion", "Gravitation", "Properties of Bulk Matter", "Thermodynamics", "Kinetic Theory", "Oscillations and Waves", "Electrostatics", "Current Electricity", "Magnetic Effects of Current", "Electromagnetic Induction", "Optics", "Dual Nature of Radiation and Matter", "Atoms and Nuclei", "Electronic Devices"],
    Chemistry: ["Some Basic Concepts of Chemistry", "Structure of Atom", "Classification of Elements", "Chemical Bonding", "States of Matter", "Thermodynamics", "Equilibrium", "Redox Reactions", "Hydrogen", "s Block Elements", "p Block Elements", "Organic Chemistry Basics", "Hydrocarbons", "Solutions", "Electrochemistry", "Chemical Kinetics", "Coordination Compounds", "Haloalkanes and Haloarenes", "Alcohols, Phenols and Ethers", "Aldehydes, Ketones and Carboxylic Acids", "Amines", "Biomolecules"],
    Biology: ["The Living World", "Biological Classification", "Plant Kingdom", "Animal Kingdom", "Morphology of Flowering Plants", "Anatomy of Flowering Plants", "Structural Organisation in Animals", "Cell: The Unit of Life", "Biomolecules", "Cell Cycle and Cell Division", "Transport in Plants", "Mineral Nutrition", "Photosynthesis in Higher Plants", "Respiration in Plants", "Plant Growth and Development", "Digestion and Absorption", "Breathing and Exchange of Gases", "Body Fluids and Circulation", "Excretory Products and their Elimination", "Locomotion and Movement", "Neural Control and Coordination", "Chemical Coordination and Integration", "Reproduction in Organisms", "Sexual Reproduction in Flowering Plants", "Human Reproduction", "Reproductive Health", "Principles of Inheritance and Variation", "Molecular Basis of Inheritance", "Evolution", "Human Health and Disease", "Strategies for Enhancement in Food Production", "Microbes in Human Welfare", "Biotechnology Principles and Processes", "Biotechnology and its Applications", "Organisms and Populations", "Ecosystem", "Biodiversity and Conservation", "Environmental Issues"],
  },
};

const resourceLabels = {
  ncertQA: "NCERT Q/A",
  exercise: "NCERT Exercise",
  examples: "Solved Examples",
  intext: "Intext Q/A",
  grammar: "Grammar",
  writing: "Writing Skills",
  mapSource: "Map / Source Q/A",
  numerical: "Numericals",
  caseStudy: "Case Study Q/A",
  custom: "My Questions",
};

const resourceTypePresets = {
  mathematics: [ "examples", "exercise" ],
  science: [ "intext", "exercise"],
  language: ["textbookQA", "grammar", "writing", "extra"],
  socialScience: ["textbookQA", "mapSource", "exercise", "extra"],
  commerce: ["textbookQA", "numerical", "caseStudy", "extra"],
  default: ["textbookQA", "exercise", "extra"],
};

const courseSelect = document.querySelector("#courseSelect");
const subjectSelect = document.querySelector("#subjectSelect");
const chapterSelect = document.querySelector("#chapterSelect");
const chapterList = document.querySelector("#chapterList");
const sectionInput = document.querySelector("#sectionInput");
const exerciseSelect = document.querySelector("#exerciseSelect");
const exerciseBlock = document.querySelector("#exerciseBlock");
const selectionSummary = document.querySelector("#selectionSummary");
const resourceTitle = document.querySelector("#resourceTitle");
const qaGrid = document.querySelector("#qaGrid");
const resourceTabsContainer = document.querySelector(".resource-tabs");
const customQuestionInput = document.querySelector("#customQuestionInput");
const customAnswerInput = document.querySelector("#customAnswerInput");
const addQuestionButton = document.querySelector("#addQuestionButton");
const addQuestionMessage = document.querySelector("#addQuestionMessage");
const steps = document.querySelectorAll(".step");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("#navLinks");

let selectedType = "textbookQA";
const customQuestionsStorageKey = "learnSphereCustomQuestions";

function renderChapterButtons() {
  const course = courseSelect.value;
  const subject = subjectSelect.value;
  const chapters = course && subject ? Object.keys(studyData[course][subject]) : [];

  if (!chapters.length) {
    chapterList.innerHTML = `<p class="hint">Select a subject to see chapters.</p>`;
    return;
  }

  chapterList.innerHTML = chapters
    .map(
      (chapter) => `
        <button type="button" data-chapter="${chapter}" class="${chapterSelect.value === chapter ? "active" : ""}">
          ${chapter}
        </button>
      `
    )
    .join("");

  chapterList.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const selectedChapter = button.dataset.chapter;
      if (chapterSelect.value === selectedChapter) {
        return;
      }
      chapterSelect.value = selectedChapter;
      updateExerciseSelect();
      renderChapterButtons();
      renderQuestions();
    });
  });
}

function loadCustomQuestions() {
  try {
    return JSON.parse(localStorage.getItem(customQuestionsStorageKey) || "{}") || {};
  } catch (error) {
    return {};
  }
}

function saveCustomQuestions() {
  localStorage.setItem(customQuestionsStorageKey, JSON.stringify(customQuestions));
}

function makeCustomQuestionKey(course, subject, chapter, section) {
  const normalizedSection = section.trim() || "general";
  return `${course}|${subject}|${chapter}|${normalizedSection}`;
}

function getCustomQuestions(key) {
  return customQuestions[key] || [];
}

function addCustomQuestion(course, subject, chapter, section, question, answer) {
  const key = makeCustomQuestionKey(course, subject, chapter, section);
  customQuestions[key] = customQuestions[key] || [];
  customQuestions[key].push({ section: section.trim(), q: question, a: answer });
  saveCustomQuestions();
  return key;
}

const customQuestions = loadCustomQuestions();

const exerciseCatalog = {
  "Class 10": {
    Mathematics: {
      "Real Numbers": ["Exercise 1.1", "Exercise 1.2", "Exercise 1.3", "Exercise 1.4"],
      Polynomials: ["Exercise 2.1", "Exercise 2.2", "Exercise 2.3", "Exercise 2.4"],
      "Pair of Linear Equations in Two Variables": [
        "Exercise 3.1",
        "Exercise 3.2",
        "Exercise 3.3",
        "Exercise 3.4",
      ],
      "Quadratic Equations": ["Exercise 4.1", "Exercise 4.2", "Exercise 4.3", "Exercise 4.4"],
      "Arithmetic Progressions": ["Exercise 5.1", "Exercise 5.2", "Exercise 5.3", "Exercise 5.4"],
      Triangles: ["Exercise 6.1", "Exercise 6.2", "Exercise 6.3", "Exercise 6.4", "Exercise 6.5"],
      "Coordinate Geometry": ["Exercise 7.1", "Exercise 7.2", "Exercise 7.3", "Exercise 7.4"],
      "Introduction to Trigonometry": ["Exercise 8.1", "Exercise 8.2", "Exercise 8.3", "Exercise 8.4"],
      "Applications of Trigonometry": ["Exercise 9.1"],
      Circles: ["Exercise 10.1", "Exercise 10.2"],
      "Areas Related to Circles": ["Exercise 11.1", "Exercise 11.2", "Exercise 11.3"],
      "Surface Areas and Volumes": ["Exercise 12.1", "Exercise 12.2", "Exercise 12.3"],
      Statistics: ["Exercise 13.1", "Exercise 13.2", "Exercise 13.3"],
      Probability: ["Exercise 14.1", "Exercise 14.2"],
    },
  },
  "Class 12": {
    Mathematics: {
      "Relations and Functions": ["Exercise 1.1", "Exercise 1.2", "Exercise 1.3"],
      "Inverse Trigonometric Functions": ["Exercise 2.1", "Exercise 2.2"],
      Matrices: ["Exercise 3.1", "Exercise 3.2", "Exercise 3.3", "Exercise 3.4"],
      Determinants: ["Exercise 4.1", "Exercise 4.2", "Exercise 4.3", "Exercise 4.4", "Exercise 4.5"],
      "Continuity and Differentiability": ["Exercise 5.1", "Exercise 5.2", "Exercise 5.3", "Exercise 5.4", "Exercise 5.5"],
      "Application of Derivatives": ["Exercise 6.1", "Exercise 6.2", "Exercise 6.3", "Exercise 6.4", "Exercise 6.5"],
      Integrals: ["Exercise 7.1", "Exercise 7.2", "Exercise 7.3", "Exercise 7.4", "Exercise 7.5", "Exercise 7.6", "Exercise 7.7", "Exercise 7.8", "Exercise 7.9", "Exercise 7.10", "Exercise 7.11"],
      "Application of Integrals": ["Exercise 8.1", "Exercise 8.2"],
      "Differential Equations": ["Exercise 9.1", "Exercise 9.2", "Exercise 9.3", "Exercise 9.4", "Exercise 9.5", "Exercise 9.6"],
      "Vector Algebra": ["Exercise 10.1", "Exercise 10.2", "Exercise 10.3", "Exercise 10.4"],
      "Three Dimensional Geometry": ["Exercise 11.1", "Exercise 11.2", "Exercise 11.3"],
      "Linear Programming": ["Exercise 12.1", "Exercise 12.2"],
      Probability: ["Exercise 13.1", "Exercise 13.2", "Exercise 13.3", "Exercise 13.4", "Exercise 13.5"],
    },
  },
};

const verifiedExerciseQA = {
  // Add exact NCERT exercise Q/A entries here using the key format:
  // "Class|Subject|Chapter|Exercise": [{ q: 'Question text', a: 'Answer text' }]
};

const ncertQuestionBank = {
  // Populate each chapter with NCERT textbook Q/A only.
  // Key format: "Class|Subject|Chapter".
  // Allowed categories: ncertQA, textbookQA, intext, extra, exercise.
  "Class 10|English|A Letter to God": {
    textbookQA: [
      {
        q: "Why does Lencho write a letter to God?",
        a: "Because the rain destroyed his crop, Lencho wrote to God asking for one hundred pesos to support his family until the next harvest.",
      },
      {
        q: "How does the postman collect money for Lencho?",
        a: "The postman asks his colleagues to contribute, then sends the collected money to Lencho, addressing the envelope to God.",
      },
      {
        q: "Why is Lencho angry with the post office employees?",
        a: "Lencho believes the employees are thieves because the amount received was less than the hundred pesos he asked for.",
      },
    ],
    extra: [
      {
        q: "What lesson does the story teach?",
        a: "It teaches faith and the goodness of human beings who help one another in difficult times.",
      },
    ],
  },
  "Class 10|Mathematics|Real Numbers": {
    exercise: [
      {
        q: "Find the HCF of 504 and 594 using Euclid’s algorithm.",
        a: "Using repeated division we get the HCF as 18.",
      },
    ],
    examples: [
      {
        q: "Find the HCF of 504 and 594 using Euclid’s algorithm.",
        a: "Using repeated division we get the HCF as 18.",
      },
    ],
    
  },
  "Class 9|Science|Matter in Our Surroundings": {
    ncertQA: [
      {
        q: "What is matter?",
        a: "Matter is anything that has mass and occupies space.",
      },
      {
        q: "What is a physical change?",
        a: "A physical change alters the physical properties of a substance without changing its chemical identity.",
      },
    ],
  },
};

function getNcertChapterResources(course, subject, chapter) {
  return (
    ncertQuestionBank[`${course}|${subject}|${chapter}`] || {
      ncertQA: [],
      textbookQA: [],
      intext: [],
      extra: [],
      concepts: [],
      examples: [],
      grammar: [],
      writing: [],
      mapSource: [],
      numerical: [],
      caseStudy: [],
      exercise: [],
    }
  );
}

function getResourceTypes(subject) {
  if (!subject) {
    return resourceTypePresets.default;
  }

  if (subject === "Mathematics") {
    return resourceTypePresets.mathematics;
  }

  if (["Science", "Physics", "Chemistry", "Biology", "EVS"].includes(subject)) {
    return resourceTypePresets.science;
  }

  if (["English", "Hindi"].includes(subject)) {
    return resourceTypePresets.language;
  }

  if (subject === "Social Science") {
    return resourceTypePresets.socialScience;
  }

  if (["Accountancy", "Economics", "Business Studies"].includes(subject)) {
    return resourceTypePresets.commerce;
  }

  return resourceTypePresets.default;
}

function getMathExercises(course, subject, chapter) {
  if (subject !== "Mathematics") {
    return [];
  }

  if (exerciseCatalog[course]?.[subject]?.[chapter]) {
    return exerciseCatalog[course][subject][chapter];
  }

  const chapterNumber = chapterCatalog[course]?.[subject]?.indexOf(chapter) + 1;

  if (!chapterNumber) {
    return [];
  }

  return ["1", "2", "3"].map((number) => `Exercise ${chapterNumber}.${number}`);
}

function getSelectedExercise() {
  return exerciseSelect.value;
}

function makeChapterResources(course, subject, chapter) {
  return getNcertChapterResources(course, subject, chapter);
}

function makeExerciseQuestions(course, subject, chapter, exercise) {
  const key = `${course}|${subject}|${chapter}|${exercise}`;
  return verifiedExerciseQA[key] || [];
}

function buildStudyData(catalog) {
  return Object.fromEntries(
    Object.entries(catalog).map(([course, subjects]) => [
      course,
      Object.fromEntries(
        Object.entries(subjects).map(([subject, chapters]) => [
          subject,
          Object.fromEntries(
            chapters.map((chapter) => [
              chapter,
              makeChapterResources(course, subject, chapter),
            ])
          ),
        ])
      ),
    ])
  );
}

const studyData = buildStudyData(chapterCatalog);

function renderResourceTabs() {
  const subject = subjectSelect.value;
  const types = [...getResourceTypes(subject), "custom"];

  if (!types.includes(selectedType)) {
    selectedType = types[0];
  }

  resourceTabsContainer.innerHTML = types
    .map(
      (type) => `
        <button class="resource-tab ${type === selectedType ? "active" : ""}" data-type="${type}">
          ${resourceLabels[type]}
        </button>
      `
    )
    .join("");

  resourceTabsContainer.querySelectorAll(".resource-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      selectedType = tab.dataset.type;
      renderResourceTabs();
      renderQuestions();
    });
  });
}

function fillSelect(select, placeholder, values) {
  select.innerHTML = `<option value="">${placeholder}</option>`;
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  });
}

function updateExerciseSelect() {
  const course = courseSelect.value;
  const subject = subjectSelect.value;
  const chapter = chapterSelect.value;
  const exercises = getMathExercises(course, subject, chapter);

  if (exercises.length) {
    fillSelect(exerciseSelect, "Select exercise", exercises);
    exerciseSelect.disabled = false;
    exerciseBlock.style.display = "block";
  } else {
    resetSelect(exerciseSelect, "Select exercise");
    exerciseBlock.style.display = "none";
  }
}

function setActiveStep(stepNumber) {
  steps.forEach((step) => {
    step.classList.toggle("active", Number(step.dataset.step) === stepNumber);
  });
}

function refreshChapterButtons() {
  renderChapterButtons();
  const selectedChapter = chapterSelect.value;
  if (selectedChapter) {
    const chapterButton = chapterList.querySelector(`button[data-chapter="${selectedChapter}"]`);
    chapterList.querySelectorAll("button").forEach((button) => button.classList.remove("active"));
    if (chapterButton) {
      chapterButton.classList.add("active");
    }
  }
}


function getSelectedChapterData() {
  const course = courseSelect.value;
  const subject = subjectSelect.value;
  const chapter = chapterSelect.value;

  if (!course || !subject || !chapter) {
    return null;
  }

  return studyData[course][subject][chapter];
}

function updateSummary() {
  const course = courseSelect.value;
  const subject = subjectSelect.value;
  const chapter = chapterSelect.value;
  const exercise = getSelectedExercise();

  if (!course) {
    selectionSummary.textContent = "Select a class or exam to begin.";
    resourceTitle.textContent = "Your chapter resources will appear here";
    setActiveStep(1);
    return;
  }

  if (!subject) {
    selectionSummary.textContent = `${course} selected. Now choose a subject.`;
    resourceTitle.textContent = "Choose a subject";
    setActiveStep(2);
    return;
  }

  if (!chapter) {
    selectionSummary.textContent = `${course} > ${subject}. Now choose a chapter.`;
    resourceTitle.textContent = "Choose a chapter";
    setActiveStep(3);
    return;
  }

  selectionSummary.textContent = `${course} > ${subject} > ${chapter}`;
  resourceTitle.textContent =
    subject === "Mathematics" && selectedType === "exercise" && exercise
      ? `${chapter}: ${exercise}`
      : `${chapter}: ${resourceLabels[selectedType]}`;
  setActiveStep(4);
}

function renderEmptyState(message) {
  qaGrid.innerHTML = `
    <article class="empty-state">
      <h3>No resources loaded</h3>
      <p>${message}</p>
    </article>
  `;
}

function renderQuestions() {
  const chapterData = getSelectedChapterData();
  updateSummary();

  if (!chapterData) {
    renderEmptyState("Complete class/exam, subject, and chapter selection first.");
    return;
  }

  const exercise = getSelectedExercise();

  if (selectedType === "custom") {
    const section = sectionInput.value.trim();
    const key = makeCustomQuestionKey(courseSelect.value, subjectSelect.value, chapterSelect.value, section);
    const questions = getCustomQuestions(key);

    if (!questions.length) {
      renderEmptyState(
        section
          ? `No custom questions found for ${chapterSelect.value} › ${section}. Add one below.`
          : `No custom chapter questions found. Enter a section/topic or leave it blank, then add your question.`
      );
      return;
    }

    qaGrid.innerHTML = questions
      .map(
        (item, index) => `
          <article>
            <span>${resourceLabels[selectedType]} ${index + 1}</span>
            ${item.section ? `<p><strong>Section:</strong> ${item.section}</p>` : ""}
            <h3>${item.q}</h3>
            <p>${item.a}</p>
          </article>
        `
      )
      .join("");
    return;
  }

  const questions = chapterData[selectedType] || [];
  if (subjectSelect.value === "Mathematics" && selectedType === "exercise") {
    if (!exercise) {
      renderEmptyState("Choose a Maths exercise first, for example Exercise 3.2.");
      return;
    }

    const exerciseQuestions = makeExerciseQuestions(
      courseSelect.value,
      subjectSelect.value,
      chapterSelect.value,
      exercise
    );

    if (!exerciseQuestions.length) {
      renderEmptyState(
        `Exact verified Q/A for ${exercise} has not been added yet. Open the official NCERT textbook from the source section, then add approved original answers in verifiedExerciseQA inside script.js.`
      );
      updateSummary();
      return;
    }

    qaGrid.innerHTML = exerciseQuestions
      .map(
        (item, index) => `
          <article>
            <span>${exercise} - Answer ${index + 1}</span>
            <h3>${item.q}</h3>
            <p>${item.a}</p>
          </article>
        `
      )
      .join("");
    updateSummary();
    return;
  }

  if (!questions.length) {
    renderEmptyState(
      `No NCERT questions are available for ${chapterSelect.value} (${resourceLabels[selectedType]}). Add the chapter's NCERT Q/A to ncertQuestionBank in script.js.`
    );
    return;
  }

  qaGrid.innerHTML = questions
    .map(
      (item, index) => `
        <article>
          <span>${resourceLabels[selectedType]} ${index + 1}</span>
          <h3>${item.q}</h3>
          <p>${item.a}</p>
        </article>
      `
    )
    .join("");
}

function resetSelect(select, placeholder) {
  select.innerHTML = `<option value="">${placeholder}</option>`;
  select.disabled = true;
}

function initializeCourses() {
  fillSelect(courseSelect, "Select class or exam", Object.keys(studyData));
}

courseSelect.addEventListener("change", () => {
  const course = courseSelect.value;
  resetSelect(subjectSelect, "Select subject");
  resetSelect(chapterSelect, "Select chapter");
  resetSelect(exerciseSelect, "Select exercise");
  selectedType = "textbookQA";

  if (course) {
    fillSelect(subjectSelect, "Select subject", Object.keys(studyData[course]));
    subjectSelect.disabled = false;
  }

  renderResourceTabs();
  renderChapterButtons();
  renderQuestions();
});

subjectSelect.addEventListener("change", () => {
  const course = courseSelect.value;
  const subject = subjectSelect.value;
  resetSelect(chapterSelect, "Select chapter");
  resetSelect(exerciseSelect, "Select exercise");
  selectedType = getResourceTypes(subject)[0];

  if (course && subject) {
    fillSelect(chapterSelect, "Select chapter", Object.keys(studyData[course][subject]));
    chapterSelect.disabled = false;
  }

  renderResourceTabs();
  renderChapterButtons();
  renderQuestions();
});

chapterSelect.addEventListener("change", () => {
  resetSelect(exerciseSelect, "Select exercise");
  updateExerciseSelect();
  refreshChapterButtons();
  renderQuestions();
});

sectionInput.addEventListener("input", renderQuestions);
exerciseSelect.addEventListener("change", renderQuestions);

addQuestionButton.addEventListener("click", (event) => {
  event.preventDefault();

  const course = courseSelect.value;
  const subject = subjectSelect.value;
  const chapter = chapterSelect.value;
  const section = sectionInput.value.trim();
  const question = customQuestionInput.value.trim();
  const answer = customAnswerInput.value.trim();

  if (!course || !subject || !chapter) {
    addQuestionMessage.textContent = "Please choose class/exam, subject, and chapter first.";
    addQuestionMessage.style.color = "var(--coral)";
    return;
  }

  if (!question || !answer) {
    addQuestionMessage.textContent = "Enter both a question and an answer.";
    addQuestionMessage.style.color = "var(--coral)";
    return;
  }

  addCustomQuestion(course, subject, chapter, section, question, answer);
  addQuestionMessage.textContent = `Question added for ${chapter}${section ? ` › ${section}` : ""}.`;
  addQuestionMessage.style.color = "var(--green)";
  customQuestionInput.value = "";
  customAnswerInput.value = "";
  if (selectedType === "custom") {
    renderQuestions();
  }
});

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

initializeCourses();
renderResourceTabs();
renderChapterButtons();
updateExerciseSelect();
renderQuestions();
