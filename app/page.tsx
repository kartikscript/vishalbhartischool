import ImageSlider from "@/components/shared/ImageSlider";
import TextSlider from "@/components/shared/TextSlider";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="bg-primary-500 min-h-screen flex flex-col items-center gap-10 pb-10 ">
        <h1 className="mt-6 text-5xl inline-block font-bold border-b-2 border-primary-100 py-3 px-6">Welcome to Vishal Bharti School !</h1>
        <p className="text-primary-100 uppercase text-lg font-medium">where learning meets excellence ! Join us in creating bright futures</p>
        <ImageSlider/>
        <div className="w-[50%] mt-6 p-8 bg-slate-200 rounded-2xl text-primary-700 flex flex-col items-center gap-3">
          <h1 className="font-serif text-4xl font-medium ">Admissions are now open !</h1>
            <p className="text-sm font-medium text-center"> Don&apos;t miss the chance to be part of our vibrant community.<br/> Apply today and start your journey with us!</p>
          <Link href="/" className="relative group animate-pulse hover:animate-none flex items-center gap-2 bg-primary-600 text-slate-100 font-bold mt-2 px-6 py-3 text-lg tracking-wide rounded-3xl hover:text-primary hover:bg-slate-100  transition-all delay-75 duration-300">
            Apply Now !
            <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 scale-0  transition-all duration-300 text-primary origin-left group-hover:scale-125 group-hover:-right-2"/>
          </Link>
        </div>
      </main>
      <TextSlider/>
      <section className="flex flex-col items-center gap-6 bg-slate-100 px-14 py-14 text-gray-950">
        <h1 className="text-7xl font-mono font-semibold">Why Us ?</h1>
        <p className="font-medium px-4 py-6 border-x-2 border-gray-800 text-gray-700 w-[50%] text-lg">
        Choosing the right school is one of the most important decisions for your child&apos;s future. At Vishal Bharti School, we stand out for our commitment to excellence, innovation, and care. Here&apos;s why families trust us:
        </p>
        <div className="grid gap-4 grid-cols-1 w-[60%] mt-16 py-10 relative">
          <div className="absolute top-0 -translate-x-1/2 left-1/2 w-[3px] h-full bg-primary"/>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 size-6 rounded-full bg-primary"/>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 size-6 rounded-full bg-primary"/>
          <div className="bg-primary-500  text-slate-50 rounded-2xl space-y-4 p-6 w-72 justify-self-start">
            <h2 className="text-2xl  font-semibold">Holistic Learning Experience</h2>
            <p className="text-slate-200 text-sm">We focus on academics, arts, sports, and character development to nurture well-rounded individuals.</p>
          </div>
          <div className="bg-primary-500  text-slate-50 rounded-2xl space-y-4 p-6 w-72 justify-self-end">
            <h2 className="text-2xl  font-semibold">Experienced Educators</h2>
            <p className="text-slate-200 text-sm"> Our passionate and skilled teachers inspire and guide students to achieve their full potential.</p>
          </div>
          <div className="bg-primary-500  text-slate-50 rounded-2xl space-y-4 p-6 w-72 justify-self-start">
            <h2 className="text-2xl  font-semibold">State-of-the-Art Facilities</h2>
            <p className="text-slate-200 text-sm">From modern classrooms to advanced labs and sports complexes, we offer an environment where students thrive.</p>
          </div>
          <div className="bg-primary-500  text-slate-50 rounded-2xl space-y-4 p-6 w-72 justify-self-end">
            <h2 className="text-2xl  font-semibold">Inclusive and Supportive Community</h2>
            <p className="text-slate-200 text-sm">Every child feels valued and supported, fostering a culture of respect and collaboration.</p>
          </div>
          <div className="bg-primary-500  text-slate-50 rounded-2xl space-y-4 p-6 w-72 justify-self-start">
            <h2 className="text-2xl  font-semibold">Proven Success</h2>
            <p className="text-slate-200 text-sm">Our students consistently excel in academics, competitions, and life beyond school.</p>
          </div>
        </div>
      </section>
      <footer className="text-slate-100 bg-primary-500 text-lg font-semibold py-20 space-y-6 *:text-center">
        <h1 className="text-4xl font-bold ">Vishal Bharti Senior Secondary School</h1>
        <p className="">Vishal Bharti Senior Secondary School, Parwana Road, Pundrik Vihar, Pitam Pura, New Delhi, Delhi, India</p>
        <p >9354937851/54</p>
        <p className="text-base mt-2 font-mono text-primary-200">Copyright © 2024 Vishal Bharti Senior Secondary School - All Rights Reserved.</p>
      </footer>
    </div>
  );
}
