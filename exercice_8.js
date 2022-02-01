const form = document.querySelector('form')

form.addEventListener('submit', function (event) {
    event.preventDefault();
    let input = document.querySelector('input').value
    let message = ''

    if (parseInt(input) >= 18 ) {
        message = 'Vous êtes majeur'
    }else{
        message = 'Vous êtes mineur'
    }

    alert(message)
})