module.exports = (req, res, next) => {
  if (req.query.name) {
    next();
  } else {
    next('you have to provide a name');
  }
};

