class HomeViewModelGenerator
  def generate_view_model
    if curren_user.tester
      {title: 'hola Meli'}
    else
      {title: 'hola normal'}
    end
  end
end


class HomeController < ApplicationController
  def index
    render component: "#{controller_name}/#{action_name}", props: HomeViewModelGenerator.new.generate_view_model
  end

  private
end
