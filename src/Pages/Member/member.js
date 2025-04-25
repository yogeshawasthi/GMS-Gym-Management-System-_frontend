import React from 'react';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CircleIcon from '@mui/icons-material/Circle';

const Member = () => {
  return (
    <div className='text-black p-5 w-3/4 h-[100vh]'>

      {/* Block for banner */}
      <div className='border-2 bg-slate-900 flex justify-between w-full text-white rounded-lg p-3'>
        <div className='border-2 pl-3 pr-3 pt-1 pb-1 rounded-2xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'></div>
        <div className='border-2 pl-3 pr-3 pt-1 pb-1 rounded-2xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'></div>
      </div>

      {/* Block for back to dashboard button */}
      <Link to={"/dashboard"}><ArrowBackIcon /> Back to Dashboard </Link>

      <div className='mt-5 w-1/2 flex gap-2'>
        <input type='text' className='border-2 w-full p-2 rounded-lg' placeholder='Search By Name or Mobile no' />
        <div className="bg-slate-900 p-3 border-2 text-white rounded-lg cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black">
          <SearchIcon />
        </div>
      </div>

      <div className='mt-5 text-xl flex justify-between text-slate-900'>
        <div>Total Members</div>
        <div className='flex gap-5'>
          <div>1-9 of 52 Members</div>
          <div className='w-8 h-8 cursor-pointer border-2 flex items-center justify-center hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'><ChevronLeftIcon /></div>
          <div className='w-8 h-8 cursor-pointer border-2 flex items-center justify-center hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'><ChevronRightIcon /></div>
        </div>
      </div>

      <div className='bg-slate-100 p-5 mt-5 rounded-lg grid gap-2 grid-cols-3 overflow-x-auto h-[65%]'></div>

      {/* Member card */}
      <div className='bg-white rounded-lg p-3 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer flex flex-col gap-2'>
        <div className='w-28 h-28 flex justify-center relative items-center border-2 p-1 mx-auto rounded-full'>
          <img className='w-full h-full rounded-full' src='https://scontent.fktm4-1.fna.fbcdn.net/v/t39.30808-6/279857730_121185760547483_2122521174591366320_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=SZ5DEnKDBfwQ7kNvwGpeBSV&_nc_oc=AdnjQYwNi98424lI6LPVNKDizhhfE_E1pcmFkKeTLLcLNcEOjKx5dz_zAB8KxObcQH4&_nc_zt=23&_nc_ht=scontent.fktm4-1.fna&_nc_gid=HxQ6-1adxMgtLhfjph52Dg&oh=00_AfGrkCx0eb2Jsco-mEOg5OUlnF9LZCxxIHHmxM8plVrgGw&oe=680FA0C4' alt='Profile pic' />
          <CircleIcon className='absolute top-0 left-0' sx={{ color: "greenyellow" }} />
        </div>

        <div className='mx-auto mt-5 text-center text-xl font-semibold font-mono'>
          {"Your Name"}
        </div>

        <div className='mx-auto mt-2 text-center text-xl font-mono'>
          {"+977" + "9800000000"}
        </div>

        <div className='mx-auto mt-2 text-center text-xl font-mono'>
          Next Bill Date : {"2082-12-30"}
        </div>
      </div>
    </div>
  );
};

export default Member;