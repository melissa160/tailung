class HomeController < ApplicationController
  def index
    render component: 'Home', props: {title: 'hola'}
  end
end
