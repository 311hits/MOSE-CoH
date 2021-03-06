'use strict';

(function() {
    var app = {
        data: {}
    };

    var bootstrap = function() {
        $(function() {
            app.mobileApp = new kendo.mobile.Application(document.body, {
                transition: 'none',
                skin: 'nova',
                initial: 'components/home/view.html'
            });
        });
    };

    if (window.cordova) {
        document.addEventListener('deviceready', function() {
            if (navigator && navigator.splashscreen) {
                navigator.splashscreen.hide();
            }
            bootstrap();
        }, false);
    } else {
        bootstrap();
    }

    app.keepActiveState = function _keepActiveState(item) {
        var currentItem = item;
        $('#navigation-container li.active').removeClass('active');
        currentItem.addClass('active');
    };

    window.app = app;

    app.isOnline = function() {
        if (!navigator || !navigator.connection) {
            return true;
        } else {
            return navigator.connection.type !== 'none';
        }
    };

    app.openLink = function(url) {
        if (url.substring(0, 4) === 'geo:' && device.platform === 'iOS') {
            url = 'http://maps.apple.com/?ll=' + url.substring(4, url.length);
        }

        window.open(url, '_system');
        if (window.event) {
            window.event.preventDefault && window.event.preventDefault();
            window.event.returnValue = false;
        }
    };

}());

// START_CUSTOM_CODE_kendoUiMobileApp
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// Handle the button
function onButtonDown() {
    // Exit the app!
    alert("Exiting App");
   if (navigator.app && navigator.app.exitApp) {
    navigator.app.exitApp();
} else if (navigator.device && navigator.device.exitApp) {
    navigator.device.exitApp();
}
}



function exitFromApp() {
    navigator.notification.confirm(
        'Close the app?',
        closeApp,
        'Super Bowl 2017',
        'Yes, No'
        );
}
     
function closeApp(buttonIndex) {
    if (buttonIndex == 1) {
        navigator.app.exitApp()
    }
    else {
   //     alert('Glad you are staying! ');
    }
}




 function openNav() {
           document.getElementById("mySidenav").style.width = "270px";
            }

 function closeNav() {
           document.getElementById("mySidenav").style.width = "0";
            }

function openNav2() {
           document.getElementById("mySidenav2").style.width = "250px";
            }
function closeNav2() {
           document.getElementById("mySidenav2").style.width = "0";
            }


// END_CUSTOM_CODE_kendoUiMobileApp