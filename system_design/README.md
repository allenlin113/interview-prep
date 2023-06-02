# System Design Interviews

## Notes

    * Constraints + Tradeoffs
    * How do the decisions affect the end users
    * Use generic names of components, instead of brand names
    * “I don’t know” ➡ “I don’t have hands on experience with ___, but I have read about it. This is what I read.”
    * Do not check in on every decision. Check in on every milestone.
    * “These are the things I can think of right now. If something else comes up, I will update this”

## Steps

-   Based off - [interviewing.io System Design Interview Guide](https://interviewing.io/guides/system-design-interview)

1. Requirements
    - Functional Requirements
        - Identify main business objects and their relations
            - What are the properties of each object?
            - What are the access patterns of each object?
            - Are objects mutable?
    - Non-Functional Requirements
        - Availability, Consistency, Durability, Scalability, Latency
        - Performance
            - Which access patterns require good performance?
        - Consistency vs Availability
    - Are there any important requirements you have in mind that I’ve overlooked?
2. Data Modeling, API, and Scale
    - Data Modeling
        - Structured data
            - Accounts:
                - id INT PRIMARY KEY
                - name VARCHAR(255)
                - surname VARCHAR(255)
            - Tweets:
                - id INT PRIMARY KEY
                - content VARCHAR(1000)
                - author_id INT REFERENCES Accounts(id)
                - media_url VARCHAR(255)
            - Followers:
                - account_id INT REFERENCES Accounts(id)
                - follower_id INT REFERENCES Accounts(id)
        - Media and blobs
    - API Endpoints
        - Request
            - getTweets:
                - GET /api/v1/{accountId}/tweets?nextPageToken={token}Response
                    - HTTP Status Code
                    - Paged list of tweets sorted by creation time desc.
            - getFeed:
                - GET /api/v1/{accountId}/feed?nextPageToken={token}
                - Returns: Paged list of tweets for the given users feed
            - putTweet:
                - PUT /api/v1/{accountId}/tweets
                - Request Body: content of the tweet
            - reweet:
                - POST /api/v1/{accountId}/retweet
                - Request Body: id of the tweet that is retweeted
        - Response
            - HTTP Status Code
            - body: JSON
        - Tips
            - HTTP Method Requests are verbs
            - Resources should be nouns
    - Scale
        - Read-heavy or write-heavy
        - Back-of-the-envelope estimation (Ask)
            - Storage = daily data used by 1 user _ DAU count _ length of time to store data
            - Bandwidth per second = (daily data used by 1 user \* DAU count ) / total seconds in a day
3. Design
    - Data Storage
        - Blob storage
            - Use generic blob storage box (not S3)
        - Database
            - Relational vs Non-Relational
                - [Relational] Structured and ACID compliant
                - [Non-Relational] Unstructured data and Availability
                - Can use BOTH
    - Microservices
        - Cache
            - Computing the result is expensive
            - Once computed, result does not change often
            - Object is read often
        - Load balancers
            - Horizontal scaling: Add more servers
            - High availability: Rolling restart
        - Queue
    - Rule of thumbs
        - Want speed? Use a cache
        - Want availability? Use redundancy