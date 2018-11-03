class BooksController < ApplicationController
  before_action :current_user
  before_action :set_book, only: [:show, :update, :destroy]
  skip_before_action :current_user, only: [:show]

  def index
    @user_books = User.find_by(id: params[:user_id]).books
    render json: @user_books
  end

  # GET /books/1
  def show
    render json: @book
  end

  # POST /books
  def create
    @book = Book.new(book_params)

    if @book.save
      render json: @book.as_json, status: :ok
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /books/1
  def update
    if @book.update(book_params)
      render json: @book
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  # DELETE /books/1
  def destroy
    @book.destroy
    @user_books = User.find_by(id: params[:user_id]).books

    #byebug
    render json: @user_books
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_book
      @book = Book.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def book_params
      params.permit(:book, :id, :user_id, :title, :authors, :link, :description)
    end
end
