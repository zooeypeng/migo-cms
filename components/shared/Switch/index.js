const Switch = ({ isActivated }) => (
  <div className={`inline-block w-12 h-5 rounded-full relative z-10 bg-${isActivated ? 'green' : 'gray-1'}`}>
    <span className={`inline-block bg-white rounded-full w-3 h-3 absolute inset-y-1 z-20 ${isActivated ? 'right-1' : 'left-1' }`}></span>
  </div>
)

export default Switch
