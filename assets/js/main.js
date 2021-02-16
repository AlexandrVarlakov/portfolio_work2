let hamb = document.querySelector('.hamburger');
let menu = document.querySelector('.mob-menu-wrap');
let hide_mob_menu = document.querySelector('.mob-menu__hide-img');
hamb.onclick = function(){

    menu.style.transform = 'translateX(0)';
   
}


let mob_item = document.querySelectorAll('.mob-menu__item').forEach( function(item){
    item.onclick = function(){
        menu.style.transform = 'translateX(150%)';
    }
});

hide_mob_menu.onclick = function(){
    menu.style.transform = 'translateX(150%)';
}

/********************************************** */
//section about

let about__title = document.querySelector('.about__title');
let about__line = document.querySelector('.about__line');
let about__descripton = document.querySelector('.about__description');




let about_box = animator('.about__title-box');
about_box.observe('', 0, 0, 1)
.onInShow(function(){
    about__title.classList.add('zoomIn-1');
    about__line.classList.add('zoomIn-1');
    about__descripton.classList.add('zoomIn-1');
})
.onNoVisble(function(){
    about__title.classList.remove('zoomIn-1');
    about__line.classList.remove('zoomIn-1');
    about__descripton.classList.remove('zoomIn-1');
});
/*
let about__title = animator('.about__title');
about__title.observe('zoomIn-1', 0, 0, 5).run();*/
//END section about

/********************************************** */

/***********************************************/
//section Advert

let advert__text = document.querySelector('.advert__text-wrap');
let advert__img = document.querySelector('.advert__img');
let advert = animator('.advert');

advert.observe('', 0, 0, 1)
.onInShow(function(){
    advert__text.classList.add('slideInLeft');
    advert__img.classList.add('slideInUp');
})
.onNoVisble(function(){
    
});
//End section Advert


/***********************************************/
//works section

//works section -buttons


let all = document.getElementById('all');
let branding = document.getElementById('branding');
let web = document.getElementById('web'); 
let mobile = document.getElementById('mobile');
let illustrations = document.getElementById('illustrations');

//title of section
let work__title =  document.querySelector('.work__title');
let work__line =  document.querySelector('.work__line');


//works section - items
let work__trimplement = document.querySelector('.work__trimplement');
let work__kinder_planet = document.querySelector('.work__kinder-planet');
let work__jetindus = document.querySelector('.work__jetindus');
let work__menu = document.querySelector('.work__menu');
let work__site = document.querySelector('.work__site');
let work__lamp = document.querySelector('.work__lamp');
//works section - items list
let work__items = document.querySelectorAll( '.work__item');

//works section - click on button all
all.onclick = function(){

    work__items.forEach(( item ) => {
        item.classList.add('hide-work')
    });
    work__items.forEach(( item ) => {
        item.classList.remove('hide-work')
    });
    setActiveBtn(this);
}
//works section - click on button branding
branding.onclick = function(){
    work__items.forEach(( item ) => {
        item.classList.add('hide-work')
    });
    work__kinder_planet.classList.remove('hide-work');
    work__jetindus.classList.remove('hide-work');
    setActiveBtn(this);
}
//works section - click on button web
web.onclick = function(){
    work__items.forEach(( item ) => {
        item.classList.add('hide-work')
    });
    work__kinder_planet.classList.remove('hide-work');
    work__site.classList.remove('hide-work');
    setActiveBtn(this);
}
//works section - click on button mobile
mobile.onclick = function(){
    work__items.forEach(( item ) => {
        item.classList.add('hide-work')
    });

    work__trimplement.classList.remove('hide-work');
    work__site.classList.remove('hide-work');
    setActiveBtn(this);
}
//works section - click on button illustration
illustrations.onclick = function(){
    work__items.forEach(( item ) => {
        item.classList.add('hide-work')
    });

    work__trimplement.classList.remove('hide-work');
    work__site.classList.remove('hide-work');
    work__lamp.classList.remove('hide-work');
    setActiveBtn(this);
}
// function set active btn
function setActiveBtn(btn){
    let btn_active =  document.querySelector('.work-nav__btn_active');
    btn_active.classList.remove('work-nav__btn_active');
    btn.classList.add('work-nav__btn_active');
}


//animation elements of work section



let work__title_box = animator('.work__title-box');

work__title_box.observe('', 0, 0, 1)
.onInShow(function(){
    work__title.classList.add('zoomIn-1');
    work__line.classList.add('zoomIn-1');
})
.onNoVisble(function(){
    work__title.classList.remove('zoomIn-1');
    work__line.classList.remove('zoomIn-1');
});


