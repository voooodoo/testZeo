const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const scss = require('gulp-sass');

const config = {
    src:'./app',
    dist:'./dist',
    css:{
        watch:'/styles/**/*.scss',
        src:'/styles/main.scss',
        dest:'/css'
    },
    html:{
        src:'/index.html'
    }
};

gulp.task('build', function() {
    gulp.src(config.src+config.css.src)
            .pipe(sourcemaps.init())
            .pipe(scss())
            .pipe(autoprefixer({
                browsers: ['>0.1%'],
                cascade: false
            }))
            .pipe(cleanCSS({
                level:2
            }))
            .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.dist+config.css.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('watch', ['browserSync'], function() {
    gulp.watch(config.src+config.css.src,['build']);
    gulp.watch(config.dist+config.html.src, browserSync.reload);
});

gulp.task('browserSync', function(){
    browserSync.init({
        server: {
            baseDir: config.dist 
        }
    });
});