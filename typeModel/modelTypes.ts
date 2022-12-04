//student
export interface StudentAttributes {
    id: any,
    name: string,
    address: string,
    mobile: string,
    active: boolean,
    stdId: any

}


//teacher
export interface TeacherAttributes {
    id: any,
    name: string,
    address: string,
    mobile: string,
    stdId: any

}

//subject marks
export interface SubjectAttributes {
    id: any,
    firstSubject: number,
    secondSubject: number,
    thirdSubject: number,
    fourthSubject: number,
    totalMarks: number,
    studentId: any

}


//standard
export interface StandardAttributes {
    id: any,
    name: string,
    active: boolean

}