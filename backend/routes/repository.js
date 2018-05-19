var promise = require('bluebird');
var settings = require('../settings.json');
var db_conn = require('../lib/database_connection')

var db = db_conn.database_connection()

var options = {
    // Initialization Options
    promiseLib: promise
  };


// add query functions

module.exports = {
  getAllRepositories: getAllRepositories,
  getSingleRepository: getSingleRepository,
  createRepository: createRepository,
  updateRepository: updateRepository,
  removeRepository: removeRepository,
  bulkInsertRepository: bulkInsertRepository
}; 

const fields =[
    "repository_created_at",
    "forks_count",
    "language_used",
    "repository_name",
    "license_name",
    "open_issues_count",
    "repository_html_url",
    "owner_html",
    "owner_login",
    "pushed_at",
    "stargazers_count",
    "watchers_count",
    "when_saved"
]

function getAllRepositories(req, res, next){
    db.any('SELECT * FROM repository').then((data) => {
        res.status(200).json({
            "result": data
        })        
    })
    .catch((err) => {
        return next(err);
    })    
}

function getSingleRepository(req, res, next){
    var ID = parseInt(req.params.id);
    db.one('SELECT * FROM repository WHERE ID = $1', ID).then( (data) => {
        res.status(200).json({
            "result":data
        })
    })
    .catch((err) => {
        return next(err);
    });

}

// TODO: Refatorar para permitir a adição de mais de uma categoria
function createRepository(req, res, next){
    console.log(req)
    let query = `INSERT INTO repository(${fields.join(', ')}) VALUES(${fields.map( f => "${" + f + "}").join(', ')})`  
    
    db.none(query, req.body)
    .then(()=>{
        res.status(200).json({
            status: 'Success'
        });
    })
    .catch((err)=>{
        // console.log(err)
        return next(err);
    })
}

function updateRepository(req, res, next){
    let query = `UPDATE repository SET ${fields.map( (f, i) => f+"=$"+(i+1)).join(', ')} WHERE id=$${fields.length+1}`
    console.log(req.body)
    db.none(query,
    [
        req.body.repository_created_at,
        req.body.forks_count,
        req.body.language_used,
        req.body.repository_name,
        req.body.license_name,
        req.body.open_issues_count,
        req.body.repository_html_url,
        req.body.owner_html,
        req.body.owner_login,
        req.body.pushed_at,
        req.body.stargazers_count,
        req.body.watchers_count, 
        req.body.when_saved, 
        parseInt(req.params.id)
    ]).then(()=>{
      res.status(200)
        .json({
          status: 'Success'
        });
    })
    .catch((err)=> {
      return next(err);
    });
}

function removeRepository(req, res, next){
    var ID = parseInt(req.params.id);
    db.result('DELETE FROM repository WHERE ID = $1', ID).then((result)=>{
        res.status(200).json({
            status:'Success'
        })
    })
    .catch((err)=>{
        return next(err);
    })
}
function bulkInsertRepository(req, res, next){
    var ID = parseInt(req.params.id);
    var query = buildBulkSQL(req.body.items)
    db.any(query).then((result)=>{
        res.status(200).json({
            status:'Success'
        })
    })
    .catch((err)=>{
        return next(err);
    })
}
function buildBulkSQL(data){
    let query = `INSERT INTO repository (${fields.join(', ')}) VALUES`
    for(let i = 0; i < data.length; i++){
        query = query + 
        `(  '${data[i].repository_created_at}',
            '${data[i].forks_count}',
            '${data[i].language_used}',
            '${data[i].repository_name}',
            '${data[i].license_name}',
            '${data[i].open_issues_count ? data[i].open_issues_count : 0}',
            '${data[i].repository_html_url}',
            '${data[i].owner_html}',
            '${data[i].owner_login}',
            '${data[i].pushed_at}',
            '${data[i].stargazers_count}',
            '${data[i].watchers_count}',
            '${data[i].when_saved}'
        )`
        // Decide if it is the last entry
        if( i + 1 > data.length - 1 )
            query = query + ';'
        else  
            query = query + ','
    }
    console.log(query)
    return query;
}
