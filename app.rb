require 'rubygems'
require 'twitter'
require 'sinatra'
require 'haml'

Twitter.configure do |config|
  config.consumer_key = 'xxxx'
  config.consumer_secret = 'xxxx'
  config.oauth_token = 'xxxx'
  config.oauth_token_secret = 'xxxx'
end

def twitter_id(screen_name)
  Twitter.user(screen_name).id
end

def is_following?(a,b)
  followers = Twitter.follower_ids(twitter_id(b)).ids
  followers.include?(twitter_id(a))
end
  
def location_u(screen_name)
  location = Twitter.user(screen_name).location
end

def recent_tweet(screen_name)
  recent_tweet = Twitter.user_timeline(screen_name).first.text
end

get '/' do
  haml :index
end

get '/check' do
  @user1 = params[:user1]
  @user2 = params[:user2]

  @following1 = is_following?(@user1, @user2)
  @following2 = is_following?(@user2, @user1)

  @location1 = location_u(@user1)
  @location2 = location_u(@user2)

  @recent_tweet1 = recent_tweet(@user1)
  @recent_tweet2 = recent_tweet(@user2)

  haml :check
end