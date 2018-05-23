var chakram = require('chakram'), expect = chakram.expect;
const URL = "http://localhost:3000/api/";

const fields = [
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
];
const testObject = {
    "repository_created_at" : "2018-01-21T02:00:00.000Z",
    "forks_count": 1,
    "language_used": "Go",
    "repository_name": "TestingGO",
    "license_name": "MIT",
    "open_issues_count": 12,
    "repository_html_url" : "www.myrepo.com",
    "owner_html" : "www.nice_dev.com" ,
    "owner_login": "niceDev",
    "pushed_at": "2018-01-22T02:00:00.000Z",
    "stargazers_count": 10,
    "watchers_count": 400,
    "when_saved":"2018-02-20T03:00:00.000Z"
};
const testObject2 = {
    "repository_created_at" : "2018-01-21T02:00:00.000Z",
    "forks_count": 1,
    "language_used": "Go",
    "repository_name": "TestingGO 1",
    "license_name": "MIT",
    "open_issues_count": 12,
    "repository_html_url" : "www.myrepo.com",
    "owner_html" : "www.nice_dev.com" ,
    "owner_login": "niceDev",
    "pushed_at": "2018-01-22T02:00:00.000Z",
    "stargazers_count": 10,
    "watchers_count": 400,
    "when_saved":"2018-02-20T03:00:00.000Z"
};

describe("Create new repositories", function() {
    it("should create a new repositories", function () {
        return chakram.post(`${URL}repositories`,testObject).then( function (myResponse){
            expect(myResponse).to.have.status(200);
            expect(myResponse.body.status).to.contain('Success')
        });
    });
    it("should use bulk insertion to create repositories ", function () {
        return chakram.post(`${URL}repositories_bulk`,{items:[testObject,testObject2]}).then( function (myResponse){
            expect(myResponse).to.have.status(200);
            expect(myResponse.body.status).to.contain('Success')
        })
    });
});

describe("Get repositories", function() {
    var repository = testObject;    
    
    it("should get the first repository ", function () {
        return chakram.get(`${URL}repositories`).then( function (myResponse){
            return chakram.get(`${URL}repositories/${myResponse.body.result[0].id}`).then( function (myResponse){
                expect(myResponse).to.have.status(200);
                expect(myResponse.body.result.repository_name).to.contain(repository.repository_name)
            });
        });
        
    });    
    it("should get all repositories", function () {
        return chakram.get(`${URL}repositories`).then( function (myResponse){
            expect(myResponse).to.have.status(200);
            expect(myResponse.body.result).to.be.a('array')
        });
    }); 
});

describe("Modify a repository", function() {
    it("should create a new ", function () {
        return chakram.post(`${URL}repositories`,testObject).then( function (myResponse){
            return chakram.put(`${URL}repositories/2`,testObject2).then( function (myResponse2){
                expect(myResponse2).to.have.status(200);
                expect(myResponse2.body.status).to.contain('Success')
                return chakram.get(`${URL}repositories/2`).then( function (myResponse3){
                    expect(myResponse3.body.result.repository_name).to.contain(testObject2.repository_name)
                });
            });
        });
    });
});

describe("Delete repositories", function() {
    it("should delete the first repository ", function () {
        return chakram.get(`${URL}repositories`).then( function (myResponse){
            return chakram.delete(`${URL}repositories/${myResponse.body.result[0].id}`).then( function (myResponse2){
                expect(myResponse2).to.have.status(200);
                expect(myResponse2.body.status).to.contain('Success')
            });
        });
        
    });  
});