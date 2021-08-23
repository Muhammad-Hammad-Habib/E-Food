
var data = localStorage.getItem('Current_user Email'   )



console.log(data)

firebase.database().ref().child('/restaurant')
.orderByChild('email')
.equalTo(data)
.once("value")
.then((dataSnap) => {
    let data = dataSnap.toJSON()
    data = Object.values(data)
    document.getElementById("user").value = data[0].user;
    document.getElementById("email").value = data[0].email;
    document.getElementById("password").value = data[0].password;
    document.getElementById("type").value = data[0].type;
    document.getElementById("country").value = data[0].country;
    document.getElementById("city").value = data[0].city;

})






