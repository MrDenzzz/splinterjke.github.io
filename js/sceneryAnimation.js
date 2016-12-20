var h = new Date().getHours();
switch(true)
{
    case (h <= 6): //evening -> night
        {
          $(function()
          {
              //css
            $('#ground').css({'opacity':'0.5'});
            $('#clouds').css({'opacity':'0.4'});
            $('#trees').css({'opacity':'0.5'});
            $('#buildings').css({'opacity':'0.5'});
            $('#sky').css({'opacity':'1'});
            $('#night').css({'opacity':'0.4'});
            $('#sun_red').css({'top':'65%','opacity':'0.8'});
            $('#sun_yellow').css({'top':'65%','opacity':'0.2'});
              //animation
            $('#sun_yellow').animate({'top':'100%','opacity':'0'},10000,function()
            {
                $('#stars').animate({'opacity':0.75},4000,function()
                {
                    $('#moon').animate({'top':'0%','opacity':1}, 4000);
                });
            });
            $('#sun_red').animate({'top':'100%','opacity':'0.8'},10000);
            $('#clouds').animate({'backgroundPosition':'1000px','opacity':0}, 14000);
            $('#buildings').animate({'opacity':'0'},18000);
            $('#night').animate({'opacity':0.8},18000);
            $('#trees').animate({'opacity':0},18000);
            $('#ground').animate({'opacity':0},18000);
          })
        }
        break;
    case (h <= 12): //night -> morning
        {
          $(function()
          {
              //css
            $('#ground').css({'opacity':'0'});
            $('#clouds').css({'opacity':'0'});
            $('#trees').css({'opacity':'0'});
            $('#buildings').css({'opacity':'0'});            
            $('#night').css({'opacity':'0.8'});
            $('#stars').css({'opacity':'1'});
            $('#moon').css({'top':'0%','opacity':1});
            $('#sun_red').css({'top':'100%','opacity':'0.8'});
            $('#sun_yellow').css({'top':'100%','opacity':'0.8'});
              //animation
            $('#moon').animate({'top':'100%','opacity':'0.8'},10000,function()
            {
                $('#stars').animate({'opacity':0},4000,function()
                {
                    $('#sun_yellow').animate({'top':'50%','opacity':1}, 4000);
                });
            });
            $('#clouds').animate({'opacity':0.8}, 8000,function()
                {
                    $('#clouds').animate({'backgroundPosition':'10000px'}, 100000);
                });
            $('#clouds').animate({'backgroundPosition':'10000px'}, 100000);            
            $('#buildings').animate({'opacity':'0.8'},18000);
            $('#night').animate({'opacity':0.2},18000);
            $('#trees').animate({'opacity':0.8},18000);
            $('#ground').animate({'opacity':0.8},18000);
          })
        }
        break;
    case (h <= 18): //morning -> day
        {
          $(function()
          {
              //css
            $('#ground').css({'opacity':'0.8'});
            $('#clouds').css({'opacity':'0.8'});
            $('#trees').css({'opacity':'0.8'});
            $('#buildings').css({'opacity':'0.8'});            
            $('#night').css({'opacity':'0.2'});
            $('#stars').css({'opacity':'0'});            
            $('#sun_red').css({'top':'100%','opacity':'0'});
            $('#sun_yellow').css({'top':'50%','opacity':'1'});
              //animation
            $('#sun_yellow').animate({'top':'0%','opacity':'1'},10000);
            $('#clouds').animate({'backgroundPosition':'10000px','opacity':1}, 100000);            
            $('#buildings').animate({'opacity':'1'},18000);
            $('#night').animate({'opacity':0},18000);
            $('#trees').animate({'opacity':1},18000);
            $('#ground').animate({'opacity':1},18000);
          })
        }
        break;
    default: //day -> evening
        {
          $(function()
          {
              //css
            $('#ground').css({'opacity':'1'});
            $('#clouds').css({'opacity':'1'});
            $('#trees').css({'opacity':'1'});
            $('#buildings').css({'opacity':'1'});            
            $('#night').css({'opacity':'0'});
            $('#stars').css({'opacity':'0'});            
            $('#sun_red').css({'top':'0%','opacity':'0'});
            $('#sun_yellow').css({'top':'0%','opacity':'1'});
              //animation
            $('#sun_yellow').animate({'top':'65%','opacity':'0.2'},10000);            
            $('#sun_red').animate({'top':'65%','opacity':'0.8'},10000);
            $('#clouds').animate({'backgroundPosition':'10000px','opacity':0.4}, 100000);            
            $('#buildings').animate({'opacity':'0.5'},18000);
            $('#night').animate({'opacity':0.4},18000);
            $('#trees').animate({'opacity':0.5},18000);
            $('#ground').animate({'opacity':0.5},18000);
          })
        }
}