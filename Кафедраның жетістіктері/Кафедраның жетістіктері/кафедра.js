document.addEventListener("DOMContentLoaded", function() {
  const translations = {
      "kk": {
          "home": "Басты бет",
          "department": "Кафедра құрамы",
          "staff_list": "Қызметкерлерінің тізімі",
          "achievements": "Кафедра жетістіктері",
          "achievements_list": "Жетістіктер",
          "programs": "Жұмыс оқу бағдарламалары",
          "staff_title": "Оқытушылар",
          "head_of_department": "Бөлім Басқарушысы:",
          "footer_text": "&copy; 2025 Электроника, автоматтандыру және робототехника кафедрасы. Барлық құқықтар қорғалған.",
          "jumasheva_name": "Жумашева Толкын Дулаткызы",
          "ayaganova_name": "Аяганова Аяжан Жанбаевна",
          "goulzade_name": "Нұрмышева Гүлзада Бақытбекқызы",
          "esbol_name": "Ахасов Есбол Багланбекулы",
          "miras_name": "Баяхметов Мирас Кадылгазыевич",
          "meyram_name": "Бигалиев Мейрам Сунгатулы",
          "madina_name": "Бауыржанова Мадина Океновна",
          "kuanysh_name": "Кальпебаев Қуаныш Дарханович",
          "ismailova_name": "Исмаилова Мадина Маратовна",
          "zarina_name": "Оразова Зарина Оразовна",
          "erjan_name": "Есимбеков Ержан Жукенович",
          "moldir_name": "Түсүпбаева Мөлдір Бақытбекқызы",
          "elmir_name": "Садвакасова Эльмира Далелхановна",
          "amangeldy_name": "Карчиганов Амангельды Рысбекович",
          "aiman_name": "Батырхан Айман",
          "meruert_name": "Жұмағазы Меруерт Досмұқанқызы",
          "nargul_name": "Сейд-оглы Наргуль Хасановна",
          "tumar_name": "Султанова Тумар Сержановна"
      },
      "ru": {
          "home": "Главная",
          "department": "Состав кафедры",
          "staff_list": "Список сотрудников",
          "achievements": "Достижения кафедры",
          "achievements_list": "Достижения",
          "programs": "Учебные программы",
          "staff_title": "Преподаватели",
          "head_of_department": "Руководитель кафедры:",
          "footer_text": "&copy; 2025 Кафедра электроники, автоматизации и робототехники. Все права защищены.",
          "jumasheva_name": "Жумашева Толкын Дулаткызы",
          "ayaganova_name": "Аяганова Аяжан Жанбаевна",
          "goulzade_name": "Нурмышева Гульзада Бакытбековна",
          "esbol_name": "Ахасов Есбол Багланбекулы",
          "miras_name": "Баяхметов Мирас Кадылгазыевич",
          "meyram_name": "Бигалиев Мейрам Сунгатулы",
          "madina_name": "Бауыржанова Мадина Океновна",
          "kuanysh_name": "Кальпебаев Куаныш Дарханович",
          "ismailova_name": "Исмаилова Мадина Маратовна",
          "zarina_name": "Оразова Зарина Оразовна",
          "erjan_name": "Есимбеков Ержан Жукенович",
          "moldir_name": "Тусупбаева Молдыр Бакытбековна",
          "elmir_name": "Садвакасова Эльмира Далелхановна",
          "amangeldy_name": "Карчиганов Амангельды Рысбекович",
          "aiman_name": "Батырхан Айман",
          "meruert_name": "Жумагазова Меруерт Досмукановна",
          "nargul_name": "Сейд-оглы Наргуль Хасановна",
          "tumar_name": "Султанова Тумар Сержановна"
      },
      "en": {
          "home": "Home",
          "department": "Department Staff",
          "staff_list": "Staff List",
          "achievements": "Department Achievements",
          "achievements_list": "Achievements",
          "programs": "Study Programs",
          "staff_title": "Staff Members",
          "head_of_department": "Head of Department:",
          "footer_text": "&copy; 2025 Department of Electronics, Automation, and Robotics. All rights reserved.",
          "jumasheva_name": "Zhumasheva Tolkin Dulatkyzy",
          "ayaganova_name": "Ayaganova Aizhan Janbaevna",
          "goulzade_name": "Nurmysheva Gulzada Bakytbekkyzy",
          "esbol_name": "Akhasov Esbol Baglanbekuly",
          "miras_name": "Bayakhmetov Miras Kadylgazievich",
          "meyram_name": "Bigaliyev Meyram Sungatuly",
          "madina_name": "Bauyrjanova Madina Okenovna",
          "kuanysh_name": "Kalpebaev Kuanysh Dakhannovich",
          "ismailova_name": "Ismailova Madina Maratovna",
          "zarina_name": "Orazova Zarina Orazovna",
          "erjan_name": "Yesimbekov Erjan Zhukenovich",
          "moldir_name": "Tussupbaeva Moldir Bakytbekkyzy",
          "elmir_name": "Sadvakasova Elmira Dalelhanovna",
          "amangeldy_name": "Karchiganov Amangeldy Rysbekovich",
          "aiman_name": "Batyrkhan Aiman",
          "meruert_name": "Jumagazy Meruert Dosmukankyz",
          "nargul_name": "Seyd-ogly Nargul Khasanovna",
          "tumar_name": "Sultanova Tumar Serzhanovna"
      }
  };

  const languageSelector = document.getElementById("languageSelector");

  function changeLanguage(language) {
      const elements = document.querySelectorAll("[data-i18n]");
      elements.forEach(element => {
          const key = element.getAttribute("data-i18n");
          if (translations[language][key]) {
              element.textContent = translations[language][key];
          }
      });
  }

  languageSelector.addEventListener("change", (event) => {
      const selectedLanguage = event.target.value;
      changeLanguage(selectedLanguage);
  });
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