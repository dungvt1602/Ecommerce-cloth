import jwt from "jsonwebtoken"

const adminAth = async (req, res, next) => {

    try {
        const { token } = req.headers;
        if (!token) {
            return res.json({ success: false, message: "Not login admin" });
        }
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        console.log(token_decode);

        if (token_decode === process.env.ADMIN_NAME + process.env.ADMIN_PASSWORD) {
            res.json({ success: true, message: "Appove" });
            next();
        }
        else {
            return res.json({ success: true, message: "Not admin" });
        }

    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: "Error" });
    }

}

export default adminAth;