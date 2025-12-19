//   "use strict";
// Dynamic Programs Loader
document.addEventListener('DOMContentLoaded', async () => {
   if (!window.location.pathname.includes('programs.html')) {
    return;
  }
  const preloader = document.querySelector('#preloader');

  try {
    // 1. Get the program slug from URL: ?school=cosmetology
    const params = new URLSearchParams(window.location.search);
    let slug = params.get('school');
    // console.log(`This is what you use to populate ${slug} `);

    // Default to IT if no slug
    if (!slug) {
      slug = 'information-technology';
      // Update URL without reload
      history.replaceState(null, '', `?school=${slug}`);
    }

    // 2. Fetch the big JSON
    const response = await fetch('data/programs.json');
    if (!response.ok) throw new Error('Failed to load programs data');
    const data = await response.json();

    // 3. Find the matching program
    const program = data.programs.find(p => p.program_slug === slug);
    if (!program) throw new Error('Program not found');

    // ===== NOW POPULATE EVERYTHING =====

    // Title & Header
    document.querySelector('.program-eyebrow').textContent = program.eyebrow;
    document.getElementById('program-title').textContent = program.program_name;
    document.querySelector('.program-subtitle').textContent = program.subtitle;
    document.getElementById('program-breadcrumb').textContent = program.program_name;

    // Hero Intro
    document.querySelector('.hero-content h2').textContent = program.hero.title;
    document.querySelector('.hero-content .lead').textContent = program.hero.description;

    // Badges
    const badgesContainer = document.querySelector('.micro-info');
    badgesContainer.innerHTML = ''; // clear
    program.hero.badges.forEach(badge => {
      const span = document.createElement('span');
      span.className = 'badge bg-primary text-white';
      span.textContent = badge;
      badgesContainer.appendChild(span);
    });

    // Course Highlights Grid (Top 3 cards)
    const highlightsGrid = document.getElementById('course-highlights-grid');
    highlightsGrid.innerHTML = '';
    program.course_highlights.forEach(course => {
      highlightsGrid.innerHTML += `
        <div class="col-lg-4 col-md-6">
          <div class="course-card">
            <div class="course-image">
              <img src="${course.image}" alt="${course.title}" class="img-fluid">
              <div class="course-overlay">
                <div class="course-info">
                  <h4>${course.title}</h4>
                  <span>Level: ${course.level}</span>
                  <span>Duration: ${course.duration}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    });

    // Accordion Background
    document.querySelector('.courses-accordion').style.backgroundImage = `url('${program.accordion_background}')`;

    // Accordion Intro
    document.querySelector('.courses-accordion h3').textContent = program.accordion_intro.title;
    document.querySelector('.courses-accordion p.text-muted').textContent = program.accordion_intro.description;

    // Full Accordion Courses
    const accordion = document.getElementById('coursesAccordion');
    accordion.innerHTML = '';
    program.courses.forEach((course, index) => {
      const expanded = course.expanded ? 'show' : '';
      const collapsed = course.expanded ? '' : 'collapsed';
      const ariaExpanded = course.expanded ? 'true' : 'false';

      accordion.innerHTML += `
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button ${collapsed}" type="button"
                    data-bs-toggle="collapse" data-bs-target="#${course.id}"
                    aria-expanded="${ariaExpanded}">
              ${course.title}
            </button>
          </h2>
          <div id="${course.id}" class="accordion-collapse collapse ${expanded}">
            <div class="accordion-body">
              <ul>
                ${course.details.map(detail => `<li>${detail}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
      `;
    });

    // Gallery
    document.getElementById('gallery-main-img').src = program.gallery.main;
    const thumbsContainer = document.getElementById('gallery-thumbs');
    thumbsContainer.innerHTML = '';
    program.gallery.thumbs.forEach(thumb => {
      thumbsContainer.innerHTML += `
        <div class="thumbnail-item">
          <img src="${thumb}" alt="Gallery thumbnail" class="img-fluid">
        </div>
      `;
    });

    // Why Study
    document.getElementById('why-study-title').textContent = program.why_study.title;
    document.getElementById('why-study-desc').textContent = program.why_study.description;
    const pointsList = document.getElementById('why-study-points');
    pointsList.innerHTML = '';
    program.why_study.points.forEach(point => {
      pointsList.innerHTML += `
        <div class="feature-item">
          <div class="feature-icon"><i class="bi bi-${point.icon}"></i></div>
          <div class="feature-details">
            <h5>${point.title}</h5>
            <p>${point.text}</p>
          </div>
        </div>
      `;
    });

    // Study Mode
    const studyList = document.getElementById('study-mode-list');
    studyList.innerHTML = '';
    program.study_mode.forEach(mode => {
      studyList.innerHTML += `<li>${mode}</li>`;
    });

    // Career Paths
    const careerGrid = document.getElementById('career-paths-grid');
    careerGrid.innerHTML = '';
    program.career_paths.forEach(path => {
      careerGrid.innerHTML += `
        <div class="service-box">
          <div class="service-icon"><i class="bi bi-briefcase"></i></div>
          <h5>${path}</h5>
          <p>Career opportunity in the field</p>
        </div>
      `;
    });

    // Fees Snapshot
    document.getElementById('fees-note').textContent = program.fees_note;
    const feesGrid = document.getElementById('fees-snapshot-grid');
    feesGrid.innerHTML = '';
    program.fees_snapshot.forEach(fee => {
      feesGrid.innerHTML += `
        <div class="col-lg-4 col-md-6">
          <div class="fee-item">
            <h4>${fee.title}</h4>
            <p>${fee.price}</p>
          </div>
        </div>
      `;
    });

    // CTA
    document.querySelector('.cta-section h3').innerHTML = 
      `Ready to Begin Your Journey in <strong>${program.program_name}</strong>?`;

  } catch (error) {
    console.error('Error loading program:', error);
    document.querySelector('.container').innerHTML = `
      <div class="text-center py-5">
        <h2>Program Not Found</h2>
        <p>Sorry, we couldn't load the requested program.</p>
        <a href="programs.html" class="btn btn-primary">Back to Programs</a>
      </div>
    `;
  } finally {
    // ALWAYS remove preloader when done (success or error)
    if (preloader) {
      preloader.remove();
    }
  }
});
