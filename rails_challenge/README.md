# TaskRabbit Coding Exercise

For this coding exercise, you'll be designing a URL shortener, similar to [Bitly](https://bitly.com/) or [Rebrandly](https://www.rebrandly.com/). Shortened URLs help people share a URL easily across social media platforms.

## Setup

We recommend you install Ruby `3.1.4` to run this repo.

You may also need to install some external dependencies:
  - `mimemagic`, part of rails, requires the shared-mime-info library; [instructions here](https://github.com/mimemagicrb/mimemagic/blob/master/README.md)

### Confirm Your Setup

Confirm that the following commands can output their versions without error on your machine:

```
ruby -v
bundle --version
rake --version
```

### Installation Steps

1. Run `bundle install`
2. Run `bundle exec rake db:setup`
3. Confirm you have no errors.
4. Run the test suite below using your preferred test framework.
5. Confirm that `bundle exec rails s` successfully starts the server

### Running Tests With RSpec

`bundle exec rspec spec`

### Running Tests With TestUnit

`bundle exec rails test`
