/*
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseña.

2. El sistema debe ser capaz de validar si el usuario y contraseña ingresados por el usuario existen en la base de datos.

3. Si el usuario y contraseña son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.

4. Si el usuario y contraseña son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningún timeline.
*/

const usersDatabase = [
  {
    username: 'Andrés',
    password: '123',
  },
  {
    username: 'Caro',
    password: '456',
  },
  {
    username: 'Mariana',
    password: '789',
  },
];

const usersTimeline = [
  {
    username: 'Estefany',
    timeline: 'Me encanta JavaScript',
  },
  {
    username: 'Oscar',
    timeline: 'Bebeloper es lo mejor!',
  },
  {
    username: 'Mariana',
    timeline: 'A mi me gusta más el café que el té',
  },
  {
    username: 'Andrés',
    timeline: 'Yo hoy no quiero trabajar',
  },
];


$('#btn-enviar').on('click', function() {
  console.log('Has hecho click en Enviar')

  let usuarioIntroducido = $('#username').val();
  let contrasenaIntroducida = $('#password').val();
  
  let verificar = verificaUsuarioYContrasena(usuarioIntroducido, contrasenaIntroducida)

  if (verificar) {
    for (let i = 0; i < usersTimeline.length; i++){
      if(usersTimeline[i]["username"] === usuarioIntroducido)
      alert(usersTimeline[i]["timeline"])
    }
  } else {
    alert('El usuario y contraseña introducidos no son correctos')
  }
});

function verificaUsuarioYContrasena(usuarioIntroducido, contrasenaIntroducida) {
  
  for (let i = 0; i < usersDatabase.length; i++) {
    if(usersDatabase[i]["username"] === usuarioIntroducido && usersDatabase[i]["password"] === contrasenaIntroducida){
      console.log('El usuario y contraseña introducidos son: ', usuarioIntroducido, contrasenaIntroducida)
      return true
    }
  };
  return false
}





// let varificaUsuarioYContrasena = usersDatabase.includes({
//   username: 'Andrés',
//   password: '123',
// })
// console.log(localizaUsuario)



// function localizaUsuario() {
//   let usuarioLocalizado = usersDatabase.find(usuario => usuario.username === 'Caro');
//   let contrasenaLocalizada = usersDatabase.find(contrasena => contrasena.password === '123');

//   if (usuarioLocalizado === undefined || contrasenaLocalizada === undefined) {
//     return false
//   } else {
//     return true
//   }
// }
// console.log(localizaUsuario())


// El profesor lo hace así:
/* 
const usernameP = prompt("¿Cuál es tu usuario?")
const passwordP = prompt("¿Cuál es tu contraseña?")

function usuarioExistente(usernameP, passwordP) {
  for(let i = 0; i < usersDatabase.length; i++) {
    if(
      usersDatabase[i].username === usernameP &&
      usersDatabase[i].password === passwordP
    ) {
      return true
      break;
    }
  }
  return false
}
function signIn(usernameP, passwordP) {
  if(usuarioExistente(usernameP, passwordP)) {
    alert(`Bienvenido a tu cuenta ${usernameP}`);
    console.log(usersTimeline);
  } else {
    alert("Uuups, usuario o contraseña incorrectos!")
  }
}
*/