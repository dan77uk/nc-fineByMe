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
As a user, I can order complaints by date, area and votes.
As a user, I can sort complaints by type of complaints eg traffic, parking etc
As a user, I can filter complaints by whether or not they have a picture/video attached.
PATCH /api/:complaint_id
As a user, I can upvote complaints.

Users shoul dbe able to view live/resolved complaints
As a user, I will have the option to create an account.
