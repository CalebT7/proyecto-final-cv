const { Collapse } = require("bootstrap");

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
/*
document.getElementsByClassName('btn btn-primary').addEventListener('click', function () {
    document.getElementById('confirmation').confirmation.style.display = 'block';
})
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

document.getElementById('btn btn-primary').onclick = function () {
    DocumentType.Collapse = "Enviado con éxito"
}

document.getElementById('btn btn-primary').addEventListener('click', function () {
    DocumentType.Collapse = "Enviado con éxito"
})
**/

const persona = `{
    "results":[
        {
            "gender":"male",
            "name":{
                "title":"Sr",
                "first":"Cristian",
                "last":"Román"
            },
            "location":{
                "street":{
                    "number":4124,
                    "name":"Avenida de Salamanca"
                },
                "city":"Santander",
                "state":"Canarias",
                "country":"Spain",
                "postcode":30775,
                "coordinates":{
                    "latitude":"-34.3416",
                    "longitude":"-132.6330"
                },
                "timezone":{
                    "offset":"-5:00",
                    "description":"Eastern Time (US & Canada), Bogota, Lima"
                }
            },
            "email":"cristian.roman@example.com",
            "login":{
                "uuid":"3c362c23-283a-4d93-afec-fa5f0be35de8",
                "username":"tinyrabbit974",
                "password":"wannabe",
                "salt":"jHmQYMnO",
                "md5":"3ddf432d6e627a76bb4ce91a8eca8550",
                "sha1":"b524ed0a2194da272cdb92a5a6d39db49bb862f7",
                "sha256":"08a24eb25a22c58357c88bea3a863ee7fbb5ba8d3bccbaa623915bb9deab1cae"
            },
            "dob":{
                "date":"1982-03-25T10:46:35.972Z",
                "age":40
            },
            "registered":{
                "date":"2009-01-28T04:55:23.535Z",
                "age":14
            },
            "phone":"907-923-895",
            "cell":"671-950-322",
            "id":{
                "name":"DNI",
                "value":"85887677-U"
            },
            "picture":{
                "large":"https://randomuser.me/api/portraits/men/20.jpg",
                "medium":"https://randomuser.me/api/portraits/med/men/20.jpg",
                "thumbnail":"https://randomuser.me/api/portraits/thumb/men/20.jpg"
            },
            "nat":"ES"
        }
    ],
    "info":{
        "seed":"de7ff4d2922853a1",
        "results":1,
        "page":1,
        "version":"1.4"
    }
}`;

const obj = JSON.parse(persona);
console.log(obj)
document.getElementById("card-tittle").innerHTML = obj.name.first;

/* Hombre por defecto
        "picture":{
            "large":"https://randomuser.me/api/portraits/men/97.jpg",
            "medium":"https://randomuser.me/api/portraits/med/men/97.jpg",
            "thumbnail":"https://randomuser.me/api/portraits/thumb/men/97.jpg"

Mujer de 63 
https://randomuser.me/api/portraits/men/20.jpg

HOMBRE ELEGIDO
https://randomuser.me/api/portraits/men/20.jpg

Hombre opción
https://randomuser.me/api/portraits/men/61.jpg


LINK A WEB
    <script>
        $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
            console.log(data);
            }
        });
    </script>
**/