import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class DatabaseService {

  private database: SQLiteObject;
  private dbReady = new BehaviorSubject<boolean>(false);

  constructor(private platform:Platform, private sqlite:SQLite) {
    
    this.platform.ready().then(()=>{
        this.sqlite.create({
          name: 'mesas.db',
          location: 'default'
        })
        .then((db:SQLiteObject)=>{
          this.database = db;
  
          this.createTables().then(()=>{     
            //communicate we are ready!
            this.dbReady.next(true);
          });
        })
  
      });

   }

  private createTables(){
    return this.database.executeSql(
        `CREATE TABLE IF NOT EXISTS lista (
          idLista INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT,
          date_criacao date
        );`
      ,{})
      .then(()=>{
        return this.database.executeSql(
        `CREATE TABLE IF NOT EXISTS mesas (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          descricao TEXT,
          valorTotal NUMERIC,
          encerrarMesa boolean,
          status boolean,
          numeroMesa INTEGER,
          listId INTEGER,
          FOREIGN KEY(listaId) REFERENCES lista(idLista)
          );`,{} )
      }).catch((err)=>console.log("error detected creating tables", err));
   }
  private isReady(){ 
    return new Promise((resolve, reject) =>{
        //if dbReady is true, resolve
        if(this.dbReady.getValue()){
          resolve();
        }
        //otherwise, wait to resolve until dbReady returns true
        else{
          this.dbReady.subscribe((ready)=>{
            if(ready){ 
              resolve(); 
            }
          });
        }  
      })
  }

  getLists(){
    return this.isReady()
    .then(()=>{
      return this.database.executeSql("SELECT * from lista", [])
      .then((data)=>{
        let lists = [];
        for(let i=0; i<data.rows.length; i++){
          lists.push(data.rows.item(i));
        }
        return lists;
      })
    })
}

  addList(name:string ,dt_criacao:Date ){
    return this.isReady()
    .then(()=>{
      return this.database.executeSql(`INSERT INTO lista(name, dt_criacao) VALUES ('${name}', ${dt_criacao}');`, {}).then((result)=>{
        if(result.insertId){
          return this.getList(result.insertId);
        }
      })
    });  
   }
  getList(id:number){
    return this.isReady()
    .then(()=>{
      return this.database.executeSql(`SELECT * FROM lista WHERE idLista = ${id}`, [])
      .then((data)=>{
        if(data.rows.length){
          return data.rows.item(0);
        }
        return null;
      })
    })  
   }

  deleteList(id:number){
    return this.isReady()
    .then(()=>{
      return this.database.executeSql(`DELETE FROM lista WHERE idLista = ${id}`, [])
    })
   }

  getMesasFromLista(listId:number){
    return this.isReady()
    .then(()=>{
      return this.database.executeSql(`SELECT * from mesas WHERE listaId = ${listId}`, [])
            .then((data)=>{
              let todos = [];
              for(let i=0; i<data.rows.length; i++){
                let todo = data.rows.item(i);
                //cast binary numbers back to booleans
                todo.isImportant = !!todo.isImportant;
                todo.isDone = !!todo.isDone;
                todos.push(todo);
              }
              return todos;
            })
    })
   }
  
  //TODO INCLUIR DADOS DE MESA 
  addMesa(description:string, isImportant:boolean, isDone:boolean, listId:number){
    return this.isReady()
    .then(()=>{
      return this.database.executeSql(`INSERT INTO mesa 
        (description, isImportant, isDone, listId) VALUES (?, ?, ?, ?);`, 
        //cast booleans to binary numbers        
        [description, isImportant?1:0, isDone?1:0, listId]);
    }); 
   }

  modifyTodo(description:string, isImportant:boolean, isDone:boolean, id:number){
    return this.isReady()
    .then(()=>{
      return this.database.executeSql(`UPDATE mesa 
        SET description = ?, 
            isImportant = ?,
            isDone = ? 
        WHERE id = ?`, 
        //cast booleans to binary numbers
        [description, isImportant?1:0, isDone?1:0, id]);
    });
   }
   
  removeTodo(id:number){
    return this.isReady()
    .then(()=>{
      return this.database.executeSql(`DELETE FROM mesa WHERE id = ${id}`, [])
    }) 
   }
}