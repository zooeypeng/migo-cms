import Image from 'next/image'

const Picture = ({ src, pngSrc, w, h, ...props }) => (
  <picture>
    <source srcSet={src} type="image/webp" />
    <source srcSet={pngSrc} type="image/png" />
    <Image src={src || pngSrc } {...props} width={w} height={h} />
  </picture>
)

export default Picture
