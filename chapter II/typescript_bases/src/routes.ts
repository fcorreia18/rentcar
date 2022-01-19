import {Request, Response} from 'express';
import CreateCourseService from './CreateCourseService';

export function createCourse(req:Request, res:Response){
    CreateCourseService.execute({educator:"Francisco Correia", name:"Node.js"});

    return res.send();
}