const { response, request } = require("express");
const { respJson } = require("../db/resp-json");


const clientesGet = (req = request , res = response) =>{

    //Verificamos el id del usuario

    let Cli_Id= req.uid;
    
    //Ejecuta la solicitud
    let sql = 'call sp_Core_ListarCliente( :_Cli_Id )'
    let paramsSql = {
        _Cli_Id: Cli_Id
    }
    console.log(paramsSql)
    respJson(res,sql,paramsSql)
}

const clientesPost = (req=request , res = response) =>{
    const { Cli_Dni, Cli_Usuario, Cli_Email, Cli_Pass, Cli_Estado } = req.body;
    //Verificamos el id del usuario
    console.log( req.uid );
    let Cli_Id= req.uid;
    
    //Ejecuta la solicitud
    let sql = 'call sp_Core_AltaCliente( :_Cli_Id , :_Cli_Dni, :_Cli_Usuario, :_Cli_Email, :_Cli_Pass, :_Cli_Estado)'
    let paramsSql = {
        _Cli_Id: Cli_Id,
        _Cli_Dni: Cli_Dni,
        _Cli_Usuario: Cli_Usuario,
        _Cli_Email: Cli_Email,
        _Cli_Pass: Cli_Pass,
        _Cli_Estado: Cli_Estado

    }
    console.log(paramsSql)
    respJson(res,sql,paramsSql)  

}
const clientesPut = (req=request , res = response) =>{
    const { Cli_Dni, Cli_Usuario, Cli_Email, Cli_Pass, Cli_Estado } = req.body;
    //Verificamos el id del usuario
    console.log( req.uid );
    let Cli_Id= req.uid;
    
    //Ejecuta la solicitud
    let sql = 'call sp_Core_ModCliente( :_Cli_Id , :_Cli_Dni, :_Cli_Usuario, :_Cli_Email, :_Cli_Pass, :_Cli_Estado)'
    let paramsSql = {
        _Cli_Id: Cli_Id,
        _Cli_Dni: Cli_Dni,
        _Cli_Usuario: Cli_Usuario,
        _Cli_Email: Cli_Email,
        _Cli_Pass: Cli_Pass,
        _Cli_Estado: Cli_Estado

    }
    console.log(paramsSql)
    respJson(res,sql,paramsSql)  

}
const clientesDelete = (req=request , res = response) =>{
    const { Cli_Dni } = req.body;
    //Verificamos el id del usuario
    console.log( req.uid );
    let Cli_Id= req.uid;
    
    //Ejecuta la solicitud
    let sql = 'call sp_Core_BajaCliente( :_Cli_Id , :_Cli_Dni )'
    let paramsSql = {
        _Cli_Id: Cli_Id,
        _Cli_Dni: Cli_Dni

    }
    console.log(paramsSql)
    respJson(res,sql,paramsSql)  
}





module.exports={
    clientesGet,
    clientesPost,
    clientesPut,
    clientesDelete,
}