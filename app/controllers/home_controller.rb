class HomeController < ApplicationController
  def index
    render component: 'Post', props: {title: "Typescript", published: true} 
  end
end
