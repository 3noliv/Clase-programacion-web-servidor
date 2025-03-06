const customHeader = (req, res, next) => {
  try {
    const apiKey = req.headers.api_key;
    if (apiKey === "Api-publica-123") {
      next();
    } else {
      res.status(403).send("API Key incorrecta");
    }
  } catch (err) {
    res.status(403).send(err);
  }
};
module.exports = customHeader;
