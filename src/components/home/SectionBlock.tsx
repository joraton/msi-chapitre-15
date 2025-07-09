import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface SectionBlockProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  index: number;
}

export default function SectionBlock({
  title,
  description,
  href,
  icon: Icon,
  color,
  bgColor,
  index
}: SectionBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg md:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4 md:p-6"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-3 md:gap-4 flex-1">
          {/* Icon Circle */}
          <div className={`${bgColor} rounded-full p-2.5 md:p-3 flex-shrink-0`}>
            <Icon className={`h-5 w-5 md:h-6 md:w-6 ${color}`} />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2 leading-tight">
              {title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="flex-shrink-0">
          <Link
            href={href}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 md:px-6 md:py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 block text-center text-sm md:text-base"
          >
            Commencer
          </Link>
        </div>
      </div>
    </motion.div>
  );
}