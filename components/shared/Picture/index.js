const Picture = ({ src, pngSrc, ...props }) => (
  <picture>
    <source srcSet={src} type="image/webp" />
    <source srcSet={pngSrc} type="image/png" />
    <img src={src || pngSrc } {...props} />
  </picture>
)

export default Picture
