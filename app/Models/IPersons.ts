export interface IPersons {
    creator: IPerson
    owner: IPerson
    managers: Array<IPerson>
}

export interface IPerson {
    name?: string
    email?: string
    phoneNumber?: string
    tg?: string
    tgLink?: string
    isSenior?: boolean
}