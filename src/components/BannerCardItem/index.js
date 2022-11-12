import './index.css'

const Banner = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails
  return (
    <li className={`${className} card`}>
      <div>
        <h1 className="card-heading">{headerText}</h1>
        <p className="card-description">{description}</p>
        <button className="card-button" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default Banner
