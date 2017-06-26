function getUsers()
{
	sendRequest();
	var userid =  "1";
  var dataString = 'userid=' + userid; 
$.ajax({
url: "getMessages.php", // Url to which the request is send
type: "POST",            // Type of request to be send, called as method
data: dataString, // Data sent to server, a set of key/value pairs (i.e. form fields and values)
contentType: false,       // The content type used when sending data to the server.
cache: false,             // To unable request pages to be cached
processData:false,        // To send DOMDocument or non processed data file it is set to false
success: function(data)   // A function to be called if request succeeds
{
//alert(data);
$("#messageinfo").html(data);
}
});
};


function getOut()
{ 
  var textpartner = document.getElementById("textbuddy").value;
//var userid =  "1";
  var dataString = 'textpartner=' + textpartner; 
$.ajax({
url: "selectUsersForMessages.php", // Url to which the request is send
type: "POST",            // Type of request to be send, called as method
data: dataString, // Data sent to server, a set of key/value pairs (i.e. form fields and values)
contentType: false,       // The content type used when sending data to the server.
cache: false,             // To unable request pages to be cached
processData:false,        // To send DOMDocument or non processed data file it is set to false
success: function(data)   // A function to be called if request succeeds
{
$("#message").html(data);
}
});
};

function send() {
//alert("hi");
var ProjectName = "hi";
var messagetext = document.getElementById("messagetxt").value;

//alert("data recieved");

// Returns successful data submission message when the entered information is stored in database.
var dataString = 'ProjectName=' + ProjectName + '&messagetext=' + messagetext;

if (ProjectName == '' || messagetext == '' ) {
alert("Please Fill All Fields");
} else {
// AJAX code to submit form.
$.ajax({
type: "POST",
url: "sendMessage.php",
data: dataString,
cache: false,
success: function(html) {
if(html == "Message Successfully Sent")
{
 // location.reload();
}
else alert("error");
}
});
}
return false;
};

function sendMessage()
{ 
  var textMessage = document.getElementById("messagetxt").value;
//var userid =  "1";
  var dataString = 'messagetxt=' + textMessage; 
  alert(dataString);
$.ajax({
url: "sendMessage.php", // Url to which the request is send
type: "POST",            // Type of request to be send, called as method
data: dataString, // Data sent to server, a set of key/value pairs (i.e. form fields and values)
contentType: false,       // The content type used when sending data to the server.
cache: false,             // To unable request pages to be cached
processData:false,        // To send DOMDocument or non processed data file it is set to false
success: function(data)   // A function to be called if request succeeds
{
//if(data == "Message Successfully Sent")
//{
  //location.reload();
//}
alert(data);
//else alert("error");

}
});
};

function sendRequest(){
    $.ajax({
        url: "getMessages.php",
        success: 
          function(result){
           $('#messageinfo').html(result); //insert text of test.php into your div
           setTimeout(function(){
          sendRequest(); //this will send request again and again;
           }, 1000);
        }});
};

function gotobottom() {
	alert("hi");
	window.scrollTo(0, document.body.scrollHeight);
}

window.onload = getUsers();
