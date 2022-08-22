import { useState } from 'react';
import Image from './image.webp'
import Image2 from './image2.webp'
function App() {
  const [menu, setMenu] = useState(false)
  const toggle = ()=>{
   setMenu(!menu)
  }
  return (
    <div>
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-between relative ">
          <div className="logo">
            <h1 className="text-3xl">Logo</h1>
          </div>
          <div className={`${!menu? 'hidden' : 'flex flex-col absolute top-full w-full border items-center p-4 m-8 justify-center mx-auto'} md:w-auto bg-slate-50 gap-5 md:bg-white md:flex md:relative md:flex-row md:gap-14 md:p-0 md:m-0 md:border-none `}  >
            <a href="/" className="cursor-pointer text-base capitalize">Home</a>
            <a href="/" className="cursor-pointer text-base capitalize">products</a>
            <a href="/" className="cursor-pointer text-base capitalize">support</a>
            <a href="/" className="cursor-pointer text-base capitalize">about</a>
            <a href="/" className="cursor-pointer text-base capitalize">comunity</a>
          </div>
          <div className="flex items-center space-x-6">
            <button className=" border-blue-500  text-blue-500 border  rounded-full px-5 text-sm capitalize p-2 hover:bg-blue-500 hover:text-white">sign up</button>

            <svg onClick={toggle} xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 block md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
        </div>
      </div>

      {/* home section */}

      <section className="container w-full flex mx-auto p-4 flex-col-reverse space-y-12 items-center md:flex-row ">
        <div className=" w-full space-y-8 mt-10 flex flex-col md:w-1/2">
          <h1 className=" text-4xl font-semibold capitalize ">Bring everyone together to build better products</h1>
          <p className=" text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt deleniti itaque esse facilis iure rem perspiciatis, necessitatibus iusto voluptatem temporibus, quibusdam unde ex! Praesentium impedit cum quas, unde quisquam autem, ea provident, dolorem ipsa blanditiis sunt quia tenetur labore voluptatum maiores vitae accusantium facilis sit at quidem eveniet rem sed!</p>

          <button className=" border-blue-500  max-w-fit text-blue-500 border  rounded-full px-6   text-sm capitalize p-2 hover:bg-blue-500 hover:text-white">sign up</button>
        </div>

        <div className='w-full md:w-1/2'>
          <img src={Image} alt="this is iamge" />
        </div>
      </section>

      {/* Features section */}
      <section className='container  mx-auto p-4 mt-8 space-y-10'>
        <h1 className='text-center font-semibold text-4xl mb-12'>How we will help you to grow ?</h1>
        <div className='grid auto-cols-fr  gap-10  justify-between md:grid-cols-2'>
          <div className='p-5 rounded  bg-slate-200 hover:shadow-2xl'>
            <h2 className="text-2xl mb-2">Network</h2>
            <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem officia non, cupiditate consequatur, magni aliquam harum dolorum iste incidunt rerum assumenda tempora ut inventore natus numquam ipsam repellendus explicabo laborum! Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
          </div>
          <div className=' p-5 rounded bg-slate-200 hover:shadow-2xl'>
            <h2 className="text-2xl mb-2">Time management</h2>
            <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem officia non, cupiditate consequatur, magni aliquam harum dolorum iste incidunt rerum assumenda tempora ut inventore natus numquam ipsam repellendus explicabo laborum!</p>
          </div>
          <div className='p-5 rounded  bg-slate-200 hover:shadow-2xl'>
            <h2 className="text-2xl mb-2">Opportunity</h2>
            <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem officia non, cupiditate consequatur, magni aliquam harum dolorum iste incidunt rerum assumenda tempora ut inventore natus numquam ipsam repellendus explicabo laborum!</p>
          </div>
          <div className=' p-5 rounded bg-slate-200 hover:shadow-2xl'>
            <h2 className="text-2xl mb-2">Communication</h2>
            <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem officia non, cupiditate consequatur, magni aliquam harum dolorum iste incidunt rerum assumenda tempora ut inventore natus numquam ipsam repellendus explicabo laborum!</p>
          </div>

        </div>
      </section>

      {/* features section */}
      <section className="mt-12">
        <h1 className="text-center text-4xl font-semibold capitalize my-6">Why choose us ?</h1>
        <div className="container mx-auto p-4  w-full flex flex-col items-center space-y-10 md:flex-row">
          <div className="w-full flex justify-center  md:w-1/2 md:justify-start">
            <img src={Image2} alt="this is iamge" />
          </div>
          <div className="flex flex-col w-full space-y-6 md:w-1/2">
            <h1 className="text-3xl font-semibold ">Building world's largest community for developers like you - Heading-1</h1>
            <p className=" text-base text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus saepe eveniet quasi fugit, perferendis veniam consequatur magni at a. Fuga totam praesentium officiis reprehenderit maxime veritatis unde ratione impedit saepe. fugit, perferendis veniam consequatur magni at a. Fuga totam praesentium officiis reprehenderit maxime veritatis unde ratione impedit saepe.
            </p>
            <button className=" border-blue-500  max-w-fit text-blue-500 border  rounded-full px-6   text-sm capitalize p-2 hover:bg-blue-500 hover:text-white">join us</button>
          </div>
        </div>

        <div className="container w-full flex mx-auto p-4 flex-col-reverse space-y-12 items-center md:flex-row ">
          <div className=" w-full space-y-8 mt-10 flex flex-col md:w-1/2">
            <h1 className=" text-3xl font-semibold capitalize ">Bring everyone together to build better products - Heading-2</h1>
            <p className=" text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt deleniti itaque esse facilis iure rem perspiciatis, necessitatibus iusto voluptatem temporibus, quibusdam unde ex! Praesentium impedit cum quas, unde quisquam autem, ea provident, dolorem ipsa blanditiis sunt quia tenetur labore voluptatum maiores vitae accusantium facilis sit at quidem eveniet rem sed!</p>

            <button className=" border-blue-500  max-w-fit text-blue-500 border  rounded-full px-6   text-sm capitalize p-2 hover:bg-blue-500 hover:text-white">join now</button>
          </div>

          <div className='w-full md:w-1/2'>
            <img src={Image} alt="img" />
          </div>
        </div>
      </section>

      {/* footer section */}
      <section className=" mx-auto mt-4 p-2 bg-slate-200">
        <h1 className="text-center text-lg font-semibold capitalize">made with love by mahesh patil</h1>
      </section>
    </div>
  );
}

export default App;
