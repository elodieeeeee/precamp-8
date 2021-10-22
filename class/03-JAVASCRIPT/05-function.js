    const getToken=()=>{
    const token = String(Math.floor(Math.random()*1000000)).padStart(6, "0")
    document.getElementById("jang").innerText=token

    let time = 180
    setInterval(function(){
        if(time>=0){
            const minutes = Math.floor(time / 60)
                const seconds = String(time % 60).padEnd(2,"0")
                const result = minutes+":"+ seconds
                document.getElementById("jjj").innerText=result 
                time = time-1
    }
},1000)
        }

