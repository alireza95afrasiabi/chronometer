// global variable 

let _sec = 0
let _milSec = 0
let _min = 0
let _setInt1

// start button 

document.getElementById('_start').addEventListener('click', function () {
    if ((document.getElementById('_start').getAttribute('data-status')) == '_on') {
        _setInt1 = setInterval(_second, 10);
        document.getElementById('_start').setAttribute('data-status', '_off')
    }
})

// stop button 

document.getElementById('_stop').addEventListener('click', () => {
    clearInterval(_setInt1)
    document.getElementById('_start').setAttribute('data-status', '_on')
})

// lap button 

document.getElementById('_lap').addEventListener('click', () => {

    _lapList = document.createElement('div')
    _lapList.innerHTML = _min + ' `'
    document.getElementById('lapp').appendChild(_lapList)

    _lapList = document.createElement('div')
    _lapList.innerHTML = _sec + ' ``'
    document.getElementById('lapp').appendChild(_lapList)

    _lapList = document.createElement('div')
    _lapList.innerHTML = _milSec
    document.getElementById('lapp').appendChild(_lapList)
})

// function timer 

function _second() {
    if (_milSec < 99) {
        _milSec++
        if (_milSec < 10) {
            document.getElementById('_milSec').innerHTML = '0' + _milSec
        } else {
            document.getElementById('_milSec').innerHTML = _milSec
        }
    } else {
        _milSec = 0
        if (_sec < 59) {
            _sec++
            if (_sec < 10) {
                document.getElementById('_sec').innerHTML = '0' + _sec
            } else {
                document.getElementById('_sec').innerHTML = _sec
            }
        } else {
            _sec = 0
            _min++
            if (_min < 10) {
                document.getElementById('_min').innerHTML = '0' + _min
            } else {
                document.getElementById('_min').innerHTML = _min
            }
        }

    }
}