import {Request, Response} from 'express';
import CreateCourseService from './CreateCourseService';

export function createCourse(req:Request, res:Response){
    CreateCourseService.execute({educator:"Francisco Correia", name:"Node.js", duration:12});

    return res.send();
}