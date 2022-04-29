class PagesController < ApplicationController

  def index
 @page = Page.all
 render component: 'Pages', props: { pages: @pages }
end

  def show
    @page = page.find(params[:id])
    render component: 'Page', props: { page: @page }
  end

  def new
    @page = Page.new
    render componet: 'PageNew', props: { page: @page }
  end
end

  def create
    @page = Page.new(pages_params)

    if @page.save
    else
      render component: "PageNew", props: { page: @page}
  end
end

def pages_params 
  params.requir(:page).permit(:title, :author, :body)
end
