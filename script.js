const interestButtons = document.querySelectorAll(".interest-button");
const exploreButton = document.querySelector(".explore-button");
const results = document.querySelector("#results");


// ==========================================
// INTEREST LABELS
// ==========================================

const interestLabels = {
  problems: "🧩 I like solving problems.",
  data: "📊 I like working with data.",
  technology: "💻 I like technology.",
  helping: "🧑‍🤝‍🧑 I like helping people.",
  community: "🌎 I care about improving communities.",
  research: "🔬 I like research.",
  organizing: "📋 I like organizing projects and systems."
};


// ==========================================
// PROGRAM INFORMATION
// ==========================================

const programs = {

  healthSciences: {
    name: "B.I.S. in Health Sciences",
    icon: "🩺",
    description:
      "A Health Sciences degree can help students build a foundation for health-related careers and prepare for further professional education in areas such as physical therapy and occupational therapy.",
    url:
      "https://admissions.gsu.edu/program/health-sciences-bis/"
  },

  healthInformatics: {
    name: "B.I.S. in Health Informatics",
    icon: "💻",
    description:
      "Health Informatics combines healthcare, information technology, data management and analytics, privacy and security, and project management.",
    url:
      "https://www.gsu.edu/program/health-informatics-bis/"
  }

};


// ==========================================
// CAREER LIBRARY
// ==========================================

const careers = [

  {
    name: "Community Health Consultant",
    interests: ["problems", "helping", "community", "organizing"],
    program: "healthSciences",
    description:
      "Identifies and addresses health concerns in a community, develops and implements programs, educates others, and connects resources while working with community leaders, healthcare providers, and government."
  },

  {
    name: "Community Health Education Coordinator",
    interests: ["helping", "community", "organizing"],
    program: "healthSciences",
    description:
      "Plans, develops, and manages educational programs and outreach activities while working with organizations, schools, and residents. May coordinate workshops, recruitment, promotion, and evaluation."
  },

  {
    name: "Health Coach",
    interests: ["helping", "organizing"],
    program: "healthSciences",
    description:
      "Helps clients create personalized plans to improve their physical health, including fitness, nutrition, and habits, while supporting their goals and actions."
  },

  {
    name: "Health Educator",
    interests: ["helping", "community", "research", "organizing"],
    program: "healthSciences",
    description:
      "Informs people about health and wellness, connects people with resources, teaches workshops, collects community health data, assists with enrollment in public health programs, assesses training needs, and plans health education programs."
  },

  {
    name: "Health Policy Analyst",
    interests: ["problems", "data", "technology", "community", "research"],
    program: "healthSciences",
    description:
      "Examines and evaluates policies governing healthcare delivery and scope, uses evidence to recommend changes, supports compliance with laws and regulations, and helps develop policies related to access, affordability, and quality."
  },

  {
    name: "Health Promotion Specialist",
    interests: ["helping", "community", "organizing"],
    program: "healthSciences",
    description:
      "Works to improve health and well-being through education, policy development, and community mobilization while addressing underlying causes of health concerns."
  },

  {
    name: "Health Services Coordinator",
    interests: ["helping", "community", "organizing"],
    program: "healthSciences",
    description:
      "Connects patients, providers, and community resources while coordinating care and services, communication, education, advocacy, and access."
  },

  {
    name: "Human Services Specialist",
    interests: ["helping", "community", "organizing"],
    program: "healthSciences",
    description:
      "Assists people experiencing emotional, financial, mental, physical, or social problems through peer counseling, referrals, accompaniment, and help accessing social programs."
  },

  {
    name: "Patient Advocate",
    interests: ["helping", "problems", "organizing"],
    program: "healthSciences",
    description:
      "Assists patients with illness or injury with insurance and treatment needs, reviews claims and documents, communicates with providers and insurance companies, and helps identify alternative options."
  },

  {
    name: "Physical Therapy / Occupational Therapy Aide",
    interests: ["helping", "organizing"],
    program: "healthSciences",
    description:
      "Prepares materials and equipment and performs clerical tasks such as scheduling, answering phones, managing supplies, and handling insurance paperwork."
  },

  {
    name: "Rehabilitation Specialist",
    interests: ["helping", "organizing", "problems"],
    program: "healthSciences",
    description:
      "Assists people with mental or physical disabilities in re-acclimating to independent living, coordinates client care, assesses needs and eligibility, and teaches practical skills."
  },

  {
    name: "Researcher",
    interests: ["problems", "data", "research"],
    program: "healthSciences",
    description:
      "Recognizes patterns, locates and analyzes information, gathers data through sources such as articles, surveys, and interviews, plans research methods, analyzes results, interprets findings, and makes recommendations."
  },

  {
    name: "Vocational Rehabilitation Counselor",
    interests: ["helping", "problems", "organizing"],
    program: "healthSciences",
    description:
      "Supports people with physical, emotional, or developmental challenges toward sustainable employment by assessing needs, developing plans, coordinating resources, advocating for workplace accommodations, and providing support."
  },

  {
    name: "Data Analyst",
    interests: ["problems", "data", "technology", "organizing"],
    program: "healthInformatics",
    description:
      "Uses data to identify patterns, answer questions, create reports, and help organizations make informed decisions. In healthcare, analysts may work with clinical, operational, financial, or population health data."
  },

  {
    name: "Clinical Systems Analyst",
    interests: ["problems", "data", "technology", "organizing"],
    program: "healthInformatics",
    description:
      "Helps healthcare organizations implement, maintain, and improve information systems used by clinical teams. The work may include analyzing workflows, investigating system problems, supporting users, and communicating between clinical and technical teams."
  },

  {
    name: "Business Analyst",
    interests: ["problems", "data", "technology", "organizing"],
    program: "healthInformatics",
    description:
      "Analyzes processes, requirements, and data to help organizations improve systems and solve business problems. In healthcare, business analysts may work with clinical, administrative, or technology teams."
  },

  {
    name: "Application Analyst",
    interests: ["problems", "data", "technology", "organizing"],
    program: "healthInformatics",
    description:
      "Supports healthcare software applications by analyzing workflows, configuring systems, testing changes, and helping users solve problems."
  },

  {
    name: "Service / Help Desk Analyst",
    interests: ["technology", "problems", "helping"],
    program: "healthInformatics",
    description:
      "Provides first-line technical support, helping users troubleshoot technology problems and access the systems they need."
  }

];


