let count = 0

const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

btns.forEach(function (btn) 
{
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList
        if(styles.contains('decrease')) {
            count--
            value.style.color = 'red'
        }
        else if(styles.contains('increase')) {
            count++
            value.style.color = 'green'
            
        }
        else {
            count = 0
        }
        value.innerHTML = count
    });
});