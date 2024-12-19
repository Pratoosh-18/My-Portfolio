"use client";
import { BackgroundBeams } from "../ui/background-beams";

export function Hero() {
  return (
    <div className="group h-[40rem] w-[100vw] group-w-[100vw] rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="flex justify-center items-center gap-10 mx-auto p-4 ">
        <div className="h-[300px] w-[300px] bg-white rounded-lg">
          
          
          
        </div>
        <div>
          <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Join the waitlist
          </h1>
          <p></p>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            Welcome to MailJet, the best transactional email service on the web.
            We provide reliable, scalable, and customizable email solutions for
            your business. Whether you&apos;re sending order confirmations,
            password reset emails, or promotional campaigns, MailJet has got you
            covered.
          </p>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
