import { useEffect, useRef } from 'react';

interface RepositoryProps {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  index: number;
}

export default function Repository(props: RepositoryProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-show');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <a
      ref={cardRef}
      href={props.html_url}
      className="flex flex-col w-full h-full p-6 border rounded-2xl border-zinc-800 bg-black/20 hover:border-[#3D90D7]/40 transition-colors group section-fade"
    >
      <h3 className="text-xl font-bold group-hover:text-[#3D90D7] mb-3">
        {props.name}
      </h3>
      <p className="text-zinc-400 text-sm flex-grow mb-4">
        {props.description || "No description available"}
      </p>
      <div className="flex gap-4 text-sm text-zinc-500">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 256 256">
            <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
          </svg>
          {props.stargazers_count}
        </div>
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 256 256">
            <path d="M104,64A32,32,0,1,0,64,95v66a32,32,0,1,0,16,0V95A32.06,32.06,0,0,0,104,64ZM88,192a16,16,0,1,1-16-16A16,16,0,0,1,88,192Zm144,0a32,32,0,1,1-40-31V123.88A39.71,39.71,0,0,0,180.28,95.6L152,67.31V96a8,8,0,0,1-16,0V48a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H163.31L191.6,84.28a55.67,55.67,0,0,1,16.4,39.6V161A32.06,32.06,0,0,1,232,192Z"></path>
          </svg>
          {props.forks_count}
        </div>
        {props.language && (
          <>
            <div className="text-zinc-600">•</div>
            <div>{props.language}</div>
          </>
        )}
      </div>
    </a>
  );
}
