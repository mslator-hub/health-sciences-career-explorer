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
    description: "Helps organizations and communities identify health needs, develop programs, and connect people with resources.",
    details: "Community health consultants work with organizations, programs, and communities to identify health needs and improve services. The work can involve research, planning, communication, and helping organizations respond to community needs."
},

{
    name: "Community Health Education Coordinator",
    interests: ["helping", "community", "organizing"],
    description: "Coordinates health education programs and activities that help communities make informed health decisions.",
    details: "Community health education coordinators organize educational programs, events, and outreach activities. They may work with community organizations, schools, healthcare organizations, or public health programs."
},

{
    name: "Health Coach",
    interests: ["helping", "organizing"],
    description: "Works with people to support healthy behaviors, goals, and lifestyle changes.",
    details: "Health coaches help people identify goals, develop strategies, and make sustainable changes related to health and wellness. Communication, organization, and relationship-building are important parts of the work."
},

{
    name: "Health Educator",
    interests: ["helping", "community", "research", "organizing"],
    description: "Creates and delivers health education programs that help individuals and communities understand health information.",
    details: "Health educators develop educational materials, programs, and activities designed to improve health knowledge and behaviors. They may work in healthcare organizations, community programs, schools, government agencies, or nonprofit organizations."
},

{
    name: "Health Policy Analyst",
    interests: ["problems", "data", "technology", "community", "research"],
    description: "Researches health policies and uses evidence and data to help organizations understand healthcare issues and potential solutions.",
    details: "Health policy analysts research legislation, regulations, healthcare systems, and public health issues. They may analyze data, prepare reports, and communicate findings to organizations and decision-makers."
},

{
    name: "Health Promotion Specialist",
    interests: ["helping", "community", "organizing"],
    description: "Develops programs and activities designed to improve health and wellness in individuals and communities.",
    details: "Health promotion specialists plan and evaluate programs that encourage healthier behaviors and improve community health. Their work may include education, outreach, program coordination, and evaluation."
},

{
    name: "Health Services Coordinator",
    interests: ["helping", "community", "organizing"],
    description: "Coordinates healthcare services, programs, or resources to help people navigate systems and receive appropriate support.",
    details: "Health services coordinators help organize healthcare programs and services. They may coordinate schedules, resources, referrals, communication, and other administrative or patient-support activities."
},

{
    name: "Human Services Specialist",
    interests: ["helping", "community", "organizing"],
    description: "Helps individuals and families connect with social, health, and community resources.",
    details: "Human services specialists work with people and organizations to connect individuals with services and resources. The work often involves communication, organization, problem-solving, and knowledge of community programs."
},

{
    name: "Patient Advocate",
    interests: ["helping", "problems", "organizing"],
    description: "Helps patients understand healthcare systems, communicate their needs, and navigate available services.",
    details: "Patient advocates help patients and families navigate healthcare systems and communicate with healthcare providers. They may assist with resources, communication, documentation, and resolving barriers to care."
},

{
    name: "Physical Therapy / Occupational Therapy Aide",
    interests: ["helping", "organizing"],
    description: "Supports physical or occupational therapy teams by helping prepare treatment areas and assisting with routine patient-related tasks.",
    details: "Therapy aides support physical or occupational therapy practices with administrative, equipment, and patient-support tasks. This can provide exposure to rehabilitation environments and patient care."
},

{
    name: "Rehabilitation Specialist",
    interests: ["helping", "organizing", "problems"],
    description: "Supports people working toward greater independence and participation following illness, injury, or disability.",
    details: "Rehabilitation specialists may work with individuals facing physical, developmental, or other barriers to participation and independence. The work can involve assessment, support planning, coordination, and problem-solving."
},

{
    name: "Researcher",
    interests: ["problems", "data", "research"],
    description: "Uses research methods, evidence, and data to investigate questions and contribute to knowledge about health and human behavior.",
    details: "Health researchers investigate questions using scientific and analytical methods. Depending on the field, researchers may collect and analyze data, conduct studies, evaluate programs, or communicate findings."
},

{
    name: "Vocational Rehabilitation Counselor",
    interests: ["helping", "problems", "organizing"],
    description: "Helps people with disabilities explore employment, education, and independent-living goals.",
    details: "Vocational rehabilitation counselors help individuals identify goals and overcome barriers related to employment, education, and independence. The work involves assessment, counseling, planning, and coordination."
},

{
    name: "Data Analyst",
    interests: ["problems", "data", "technology", "organizing"],
    description: "Uses data to identify patterns, answer questions, create reports, and help organizations make informed decisions.",
    details: "Data analysts collect, organize, examine, and communicate information to help organizations understand what is happening and make decisions. In healthcare, analysts may work with clinical, operational, financial, or population health data."
},

{
    name: "Clinical Systems Analyst",
    interests: ["problems", "data", "technology", "organizing"],
    description: "Helps healthcare organizations implement, maintain, and improve information systems used by clinical teams.",
    details: "Clinical systems analysts work at the intersection of healthcare and information technology. They may help configure and maintain healthcare information systems, investigate system problems, analyze workflows, support users, and communicate between clinical staff and technical teams."
},

{
    name: "Business Analyst",
    interests: ["problems", "data", "technology", "organizing"],
    description: "Analyzes processes, requirements, and data to help organizations improve systems and solve business problems.",
    details: "Business analysts gather requirements, document processes and data flows, analyze information, and help organizations improve systems and workflows. In healthcare, they may work with clinical, administrative, or technology teams."
},

{
    name: "Application Analyst",
    interests: ["problems", "data", "technology", "organizing"],
    description: "Supports healthcare software applications by analyzing workflows, configuring systems, testing changes, and helping users solve problems.",
    details: "Application analysts work between healthcare operations and information technology. They may support software applications, analyze workflows, configure and test systems, investigate issues, and help users make effective use of healthcare technology."
},

{
    name: "Service / Help Desk Analyst",
    interests: ["technology", "problems", "helping"],
    description: "Provides first-line technical support, helping users troubleshoot technology problems and access the systems they need.",
    details: "Service and help desk analysts respond to technical support requests, troubleshoot common problems, manage access issues, document solutions, and escalate more complex problems. In healthcare settings, they may support systems used by clinical and administrative staff."
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
