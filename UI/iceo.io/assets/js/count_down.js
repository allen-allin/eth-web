$(function (){
    var x = 0;
    function countdown() {
        
        var now = new Date();
        var currentTime = now.getTime();

        var eventDate = [
            //pre sale "starts in" set time
            new Date('Sep 10, 2018 00:00:00'),
            //pre sale "finish in" set time
            new Date('Oct 24, 2018 15:00:00'),
            //sale sale "finish in" set time
            new Date('Dec 15, 2018 15:00:00')
        ];

        if(eventDate[x].getTime() <= currentTime){
            if ( x < eventDate.length - 1  ) {
                x++;
                countdown();

                if( !$('#countdown_sec').hasClass('expired') ){
                    document.getElementById("counthead").innerHTML = "Current Pre-Sale Finish in";
                    $('#countdown_sec').removeClass('will-start');
                    $('#countdown_sec').addClass('will-finish');
                }            
                
            } else{
                document.getElementById("countdown_sec").innerHTML = "<div class='item-left col-xs-12 col-sm-12'><div class='item-inner-left'><span class='sold'>ROUND SALE HAS EXPIRED</span></div></div>";
                $('#countdown_sec').removeClass('will-finish');
                $('#countdown_sec').removeClass('will-start');
                $('#countdown_sec').addClass('expired');
            }

            if( Number( $('#rtokens').text() ) === 0 ) {
                document.getElementById("countdown_sec").innerHTML = "<div class='item-left col-xs-12 col-sm-12'><div class='item-inner-left'><span class='sold'>SOLD OUT</span></div></div>";
                $('#countdown_sec').removeClass('will-finish');
                $('#countdown_sec').removeClass('will-start');
                $('#countdown_sec').addClass('sold');
            }


            if( $('#countdown_sec').hasClass('expired') || $('#countdown_sec').hasClass('sold') ){
                $('.roundsale-modal-button').attr('data-target','#resetpass-modal');
                $('#roundsale-modal-button').hide();
            }

        } else{
            var remTime = eventDate[x].getTime() - currentTime;

            var sec = Math.floor(remTime / 1000);
            var min = Math.floor(sec / 60);
            var hur = Math.floor(min / 60);
            var day = Math.floor(hur / 24);

            hur %= 24;
            min %= 60;
            sec %= 60;

            hur = (hur < 10) ? "0" + hur : hur;
            min = (min < 10) ? "0" + min : min;
            sec = (sec < 10) ? "0" + sec : sec;

            $('.seconds').text(sec);
            $('.minutes').text(min);
            $('.hours').text(hur);
            $('.days').text(day);


            setTimeout(countdown, 1000);
        }
    }

    countdown();
});