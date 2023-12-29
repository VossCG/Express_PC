export const logRequestInfo = (req, res, next) => {
    const requestUrl = req.url;
    const requestBody = req.body;

    console.log(`Request URL: ${requestUrl}`);
    console.log(`Request Body: ${JSON.stringify(requestBody)}`);

    next();
};
