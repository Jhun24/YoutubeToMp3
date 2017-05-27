/**
 * Created by janghunlee on 2017. 5. 28..
 */

$(document).ready(function(){
    console.log("Ajax Start")
    $.ajax({
        method:"GET",
        url:"http://localhost:3000/conversion",
        data:{"video":"https://youtube.com/watch?v=zQ9Wtz6QVv4","name":"Yeah"},
        success:function (data) {
            console.log(data);
        },
        error:function(err){
            console.log(err);
        }

    })
});