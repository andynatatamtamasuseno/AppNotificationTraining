import PushNotification from "react-native-push-notification"

class Notification{
    configure=()=>{
        PushNotification.configure({
            onRegister: function(token){
                console.log("Token",token);
            },

            onNotification: function(notification){
                console.log("Notification: ", notification);
            },

            onAction: function(notification){
                console.log("Action:", notification);
                console.log("Notification", notification);
            },
            popInitialNotification: true,
            requestPermisions:true
        })
    }
}

export const notif = new Notification;