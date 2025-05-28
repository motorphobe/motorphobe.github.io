import { IconType } from "react-icons";

interface FeatureProps {
  icon: IconType;
  title: string;
  description: string;
  color: string;
}

export default function Feature({ icon: Icon, title, description, color }: FeatureProps) {
  return (
    <div className="flex flex-col items-start text-left p-6 rounded-2xl border border-zinc-800 bg-black/20">
      <div className={`p-3 rounded-xl bg-opacity-10 mb-4 border-2 ${color} border-opacity-30`}>
        <Icon className={`w-6 h-6 ${color}`} />
      </div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-sm text-zinc-400">{description}</p>
    </div>
  );
}
