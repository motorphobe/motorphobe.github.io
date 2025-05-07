import { IconType } from 'react-icons';

interface FeatureBoxProps {
  title: string;
  description: string;
  icon: IconType;
}

export const Feature = ({ title, description, icon: Icon }: FeatureBoxProps) => {
  return (
    <div className="flex flex-col items-start p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
      <div className="bg-gray-700 p-4 rounded-xl mb-4">
        <Icon className="text-blue-500 text-2xl w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold text-gray-50 mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};