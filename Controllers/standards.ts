import express, { NextFunction, Request, Response } from 'express';
import { RequestHandler } from 'express-serve-static-core';

import { DATABASE_NAME } from '../Config/config';
import db from '../Connection/db';
import Standard from '../Models/standard';
import Student from '../Models/students';
import Teacher from '../Models/teachers';

//create standard
export const createStandard: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const { name, active } = req.body
        const standard = await Standard.create({
            name,
            active
        })

        res.status(201).json({
            message: "standard created Successfully",
            standard
        })
    } catch (error) {
        console.log(error)
    }
};


//get all standards
export const getallStandard: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const page: number = parseInt(req.query.page as any) ||0
        const size: number = parseInt(req.query.size as any) ||10
        const standards = await Standard.findAndCountAll({
            limit: size,
            offset: page * size
        })

        res.status(200).json({
            data: standards
        })
    } catch (error) {
        console.log(error)
    }
}


//get single standard
export const singleStandard: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    let standard;

    try {
        standard = await Standard.findOne({
            where: { id: req.params.id },
        });

        res.status(200).json({
            data: standard,
        });
    } catch (error) {
        console.log(error);
    }
};



//update standard
export const updateStandard: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    let standard;
    const {
        name, active
    } = req.body;

    try {
        standard = await Standard.update(
            {
                name, active
            },
            {
                where: { id: req.params.id },
            })


        res.status(200).send({
            data: standard,
        });
    } catch (error) {
        console.log(error)
    }
}


//delete standard
export const deleteStandard: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    let standard;
    try {
        standard = await Standard.destroy({
            where: { id: req.params.id },
        });

        res.status(200).send({
            message: 'standard deleted',
        });
    } catch (error) {
        console.log(error);
    }
}


//all standards have which students
export const stdsAndStudents = async (req: Request,
    res: Response,
    next: NextFunction) => {
    try {
        const page: number = parseInt(req.query.page as any) ||0
        const size: number = parseInt(req.query.size as any) ||10
        let data = await Standard.findAndCountAll({
            attributes: ['name'],
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

//particular standard have which students
export const singleStdAndStudents = async (req: Request,
    res: Response,
    next: NextFunction) => {
    try {

        let data = await Standard.findOne({
            attributes: ['name'],
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

//all standards  have which teachers
export const stdsAndTeachers = async (req: Request,
    res: Response,
    next: NextFunction) => {
    try {
        const page: number = parseInt(req.query.page as any) ||0
        const size: number = parseInt(req.query.size as any) ||10
        let data = await Standard.findAndCountAll({
            attributes: ['name'],
            include: [{
                model: Teacher,
                attributes: ["name", "address", "mobile"],

                as: 'teacher'
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


//particular standard have which teachers
export const singleStdAndTeacher = async (req: Request,
    res: Response,
    next: NextFunction) => {
    try {
        let data = await Standard.findOne({
            attributes: ['name'],
            include: [{
                model: Teacher,
                attributes: ["name", "address", "mobile"],

                as: 'teacher'
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
    createStandard,
    getallStandard,
    singleStandard,
    updateStandard,
    deleteStandard,
    stdsAndStudents,
    singleStdAndStudents,
    stdsAndTeachers,
    singleStdAndTeacher


}