import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Progressione Personale | Branca Esploratori ed Esploratrici"
}

export default function Home() {
  return (
    <section className="flex flex-col gap-y-4 mx-4 mt-4">
      <div>
        <h1 className="heading-xl">Progressione Personale</h1>
        <p className="leading-7 mt-3">
          La Progressione Personale in Reparto è divisa in due differenti percorsi, 
          denominati, <span className="font-bold">Progressione Orizzontale</span> (PO) e <span className="font-bold">Progressione Verticale</span> (PV). 
          Questi percorsi, che ogni Esploratore segue individualmente, prevedono 
          l’acquisizione delle competenze previste dal presente regolamento ed il
          rilascio di brevetti e distintivi al raggiungimento delle 
          tracce di PV e al conseguimento delle Specialità (PO).
        </p>
      </div>
      <div className="my-5">
        <h2 className="font-semibold text-2xl">Progressione Orizzontale</h2>
        <p className="leading-7 mt-4">
          La <span className="font-bold">Progressione Orizzontale</span> (PO) rappresenta lo sviluppo attivo e curioso 
          delle proprie conoscenze e abilità, coltivate in armonia con le proprie inclinazioni e passioni. 
          Nella Branca E, la PO si struttura attraverso una serie di specialità suddivise in 
          due ambiti principali: <span className="font-bold">tecniche scout</span> (specialità a sfondo verde) e <span className="font-bold">tecniche legate
          a hobby e passioni personali dell’Esploratore</span>, non necessariamente connesse alla 
           vita scout (specialità a sfondo giallo).
        </p>
        <p className="leading-7 mt-4">
          Ogni specialità si inserisce in una delle seguenti quattro aree tratte dal Programma
          Educativo Globale (PEG), identificate dal colore del bordo:
        </p>
        <ul className="list-disc ml-5 flex flex-col gap-y-1.5 my-2">
          <li>Impegno Civile (bordo rosso)</li>
          <li>Carattere (bordo blu)</li>
          <li>Corporeità (bordo verde)</li>
          <li>Creatività (bordo giallo)</li>
        </ul>
        <p className="leading-7 mt-4">
          Una volta superate le prove previste per una specifica specialità, 
          l’Esploratore riceve, durante una cerimonia, il relativo brevetto e distintivo.
        </p>
      </div>
      <div>
        <h2 className="font-semibold text-2xl">Progressione Verticale</h2>
        <p className="leading-7 mt-3">
          La <span className="font-bold">Progressione Verticale</span> (PV) è un percorso che aiuta ragazze e ragazzi a capire come stanno crescendo
           e a prendersi cura del loro sviluppo personale, rendendolo parte di un <span className="font-bold">progetto che costruiscono passo dopo passo</span>.
        </p>
        <p className="leading-7 mt-3">
          Si tratta di imparare a sviluppare competenze utili per <span className="font-bold">crescere in modo consapevole e coerente</span>. 
          Questo percorso si vive attraverso esperienze in Pattuglia e Reparto, che richiedono impegno e nuove abilità per essere affrontate al meglio.
        </p>
        <p className="leading-7 mt-3">
          La Progressione Verticale è un <span className="font-bold">percorso fatto su misura dagli esploratori e dalle esploratrici stessi</span>: loro lo progettano, 
          lo realizzano e poi lo verificano. Per questo motivo, viene rappresentato simbolicamente come un <span className="font-bold">Sentiero</span>, 
          suddiviso in tappe intermedie chiamate <span className="font-bold">Tracce</span>, che si raggiungono superando delle <span className="font-bold">Sfide</span>.
        </p>
      </div>
      <div className="flex justify-center flex-col sm:flex-row items-center gap-3 my-10">
        <Button asChild>
          <Link href='/progressione-orizzontale'>Progressione Orizzontale</Link>
        </Button>
        <Button asChild>
          <Link href='/progressione-verticale'>Progressione Verticale</Link>
        </Button>
      </div>
    </section>
  );
}
