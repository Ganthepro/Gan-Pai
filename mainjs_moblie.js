function getPara(loc) {
    let para = new URLSearchParams(window.location.search)
    return para.get(loc)
}

function infectedReported() {
    const url = 'https://script.google.com/macros/s/AKfycbx5BSfMMYu-ng_n-V14coSZ8GVOVr2dHTH7I0QVnWYKyXpmT0gXX8EyQaXyN1S1mLyq/exec'
    addEventListener('DOMContentLoaded',loaded)
    function loaded() {
        fetch(url)
            .then((res)=>{return res.json})
            .then((data)=>{
                console.log(data)
            })
    }
}

if (localStorage.getItem('name') == null && localStorage.getItem('infectStatus') == null) {
    console.log(localStorage.getItem('name'))
    localStorage.setItem('all', '[]');localStorage.setItem('name','')
    console.log(localStorage.getItem('infectStatus'))
    localStorage.setItem('infectStatus','')
}

let local_name = localStorage.getItem('name')
let infect_status = localStorage.getItem('infectStatus')
console.log(local_name)
console.log(infect_status)
const loc = getPara('loc')
const scriptURL = 'https://script.google.com/macros/s/AKfycbx5BSfMMYu-ng_n-V14coSZ8GVOVr2dHTH7I0QVnWYKyXpmT0gXX8EyQaXyN1S1mLyq/exec'
let cookies = document.cookie.split(';').map(cookie => cookie.split('=')).reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {});
const form = document.forms['restaurants']
document.getElementById('detail').innerHTML = 'ลงทะเบียนครั้งแรก ' + '(' + loc + ')'
// console.log(all_loc)
function infectedReported(but) {
    localStorage.setItem('infectStatus','y')
    const url = 'https://script.google.com/macros/s/AKfycbx0_XGNJP8BG59MTafoPr6DPrc_y5nBg-etVx8l5XXB80XYo-v--WgTI58oMHWo4jWX/exec?action=' + document.getElementById('user').value 
    fetch(url,{method : "POST",body : JSON.stringify({
        "name" : "",
        "nickName" : ""
    }),
    headers : {"Content-Type" : 'application/json'},mode : "no-cors"})
    if (but != null) {location.reload()}
}

if (local_name == '') {
    form.addEventListener('submit', e => {
        e.preventDefault()
        if (e.submitter.id == 'mt-1') {infectedReported()}
        localStorage.setItem('name',document.getElementById('user').value)
        location.reload()
    })
} else if (local_name != '') {
    document.getElementById("mt-3").click();
    const d = new Date()
    document.getElementById('loc').defaultValue = loc
    document.getElementById('user').defaultValue = local_name 
    document.getElementById('dt').defaultValue = d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
    // เปลื่ยน method เป็น GET
    console.log(new FormData(form))
    if (infect_status == "" || infect_status == 'n') {
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => restaurants.reset())
            .catch(error => console.error('Error!', error.message))
    }
    const forums = document.getElementById('form')
    const br = document.createElement('br')
    const hr = document.createElement('hr')
    const p = document.createElement('p')
    const text = document.createElement('h1')
    const background = document.getElementById('personal')
    const clear_btn = document.createElement('button');const infect_btn = document.createElement('button')
    const view_btn = document.createElement('button');const a_btn = document.createElement('a') 
    document.getElementById('detail').innerHTML = 'Log In'
    forums.style.opacity = '0'
    if (infect_status != "") {text.innerHTML = 'Stay Safe!!!'; p.innerHTML = 'รักษาสุขภาพ';}
    else {text.innerHTML = 'Finish!!!'; p.innerHTML = 'คุณถูกบันทึกเข้าระบบแล้ว';} 
    p.style.fontSize = '20px'
    text.style.position = 'absolute'; text.style.font = 'bold'; text.style.fontSize = '72px'
    text.style.top = '40%'; text.style.left = '50%'; hr.style.marginTop = '10px'
    text.style.transform = 'translate(-50%,-40%)';view_btn.setAttribute('class','btn-primary')
    clear_btn.innerText = 'Clear'; clear_btn.setAttribute('onclick', 'clearStorage()'); clear_btn.setAttribute('id','clearBtn')
    a_btn.innerHTML = 'View Data';a_btn.setAttribute('id','a-btn');view_btn.style.position = 'absolute';a_btn.setAttribute('href','https://docs.google.com/spreadsheets/d/1IUQKYDa5rHDI520jWxNBzVTOV1pWX4MDCXPNQr5dEPE/edit#gid=1356909475')
    view_btn.style.bottom = '-80px';view_btn.style.left = '50%';view_btn.style.transform = 'translate(-50%,0)';view_btn.appendChild(a_btn);
    if (infect_status == "") {
        infect_btn.innerHTML = 'Infected';infect_btn.setAttribute('class','btn-primary');infect_btn.style.position = 'absolute';infect_btn.style.bottom = '-165px';
        infect_btn.style.left = '50%';infect_btn.style.transform = 'translate(-50%,0)';infect_btn.setAttribute('onclick','infectedReported(this)')
    }
    text.appendChild(infect_btn)
    text.appendChild(view_btn)
    text.appendChild(br)
    text.appendChild(p)
    text.appendChild(hr)
    text.appendChild(clear_btn)
    background.appendChild(text)
}

