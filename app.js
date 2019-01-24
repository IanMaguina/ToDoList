const colors = require('colors');
const argv = require('./config/yargs').argv;

const porHacer = require('./todolist/todolist');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);

        break;
    case 'listar':
        let listado = porHacer.getListado();
        console.log('Lista de tareas'.green);
        for (let tarea of listado) {
            console.log(` - ${tarea.descripcion} -> estado : ${tarea.completado} `.blue);
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('comando no definido');
}