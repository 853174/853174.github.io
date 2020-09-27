$(document).ready(function(){
  const urlParams = new URLSearchParams(window.location.search);
  langCode = urlParams.get('lang')
  loadResources(langCode);
})

function stepOfLoading(step,steps){
  var percentage = (step * 100) / steps;
  console.log(percentage);
  $('#loading-bar').css('width',percentage + "%");
}

function finishLoading(){
  $('#cv').removeClass('d-none');
  $('#loading').slideUp();
}
