import React from 'react'
import PropTypes from 'prop-types'
import './media.css'

class Media extends React.Component {
  // constructor(props) {
  //   super(props)
  // //   this.handleClick = this.handleClick.bind(this)
  //   this.state = {
  //     author : props.author
  //   }
  // }
  state = {
    author: 'Julian Ortiz'
  }
  handleClick = (event) => {
    // console.log(this.props.title)
    this.setState({
      author: 'Daniel Ortiz'
    })
  }

  render() {
    
    return (
      <div className="Media" onClick={this.handleClick}>
        <div className="Media-cover">
          <img className="Media-image"
            src={this.props.image} 
            alt="" 
            width={260}
            height={160} />
          <h3 className="Media-title">{this.props.title}</h3>
          <p className="Media-author">{this.state.author}</p>
        </div>
      </div>
    )
  }
}

Media.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  type: PropTypes.oneOf(['video', 'audio'])
}
export default Media
