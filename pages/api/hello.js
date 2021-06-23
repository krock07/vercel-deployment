import jwt from "jsonwebtoken";

KEY = "JwtS3cr3tK3Y";
export default function (req, res) {
  if (!req.body) {
    res.statusCode = 404;
    res.emd("Error");
    return;
  }
  console.log(req.body);
  const { username, password } = req.body;
  res.json({
    token: jwt.sign(
      {
        username,
        password,
        admin: user === "admin" && password === "admin",
      },

      KEY
    ),
  });
}
