let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const dots = document.querySelectorAll('.dot');

const showSlide = (index) => {
    if (index >= totalSlides) currentSlide = 0;
    if (index < 0) currentSlide = totalSlides - 1;
    document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
};

document.querySelector('.next').addEventListener('click', () => {
    currentSlide++;
    showSlide(currentSlide);
});

document.querySelector('.prev').addEventListener('click', () => {
    currentSlide--;
    showSlide(currentSlide);
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

setInterval(() => {
    currentSlide++;
    showSlide(currentSlide);
}, 3000);

showSlide(currentSlide);

const translations = {
    kk: {
        home: "Басты бет",
        department: "Кафедра құрамы",
        staff: "Қызметкерлерінің тізімі",
        achievements: "Кафедра жетістіктері",
        achievements_list: "Жетістіктер",
        programs: "Жұмыс оқу бағдарламалары",
        department_title: "Электроника, автоматтандыру және робототехника кафедрасы",
        department_description: "      Электроника, автоматтандыру және робототехника кафедрасы – техникалық білім мен заманауи технологияларды ұштастыратын білім ордасы. Бұл кафедра студенттерді электрондық жүйелерді жобалау, өндірістік автоматтандыру, робототехникалық құрылғыларды бағдарламалау және қызмет көрсету, құрылымдық кабельдік жүйелер бойынша жұмыс істеу, сондай-ақ заманауи өндірістегі цифрлық технологиялармен жұмыс істеу дағдыларына үйретеді.",
        caption1: "WorldSkills 2024 zhetysu Үздік жас маман Республикалық",
        caption2: "WorldSkills 2024 ж. Республикалық",
        caption3: "Ақпараттық кабельдік желілер құзыреттілігі бойынша 2-орын Республикалық",
        caption4: "Колледж ішілік",
        caption5: "Колледж ішілік WorldSkills",
        caption6: "Республикалық WorldSkills",
        footer_text: "&copy; 2025 Электроника, автоматтандыру және робототехника кафедрасы. Барлық құқықтар қорғалған.",
        comments: "Пікірлер",
        leaveComment: "Пікір қалдыру",
        yourName: "Аты-жөніңіз:",
        yourComment: "Пікіріңіз:",
        send: "Жіберу"
    },
    ru: {
        home: "Главная",
        department: "Состав кафедры",
        staff: "Список сотрудников",
        achievements: "Достижения кафедры",
        achievements_list: "Достижения",
        programs: "Рабочие программы обучения",
        department_title: "Кафедра электроники, автоматизации и робототехники",
        department_description: "Кафедра электроники, автоматизации и робототехники — это учебное заведение, сочетающее техническое образование с современными технологиями. Кафедра обучает студентов проектированию электронных систем, промышленной автоматизации, программированию и обслуживанию робототехнических устройств, работе со структурированными кабельными системами, а также навыкам работы с цифровыми технологиями в современном производстве.",
        caption1: "Республиканский конкурс WorldSkills 2024 Zhetysu",
        caption2: "Республиканский WorldSkills 2024",
        caption3: "2-е место по информационным кабельным сетям на республиканском конкурсе",
        caption4: "Колледж внутренний",
        caption5: "Колледж внутренний WorldSkills",
        caption6: "Республиканский WorldSkills",
        footer_text: "&copy; 2025 Кафедра электроники, автоматизации и робототехники. Все права защищены.",
        comments: "Комментарии",
        leaveComment: "Оставить комментарий",
        yourName: "Ваше имя:",
        yourComment: "Ваш комментарий:",
        send: "Отправить"
    },
    en: {
        home: "Home",
        department: "Department Staff",
        staff: "Staff List",
        achievements: "Department Achievements",
        achievements_list: "Achievements",
        programs: "Educational Programs",
        department_title: "Department of Electronics, Automation and Robotics",
        department_description: "The Department of Electronics, Automation and Robotics is an educational institution that combines technical education with modern technologies. It trains students in designing electronic systems, industrial automation, programming and maintaining robotic devices, working with structured cabling systems, and using digital technologies in modern manufacturing. ",
        caption1: "National WorldSkills 2024 Zhetysu Best Young Specialist",
        caption2: "Republican WorldSkills 2024",
        caption3: "2nd place in Information Cable Networks at Republican Competition",
        caption4: "College Event",
        caption5: "College Event WorldSkills",
        caption6: "Republican WorldSkills",
        footer_text: "&copy; 2025 Department of Electronics, Automation and Robotics. All rights reserved.",
        comments: "Comments",
        leaveComment: "Leave a comment",
        yourName: "Your Name:",
        yourComment: "Your Comment:",
        send: "Send"
    }
};

function translatePage(language) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[language] && translations[language][key]) {
            el.textContent = translations[language][key];
        }
    });
}

document.getElementById('languageSelector').addEventListener('change', function () {
    const selectedLang = this.value;
    localStorage.setItem('selectedLanguage', selectedLang);
    translatePage(selectedLang);
});

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLanguage') || 'kk';
    document.getElementById('languageSelector').value = savedLang;
    translatePage(savedLang);
});

document.addEventListener('DOMContentLoaded', function () {
    const commentForm = document.getElementById('comment-form');
    const nameInput = document.getElementById('name');
    const commentTextInput = document.getElementById('comment-text');
    const commentsList = document.getElementById('comments-list');

    function saveComment(name, text, date) {
        const currentComments = JSON.parse(localStorage.getItem('comments')) || [];
        currentComments.push({ name, text, date });
        localStorage.setItem('comments', JSON.stringify(currentComments));
    }

    function addCommentToDOM(name, text, date) {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        const authorP = document.createElement('p');
        authorP.classList.add('comment-author');
        authorP.innerHTML = `<strong>${escapeHTML(name)}</strong>`;
        const bodyP = document.createElement('p');
        bodyP.classList.add('comment-body');
        bodyP.textContent = text;
        const dateP = document.createElement('p');
        dateP.classList.add('comment-date');
        dateP.textContent = date;
        commentDiv.appendChild(authorP);
        commentDiv.appendChild(bodyP);
        commentDiv.appendChild(dateP);
        commentsList.prepend(commentDiv);
    }

    function loadComments() {
        const savedComments = JSON.parse(localStorage.getItem('comments')) || [];
        savedComments.forEach(comment => {
            addCommentToDOM(comment.name, comment.text, comment.date);
        });
    }

    function escapeHTML(str) {
        const div = document.createElement('div');
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
    }

    commentForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = nameInput.value.trim();
        const commentText = commentTextInput.value.trim();
        const currentDate = new Date().toLocaleDateString('ru-RU');
        if (name === '' || commentText === '') {
            alert('Барлық өрістерді толтырыңыз.');
            return;
        }
        addCommentToDOM(name, commentText, currentDate);
        saveComment(name, commentText, currentDate);
        nameInput.value = '';
        commentTextInput.value = '';
    });

    loadComments();
});
