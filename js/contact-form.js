$(function(){
   $('#contact-form input[type=submit]').click(sendForm); 
});

function sendForm(ev) {
    const form  = document.getElementsByTagName('form')[0];
    if (form.checkValidity()) {
        ev.preventDefault();
        $.ajax({
            url: "https://formspree.io/chupil87@gmail.com", 
            method: "POST",
            data: {
                name: $('#inputname').val(),
                email: $('#inputemail').val(),
                tel: $('#inputtel').val(),
                feedback: $('#feedback').val()
            },
            dataType: "json"
        })
        .done( () => $('#thank-dialog').attr('open', 'open') )
         .fail( () => $('#error-dialog').attr('open', 'open') ); 
    }
}
