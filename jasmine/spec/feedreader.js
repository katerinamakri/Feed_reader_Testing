
$(function() {

    describe('RSS Feeds', function() {
        //it tests that the allFeeds variable has been defined and that it is not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        //it tests that the URLs have been defined and are not empty
        it('each url is defined', function() {

            allFeeds.forEach(function(item){
                expect(item.url).toBeDefined();
                expect(item.url).not.toBe(0);
            })
        });         
        
        //it tests that the names of allFeeds variable have been defined and are not empty
        it('each name is defined', function() {
            allFeeds.forEach(function(item){
                expect(item.name).toBeDefined();
                expect(item.name).not.toBe(0);
            })
        });

    });

    describe('The menu', function() {
        var body = $('body');    

        // it tests that the menu element is hidden by default

        it('is hidden', function() {
            expect(body.hasClass('menu-hidden')).toBe(true);
        });

        // it testa that the menu changes visibility when the menu icon is clicked

        it('appears when clicked and is hidden when clicked again', function() {
            var menuIcon = $('.menu-icon-link');

            menuIcon.trigger('click');
            expect(body.hasClass('menu-hidden')).toBe(false);
            menuIcon.trigger('click');
            expect(body.hasClass('menu-hidden')).not.toBe(false);          
        });    
             
    });

    describe('Initial Entries', function() {
        // it tests that there is at least a single .entry element within the .feed container
        // when the loadFeed function is called and completes its work

        beforeEach(function (done) {
            loadFeed(0, function(){
                done();
            });
        });
                    
        it('should there is at least a single .entry element within the .feed container', function(done) {
            var container = $('.feed').children().length;
            expect(container).toBeGreaterThan(0);
            done();   
        }); 

    });

    describe('New Feed Selection', function() {

        // it tests that the content actually changes when a new feed is loaded     
         let firstFeed;
         let secondFeed;

        beforeEach((done)=> {
            loadFeed(0, function() {
                firstFeed = $('.feed').html();
                
                loadFeed(1, function() {
                    secondFeed = $('.feed').html();
                     done();
                });
            });
        });

        it('the content should actually changes', function(done) {
            expect(firstFeed !== secondFeed).toBe(true);
            done();
        });
    });

}());
