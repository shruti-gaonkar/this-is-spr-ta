// This is middleware for restricting routes a user is not allowed to visit if not logged in
var uname = ''; loggedIn = 0; uObj = {};

module.exports = function (req, res, next) {

  console.log("logged in outside of function:", loggedIn);
  // If the user is logged in, continue with the request to the restricted route
  if (req.user) {

    console.log("logged in inside of function:", loggedIn);
    //if (req.session && req.session.passport && req.session.passport.user) {
    loggedIn = 1;
    uname = req.user.name;
    umail = req.user.email;
    //}

    uObj = {
      msg: `Welcome, ${uname}!`,
      name: `${uname}`,
      email: `${umail}`,
      loggedIn: loggedIn
    }

    console.log("logged in inside of function after value update:", loggedIn);
    return next();
  }

  // If the user isn't logged in, redirect them to the login page
  return res.redirect("/");
};
