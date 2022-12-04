import express, { NextFunction, Request, Response } from 'express';
import { RequestHandler } from 'express-serve-static-core';

import Student from '../Models/students';
import Subjects from '../Models/subjects';

//create subject marks
export const createSubjectMarks: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const { firstSubject,
            secondSubject,
            thirdSubject,
            fourthSubject,
            totalMarks, studentId } = req.body
        let subject = await Subjects.create({
            firstSubject,
            secondSubject,
            thirdSubject,
            fourthSubject,
            totalMarks,
            studentId
        })

        res.status(201).json({
            message: "subject created Successfully",
            data: subject
        })

    } catch (error) {
        console.log(error)

    }

}

//get all subject marks
export const getallSubjectMarks: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {

        const page: number = parseInt(req.query.page as any) ||0
        const size: number = parseInt(req.query.size as any) ||10
        const subjects = await Subjects.findAndCountAll({
            limit: size,
            offset: page * size
        })

        res.status(200).json({
            data: subjects
        })
    } catch (error) {
        console.log(error)
    }
}


//get single subject marks
export const singleSubject: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    let subject;

    try {
        subject = await Subjects.findOne({
            where: { id: req.params.id },
        });

        res.status(200).json({
            data: subject,
        });
    } catch (error) {
        console.log(error);
    }
};


//update subject marks
export const updateSubjectMarks: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const { firstSubject,
            secondSubject,
            thirdSubject,
            fourthSubject,
            totalMarks, studentId } = req.body
        let subject = await Subjects.update({
            firstSubject,
            secondSubject,
            thirdSubject,
            fourthSubject,
            totalMarks, studentId
        }, { where: { id: req.params.id } })

        res.status(201).json({
            message: "subject update Successfully",
            data: subject
        })

    } catch (error) {
        console.log(error)

    }

}


//delete subject marks
export const deleteSubjectMarks: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    let subject;
    try {
        subject = await Subjects.destroy({
            where: { id: req.params.id },
        });

        res.status(200).send({
            message: 'subject deleted',
        });
    } catch (error) {
        console.log(error);
    }
}


//all subject marks for all students
export const subjectsAndStudents = async (req: Request,
    res: Response,
    next: NextFunction) => {
    try {
        const page: number = parseInt(req.query.page as any) ||0
        const size: number = parseInt(req.query.size as any) ||10
        let data = await Subjects.findAndCountAll({
            attributes: ['firstSubject',"secondSubject","thirdSubject","fourthSubject","totalMarks"],
            include: [{
                model: Student,
                attributes: ["name", "address", "mobile"],

                as: 'student'
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


//particular subject marks for students 
export const singleSubjectAndStudents = async (req: Request,
    res: Response,
    next: NextFunction) => {
    try {
        let data = await Subjects.findOne({
            attributes: ['firstSubject',"secondSubject","thirdSubject","fourthSubject","totalMarks"],
            include: [{
                model: Student,
                attributes: ["name", "address", "mobile"],

                as: 'student'
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
    createSubjectMarks,
    getallSubjectMarks,
    singleSubject,
    updateSubjectMarks,
    deleteSubjectMarks,
    subjectsAndStudents,
    singleSubjectAndStudents

}