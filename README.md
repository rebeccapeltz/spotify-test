Test in spotify
https://beta.developer.spotify.com/console/get-search-item/

Set up spotify app:
https://developer.spotify.com/my-applications/

need to add any redirects to the spotify app
``` JavaScript
if (location.host == "localhost:8080") {
    client_id = "xxxxxxxxxxxxxxxxxx";
    redirect_uri = "http://localhost:8080/authorize";
  } 
  else {
    client_id = "xxxxxxxxxxxxxxxxxxx";
    redirect_uri = "http://beckypeltz.online/spotify-weather-app/#/authorize";
  }
  ```