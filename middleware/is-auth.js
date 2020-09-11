// routes protection fuction

module.exports = (req, res, next) => { // checks if the user is login in befor moving to certain routes
    if (!req.session.isLoggedIn) {
        return res.redirect('/login');
    }
    next();
}