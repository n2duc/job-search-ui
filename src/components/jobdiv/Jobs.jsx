import React from 'react'
import { BiTimeFive } from 'react-icons/bi'

const Jobs = () => {
    return (
        <div className='jobContainer flex gap-10 justify-center items-center flex-wrap py-10'>
            <div className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
                <span className='flex justify-between items-center gap-4'>
                    <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>Web Developer</h1>
                    <span className='flex items-center text-[#ccc] gap-1'>
                        <BiTimeFive />Now
                    </span>
                </span>
                <h6 className='text-[#ccc]'>Canada</h6>
                <p className='text-[13px] text-[#959595] pt-5 border-t-2 mt-5 group-hover:text-white'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, fugiat?
                </p>
                <div className="company flex items-center gap-2">
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Jobs