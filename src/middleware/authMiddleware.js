const authMiddleware = (req, res, next) => {
  if (!req.query.userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
};

export default authMiddleware;
