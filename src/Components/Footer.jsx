import React from "react";
import FOOTER_LINKS from "../assets/footer_links";
import { Link } from "react-router-dom";
import FOOTER_CONTACT_INFO from "../assets/footer_contact";
import SOCIALS from "../assets/socials";

const Footer = () => {
  return (
    <footer className="flex justify-center pt-16 pb-24 bg-gray-200 mt-7">
      <div className="flex flex-col w-full gap-14 p-5 ">
        <div className="flex flex-col items-start justify-center  gap-[10%] md:flex-row" >
          <Link to="/" className="font-bold text-xl mb-10">Shoppee</Link>
       
        <div className="flex flex-wrap gap-8 sm:justify-between md:flex-1 ">
        {
            FOOTER_LINKS.map((col)=>(
                <FooterColumn title={col.title} key={col.title}>
                    <ul className="flex flex-col gap-4 text-gray-500 ">
                        {col.links.map((link)=>(
                            <Link to="/" key={link}>{link}</Link>
                        ))}
                    </ul>

                </FooterColumn>
            ))
        }
        <div className="flex flex-col gap-5">
            <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link)=>(
                    <Link to="/" key={link.label} className="text-gray-500 flex gap-3 md:flex-col lg:flex-row">
                        <p>{link.label}:</p><p>{link.value}</p>
                    </Link>
                ))}

            </FooterColumn>
        </div>
        <div className="flex">
            <FooterColumn>
                <ul className="flex gap-4">
                {SOCIALS.links.map((link)=>(
                    <Link to="/" key={link}><img src={link} alt="socialIcon" height={22} width={22} /></Link>
                ))}

                </ul>
            </FooterColumn>
        </div>
        </div>
        </div>
        <div className="border-t-2 ">
            <p className="text-center text-gray-500 pt-7">2024 shoppee | All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
const FooterColumn=({title,children})=>{
    return(
        <div className="flex flex-col gap-5">
            <h4 className="font-bold whitespace-nowrap">{title}</h4>
            {children}
        </div>
    )
}

export default Footer;