function clearStorage() {
    localStorage.setItem('name','')
    localStorage.setItem('infectStatus','')
    location.reload()
}

// ######################################################### //

var break_key = 0;
var break_key1 = 0;
const home = document.getElementById('button-1');
const github = document.getElementById('button-2');
const a_link = document.getElementsByClassName('a-link');
var width = window.innerWidth;
if (width < 984 && break_key === 0) {
    home.remove();
    github.remove();
    const new_a_home = document.createElement('a');
    const new_a_home_img = document.createElement('img');
    const new_a_github = document.createElement('a');
    const new_a_github_img = document.createElement('img');
    const a_link = document.getElementById('a-link');
    const mypic = document.getElementById('mypic');
    new_a_home.setAttribute('id', 'new_a_home');
    new_a_home.setAttribute('href', '/tamtikorn_portfolio');
    new_a_github.setAttribute('id', 'new_a_github');
    new_a_github.setAttribute('href', 'https://github.com/Ganthepro/Ganthepro/tree/main/project');
    new_a_home_img.setAttribute('src', 'home-pngrepo-com.png');
    new_a_github_img.setAttribute('src', 'github-pngrepo-com (1).png');
    new_a_home_img.style.width = '25px';
    new_a_home_img.style.height = '25px';
    new_a_home_img.style.marginRight = '25px';
    new_a_github_img.style.width = '25px';
    new_a_github_img.style.height = '25px';
    a_link.style.marginRight = '10px'
    new_a_home.appendChild(new_a_home_img);
    new_a_github.appendChild(new_a_github_img);
    a_link.appendChild(new_a_home);
    a_link.appendChild(new_a_github);
    break_key += 1
}
else if (width > 984 && break_key1 === 0) {
    break_key1 += 1
    break_key += 1
}
window.addEventListener('resize', function () {
    var width = window.innerWidth;
    const new_a_home = document.createElement('a');
    const new_a_home_img = document.createElement('img');
    const new_a_github = document.createElement('a');
    const new_a_github_img = document.createElement('img');
    const a_link = document.getElementById('a-link');
    const svg1 = document.getElementById('svg-1');
    const svg2 = document.getElementById('svg-2');
    if (width < 768 && break_key === 0) {
        home.remove();
        github.remove();
        new_a_home.setAttribute('id', 'new_a_home');
        new_a_home.setAttribute('href', '/tamtikorn_portfolio');
        new_a_github.setAttribute('id', 'new_a_github');
        new_a_github.setAttribute('href', 'https://github.com/Ganthepro/Ganthepro/tree/main/project');
        new_a_home_img.setAttribute('src', 'home-pngrepo-com.png');
        new_a_github_img.setAttribute('src', 'github-pngrepo-com (1).png');
        svg1.style.width = toString(width) + 'px'
        svg2.style.width = toString(width) + 'px'
        break_key += 1
        break_key1 -= 1
    }
    else if (width > 984 && break_key1 === 0) {
        const a_home = document.getElementById('new_a_home');
        const a_github = document.getElementById('new_a_github');
        a_home.remove()
        a_github.remove()
        const button_1 = document.createElement('button');
        button_1.setAttribute('id', 'button-1')
        button_1.setAttribute('onclick', "window.location.href = '/tamtikorn_portfolio'")
        button_1.innerHTML = 'Home'
        const button_2 = document.createElement('button');
        button_2.setAttribute('id', 'button-2')
        button_2.setAttribute('onclick', "window.location.href = 'https://github.com/Ganthepro/Ganthepro/tree/main/project'")
        button_2.innerHTML = 'GitHub'
        a_link.appendChild(button_1);
        a_link.appendChild(button_2);
        a_link.style.marginRight = '0'
        a_link.style.position = 'absolute'
        break_key1 += 1
    }
})