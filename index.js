const marked = require('marked');
const fs = require('fs');
const path = require('path');
const pdf = require('html-pdf');

const getMD = (dir, cb) => {
    fs.readdirSync(dir).forEach(file => {
        let pathname = path.join(dir, file);
        if (fs.statSync(pathname).isDirectory()) {
            getMD(pathname, cb);
        } else {
            cb(pathname);
        }
    });
};

const markit = (src, cb) => {
    let basename, truepath, content, html, htmlpath;
    basename = path.basename(src, '.md');
    truepath = path.resolve(__dirname, src);
    htmlpath = path.resolve(__dirname, basename + '.html');
    content = fs.readFileSync(truepath, 'utf-8');
    html = marked(content);
    pdf.create(html, { format: 'A4' }).toFile(path.resolve(__dirname, basename + '.pdf'), (err, res) => {
        if (err) {
            throw err;
        }
        console.log(res.filename + ' finished.');
    });
    cb(htmlpath, html);
};

getMD('./bin/md', pathname => {
    markit(pathname, (src, html) => {
        fs.open(src, 'w', (err, fd) => {
            if (err) {
                throw err;
            }
            fs.write(fd, html, 0, 'utf-8', err => {
                if (err) {
                    throw err;
                }
                fs.closeSync(fd);
            });
        });
    });
});
