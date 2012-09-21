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

* [DEMO](http://twitbuddy.herokuapp.com/)
* [Feedback, suggest, bugs inform, ideas, or just to say hi ...](mailto:vinhnguyen2308@gmail.com)
* [@vinhnx](http://twitter.com/vinhnx	)

## Features

* Check two users' following status.
* Return each user's locations.
* Return each user's most recent tweet.

## Changlogs
### Version 1.0:
* First deployment.

### Version 1.01:
* Redesign
* Improve speed by reducing script load.
* Repsonsive Web Design #RWD enabled.

### Version 1.02:
* Add [Sharrre Social Plugins](http://sharrre.com) for Social Network sharing.
* Fix form bugs.

### Verion 1.03 (NEW!):
* Cool new `Fork me on github` effect, be sure check it out!
* Fix dozen of bugs.

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

`$ git clone git://github.com/vinhnx/twit-buddy.git`

> Register An App at [Twitter Developers Center](https://dev.twitter.com/apps) to obtain your API keys, then add required details to your `app.rb` config.

First, point to your app dir, 

`$ cd twit-buddy`

(Optional) Required gems are already included, but if your want to add/remove/edit any/all of them, be sure to edit your `Gemfile`, then run this to install gems

* ## NOTE:
You must have `bundle` gem pre-install to execute. If you haven't had this yet, run this code

`$ gem install bundle`

then bundle it

`$ bundle install`

... execute it won't happen :)

`$ ruby app.rb`

> For most convenient Heroku deployment, use [Heroku Toolbelt](https://toolbelt.heroku.com). 
> Read https://devcenter.heroku.com/articles/ruby for a complete how-to-deploy guide.

<a rel="license" href="http://creativecommons.org/licenses/by-nc/3.0/deed.en_US"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-nc/3.0/80x15.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/Text" property="dct:title" rel="dct:type">Twit Buddy</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://vinhnx.github.com" property="cc:attributionName" rel="cc:attributionURL">Vinh Nguyen</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc/3.0/deed.en_US">Creative Commons Attribution-NonCommercial 3.0 Unported License</a>.