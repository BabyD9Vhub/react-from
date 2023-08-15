
function showpassword() {
    const x = document.getElementById('showpass');

    if (x.type === 'password') {
        x.type = 'text';
    } else {
        x.type = 'password'
    }




}

export default showpassword;
