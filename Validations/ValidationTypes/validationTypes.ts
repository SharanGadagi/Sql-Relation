
//student
export interface StudentsCreateAndUpdateAttributes {
    name: string,
    address: string,
    mobile: string,
    active: boolean,
    stdId: string

}

//subjectMarks
export interface SubjectsCreateAndUpdateAttributes {
    firstSubject: number,
    secondSubject: number,
    thirdSubject: number,
    fourthSubject: number,
    totalMarks: number,
    studentId: string
}


//standard
export interface StandardsCreateAndUpdateAttributes {
    name: string,
    active: boolean

}


//teacher
export interface TeacherCreateAndUpdateAttributes {
    name: string,
    address: string,
    mobile: string,
    stdId: string
}


export interface QueryAttributes{
    page:number,
    size:number
}

export interface ParamsAttributes{
    id:string  
}