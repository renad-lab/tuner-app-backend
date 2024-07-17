const checkName = (req, res, next) => {
  const { name, artist } = req.body;
  if (name && artist) {
    next();
  } else {
    res.status(400).json({ error: "Name and artist are required fields" });
  }
};

const checkBoolean = (req, res, next) => {
  const { is_favorite } = req.body;
  if (typeof is_favorite === "boolean") {
    next();
  } else {
    res.status(400).json({ error: "is_favorite must be a boolean value" });
  }
};

module.exports = { checkBoolean, checkName };
