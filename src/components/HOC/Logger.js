import React, { useEffect } from "react"

function Logger(WrapContainer) {
  return class extends React.Component {
    componentDidUpdate(prevProps) {
      console.log("Current props: ", this.props)
      console.log("Prev props: ", prevProps)
    }
    render() {
      return <WrapContainer {...this.props} />
    }
  }
}

export default Logger
