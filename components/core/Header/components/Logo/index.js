import Picture from '/components/shared/Picture'

const Logo = () => (
  <div className="flex-0 bg-black">
    <div className="flex items-center mx-7 my-3">
      <Picture
        src="/shared/Logo.webp"
        pngSrc="/shared/Logo.png"
        alt="Logo"
        className="w-9 mx-1"
      />

      <p className="uppercase w-[128px] text-white font-bold leading-none mx-3">
        Content Marketing
      </p>
    </div>

  </div>
)

export default Logo
