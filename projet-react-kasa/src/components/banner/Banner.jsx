import './banner.css'

function Banner({ title, image, isTextVisible = true, variant = 'default' }) {
  return (
    <section className={`banner banner--${variant}`}>
      <div className="banner__image">
        {image && <img src={image} alt="" className="banner__img" />}

        <div className="banner__overlay"></div>

        {isTextVisible && <h1 className="banner__title">{title}</h1>}
      </div>
    </section>
  )
}

export default Banner