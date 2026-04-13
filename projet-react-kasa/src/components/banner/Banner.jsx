import './banner.css'

function Banner({ title, image, isTextVisible = true }) {
  return (
    <section className="banner">
      <div
        className="banner__image"
        style={image ? { backgroundImage: `url(${image})` } : {}}
      >
        <div className="banner__overlay"></div>

        {isTextVisible && <h1 className="banner__title">{title}</h1>}
      </div>
    </section>
  )
}

export default Banner