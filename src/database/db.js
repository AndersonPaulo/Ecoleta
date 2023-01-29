//importar a dependencia do sqlite3

const sqlite3= require("sqlite3").verbose()
//iniciar o objeto de banco de dados que orá fazer operações
const db = new sqlite3.Database("./src/database/database.db")
// utilizar o objeto de banco de dados,para nossas operações
// db.serialize(() =>{
//     //códigos com comandos sql iremos:

//     //1 Criar uma tabela   
        
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id  INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name,TEXT
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)
//     //2 inserir dados na tabela
//     const query = `
//     INSERT INTO places (
//         image,
//         name,
//         address,
//         address2,
//         state,
//         city,
//         items
//     ) VALUES(?,?,?,?,?,?,?);
// `
//     const values = ["https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVjeWNsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
//     "Colectoria",
//     "Guilherme Gemballa,jardim América",
//     "Numero 260",
//     "Santa Catarina",
//     "Rio do Sul",
//     "Resíduos Eletrônicos , Lâmpadas"]

//     function afterInsertData(err){
//         if(err){
//             return console.log(err)

//         }
//         console.log("Cadastrado com sucesso")
//         console.log(this)
//     }
//      //db.run(query,values,afterInsertData )
//     //3 consultar dados na tabela
//     db.all(`SELECT * FROM places`, function(err,rows) {
//         if(err){
//             return console.log(err)
    
//         }
//         console.log("Aqui estão seus registros: ")
//         console.log(rows)
//     })    

//     // 4 Deletar um dado
//     //db.run(`DELETE FROM places WHERE id = ?`,[1],function(err){
//         //if(err){
//             //return console.log(err)
    
//         //}
//        // console.log("Registro deletado com sucesso!")

//     //})
   
 
// })






