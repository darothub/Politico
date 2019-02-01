import dotenv from 'dotenv';

dotenv.config();

const verifyToken = (req, res, next) => {
  const tokenHeader = req.headers.authorization;
  if (typeof tokenHeader !== 'undefined') {
    const tokenBearer = tokenHeader.split(' ');
    const bearerToken = tokenBearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.status(403);
  }
};

export default verifyToken;
