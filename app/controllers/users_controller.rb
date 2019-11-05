class UsersController < ApplicationController
  def index
    return nil if params[:name] == ""
    @users = User.where.not(id: current_user.id).where('name LIKE(?)', "%#{params[:name]}%")
    respond_to do |format|
      format.html {redirect_to group_path(@group)}
      format.json
    end
  end
  
  def edit
  end

  def update
    if current_user.update(user_params)
      redirect_to root_path
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
