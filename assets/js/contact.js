$(document).ready(function () {
    /*jQuery Validation for Contact Section*/
    $("#contactSection").validate({
        rules: {
            name: {
                required: true,
            },
            email: {
                required: true
            },
            subject: {
                required: true
            },
            message: {
                required: true
            }
        },
    });

    $("#contactSection").submit(function (e) {
        if (!$("#contactSection").valid()) {
            return false;
        }

        e.preventDefault();

        let name = $("#userName").val();
        let email = $("#email").val();
        let subject = $("#subject").val();
        let message = $("#message").val();

        let jsonRequest = {
            "contact_name": name,
            "contact_email": email,
            "contact_subject": subject,
            "contact_message": message
        };

        /*JSON based Contact API Call with POST method*/
        $.ajax({
            type: "POST",
            url: 'https://e271h3f55k.execute-api.us-east-1.amazonaws.com/dev/sendnotification-v1',
            cache: false,
            crossDomain: true,
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(jsonRequest),
            success: function () {
                showSuccessToast('We Will Connect You Soon...');
                $("#userName").val("");
                $("#email").val("");
                $("#subject").val("");
                $("#message").val("");
            },
            error: function () {
                showErrorToast('Something Wrong.')
            }
        });

    });
});