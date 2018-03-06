import * as React from "react"

class AmchartsGraph extends React.Component<any, any> {
  constructor(props: number[]){
    super(props)
    this.state = { chartDataJson: this.props.data }
  }
  render(){
    return(
      <div>
        saludo: { this.state.chartDataJson[0].campaign }
      </div>
    )
  }
}
  export default AmchartsGraph
  /*
  function paint(chartData){
    var chart = AmCharts.makeChart("chartdiv", {
        "type": "serial",
        "theme": "light",
        "marginTop":0,
        "dataProvider": chartData,
        "valueAxes": [{
             "axisAlpha": 0,
             "color": "#687189",
             "fontWeight": "bold",
             "position": "left"
        }],
        "balloon": {
            "adjustBorderColor": true,
            "borderThickness": 0,
            "fillAlpha": 1,
            "horizontalPadding": 10,
            "verticalPadding": 10,
            "shadowAlpha": 0.4,
            "shadowColor": "#9CAED9",
            "color": "#5AB0EE",
            "cornerRadius": 3,
            "textAlign": "left"
        },
        "graphs": [{
            "id":"g1",
            "fillAlphas": 0.1,
            "balloon": {
              "drop": true
            },
            "balloonText": "[[category]]<br><b><span style='text-align: left; color: #687189; font-weight: bold; font-size:12px;'>[[value]]</span></b>",
            "bullet": "round",
            "bulletBorderAlpha": 1,
            "bulletColor": "#FFFFFF",
            "bulletSize": 8,
            "useLineColorForBulletBorder": true,
            "lineColor": "#2EC6C8",
            "lineThickness": 2,
            "negativeLineColor": "#2087D1",
            "type": "smoothedLine",
            "valueField": "valData"
        }],
        "categoryField": "campaign",
        "categoryAxis": {
           "gridPosition": "start",
           "gridAlpha": 0,
           "tickPosition": "start",
           "tickLength": 20,
           "minorGridAlpha": 0.1,
           "minorGridEnabled": true
        },
    });
  }
   */
