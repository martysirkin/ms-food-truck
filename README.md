# Microsoft Job Interview Food Truck Challenge

This file describes the solution that was worked on (morning of 10/15/2018) for the food truck challenge as described in the following [link](https://github.com/timfpark/take-home-engineering-challenge).

## Disclaimer

I am writing this document/code at (roughly!) a million miles an hour. I am trying to complete everything I'm setting out to do in 2 hours or so. Necessarily, there will not be time to complete everything I hope to complete. And I am sure I will forget some steps along the way. In the real world there would be time to review the document and to have others review it. I am sure you will understand if this work product is not 100% complete.

## Contact

This document contains a copyright (which is silly, of course!). However, it is very important, when working with customers for everything you do to be clear and explicit - to avoid any confusion.

Copyright (c) 2018. Marty Sirkin. All Rights Reserved.

If there are any questions about this document/project, I can be contacted at:

Marty Sirkin
marty@sirkin.net
(339) 364-1115

## Overview

This section will contain the following:

- Process. This section will describe how I typically approach consulting projects. Since this is what you are hiring me for, I feel as though it is important for you to understand my mindset.

- Project. I will describe the (very small!) project that I have time to work on (you do need someone who can code as well as architect/design/work with customers after all!).

- Other factors that I am thinking of (while working on this small project) about some things that I might work on if this were a real-world project.

- Other thoughts I have about this job

### Process

Having worked for a long time in consulting, I love projects such as this. Having a (mostly) clean slate is awesome when we're trying to figure out how to provide a really wonderful solution for our customers.

Typically, in a real-world situation, I would follow a more standard consulting process (such as the quick one I am listing here).

- Gather requirements. Have the customer provide us with their thoughts/hopes/vision.
- Observing how they do what they do. Often, when they write up/describe their workflow, they forget crucial items.
- Speaking with the team. This (optimally) is not only the high-level people with whom we often interact, but also includes team members. The people who DO the work. Often, they will have a perspective that is VERY different than management, and can often be quite helpful.
- Create a proposal. I am a big believer in Agile development. However, I prefer something I call a "mixed mode" development process. In this process, there is a large requirements gathering step at the beginning, and a "design document" to outline the project, goals, necessary and hoped-for goals. Then the actual develrunopment can be scheduled (see below), and can be run under a more normal scrum process.
- Signoff. When possible, I believe in having the customer review the proposal, discuss it with us, modify it as needed, and sign off such that there is a complete understanding among the involved parties.
- Create a schedule that both parties find acceptable (and sign off on). This is the master "contract" for the project, including deliverables and timeline. 
- DO THE WORK (This is the real fun of the project). Typically, I like to run a pretty generic scrum process (depending on team size, commitments, etc...) with 1-2 week sprints (optimally 1 week). This involves setting up a system (JIRA is what I've most recently used and is fine, there are others).
- Monitoring the sprints. It is CRUICIAL that the project manager (me) track progress. The notion of "we're a little bit behind. Don't worry, we'll catch up" is fine. We all do it. Having said that, one MUST be realistic in how you run your projects. Delays can happen (some projects are critical, some have more slack). The most important point is to be honest/true to yourself, the customer, and the project. My typical mantra is: "The project WILL succeed, and on time. It is possible that some items will get added, some may get delayed/deferred. But the key milestones/goals MUST be achieved."
- Testing (see below)
- Documentation. As you can see from this document, I believe in very complete documentation of what is being delivered. This must take place in the project.
- Signoff. I also believe in the customer having the project/product delivered. Then they should test/question it. Finally, they should sign off on the successful completion of the project/product.

### Food Truck Project

The project you describe is actually an awesome one. It is quite general, allowing me to go into many different possible areas. Unfortunately, time will not permit me to work on many of those. I will list some of the ones that occur to me off the top of my head (in a section below). The reason to include those is to see how I approach problems. Yes, I want to solve the problem that the customer describes. However, often, they either haven't thought the problem through (completely) or are unaware of some of the things that we can do for them. It may well be that we end up just writing what they originally described. But I want to make sure, at the end of the project, that they are truly delighted.

#### Platform

There are many ways that this project can be approached. I prefer to most-often start with the basics. For me, that includes issues such as platform/language/dev ops, for sure. See below for more details.

In this case, I specifically chose to use an environment that is both very common and is new to me. Personally, I believe that we all need to continue to grow and stay up with current trends. As such (outside of applying for this job) I have been getting up to speed on Node/JS, React, and am just about to start working on GraphQL. I am interested in adding all of these to my programming toolkit. My last company (Spoiler Alert) I worked with my team and we chose these platforms (replacing Meteor JS, which we used before) for a rewrite of our platform (which we did in 2017/2018). I am familiar with much of these packages, but I did not have the time to actually dig into the code (my team did). So, I am getting myself up to speed on them.

Note: My most recent company (Spoiler Alert) had services written in Visual C# (most recently replaced with Azure Functions). But I want to know as many different environments as possible, so as to be able to fit the right peg into each hole for the customer.

While this is not the environment I am most proficient in (and thus won't get as much delivered to you today), I feel that this isn't at all different from what may happen when working with customers. They often have old packages that are new to us. They may insist on technologies that I have to get up to speed on. So, why not for this project? I also know that I am not experienced in Node, so this project is likely not to currently have all best practices in it. In the real world, I would take the time to insure that this is covered.

Having said that, I decided to write a simple web server that will digest a simple endpoint for the food truck application. It will be a HTTP POST endpoint (it could easily be a GET, but I realized when I finished that I (for some reason) made this a POST. This is why we design/iterate!!

I chose to write this little bit of code in Node/Javascript. It is running in an EXPRESS web server, running on localhost (see below for details). For most of the projects I work on, there are a number of basic inclusions that I would have that are not in this project. They include:

- Building the application and deploying to a web server automatically. Recently, I've been using Heroku for this
- Unit testing (and other testing). Most of my projects have used Mocha as a testing platform. For some of the React work I have just started playing with, I have been exploring Jest as a testing platform.
- No matter which testing platform we choose, it is always essential that a full unit/acceptence/system/integration (all depends on the specific project) testing suite be delivered with the package. Again, I started to add this to the solution, but time did not fully permit.
- Webpack and sccs. Optimization in the compilation is critical. I started to add it to this project. It is not completed (time).
- Similarly, the project could/should be put in a container, and be deployed in a managed way (Docker/Kubernetes, whatever). Not happening here.
- GUI. I decided against a GUI for the project. Simply put, this can be fun (and I love doing it), but I am much more concerned, in a full-stack manner, with the project and the data delivery/optimization.
- A database to hold the truck info might be best for this project. This might be best if the truck information is updated infrequently. Why not optimize the truck locations to improve on query performance?? (We should). But if the truck information is highly dynamic, a different approach might be followed. In this case (because I didn't have much time, I just scraped some of the data and included it in the query. ** THIS IS HIGHLY NON-OPTIMAL AND WOULD NOT BE DONE IN A REAL SYSTEM. ** Why would you transfer that information in the request?? But it is quicker to parse, and I just ran into a couple of bugs while writing the included code. As such, the truck locations are in the input params to the service.
- I18N. I spent an early part of my career in coding/architecting I18N (Internationalization) toolkits/code for IBM Research. I love the field, and every app should be properly enabled. But that could not possbly happen in this timeframe.
- Performance. This is one of my top 2 favorite items to look at for every project. Not every project needs/requires really tight, crisp performance analysis. But it is important to model, design, and code the application for top-notch performance.
- Security. This is my first and #1 concern with every project. If it isn't designed, from the start, to be secure - I feel that we have failed the customer. In this porject I am using standard technology for Node. I saw (when compiling the code, that there are a few minor (no major) security warnings. In the real world, this would be step #1, #2, ... #n. It is not really addressed in this toy project.

#### Considerations

The following are some ideas that I immediately had when I read the problem descriptions. Many of them are features that might be good to have in this project (or at least to discuss with the customer, as described in the process above). 

- The customer might (with a GUI) be able to choose among food types (I am interested in Chinese, Mexican today ONLY)
- The customer has a single address they are at, but they might be moving around (see "range" below)
- There should be a maximum distance (range) that the customer is willing to go (from their address/location). Only find trucks in that range. I actually added that to the prototype, but I only had time to hardcode the distance. Default is 1 mi.
- Note: (I am embarrassed about this!) I hardcoded it in my rush to simply parse the "km" from the distances. This is foolish. In the real world I would configure the distance and have it not include units. These are settings I know, but I didn't have time to go find them today.
- How do we want to get the distance from one location to another. I am using the google distance package. In the real world, that package has a rate limiter on it. Does the customer need to spend $$s for more queries? Is there a better place to get the data?
- The data file includes some times (of day) that the truck is open. Some don't have that info. How do we want to handle? Do we want to check "now", or allow them to optionally specify the time for the query?
- I added a range to the prototype. However, the current API uses absolute distance (instead of walking distance). I know that this is in the API - just didn't have the time today. Also, the default it has is in KM. I converted it, but we could either move it to SM (Statute Miles) or to a setting (in a fancy GUI). We also don't want distance as the crow flies, but we want "walking distance". BTW, the "Range" is a maximum that they're willing to for their food.
- How often do we get the data? Is it static? Dynamic? Downloaded at intervals? Can we optimize it offline so that the queries are faster?
- Do the trucks move? Do we have to be truly dynamic? Can we use their lat/long always? Is it always provided. If not, we MUST have their street address.
- Add a parser for the street addresses to be a global module. If using a DB, make sure that everything that can be queried is consistent and optimized.
- I downloaded the google distance npm package and installed it on my machine. To run this API you must too. The api KEY is: "AIzaSyAebKraqZ6m5qlx0x6HnoqgHqKhECJmxh0". In the real world I would NEVER include this in the code (as I did for you for simplicity). It would be in a JSON file that is in the .gitignore, so that it isn't shared globally.
- I added (from another project) the notion of login/logout that I wrote for that project. The users for this are stored in a Mongo DB. HOWEVER, I then decided that *anyone* could access the food trucks. So, the code is in the project, but this API does not actually validate security. It's easy to add, and should be used for uploading data, but it isn't needed for finding trucks (Note: It's a simple SHA256 cipher). 
- My code uses addresses, not lat/long. It's less efficient (we have to look them up) and it's fine for a prototype. It's also more universal.
- NOTE: You'll see that the name of the project (if you look) is VOTEAPI. I took some of the code from a toy project I have worked on this past week about voting (it's in the news after all).
- NOTE: I have been using POSTMAN to call on the API. Please let me know if you have questions about it or usage of the API.

### Usage

This API is very simple to use. It is defined as an HTTP endpoint.

URL:  <server>/findTrucks
TYPE: POST
BODY: {
         "trucks" : [
            <location of truck1>,
            <location of truck2>
         ],
         "myAddress" : <my address here>
       }

Sample body: 
{
	"trucks" : [
		"4 Longfellow Place, Boston, MA",
		"299 Boylston Street, Boston, MA",
		"1 Beacon Street, Boston, MA"
	],
	"myAddress" : "15 Sudbury Street, Boston, MA"

}

RETURN: If the service fails, a 400 code is returned. Currently, it is not coded with ANY guards :( Clearly, we should test some very basic conditions, including (note: These are only a few basic ones. With more time, the testing suite would be more complete):

- There is no "myAddress" argument provided.
- The myAddress is a valid address
- Each of the entries in the array for trucks is a string
- Each address string is a valid address
- The optional range limit is provided
- The range limit is a valid float
- There is a max range limit (TBD)
- Addresses are only considered if they are within a specified range (5 mi?). If not, they are ignored.

## Executing the package

This is a *brief* description of how to use this package. If more information is required, please contact the author (listed above).

1. Download the package from github.
2. In the main directory, load packages from npm (either npm init or yarn init if you prefer yarn). This is required because the .gitignore does not have us download standard packages (such as express). There's no need to include them on github.
3. The default port that the server runs on is 3000. If this not preferred, it can be changed in the server.js file.
4. Execute the API as listed above in the usage section.
