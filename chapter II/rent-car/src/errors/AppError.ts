export class AppError {
    readonly message: string;
    readonly statusCode: string;

    constructor(message: string, statusCode: string) {
        this.message = message;
        this.statusCode = statusCode;
    }
}
