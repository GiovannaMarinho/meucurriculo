const toggle = document.querySelector('#toggle');
const dropdown = document.querySelector('#links');
const body = document.querySelector('body');
const main = document.querySelector('main');

toggle.addEventListener('click', () => {
  const isActive = toggle.classList.toggle('active');

  dropdown.classList.toggle('active');
  dropdown.classList.toggle('active_dropdown');
  body.classList.toggle('body_opacity');
  main.classList.toggle('main_opacity');

  toggle.src = isActive ? './assets/arrow.svg' : './assets/menu.svg';

  if (isActive) {
    dropdown.style.display = 'flex';
    dropdown.style.flexDirection = 'column';
    dropdown.style.gap = '15px';
  } else {
    dropdown.style.display = 'none';
  }
});

function toggleMode() {
  const switchButton = document.querySelector('#switch');
  const buttonSlide = document.querySelector('.buttonSlide');
  const main = document.querySelector('.main_curriculum');
  const contentTitle = document.querySelector('.content_title');
  const pointsContainer = document.querySelector('.points_container');
  const points = document.querySelectorAll('.point1, .point2, .point3, .point4, .point5');

  const sections = document.querySelectorAll(
    '.content_skills, .content_goals, .content_formation, .content_courses, .content_experience'
  );

  switchButton.classList.toggle('active');
  main.classList.toggle('hideSections');

  if (switchButton.classList.contains('active')) {
    buttonSlide.classList.remove('slideout');
    buttonSlide.classList.add('slidein');

    sections.forEach(section => {
      section.style.display = 'none';
      section.classList.remove('slideMode_section', 'fade_in', 'fade_out');
    });

    const skills = document.querySelector('.content_skills');
    skills.style.display = 'flex';
    skills.classList.add('slideMode_section', 'fade_in');

    contentTitle.style.display = 'flex';
    pointsContainer.style.display = 'flex';
    points.forEach(p => p.style.display = 'block');
  } else {
    buttonSlide.classList.remove('slidein');
    buttonSlide.classList.add('slideout');

    sections.forEach(section => {
      section.style.display = 'flex';
      section.classList.remove('slideMode_section', 'fade_in', 'fade_out');
    });

    contentTitle.style.display = 'flex';
    pointsContainer.style.display = 'none';
    points.forEach(p => p.classList.remove('point_active'));
  }
}

const points = document.querySelectorAll('.point1, .point2, .point3, .point4, .point5');
const sectionsMap = {
  point1: document.querySelector('.content_skills'),
  point2: document.querySelector('.content_goals'),
  point3: document.querySelector('.content_formation'),
  point4: document.querySelector('.content_courses'),
  point5: document.querySelector('.content_experience'),
};

points.forEach(point => {
  point.addEventListener('click', () => {
    const target = sectionsMap[point.classList[0]];

    points.forEach(p => p.classList.remove('point_active'));
    point.classList.add('point_active');

    const currentSection = Object.values(sectionsMap).find(section =>
      section.style.display === 'flex'
    );

    if (currentSection && currentSection !== target) {
      currentSection.classList.remove('fade_in');
      currentSection.classList.add('fade_out');

      setTimeout(() => {
        currentSection.style.display = 'none';
        currentSection.classList.remove('fade_out', 'slideMode_section');

        target.style.display = 'flex';
        target.classList.add('slideMode_section', 'fade_in');
      }, 300);
    } else if (target) {
      target.style.display = 'flex';
      target.classList.add('slideMode_section', 'fade_in');
    }
  });
});