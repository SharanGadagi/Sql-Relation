import express, { NextFunction, Request, Response } from 'express';
import { RequestHandler } from 'express-serve-static-core';

import Standard from '../Models/standard';
import Student from '../Models/students';
import Subjects from '../Models/subjects';

//student created
export const createStudent: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { name, address, mobile, active, stdId } = req.body
        const student = await Student.create({
            name,
            address,
            mobile,
            active,
            stdId
        })

        res.status(201).json({
            message: "Student created Successfully",
            data: student
        })

    } catch (error) {
        console.log(error)

    }

}



//get all students
export const getallStudents: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const page: number = parseInt(req.query.page as any) ||0
        const size: number = parseInt(req.query.size as any) ||10
        const students = await Student.findAndCountAll({
            limit: size,
            offset: page * size
        })

        res.status(200).json({
            data: students
        })
    } catch (error) {
        console.log(error)
    }

}

//get single student
export const singleStudent: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    let student;

    try {
        student = await Student.findOne({
            where: { id: req.params.id },
        });

        res.status(200).json({
            data: student,
        });
    } catch (error) {
        console.log(error);
    }
};


//update Student
export const updateStudent: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    let student;
    const {
        name, address, mobile, active, stdId
    } = req.body;

    try {
        student = await Student.update(
            {
                name, address, mobile, active, stdId
            },
            {
                where: { id: req.params.id },
            })

        res.status(200).json({
            data: student
        });
    } catch (error) {
        console.log(error)
    }
}


//delete Student
export const deleteStudent: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    let student
    try {

        student = await Student.destroy({
            where: { id: req.params.id }
        })



        res.status(200).send({
            message: 'Student deleted'
        })

    } catch (error) {
        console.log(error);
    }
}


//all students have which standard
export const studentAndStd = async (req: Request,
    res: Response,
    next: NextFunction) => {
    try {
        const page: number = parseInt(req.query.page as any) ||0
        const size: number = parseInt(req.query.size as any) ||10
        let data = await Student.findAndCountAll({
            attributes: ["name", "address", "mobile"],
            include: [{
                model: Standard,
                attributes: ['name'],
                as: 'std'
            }],
            limit: size,
            offset: page * size
        })
        res.status(200).json({
            data: data
        })
    } catch (error) {

    }
}

//particular student have which standard
export const singleStudentAndStd = async (req: Request,
    res: Response,
    next: NextFunction) => {
    try {
        let data = await Student.findOne({
            attributes: ["name", "address", "mobile"],
            include: [{
                model: Standard,
                attributes: ['name'],
                as: 'std'
            }],
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            data: data
        })
    } catch (error) {

    }
}


//all students all subject Marks
export const StudentsAndSubjects = async (req: Request,
    res: Response,
    next: NextFunction) => {
    try {
        const page: number = parseInt(req.query.page as any) ||0
        const size: number = parseInt(req.query.size as any) ||10
        let data = await Student.findAndCountAll({
            attributes: ["name", "address", "mobile"],

            include: [{
                model: Subjects,
                attributes: ['firstSubject',"secondSubject","thirdSubject","fourthSubject","totalMarks"],

                as: 'subject'
            }],
            limit: size,
            offset: page * size
        })
        res.status(200).json({
            data: data
        })
    } catch (error) {

    }
}

//particular student all subject marks
export const singleStudentAndSubjects = async (req: Request,
    res: Response,
    next: NextFunction) => {
    try {
        let data = await Student.findOne({

            attributes: ["name", "address", "mobile"],
            include: [{
                model: Subjects,
                attributes:  ['firstSubject',"secondSubject","thirdSubject","fourthSubject","totalMarks"],

                as: 'subject'
            }],
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            data: data
        })
    } catch (error) {

    }
}


module.exports = {
    createStudent,
    getallStudents,
    singleStudent,
    updateStudent,
    deleteStudent,
    studentAndStd,
    singleStudentAndStd,
    StudentsAndSubjects,
    singleStudentAndSubjects

}