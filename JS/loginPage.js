/**
 * Created by chrisschayer on 11/7/17.
 */


$(document).ready(function(){
    if(sessionStorage.getItem("uid") === null) {
        $("#ajax-login-form").submit(function (event) {
            event.preventDefault();

            var username = $('#username').val();
            var password = $('#password').val();
            if (username == '' || username == $('#username').defaultValue()) {
                alert('username is required');
            }
            else if (password == '' || password == $('#password').defaultValue()) {
                alert('password is required');
            }
            else {
                $.ajax({
                    url: $("#ajax-login-form").attr('action'),
                    method: get,
                    data: {
                        username: username,
                        password: password
                    },
                    success: function (results) {
                        if (results != null && results != "") {
                            if (results["valid"]) {
                                sessionStorage.setItem("uid", results["uid"]);
                                location.href = "../index.html";
                            }
                            else {
                                alert("Username and password combination does not match any of the profiles.");
                            }
                        }
                        else {
                            alert("Some exception has occured please try again.");
                        }
                    }
                })
            }
        });

        $("#register").on('click', function () {
            var username = $('#username').val();
            var password = $('#password').val();
            var confpassword = $('#confirm-password').val();
            if (username == '') {
                alert('username is required');
            }
            else if (password == '') {
                alert('password is required');
            }
            else if (password != confpassword) {
                alert('password/verify password mismatch')
            }
        });
    }
    else
        location.href="../index.html";
});

