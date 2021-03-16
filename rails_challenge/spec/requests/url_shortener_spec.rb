require "rails_helper"

describe "URL Shortener Endpoints", type: :request do
  it "loads the homepage form" do
    get '/'
    expect(response.code).to eq("200")
  end
end