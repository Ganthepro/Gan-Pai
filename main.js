const scriptURL = 'https://script.google.com/macros/s/AKfycbw8KDq4iDMlqnNMy2zUMP-AGyBF4pQfYVREGyAvPzj-F3E9Ad7rUK7ausiiuGNQjEt4/exec'
const form = document.forms['contact']
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => document.getElementById("demo").innerHTML = "<div class='alert alert-primary' role='alert'><b>Thank You for providing the details, We shall get back to you shortly !</b></div>",contact.reset())
    .catch(error => console.error('Error!', error.message))
})

var break_key = 0;
var break_key1 = 0;
const home = document.getElementById('button-1');
const github = document.getElementById('button-2');
const a_link = document.getElementsByClassName('a-link');
var width = window.innerWidth;
if (width < 768 && break_key === 0) {
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
    new_a_home_img.setAttribute('src','home-pngrepo-com.png');
    new_a_github_img.setAttribute('src','github-pngrepo-com (1).png');
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
else if (width > 768 && break_key1 === 0) {
    break_key1 += 1
    break_key += 1
}
window.addEventListener('resize', function() {
    var width = window.innerWidth;
    const new_a_home = document.createElement('a');
    const new_a_home_img = document.createElement('img');
    const new_a_github = document.createElement('a');
    const new_a_github_img = document.createElement('img');
    const a_link = document.getElementById('a-link');
	if (width < 768 && break_key === 0) {
        home.remove();
        github.remove();
        new_a_home.setAttribute('id', 'new_a_home');
        new_a_home.setAttribute('href', '/tamtikorn_portfolio');
        new_a_github.setAttribute('id', 'new_a_github');
        new_a_github.setAttribute('href', 'https://github.com/Ganthepro/Ganthepro/tree/main/project');
        new_a_home_img.setAttribute('src','home-pngrepo-com.png');
        new_a_github_img.setAttribute('src','github-pngrepo-com (1).png');
        // new_a_home_img.style.width = '25px';
        // new_a_home_img.style.height = '25px';
        // new_a_home_img.style.marginRight = '25px';
        // new_a_github_img.style.width = '25px';
        // new_a_github_img.style.height = '25px';
        // a_link.style.marginRight = '10px'
        // new_a_home.appendChild(new_a_home_img);
        // new_a_github.appendChild(new_a_github_img);
        // a_link.appendChild(new_a_home);
        // a_link.appendChild(new_a_github);
        // h3get.remove();
        break_key += 1
        break_key1 -= 1
    }
    else if (width > 768 && break_key1 === 0) {
        const a_home = document.getElementById('new_a_home');
        const a_github = document.getElementById('new_a_github');
        a_home.remove()
        a_github.remove()
        const button_1 = document.createElement('button');
        button_1.setAttribute('id','button-1')
        button_1.setAttribute('onclick',"window.location.href = '/tamtikorn_portfolio'")
        button_1.innerHTML = 'Home'
        const button_2 = document.createElement('button');
        button_2.setAttribute('id','button-2')
        button_2.setAttribute('onclick',"window.location.href = 'https://github.com/Ganthepro/Ganthepro/tree/main/project'")
        button_2.innerHTML = 'GitHub'
        a_link.appendChild(button_1);
        a_link.appendChild(button_2);
        a_link.style.marginRight = '0'
        a_link.style.position = 'absolute'
        break_key1 += 1
    }
})
