var isFirefox = typeof InstallTrigger !== 'undefined';

$(function(){
    if (!$('.envelope').hasClass('open')){
        $('.envelope').click(function(){
            $(this).removeClass('new').addClass('open');
            document.body.style.backgroundImage = "url('2.png')";
        });
    }
});

function resize() {
    if(window.innerWidth / window.innerHeight >= 1.5) //Landscape
    {
        if(isFirefox)
        {
            document.body.style.transform = "scale(" + window.innerHeight / 366.66667 / 1.2 + ")";
        }
        else
        {
            document.body.style.zoom = (window.innerHeight / 366.66667 / 1.2) * 100 + "%";
        }
    }
    else //Portrait
    {
        if(isFirefox)
        {
            document.body.style.transform = "scale(" + window.innerWidth / 550 / 1.2 + ")";
        }
        else
        {
            document.body.style.zoom = (window.innerWidth / 550 / 1.2) * 100 + "%";
        }
    }
}