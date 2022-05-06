const axios = require("axios")
const { v4: uuidv4 } = require('uuid')
const fecha = require('moment')
const _ = require('lodash')

axios
    .get('https://randomuser.me/api/?results=7')
    .then((data) => {
        const datosUsuarios = data.data.results
        let contador = 1;
       
        _.forEach(datosUsuarios, (e) => {
            console.log(`${contador}. Nombre: ${e.name.first} Apellido: ${e.name.last} - ID: ${uuidv4().slice(0,6)} Timestamp: ${fecha().format('MMMM Do YYYY, h:mm:ss a')}`)
            console.log('------------------------------------------------------')
            contador++
        })
    })
    .catch((e) => {
        console.log(e)
    })