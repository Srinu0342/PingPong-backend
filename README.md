## BACKEND INSTRUCTIONS:

1. The app only has server memory for storage. For production ready app needs to connect document based database connected.
2. At this stage restarting the server will cause loosing all the stored match data.
3. To have the app used for a high traffic the app needs restructuring as per features(both frontend and backend). 
   To consider the high traffic the app has to be scaled horizentally. For this we need more servers running and distributed
 by loadbalancers. The database should also be replicated to consider failures. If more features like authentication,
dashboard for game history for each player or more feature is added we can consider API based microservices architecture for 
the app.
