window.onload = function(){
    
    /*Kat details*/
    var kats = [{
        id : 0,
        name : "Sunshine",
        img : "http://cdn.powerball4life.co/2015/07/30/cute-cat-praying-1920x1200-16-10.jpg",
        imgCredit : "Cute Cat By Reasondinn",
        count : 0
    },
    {
        id : 1,
        name : "El Gato",
        img : "https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg",
        imgCredit : "http://www.powerball4life.co/",
        count : 0
    },
    {
        id : 2,
        name : "Rainbow Cats",
        img : "http://brightmags.com/wp-content/uploads/2015/06/cats.jpg",
        imgCredit : "http://www.powerball4life.co/",
        count : 0
    },
    {
        id : 3,
        name : "Black Ninja Kat",
        img : "http://animaliaz-life.com/data_images/cat/cat2.jpg",
        imgCredit : "http://www.powerball4life.co/",
        count : 0
    },
    {
        id : 4,
        name : "Baby Black Ninjas",
        img : "http://i.dailymail.co.uk/i/pix/2014/07/29/1406649302657_wps_1_Abandoned_black_kittens_a.jpg",
        imgCredit : "http://www.powerball4life.co/",
        count : 0
    },
    {
        id : 5,
        name : "Krazy Kat",
        img : "https://pbs.twimg.com/profile_images/424484505915621376/EOwsjaMZ_400x400.png",
        imgCredit : "http://www.powerball4life.co/",
        count : 0
    },
    {
        id : 6,
        name : "Bread Ninja",
        img : "http://breadedcat.com/wp-content/uploads/2012/02/cat-breading-tutorial-004.jpg",
        imgCredit : "http://www.powerball4life.co/",
        count : 0
    },
    {
        id : 7,
        name : "Zain Ninja",
        img : "https://i.ytimg.com/vi/mW3S0u8bj58/maxresdefault.jpg",
        imgCredit : "http://www.powerball4life.co/",
        count : 0
    },
    {
        id : 8,
        name : "Golden Ninja",
        img : "http://pbs.twimg.com/media/CUcdA7BWoAAkmI0.jpg",
        imgCredit : "http://www.powerball4life.co/",
        count : 0
    },
    {
        id : 9,
        name : "Sand Ninja",
        img : "http://boredomfiles.com/wp-content/uploads/2015/07/03-sand-cats.jpg",
        imgCredit : "http://www.powerball4life.co/",
        count : 0
    },
    {
        id : 10,
        name : "Half Dark Half Light",
        img : "http://cdn.earthporm.com/wp-content/uploads/2014/07/two-faced-chimera-cat-venus-14.jpg",
        imgCredit : "http://www.powerball4life.co/",
        count : 0
    }];
    /*Load Kat Details*/
    var katList = document.getElementById('kat-list');
    console.log(katList);
    for(var i = 0; i < kats.length; i++){
        
        //create list element
        var elemKat = document.createElement('li');
        var kat = kats[i];
        //add all the other HTML and values to element
        elemKat.innerHTML = 
        '<a href="#">'+
            '<div class="list-container">'+
                '<div class="list-thumbnail-container">'+
                    '<img class="list-thumbnail" src="'+kat.img+'">'+
                '</div>'+
                '<p>'+kat.name+'<strong id="kat-kount-'+kat.id+'"> '+kat.count+'</strong></p>'+
            '</div>'+
        '</a>';
        
        //Add Event Listener using closure
        elemKat.addEventListener('click', (
            function(katCopy){
                return function (){
                    katCopy.count += 1;
                    displayKat(katCopy);
                };
            })(kat),false);
            
        //Append List Item to list
        katList.appendChild(elemKat);
        katList.appendChild(document.createElement('hr'));
    };
    
    /*Display Logic*/
    var displayKat = function(kitty){
        console.log(kitty);
        document.getElementById('kat-klicks').innerText = kitty.count;
        document.getElementById('kat-image').setAttribute('src', kitty.img);
        document.getElementById('kat-kount-'+kitty.id).innerText = ' '+kitty.count;
    };
    // var clickCount = function(num){
    //     var klicks = parseInt(document.getElementById('kat'+num+'Klicks').textContent) + 1.0;
    //     document.getElementById('kat'+num+'Klicks').innerText = klicks.toString();
    // };
    
    // var elem = document.getElementById('kat1Img');
    // elem.addEventListener('click', function(){
    //     clickCount(1);
    // }, false);
    // document.getElementById('kat2Img').addEventListener('click', function(){
    //     clickCount(2);    
    // }, false)
    
    
};
