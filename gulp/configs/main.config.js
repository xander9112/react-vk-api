module.exports = {
    paths:      {
        sass:   './src/assets/sass/main.scss',
        entry:  './src/assets/js/index.js',
        js:     './src/assets/js/**/*.js',
        vendor: [
            './src/assets/vendor/jquery-2.2.3.min.js',
            './src/assets/vendor/lodash.core.min.js',
            './src/assets/vendor/**/*.js'
        ],
        html:   './src/*.html',
        dist:   './',
        images: './src/assets/images/**/*',
        fonts:  './src/assets/fonts/**/*'
    },
    output:     {
        js:     'assets/js',
        vendor: 'assets/vendor',
        css:    'assets/css',
        images: 'assets/images',
        fonts:  'assets/fonts'
    },
    production: false
};
