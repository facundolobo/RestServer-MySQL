const generaJWT = require("../helpers/generaJWT");

const { response, request } = require('express');
const { db } = require("./conexion");

const respJson= async( res = response, sql, paramsSql )=> {
        
    try {

    //peticion SQL a BBDD

    const resp = await db.query(sql, {replacements: paramsSql} ); //obtenemos la resp que es "id" del usuario
    console.log(resp)
    
    // Si la respuesta llega 
    // if( resp[0] != undefined ){

        //obtenemos el Cli_Id de la base de datos

        //devolvemos la respuesta el mensaje
        res.status(200).json({
            resp
        })
    // }


    } catch (error) {

    res.status(500).json({
        error,
        msg: "Error de servidor json",

    })}
}
module.exports={
    respJson
}