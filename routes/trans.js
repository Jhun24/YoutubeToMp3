module.exports = trans;

function trans(app,youtube){

    app.get('/conversion',(req,res)=>{
        var videoUrl = req.query.video;
        var videoName = req.query.name;

        console.log("URL : "+videoUrl);
        console.log("Name : "+videoName)



    });

}