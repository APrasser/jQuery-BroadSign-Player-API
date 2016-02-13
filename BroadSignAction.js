// jQuery BroadSign Player API
// Plugin by Frank JE Flitton
// https://github.com/FrankFlitton/jQuery-BroadSign-Player-API


// Initiate connection to broadsign server
var BroadSignSocket = new WebSocket("ws://localhost:2324");

// Listen and print to console
BroadSignSocket.onmessage = function (event) {
    console.log(event.data);
}

(function($) {
  
  $.fn.BroadSignAction = function( options ) {
    
    // Unix time stamp for unique calls as default
        var callID = new Date().getTime(); 
    
    // Establish our default settings
        var settings = {
            "action"     : "stop",
            "frame_id"   : null,
            "enabled"    : null,
            "name"       : null,
            "id"       : callID
        };
    
    // User Overides
        var userSettings = $.extend(settings, options);
    
    // Validation
    
    var callId = "id=\"" + userSettings.id + "\" ";
    
    var callAction = "id=\"" + userSettings.action + "\" ";
    if (null == userSettings.action) {
      var callFrame_id = "";
    }
    
    var callFrame_id = "";
    if (null != userSettings.frame_id) {
      var callFrame_id = "frame_id=\"" + userSettings.frame_id + "\" ";
    }
      
    var callEnabled = "";
    if (null != userSettings.enabled) {
      var callEnabled = "enabled=\"" + userSettings.enabled + "\" ";
    }

    var callName = "";
    if (null != userSettings.name) {
      var callName = "name=\"" + userSettings.name + "\" ";
    }

    // Package to send to BroadSign
    var callXML = "<rc version=\"1\" " + callId + callAction + callFrame_id + callEnabled + callName + "/>\r\n\r\n"; 
    // Frameid is ommitted. Not needed as content is fullscreen.
    console.log("To send: " + callXML);
    BroadSignSocket.send(callXML);
    console.log("Sent");

    return this;
  };


}(jQuery));