
Production Build:
Locally: expo build:web
Then commit and push
Pull on server
 sudo service apache2 restart

REF
https://codesandbox.io/s/react-swipe-cards-xzhuq?file=/package.json

https://www.geeksforgeeks.org/how-to-create-tinder-card-swipe-gesture-using-react-and-framer-motion/

Youttube
https://www.youtube.com/watch?v=ArBWr0RLsSc


// ref - https://react.dev/learn/updating-arrays-in-state

START:
https://react.dev/learn/start-a-new-react-project

https://swiperjs.com/react

https://www.geeksforgeeks.org/get-current-geolocation-of-user-using-react-geolocated/
https://www.abstractapi.com/guides/how-to-use-ip-geolocation-in-react

colors picked from 
https://flatuicolors.com/palette/au


//Reverse Geolocation

https://platform.here.com/
https://stackoverflow.com/questions/61796917/how-to-do-reverse-geocoding-in-react-native

const HERE_API_KEY = "jTyIvP7FORzSbxrTjR11jNdScr8fDS8HXLOkObeqRvo"
const HERE_APP_ID = "TiGEKf1vgpGbsGfZ3sIQ"


https://geocoder.ls.hereapi.com/6.2/geocode.xml?apiKey=jTyIvP7FORzSbxrTjR11jNdScr8fDS8HXLOkObeqRvo&searchtext=425+W+Randolph+Chicago



https://revgeocode.search.hereapi.com/v1/revgeocode?apikey=jTyIvP7FORzSbxrTjR11jNdScr8fDS8HXLOkObeqRvo&at=40.730610,-73.935242&lang=en-US

    https://revgeocode.search.hereapi.com/v1/revgeocode?apikey=jTyIvP7FORzSbxrTjR11jNdScr8fDS8HXLOkObeqRvo&at=12.9564672,77.6208384&lang=en-US



sudo ln -sT ~/freeflyer/web-build /var/www/FreeFlyersApp

apachectl configtest

sudo service apache2 restart

IP ; 13.126.62.86


sudo a2enconf FreeFlyersApp.conf
sudo a2disconf FreeFlyersApp.conf

FreeFlyersApp.conf

Listen 8080
<VirtualHost *:8080>
	DocumentRoot /var/www/FreeFlyersApp
  <Directory /var/www/FreeFlyersApp>

	Options Indexes FollowSymLinks
	AllowOverride All
	Require all granted

  </Directory>

</VirtualHost>
