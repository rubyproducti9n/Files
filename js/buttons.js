var div = document.getElementById('banner');
div.innerHTML += '<a class="visually-hidden" href="https://www.youtube.com/watch?v=2jg1bJQaYjg"> <img src="../nain-banner.jpg" width="100%"> </a>';

var div = document.getElementById('navbar-content');
div.innerHTML += '<nav class="navbar navbar-dark fixed-top navbar-custom "><a id="navbar" class="navbar-brand" href="../Android App/RUBY PRODUCTION.html">RUBY PRODUCTION </a><div class="collapse navbar-collapse" id="navbarSupportedContent22"><ul class="navbar-nav mr-auto"><li class="nav-item"> <a class="nav-link" data-toggle="pill" href="../Android App/RUBY PRODUCTION.html"><i class="fa fa-home" aria-hidden="true"></i> Home <span class="sr-only">(current)</span></a></li><li class="nav-item"><a data-toggle="pill" class="nav-link disabled" href="#menu2"><i class="fa fa-search" aria-hidden="true"></i> Search</a></li><li class="nav-item"><a class="nav-link" data-toggle="modal" data-target="#modalContactForm" href=""><i class="fa fa-user" aria-hidden="true"></i> Contact Us</a></li></ul></div></nav>';



// var div = document.getElementById('player-old');
// div.innerHTML += ' <div id="video-controls"><input type="range" id="seek-bar" class="seek-play" step="0.001" value="0"><br><button type="button" class="play play-tooltip pause-tooltip" id="play-pause" data-placement="top" title="Play"><span class="play-tooltiptext">Play (space)</span><i class="fa fa-play"></i></button><a class="next next-tooltip" data-placement="top" href="Doob Gaye Status Video.html"><span class="next-tooltiptext">Next</span> <i class="fa fa-step-forward"></i></a><button type="button" data-placement="top" title="Mute" class="mute mute-tooltip unmute-tooltip" id="mute" accesskey="m"><span class="mute-tooltiptext">Mute (m)</span><i class="fa fa-volume-up"></i></button><input type="range" class="seek-volume" id="volume-bar" min="0" max="1" step="0.001" value="1"> <a title="Download" class="download download-tooltip" data-toggle="modal"data-target="#Menu" href="javascript:void(0)"><span class="download-tooltiptext">Download</span><i class="fa fa-download"></i></a><button type="button" data-placement="top" title="Fullscreen" class="fullscreen disabled" id="full-screen" accesskey="f"><i class="fa fa-expand"></i></button><br><br><br></div>';


// var div = document.getElementById('player');
// div.innerHTML += '<div class="player-controls"><div class="video-progress"><div class="video-progress-filled"></div></div><button class="play-button play-tooltip" title="Play"><span class="play-tooltiptext">Play (space)</span>  ►</button><a class="button2 next-tooltip" title="Next"><span class="next-tooltiptext">Next</span> <i class="fas fa-forward" style="color: white;"></i> </a><a class="button3 mute-tooltip" title="Mute"><span class="mute-tooltiptext">Mute (m)</span> <i class="fas fa-volume-up" style="color: white;"></i> </a><input type="range" class="volume" min="0" max="1" step="0.01" value="1" /><div class="time"><span class="current">0:00</span>\
// <!-- <span class="duration">0:00</span> --></div><a class="button5 download-tooltip" title="Download" data-toggle="modal" data-target="#Menu" href="javascript:void(0)"><span class="download-tooltiptext">Download</span> <i class="fas fa-download" style="color: white;"></i> </a><a class="button4 disabled" title="Fullscreen"> <i class="fas fa-expand" style="color: white;"></i> </a></div>';

