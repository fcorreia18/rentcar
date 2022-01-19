import {Request, Response} from 'express';
import CreateCourseService from './CreateCourseService';

export function createCourse(req:Request, res:Response){
    CreateCourseService.execute("Francisco", 12, "Francisco Correia");

    return res.send();
}