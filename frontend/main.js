$(document).ready(function(){
    $("#btn1").click(function(){
        $("#sendString").modal("show");
    });
    
    $("#btn2").click(function(){
        $("#sendHash").modal("show");
    });
    
    $("#colseBtn").click(function(){
        $("#sendString").modal("toggle");
    });

    $("#colseBtn2").click(function(){
        $("#sendHash").modal("toggle");
    });

    $("#getHashBtn").click(function(){
        let str= $("#string").val();
        let url = "http://localhost:8000";
        if($("#nodeServerCheck").is(":checked")) url = url + "/node/sha256";
        else url = url + "/go/sha256";
        let obj = {string: str}
        //alert(JSON.stringify(obj))
        fetch(url,{
            method: "POST",
            body: JSON.stringify({string:str}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then((json) =>{
            if(json.string !==undefined){
                $("#hashInput").val(json.string);
            }
            else{
                $("#hashInput").val("please check your internet connection!");
            }
          }
        ).catch(err => {$("#hashInput").val("connection lost ...")});
    });

    $("#sendHashBtn").click(function(){
        let str = encodeURIComponent($("#string2").val());
        let url = "http://localhost:8000";
        if($("#nodeServerCheck2").is(":checked")) url = url + "/node/sha256?sha256d="+str;
        else url = url + "/go/sha256?sha256d="+str;

        fetch(url,{
            headers:{
                "Content-Type" : "application/json"
            }
        })
        .then(res =>{ 
            // if(res.status == 502){
            //     return JSON.stringify({string:"no string found!"});
            // }
            return res.json()
        })
        .then((json) =>{
            if(json.string !==undefined){
                $("#stringInput").val(json.string);
            }
            else{
                $("#stringInput").val("please check your internet connection!");
            }
        })
        .catch(err => {$("#stringInput").val("connection lost ...");})
    })

});






