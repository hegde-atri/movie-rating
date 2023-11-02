"use client";

import { Dosis } from "next/font/google";
import { motion } from "framer-motion";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { TbEdit, TbMessage2Check, TbStarsFilled } from "react-icons/tb";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const dosis = Dosis({
  subsets: ["latin"],
});

export default function Home() {
  const session = useSession();

  if (session.data?.user) {
    redirect("/dashboard");
  }

  return (
    <div className="mt-12">
      <div className="text-center">
        <motion.h1
          className={
            dosis.className + " text-5xl font-bold text-gray-300 md:text-6xl"
          }
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Movie Ratings
        </motion.h1>
        <motion.p
          className="mt-5 text-xl italic text-gray-400 md:text-2xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          brought to you by the best critic
        </motion.p>
      </div>
      <div className="mt-28 flex flex-col space-y-5 md:flex-row md:space-x-8 md:space-y-0">
        <HeroCard
          icon={TbMessage2Check}
          title="Comments"
          description="Read my comments."
          delay={0}
        />
        <HeroCard
          icon={TbStarsFilled}
          title="Ratings"
          description="Get a concise rating."
          delay={0.2}
        />
        <HeroCard
          icon={TbEdit}
          title="Regularly (not) updated"
          description="Always has the latest reviews!?"
          delay={0.4}
        />
      </div>
      <div className="mt-28 flex flex-col justify-center">
        <motion.p
          className="text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.5 }}
        >
          Why are you still waiting. Start browsing now!
        </motion.p>
        <motion.div
          className="mt-5 flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.7 }}
        >
          <Button
            className="rounded-md bg-gray-900 hover:bg-slate-800"
            onClick={() => signIn("github")}
          >
            Login
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

const HeroCard = (props: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  delay: number;
}) => {
  return (
    <div className="w-full">
      <motion.div
        className=""
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 + props.delay }}
      >
        <Card className="bg-gray-900 hover:scale-105 hover:bg-slate-900">
          <CardHeader>
            <div className="flex grow flex-col">
              <props.icon className="mx-auto my-2" size={35} />
              <h2 className="text-center text-xl text-slate-200 md:text-2xl">
                {props.title}
              </h2>
            </div>
          </CardHeader>
          <CardBody>
            <p className="text-center">{props.description}</p>
          </CardBody>
        </Card>
      </motion.div>
    </div>
  );
};
