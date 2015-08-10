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

    },

    "email" : function(val) {
        return true;
    },

    "dataNasterii" : function(val) {
        return true;
    }
};

$.each( $(input).data("validation").split(",") , function(k,v) {
    validator[v]();
};
