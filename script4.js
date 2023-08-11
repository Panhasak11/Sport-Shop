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
        image : 'image/Puma/puma (1).png',
        namee : 'Ultra Sakura',
        price : '35$',
        size  : '39-44'
    },
    {
        image : 'image/Puma/puma (3).png',
        namee : 'Future Z',
        price : '38$',
        size  : '39-44'
    },
    {
        image : 'image/Puma/puma (4).png',
        namee : 'Ultra Astronaut',
        price : '35$',
        size  : '39-44'
    },
    {
        image : 'image/Puma/puma (5).png',
        namee : 'Ultra World Cup',
        price : '',
        size  : ''
    },
    {
        image : 'https://i8.amplience.net/i/jpl/jd_648345_a?qlt=92&w=600&h=425&v=1&fmt=auto',
        namee : 'Ultra World Cup',
        price : '',
        size  : ''
    },
    {
        image : 'image/Puma/puma (7).png',
        namee : 'Ultra Sakura',
        price : '35$',
        size  : '39-44'
    },
    {
        image : 'https://images.keepersport.net/eyJidWNrZXQiOiJrZWVwZXJzcG9ydC1wcm9kdWN0LWltYWdlcy11cy1lYXN0LTEiLCJrZXkiOiJwdW1hXC9FVFMxMDY0MDlfMDAxXC9wdW1hLWZ1dHVyZS16LTEtMS1jcmVhdGl2aXR5LWZnLWFnLXNjaHdhcnotZjAxLTEwNjQwOS1mdXNzYmFsbHNjaHVoX3JpZ2h0X2luLnBuZyIsImVkaXRzIjpbXX0=',
        namee : 'Future Z',
        price : '38$',
        size  : '39-44'
    },
    {
        image : 'https://images.prodirectsport.com/ProductImages/Gallery_1/277557_Gallery_1_1382253.jpg',
        namee : 'Future Z',
        price : '38$',
        size  : '39-44'
    },
    {
        image : 'https://1565619539.rsc.cdn77.org/temp/1674208638_fdd6df6d1e783b5bb04ccf9d6bd3374b.jpg',
        namee : 'Future Z',
        price : '38$',
        size  : '39-44'
    },
    {
        image : 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/106694/04/sv01/fnd/THA/fmt/png',
        namee : 'Ultra Black',
        price : '35$',
        size  : '39-44'
    },
    {
        image : 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/107104/01/sv01/fnd/THA/fmt/png',
        namee : 'Future Z',
        price : '38$',
        size  : '39-44'
    },
    {
        image : 'https://www.footballshirtculture.com/images/cwgallery/120-puma-future-z-1-4-neymar-jr-rare-fg-agple-metallic-silver-castlerock-sunset-glow-elektro-pur/120_puma_future_z_1_4_neymar_jr_rare_fg_agple_metallic_silver_castlerock_sunset_glow_elektro_pur_2.jpg',
        namee : 'Future Z',
        price : '38$',
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
