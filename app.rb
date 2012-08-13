#init
require 'rubygems'
require 'twitter'
require 'sinatra'
require 'haml'

# Twitter auth
Twitter.configure do |config|
  config.consumer_key = 'xxx'
  config.consumer_secret = 'xxx'
  config.oauth_token = 'xxx'
  config.oauth_token_secret = 'xxx'
end

# define stuffs
def twitter_id(screen_name)
  Twitter.user(screen_name).id
end

  # like it sound
def is_following?(a,b)
  followers = Twitter.follower_ids(twitter_id(b)).ids
  followers.include?(twitter_id(a))
end
  
  # user's location
def location_u(screen_name)
  location = Twitter.user(screen_name).location
end

  # most recent tweet
def recent_tweet(screen_name)
  recent_tweet = Twitter.user_timeline(screen_name).first.text
end

#page binding
get '/' do
  # haml
  # default index.haml
  haml :index
end

get '/check' do
  @user1 = params[:user1]
  @user2 = params[:user2]

  # following check
  @following1 = is_following?(@user1, @user2)
  @following2 = is_following?(@user2, @user1)

  # locations detect
  @location1 = location_u(@user1)
  @location2 = location_u(@user2)

  # latest tweet
  @recent_tweet1 = recent_tweet(@user1)
  @recent_tweet2 = recent_tweet(@user2)

  haml :check
end