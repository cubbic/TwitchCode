$(document).ready(function(){
  var profiles = [  'riotgames' , 'esl_csgo' , 'summit1g', 'Nightblue3' , 'LIRIK' , 'PhantomL0rd' , 'captainsparklez','sodapoppin', 'imaqtpie','freecodecamp'];
  function insertBlock(profile){
    $.getJSON('https://api.twitch.tv/kraken/channels/'+profile+'?callback=?',function (data) {
      console.log(data);
      var url = data.url;
      var logo = data.logo;
      var name = data.display_name;
      var info = data.status;
      var status = '';
      $.getJSON('https://api.twitch.tv/kraken/streams/' +profile, function(channel) {

                      if (channel["stream"] == null) {
                          console.log('off');
                          status = 'offline';
                      } else {
                          console.log('on');
                          status = 'online';
                      }
                      var blockToInclude =
                      `<div class="container block img-rounded">
                        <div class="row">
                          <div class="col-sm-2">
                            <a href="${url}">
                              <img src="${logo}"
                                alt="logo" class="img img-responsive img-rounded logo center-block" />
                            </a>
                          </div>
                          <div class="col-sm-7">
                            <a  href="${url}"><h4 class="text-center "><strong><u>${name}</u></strong></h4></a>
                            <h5 class="text-center"><strong>${info}</strong></h5>
                          </div>
                          <div class="col-sm-3 ${status}">
                            <h3 class = "text-center offline-text">${status}</h3>
                          </div>
                        </div>
                      </div>`;
                      $('.main').append(blockToInclude);
                    });



    });
  }
  for (var i = 0 ; i < profiles.length;i++){
    insertBlock(profiles[i]);
  }


});
