All-Inclusive Repo for new & interesting projects

- Dashboards for instaG/facebook/twitter
- CRUD style using MEAN 
- Implementation of various API's
- Solidify concepts + my own styling
- Practicing of 'best practice' techniques 

## User Report
- Features = Login (bcrypt), POST/GET user reports, show 12 reports, filter by member, must log in to post
- - Angular  --  $http, $alert, ui-router
- - Node  --  mongoose, API routing, passport
- `Views`
- *Index* : list of reports + search/filter, Login
- *Form* : add new reports
- *Admin* : area to manage reports and message users
- I want?  -- DB seperated, API clearly defined
- `Models`  =  Users [admin,agents], Notes
**App Setup**
- express, bowerrc, switch to html/public, remove jade for ejs, add nodemon, test view, config/db
- express-session, passport/local, bcryptjs
- angular, bootstrap, ui-bootstrap, ui-router
- setup angular + test index, test server controllers
- Register and Login front and back   -  me1@me.com, 11
$alert  -  use the 'container' to trigger in div ID but does work when used with $state.go('new');
- `Bugs`: allows user login w/ wrong password
- - Used 'success' instead of 'then' to display all notes on home.html

## InstaDash
- localhost:8888   (using [Rdash dashboard](https://github.com/rdash/rdash-angular))
- Difficult to develop  -  need to seperate using gulp dev or do testing on python server
- LPage -- log in to display your likes/popular, Organize photos, Integrate with Pinterest
- - Need to Refactor to include server and remove gulp

## Countries
- Refactor countries project to use ui-grid, ui-router, animations, fontawesome, loading gif
- Added weather API to show info on country.html

## AuthStarter
- Extracted authorization from angular FullStack generator      (me@me.com, 444)
- - uses /home as main entry point
- - redirects after login to '/'
- - /components includes Auth, Navbar, Mongoose errors 

## BestDressed
- joe, me@me.com, 444   -  'home' (splash) -> main 
- - After Login - edit app.js (client), routes.js, login.Ctrl, home.Ctrl to adjust redirect
- *TO DO*
- new CSS 'Upload' text (color/margin/font)
- edit/delete  =  show icons if Look belongs to user 
- filter/search options
- display Date, Avatar, [comments, tags], Views
- infinite scroll
- pop up modal on Trash icon
- fix Success alert + close modal after Scrape Upload  (works on regular)
- home link, remove invite (comment out)
- make Upvote work (only if logged in ELSE 'please login') + once per user
- set up gravatar + replace 'Hello X'
- - add AWS for image uploads/scrapes
- *PAGES*
- Main   =  All Looks (ui-grid), Add Look button (modal), Filter options
- My Looks   =  all my looks + add look button
- *FEATURES*
- add Tags, Gravatars, show Errors (uploading)
- users can tag/follow/share/review/categorize

- reset Modal if cancel/closes
- using ionicons, show Errors on bad uploads

*NOTES*
fixing [invalid JSON](https://www.reddit.com/r/node/comments/2zsukj/help_understanding_bodyparser_and_why_express/) 
- if using $resource, use .query instead of .then   (example in looksAPI)

- *Current Features*  
- - authentication, scraping (pinterest), saves + updates view
- upload images, show All Looks & User Looks
- angular UI grid, page for Look details


## 'New Project'
- Zyring, GMaps (Scotch), Restaurant API (Lynda), TaskRab, MeanTweets
- - Use TaskRabbit bootstrap style layout






https://www.pinterest.com/pin/548805904571318984/
https://www.pinterest.com/pin/182747697350316470/
https://www.pinterest.com/pin/182747697350138271/
https://www.pinterest.com/pin/182747697350241810/