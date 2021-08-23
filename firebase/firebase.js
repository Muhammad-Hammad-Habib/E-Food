


const signUp = () => {
    let userName = document.getElementById("user").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let type = document.getElementById("type").value
    let country = document.getElementById("country").value
    let city = document.getElementById("city").value

    if (userName == "" || email == "" || password == "" || type == "" || country == "" || city == "") {
        alert("Enter the valus in the form ")
    
    }
    else {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;


                var data = {
                    user: userName,
                    email: email,
                    password: password,
                    type: type,
                    country: country,
                    city: city,
                    key: Key
                }
                var Key = firebase.database().ref(`/${type}`).push().getKey()
                data.key = Key;
                firebase.database().ref(`/${type}`).child(Key).set(data)
                    .then((data) => {
                        window.location = 'signIn.html'
                    })



            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;

                console.log(errorCode, errorMessage)

            });


    }


}



const logIn = () => {

    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let type = document.getElementById("type").value

    if (email == "" || password == "" || type == "") {
        alert("enrter some thing")
    }
    else {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
           var data = result.user
           if(type == "restaurant")
           {
               localStorage.setItem('Current_user Email'  ,data.email)
               window.location = "dashBoard/restaurant.html"
            }
            else if(type == "customer")
            {
                localStorage.setItem("Current_user Email" ,data.email)
              
                window.location = "dashBoard/customer.html"
            }
        })
        .catch((error) => {
            console.log(error.errorCode)
            console.log(error.errorMessage)

        })
}
}

