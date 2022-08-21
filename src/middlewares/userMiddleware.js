function middle(req, res, next) {
  if (!req.body.password) {
    console.log("password required!!");
    res.status(400).send("Password required!!");
  } else {
    next();
  }
}
