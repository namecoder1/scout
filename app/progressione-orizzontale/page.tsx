'use client'
import { useState } from 'react';
import { ProgressionCard } from '@/components/blocks/card';
import data from '@/data/po.json';
import { XIcon } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Tipo per i dati grezzi
export type RawHorizontalType = {
  id: number;
  title: string;
  category: string;
  tasks: string[];
  image: string;
  color: string;
  border: string;
};

// Tipo finale per il componente
export type HorizontalPostType = {
  id: string;
  title: string;
  category: string;
  tasks: string[];
  image: string;
  color: "green" | "yellow";
  border: "green" | "red" | "yellow" | "blue";
};

// Dati per i filtri del bordo
const borderButtons = [
  { key: "green", label: "Corporeità", border: 'border-green-700 hover:border-green-800', hover: 'hover:bg-[#3fa535] hover:border-green-800 hover:text-white', active: 'bg-[#3fa535] text-white' },
  { key: "red", label: "Impegno Civile", border: 'border-red-700 hover:border-red-800', hover: 'hover:bg-[#cd1719]/90 hover:border-red-500 hover:text-white', active: 'bg-[#cd1719] text-white' },
  { key: "yellow", label: "Creatività", border: 'border-yellow-700 hover:border-yellow-800', hover: 'hover:bg-[#fed061] hover:border-yellow-800', active: 'bg-[#fed061]' },
  { key: "blue", label: "Carattere", border: 'border-blue-800 hover:border-blue-950', hover: 'hover:bg-[#283583] hover:border-blue-950 hover:text-white', active: 'bg-[#283583] text-white' },
];

// Dati per i filtri dello sfondo
const backgroundButtons = [
  { key: "green", label: "Specialità Scout", color: "bg-[#007632]", border: 'border-green-800', hover: 'hover:bg-[#007632]/80 hover:border-green-900 hover:text-white', active: 'bg-[#007632] text-white' },
  { key: "yellow", label: "Specialità Personali", color: "bg-[#f6e500]", border: 'border-yellow-600', hover: 'hover:bg-[#f6e500]/70 hover:border-yellow-700', active: 'bg-[#f6e500]' },
];

const HorizontalProgressionPage = () => {
  const [borderFilter, setBorderFilter] = useState<string | null>(null);
  const [backgroundFilter, setBackgroundFilter] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const posts: HorizontalPostType[] = data.map((post: RawHorizontalType) => {
    const validBorders = ["green", "red", "yellow", "blue"] as const;
    const validColors = ["green", "yellow"] as const;

    return {
      id: post.id.toString(),
      title: post.title,
      category: post.category,
      tasks: post.tasks,
      image: post.image,
      color: validColors.includes(post.color as typeof validColors[number])
        ? (post.color as "green" | "yellow")
        : "green",
      border: validBorders.includes(post.border as typeof validBorders[number])
        ? (post.border as "green" | "red" | "yellow" | "blue")
        : "green",
    };
  });

  const filteredPosts = posts.filter(post => {
    const matchesBorder = borderFilter ? post.border === borderFilter : true;
    const matchesBackground = backgroundFilter ? post.color === backgroundFilter : true;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesBorder && matchesBackground && matchesSearch;
  });

  return (
    <section className='my-10 mx-5'>
      <Button asChild className='mb-4'>
        <Link href='/'>Torna Indietro</Link>
      </Button>
      <h1 className='font-semibold text-3xl mb-4'>Progressione Orizzontale</h1>
      <input
        type="text"
        placeholder="Cerca..."
        name='search'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 border rounded w-full"
      />
      <div className='grid grid-cols-1 md:flex md:justify-start md:items-center md:gap-x-5'>
        <div className='mb-4 md:mb-0 grid grid-cols-2 gap-x-3 md:flex '>
          {backgroundButtons.map(button => (
            <button
              key={button.key}
              onClick={() => setBackgroundFilter(backgroundFilter === button.key ? null : button.key)}
              className={`px-3 py-1 rounded-xl border text-black ${button.hover} ${button.border} ${
                backgroundFilter === button.key ? `${button.active}` : "opacity-100"
              } `}
            >
              {button.label} {backgroundFilter === button.key ? (<XIcon className='inline-block mb-0.5' size={15} />) : null}
            </button>
          ))}
        </div>
        <Separator className='mb-4 md:hidden' />
        <div className='grid grid-cols-2 grid-rows-2 gap-y-4 gap-x-3 md:flex'>
          {borderButtons.map(button => (
            <button
              key={button.key}
              onClick={() => setBorderFilter(borderFilter === button.key ? null : button.key)}
              className={`px-3 py-1 rounded-xl border text-black ${button.hover} ${button.border} ${
                borderFilter === button.key ? `${button.active}` : "opacity-100"
              }`}
            >
              {button.label} {borderFilter === button.key ? (<XIcon className='inline-block mb-0.5' size={15} />) : null}
            </button>
          ))}
        </div>
      </div>
      <Separator className='my-4' />
      <button
        onClick={() => {
          setBorderFilter(null);
          setBackgroundFilter(null);
          setSearchTerm('');
        }}
        className='px-3 py-1.5 border border-red-500 hover:bg-red-200 hover:border-red-500 rounded-xl text-black w-full md:w-fit'
      >
        Resetta filtri
      </button>
      <div className='my-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {filteredPosts.length === 0 && (
          <p className='text-center text-gray-500'>Nessun risultato trovato</p>
        )}
        {filteredPosts.map((post: HorizontalPostType) => (
          <ProgressionCard key={post.id} props={post} />
        ))}
      </div>
    </section>
  );
};

export default HorizontalProgressionPage;