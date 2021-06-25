import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

    const authToken = request.headers.authorization;

    if (!authToken) {
        return response.status(401).end();
    }

    const [, token] = authToken.split(" ");

    try {
        const { sub } = verify(token, "5d589c15337c89b4a5ff67e923357b3b") as IPayload;

        request.user_id = sub;

        return next();
    } catch(e) {
        return response.status(401).end();
    }

}