import { PlusCircle } from 'phosphor-react';

export function SearchArea() {
    return (
        <form className='mt-[-28px] flex gap-[0.5rem] w-full'>
            <input
                placeholder='Adicione uma nova tarefa'
                className='border-b-gray-700 bg-gray-400 rounded-[8px] h-[54px] p-[16px] w-full'
            />
            <button type='submit' className='flex items-center justify-center p-[16px] bg-blue rounded-[8px]'>
                <span className='text-white'>Criar</span>
                <PlusCircle size={16} color='#fff' className='ml-[0.5rem]' />
            </button>
        </form>
    )
}