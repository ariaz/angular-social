# Usage

``` sh
npm install
gulp serve
```
GO TO:
 `http://localhost:5000`

# Description

This app uses Angular.js, Node, Express, Gulp, Browserify

Express as the server, 
Gulp to manage compilation, serving,
Browserify for modularity convenience

Random Social Network data is generated at server startup. The backend has a singleton, SocialGraph, that manages the backend social network data. 
Uses angular-route to link to particular user,
for example: `http://localhost:5000/#/users/0' will direct you to userId:0 profile
Here ProfileCtrl kicks in and creates a Profile (angular service) instance.
It allows to post comments by using same service.

File Descriptions:
  /
    - DataGenerator.js: randomly generates initial social network data
    - SocialGraph.js: Backend API managing network data
    - GulpFile.js: manages project build, server start
    - server.js: Express server, runs server and manages get/posts to SocialGraph
    - /app/
        - scripts/
            - controllers/
                - ProfileCtrl: angular controller to manage user profile page. It uses Profile service
            - services/
                - Profile: In charge of connecting with backend, sending get/post ajax requests. Used by ProfileCtrl
            - directives/
                - FriendList: list of users friends
                - NewsFeed: lists news feed
                - PostComment: posts a comment by this user


