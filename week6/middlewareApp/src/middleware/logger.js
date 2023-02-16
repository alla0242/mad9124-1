const logger = (req, res, next) => {
  const startTime = Date.now();
  const verb = req.method;
  const route = req.originalUrl;
  res.on("finish", () => {
    const endTime = Date.now();
    const statusCode = res.statusCode;

    console.log(`${verb} ${route} ${statusCode} - - ${endTime - startTime}ms`);
  });
  next();
};

module.exports = logger;
