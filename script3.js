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
        image : 'https://www.lovellsoccer.co.uk/products/large/1468813.jpg',
        namee : 'X Crazy Fast',
        price : '35$',
        size  : '39-44'
    },
    {
        image : 'https://img01.ztat.net/article/spp-media-p1/a66cd7753b5144358f9aeadea06fd2a4/81b20d3497e8443984b5a30fd03de7b6.jpg?imwidth=1800&filter=packshot',
        namee : 'X Speed Portal',
        price : '35$',
        size  : '39-44'
    },
    {
        image : 'https://www.stripe3.com/cdn/shop/products/FW7515_FTW_photo_side-medial-center_gradient_1024x1024.png?v=1622919420',
        namee : 'Predator ',
        price : '40$',
        size  : '39-44'
    },
    {
        image : 'https://www.lovellsoccer.co.uk/products/large/1051051.jpg',
        namee : 'Predator Edge',
        price : '38$',
        size  : '39-44'
    },
    {
        image : 'https://www.lovellsoccer.ie/products/large/1468084.jpg',
        namee : 'X SpeedFlow',
        price : '35$',
        size  : '39-44'
    },
    {
        image : 'https://www.lovellsoccer.co.uk/products/large/1061374.jpg',
        namee : 'X SpeedFlow',
        price : '35$',
        size  : '39-44'
    },
    {
        image : 'https://www.lovellsoccer.co.uk/products/large/1467532.jpg',
        namee : 'Predator Legend',
        price : '38$',
        size  : '39-44'
    },
    {
        image : 'https://www.kickscrew.com/cdn/shop/products/main-square_0fd27c66-3401-4ba0-a5f2-abdadcd1e663_1200x1200.jpg?v=1686252172',
        namee : 'Copa 20.1',
        price : '38$',
        size  : '39-44'
    },
    {
        image : 'https://www.soccerbible.com/media/119082/pred-2-min.jpg',
        namee : 'Predator Monster',
        price : '40$',
        size  : '39-44'
    },
    {
        image : 'https://www.soccerbible.com/media/119096/pred-16-min.jpg',
        namee : 'Predator Monster',
        price : '40$',
        size  : '39-44'
    },
    {
        image : 'https://www.soccerbible.com/media/119093/pred-13-min.jpg',
        namee : 'Predator Monster',
        price : '40$',
        size  : '39-44'
    },
    {
        image : 'https://www.lovellsoccer.co.uk/products/products_new/49434.jpg',
        namee : 'Nemeziz',
        price : '40$',
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
