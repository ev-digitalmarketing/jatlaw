'use client';
import dynamic from 'next/dynamic';
const Scene = dynamic(() => import('./Scene'), { ssr: false, loading: () => <div className="h-full" /> });
export default function Hero3D() {
  return <div className="h-[380px] w-full md:h-[560px]"><Scene /></div>;
}
