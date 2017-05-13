//keep track of current question
var currentquestion = 0;
var answers = [];

var intromessages = [
"Hi!",
"I'll be collecting some medical information that will be helpful for health care responders in the case of medical emergencies.",
"Let's get started.",
];

//list of questions
var questions = [
'What is your name?',
'How old are you?',
'Thanks, have you ever been diagnosed with any medical conditions?',
'Have you ever been diagnosed with high blood pressure?',
'What about high cholesterol?',
'What about diabetes?',
'Have you had any surgeries in the past?',
'Any surgeries in the abdominal area?',
'Are you taking any medications?',
'How often are you taking those medications?',
'What is the dose of the medications are you taking?',
'Are you allergic to any medications?',
'Are you allergic to anything?',
'What happens if you are exposed to it?',
'Does anybody in your immediate family (mom, dad, brothers or sisters) have any medical conditions?',
'Any family history of strokes?',
'Any family history of heart attacks?',
'Any family history of any cancers?',
'Has anybody in your family been diagnosed with high blood pressure, high cholesterol or diabetes?',
'Do you drink alcohol?',
'How often do you drink?',
'How much do you drink each time?',
'Do you smoke tobacco?',
'How many years have you smoked?',
'How many packs a day do you smoke?',
'Did you ever smoke in the past?',
'Do you use any recreational drugs?',
'Do you smoke marijuana?',
'Thanks! I will process the information you provided now.',
'Take a look! Is this correct?'
];
// var questions = $.get('medchat.txt', function(data){
//   return data.split('\n');
// });


//Autoscroll to bottom of convo
function scrollDown() {
  var focusBottom = document.getElementById("convo");
  focusBottom.scrollTop = focusBottom.scrollHeight;
}

function currentdate(){
    var d = new Date();
    var clock = d.getHours() + ":" + d.getMinutes();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var currentDate =
      (('' + day).length < 2 ? '0' : '') + day + '/' +
      (('' + month).length < 2 ? '0' : '') + month + '/' +
      d.getFullYear() + '&nbsp;&nbsp;' + clock;
    return currentDate
}

function addusermessage(message, currentDate){
    $('form.chat div.messages').append('<div class="message"><div class="myMessage"><p>' + message + '</p><date>' + currentDate + '</date></div></div>');
    // getquestion(questions, currentquestion);
}

function addbotmessage(message, currentDate){
    $('form.chat div.messages').append('<div class="message"><div class="fromThem"><p>' + message + '</p><date>' + currentDate + '</date></div></div>');  
}

//Display intro messages
function displayintro(intro){
  for (var i in intro){
    // alert(intro[i]);
    // setTimeout(addbotmessage(intro[i],currentdate()), 2000);
    addbotmessage(intro[i],currentdate());
  }
  // alert("done");
}

//Display the next question
function getquestion(questionlist, currentquest){
  addbotmessage(questionlist[currentquest], currentdate());
}


//ON LOAD

displayintro(intromessages);
getquestion(questions, currentquestion);

//Handle Keystrokes
$("input").keypress(function(event) {
  if (event.which == 13) {
    event.preventDefault();
    $('form.chat input[type="submit"]').click();
  }
});


//Submit
$('form.chat input[type="submit"]').click(function(event) {
  event.preventDefault();
  var message = $('form.chat input[type="text"]').val();
  if ($('form.chat input[type="text"]').val()) {

    addusermessage(message, currentdate());
    answers.push(message);
    console.log(answers);
    currentquestion++;
    getquestion(questions, currentquestion);
    //Load bar
    // setTimeout(function() {
    //   $('form.chat > span').addClass('spinner');
    // }, 100);
    // setTimeout(function() {
    //   $('form.chat > span').removeClass('spinner');
    // }, 2000);
  }

  $('form.chat input[type="text"]').val('');
  scrollDown();
});