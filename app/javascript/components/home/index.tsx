import * as React from "react"
import PropTypes from "prop-types"
import AmchartsGraph from "./amchartsGraph"

export interface HomeProps { data: number[] }

class Index extends React.Component<HomeProps, any>{
  constructor(props){
    super(props)
    this.state = {campaignData: this.props.data}
  }
  render() {
    return (
      <AmchartsGraph data={this.state.campaignData}></AmchartsGraph>
    )
  }
}
export default Index
