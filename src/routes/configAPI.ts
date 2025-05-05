import { NextFunction, Request, Response, Router } from 'express';
import express from 'express'
import userRouter from './userAPI';
import todoRouter from './todosAPI';
import authRouter from './authAPI';

const ms = 10

const delay = (req:Request, res:Response, next:NextFunction) => {
    setTimeout(next, ms);
};

const configRoutes = (app: express.Application) => {
    app.use(delay); // <-- đặt trước các use còn lại

    app.use('/api/auth', authRouter);
    app.use('/api/users', userRouter);
    app.use('/api/todos', todoRouter);
}

export default configRoutes;