// ==========================================
// INTEREST BUTTONS
// ==========================================

interestButtons.forEach(function(button) {

  button.addEventListener("click", function() {

    this.classList.toggle("selected");

  });

});


// ==========================================
// GET SELECTED INTERESTS
// ==========================================

function getSelectedCategories() {

  const selectedCategories = [];

  interestButtons.forEach(function(button) {

    if (button.classList.contains("selected")) {

      if (button.textContent.includes("solving problems")) {
        selectedCategories.push("problems");
      }

      if (button.textContent.includes("working with data")) {
        selectedCategories.push("data");
      }

      if (button.textContent.includes("technology")) {
        selectedCategories.push("technology");
      }

      if (button.textContent.includes("helping people")) {
        selectedCategories.push("helping");
      }

      if (button.textContent.includes("improving communities")) {
        selectedCategories.push("community");
      }

      if (button.textContent.includes("research")) {
        selectedCategories.push("research");
      }

      if (button.textContent.includes("organizing")) {
        selectedCategories.push("organizing");
      }

    }

  });

  return selectedCategories;

}


// ==========================================
// EXPLORE CAREERS
// ==========================================

exploreButton.addEventListener("click", function() {

  const selectedCategories = getSelectedCategories();


  if (selectedCategories.length === 0) {

    results.innerHTML = `
      <h2>Pick at least one interest first!</h2>

      <p>
        You can select as many interests as you like.
      </p>
    `;

    return;

  }


  // Score every career
  const matchingCareers = careers

    .map(function(career) {

      let score = 0;

      selectedCategories.forEach(function(category) {

        if (career.interests.includes(category)) {
          score++;
        }

      });

      return {
        ...career,
        score: score
      };

    })

    .filter(function(career) {

      return career.score > 0;

    })

    .sort(function(a, b) {

      return b.score - a.score;

    });


  // ==========================================
  // DISPLAY RESULTS
  // ==========================================

  const initialCareers = matchingCareers.slice(0, 5);
  const remainingCareers = matchingCareers.slice(5);

  results.innerHTML = `

    <h2>Careers to Explore</h2>

    <p>
      Based on the interests you selected, here are some Health Sciences
      careers you might want to explore.
    </p>


    <div id="initial-careers">

      ${initialCareers.map(function(career) {

        return `
          <div
            class="career-card"
            data-career="${career.name}"
          >

            <h3>${career.name}</h3>

            <p class="match-label">
              Matches ${career.score} of your selected interests
            </p>

            <p>
              ${career.description}
            </p>

          </div>
        `;

      }).join("")}

    </div>


    ${remainingCareers.length > 0 ? `
      <button
        type="button"
        id="show-more-careers"
        class="explore-button"
      >
        + Show more career matches
      </button>
    ` : ""}


    <!-- ==========================================
         CONTINUED EDUCATION
         ========================================== -->

    <div class="continued-education">

      <h2>🎓 Health Sciences Continued Education</h2>

      <p>
        Some Health Sciences career paths involve additional professional
        education after undergraduate study. Explore these pathways to learn
        where your interests could take you next.
      </p>

      <div class="education-grid">


        <div class="education-card">

          <h3>Physical Therapy</h3>

          <p>
            <strong>Further education:</strong>
            Doctor of Physical Therapy (DPT)
          </p>

          <p>
            Physical therapists complete a professional doctoral program
            before entering practice.
          </p>

          <a
            class="education-link"
            href="https://www.apta.org/your-career/careers-in-physical-therapy/becoming-a-pt"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore the PT pathway →
          </a>

        </div>


        <div class="education-card">

          <h3>Occupational Therapy</h3>

          <p>
            <strong>Further education:</strong>
            Master's or doctoral degree in Occupational Therapy
          </p>

          <p>
            Occupational therapists complete an accredited professional
            OT program before entering practice.
          </p>

          <a
            class="education-link"
            href="https://www.aota.org/career/become-an-ot-ota"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore the OT pathway →
          </a>

        </div>


        <div class="education-card">

          <h3>Pharmacy</h3>

          <p>
            <strong>Further education:</strong>
            Doctor of Pharmacy (PharmD)
          </p>

          <p>
            Pharmacists complete a professional PharmD program and meet
            licensure requirements.
          </p>

          <a
            class="education-link"
            href="https://www.aacp.org/resource/admissions"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore the pharmacy pathway →
          </a>

        </div>


        <div class="education-card">

          <h3>Physician Assistant</h3>

          <p>
            <strong>Further education:</strong>
            Graduate PA program
          </p>

          <p>
            Physician assistants complete an accredited graduate-level
            physician assistant program before entering practice.
          </p>

          <a
            class="education-link"
            href="https://paeaonline.org/our-programs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore PA programs →
          </a>

        </div>


        <div class="education-card">

          <h3>Medicine</h3>

          <p>
            <strong>Further education:</strong>
            Medical school (MD or DO)
          </p>

          <p>
            Physicians complete medical school followed by additional
            clinical training.
          </p>

          <a
            class="education-link"
            href="https://students-residents.aamc.org/apply-medical-school"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore medical school →
          </a>

        </div>


      </div>

    </div>

  `;


  // ==========================================
  // INITIAL CAREER CARDS
  // ==========================================

  makeCareerCardsClickable();


  // ==========================================
  // SHOW MORE CAREERS
  // ==========================================

  const showMoreButton =
    document.querySelector("#show-more-careers");

  if (showMoreButton) {

    showMoreButton.addEventListener("click", function() {

      const remainingContainer =
        document.createElement("div");

      remainingContainer.id = "remaining-careers";

      remainingContainer.innerHTML =
        remainingCareers.map(function(career) {

          return `
            <div
              class="career-card"
              data-career="${career.name}"
            >

              <h3>${career.name}</h3>

              <p class="match-label">
                Matches ${career.score} of your selected interests
              </p>

              <p>
                ${career.description}
              </p>

            </div>
          `;

        }).join("");

      const continuedEducation =
        document.querySelector(".continued-education");

      results.insertBefore(
        remainingContainer,
        continuedEducation
      );

      // Make only the newly revealed cards clickable
      const newCareerCards =
        remainingContainer.querySelectorAll(".career-card");

      newCareerCards.forEach(function(card) {

        card.addEventListener("click", function() {

          const careerName =
            this.dataset.career;

          const career =
            careers.find(function(career) {

              return career.name === careerName;

            });

          showCareerDetails(career);

        });

      });

      showMoreButton.remove();

    });

  }

});

