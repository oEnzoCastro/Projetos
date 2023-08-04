
fetch('data.json')
    .then(res => res.json())
    .then(data => {

        document.getElementById('jsonbtn').onclick = function fun(){
            var text = document.getElementById('sendtojson').value
        
            data.teste[0].name = text

            console.log(data.teste)
        }

    })
