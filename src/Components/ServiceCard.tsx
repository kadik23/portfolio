import { Icon } from "@iconify/react/dist/iconify.js";

export default function ServiceCard({ service, detail, icon }:{service:string, detail:string, icon:string}) {
    return (
        <div className='bg-light-gray p-4 rounded-lg flex flex-col items-center gap-2 h-auto w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-[32%]'>
            <Icon icon={icon} width="36" height="36" className='text-green' />
            <div className='text-xl inika-bold xl:text-2xl text-center'>{service}</div>
            <div className='opacity-80 inika-regular text-center'>{detail}</div>
        </div>
    )
}