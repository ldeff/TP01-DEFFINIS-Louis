$(function() {

$( "#signupBtn" ).click(function() {

    let p1 = $('#password').val();
    let p2 = $('#confirmPassword').val();

    if(p1==p2){

        $('#infoPopUpText').html('Enregistrement réussi');

        $('#username').val('');
        $('#password').val('');
        $('#confirmPassword').val('');
    }
    else{

        $('#infoPopUpText').html('Les mots de passe ne correspondent pas');

        $('#password').val('');
        $('#confirmPassword').val('');
    }
  });

});