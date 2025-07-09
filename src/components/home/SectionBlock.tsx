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
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-4 flex-1">
          {/* Icon Circle */}
          <div className={`${bgColor} rounded-full p-3 flex-shrink-0`}>
            <Icon className={`h-6 w-6 ${color}`} />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-semibold text-gray-900 mb-1">
              {title}
            </h3>
            <p className="text-gray-600 text-sm">
              {description}
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="flex-shrink-0">
          <Link
            href={href}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 block text-center w-full sm:w-auto"
          >
            Commencer
          </Link>
        </div>
      </div>
    </motion.div>
  );
}