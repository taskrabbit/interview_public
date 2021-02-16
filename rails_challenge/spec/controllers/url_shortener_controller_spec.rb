require "rails_helper"

describe UrlShortenerController, type: :controller do
  it "loads properly" do
    get :home
    expect(response.code).to eq("200")
  end
end