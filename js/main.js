window.onload = function(){
    
    /*Kat Model*/
    var model = {
        getAllKats : function(){
            return this.data.kats;
        },
        
        increment : function(id){
            this.data.kats[id].count ++;
        },
        
        getKat : function(id){
            return this.data.kats[id];    
        },
        
        getCurrent : function(){
            var data = this.data;
            return data.kats[data.current];
        },
        
        setCurrent : function(id){
            this.data.current = id;
        },
        
        update : function(current, newURL, newName, newCount){
          this.data.kats[current.id].name = newName;
          this.data.kats[current.id].img = newURL;
          this.data.kats[current.id].count = newCount;
            
        },
        
        data : {
            current: null,
            kats: [
                {
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
                    imgCredit : "Brightmags",
                    count : 0
                },
                {
                    id : 3,
                    name : "Black Ninja Kat",
                    img : "http://animaliaz-life.com/data_images/cat/cat2.jpg",
                    imgCredit : "Animal Life",
                    count : 0
                },
                {
                    id : 4,
                    name : "Baby Black Ninjas",
                    img : "http://i.dailymail.co.uk/i/pix/2014/07/29/1406649302657_wps_1_Abandoned_black_kittens_a.jpg",
                    imgCredit : "Daily Mail",
                    count : 0
                },
                {
                    id : 5,
                    name : "Krazy Kat",
                    img : "https://pbs.twimg.com/profile_images/424484505915621376/EOwsjaMZ_400x400.png",
                    imgCredit : "PBS",
                    count : 0
                },
                {
                    id : 6,
                    name : "Bread Ninja",
                    img : "http://breadedcat.com/wp-content/uploads/2012/02/cat-breading-tutorial-004.jpg",
                    imgCredit : "Breaded Cat",
                    count : 0
                },
                {
                    id : 7,
                    name : "Zain Ninja",
                    img : "https://i.ytimg.com/vi/mW3S0u8bj58/maxresdefault.jpg",
                    imgCredit : "Max Res",
                    count : 0
                }, 
                {
                    id : 8,
                    name : "Golden Ninja",
                    img : "http://pbs.twimg.com/media/CUcdA7BWoAAkmI0.jpg",
                    imgCredit : "PBS",
                    count : 0
                },
                {
                    id : 9,
                    name : "Sand Ninja",
                    img : "http://boredomfiles.com/wp-content/uploads/2015/07/03-sand-cats.jpg",
                    imgCredit : "Boredom Files",
                    count : 0
                },
                {
                    id : 10,
                    name : "Half Dark Half Light",
                    img : "http://cdn.earthporm.com/wp-content/uploads/2014/07/two-faced-chimera-cat-venus-14.jpg",
                    imgCredit : "Word Press Content",
                    count : 0
                }
            ]}
    };
    
    var control = {
        init : function(){
            katListView.init();
            katView.init();
            adminView.init();
        },
        
        getKats : function(){
            return model.getAllKats();
        },
        
        getKat : function(id){
            return model.getKat(id);
        },
        
        incrementCount : function(){
            var updatedKat = model.getCurrent();
            model.increment(updatedKat.id);
            katView.addCount(updatedKat);
            katListView.render(updatedKat);
        },
        
        saveKat : function(newURL, newName, newCount){
            var current = this.getCurrent();
            model.update(current, newURL, newName, newCount);
            
        },
        
        update : function(){
            var current = this.getCurrent();
            katListView.render(current);
            katView.render(current);
            adminView.render();
        },
        
        setCurrent : function(id){
            model.setCurrent(id);
        },
        
        getCurrent : function(){
            return model.getCurrent();
        },
        
        selectKat : function(){
            $('.selected').removeClass('selected');
            var current = model.getCurrent();
            var selected =  $('#'+current.id);
            selected.parents('li').addClass('selected');
            katView.render(current);
            adminView.render();
        }
    };
    
    var adminView = {
        init : function(){
            var button = $('#admin-button');
            for(var i=0; i<button.length; i++){
                button[i].addEventListener('click', function(){
                    $('#admin-panel').toggle();
                    adminView.render();
                }, false);
            };
            var save = $('#save');
            for(var i=0; i<save.length; i++){
                save[i].addEventListener('click', (function(){
                    return function (){
                        adminView.save();
                    };
                })(),false);
            };
            var cancel = $('#cancel');
            for(var i=0; i<cancel.length; i++){
                cancel[i].addEventListener('click', (function(){
                    return function (){
                        adminView.cancel();
                    };
                })(),false);
            };
        },
        
        render : function(){
            var kat = control.getCurrent();
            $('#kat-name').val(kat.name);
            $('#kat-url').val(kat.img);
            $('#kat-kount').val(kat.count);
            
        },
        
        save : function(){
            var newURL = $('#kat-url').val();
            var newName = $('#kat-name').val();
            var newCount = $('#kat-kount').val();
            control.saveKat(newURL, newName, newCount);
            control.update();
            
        },
        
        cancel : function(){
            console.log("cancel envoked");
            $('#admin-panel').toggle();
        }
    };
    
    var katListView = {
      init : function(){
        var katList = $('#kat-list');
        var kats = control.getKats();
        for(var i = 0; i<kats.length; i++){
            
            //create list element
            var elemKat = document.createElement('li');
            var kat = kats[i];
            //add all the other HTML and values to element
            elemKat.innerHTML = 
            '<a href="#">'+
                '<div id="'+kat.id+'" class="list-container">'+
                    '<div class="list-thumbnail-container">'+
                        '<img class="list-thumbnail" src="'+kat.img+'">'+
                    '</div>'+
                    '<p>'+kat.name+'<strong> '+kat.count+'</strong></p>'+
                '</div>'+
            '</a>';
            
            //Add Event Listener using closure
            elemKat.addEventListener('click', (
                function(katCopy){
                    return function (){
                        control.setCurrent(katCopy.id);
                        control.selectKat();
                    };
                })(kat),false);
                
            //Append List Item to list
            katList.append(elemKat);
            katList.append(document.createElement('hr'));
        };
      },
      
      render : function(kitty){
           var kat = $('#'+kitty.id);
           kat.html(
               '<div class="list-thumbnail-container">'+
                        '<img class="list-thumbnail" src="'+kitty.img+'">'+
                    '</div>'+
                    '<p>'+kitty.name+'<strong> '+kitty.count+'</strong></p>'
           );
      }
        
    };
 
    /*Display Logic*/
    var katView = {
        init : function(){
            var katImage = $('#kat-image');
            $('#kat-image').hide();
            for(var i = 0; i<katImage.length; i++){
                //Add Event Listener using closure
                katImage[i].addEventListener('click', control.incrementCount, false);
            };
            
        },
        
        render : function(kitty){
           if(kitty){
               $('#no-image-selection').hide();
               $('#kat-image').show();
           }
           var katImage = $('#kat-image');
           //fix selector
            katImage.attr('src', kitty.img);
            $('#kat-klicks').text(kitty.count);
   
        },
        
        addCount : function(kat){
            $('#kat-klicks').text(kat.count);
        }
    
    };
    
    control.init();
}