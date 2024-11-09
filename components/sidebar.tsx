import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type SidebarProps={
  className?:string
}

const Sidebar = ({className}:SidebarProps) => {
  return (
    <div
      className={cn(
        "left-0 top-0 flex h-full flex-col border-r-2 px-4 lg:fixed lg:w-[256px]",
        className
      )}
    >
       <Link href="/learn">
        <div className="flex items-center gap-x-3 pb-7 pl-4 pt-8">
          <Image src="/mascot.svg" alt="Mascot" height={40} width={40} />

          <h1 className="text-2xl font-extrabold tracking-wide text-green-600">
            Lingo
          </h1>
        </div>
      </Link>
    </div>
  )
}

export default Sidebar