const http = require('http')
const axios = require("axios")
const { v4: uuidv4 } = require('uuid')
const fecha = require('moment')
const _ = require('lodash')
const chalk = require('chalk')

http
    .createServer(function (req, res) {
        if(req.url.includes('/buscar')){
            axios
            .get('https://randomuser.me/api/?results=7')
            .then((data) => {
                const datosUsuarios = data.data.results
                let contador = 1;
                _.forEach(datosUsuarios, (e) => {
                    console.log(chalk.blue.bgWhite.bold(`${contador}. Nombre: ${e.name.first} Apellido: ${e.name.last} - ID: ${uuidv4().slice(0, 6)} Timestamp: ${fecha().format('MMMM Do YYYY, h:mm:ss a')}`))
                    res.write(`${contador}. Nombre: ${e.name.first} Apellido: ${e.name.last} - ID: ${uuidv4().slice(0, 6)} Timestamp: ${fecha().format('MMMM Do YYYY, h:mm:ss a')}\n`)
                    console.log('------------------------------------------------------')
                    contador++
                })
                res.end()
            })
            .catch((e) => {
                console.log(e)
            })
        }
    })
    .listen(8080, () => console.log('Escuchando el puerto 8080')) 