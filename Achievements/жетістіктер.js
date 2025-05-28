document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-image");
    var closeBtn = document.getElementsByClassName("close")[0];

    var images = document.querySelectorAll(".gallery img");

    images.forEach(function(image) {
        image.addEventListener("click", function() {
            modal.style.display = "flex";
            modalImg.src = this.src;
        });
    });

    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});

const translations = {
    kk: {
        page_title: "Құжат",
        home: "Басты бет",
        department: "Кафедра құрамы",
        staff_list: "Қызметкерлерінің тізімі",
        achievements: "Кафедра жетістіктері",
        achievements_list: "Жетістіктер",
        programs: "Жұмыс оқу бағдарламалары",
        certificates_title: "Сертификаттар мен дипломдар",
        certificates_description: "Әр жетістіктің растайтын құжаты ретінде сертификаттар мен дипломдардың сканерленген суреттері.",
        event_title: "Іс-шаралар туралы ақпарат",
        event_description: "Кафедра ұйымдастырған немесе қатысқан іс-шаралардың суреттері.",
        footer_text: "© 2025 Электроника, автоматтандыру және робототехника кафедрасы. Барлық құқықтар қорғалған."
    },
    ru: {
        page_title: "Документ",
        home: "Главная",
        department: "Состав кафедры",
        staff_list: "Список сотрудников",
        achievements: "Достижения кафедры",
        achievements_list: "Достижения",
        programs: "Рабочие программы",
        certificates_title: "Сертификаты и дипломы",
        certificates_description: "Отсканированные изображения сертификатов и дипломов, подтверждающих каждое достижение.",
        event_title: "Информация о мероприятиях",
        event_description: "Фотографии мероприятий, организованных или в которых принимала участие кафедра.",
        footer_text: "© 2025 Кафедра электроники, автоматизации и робототехники. Все права защищены."
    },
    en: {
        page_title: "Document",
        home: "Home",
        department: "Department Composition",
        staff_list: "Staff List",
        achievements: "Department Achievements",
        achievements_list: "Achievements",
        programs: "Curriculum Programs",
        certificates_title: "Certificates and Diplomas",
        certificates_description: "Scanned images of certificates and diplomas verifying each achievement.",
        event_title: "Event Information",
        event_description: "Photos of events organized or participated in by the department.",
        footer_text: "© 2025 Department of Electronics, Automation and Robotics. All rights reserved."
    }
};

function translatePage(language) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[language][key]) {
            element.innerHTML = translations[language][key];
        }
    });
}

document.getElementById('languageSelector').addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    translatePage(selectedLanguage);
});
