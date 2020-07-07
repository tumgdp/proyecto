// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyCJlzUyjgPsHmpsRBx_ofgxaeOGbxblxd8",
    authDomain: "usuarios-8d57b.firebaseapp.com",
    projectId: "usuarios-8d57b"
   });
//inicio cloud firebase
var db = firebase.firestore();

//agregar documentos
function guardar(){
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var materia = document.getElementById('materia').value;
    var calificacion = document.getElementById('calificacion').value;

db.collection("users").add({
    nom: nombre,
    apl: apellido,
    mate: materia,
    cal: calificacion
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('materia').value = '';
    document.getElementById('calificacion').value = '';
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});  
}

function mostrar(){
//leer documentos
var tabla = document.getElementById('tabla');

db.collection("users").onSnapshot((querySnapshot) => {
    tabla.innerHTML='';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().nom}`);
        tabla.innerHTML +=`<tr>
        <th scope="row">${doc.data().nom}</th>
        <td>${doc.data().apl}</td>
        <td>${doc.data().mate}</td>
        <td>${doc.data().cal}</td>
      </tr>`
    });
});
}

// BUSCAR POR NOMBRE 
function buscar(){
    var nombre = document.getElementById('nombre').value;
    var tabla = document.getElementById('tabla');

db.collection("users").where("nom", "==", nombre)
    .get()
    .then(function(querySnapshot) {
        tabla.innerHTML='';
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            tabla.innerHTML +=`<tr>
            <th scope="row">${doc.data().nom}</th>
            <td>${doc.data().apl}</td>
            <td>${doc.data().mate}</td>
            <td>${doc.data().cal}</td>
          </tr>`
          document.getElementById('nombre').value = '';
        });
        
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
    console.log("funciona")
}

//BUSQUEDA POR APELLIDO
function buscarap(){
    var apellido = document.getElementById('apellido').value;
    var tabla = document.getElementById('tabla');

db.collection("users").where("apl", "==", apellido)
    .get()
    .then(function(querySnapshot) {
        tabla.innerHTML='';
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            tabla.innerHTML +=`<tr>
            <th scope="row">${doc.data().nom}</th>
            <td>${doc.data().apl}</td>
            <td>${doc.data().mate}</td>
            <td>${doc.data().cal}</td>
          </tr>`
          document.getElementById('apellido').value = '';
         });
         
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
    console.log("funciona")
}

// BUSCAR POR MATERIA 
function buscarma(){
    var materia = document.getElementById('materia').value;
 
db.collection("users").where("mate", "==", materia)
    .get()
    .then(function(querySnapshot) {
        tabla.innerHTML='';
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            tabla.innerHTML +=`<tr>
            <th scope="row">${doc.data().mate}</th>
            <td>${doc.data().nom}</td>
            <td>${doc.data().apl}</td>
            <td>${doc.data().cal}</td>
          </tr>`
          document.getElementById('materia').value = '';
        
        }); 
    
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
  
}

function uno(){
    location.href="../agregar.html";
}
function dos(){
    location.href="../buscaralu.html";
}
function tre(){
    location.href="../busqueda.html";
}
function cua(){
    location.href="../busquedaap.html";
}
function cin(){
    location.href="../busquedama.html";
}
function sei(){
    location.href="../index.html";
}
function salir(){
    location.href="../menu.html";
}