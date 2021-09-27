import React, { Component } from 'react'
interface Iprops{

}
interface Istate{
  hasError:boolean
}

class ErrorBoundary extends Component<Iprops,Istate> {
  constructor (props:Iprops) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch (error:any, info:any) {
    this.setState({ hasError: true })
  }

  render () {
    console.log('ErrorBoundary');
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary