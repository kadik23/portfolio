import ServiceCard from "@/Components/ServiceCard";
import { Icon } from '@iconify/react/dist/iconify.js'

export default function servicespage(){
    const services = [
        {service: 'Web Developer', icon: 'material-symbols-light:developer-mode-tv-outline', detail: 'As a skilled web developer, I specialize in crafting custom CRUD applications, robust web platforms, and implementing projects with medium complexity.'},
        {service: 'UI UX Designer', icon: 'gg:ui-kit', detail: 'As an experienced UI/UX designer, I craft captivating landing pages, portfolios, and small-scale projects with visually appealing designs.'},
        {service: 'App Mobile', icon: 'uiw:mobile', detail: 'I create intuitive and engaging native applications platforms, specializing in developing small-scale projects with user-friendly interfaces.'}
    ];

    return (
        <>
        <div className="flex flex-col gap-4 mt-24 ml-4 mx-4">
            <div className="inika-bold text-xl xl:text-2xl flex gap-2">
                My <div className="text-green">services</div>
            </div>
            <div className="inika-bold text-3xl xl:text-5xl ">What I Do</div>
        </div>
        <div className="flex flex-wrap gap-4 mt-16 justify-center mx-4">
            {services.map((service, index) => (
                <ServiceCard key={index} service={service.service} icon={service.icon} detail={service.detail} />
            ))}
        </div>
    </>
    );
}


