import Link from "next/link";
import React from "react";

const data = [
  {
    id: "shd",
    name: "Services",
    total: 6,
    link: `/cms/services?isAdmin=true&adminToken=${process.env.NEXT_PUBLIC_ADMIN_ID}`
  },
  {
    id: "shdw",
    name: "Projects",
    total: 10,
    link: `/cms/projects?isAdmin=true&adminToken=${process.env.NEXT_PUBLIC_ADMIN_ID}`
  },
  {
    id: "shdq",
    name: "Reviews",
    total: 12,
    link: `/cms/testimonials?isAdmin=true&adminToken=${process.env.NEXT_PUBLIC_ADMIN_ID}`
  },
  {
    id: "ashd",
    name: "Skills",
    total: "many",
    link: `/cms/skills?isAdmin=true&adminToken=${process.env.NEXT_PUBLIC_ADMIN_ID}`
  },
]

function CMSHome() {
  return (
    <div className="w-full max-h-fit py-[30px] h-full">
      <h1>Welcome, Admin!</h1>
      <p>Be carefull while looking into the dashboard components.</p>

      <div className="wrapper flex !justify-start w-full flex-wrap gap-[30px] mt-[40px]">
        {data.map(({id, name, total}: any) => (
        <article key={id} className="w-[300px] p-[20px] flex flex-col gap-[10px] rounded border shadow">
          <h3 className="text-2xl font-bold">{name}</h3>
          <h4 className="text-xl font-medium">Totel: {total}</h4>
          <Link href={"/"} className="link">{name}</Link>
        </article>
        ))}
      </div>
    </div>
  );
}

export default CMSHome;
