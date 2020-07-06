const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get('/', passport.authenticate('google', { scope: ['profile'] }));

router.get(
  '/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    return res.redirect('/');
  }
);

router.get('/logout', (req, res) => {
  req.logout();
  return res.redirect('/');
});

router.get('/current_user', (req, res) => {
  return res.send(req.user);
});

module.exports = router;
