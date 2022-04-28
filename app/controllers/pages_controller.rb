class PagesController < ApplicationController
  def index
    @pages = Page.all
    rener component: 'Pages', props: { pages: @pages }
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
