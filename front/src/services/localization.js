import LocalizedStrings from 'react-localization';

// const site = ' TODAY TAXI ';
let strings = new LocalizedStrings({
    ua: {
        /*todo: ......................................................... ......:::::: Main ::::::......     */
        main_yes: "Так",
        main_no: "Ні",
        /*todo: ......................................................... ......:::::: HEADER ::::::......     */
        main: "Головна",
        i_can_help: "Я можу допомогти",
        i_can_help_food: "Їжею",
        i_can_help_medicine: "Ліками",
        i_can_help_driver: "Я водій",
        i_can_help_other: "Чимось ще",
        /*todo: ......................................................... ......:::::: FOOTER ::::::......     */
        about: 'Інформація',
        contacts: 'Контакти',
        /*todo: ......................................................... ......:::::: INeedHelp ::::::......     */
        i_need_help: "Мені потрібна допомога",
        i_need_help_food: "Їжа",
        i_need_help_medicine: "Ліки",
        i_need_help_other: "Інше",
        i_need_help_h2_food: "Допомога з їжею",
        i_need_help_h2_medicine: "Допомога з ліками",
        i_need_help_h2_other: "Інша допомога",
        i_need_help_food_placeholder1: "Кількість людей",
        i_need_help_food_placeholder2: "Місто, вулиця, будинок",
        i_need_help_food_placeholder3: "Номер телефону",
        i_need_help_food_placeholder4: "Чи є можливість приготувати їжу",
        i_need_help_food_placeholder5: "Ваше ім'я",
        i_need_help_food_placeholder6: "Додатковий коментар",
        i_need_help_medicine_placeholder1: "Якщо для ваших ліків потрібен рецепт, ви можете його надати(фото)?",
        i_need_help_other_placeholder1: "Опишіть будь ласка, яка допомога вам потрібна",
        i_need_help_submit: "Залишити заявку",
        /*todo: ......................................................... ......:::::: ICanHelp ::::::......     */
        i_can_help_h2_food: "Є можливість допомогти їжею",
        i_can_help_h2_medicine: "Є можливість допомогти ліками",
        i_can_help_h2_driver: "Є бажання допомогти доставкою допомоги",
        i_can_help_h2_other: "Я хочу допомогти чимось іншим.",
        i_can_help_food_placeholder1: "Опишіть, будь ласка, якою їжею ви можете допомогти. Якою кількістю їжі ви " +
            "можете допомогти.",
        i_can_help_food_placeholder2: "Адреса, де волонтери можуть взяти вашу допомогу",
        i_can_help_food_placeholder3: "Якщо маєте можливість та бажання відвезти допомогу самі",
        i_can_help_medicine_placeholder1: "Опишіть, будь ласка, якими ліками ви можете допомогти. Якою кількістю ліків " +
            "ви можете допомогти.",
        i_can_help_driver_placeholder1: "Додатковий коментар.",
        i_can_help_driver_placeholder2: "Опишіть, будь ласка, місткість вашої машини.",
        i_can_help_driver_placeholder3: "В якому місті ви хочете допомогти?",
        i_can_help_driver_placeholder4: "У який час доби ви можете допомагати?",
        i_can_help_other_placeholder1: "Опишіть, будь ласка, чим ви хочете допомогти. Якщо ви не знаєте чим можете " +
            "допомогти, але у вас є бажання - так і напишіть :)",

    },
    ru:{
        /*todo: ......................................................... ......:::::: Main ::::::......     */
        main_yes: "Да",
        main_no: "Нет",
        /*todo: ......................................................... ......:::::: HEADER ::::::......     */
        main: "Главная",
        i_can_help: "Я могу помочь",
        i_can_help_food: "Едой",
        i_can_help_medicine: "Лекарствами",
        i_can_help_driver: "Я водитель",
        i_can_help_other: "Чем то еще",
        /*todo: ......................................................... ......:::::: FOOTER ::::::......     */
        about: 'Информация',
        contacts: 'Контакты',
        /*todo: ......................................................... ......:::::: INeedHelp ::::::......     */
        i_need_help: "Мне нужна помощь",
        i_need_help_food: "Еда",
        i_need_help_medicine: "Лекарства",
        i_need_help_other: "Другое",
        i_need_help_h2_food: "Помощь с едой",
        i_need_help_h2_other: "Другая помощь",
        i_need_help_h2_medicine: "Помощь с лекарствами",
        i_need_help_food_placeholder1: "Количество людей",
        i_need_help_food_placeholder2: "Город, улица, дом",
        i_need_help_food_placeholder3: "Номер телефона",
        i_need_help_food_placeholder4: "Есть ли возможность приготовить еду",
        i_need_help_food_placeholder5: "Ваше имя",
        i_need_help_food_placeholder6: "Дополнительный комментарий",
        i_need_help_medicine_placeholder1: "Если для вашего лекарства нужен рецепт, вы можете его предоставить(фото)?",
        i_need_help_other_placeholder1: "Опишите пожалуйста какая помощь вам требуется",
        i_need_help_submit: "Оставить заявку",
        /*todo: ......................................................... ......:::::: ICanHelp ::::::......     */
        i_can_help_h2_food: "Есть возможность помочь едой",
        i_can_help_h2_medicine: "Есть возможность помочь лекарствами",
        i_can_help_h2_driver: "Есть желание помочь доставкой помощи",
        i_can_help_h2_other: "Я хочу помочь чем то другим.",
        i_can_help_food_placeholder1: "Опишите пожалуйста, какой едой вы можете помочь. Каким кол-вом еды вы " +
            "можете помочь.",
        i_can_help_food_placeholder2: "Адрес, где волонтеры могут взять вашу помощь",
        i_can_help_food_placeholder3: "Если имеете возможность и желание отвезти помощь сами",
        i_can_help_medicine_placeholder1: "Опишите пожалуйста, какими лекарствами вы можете помочь. Каким кол-вом лекарств " +
            "вы можете помочь.",
        i_can_help_driver_placeholder1: "Дополнительный комментарий.",
        i_can_help_driver_placeholder2: "Опишите пожалуйста вместимость вашей машины.",
        i_can_help_driver_placeholder3: "В каком городе вы хотите помочь?",
        i_can_help_driver_placeholder4: "В какое время суток вы можете помогать?",
        i_can_help_other_placeholder1: "Опишите пожалуйста, чем вы хотите помочь. Если вы не знаете чем можете помочь " +
            "но у вас есть желание - так и напишите :)",
    },
});
export default strings;