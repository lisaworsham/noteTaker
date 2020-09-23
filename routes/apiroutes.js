var db = require("../db/db.json");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
        res.json(db);
    });
  
    app.post("/api/notes", function(req, res) {
        let id = {id: uuidv4()}
        const newNote = Object.assign(req.body, id);
        db.push(newNote);
        fs.writeFileSync("./db/db.json", JSON.stringify(db,null,1));
        res.json(db);
    });
  
    app.delete("/api/notes/:id", function(req, res) {
        const noteId = req.params.id
        console.log(noteId)
        for (i = 0; i < db.length; i++){
            const note = db[i];
            if (noteId.indexOf(note) !== -1){
                db.splice(i, 1);
                i--;
                fs.writeFileSync("./db/db.json", JSON.stringify(db,null,1), "utf-8");
            }
        }
        return res.json(db)
        
        //for loop to loop through db.json file.
        //then grab the note object from that index
        //validate if the note id is = to the id of the note object you pulled, you are going to *splice* that out
        //after you splice, you are going to write your file to the db.json
        //return res.json(db)
    })
}