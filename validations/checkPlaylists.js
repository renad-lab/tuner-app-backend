// Validate the name field
const checkName = (req, res, next) => {
  const { name } = req.body;

  // Check if name is a non-empty string
  if (typeof name === "string" && name.trim() !== "") {
    next();
  } else {
    res
      .status(400)
      .json({ error: "Name is required and must be a non-empty string" });
  }
};

// Validate the URL field
const validateURL = (req, res, next) => {
  const { url } = req.body;

  // Regular expression for validating URL
  const urlRegex = /^(https?:\/\/)?([^\s$.?#].[^\s]*)$/i;

  // Check if URL is either undefined or a valid URL
  if (url === undefined || urlRegex.test(url)) {
    next();
  } else {
    res.status(400).json({ error: "URL must be a valid URL or undefined" });
  }
};

module.exports = { checkName, validateURL };
