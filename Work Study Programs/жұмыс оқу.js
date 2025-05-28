const translations = {
    kk: {
        page_title: "Жұмыс оқу бағдарламалары",
        home: "Басты бет",
        department: "Кафедра құрамы",
        staff_list: "Қызметкерлерінің тізімі",
        achievements: "Кафедра жетістіктері",
        achievements_list: "Жетістіктер",
        programs: "Жұмыс оқу бағдарламалары",
        num: "№",
        title: "Атауы",
        file: "Файл",
        download: "Жүктеу",
        footer: "&copy; 2025 Электроника, автоматтандыру және робототехника кафедрасы. Барлық құқықтар қорғалған.",
        task_1: "Ақпараттық-коммуникациялық жабдықты монтаждаудың кешенді тексеруін орындау",
        task_2: "Выполнение монтажа и наладки устройств, блоков и приборов электронной техники",
        task_3: "Заманауи телекоммуникациялық байланыс жүйелерін талдау",
        task_4: "Кабельдік монтаждау жұмыстарын орындау",
        task_5: "Коммуникациялық жабдық құрылғыларын жөндеу, баптау және реттеу",
        task_6: "Компьютерлік (сандық) модельді құру және түзету",
        task_7: "Конструирование аппаратного обеспечения прототипа",
        task_8: "Құрылымдық кабельдік желілерді және телекоммуникациялық жабдықты монтаждау",
        task_9: "Радиоэлектрондық құрылғыларды монтаждау",
        task_10: "Разработка электронных схем на основе типовых проектов",
        task_11: "Роботтық жүйелер мен кешендердің құрамдас бөліктері мен модульдерін орнату, іске қосу және реттеу",
        task_12: "РУП Үлгілік",
        task_13: "Сандық техниканы монтаждау",
        task_14: "Антенна құрылғыларын монтаждауды орындау",
        task_15: "Телекоммуникациялық жабдықтарды баптау бойынша жұмыстар кешенін орындау",
        task_16: "Тұрмыстық электрониканы жөндеу, баптау және реттеу",
        task_17: "Электромеханикалық және радиотехникалық аспаптар мен жүйелерді құрастыру-монтаждау"
    },
    ru: {
        page_title: "Рабочие программы",
        home: "Главная",
        department: "Состав кафедры",
        staff_list: "Список сотрудников",
        achievements: "Достижения кафедры",
        achievements_list: "Достижения",
        programs: "Рабочие программы",
        num: "№",
        title: "Название",
        file: "Файл",
        download: "Скачать",
        footer: "&copy; 2025 Кафедра электроники, автоматизации и робототехники. Все права защищены.",
        task_1: "Выполнение комплексной проверки монтажа информационно-коммуникационного оборудования",
        task_2: "Выполнение монтажа и наладки устройств, блоков и приборов электронной техники",
        task_3: "Анализ современных телекоммуникационных систем",
        task_4: "Выполнение работ по монтажу кабелей",
        task_5: "Ремонт, настройка и регулировка оборудования коммуникационных систем",
        task_6: "Создание и исправление компьютерных (цифровых) моделей",
        task_7: "Проектирование аппаратного обеспечения прототипа",
        task_8: "Монтаж структурированных кабельных сетей и телекоммуникационного оборудования",
        task_9: "Монтаж радиоэлектронных устройств",
        task_10: "Разработка электронных схем на основе типовых проектов",
        task_11: "Установка, пусконаладка и настройка компонентов и модулей роботизированных систем и комплексов",
        task_12: "РУП образец",
        task_13: "Монтаж цифровой техники",
        task_14: "Монтаж антенных устройств",
        task_15: "Выполнение комплекса работ по настройке телекоммуникационного оборудования",
        task_16: "Ремонт, настройка и регулировка бытовой электроники",
        task_17: "Сборка и монтаж электромеханических и радиотехнических приборов и систем"
    },
    en: {
        page_title: "Curriculum Programs",
        home: "Home",
        department: "Department Composition",
        staff_list: "Staff List",
        achievements: "Department Achievements",
        achievements_list: "Achievements",
        programs: "Curriculum Programs",
        num: "#",
        title: "Title",
        file: "File",
        download: "Download",
        footer: "&copy; 2025 Department of Electronics, Automation, and Robotics. All rights reserved.",
        task_1: "Performing a comprehensive inspection of information and communication equipment installation",
        task_2: "Installation and adjustment of devices, units, and instruments of electronic equipment",
        task_3: "Analysis of modern telecommunication systems",
        task_4: "Performing cable installation works",
        task_5: "Repair, adjustment, and tuning of communication equipment devices",
        task_6: "Creating and correcting computer (digital) models",
        task_7: "Designing hardware for a prototype",
        task_8: "Installing structured cable networks and telecommunication equipment",
        task_9: "Installing radio-electronic devices",
        task_10: "Developing electronic circuits based on standard designs",
        task_11: "Installation, commissioning, and adjustment of components and modules of robotic systems and complexes",
        task_12: "RUP sample",
        task_13: "Installing digital equipment",
        task_14: "Installing antenna devices",
        task_15: "Performing work on setting up telecommunication equipment",
        task_16: "Repair, adjustment, and tuning of household electronics",
        task_17: "Assembly and installation of electromechanical and radiotechnical devices and systems"
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
