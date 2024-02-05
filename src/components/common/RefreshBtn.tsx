"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import { HiRefresh } from 'react-icons/hi';

export const RefreshBtn = () => {
    {/* button refresh */ }
    const router = useRouter();
    return (
        <button
            className="bg-primary-500 text-white rounded-md px-3 py-1 ml-auto hover:bg-primary-600 transition-colors duration-300 ease-in-out"
            onClick={() => {
                //   GetForms();
                router.refresh();
            }}
            title='Refresh forms list'
        >
            <HiRefresh className="h-5 w-5" />
        </button>
    )
}
