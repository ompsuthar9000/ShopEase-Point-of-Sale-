const AUTHTOKEN = "e8038f25eedc82d248f9e5c42aca5199";
const Service_SID = "VA2d8ce3c7be9f6fc1d78611d095fffa26";
const ACCOUNT_SID = "AC31102ad8656fe138811a3e33612ddc53";
const client = require("twilio")(ACCOUNT_SID, AUTHTOKEN);
exports.otpsender = (number) => {
  client.verify.v2
    .services(Service_SID)
    .verifications.create({ to: `${number}`, channel: "sms" })
    .then((verification) => console.log(verification.status));
};

exports.otpverify = (otp, number) => {
  client.verify.v2
    .services(Service_SID)
    .verificationChecks.create({ to: `+91${number}`, code: `${otp}` })
    .then((verification_check) => console.log(verification_check.status));
};
