$().ready(function() {
$(".passengers").validate({
    rules: {
        name: {
            required: true,
            minlength: 3
        }
    },
    messages: {
        name: "Va rugam puneti un nume de minim 3 caractere."
    }
})
})
