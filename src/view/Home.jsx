import React from 'react';
import { Grid } from '@mui/material';
import { AdsSection } from '../components/AdsSection';
import { Header } from '../components/Header';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  let navigateTo = useNavigate();
  const handleClick = () => {
    navigateTo('/calculate');
  };
  return (
    <Grid
      container
      className='h-screen bg-fixed p-1 bg-cover'
      style={{
        backgroundImage:
          "url('https://www.expatica.com/app/uploads/sites/8/2019/11/Health-Insurance-Quotes-1920x1080.jpg')"
      }}
    >
      {/* Header */}
      <Grid container className='h-[10%] mb-1'>
        <Grid
          item
          md={12}
          sm={12}
          xs={12}
          className='bg-slate-900 text-slate-200 m-0 flex justify-center align-center rounded-md opacity-90'
        >
          <Header title='BMI Calculator' />
        </Grid>
      </Grid>

      {/* Advertisement section */}
      <Grid container className='h-[90%]'>
        <Grid
          item
          md={3}
          sm={3}
          xs={0}
          className='bg-slate-500 m-0 flex justify-center align-center rounded-md opacity-80'
        >
          <AdsSection />
        </Grid>

        {/* Main content */}
        <Grid item md={6} sm={9} xs={12} className='font-sans font-medium'>
          <Grid container spacing={1} className='pl-1 pr-1'>
            <Grid item md={12} className='font-sans font-medium'>
              <div className='flex flex-col justify-center align-center bg-slate-200 rounded-md aspect-square max-h-[80vh] m-auto mt-[5vh] ml-auto'>
                <h2 className='p-8 text-center tracking-normal text-lg'>
                  <div>Instantly calculate your BMI to be aware of your levels of body fat.</div>
                  <div>Taking care of yourself is taking care of the ones you love!</div>
                </h2>
                <button
                  type='submit'
                  className='bg-green-700 text-slate-200 p-2 w-48 m-auto mb-4 rounded-md uppercase hover:bg-green-800 transition'
                  onClick={handleClick}
                >
                  calculate now
                </button>
              </div>
            </Grid>
            {/* <Grid item md={12} className='font-sans font-medium'>
              <img
                className='shadow-lg rounded-md max-w-[650px] m-auto'
                src='https://www.expatica.com/app/uploads/sites/8/2019/11/Health-Insurance-Quotes-1920x1080.jpg'
                alt='heart image with vital signs'
              />
            </Grid> */}
          </Grid>
        </Grid>

        {/* Advertisement section */}
        <Grid
          item
          md={3}
          sm={0}
          xs={0}
          className='bg-slate-500 m-0 flex justify-center align-center rounded-md opacity-80'
        >
          <AdsSection />
        </Grid>
      </Grid>
    </Grid>
  );
};
