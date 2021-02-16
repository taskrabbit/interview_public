class UrlShortenerController < ApplicationController
  def home
  end

  def convert
    url = request.base_url + '/aBc123z'
    render plain: "#{params[:url]} has been converted to #{url}"
  end
end
