let rootPath = "http://localhost:8000";

// if (import.meta.env.VITE_DEV_MODE === "dev") {
//     rootPath = "http://localhost:8000";
// } else {
//     rootPath = "http://your-url.com";
// }

const POST_AUTH_URL = `${rootPath}/auth/register`
const POST_LOGIN_URL = `${rootPath}/auth/login`

export {
    POST_AUTH_URL,
    POST_LOGIN_URL
}
