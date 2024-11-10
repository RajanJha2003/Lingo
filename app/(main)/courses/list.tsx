
"use client";

import { courses, userProgress } from '@/db/schema';
import React from 'react'
import Card from './card';

type Props={
    courses:typeof courses.$inferSelect[];
    activeCourseId?:typeof userProgress.$inferSelect.activeCourseId;

}

const List = ({courses,activeCourseId}:Props) => {
  return (
    <div className="grid grid-cols-2 gap-4 pt-6 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))]">
    {courses.map((course) => (
      <Card
        key={course.id}
        id={course.id}
        title={course.title}
        imageSrc={course.imageSrc}

        onClick={()=>{}}
        disabled={false}
        
        isActive={course.id === activeCourseId}
      />
    ))}
  </div>
  )
}

export default List