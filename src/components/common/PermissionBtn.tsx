"use client"
import React, { useState } from 'react'
import { Switch } from '../ui/switch';
import { ChangePermissionForm } from '@/actions/form';
import { useRouter } from 'next/navigation';

interface Props {
    id: number;
    typePermission: string;
}

export const PermissionBtn = ({ id, typePermission }: Props) => {
    const router = useRouter()
    const [checked, setChecked] = useState(false)

    const handlePermission = async () => {
        try {
            await ChangePermissionForm(id, typePermission === 'public' ? 'private' : 'public')
            router.refresh()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='flex'>
            <span className='text-xs text-primary-foreground'>{typePermission === "public" ? "público:" : "privado"}</span>
            <Switch
                id={`${ id }`}
                checked={checked}
                onCheckedChange={() => setChecked(!checked)}
                onClick={handlePermission}
            />
        </div>
    )
}