// ==========================================
// MAKE CAREER CARDS CLICKABLE
// ==========================================

function makeCareerCardsClickable() {

  const careerCards = document.querySelectorAll(".career-card");

  careerCards.forEach(function(card) {

    card.addEventListener("click", function() {

      const careerName = this.dataset.career;

      const career = careers.find(function(career) {

        return career.name === careerName;

      });

      showCareerDetails(career);

    });

  });

}


// ==========================================
// SHOW CAREER DETAILS
// ==========================================

function showCareerDetails(career) {

  const selectedCategories = getSelectedCategories();


  // Find which selected interests match this career
  const matchingInterests = career.interests.filter(function(interest) {

    return selectedCategories.includes(interest);

  });


  // ==========================================
  // FIND RELATED CAREERS
  // ==========================================

  const relatedCareers = careers

    .filter(function(otherCareer) {

      return otherCareer.name !== career.name;

    })

    .map(function(otherCareer) {

      let sharedInterests = 0;

      career.interests.forEach(function(interest) {

        if (otherCareer.interests.includes(interest)) {

          sharedInterests++;

        }

      });

      return {
        ...otherCareer,
        sharedInterests: sharedInterests
      };

    })

    .filter(function(otherCareer) {

      return otherCareer.sharedInterests > 0;

    })

    .sort(function(a, b) {

      return b.sharedInterests - a.sharedInterests;

    })

    .slice(0, 3);


  // ==========================================
  // PROGRAM TO CONSIDER
  // ==========================================

  const program = career.program
    ? programs[career.program]
    : null;


  // ==========================================
  // DISPLAY CAREER DETAILS
  // ==========================================

  results.innerHTML = `

    <div class="career-detail">

      <button type="button" class="back-button">
        ← Back to Career Matches
      </button>


      <h2>${career.name}</h2>


      <h3>What do they do?</h3>

      <p>
        ${career.description}
      </p>


      <h3>You might like this career if...</h3>

      <ul>

        ${matchingInterests.map(function(interest) {

          return `<li>${interestLabels[interest]}</li>`;

        }).join("")}

      </ul>


      ${program ? `

        <div class="program-card">

          <h3>
            ${program.icon} Program to Consider
          </h3>

          <h4>
            ${program.name}
          </h4>

          <p>
            ${program.description}
          </p>

          <a
            class="program-link"
            href="${program.url}"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore the program at Georgia State →
          </a>

        </div>

      ` : ""}


      <h3>You might also explore</h3>


      <div class="related-careers">

        ${relatedCareers.map(function(relatedCareer) {

          return `
            <div
              class="related-career-card"
              data-career="${relatedCareer.name}"
            >

              <strong>
                ${relatedCareer.name}
              </strong>

              <p>
                Shares ${relatedCareer.sharedInterests}
                interest${relatedCareer.sharedInterests === 1 ? "" : "s"}
                with this career.
              </p>

            </div>
          `;

        }).join("")}

      </div>


    </div>

  `;


  // ==========================================
  // BACK BUTTON
  // ==========================================

  const backButton = document.querySelector(".back-button");

  backButton.addEventListener("click", function() {

    exploreButton.click();

  });


  // ==========================================
  // RELATED CAREER CARDS
  // ==========================================

  const relatedCareerCards =
    document.querySelectorAll(".related-career-card");


  relatedCareerCards.forEach(function(card) {

    card.addEventListener("click", function() {

      const careerName = this.dataset.career;

      const relatedCareer = careers.find(function(career) {

        return career.name === careerName;

      });

      showCareerDetails(relatedCareer);

    });

  });

}
