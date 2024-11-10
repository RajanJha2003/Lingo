import Link from 'next/link';
import React from 'react'
import { Button } from './ui/button';
import Image from 'next/image';
import { InfinityIcon } from 'lucide-react';

type UserProgressProps={
    activeCourse:{imageSrc:string;title:string};
    hearts:number;
    points:number;
    hasActiveSubscription:boolean;
}

const UserProgress = ({activeCourse,hearts,points,hasActiveSubscription}:UserProgressProps) => {
  return (
    <div className='flex w-full items-center justify-between gap-x-2'>
        <Link href={"/courses"}>
        <Button variant={"ghost"}>
            <Image src={activeCourse.imageSrc} alt={activeCourse.title} width={32} height={32} />
        </Button>
        </Link>

        <Link href={"/shop"}>
        <Button variant={"ghost"} className='text-orange-500'>
             <Image src={"/points.svg"} height={28} width={28} alt='Points' className='mr-2'/>
             {points}

        </Button>
        </Link>
        <Link href={"/shop"}>
        <Button variant={"ghost"} className='text-rose-500'>
            <Image src={"/heart.svg"} height={22} width={22} alt='Hearts' className='mr-2' />
            {
                hasActiveSubscription ?(
                    <InfinityIcon className='stroke-3 h-4 w-4'/>
                ):(
                    hearts
                )
            }

        </Button>
        </Link>
    </div>
  )
}

export default UserProgress