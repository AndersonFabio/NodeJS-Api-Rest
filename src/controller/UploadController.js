var formidable = require('formidable');
var fs = require('fs');

class UploadController {

    async  upload(req, res) {
            var form = new formidable.IncomingForm();
            form.parse(req, function (err, fields, files) {
              var oldpath = files.filetoupload.path;
              var newpath = '/home/blocomariodeandrade/www/home/fotos/' + files.filetoupload.name;
              fs.copyFile(oldpath, newpath, function (err) {
                if (err) throw err;
                //res.write(fields.teste);
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write("<meta http-equiv='refresh'"+ 'content="1;'+ "url='"+fields.teste+"&fname="+files.filetoupload.name+"'"+'"'+"/>");
                res.end();
               //res.sendStatus(200);
            });
        })
        }}  
        
   
module.exports = new UploadController();