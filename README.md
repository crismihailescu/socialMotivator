# socialMotivator

Our project is a social-good motivation platform. It entails:
- Having companies volunteer social initiatives as prizes
- People competing by doing good deeds to unlock those social initiatives
- Having leaderboards and teams, and a mix of small and big acts of service

Project task requirements:

	3-5 minimal requirements (will definitely complete)
		[DONE] Home Page with guidelines and navigation to other pages
		[DONE] Sign Up Page
		[DONE] User Pages/Restrictions for companies/users:
					[DONE] Companies can post activities
					[DONE] Users can see and choose activities + post proof of completeness + see points [INCOMPLETE]
			
	3-7 "standard" requirements (will most likely complete)
		[DONE] Validation on sign up page
		[DONE] Keep track of number of people doing an activity
		[DONE] Sorting activities
		[DONE] Leaderboard
		[DONE] Create groups/club system for the users (Group event sign-up is incomplete)
		[DONE] Carousel with recommended activities
		
	2-3 stretch requirements (plan to complete at least 1!)
		[DONE] Searching certain types of activities and viewing a shortened list based on the search
		[NOT STARTED] Reward - notify issues that they have received the reward
		[DONE] Calendar Event to help users

Unit Descriptions:
1. We used CSS in conjunction with Material UI to style and display components on our site, this allowed us to have a consistent interface with modern-looking UI elements such as the grid list. We used HTML as part of JSX to structure the components within our site and create new elements like the carousel.
2. We used React as the basis for the entire site, which provided us with a very well documented platform that we could build off of. In addition, we learned to use Redux and Redux Saga to call the backend and maintain states, which we found better than React Hooks because it is easier to maintain a global state which every component has access to.
3. Express (and React.js) provided an easy way to connect our frontend with the database (MongoDB); in particular, we were amazed at how easy it was to deploy the site because Express can run on UI builds. More importantly, we learned to use PUT, POST, UPDATE, and GET calls effectively and efficiently.
4. We used MongoDB to store all our data, from users to activities, and found that this noSQL database was much better than SQL since it allowed us to add/remove fields as our project evolved. As students who have taken CPSC 304, we were only familiar with SQL databases, and were surprised at how flexible MongoDB was; it really taught us how important it was to plan the JSON object structure so that everyone adheres to it in the group. 
5. Deployment was essential for us being able to showcase our hard work over the past few months, so that everyone can access it. While it was a challenge to figure out at first, it was important for us to learn about the correct API call format, something that will come in very handy going forward! 

Cool Functionality: 
While the majority of our project was focused around building a strong foundation for this application, there are a few key areas in which we aimed to get out of our comfort zone. First is our use of Redux and Redux Saga, something that we were not familiar with going into this project. We found, however, that this made our project much easier to manage as the requirements got more complicated. Second is our recommendations system, which shows users events they might like based on past events they've attended. This algorithm takes past events from the user and searches for the most repeated terms (locations, keywords, etc.), then returns events that match these terms. Finally, we have the leaderboard, which keeps track of which users are most active in the community, and shows the top 5 most active. This feature uses Redux to grab every user in the database, then makes an array of each username with the number of activities they've completed, and builds a sorted table to display with each user in the list. 

Next Steps:
There are a few features that could not be fully completed in time, such as signing up as a group, and being able to add rewards to each activity as a random prize; these would likely be completed first for any future work. Then there are usability enhancemenets for the visual aesthetic of the site, as well as the efficiency and security (like a JWT token) which would need to be improved. Specific components include an image uploader (to save images to the database as a datastream), a messaging/social interaction page for users to engage with each other, and social media integrations for users to share all the good they've been doing! 

Contributions: 
Truman: Dealt with most of the user info like sign-in and sign-up, and set up Redux/Redux Saga. Also set up Google Dev Tools and the snackbar, as well as validation and our security features. 
Silas: Built the leaderboard and integrated the calendar functionality. Was essential in building out the UI of the site with the NavBar and Activity modal. Worked on the backend along with Truman and Annie to ensure everything was up to snuff. 
Annie: Main work included the user and company dashboards along with all the settings and views that are encompassed with the dashboards. Also worked on the activity filtering by type for the homepage and the add new activity functionality. 
Cris: Worked on the Mapbox/Google Map API, recommendation algorithm, and the carousel implementation. Designed a lot of the UX/UI for the site and contributed to the search bar along with Silas.


		Who is it for?
			Companies/Charities/Governments that want to promote social good, and people who care about making a social impact in their community (and winning prizes)
		What will it do? (What "human activity" will it support?)
			Help people serve their community/charities without solely donating, but by taking action
		What type of data will it store?
			Activities posted by companies, charities, or local government. User Information. 
		What will users be able to do with this data?
			Companies can see how many many people are participating and use it for publicity and users will be able to do activities to earn some cash/incentives.
		What is some additional functionality you can add/remove based on time constraints?
			Points/leaderboards
			Location from around the world
			Integrations with charities like the Great Canadian Shoreline Cleanup, etc.

Minimal requirement breakdown:

	Sign Up Page:
		CSS for page
		Actually rendering the textfields for signup(username/password)
		Navigation away and to the page
		
	Posting Activities:
		Navigation to and away
		CSS for page
		Render signup sheet to post the activity
		Render table to view posted activities

Please see the sketches at roughSketches.png

Referenced Works:
For carousel component: https://dev.to/rakumairu/simple-react-carousel-24m0