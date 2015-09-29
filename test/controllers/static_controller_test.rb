require 'test_helper'

class StaticControllerTest < ActionController::TestCase
  test "should get Pages" do
    get :Pages
    assert_response :success
  end

end
