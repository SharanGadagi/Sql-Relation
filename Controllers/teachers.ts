import express, { NextFunction, Request, Response } from 'express';
import { RequestHandler } from 'express-serve-static-core';

import Standard from '../Models/standard';
import Teacher from '../Models/teachers';

//create teacher
export const createTeacher: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const { name, address, mobile, stdId } = req.body
        const teacher = await Teacher.create({
            name,
            address,
            mobile,
            stdId

        })

        res.status(201).json({
            message: "teacher created Successfully",
            data: teacher
        })

    } catch (error) {
        console.log(error)

    }
}


//get all teachers
export const getallTeacher: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {

        const page: number = parseInt(req.query.page as any) ||0
        const size: number = parseInt(req.query.size as any) ||10
        const teachers = await Teacher.findAndCountAll({
            limit: size,
            offset: page * size
        })

        res.status(200).json({
            data: teachers
        })
    } catch (error) {
        console.log(error)
    }
}


//get particular teacher
export const singleTeacher: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    let teacher;

    try {
        teacher = await Teacher.findOne({
            where: { id: req.params.id },
        });

        res.status(200).json({
            data: teacher,
        });
    } catch (error) {
        console.log(error);
    }
};


//update teacher
export const updateTeacher: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    let teacher;
    const {
        name, address, mobile, stdId
    } = req.body;

    try {
        teacher = await Teacher.update(
            {
                name, address, mobile, stdId
            },
            {
                where: { id: req.params.id },
            })

        res.status(200).send({
            data: teacher,
        });
    } catch (error) {
        console.log(error)
    }
}


//delete teacher
export const deleteTeacher: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    let teacher;
    try {
        teacher = await Teacher.destroy({
            where: { id: req.params.id },
        });

        res.status(200).send({
            message: 'teacher deleted',
        });
    } catch (error) {
        console.log(error);
    }
}

//all teachers in which standards
export const teachersAndStd = async (req: Request,
    res: Response,
    next: NextFunction) => {
    try {
        const page: number = parseInt(req.query.page as any) ||0
        const size: number = parseInt(req.query.size as any) ||10
        let data = await Teacher.findAndCountAll({
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

//particular teacher in which standards
export const singleTeacherAndStd = async (req: Request,
    res: Response,
    next: NextFunction) => {
    try {
        let data = await Teacher.findOne({
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


module.exports = {
    createTeacher,
    getallTeacher,
    singleTeacher,
    updateTeacher,
    deleteTeacher,
    teachersAndStd,
    singleTeacherAndStd

}