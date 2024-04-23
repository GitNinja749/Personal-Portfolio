import React from 'react'

const Contact = () => {
  return (
    <div id='contact'  className="grid-cols-1 min-h-screen  dark:bg-gray-950 dark:text-white">
        {/* <div className='flex justify-center pt-40'>
            <h1 className="text-5xl font-bold">Contact me</h1>
        </div> */}
    <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="md:mb-14 text-center lg:text-left">
      <h1 className="md:mb-14 text-5xl font-bold">Contact me</h1>
        <a href="#" className="py-6">Please contact me directly at
       <span className='font-semibold hover:underline text-blue-500'> vivekpp749@gmail.com </span> 
       or through form.
        </a>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        {/* <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="Name" placeholder="Name" className="input input-bordered" required />
        </div> */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <input type="Message" placeholder="Message" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-neutral text-xl hover:text-white">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default Contact