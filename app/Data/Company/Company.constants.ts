import type {IPersons} from "@/app/Models";

export const Persons: IPersons = {
    creator: {
        name: 'Роман',
        tgLink: 'https://t.me/ptprt5m',
        tg: '@ptprt5m'
    },
    owner: {
        name: 'Самир',
        phoneNumber: '+7 (964) 837-06-63',
        email: 'mursaguliev@mail.ru'
    },
    managers: [
        {
            isSenior: true,
            name: '',
            tgLink: '',
            tg: ''
        },
        {
            name: '',
            tgLink: '',
            tg: ''
        },
        {
            name: '',
            tgLink: '',
            tg: ''
        }
    ]
}

export const CompanyInfo = {
    name: '21 Sport',
    oldName: 'Sport Discount Russia',
    legalName: 'ИП "Мурсагулиев Самир Ильхам Оглы"',
    shortDesc: 'Магазин оригинальной одежды и обуви',
    longDesc: 'Лучший магазин одежды, обуви и аксессуаров в Нижнем Новгороде. Доставка по всей России.',
    address: 'Площадь Максима Горького 4/2',
    workingHours: {
        start: '10:00',
        end: '22:00'
    },
    workingDays: {
        monday: true,
        tuesday: true,
        wednesday: true,
        thursday: true,
        friday: true,
        saturday: true,
        sunday: true
    },
    mainEmail: Persons.owner.email,
    emails: [],
    mainPhoneNumber: Persons.owner.phoneNumber,
    OGRN: '320527500053758',
    TIN: '525915493036',
    OKPO: '2001660731',
    keywords: ['Спорт', 'Одежда', 'Обувь', 'Аксессуары']
}
