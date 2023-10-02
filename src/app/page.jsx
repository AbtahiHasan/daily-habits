"use client"
import cn from '@/utils/cn'
import generateData from '@/utils/generateData'
import dayjs from 'dayjs'
import { useState } from 'react'


export default function Home() {
  // console.log(dates)
  const currentDate = dayjs();
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);
  const dates = generateData(today.month(), today.year())
  console.log(dates)
  console.log("today", today.format())
  return (
    <main className='max-w-[1280px] mx-auto'>
      <header className='flex justify-between mt-2'>
        <p className='font-bold text-xl text-green-600'>DailyHabits</p>
        <button className='text-[#8e19f6] border border-[#8e19f6] px-4 py-2'>Upgrade to premium</button>
      </header>
      <section className='flex border mt-10'>
        <div className='flex items-center border-r-2'>
          <h2 className='text-2xl px-5'>Habits</h2>
        </div>
        <div className={`flex justify-between`}>
          {generateData(today.month(), today.year()).map(
            ({ date, currentMonth }, index) => {
              return (

                <h1 key={index}
                  className={`
                      ${currentMonth ? "" : "text-gray-400"}
                      ${today.date() === date.date()
                      ? "bg-red-600 text-white"
                      : ""}
                      ${selectDate
                      .toDate()
                      .toDateString() ===
                      date.toDate().toDateString()
                      ? "bg-black text-white"
                      : ""}
                      "rounded-full   hover:bg-black hover:text-white transition-all cursor-pointer h-full flex flex-col justify-between"
                    `}
                  onClick={() => {
                    setSelectDate(date);
                  }}
                >
                  <p className='border px-[6px] py-3'>{days[date.format("d")]}</p>
                  <p className='border px-[6px] py-3'>{date.date()}</p>
                </h1>

              );
            }
          )}
        </div>
        <div className='flex justify-center items-center border-l-2'>
          <h2 className='text-2xl px-5'>Goal</h2>
        </div>
        <div className='flex justify-center items-center border-l-2'>
          <h2 className='text-2xl px-5'>Achieved</h2>
        </div>
      </section>
    </main>
  )
}
