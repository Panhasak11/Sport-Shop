const logo=[
    {
        'id':'image/logoshop.png'
    }
]
var pageLogo='';
for(let i in logo){
    pageLogo+=`<img src="${logo[i]['id']}" alt="">`
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
                <li><a href="#">${menu[i]['home']}</a></li>
                <li><a href="#">${menu[i]['soc']}</a>
                <div class="s_menu"></>  
                </li>
                <li><a href="#">${menu[i]['con']}</a>
                <div class="contact"></>
                </li>
            </ul>`;
}
document.getElementsByClassName('page-menu')[0].innerHTML=text;
const submenu=[
    {
        face : '<i class="fa-brands fa-facebook"></i> Facebook',
        tel : '<i class="fa-brands fa-telegram"></i> Telegram',
        tik : '<i class="fa-brands fa-tiktok"></i> Tiktok'
    }
]
var sub="";
for(let i in submenu){
    sub+=`<ul>
            <li><a href="https://web.facebook.com/demboboy11/">${submenu[i]['face']}</a></li><hr>
            <li><a href="https://t.me/dembo_11">${submenu[i]['tel']}</a></li><hr>
            <li><a href="#">${submenu[i]['tik']}</a></li>
        </ul>`
}
document.getElementsByClassName('s_menu')[0].innerHTML=sub;

const pic=[
    {
        new_pic : 'image/add-crazyfast.png'
    }
]
var newPic='';
for(let i in pic){
    newPic=`<img class="animate__animated animate__slideInRight" src="${pic[i]['new_pic']}" alt="">` 
}
document.getElementsByClassName('shoe')[0].innerHTML=newPic;

const namePro=[
    {
        name_pro : 'Adidas X CrazyFast'
    }
]
var pro='';
for(let i in namePro){
    pro=`<h1>${namePro[i]['name_pro']}</h1>`
}
document.getElementsByClassName('name-pro')[0].innerHTML=pro;

const namePro2=[
    {
        name_pro2 : 'Nike Mercurial CR7 MDS 001'
    }
]
var pro2='';
for(let i in namePro2){
    pro2=`<h1>${namePro2[i]['name_pro2']}</h1>`
}
document.getElementsByClassName('name-pro2')[0].innerHTML=pro2;

const namePro3=[
    {
        name_pro3 : 'Puma Future Z '
    }
]
var pro3='';
for(let i in namePro3){
    pro3=`<h1>${namePro3[i]['name_pro3']}</h1>`
}
document.getElementsByClassName('name-pro3')[0].innerHTML=pro3;

const box2Pic=[
    {
        box : 'image/Nike/N-M-yellow.png'
    }
]
var b2_pic='';
for(let i in box2Pic){
    b2_pic=`<img src="${box2Pic[i]['box']}" alt="">`
}
document.getElementsByClassName('box2')[0].innerHTML=b2_pic;

const product=[
    {
        image : 'image/Nike/N-Ph-Gx.png',
        namee : 'Nike Phantom Gx ',
        price : '40$',
        size  : '39-44'
    }
]
{/* <img class="animate__animated animate__bounce" src="${product[i]['image']}" alt=""> */}
var picture='';
for(let i in product){
    picture=`<div class="new-pro-big">
                <div class="pro-pic">
                    <a href="index2.html"><img src="${product[i]['image']}" alt=""></a>
                </div>
                <div class="pro-detail">
                    <h4>Model : ${product[i]['namee']}</h4>
                    <p>Price  : ${product[i]['price']}</p>
                    <p>Size   : ${product[i]['size']}</p>
                </div>
            </div>`
}
document.getElementsByClassName('big-product')[0].innerHTML=picture;

const smallPic=[
    {
        image : 'image/Nike/N-Mbappe.jpg',
        namee : 'Air zoom Mbappe',
        price : '40$',
        size  : '39-44',
    },
    {
        image : 'image/Nike/N-Tiempo-orang.png',
        namee : 'Phantom Venom',
        price : '40$',
        size  : '39-44'
    },
    {
        image : 'image/Nike/N-Ph-venom.png',
        namee : 'Phantom Venom',
        price : '40$',
        size  : '39-44'
    }
]
var small="";
for(let i in smallPic){
    small+=`<div class="box-small">
                <div class="s-b-pic">
                    <a href="index2.html"><img src="${smallPic[i]['image']}" alt=""></a>
                </div>
                <div class="s-b-detail">
                    <h4>Model :${smallPic[i]['namee']}</h4>
                    <p>Price  :${smallPic[i]['price']}</p>
                    <p>Size   :${smallPic[i]['size']}</p>
                </div>
            </div>`
}
document.getElementsByClassName('small-pro1')[0].innerHTML=small;
// ===============================================
const product2=[
    {
        image : 'image/Adidas/add-crazyfast-green.png',
        namee : 'Adidas X Craxy Fast',
        price : '35$',
        size  : '39-44'
    }
]
var picture2='';
for(let i in product){
    picture2=`<div class="new-pro-big2">
                <div class="pro-pic2">
                    <a href="index3.html"><img src="${product2[i]['image']}" alt=""></a>
                </div>
                <div class="pro-detail2">
                    <h3>Model : ${product2[i]['namee']}</h3>
                    <p>Price  : ${product2[i]['price']}</p>
                    <p>Size   : ${product2[i]['size']}</p>
                </div>
            </div>`
}
document.getElementsByClassName('big-product2')[0].innerHTML=picture2;

const smallPic2=[
    {
        image : 'https://www.stripe3.com/cdn/shop/products/FW7515_FTW_photo_side-medial-center_gradient_1024x1024.png?v=1622919420',
        namee : 'Predetor',
        price : '38$',
        size  : '39-44',
    },
    {
        image : 'https://img01.ztat.net/article/spp-media-p1/a66cd7753b5144358f9aeadea06fd2a4/81b20d3497e8443984b5a30fd03de7b6.jpg?imwidth=1800&filter=packshot',
        namee : 'X Speed Portal',
        price : '35$',
        size  : '39-44'
    },
    {
        image : 'https://www.stripe3.com/cdn/shop/files/HQ4515_4_FOOTWEAR_Photography_SideMedialCenterView_grey_1024x1024.jpg?v=1686679708',
        namee : 'X Crazy Fast',
        price : '35$',
        size  : '39-44'
    }
]
var small2="";
for(let i in smallPic2){
    small2 +=`<div class="box-small2">
                <div class="s-b-pic2">
                    <a href="index3.html"><img src="${smallPic2[i]['image']}" alt=""></a>
                </div>
                <div class="s-b-detail2">
                    <h4>Model :${smallPic2[i]['namee']}</h4>
                    <p>Price  :${smallPic2[i]['price']}</p>
                    <p>Size   :${smallPic2[i]['size']}</p>
                </div>
            </div>`
}
document.getElementsByClassName('small-pro2')[0].innerHTML=small2;
// ======================================================================
const product3=[
    {
        image : 'image/Puma/puma (5).png',
        namee : 'Puma Ultra',
        price : '35$',
        size  : '39-44'
    }
]
var picture3='';
for(let i in product3){
    picture3=`<div class="new-pro-big3">
                <div class="pro-pic3">
                    <a href="index4.html"><img src="${product3[i]['image']}" alt=""></a>
                </div>
                <div class="pro-detail3">
                    <h3>Model : ${product3[i]['namee']}</h3>
                    <p>Price  : ${product3[i]['price']}</p>
                    <p>Size   : ${product3[i]['size']}</p>
                </div>
            </div>`
}
document.getElementsByClassName('big-product3')[0].innerHTML=picture3;

const smallPic3=[
    {
        image : 'image/Puma/puma (1).png',
        namee : 'Ultra Sakura',
        price : '35$',
        size  : '39-44',
    },
    {
        image : 'image/Puma/puma (4).png',
        namee : 'Ultra Astronaut',
        price : '35$',
        size  : '39-44'
    },
    {
        image : 'image/Puma/puma (3).png',
        namee : 'Future Z',
        price : '',
        size  : ''
    }
]
var small3="";
for(let i in smallPic3){
    small3 +=`<div class="box-small3">
                <div class="s-b-pic3">
                    <a href="index4.html"><img src="${smallPic3[i]['image']}" alt=""></a>
                </div>
                <div class="s-b-detail3">
                    <h4>Model :${smallPic3[i]['namee']}</h4>
                    <p>Price  :${smallPic3[i]['price']}</p>
                    <p>Size   :${smallPic3[i]['size']}</p>
                </div>
            </div>`
}
document.getElementsByClassName('small-pro3')[0].innerHTML=small3;
// ======================================================================
const product4=[
    {
        image : 'image/Mizuno/Mizuno (4).png',
        namee : 'Morilia Neo Beta',
        price : '35$',
        size  : '39-44'
    }
]
var picture4='';
for(let i in product4){
    picture4=`<div class="new-pro-big4">
                <div class="pro-pic4">
                    <a href="index5.html"><img src="${product4[i]['image']}" alt=""></a>
                </div>
                <div class="pro-detail4">
                    <h3>Model : ${product4[i]['namee']}</h3>
                    <p>Price  : ${product4[i]['price']}</p>
                    <p>Size   : ${product4[i]['size']}</p>
                </div>
            </div>`
}
document.getElementsByClassName('big-product4')[0].innerHTML=picture4;

const smallPic4=[
    {
        image : 'image/Mizuno/Mizuno (1).png',
        namee : 'Morilia Neo Beta',
        price : '35$',
        size  : '39-44',
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
    }
]
var small4="";
for(let i in smallPic4){
    small4 +=`<div class="box-small4">
                <div class="s-b-pic4">
                    <a href="index5.html"><img src="${smallPic4[i]['image']}" alt=""></a>
                </div>
                <div class="s-b-detail4">
                    <h4>Model :${smallPic4[i]['namee']}</h4>
                    <p>Price  :${smallPic4[i]['price']}</p>
                    <p>Size   :${smallPic4[i]['size']}</p>
                </div>
            </div>`
}
document.getElementsByClassName('small-pro4')[0].innerHTML=small4;