var div = document.getElementById('contact');
div.innerHTML += ' <div class="modal fade" id="modalContactForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"aria-hidden="true"><div class="modal-dialog cascading-modal" role="document"><div class="modal-content"><div class="modal-header primary-color white-text"><h4 class="title text-white"><i class="fa fa-pencil-alt"></i> Contact form</h4><button type="button" class="close waves-effect waves-light" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button></div><div class="modal-body"><div class="md-form form-sm"><i class="fa fa-envelope prefix"></i><input type="text" id="materialFormNameModalEx1" class="form-control form-control-sm"><label for="materialFormNameModalEx1">Your name</label></div><div class="md-form form-sm"><i class="fa fa-lock prefix"></i><input type="password" id="materialFormEmailModalEx1" class="form-control form-control-sm"><label for="materialFormEmailModalEx1">Your email</label></div><div class="md-form form-sm"><i class="fa fa-tag prefix"></i> <input type="text" id="materialFormSubjectModalEx1" class="form-control form-control-sm"><label for="materialFormSubjectModalEx1">Subject</label></div><div class="md-form form-sm"><i class="fa fa-pencil-alt prefix"></i><textarea type="text" id="materialFormMessageModalEx1" class="md-textarea form-control"></textarea><label for="materialFormMessageModalEx1">Your message</label></div><div class="text-center mt-4 mb-2"><button class="btn btn-primary text-white">Send <i class="fa fa-send"></i></button><a class="btn btn-primary text-white" href="https://forms.gle/gN5qZeg3VN1tyrsA6">Add More details <i class="fa fa-send"></i></a></div></div></div></div></div>';

//<a type="button" id="switch" class="btn btn-dark btn-floating text-white float-end " title="Switch between ratios" onClick="aspectRatio()"><i class="fas fa-exchange-alt" aria-hidden="true"></i></a>
//<a type="button" class="btn btn-dark btn-floating text-white float-end " data-toggle="modal" title="Settings"  data-target="#Settings"><i class="fas fa-cog" aria-hidden="true"></i></a>
var div = document.getElementById('content');
div.innerHTML += '\
<div class="badges"> <button class="btn btn-primary btn-floating float-end text-white disabled" type="button" id="dropdownMenuButton"data-mdb-toggle="dropdown"><i class="fa fa-ellipsis-v"></i></button><ul class="dropdown-menu " aria-labelledby="dropdownMenuButton"><li><a class="dropdown-item" href="https://www.youtube.com/channel/UC98V-NGgUc9Px9Xe5klei4w">View Channel</a></li><li><a class="dropdown-item" onClick="termsConditions()">Terms & Conditions</a></li><li><a class="dropdown-item" onClick="myFeedback()">Feedback</a></li><li><a class="dropdown-item" onClick="myRate()">Rate Us</a></li><li><a class="dropdown-item" onClick="myReport()">Report</a></li></ul><a type="button" class="btn btn-primary btn-floating text-white float-end disabled" onClick="download()" title="Download"  autocomplete="off"><i class="fas fa-download"></i></a><a type="button" class="btn btn-primary btn-floating text-white float-end disabled" data-toggle="modal" title="Menu"  data-target="#Menu"><i class="fas fa-share-alt" aria-hidden="true"></i></a><a type="button" class="btn btn-primary btn-floating text-white float-end disabled visually-hidden" onClick="myShare()" title="Share" data-mdb-toggle="button" autocomplete="off"><i class="fas fa-share-alt"></i></a><a type="button" class="btn btn-primary btn-floating text-white float-end disabled" title="Unlike" data-mdb-toggle="button" autocomplete="off"><i class="fas fa-thumbs-down"></i></a><a type="button" class="btn btn-primary button_one btn-floating text-white float-end disabled"  data-toggle="button" aria-pressed="false" title="Like" autocomplete="off"><i class="fas fa-thumbs-up"></i></a><br><br><hr></div>';

var div = document.getElementById('footer');
div.innerHTML += '<!--<div class="footer dark"><center>© 2021 Copyrights: <a class="rp" href="RUBY PRODUCTION.html"> www.rubyproducti9n.com</a></center></div>-->  ';

var div = document.getElementById('show-btn');
div.innerHTML += '<button type="button" class="btn btn-outline-primary btn-sm btn-rounded" data-toggle="collapse" data-target="#demo">Show more </button>  ';
var div = document.getElementById('modal');
div.innerHTML += '';

var div = document.getElementById('comment');
div.innerHTML += ' <h5 class="">0 Comments</h5><div class="md-form form-sm"><input type="text" id="inputSMEx" class="form-control form-control-sm disabled"><label for="inputSMEx"><i class="fa fa-user-circle" aria-hidden="true"></i> Comment</label></div>';

var div = document.getElementById('maintenance');
div.innerHTML += '<img src="maintenance.gif" width="50%">';









