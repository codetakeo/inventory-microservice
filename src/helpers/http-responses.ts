import { Response } from 'express';

const Status = {
    OK: 200,
    CREATED: 201,
    DELETED: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    SERVER_ERROR: 500,
};

const statusMessage = (status: number) => {
    switch (status) {
        case Status.OK:
            return 'OK';
        case Status.CREATED:
            return 'Created';
        case Status.DELETED:
            return 'Deleted';
        case Status.BAD_REQUEST:
            return 'Bad Request';
        case Status.UNAUTHORIZED:
            return 'Unauthorized';
        case Status.FORBIDDEN:
            return 'Forbidden';
        case Status.NOT_FOUND:
            return 'Not Found';
        case Status.SERVER_ERROR:
            return 'Internal Server Error';
        default:
            throw new Error('Invalid status code');
    }
};

interface ResponseStructure {
    status: string;
    data?: Record<any, any>;
    error?: Record<any, any>;
}

const jsonResponse = (
    res: Response,
    body: ResponseStructure,
    options: Record<any, any>,
) => {
    options = options || {};
    options.status = options.status || Status.OK;
    res.status(options.status).json(body || null);
};

const successResponse = (
    res: Response,
    httpCode: number,
    data: Record<any, any>,
) => {
    const body: ResponseStructure = { status: statusMessage(httpCode) };

    body.data = data;

    jsonResponse(res, body, {
        status: httpCode,
    });
};

const errorResponse = (res: Response, httpCode: number, error?: Error) => {
    const body: ResponseStructure = { status: statusMessage(httpCode) };

    if (error instanceof Error) {
        body.error = {
            message: error.message,
            stacktrace: error.stack,
        };
    }

    jsonResponse(res, body, {
        status: httpCode,
    });
};

const ok = (res: Response, data: Record<any, any>): void => {
    return successResponse(res, Status.OK, data);
};

const created = (res: Response, data: Record<any, any>): void => {
    return successResponse(res, Status.CREATED, data);
};

const deleted = (res: Response, data: Record<any, any>): void => {
    return successResponse(res, Status.DELETED, data);
};

const badRequest = (res: Response, error: Error): void => {
    return errorResponse(res, Status.BAD_REQUEST, error);
};

const unauthorized = (res: Response, error: Error): void => {
    return errorResponse(res, Status.UNAUTHORIZED, error);
};

const forbidden = (res: Response, error: Error): void => {
    return errorResponse(res, Status.FORBIDDEN, error);
};

const notFound = (res: Response): void => {
    return errorResponse(res, Status.NOT_FOUND);
};

const serverError = (res: Response, error: Error): void => {
    return errorResponse(res, Status.SERVER_ERROR, error);
};

export {
    ok,
    created,
    deleted,
    badRequest,
    unauthorized,
    forbidden,
    notFound,
    serverError,
};
