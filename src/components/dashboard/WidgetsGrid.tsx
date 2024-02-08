'use client'

import { IoCartOutline } from 'react-icons/io5';
import { SimpleWidget } from '../';
import { useAppSelector } from '@/store';

export const WidgetsGrid = () => {

    const inCart = useAppSelector(state => state.counter.count);

  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
          <SimpleWidget 
            title={`${inCart}`}
            subTitle="Número de prods"
            label="Contador"
            icon={ <IoCartOutline size={70} className="text-blue-600" />}
            href="/dashboard/counter"
            />
      </div>
  )
}
