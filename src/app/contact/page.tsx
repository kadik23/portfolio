"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useState, useRef  } from "react";

export default function Contactpage() {
    const [isOpen, setIsOpen] = useState(false);
    const [serviceSelected, setServiceSelected] = useState("Select a service");
    const [formData, setFormData] = useState({
        Firstname: "",
        Lastname: "",
        Email: "",
        Phone: "",
        Service: "",
        Message: "",
    });
    const [message, setMessage] = useState("");
    const toggleMenu = () => setIsOpen(!isOpen);
    const ref = useRef(null);
    const ref2 = useRef(null);
    const isInView = useInView(ref, { once: true });
    const isInView2 = useInView(ref2, { once: true });

    const handleServiceSelection = (serviceName:string) => {
        setServiceSelected(serviceName);
        setFormData({ ...formData, Service: serviceName });
        setIsOpen(false);
    };

    const handleChange = (e:any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e:any) => {
        e.preventDefault();

        const response = await fetch("contact/Api", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
            setMessage("Message sent successfully!");
        } else {
            setMessage(`Error: ${data.message || data.error}`);
        }
    };

    return (
        <div className="flex flex-col gap-16 py-8 px-4 mt-16 ml-4 justify-start items-start lg:flex-row lg:gap-64 lg:px-16">
            <div className="flex flex-col justify-start w-full gap-8 order-1 lg:order-2">
                <div className="flex flex-col gap-4 items-start">
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-green inika-bold text-lg"
                    >
                        Contact me
                    </motion.div>
                    <div className="flex flex-col items-start gap-2 ">
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1.25, delay: 0.2 }}
                            className="flex gap-4"
                        >
                            <Link
                                href={"tel:0798816073"}
                                className="flex items-center justify-center bg-light-gray p-2 rounded-md  cursor-pointer transition-all duration-200 hover:bg-light-gray/75"
                            >
                                <Icon
                                    icon="ic:baseline-phone"
                                    width="32"
                                    height="32"
                                    className="text-green hover:scale-105"
                                />
                            </Link>
                            <div className="flex flex-col items-start gap-0.5">
                                <div className="inika-regular opacity-75">Phone</div>
                                <div className="inika-bold ">+213798816073</div>
                            </div>
                        </motion.div>
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1.5, delay: 0.2 }}
                            className="flex gap-4"
                        >
                            <Link
                                href={"mailto:kadiksalah03@gmail.com"}
                                className="flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-light-gray/75 bg-light-gray p-2 rounded-md"
                            >
                                <Icon
                                    icon="ic:baseline-email"
                                    width="32"
                                    height="32"
                                    className="text-green hover:scale-105"
                                />
                            </Link>
                            <div className="flex flex-col items-start gap-0.5">
                                <div className="inika-regular opacity-75">Email</div>
                                <div className="inika-bold ">kadiksalah03@gmail.com</div>
                            </div>
                        </motion.div>
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1.75, delay: 0.2 }}
                            className="flex gap-4"
                        >
                            <div className="flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-light-gray/75 bg-light-gray p-2 rounded-md">
                                <Icon
                                    icon="mdi:location"
                                    width="32"
                                    height="32"
                                    className="text-green hover:scale-105"
                                />
                            </div>
                            <div className="flex flex-col items-start gap-0.5">
                                <div className="inika-regular opacity-75">Location</div>
                                <div className="inika-bold ">Algerie, Medea</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 items-start">
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 2.25, delay: 0.2 }}
                        className="text-green inika-bold text-lg"
                    >
                        See more projects
                    </motion.div>
                    <div className="flex flex-col items-start gap-2 ">
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 2.5, delay: 0.2 }}
                            className="flex gap-4  "
                        >
                            <Link
                                href={"https://github.com/kadik23"}
                                className="flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-light-gray/75 bg-light-gray p-2 rounded-md"
                            >
                                <Icon
                                    icon="mdi:github"
                                    width="32"
                                    height="32"
                                    className="text-green hover:scale-105"
                                />
                            </Link>
                            <div className="flex flex-col items-start gap-0.5">
                                <div className="inika-regular opacity-75">Github</div>
                                <div className="inika-bold ">kadik23</div>
                            </div>
                        </motion.div>
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 2.75, delay: 0.2 }}
                            className="flex gap-4"
                        >
                            <Link
                                href={"https://dribbble.com/salah23"}
                                className="flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-light-gray/75 bg-light-gray p-2 rounded-md"
                            >
                                <Icon
                                    icon="icon-park-solid:dribble"
                                    width="32"
                                    height="32"
                                    className="text-green hover:scale-105"
                                />
                            </Link>
                            <div className="flex flex-col items-start gap-0.5">
                                <div className="inika-regular opacity-75">Dribble</div>
                                <div className="inika-bold ">salah23</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <motion.div
                ref={ref2}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView2 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.75, delay: 0.2 }}
                className="order-2 lg:order-1 bg-light-gray px-4 py-16 lg:py-6 rounded-lg flex flex-col items-center lg:items-start justify-center"
            >
                <div className="flex flex-col items-center lg:items-start gap-0.5 mb-8">
                    <div className="inika-bold text-green text-2xl">Let’s Work Together</div>
                    <div className="inika-regular text-sm w-3/4 lg:w-auto">
                        Use the form on this page or get in touch by other means.
                    </div>
                </div>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div className="flex flex-col lg:flex-row gap-4">
                        <input
                            type="text"
                            name="Firstname"
                            value={formData.Firstname}
                            onChange={handleChange}
                            className="placeholder:text-opacity-50 px-2 py-1 outline-none focus:ring-2 focus:ring-green/50 rounded-md bg-dark-gray placeholder:text-sm"
                            placeholder="Firstname"
                        />
                        <input
                            type="text"
                            name="Lastname"
                            value={formData.Lastname}
                            onChange={handleChange}
                            className="placeholder:text-opacity-50 px-2 py-1 outline-none focus:ring-2 focus:ring-green/50 rounded-md bg-dark-gray placeholder:text-sm"
                            placeholder="Lastname"
                        />
                    </div>
                    <div className="flex flex-col lg:flex-row gap-4">
                        <input
                            type="email"
                            name="Email"
                            value={formData.Email}
                            onChange={handleChange}
                            className="placeholder:text-opacity-50 px-2 py-1 outline-none focus:ring-2 focus:ring-green/50 rounded-md bg-dark-gray placeholder:text-sm"
                            placeholder="Email"
                        />
                        <input
                            type="tel"
                            name="Phone"
                            value={formData.Phone}
                            onChange={handleChange}
                            className="placeholder:text-opacity-50 px-2 py-1 outline-none focus:ring-2 focus:ring-green/50 rounded-md bg-dark-gray placeholder:text-sm"
                            placeholder="Phone number"
                        />
                    </div>
                    <div className="relative">
                        <motion.div
                            onClick={toggleMenu}
                            className={`flex items-center justify-between ${isOpen ? 'ring-2 ring-green/50' : ''} cursor-pointer px-2 py-1 rounded-md bg-dark-gray `}
                        >
                            <span className={`${serviceSelected === "Select a service" ? 'text-white/50' : ''}`}>{serviceSelected}</span>
                            <Icon icon="mdi:chevron-down" width="24" height="24" />
                        </motion.div>
                        {isOpen && (
                            <motion.ul
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-full left-0 w-full bg-dark-gray shadow rounded-md overflow-hidden mt-1 z-10"
                            >
                                <li
                                    onClick={() => handleServiceSelection("Web Application")}
                                    className="hover:bg-green hover:text-dark-gray px-2 py-1 cursor-pointer"
                                >
                                    <button type="button">Web Application</button>
                                </li>
                                <li
                                    onClick={() => handleServiceSelection("Ui Ux")}
                                    className="hover:bg-green hover:text-dark-gray px-2 py-1 cursor-pointer"
                                >
                                    <button type="button">Ui Ux</button>
                                </li>
                                <li
                                    onClick={() => handleServiceSelection("Mobile Application")}
                                    className="hover:bg-green hover:text-dark-gray px-2 py-1 cursor-pointer"
                                >
                                    <button type="button">Mobile Application</button>
                                </li>
                            </motion.ul>
                        )}
                    </div>
                    <textarea
                        name="Message"
                        value={formData.Message}
                        onChange={handleChange}
                        className="px-2 py-1 rounded-md placeholder:text-opacity-50 outline-none focus:ring-2 focus:ring-green/50 bg-dark-gray placeholder:text-sm"
                        cols={30}
                        rows={3}
                        placeholder="Type your message here.."
                    />
                    <button type="submit" className="mt-2 bg-green hover:opacity-75 active:scale-105 duration-300 transition-all text-dark-gray py-1 px-4 rounded-lg inika-regular">
                        Send message
                    </button>
                    {message && <p>{message}</p>}
                </form>
            </motion.div>
        </div>
    );
}
