import 'dotenv/config';


export const cfg = {
    baseURL: process.env.BASE_URL?.trim(),
    ilynURL: process.env.ILYN_URL?.trim(),
    headless: process.env.PW_HEADLESS === 'false' ? false : true,
    slowMo: process.env.PW_DEBUG ? 200 : 0,
    viewport: { width: 1620, height: 800 },
    creds: {
        user: process.env.USER_NAME,
        pass: process.env.USER_PASS,
        suser: process.env.SUSER_NAME,
        ilynuser: process.env.ILYN_USER
    }
};


if (!cfg.baseURL) {
    throw new Error('BASE_URL not set. Please create a .env file with BASE_URL');
}