class UpVotesController < ApplicationController
  before_action :set_up_vote, only: [:show, :update, :destroy]

  # GET /up_votes
  def index
    @up_votes = UpVote.all

    render json: @up_votes
  end

  # GET /up_votes/1
  def show
    render json: @up_vote
  end

  # POST /up_votes
  def create
    @up_vote = UpVote.new(up_vote_params)

    if @up_vote.save
      render json: @up_vote, status: :created, location: @up_vote
    else
      render json: @up_vote.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /up_votes/1
  def update
    if @up_vote.update(up_vote_params)
      render json: @up_vote
    else
      render json: @up_vote.errors, status: :unprocessable_entity
    end
  end

  # DELETE /up_votes/1
  def destroy
    @up_vote.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_up_vote
      @up_vote = UpVote.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def up_vote_params
      params.require(:up_vote).permit(:user_id, :site_id)
    end
end
