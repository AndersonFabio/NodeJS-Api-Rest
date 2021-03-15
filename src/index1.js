var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = '/home/blocomariodeandrade/www/home/fotos/' + files.filetoupload.name;
      fs.copyFile(oldpath, newpath, function (err) {
        if (err) throw err;
        //res.write(fields.teste);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<meta http-equiv='refresh'"+ 'content="1;'+ "url='"+fields.teste+"'"+'"'+"/>");
        res.end();
    });
      
     /* fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });*/
 });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(21137, () => {
    console.log('API ONLINE UPLOAD');
});