import React from 'react'
import PropTypes from 'prop-types'
import './media.css'

class Media extends React.Component {
  render() {
    const { title, author , image } = this.props 
    return (
      <div className="Media">
        <div className="Media-cover">
          <img className="Media-image"
            src={image} 
            alt="" 
            width={260}
            height={160} />
          <h3 className="Media-title">{title}</h3>
          <p className="Media-author">{author}</p>
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
