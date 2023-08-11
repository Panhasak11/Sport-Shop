const logo=[
    {
        'id':'image/logoshop.png'
    }
]
var pageLogo='';
for(let i in logo){
    pageLogo=`<a href"#"><img src="${logo[i]['id']}" alt=""></a>`
}
document.getElementsByClassName('logo')[0].innerHTML=pageLogo;
document.getElementsByClassName('foot-shop-logo')[0].innerHTML=pageLogo;

const pageName=[
   {
        'pagename' : 'Sport Shop'
   }
];

for(let i in pageName){
    var pagename=pageName[i]['pagename'];
}
document.getElementById('page-name').innerHTML=pagename;
document.getElementById('name-foot').innerHTML=pagename;

const menu=[
    {
        home : 'Home',
        soc : 'Social',
        con : 'Contact Us'

    },
];
var text='';
for(let i in menu){
    text+=`<ul>
                <li><a href="index.html">${menu[i]['home']}</a></li>
                <li><a href="#">${menu[i]['soc']}</a>
                <div class="s_menu"></>  
                </li>
                <li><a href="#">${menu[i]['con']}</a></li>
            </ul>`;
}
document.getElementsByClassName('page-menu')[0].innerHTML=text;
const submenu=[
    {
        face : '<i class="fa-brands fa-facebook"></i> Facebook',
        tel : '<i class="fa-brands fa-telegram"></i> Telegram',
        twi : '<i class="fa-brands fa-tiktok"></i> Tiktok'
    }
]
var sub="";
for(let i in submenu){
    sub+=`<ul>
            <li><a href="https://web.facebook.com/demboboy11/">${submenu[i]['face']}</a></li><hr>
            <li><a href="https://t.me/dembo_11">${submenu[i]['tel']}</a></li><hr>
            <li><a href="#">${submenu[i]['twi']}</a></li>
        </ul>`
}
document.getElementsByClassName('s_menu')[0].innerHTML=sub;
const thumnail=[
    {
        image : 'image/Mizuno/Mizuno (1).jpg',
        namee : 'Morilia Neo Beta',
        price : '35$',
        size  : '39-44'
    },
    {
        image : 'image/Mizuno/Mizuno (2).png',
        namee : 'Morilia Neo Beta',
        price : '35$',
        size  : '39-44'
    },
    {
        image : 'image/Mizuno/Mizuno (3).png',
        namee : 'Morilia Neo Beta',
        price : '35$',
        size  : '39-44'
    },
    {
        image : 'image/Mizuno/Mizuno (4).png',
        namee : 'Morilia Neo Beta',
        price : '35$',
        size  : '39-44'
    },
    {
        image : 'https://www.mizuno.com/on/demandware.static/-/Sites-mizuno-master-catalog/default/dwc35099e4/images/hi-res/23SS/Football/P1GA236009/P1GA236009_00.png',
        namee : 'Alpha Elite',
        price : '35$',
        size  : '39-44'
    },
    {
        image : 'image/Mizuno/Mizuno (1).png',
        namee : 'Morilia Neo Beta',
        price : '35$',
        size  : '39-44'
    },
    {
        image : 'image/Mizuno/alpha 1.png',
        namee : 'Alpha Elite',
        price : '35$',
        size  : '39-44'
    },
    {
        image : 'image/Mizuno/alpha 2.png',
        namee : 'Alpha Elite',
        price : '35$',
        size  : '39-44'
    },
    {
        image : 'image/Mizuno/alpha 3.png',
        namee : 'Alpha Elite SR4',
        price : '35$',
        size  : '39-44'
    },
    {
        image : 'image/Mizuno/wave1.png',
        namee : 'Wave Ignitus Japan',
        price : '35$',
        size  : '39-44'
    },
    {
        image : 'image/Mizuno/alpha 4.jpg',
        namee : 'Morilia Neo Beta',
        price : '35$',
        size  : '39-44'
    },
    {
        image : 'image/Mizuno/Mizuno (5).jpg',
        namee : 'Morilia Neo Beta',
        price : '35$',
        size  : '39-44'
    },
    

]
var picture='';
for(let i in thumnail){
    picture +=`<div class="card">
                <div class="thumnail">
                    <a href="index5.html">
                        <img src="${thumnail[i]['image']}" alt="">
                    </a>
                </div>
                <div class="detail">
                    <h5 id="para">Model : ${thumnail[i]['namee']}</h5>
                    <p>Price : ${thumnail[i]['price']}</p>
                    <p>Size  : ${thumnail[i]['size']}</p>
                </div>
                <div class="button">
                        <a href="#"><button>Buy Now</button></a>
                    </div>
            </div>`
}
document.getElementsByClassName('box-card')[0].innerHTML=picture;
