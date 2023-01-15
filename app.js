const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const bodyParser=require('body-parser')
var multer = require('multer');
var upload = multer();
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/storage', express.static(__dirname + '/storage'));
app.use('/storage/horarios', express.static(__dirname + '/storage/horarios'));
app.use('/storage/actas', express.static(__dirname + '/storage/actas'));

const whitelist = ['http://127.0.0.1:8081', 'https://myapp.co','http://192.168.0.110:8081','http://localhost:8081'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}
app.use(cors());
require('./utils/auth');

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

routerApi(app);

app.get('/descargar/:id', function(req,res){
      res.download(__dirname+'/storage/'+ req.params.id,
      req.params.id,function(err){
        if(err){
          console.log(err);
        }else{
          console.log("LISTO");
        }

      })
});
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () => {
  console.log('Mi port' +  port);
});
