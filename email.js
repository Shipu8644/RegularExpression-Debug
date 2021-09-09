document.getElementById('success').style.display = 'none';
document.getElementById('danger').style.display = 'none';


const verifyEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(email)) {
        document.getElementById('success').style.display = 'block';
        document.getElementById('danger').style.display = 'none';
    }
    else {
        document.getElementById('danger').style.display = 'block';
        document.getElementById('success').style.display = 'none';
    }

}

const checkEmail = () => {

    const inputField = document.getElementById('input-field');
    const inputFieldValue = inputField.value;
    inputField.value = '';

    verifyEmail(inputFieldValue);

}
