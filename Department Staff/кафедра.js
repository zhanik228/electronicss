const translations = {
    kk: {
        search_placeholder: "Іздеу...",
        title: "Кафедра Құрамы",
        home: "Басты бет",
        department: "Кафедра құрамы",
        staff_list: "Қызметкерлерінің тізімі",
        achievements: "Кафедра жетістіктері",
        achievements_list: "Жетістіктер",
        programs: "Жұмыс оқу бағдарламалары",
        staff_title: "Оқытушылар",
        head_of_department: "Кафедра меңгерушісі:",
        footer_text: "&copy; 2025 Электроника, автоматтандыру және робототехника кафедрасы. Барлық құқықтар қорғалған.",
        search_no_results: "Нәтижелер табылмады."
    },
    ru: {
        search_placeholder: "Поиск...",
        title: "Состав кафедры",
        home: "Главная страница",
        department: "Состав кафедры",
        staff_list: "Список сотрудников",
        achievements: "Достижения кафедры",
        achievements_list: "Достижения",
        programs: "Рабочие учебные программы",
        staff_title: "Преподаватели",
        head_of_department: "Заведующий кафедрой:",
        footer_text: "&copy; 2025 Кафедра электроники, автоматизации и робототехники. Все права защищены.",
        search_no_results: "Результаты не найдены."
    },
    en: {
        search_placeholder: "Search...",
        title: "Department Staff",
        home: "Home",
        department: "Department Composition",
        staff_list: "Staff List",
        achievements: "Department Achievements",
        achievements_list: "Achievements",
        programs: "Work Study Programs",
        staff_title: "Lecturers",
        head_of_department: "Head of Department:",
        footer_text: "&copy; 2025 Department of Electronics, Automation and Robotics. All rights reserved.",
        search_no_results: "No results found."
    }
};

function changeLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    const searchInput = document.getElementById('staffSearch');
    if (searchInput) {
        searchInput.placeholder = translations[lang].search_placeholder;
        searchInput.value = '';
        filterStaff('');
    }

    const noResults = document.getElementById('noResultsMessage');
    if (noResults && noResults.textContent !== '') {
        noResults.textContent = translations[lang].search_no_results;
    }

    document.documentElement.lang = lang;
}

function filterStaff(query) {
    const lang = document.getElementById('languageSelector').value;
    const staffMembers = document.querySelectorAll('.staff-member');
    let visibleCount = 0;
    const lowerQuery = query.toLowerCase();

    staffMembers.forEach(member => {
        const text = member.textContent.toLowerCase();
        if (text.includes(lowerQuery)) {
            member.style.display = '';
            visibleCount++;
        } else {
            member.style.display = 'none';
        }
    });

    let noResults = document.getElementById('noResultsMessage');
    if (!noResults) {
        noResults = document.createElement('div');
        noResults.id = 'noResultsMessage';
        noResults.style.color = 'red';
        noResults.style.marginTop = '10px';
        noResults.style.fontWeight = 'bold';
        document.getElementById('staff').appendChild(noResults);
    }
    noResults.textContent = visibleCount === 0 ? translations[lang].search_no_results : '';
}

document.getElementById('languageSelector').addEventListener('change', function () {
    changeLanguage(this.value);
});

document.addEventListener('DOMContentLoaded', () => {
    changeLanguage('kk');

    const searchInput = document.getElementById('staffSearch');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            filterStaff(e.target.value);
        });
    }
});
