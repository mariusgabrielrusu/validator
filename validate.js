// function formValidation(e) {
//     regExName = /^[a-zA-Z0-9]*[a-zA-Z]$/;
//
//     if(e.find(".name").val() == "") {
//         alert("Ba, baiatule, baga ceva");
//         return false;
//     }
//
//     if( !regExName.test(e.find(".name").val()) ) {
//         alert("Ai grija ce bagi");
//     }
// }

var validator = {
    "mandatory" : function(val) {
        if(val.val() != "") {
            $("val").addClass("valid");
            return true;
        } else {
            $("val").addClass("invalid");
            return false;
        }
    },
    "name" : function(val) {
        regex = /^[a-zA-Z]*[a-zA-Z]$/;
        if(regex.test( val.val()) ) {
            $("val").addClass("valid");
            return true;
        } else {
            $("val").addClass("invalid");
            return false;
        }

    }

    "email" : function(val) {

    },
    "dataNasterii" : function(val) {
        
    }
};

$(".passenger").each()
