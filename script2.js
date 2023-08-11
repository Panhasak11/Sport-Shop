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

// filterarray = [];
const thumnail=[
    {
        image : 'image/Nike/N-M-yellow.png',
        namee : ' Air Zoom Supper Fly',
        price : '40$',
        size  : '39-44'
    },
    {
        image : 'image/Nike/N-Tiempo-orang.png',
        namee : 'Teimp Legend 10',
        price : '35$',
        size  : '39-44'
    },
    {
        image : 'image/Nike/N-Mbappe.jpg',
        namee : ' Air Zoom Mbappe',
        price : '40$',
        size  : '39-44'
    },
    {
        image : 'image/Nike/N-Ph-venom.png',
        namee : 'Phantom Hyper Venom',
        price : '40$',
        size  : '39-44'
    },
    {
        image : 'image/Nike/N-Ph-Gx.png',
        namee : 'Phantom Gx',
        price : '40$',
        size  : '39-44'
    },
    {
        image : 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/1a614a31-9d19-41b4-86a2-31a48646b35f/custom-phantom-academy-low-by-you.png',
        namee : 'Phantom Gx',
        price : '40$',
        size  : '39-44'
    },
    {
        image : 'https://www.lovellsoccer.co.uk/products/products_new/1061869.jpg',
        namee : 'Phantom GT',
        price : '35$',
        size  : '39-44'
    },
    {
        image : 'https://www.lovellsoccer.co.uk/products/large/1061956.jpg',
        namee : 'Phantom GT',
        price : '35$',
        size  : '39-44'
    },
    {
        image : 'https://static.nike.com/a/images/t_default/85e2f517-e529-4055-b87e-12aeb371b4f5/phantom-luna-elite-football-boot-D5Klmn.png',
        namee : 'Phantom Luna Elite',
        price : '42$',
        size  : '39-44'
    },
    {
        image : 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/84f025ae-1f5d-4fb8-85a6-04cd489bc515/phantom-luna-elite-football-boot-ZWRClG.png',
        namee : 'Phantom Luna Elite',
        price : '42$',
        size  : '39-44'
    },
    {
        image : 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/f56ebbc8-9c68-4e2b-a3cb-01f6f57083c0/zoom-mercurial-superfly-9-elite-xxv-fg-football-boot-RxNPgm.png',
        namee : 'Mercurial Supper Fly',
        price : '42$',
        size  : '39-44'
    },
    {
        image : 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F11%2Fcristiano-ronaldo-nike-zoom-mecurial-superfly-1.jpg?cbr=1&q=90',
        namee : 'Mercurial Supper Fly',
        price : '42$',
        size  : '39-44'
    },

]
var picture='';
for(let i in thumnail){
    picture +=`<div class="card">
                <div class="thumnail">
                    <a href="#">
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
