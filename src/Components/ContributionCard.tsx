import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { motion } from "framer-motion";

interface ContributionCardProps {
    contribution: Contribution;
    index: number;
}

function ContributionCard({ contribution, index }: ContributionCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
            }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-green/30 group"
        >
            <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green transition-colors duration-300">
                        {contribution.name}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {contribution.description}
                    </p>
                </div>
                <Link 
                    href={contribution.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 p-2 bg-green/20 hover:bg-green/30 rounded-lg transition-all duration-300 hover:scale-110"
                >
                    <Icon 
                        icon="mdi:github" 
                        width="24" 
                        height="24" 
                        className="text-green" 
                    />
                </Link>
            </div>
            
            <div className="flex flex-wrap gap-2">
                {contribution.languages.map((language, langIndex) => (
                    <motion.span
                        key={langIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: langIndex * 0.05 }}
                        className="px-3 py-1 bg-green/20 text-green text-xs font-medium rounded-full border border-green/30 hover:bg-green/30 transition-all duration-300"
                    >
                        {language}
                    </motion.span>
                ))}
            </div>
        </motion.div>
    );
}

export default ContributionCard; 