module.exports = (req, res, next) => {
    // cookies authenticaiton and passing to the next step if not 
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ error: "you must be logged in" });
    }
    const token = authorization.replace("Bearer ", "");
}