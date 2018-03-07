import * as React from "react"
import PropTypes from "prop-types"
import AmchartsGraph from "./amchartsGraph"

export interface HomeProps { data: number[] }

class Index extends React.Component<HomeProps, any>{
  render() {
    return (
      <AmchartsGraph data={this.props.data}></AmchartsGraph>
    )
  }
}
export default Index
