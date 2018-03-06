class HomeController < ApplicationController
  GRAPH_DATA = [{campaign: "C1", valAcum: 1, valCampaign: 5, valVsAvg: 3},
          {campaign: "C2", valAcum: 2, valCampaign: 4, valVsAvg: 3},
          {campaign: "C3", valAcum: 3, valCampaign: 3, valVsAvg: 3},
          {campaign: "C4", valAcum: 4, valCampaign: 2, valVsAvg: 3}]

  def index
    render component: "#{controller_name}/#{action_name}", props: {data: GRAPH_DATA}
  end
end
