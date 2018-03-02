import * as React from "react"
import PropTypes from "prop-types"

export interface HomeProps { title: string; }

class Home extends React.Component<HomeProps, any> {
  render () {
    return (
    <div>
     {this.props.title}
    </div>
    );
  }
}

export default Home
