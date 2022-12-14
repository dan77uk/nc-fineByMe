Fine By Me
Minimum Viable Product

As a user, I will need a form to submit information/complaint
Form will require an endpoint for posting information:
POST /api/complaint
Will respond with an object containing posted complaint and complaint ID
User will need a form:
Form will require some sort of validation
Form will need a body (textarea) for complaint information
Form can accept video/photo upload (somehow)
Form can be anonymous, but should be secure from spam posting

As a user, I will receive feedback on my complaint.
API will forward complaint to local council.
User will receive confirmation from the local council.

As a user, I should be able to vote/agree on issues.
GET /api/complaints
As a user I should be able to view/sort by live/resolved complaints 
As a user, I can order complaints by date, area and votes.
As a user, I can sort complaints by type of complaints eg traffic, parking etc
As a user, I can filter complaints by whether or not they have a picture/video attached.
PATCH /api/:complaint_id
As a user, I can upvote complaints.






EXTRA

As a user I should be able to add comments to complaints
POST /api/:complaint_id/comments 
As a user, I will have the option to create an account, with email, username, local council.
User will be notified if username already exists, along with confirmation of created user after completion.
POST /api/user


Tech-stack:

React FE, express REST API BE, postgres DB
















PROJECT IDEAS:



postYourPets

MVP
As a user I can create an account, where I can post images and videos of my pets
as a user I can view other user profiles 
As a user I can view a homepage with different users posts

extra:
As a user I can like/comment on other users posts
As a user I can follow/subscribe to other users 
As a user I can Search the existing posts using key words


tech stack:
react-native, postgres sql, js backend, express, spark Ar





safetyTracker

MVP
As a user I can create an account which when given permission can track my movement
As a user I can alert my contacts when I choose
As a user I can check in to approved safe spaces (businesses/organisations/etc)



Tech stack:
react-native, typescript


Recycler

MVP
As a user I can create an account to list items on 
As a user I can be contacted by other users about my items
As a user I can view recycling centres by location 

Tech stack:

react-native, mongo db, typescript 



