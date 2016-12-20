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
            $('#sun_red').css({'top':'65%','opacity':'0.7'});
            $('#sun_yellow').css({'top':'65%','opacity':'0.3'});
              //animation
            $('#sun_yellow').animate({'top':'100%','opacity':'0'},5000,function()
            {
                $('#stars').animate({'opacity':0.75},2000,function()
                {
                    $('#moon').animate({'top':'5%','opacity':1}, 6000);
                });
            });
            $('#sun_red').animate({'top':'100%','opacity':'0.8'},13000);
            $('#clouds').animate({'backgroundPosition':'200px','opacity':0}, 13000);
            $('#buildings').animate({'opacity':'0'},13000);
            $('#night').animate({'opacity':0.8},13000);
            $('#trees').animate({'opacity':0},13000);
            $('#ground').animate({'opacity':0},13000);
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
            $('#moon').animate({'top':'100%','opacity':'0.8'},5000,function()
            {
                $('#stars').animate({'opacity':0},2000,function()
                {
                    $('#sun_yellow').animate({'top':'50%','opacity':1}, 4000);
                });
            });
            $('#clouds').animate({'opacity':0.8}, 7000,function()
                {
                    $('#clouds').animate({'backgroundPosition':'200px'}, 40000);
                });             
            $('#buildings').animate({'opacity':'0.8'},13000);
            $('#night').animate({'opacity':0.2},13000);
            $('#trees').animate({'opacity':0.8},3000);
            $('#ground').animate({'opacity':0.8},13000);
          })
        }
        break;
    case (h <= 18): //morning -> day
        {
          $(function()
          {
              //css
            $('#ground').css({'opacity':'0.8'});
            $('#clouds').css({'opacity':'0.9'});
            $('#trees').css({'opacity':'0.8'});
            $('#buildings').css({'opacity':'0.8'});            
            $('#night').css({'opacity':'0.2'});
            $('#stars').css({'opacity':'0'});            
            $('#sun_red').css({'top':'100%','opacity':'0'});
            $('#sun_yellow').css({'top':'50%','opacity':'1'});
              //animation
            $('#sun_yellow').animate({'top':'5%','opacity':'1'},5000);
            $('#clouds').animate({'backgroundPosition':'200px','opacity':1}, 40000);            
            $('#buildings').animate({'opacity':'1'},5000);
            $('#night').animate({'opacity':0},5000);
            $('#trees').animate({'opacity':1},5000);
            $('#ground').animate({'opacity':1},5000);
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
            $('#sun_red').css({'top':'5%','opacity':'0'});
            $('#sun_yellow').css({'top':'5%','opacity':'1'});
              //animation
            $('#sun_yellow').animate({'top':'65%','opacity':'0.3'},13000);            
            $('#sun_red').animate({'top':'65%','opacity':'0.7'},13000);
            $('#clouds').animate({'backgroundPosition':'200px','opacity':0.4}, 40000);            
            $('#buildings').animate({'opacity':'0.5'},13000);
            $('#night').animate({'opacity':0.4},13000);
            $('#trees').animate({'opacity':0.5},13000);
            $('#ground').animate({'opacity':0.5},13000);
          })
        }
}