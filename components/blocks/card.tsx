'use client'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { HorizontalPostType } from "@/app/progressione-orizzontale/page"
import { Card, CardFooter, CardHeader, CardTitle } from "../ui/card"

export function ProgressionCard({ props } : { props: HorizontalPostType }) {
  const { title, image } = props

	return (
		<Card className="flex flex-col items-center justify-between">
			<CardHeader className="mx-auto w-fit items-center">
				<img alt="foto" src={image} width={80} height={80} />
			</CardHeader>
			<CardFooter className="flex flex-col items-center justify-center gap-y-4">
				<CardTitle className="text-center">{title}</CardTitle>
				<InfoBox props={props} />
			</CardFooter>
		</Card>
	)
}

function InfoBox({ props } : { props: HorizontalPostType }) {
  const { title, category, tasks, image, color } = props
  const [open, setOpen] = useState(false)

  if (typeof window !== "undefined" && window.innerWidth >= 768) {
    // Rendering for desktop
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild className='border w-full h-full flex flex-col gap-1 p-3 rounded-lg items-center justify-center group'>
          <Button variant="outline" size='sm'>Guarda</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[475px]">
          <DialogHeader>
            <div className="flex items-center justify-start gap-x-3 mb-3">
              <img src={image} alt="Immagine della capacità" width={65} height={65} className="rounded-xl" />
              <div className="flex flex-col items-start justify-start">
                <DialogTitle className="text-3xl">{title}</DialogTitle>
              </div>
            </div>
            <DialogDescription className="flex items-center justify-start gap-x-2">
              <span className={`px-2 py-1 rounded-lg ${
                color === "green" ? "bg-[#007632] text-white"
                : "bg-[#f6e500] text-black"}`}>
                {color === "green" ? "Specialità Scout" : "Specialità Personali"}
              </span>
              <span className={`text-white px-2 py-1 rounded-lg ${
                category === "Impegno Civile" ? "bg-[#cd1719]"
                 : category === "Creatività" ? "bg-[#fed061]"
                  : category === "Corporeità" ? "bg-[#3fa535]"
                    : "bg-[#283583]"
              }`}>{category}</span>
            </DialogDescription>
            <ul className="pt-2">
              {tasks.map((task, index) => {
                return (
                  <li key={index} className="flex items-start gap-2 mb-2 leading-6">
                    <span className="text-gray-500">{index + 1}.</span>
                    <span>{task}</span>
                  </li>
                )
              })}
              <li className="flex items-start gap-2 mb-2">
                <span className="text-gray-500">4.</span>
                <span className="font-semibold">Prova da definire con lo Staff di Reparto</span>
              </li>
            </ul>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    )
  }

  // Rendering for mobile or smaller screens
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild className='border w-full h-full flex flex-col gap-1 p-3 rounded-lg items-center justify-center group'>
        <Button variant="outline" size='sm'>Guarda</Button>
      </DrawerTrigger>
      <DrawerContent aria-describedby="drawer-description">
        <DrawerHeader className="text-left">
          <div className="flex items-center justify-between mb-4">
            <DrawerTitle className="flex flex-col items-start justify-start">
              <span className="text-3xl">{title}</span>
              <div className="flex items-center justify-start gap-x-2 font-normal text-sm mt-2">
                <span className={`px-2 py-1 rounded-lg ${
                  color === "green" ? "bg-[#007632] text-white"
                  : "bg-[#f6e500] text-black"}`}>
                  {color === "green" ? "Specialità Scout" : "Specialità Personali"}
                </span>
                <span className={`px-2 py-1 rounded-lg ${
                  category === "Impegno Civile" ? "bg-[#cd1719] text-white"
                  : category === "Creatività" ? "bg-[#fed061] text-black"
                    : category === "Corporeità" ? "bg-[#3fa535] text-white"
                      : "bg-[#283583] text-white"
                }`}>{category}</span>
              </div>
              </DrawerTitle>
            <img src={image} alt="Immagine della capacità" width={65} height={65} className="rounded-xl" />
          </div>
        </DrawerHeader>
        <div className="px-4 pb-2" id="drawer-description">
          <ul>
            {tasks.map((task, index) => {
              return (
                <li key={index} className="flex items-start gap-2 mb-2 leading-6">
                  <span className="text-gray-500">{index + 1}.</span>
                  <span>{task}</span>
                </li>
              )
            })}
            <li className="flex items-start gap-2 mb-2">
              <span className="text-gray-500">4.</span>
              <span className="font-semibold">Prova da definire con lo Staff di Reparto</span>
            </li>
          </ul>
        </div>
      </DrawerContent>
    </Drawer>
  )
}