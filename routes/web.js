const express = require("express");
const router = express.Router();
const { catchErrors } = require("../handlers/errorHandlers");
const ContactFormController = require("../controllers/ContactFormController");
const captcha = require("nodejs-captcha");

// The main route
router.get("/", (request, response) => {
  response.render("home", {
    title: "mhh",
    captchaImg: captcha().image,
    description:
      "Hello I am Mandar a Software Engineer."
  });
});

router.post(
  "/contact",
  ContactFormController.validationRules,
  ContactFormController.errorHandling,
  catchErrors(ContactFormController.submitForm)
);
module.exports = router;
