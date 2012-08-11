# Twit Buddy
	  ______         _ __     ____            __    __     
	 /_  __/      __(_) /_   / __ )__  ______/ /___/ /_  __
	  / / | | /| / / / __/  / __  / / / / __  / __  / / / /
	 / /  | |/ |/ / / /_   / /_/ / /_/ / /_/ / /_/ / /_/ / 
	/_/   |__/|__/_/\__/  /_____/\__,_/\__,_/\__,_/\__, /  
	                                              /____/   

## Overview
A simpple app to check following status, & to check whether if you two are following each other or who does and who does not.

![Twit Buddy](http://imgur.com/RuL3Y.png)

* [http://twitbuddy.herokuapp.com/](DEMO)
* [mailto:vinhnguyen2308@gmail.com](Feedback, suggest, bugs inform, ideas, or just to say hi ...)
* [http://twitter.com/vinhnx](@vinhnx)

## Features

* Check two users' following status.
* Return each user's locations.
* Return each user's most recent tweet.

## Changlogs
### Version 1.0:
* First deployment.

### Version 1.04:
* Redesign
* Improve speed by reducing script load.
* Repsonsive Web Design #RWD enabled.

### Version 1.06:
* Add [Sharrre Social Plugins](http://sharrre.com) for Social Network sharing.
* Fix form bugs.

## Todos:
* Adding more features...
* Tweak performance...


## What inside

* HTML5 text-to-speech feature.
* Haml for templating engine.
* Less.
* Sinatra 1.3.0.
* Ruby.
* Twitter gem.

### How-to-use

This app requires Ruby and Sinatra to be install. 
To install Sinatra, simply run:

`$ gem install sinatra`

Haml is for templating:

`$ gem install haml`

and Twitter gem, of course:

`$ gem install twitter`

You can either download this repo, or clone it automatically with this command:

`git clone git://github.com/vinhnx/twit-buddy.git`

> Register An App at [Twitter Developers Center](https://dev.twitter.com/apps) to obtain your API keys, then add required details to your `app.rb` config.

First, point to your app dir, 

`$ cd twit-buddy`

(Optional) Required gems are already included, but if your want to add/remove/edit any/all of them, be sure to edit your `Gemfile`, then run this to install gems

`$ bundle install`

... execute it won't happen :)

`$ ruby app.rb`

> For most convenient Heroku deployment, use [Heroku Toolbelt](https://toolbelt.heroku.com). 
> Read https://devcenter.heroku.com/articles/ruby for a complete how-to-deploy guide.