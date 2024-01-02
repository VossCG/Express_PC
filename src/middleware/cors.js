
export const corsMiddleware = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', process.env.LOCAL_URL);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);

    // 處理 OPTIONS 預檢請求
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
}