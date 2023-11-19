import { PlusCircle } from 'phosphor-react';

export function SearchArea() {
    return (
        <form className='mt-[-28px] flex gap-[0.5rem] w-full'>
            <input
                placeholder='Adicione uma nova tarefa'
                className='border-gray-700 border-[1px] bg-gray-400 rounded-[8px] h-[54px] p-[16px] w-full'
            />
            <button type='submit' className='flex items-center justify-center h-[54px] px-[16px] bg-blue rounded-[8px]'>
                <span className='text-white'>Criar</span>
                <PlusCircle size={16} color='#fff' className='ml-[0.5rem]' />
            </button>
        </form>
    )
}