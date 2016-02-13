# jQuery BroadSign Player API
A simple jQuery plugin to use BroadSign's Player APIs for HTML and javascript digital signage projects. This plugin initializes a web socket connection on localhost port 2324 and generates the XML markup to post to the BroadSign server.

By default, the plugin triggeres the "Stop" action and will show recieved messages on the console. It provides support for action, frame_id, enabled, name, and id values.

More information about the Player APIs can be found here: http://broadsign.com/docs/11-0-0/developers-intelligent-content/player-apis/

## Example Implementations

Reference the BroadSignAction.js file before your closing `</body>` tag. With no configuring required it will cause the "Close" action to fire. 

```javascript
$.fn.BroadSignAction();
```

If you want to send an XML message after a set amount of time use the example below. It is set to execute after 5 seconds.

```javascript
setTimeout(function(){
    $.fn.BroadSignAction();
}, 5 * 1000 );
```

### Custom Parameters

To make a more sophisticated call include the parameters and values in an array. Below is an example condition API call.

```javascript
setTimeout(function(){
    $.fn.BroadSignAction({
            "action"     : "condition",
            "frame_id"   : null,
            "enabled"    : 1,
            "name"       : cloudy,
            "id"       : callID
        });
}, 5 * 1000 );
```

## Default Settings:

```
action     : "stop", text, null
frame_id   : null, int
enabled    : null, boolean
name       : null, text
id         : generated time stamp or int
```

To not include an action tag in the XML call declare action to be `null`.


This plugin is designed to work with BroadSign v11.