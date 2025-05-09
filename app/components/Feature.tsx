import { IconType } from 'react-icons';

interface FeatureProps {
  title: string;
  description: string;
  icon: IconType;
  iconColor?: string;
}

export const Feature = ({ title, description, icon: Icon, iconColor = 'text-white' }: FeatureProps) => {
  return (
    <div className="flex flex-col items-start p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
      <div className="bg-gray-700/70 p-4 rounded-xl mb-4 border border-white/5">
        <Icon className={`text-3xl ${iconColor}`} />
      </div>
      <h3 className="text-xl font-semibold text-gray-50 mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};