import instance from "../setup/axios";
const registerNewUser = async (email, phone, username, password) => {
    return await instance
        .post("/api/register", {
            email,
            phone,
            username,
            password,
        })
        .then((response) => {
            console.log("Axios GET response:", response);
            return response;
        })
        .catch((error) => {
            console.error("Axios GET error:", error);
        });
};

const loginUser = async (keyLogin, password) => {
    console.log("???");
    return instance
        .post("/api/login", {
            keyLogin,
            password,
        })
        .then((response) => {
            console.log("Axios GET response:", response);
            return response;
        })
        .catch((error) => {
            console.error("Axios GET error:", error);
        });
};
export { registerNewUser, loginUser };
