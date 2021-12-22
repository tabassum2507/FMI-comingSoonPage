
function validateForm() {
    const email = document.querySelector('input[type="email"]');
    const error = document.querySelector('.error');
    const regex = /^\w+[@]\w+[.]\w+$/;
    const cta = document.querySelector('button');
    const errorColor = 'hsl(354, 100%, 66%)';
    const errorStyle = {
        border: '1px solid ' + errorColor,
        outline: 'none',
    }


    cta.addEventListener('click', function (e) {
        let emailText = email.value;
        console.log(emailText);

        if (!emailText) {
            e.preventDefault();
            Object.assign(email.style, errorStyle);
            error.textContent = "Please enter your email";
            error.style.display = 'block';
        }

        else if (regex.test(emailText)) {
            console.log(emailText);

        } else {
            e.preventDefault();
            Object.assign(email.style, errorStyle);
            error.textContent = "Please provide a valid email address";
            error.style.display = 'block';
        }

    });

}
window.addEventListener('DOMContentLoaded', validateForm);
