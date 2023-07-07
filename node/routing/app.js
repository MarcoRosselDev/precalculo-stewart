const http = require('http');
const infoCursos = require('./cursos');

console.log(infoCursos);

const miPage = http.createServer((req, res)=>{
    const {method} = req;

    if (method === 'GET') {
        return manejarSolicitudGET(req, res);
    } else {
        console.log(`El metodo no puede ser manejado por el servidor : ${method}`);
    }

    res.end('response');
});

function manejarSolicitudGET(req, res) {
    let path = req.url;

    if (path === "/") {
        res.end(`Method GET and you're in home url`)
    } else if (path === "/courses") {
        res.end(JSON.stringify(infoCursos));
    }
}

const PORT = 3001;

miPage.listen(PORT, ()=>{
    console.log(`listening on port ${PORT} ...`);
});