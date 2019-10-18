import {
  Component
} from '@angular/core';
import BackgroundGeolocation from 'cordova-background-geolocation-lt';
import {
  Platform
} from '@ionic/angular';
import {
  SplashScreen
} from '@ionic-native/splash-screen/ngx';
import {
  StatusBar
} from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    const bgGeo = BackgroundGeolocation;

    this.platform.resume.subscribe(() => {
      console.log('Resumed app');
    });

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      bgGeo.ready({
        reset: true,
        debug: true,
        logLevel: bgGeo.LOG_LEVEL_VERBOSE,
        desiredAccuracy: bgGeo.DESIRED_ACCURACY_HIGH,
        distanceFilter: 10,
        url: 'http://my.server.com/locations',
        autoSync: true,
        stopOnTerminate: false,
        startOnBoot: true
      }, function () {
        console.log('Plugin configured.. running start function now.');
        bgGeo.start();
      });
    });
  }
}