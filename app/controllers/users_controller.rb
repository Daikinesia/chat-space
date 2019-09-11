class UsersController < ApplicationController
  def edit
  end

  def update
    if current_user.update(user_params)
      redrect_to root_path
    else
      render :edit
      # editのviewを表示
    end
  end

  private
  def user_params
    params.require(:user).permit(:name, :email)
  end
end
