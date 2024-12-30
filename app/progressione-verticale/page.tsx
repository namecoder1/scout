export type RawVerticalType = {
  id: number;
  name: string;
  image: string;
  direzioni: {
    name: string;
    description: string;
    color: string; // Cambiato da "blue" | "yellow" | "red" a string
    sfide: VerticalSfidaType[];
  }[];
};

type VerticalSfidaType = {
  description: string;
  text: string;
}

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button";


import data from '@/data/pv.json'
import Link from "next/link";

const VerticalProgressionPage = () => {
  const posts: RawVerticalType[] = data;
  console.log(posts[0].image)
  
  return (
    <section className="p-4">
       <Button asChild className='mb-4'>
        <Link href='/'>Torna Indietro</Link>
      </Button>
      <div className="mb-5">
        <h1 className="font-semibold text-3xl mb-3">Progressione Verticale</h1>
        <p className="leading-7 mb-1">
          <span className='font-semibold'>SCEGLI</span> da 3 a 6 Sfide, cercando di muoverti in tutte le direzioni del Sentiero e di seguire i
          tuoi interessi, ma anche quello in cui vorresti migliorare!
        </p>
        <p className="leading-7 mb-1">
          <span className='font-semibold'>CONCORDA</span> le Sfide con il tuo CR, trascrivile nella tua cartina Azimut, potrai rivederle in
          qualsiasi momento e sarai pronto/a per l’avventura!
        </p>
        <p className="leading-7">
          <span className='font-semibold'>METTITI IN GIOCO!</span> ogni volta che la Sfida ti chiede di raccogliere, raccontare,
          documentare, intervistare (ecc!), scegli pure la forma che preferisci: foto, video, diario scritto,
          cartelloni, disegni, non c’è limite alla creatività!
        </p>
      </div>

      <Accordion type="single" collapsible className="my-20">
      {posts.map((post) => (
        <AccordionItem value={`item-${post.id}`} key={post.id} className="border-none">
          <AccordionTrigger className="flex items-center justify-between p-4 bg-gray-100 rounded-lg mb-4">
            <div className="flex items-center justify-start gap-x-4">
              <img src={post.image} alt={post.name} width={50} height={50} />
              <h2 className="text-2xl font-bold">{post.name}</h2>
            </div>
          </AccordionTrigger>
          {post.direzioni.map((direzione, idx) => (
          <AccordionContent key={idx}>
            <div className={`py-10 sm:py-20 rounded-lg ${
              direzione.color === 'blue' ? 'bg-blue-200' 
              : direzione.color === 'yellow' ? 'bg-yellow-200'
              : 'bg-red-200'
            }`} >
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                  <div className="col-span-2">
                    <h2 className={`text-pretty text-4xl font-semibold tracking-tight sm:text-5xl ${
                      direzione.color === 'blue' ? 'text-blue-600' 
                      : direzione.color === 'yellow' ? 'text-yellow-600'
                      : 'text-red-600'
                    }`}>
                      {direzione.name}
                    </h2>
                    <p className="mt-3 text-base">{direzione.description}</p>
                  </div>
                  <dl className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
                    {direzione.sfide.map((sfida, sIdx) => (
                      <div key={sIdx} className={`p-3 rounded-lg ${
                        direzione.color === 'blue' ? 'bg-blue-300/70' 
                        : direzione.color === 'yellow' ? 'bg-yellow-300/70'
                        : 'bg-red-300/70'
                      }`}>
                        <dd className="mt-1 text-gray-900 font-bold text-sm">{sfida.description}</dd>
                        <dd className="mt-2 text-base/7 text-gray-800">{sfida.text}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </AccordionContent>
          ))}
        </AccordionItem>
      ))}
      </Accordion>
    </section>
  );
};

export default VerticalProgressionPage;
