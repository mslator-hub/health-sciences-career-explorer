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
// BLS-VERIFIED CAREER DATA
// ==========================================

const careers = [

  {
    name: "Community Health Workers",
    interests: ["helping", "community", "organizing"],
    program: "healthSciences",

    description:
      "Promote wellness, help people adopt healthy behaviors, connect people with health resources, and support community health programs.",

    medianPay: "$51,850",
    growth: "13%",
    annualOpenings: "~7,000",

    education: null,

    blsTitle: "Community Health Workers",
    blsUrl:
      "https://www.bls.gov/ooh/community-and-social-service/community-health-workers.htm"
  },


  {
    name: "Health Education Specialists",
    interests: ["helping", "community", "research", "organizing"],
    program: "healthSciences",

    description:
      "Develop programs and materials that teach people about conditions affecting health and well-being and help communities make informed health decisions.",

    medianPay: "$64,070",
    growth: "6%",
    annualOpenings: "~6,900",

    education: "Bachelor's degree",

    blsTitle: "Health Education Specialists",
    blsUrl:
      "https://www.bls.gov/ooh/community-and-social-service/health-educators.htm"
  },


  {
    name: "Fitness Trainers and Instructors",
    interests: ["helping", "organizing"],
    program: "healthSciences",

    description:
      "Lead, instruct, and motivate individuals or groups in exercise activities and help people work toward physical fitness goals.",

    medianPay: "$47,160",
    growth: "7%",
    annualOpenings: "~68,000",

    education: null,

    blsTitle: "Fitness Trainers and Instructors",
    blsUrl:
      "https://www.bls.gov/ooh/personal-care-and-service/fitness-trainers-and-instructors.htm"
  },


  {
    name: "Social and Human Service Assistants",
    interests: ["helping", "community", "organizing"],
    program: "healthSciences",

    description:
      "Help people access services and resources and provide support in areas such as rehabilitation, social services, and community programs.",

    medianPay: "$45,930",
    growth: "7%",
    annualOpenings: "~48,900",

    education: null,

    blsTitle: "Social and Human Service Assistants",
    blsUrl:
      "https://www.bls.gov/ooh/community-and-social-service/social-and-human-service-assistants.htm"
  },


  {
    name: "Rehabilitation Counselors",
    interests: ["helping", "organizing", "problems"],
    program: "healthSciences",

    description:
      "Help people with disabilities manage the personal, social, and psychological effects of disabilities and work toward employment or independent living.",

    medianPay: "$46,850",
    growth: "2%",
    annualOpenings: "~8,200",

    education: "Master's degree typically",

    blsTitle: "Rehabilitation Counselors",
    blsUrl:
      "https://www.bls.gov/ooh/community-and-social-service/rehabilitation-counselors.htm"
  },


  {
    name: "Healthcare Social Workers",
    interests: ["helping", "community", "problems"],
    program: "healthSciences",

    description:
      "Help patients and families cope with illness, treatment, and changes in health or living circumstances and connect them with appropriate resources and services.",

    medianPay: "$67,880",
    growth: "8%",
    annualOpenings: "~16,500",

    education: "Bachelor's degree or master's degree",

    blsTitle: "Healthcare Social Workers",
    blsUrl:
      "https://www.bls.gov/ooh/community-and-social-service/social-workers.htm"
  },


  {
    name: "Physical Therapist Aides",
    interests: ["helping", "organizing"],
    program: "healthSciences",

    description:
      "Prepare treatment areas and equipment, assist physical therapists and physical therapist assistants, and perform administrative or support tasks.",

    medianPay: "$35,240",
    growth: "4%",
    annualOpenings: "~2,000",

    education: null,

    blsTitle: "Physical Therapist Aides",
    blsUrl:
      "https://www.bls.gov/ooh/healthcare/physical-therapist-assistants-and-aides.htm"
  },


  {
    name: "Occupational Therapy Aides",
    interests: ["helping", "organizing"],
    program: "healthSciences",

    description:
      "Prepare treatment areas and equipment, assist occupational therapy staff, and perform support and administrative tasks.",

    medianPay: "$39,160",
    growth: "4%",
    annualOpenings: "~200",

    education: null,

    blsTitle: "Occupational Therapy Aides",
    blsUrl:
      "https://www.bls.gov/ooh/healthcare/occupational-therapy-assistants-and-aides.htm"
  },


  {
    name: "Medical and Health Services Managers",
    interests: ["organizing", "problems", "helping", "community"],
    program: "healthSciences",

    description:
      "Plan, direct, and coordinate the business activities of healthcare providers, including operations, budgets, staffing, and organizational systems.",

    medianPay: "$123,860",
    growth: "24%",
    annualOpenings: "~62,300",

    education: "Bachelor's degree + related experience",

    blsTitle: "Medical and Health Services Managers",
    blsUrl:
      "https://www.bls.gov/ooh/management/medical-and-health-services-managers.htm"
  },


  {
    name: "Health Information Technologists and Medical Registrars",
    interests: ["data", "technology", "problems", "organizing"],
    program: "healthInformatics",

    description:
      "Advise organizations on computerized healthcare systems and analyze clinical data while helping maintain accurate, secure, and useful health information.",

    medianPay: "$68,020",
    growth: "16%",
    annualOpenings: "~3,000",

    education: "Additional education beyond high school",

    blsTitle: "Health Information Technologists and Medical Registrars",
    blsUrl:
      "https://www.bls.gov/ooh/healthcare/health-information-technologists-and-medical-registrars.htm"
  },


  {
    name: "Operations Research Analysts",
    interests: ["problems", "data", "research", "technology"],
    program: "healthInformatics",

    description:
      "Use mathematics, logic, data, and analytical methods to help organizations solve complex problems and make informed decisions.",

    medianPay: "$88,940",
    growth: "12%",
    annualOpenings: "~7,500",

    education: "Bachelor's degree",

    blsTitle: "Operations Research Analysts",
    blsUrl:
      "https://www.bls.gov/ooh/math/operations-research-analysts.htm"
  },


  {
    name: "Computer Systems Analysts",
    interests: ["problems", "data", "technology", "organizing"],
    program: "healthInformatics",

    description:
      "Study existing computer systems and design ways to improve their efficiency. Some systems analysts specialize in industry-specific systems, including healthcare.",

    medianPay: "$105,850",
    growth: "8%",
    annualOpenings: "~32,900",

    education: "Bachelor's degree",

    blsTitle: "Computer Systems Analysts",
    blsUrl:
      "https://www.bls.gov/ooh/computer-and-information-technology/computer-systems-analysts.htm"
  },


  {
    name: "Computer User Support Specialists",
    interests: ["technology", "problems", "helping"],
    program: "healthInformatics",

    description:
      "Analyze users' computer problems, diagnose causes, guide users through solutions, install or repair equipment and software, and provide technical support.",

    medianPay: "$61,860",
    growth: "-3%",
    annualOpenings: null,

    education: null,

    blsTitle: "Computer User Support Specialists",
    blsUrl:
      "https://www.bls.gov/ooh/computer-and-information-technology/computer-support-specialists.htm"
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
// CAREER SNAPSHOT HTML
// ==========================================

function getCareerSnapshot(career) {

  return `

    <div class="career-snapshot">

      <h3>Career Snapshot</h3>

      <div class="snapshot-grid">

        <div class="snapshot-item">
          <strong>Median pay</strong>
          <span>${career.medianPay}</span>
        </div>

        <div class="snapshot-item">
          <strong>Projected growth</strong>
          <span>${career.growth}</span>
        </div>

        ${
          career.annualOpenings
            ? `
              <div class="snapshot-item">
                <strong>Annual openings</strong>
                <span>${career.annualOpenings}</span>
              </div>
            `
            : ""
        }

        ${
          career.education
            ? `
              <div class="snapshot-item">
                <strong>Education</strong>
                <span>🎓 ${career.education}</span>
              </div>
            `
            : ""
        }

      </div>

      <p class="career-data-note">
        National BLS figures. Actual pay and opportunities vary by
        location, employer, experience, and specific position.
      </p>

      <p class="bls-source">

        <strong>BLS occupation:</strong>
        ${career.blsTitle}

        <br>

        <a
          class="education-link"
          href="${career.blsUrl}"
          target="_blank"
          rel="noopener noreferrer"
        >
          View this occupation at the U.S. Bureau of Labor Statistics →
        </a>

      </p>

    </div>

  `;

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


  // ==========================================
  // SCORE EVERY CAREER
  // ==========================================

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

            <div class="career-card-data">

              <span>
                <strong>Median pay:</strong>
                ${career.medianPay}
              </span>

              <span>
                <strong>Growth:</strong>
                ${career.growth}
              </span>

              ${
                career.annualOpenings
                  ? `
                    <span>
                      <strong>Annual openings:</strong>
                      ${career.annualOpenings}
                    </span>
                  `
                  : ""
              }

              ${
                career.education
                  ? `
                    <span>
                      🎓 ${career.education}
                    </span>
                  `
                  : ""
              }

            </div>

          </div>

        `;

      }).join("")}

    </div>


    ${
      remainingCareers.length > 0
        ? `
          <button
            type="button"
            id="show-more-careers"
            class="explore-button"
          >
            + Show more career matches
          </button>
        `
        : ""
    }


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


    <!-- ==========================================
         HIMSS CAREER EXPLORATION
         ========================================== -->

    <div class="continued-education">

      <h2>💻 Explore More Health Careers</h2>

      <p>
        Want to explore even more careers in health information and
        technology? Check out the HIMSS Healthcare Career Pathways tool.
      </p>

      <a
        class="education-link"
        href="https://www.himss.org/careers/career-pathways/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Explore HIMSS Career Pathways →
      </a>

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

              <div class="career-card-data">

                <span>
                  <strong>Median pay:</strong>
                  ${career.medianPay}
                </span>

                <span>
                  <strong>Growth:</strong>
                  ${career.growth}
                </span>

                ${
                  career.annualOpenings
                    ? `
                      <span>
                        <strong>Annual openings:</strong>
                        ${career.annualOpenings}
                      </span>
                    `
                    : ""
                }

                ${
                  career.education
                    ? `
                      <span>
                        🎓 ${career.education}
                      </span>
                    `
                    : ""
                }

              </div>

            </div>

          `;

        }).join("");


      const continuedEducation =
        document.querySelector(".continued-education");

      results.insertBefore(
        remainingContainer,
        continuedEducation
      );


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

  const careerCards =
    document.querySelectorAll(".career-card");

  careerCards.forEach(function(card) {

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

}


// ==========================================
// SHOW CAREER DETAILS
// ==========================================

function showCareerDetails(career) {

  const selectedCategories =
    getSelectedCategories();


  // ==========================================
  // FIND MATCHING INTERESTS
  // ==========================================

  const matchingInterests =
    career.interests.filter(function(interest) {

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


      ${getCareerSnapshot(career)}


      <h3>You might like this career if...</h3>

      <ul>

        ${matchingInterests.map(function(interest) {

          return `<li>${interestLabels[interest]}</li>`;

        }).join("")}

      </ul>


      ${
        program
          ? `

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

          `
          : ""
      }


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

  const backButton =
    document.querySelector(".back-button");

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

      const careerName =
        this.dataset.career;

      const relatedCareer =
        careers.find(function(career) {

          return career.name === careerName;

        });

      showCareerDetails(relatedCareer);

    });

  });

}
