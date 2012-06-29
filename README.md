# Twit Buddy

Twitter following check, whether if you two are following each other or who does and who does not.

* *Demo*: [http://twitbuddy.herokuapp.com/](http://twitbuddy.herokuapp.com/)
* *Feedback, suggestions, requests and more* : vinhnguyen2308@gmail.com

## Features

* Check two users' following status.
* Return each user's locations.
* Return each user's most recent tweet.

## What inside

* HTML5 text-to-speech feature.
* Haml for templating engine.
* Less.
* Sinatra 1.3.0.
* Ruby.
* Twitter gem.
* jQuery: [Real Shadow plugin](http://indamix.github.com/real-shadow/) 

### How-to-use

This app requires Ruby and Sinatra. To install Sinatra, simply run:

`gem install sinatra`

Haml is for templating:

`gem install haml`

and Twitter, of course:

`gem install twitter`

Fork this repo, then clone it to your local machine.

`git clone git://github.com/vinhnx/twit-Buddy.git`

> Register An App at [Twitter Developers Center](https://dev.twitter.com/apps) to obtain your API keys, then add it to app.rb config.

...then you are ready to go :)

> For most convenient Heroku deployment, use [Heroku Toolbelt](https://toolbelt.heroku.com). 
> Read https://devcenter.heroku.com/articles/ruby for a complete how-to-deploy guide.