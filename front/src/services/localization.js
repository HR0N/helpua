import LocalizedStrings from 'react-localization';

// const site = ' TODAY TAXI ';
let strings = new LocalizedStrings({
    ua: {
        /*todo: ......................................................... ......:::::: HEADER ::::::......     */
        main: "Головна",
        i_need_help: "Мені потрібна допомога",
        i_can_help: "Я можу допомогти",
        /*todo: ......................................................... ......:::::: FOOTER ::::::......     */
        about: 'Інформація',
        contacts: 'Контакти',

    },
    ru:{
        /*todo: ......................................................... ......:::::: HEADER ::::::......     */
        main: "Главная",
        i_need_help: "Мне нужна помощь",
        i_can_help: "Я могу помочь",
        /*todo: ......................................................... ......:::::: FOOTER ::::::......     */
        about: 'Информация',
        contacts: 'Контакты',
    },
});
export default strings;