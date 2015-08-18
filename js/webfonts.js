// cg: Asynchronously load Google web fonts
// replacing   <link href="//fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet">
// using https://github.com/typekit/webfontloader.git

WebFontConfig = {
    google: {families: ['Open Sans Condensed:400,700']}
};

(function(d) {
    var wf = d.createElement('script'), s = d.scripts[0];
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js';
    s.parentNode.insertBefore(wf, s);
})(document);
