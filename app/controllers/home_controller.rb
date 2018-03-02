class HomeController < ApplicationController
  def index
    render component: "#{controller_name}/#{action_name}", props: {title: 'hola mundo'}
  end
end