let work__nav = animator('.work-nav');
work__nav.observe('', 0, 0, 1)
.onInShow(function(){

    all.classList.add('zoomIn-1');
    branding.classList.add('zoomIn-2');
    web.classList.add('zoomIn-3');
    mobile.classList.add('zoomIn-4');
    illustrations.classList.add('zoomIn-5'); 
})
.onNoVisble(function(){
    
});


let work_set = animator('.work-set');
work_set.observe('zoomIn-1', 0, 0, 1).run();

/* END WORK section */
/***********************************************/


/***********************************************/
//section clients


let clients__title = animator('.clients__title-box');

let google = document.querySelector('.google');
let samsung = document.querySelector('.samsung');
let flickr = document.querySelector('.flickr');
let foursquare = document.querySelector('.foursquare');
let pinterest = document.querySelector('.pinterest');
clients__title.observe('', 0, 0, 1)
    .onInShow(function(){
        google.classList.add('fadeIn');
        samsung.classList.add('fadeIn-2');
        flickr.classList.add('fadeIn-3');
        foursquare.classList.add('fadeIn-4');
        pinterest.classList.add('fadeIn-5');
        
    })
    .onNoVisble(function(){
        
    });
//END section clients
/***********************************************/



window.onresize = function(){
    if ( document.documentElement.clientWidth > 960 ) {

        menu.style.transform = 'translateX(200%)';
        
    }
}


let quote = animator('.quote');
let textQuote = document.querySelector('.quote__text');
let carriage = document.querySelector('.type-carriage');
let authorQuote = document.querySelector('.quote__author');
let authorQuoteWrap = document.querySelector('.quote__author-wrap');
quote.observe('', 0, 0, 1).run();
quote.onInShow(function(){
    let text = "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away."
    let author = '- John Doe';
    textQuote.innerHTML= "";
    authorQuote.innerHTML = "";
    
    let textInterval = setInterval(()=> {
        let ch = text[0]; 
        textQuote.innerHTML=textQuote.innerHTML + ch;
        
        text = text.slice(1); 
        if (text.length <= 0 )  {
            clearInterval(textInterval);
            authorQuoteWrap.append(carriage);
            let authorInterval = setInterval(()=> {
                let ch_a = author[0];
                authorQuote.innerHTML=authorQuote.innerHTML + ch_a;
                author = author.slice(1); 
                if (author.length <= 0 )  {
                    clearInterval(authorInterval);
                }
            }, 120);
        }
    }, 120);
    
});



let servicesFP_btn = document.getElementById('services-f-p');   
let servicesSP_btn= document.getElementById('services-s-p');     
let services_container = document.querySelector('.services__container-wrap');


servicesFP_btn.onclick = function(){
    services_container.style.transform = 'translateX(0px)';
    let active_btn = document.querySelector('.services__btn_active');
    active_btn.classList.remove('services__btn_active');
    this.classList.add('services__btn_active');
}

servicesSP_btn.onclick = function(){
    services_container.style.transform = 'translateX(-100%)';
    let active_btn = document.querySelector('.services__btn_active');
    active_btn.classList.remove('services__btn_active');
    this.classList.add('services__btn_active');
}



let ind_disigners = document.getElementById('ind-disigners');
let ind_hours  = document.getElementById('ind-hours');
let ind_projects  = document.getElementById('ind-projects');
let ind_tweets  = document.getElementById('ind-tweets');
let ind_cups  = document.getElementById('ind-cups');



let results = animator('.results');
results.observe('', 0, 0, 2).run();
results.onInShow(function(){
    
    counter(0, 13, 1500, 1,ind_disigners);
    counter(0, 2580, 1500, 60, ind_hours);
    counter(0, 485, 1500, 5, ind_projects);
    counter(0, 750, 1500, 15, ind_tweets);
    counter(0, 380, 1500, 10, ind_cups);
});


function counter(_start = 0, end = 0, time = 1500, step = 1, node){
    let start = _start;
    let timer = setInterval(function(){
        start = start + step;
        node.innerText = start;
        if ( start >= end) clearInterval(timer);
   }, (time * step) / end);
}
let photoshop = document.querySelector('#gauges__full_photoshop');
let illustrator = document.querySelector('#gauges__full_illustrator');
let  html = document.querySelector('#gauges__full_html');
let css = document.querySelector('#gauges__full_css');
let js = document.querySelector('#gauges__full_js');

let gauges__container = animator('.gauges__container');
gauges__container.observe('', 0, 0, 1)
    .onInShow(function(){
        photoshop.classList.add('gauges__full_photoshop');
        illustrator.classList.add('gauges__full_illustrator');
        html.classList.add('gauges__full_html');
        css.classList.add('gauges__full_css');
        js.classList.add('gauges__full_js');
    })
    .onNoVisble(function(){});




