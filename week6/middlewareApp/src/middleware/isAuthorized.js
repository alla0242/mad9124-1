const isAuthorized = (role) => {
  return (req, res, next) => {
    const { user } = req;
    if (!user) {
      res.status(401).json({
        error: "You must be signed in",
      });
    }
    // not authorized
    if (user.role !== role) {
      res.status(403).json({
        error: `you must be a ${role} to access this data`,
      });
      return;
    }
    next();
  };
};

module.exports = isAuthorized;
