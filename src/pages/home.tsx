import React from "react";
import Card, { Character } from "../components/Card";
import { title } from "../lib/static";

const Home = (): React.JSX.Element => {
  return (
    <main className="flex flex-col min-h-screen justify-center">
      <section className="w-fit mx-auto">
        <h1 className="underline underline-offset-8 text-[32px] font-medium my-6 transition hover:scale-110 hover:cursor-pointer tracking-wide text-gray-600">
          {title}
        </h1>
      </section>
      <section className="p-4 xl:w-[1024px] mx-auto flex flex-col">
        <Card />
      </section>
    </main>
  );
};

export default Home;

export const Detail = (): React.JSX.Element => {

  return (
    <main className="flex flex-col min-h-screen justify-center">
      <section className="mx-auto w-1/2">
        <Character />
      </section>
    </main>
  );
};
