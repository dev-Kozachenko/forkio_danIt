import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css'; 
import autoPrefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps'

const sass = gulpSass(dartSass);

export const scss = () => {
    return app.gulp.src(app.path.src.scss)

    .pipe(app.plugins.if(app.isDev, sourcemaps.init()))

    // .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'expanded'
    }))
    .pipe(autoPrefixer({
        grid: true,
        overrideBrowserslist: ['last 3 versions'],
        cascade: true
    }))
    .pipe(app.plugins.if(app.isDev, sourcemaps.write()))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(cleanCss())
    .pipe(rename({
        extname: ".min.css"
    }))

    .pipe(app.plugins.if(app.isDev, sourcemaps.write()))
    // .pipe(sourcemaps.write())
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream());
 }