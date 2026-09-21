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
// CAREER LIBRARY
// ==========================================

const careers = [

  {
    name: "Community Health Consultant",
    interests: ["problems", "helping", "community", "organizing"],
    description:
      "Identifies and addresses health concerns in a community, develops and implements programs, educates others, and connects resources while working with community leaders, healthcare providers, and government."
  },

  {
    name: "Community Health Education Coordinator",
    interests: ["helping", "community", "organizing"],
    description:
      "Plans, develops, and manages educational programs and outreach activities while working with organizations, schools, and residents. May coordinate workshops, recruitment, promotion, and evaluation."
  },

  {
    name: "Health Coach",
    interests: ["helping", "organizing"],
    description:
      "Helps clients create personalized plans to improve their physical health, including fitness, nutrition, and habits, while supporting their goals and actions."
  },

  {
    name: "Health Educator",
    interests: ["helping", "community", "research", "organizing"],
    description:
      "Informs people about health and wellness, connects people with resources, teaches workshops, collects community health data, assists with enrollment in public health programs, assesses training needs, and plans health education programs."
  },

  {
    name: "Health Policy Analyst",
    interests: ["problems", "data", "technology", "community", "research"],
    description:
      "Examines and evaluates policies governing healthcare delivery and scope, uses evidence to recommend changes, supports compliance with laws and regulations, and helps develop policies related to access, affordability, and quality."
  },

  {
    name: "Health Promotion Specialist",
    interests: ["helping", "community", "organizing"],
    description:
      "Works to improve health and well-being through education, policy development, and community mobilization while addressing underlying causes of health concerns."
  },

  {
    name: "Health Services Coordinator",
    interests: ["helping", "community", "organizing"],
    description:
      "Connects patients, providers, and community resources while coordinating care and services, communication, education, advocacy, and access."
  },

  {
    name: "Human Services Specialist",
    interests: ["helping", "community", "organizing"],
    description:
      "Assists people experiencing emotional, financial, mental, physical, or social problems through peer counseling, referrals, accompaniment, and help accessing social programs."
  },

  {
    name: "Patient Advocate",
    interests: ["helping", "problems", "organizing"],
    description:
      "Assists patients with illness or injury with insurance and treatment needs, reviews claims and documents, communicates with providers and insurance companies, and helps identify alternative options."
  },

  {
    name: "Physical Therapy / Occupational Therapy Aide",
    interests: ["helping", "organizing"],
    description:
      "Prepares materials and equipment and performs clerical tasks such as scheduling, answering phones, managing supplies, and handling insurance paperwork."
  },

  {
    name: "Rehabilitation Specialist",
    interests: ["helping", "organizing", "problems"],
    description:
      "Assists people with mental or physical disabilities in re-acclimating to independent living, coordinates client care, assesses needs and eligibility, and teaches practical skills."
  },

  {
    name: "Researcher",
    interests: ["problems", "data", "research"],
    description:
      "Recognizes patterns, locates and analyzes information, gathers data through sources such as articles, surveys, and interviews, plans research methods, analyzes results, interprets findings, and makes recommendations."
  },

  {
    name: "Vocational Rehabilitation Counselor",
    interests: ["helping", "problems", "organizing"],
    description:
      "Supports people with physical, emotional, or developmental challenges toward sustainable employment by assessing needs, developing plans, coordinating resources, advocating for workplace accommodations, and providing support."
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


  // Display the results
  results.innerHTML = `
    <h2>Careers to Explore</h2>

    <p>
      Based on the interests you selected, here are some Health Sciences
      careers you might want to explore.
    </p>

    ${matchingCareers.map(function(career) {

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

  `;


  makeCareerCardsClickable();

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


  // Find related careers
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


  // Display career details
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


  // Back button
  const backButton = document.querySelector(".back-button");

  backButton.addEventListener("click", function() {

    exploreButton.click();

  });


  // Related career cards
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
