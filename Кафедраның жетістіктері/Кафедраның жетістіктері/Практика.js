  // Слайдер JS
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  const dots = document.querySelectorAll('.dot');
  
  const showSlide = (index) => {
      if (index >= totalSlides) currentSlide = 0;
      if (index < 0) currentSlide = totalSlides - 1;
      
      // Перемещение слайдов
      document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;
      
      // Обновление точек
      dots.forEach(dot => dot.classList.remove('active'));
      dots[currentSlide].classList.add('active');
  };

  // Навигация стрелками
  document.querySelector('.next').addEventListener('click', () => {
      currentSlide++;
      showSlide(currentSlide);
  });

  document.querySelector('.prev').addEventListener('click', () => {
      currentSlide--;
      showSlide(currentSlide);
  });

  // Точки навигации
  dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
          currentSlide = index;
          showSlide(currentSlide);
      });
  });

  // Автоматическая прокрутка слайдов
  setInterval(() => {
      currentSlide++;
      showSlide(currentSlide);
  }, 3000); // Каждые 3 секунды

  // Инициализация первого слайда
  showSlide(currentSlide);

  const translations = {
    kk: {
        home: "Басты бет",
        department: "Кафедра құрамы",
        staff: "Қызметкерлерінің тізімі",
        achievements: "Кафедра жетістіктері",
        achievements_list: "Жетістіктер",
        programs: "Жұмыс оқу бағдарламалары",
        department_title: "Электроника, автомат тандыру және робототехника кафедрасы",
        caption1: "WorldSkills 2024 zhetysu Үздік жас маман Республикалық",
        caption2: "WorldSkills 2024 ж. Республикалық",
        caption3: "Ақпараттық кабельдік желілер құзыреттілігі бойынша 2-орын Республикалық",
        caption4: "Колледж ішілік",
        caption5: "Колледж ішілік WorldSkills",
        caption6: "Республикалық WorldSkills",
        footer_text: "&copy; 2025 Электроника, автоматтандыру және робототехника кафедрасы. Барлық құқықтар қорғалған."
    },
    ru: {
        home: "Главная",
        department: "Состав кафедры",
        staff: "Список сотрудников",
        achievements: "Достижения кафедры",
        achievements_list: "Достижения",
        programs: "Рабочие программы обучения",
        department_title: "Кафедра электроники, автоматизации и робототехники",
        caption1: "Республиканский конкурс WorldSkills 2024 Zhetysu",
        caption2: "Республиканский WorldSkills 2024",
        caption3: "2-е место по информационным кабельным сетям на республиканском конкурсе",
        caption4: "Колледж внутренний",
        caption5: "Колледж внутренний WorldSkills",
        caption6: "Республиканский WorldSkills",
        footer_text: "&copy; 2025 Кафедра электроники, автоматизации и робототехники. Все права защищены."
    },
    en: {
        home: "Home",
        department: "Department Staff",
        staff: "Staff List",
        achievements: "Department Achievements",
        achievements_list: "Achievements",
        programs: "Educational Programs",
        department_title: "Department of Electronics, Automation and Robotics",
        caption1: "National WorldSkills 2024 Zhetysu Best Young Specialist",
        caption2: "Republican WorldSkills 2024",
        caption3: "2nd place in Information Cable Networks at Republican Competition",
        caption4: "College Event",
        caption5: "College Event WorldSkills",
        caption6: "Republican WorldSkills",
        footer_text: "&copy; 2025 Department of Electronics, Automation and Robotics. All rights reserved."
    }
};

const languageSelector = document.getElementById("languageSelector");

languageSelector.addEventListener("change", (e) => {
    const selectedLang = e.target.value;
    changeLanguage(selectedLang);
});

function changeLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

// Sample people data
const people = [
    { name: "Жумашева Толкын Дулаткызы", profile: "Жумашева Толкын Дулаткызы.html" },
    { name: "Аяганова Аяжан Жанбаевна", profile: "Аяганова Аяжан Жанбаевна.html" },
    { name: "Нұрмышева Гүлзада Бақытбекқызы", profile: "Гульзада.html" },
    { name: "Баяхметов Мирас Кадылгазыевич", profile: "Баяхметов Мирас Кадылгазыевич.html" },
    { name: "Ахасов Есбол Багланбекулы", profile: "Ахасов.html" },
    { name: "Бигалиев Мейрам Сунгатулы", profile: "Бигалиев Мейрам Сунгатулы.html" },
    { name: "Бауыржанова Мадина Океновна", profile: "Бауыржанова Мадина Океновна.html" },
    { name: "Кальпебаев Куаныш Дарханович", profile: "Кальпебаев Куаныш Дарханович.html" },
    { name: "Исмаилова Мадина Маратовна", profile: "Исмаилова Мадина Маратовна.html" },
    { name: "Оразова Зарина Оразовна", profile: "Оразова Зарина Оразовна.html" },
    { name: "Есимбеков Ержан Жукенович", profile: "Есимбеков Ержан Жукенович.html" },
    { name: "Тусупбаева Молдыр Бакытбековна", profile: "Тусупбаева Молдыр Бакытбековна.html" },
    { name: "Садвакасова Эльмира Далелхановна", profile: "Садвакасова Эльмира Далелхановна.html" },
    { name: "Карчиганов Амангельды Рысбекович", profile: "Карчиганов Амангельды Рысбекович.html" },
    { name: "Батырхан Айман", profile: "Батырхан Айман.html" },
    { name: "Жумагазова Меруерт Досмукановна", profile: "Жумагазова Меруерт Досмукановна.html" },
    { name: "Султанова Тумар Сержановна", profile: "Султанова Тумар Сержановна.html" },
    { name: "Сейд-оглы Наргуль Хасановна", profile: "Сейд-оглы Наргуль Хасановна.html" }
];
// Event listener for the search form
document.getElementById("searchForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from submitting and refreshing the page

    let searchQuery = document.getElementById("searchInput").value.toLowerCase().trim();
    let resultContainer = document.getElementById("searchResult");

    // Search for matching name
    const foundPerson = people.find(person => person.name.toLowerCase().includes(searchQuery));

    if (foundPerson) {
        resultContainer.innerHTML = `Нәтиже: <a href="${foundPerson.profile}">${foundPerson.name}</a>`;
    } else {
        resultContainer.innerHTML = "Қатысты адам табылмады.";
    }
});   
