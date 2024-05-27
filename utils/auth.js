import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

export const checkToken = (req) => {
  // Extract token from Authorization header
  const authorizationHeader = req.headers instanceof Headers 
    ? req.headers.get("authorization") 
    : req.headers.authorization;
  let token = authorizationHeader?.replace('Bearer ', '');
  if (token && token != 'null') {
    return jwt.verify(token, process.env.JWT_SECRET);
  } else {
    return null;
  }
}
