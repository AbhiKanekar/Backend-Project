class apiResponse {
    constructor(message, statusCode, data = null) {
        this.message = message;
        this.statusCode = statusCode;
        this.data = data;
        this.success = statusCode >= 200 && statusCode < 400;
        this.errors = null;
    }
}

export {apiResponse}