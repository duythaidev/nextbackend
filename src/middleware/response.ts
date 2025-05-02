import { Response } from "express";

export const returnResponse = (res: Response, status: number, EM: string, EC: number, DT?: any) => {
    if (DT) {
        return res.status(status).json({
            EM,
            EC,
            DT
        })
    }
    return res.status(status).json({
        EM,
        EC,
    });
}
