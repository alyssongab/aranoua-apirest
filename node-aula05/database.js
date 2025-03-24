import sqlite3 from 'sqlite3';

sqlite3.verbose();

// "Create database" do mysql
const db = new sqlite3.Database('./database.sqlite', (err) => {
    if(err){
        console.error('Erro ao conectar ao banco de dados', err.message);
    }
    else{
        console.log('Conectado ao banco de dados com sucesso');
    }
});

// serialize = 'processe isso dentro de um arquivo'
db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS cidades' +
        ' (id INTEGER PRIMARY KEY AUTOINCREMENT,' + 
        ' cidade TEXT NOT NULL)',
    (err) => {
        if(err){
            console.error('Erro ao criar a tabela cidades', err.message);
        }
        else{
            console.log('Tabela cidades criada com sucesso');
        }
    });
});

export default db;