module.exports = trans;

function trans(app){

    app.get('/',(req,res)=>{
        res.render("index.html");
    });

}