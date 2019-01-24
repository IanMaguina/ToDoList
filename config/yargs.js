const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'la descripcion de la tarea por hacer'
}
const completado = {
    alias: 'c',
    default: true,
    desc: 'estado de la tarea'
}
const argv = require('yargs')
    .command('crear', 'crea una tarea', {
        descripcion
    })
    .command('actualizar', 'actualiza una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'elimina una tarea', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}