import Lance from '../assets/Lance.png'

function Profile() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black/50">
        <div className="flex items-center justify-end">
            <div className='flex justify-center items-center w-4xl'>
                <div className="flex flex-col justify-center w-3xl">
                <span className="text-4xl font-bold p-3 justify-end shadow-md">Hello! My name is Lance.</span>
                <p>I'm an aspiring front-end developer from Saint Mary's University taking an Information Technology degree.</p>
                </div>
                
            <div className=''>
                <img src={Lance} alt="Lance" className="w-128 aspect-square rounded-4xl mt-4 object-cover p-4" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Profile