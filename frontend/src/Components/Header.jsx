import React from 'react'
import Container from './Container'
import { CiLocationOn } from "react-icons/ci";
import { Mail } from 'lucide-react';
import EN from '@/assets/header/images.png'
import bd from '@/assets/header/bd.png'
import logo from '@/assets/header/Group 15654.png'
import Image from 'next/image';
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import Link from 'next/link';
import NavMenu from './NavMenu';


const Header = () => {
  let menu = [
    {bar:'Home',link:'/'}, {bar:'About',link:'/about'},{bar:'Shop',link:'/shop'},{bar:'Pages',link:'/pages'},{bar:'Blog',link:'/blog'},{bar:'Contect',link:'/contcat'}
  ]
  return (
    <>
    <header className='bg-[#0A472E] py-4.5'>
    <Container>
    <div className="flex justify-between items-center">
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1 text-white">
        <CiLocationOn className='text-[#80B500] w-4.5 '/>
        <h5 className='text-[15px] font-normal font-nunito text-white'>254 Lillian, Holbrook</h5>
      </div>
      <div className="flex items-center gap-1 text-white">
        <Mail className='text-[#80B500] w-4 '/>
        <h5 className='text-[15px] font-normal font-nunito text-white'>info@santizex-site.com</h5>
      </div>
    </div>
    <div className="flex items-center">
      <div className="">
        <h4 className='text-[15px] font-normal font-nunito text-white border-r pr-2'>facebook - behance - interest</h4>
      </div>
      <div className="flex gap-1 ml-1 items-center">
        <div className="flex rounded-full border cursor-pointer border-gray-600 gap-1 text-white items-center px-2 ">
        <Image src={EN} className='rounded-full' width={20} height={19} alt='en' />
        EN
        </div>
        <div className="flex gap-1 px-2 text-white cursor-pointer border border-gray-600 rounded-full">
        <Image src={bd} width={23} height={19} alt='bd' />
        BD
        </div>
      </div>
    </div>
    </div>
    </Container>
    </header>

    <nav className=" border-b border-gray-300 sticky top-0 left-0 bg-white z-999 w-full">
    <Container>
    <div className="flex justify-between items-center py-[26px]">
    <div className=" flex items-center">
        <Image src={logo} width={23} height={19} alt='bd' />
        <h3 className=' font-inter font-bold text-[30px] text-[#232323]'>Cabbage</h3>
    </div>
    <div className="">
    <div className="flex gap-[31px]">
     <NavMenu menu={menu} />
      <div className="flex items-center gap-[19px]">
<div className="bg-[#80B500]/20 hover:bg-[#80B500]/30 cursor-pointer rounded-full flex items-center justify-center w-8.75 h-8.75 ">
  <FaRegHeart className='text-[#80B500] text-[16px] ' />
</div>
<div className="bg-[#80B500]/20 hover:bg-[#80B500]/30 cursor-pointer rounded-full flex items-center justify-center w-8.75 h-8.75 ">
  <FaRegUser className='text-[#80B500] text-[16px] ' />
</div>
<div className="bg-[#80B500]/20 hover:bg-[#80B500]/30 cursor-pointer relative rounded-full flex items-center justify-center w-8.75 h-8.75 ">
  <IoCartOutline className='text-[#80B500] text-[16px] ' />
  <span className="w-[14px] h-[14px] bg-[#80B500] rounded-full text-white absolute top-0 right-0 text-[14px] flex items-center justify-center">
     5
  </span>
</div>

      </div>

         <div className="ml-11.25">
          <button className='text-white bg-[#80B500] hover:bg-[#679202] duration-300 cursor-pointer font-bold font-nunito text-[14px] px-[30px] py-[16px]'>GET A QUATE</button>
        </div>
    </div>
       
</div>
    </div>


    </Container>


    </nav>
    
    </>
  )
}

export default Header