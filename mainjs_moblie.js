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
else if (width > 984 && break_key1 === 0) {
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
    else if (width > 984 && break_key1 === 0) {
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

function blur_all1() {
    const allElements = document.querySelectorAll('a');
    const h6_allElements = document.querySelectorAll('a > h6');
    const allElements2 = document.querySelectorAll('body > *');
    for (const element of allElements) {
        // console.log(element.className)
        if (element.className != 'but-1') {
            element.style.filter = 'blur(4px)';
        } else {
            const main = document.getElementById('main1');
            const sub = document.getElementById('sub1');
            main.style.borderBottom = '4px solid rgb(255, 209, 63)';
            sub.style.color = 'black';
        }
    }
    for (const element of allElements2) {
        // console.log(element.className)
        if (element.id != 'button-container') {
            element.style.filter = 'blur(4px)';
        }
    } 
    for (const element of h6_allElements) {
        element.style.transition = 'border-bottom 1s'   
    }
}
function blur_all2() {
    const allElements = document.querySelectorAll('a');
    const h6_allElements = document.querySelectorAll('a > h6');
    const allElements2 = document.querySelectorAll('body > *');
    for (const element of allElements) {
        // console.log(element.className)
        if (element.className != 'but-2') {
            element.style.filter = 'blur(4px)';
        } else {
            const main = document.getElementById('main2');
            const sub = document.getElementById('sub2');
            main.style.borderBottom = '4px solid rgb(255, 209, 63)';
            sub.style.color = 'black';
        }
    }
    for (const element of allElements2) {
        // console.log(element.className)
        if (element.id != 'button-container') {
            element.style.filter = 'blur(4px)';
        }
    }
    for (const element of h6_allElements) {
        element.style.transition = 'border-bottom 1s'   
    }
}
function blur_all3() {
    const allElements = document.querySelectorAll('a');
    const h6_allElements = document.querySelectorAll('a > h6');
    const allElements2 = document.querySelectorAll('body > *');
    for (const element of allElements) {
        // console.log(element.className)
        if (element.className != 'but-3') {
            element.style.filter = 'blur(4px)';
        } else {
            const main = document.getElementById('main3');
            const sub = document.getElementById('sub3');
            main.style.borderBottom = '4px solid rgb(255, 209, 63)';
            sub.style.color = 'black';
        }
    }
    for (const element of allElements2) {
        // console.log(element.className)
        if (element.id != 'button-container') {
            element.style.filter = 'blur(4px)';
        }
    }
    for (const element of h6_allElements) {
        element.style.transition = 'border-bottom 1s'   
    }
}
function blur_all4() {
    const allElements = document.querySelectorAll('a');
    const h6_allElements = document.querySelectorAll('a > h6');
    const allElements2 = document.querySelectorAll('body > *');
    for (const element of allElements) {
        // console.log(element.className)
        if (element.className != 'but-4') {
            element.style.filter = 'blur(4px)';
        } else {
            const main = document.getElementById('main4');
            const sub = document.getElementById('sub4');
            main.style.borderBottom = '4px solid rgb(255, 209, 63)';
            sub.style.color = 'black';
        }
    }
    for (const element of allElements2) {
        // console.log(element.className)
        if (element.id != 'button-container') {
            element.style.filter = 'blur(4px)';
        }
    }
    for (const element of h6_allElements) {
        element.style.transition = 'border-bottom 1s'   
    }
}

function blur_all5() {
    const allElements = document.querySelectorAll('a');
    const h6_allElements = document.querySelectorAll('a > h6');
    const allElements2 = document.querySelectorAll('body > *');
    for (const element of allElements) {
        // console.log(element.className)
        if (element.className != 'but-5') {
            element.style.filter = 'blur(4px)';
        } else {
            const main = document.getElementById('main5');
            const sub = document.getElementById('sub5');
            main.style.borderBottom = '4px solid rgb(255, 209, 63)';
            sub.style.color = 'black';
        }
    }
    for (const element of allElements2) {
        // console.log(element.className)
        if (element.id != 'button-container') {
            element.style.filter = 'blur(4px)';
        } 
    }
    for (const element of h6_allElements) {
        element.style.transition = 'border-bottom 1s'   
    }
}
function blur_all6() {
    const allElements = document.querySelectorAll('a');
    const h6_allElements = document.querySelectorAll('a > h6');
    const allElements2 = document.querySelectorAll('body > *');
    for (const element of allElements) {
        // console.log(element.className)
        if (element.className != 'but-6') {
            element.style.filter = 'blur(4px)';
        } else {
            const main = document.getElementById('main6');
            const sub = document.getElementById('sub6');
            main.style.borderBottom = '4px solid rgb(255, 209, 63)';
            sub.style.color = 'black';
        }
    }
    for (const element of allElements2) {
        // console.log(element.className)
        if (element.id != 'button-container') {
            element.style.filter = 'blur(4px)';
        }
    }
    for (const element of h6_allElements) {
        element.style.transition = 'border-bottom 1s'   
    }
}

function clear_blur_all() {
    const allElements = document.querySelectorAll('body > *');
    const a_allElements = document.querySelectorAll('a');
    const h6_allElements = document.querySelectorAll('a > h6');
    const p_allElements = document.querySelectorAll('a > p');
    for (const element of allElements) {
        element.style.filter = 'blur(0px)';
    }
    for (const element of a_allElements) {
        element.style.filter = 'blur(0px)';
    }
    for (const element of h6_allElements) {
        element.style.borderBottom = '0.1px solid white';
    }
    for (const element of p_allElements) {
        element.style.color = 'white';
    } 
}
