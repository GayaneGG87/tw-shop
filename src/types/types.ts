export interface IPerson{
    id: string | number,
    fullName: string,
    phone: string,
    email: string,
    merriage?: boolean,
    children?: boolean,
    birthDay?: string,
    img?: string
}

export interface IEducation{
id: string | number,
school: string,
degree?: string,
city: string,
date?: string,
}

export interface IExperience{
id: string | number,
jobTitle: string,
company: string,
date?: string,
city: string
}

export interface ISkill{
id: string | number,
title: string
}
export interface ILanguage {
    id: string | number,
    name: string,
    level: string
}

export interface ICourses{
    id:string | number,
    name:string,
    company?:string,
    date?: string,

}
export interface IList{
    description: string,
    list: Array<IEducation | ISkill | ICourses | ILanguage | IExperience>
}

export interface IAbout {
    education: IList,
    experience:IList,
    skill: IList,
    lang:IList,
    course: IList
}

export interface IProjects {
    id: string | number,
    title: string,
    description : string,
    img: string,
    link: string
}
export interface INavMenu {
    id: string |number,
    name: string,
    link: string
}


