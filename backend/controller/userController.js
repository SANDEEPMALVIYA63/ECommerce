const user = require("../model/userModel");
// const {hashedPass,decryptPass} = require ('')

const userLogin = async (req, res) => {
  const { email } = req.body;
  try {
    const result = await user.findOne({ email: email });
    if (email === email) {
      res
        .status(200)
        .send({
          mag: "Login successfuly",
          data: [result._id, result.name, result.email],
        });
    } else {
      res.status(400).send({ mag: "user not found " });
    }
  } catch (error) {
    res.status(400).send({ mag: "somthong went wrong  ", error: error });
  }
};

// this function working  is signup the user

const userSignup = async (req, res) => {
  console.log("Signup page ");

  const { name, email, contacte, password, confirmPass } = req.body;

  try {
    const alreadyUser = await user.findOne({ email: email });
    if (alreadyUser) {
      res.status(400).json({ msg: "User already exists" });
    } else if (password === confirmPass) {
      //    const hashedPassword= await hashedPass(password);
      //   console.log(hashedPassword);
      const data = await user.create({
        name: name,
        contacte: contacte,
        email: email,
        password: password,
      });
      res.status(201).send({ msg: "user Added ", data: { name, email } });
      //   console.log(data);
    } else {
      res.status(400).send({ msg: "Wrong Password ! ", data: {} });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: "somthing went wrong!", error: error });
  }
};

module.exports = { userLogin, userSignup };
