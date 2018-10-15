exports.homePage = function(req, res) {
    res.render('../views/home.hbs');
}

exports.aboutPage = function(req, res) {
    res.render('../views/about.hbs');
}

// NOTE: Not using any pages for Microsoft. This is from the template I used.
