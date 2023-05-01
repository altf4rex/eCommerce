import React from 'react';
import './footer.css';

const Footer = () => {
    const footerContent = [
        {header:"Get in touch", content: ["About Us", "Careers", "Press Releases", "Blog"]},
        {header:"Connections", content: ["Facebook", "Twitter", "Instagram", "Youtube", "LinkedIn"]},
        {header:"Earnings", content: ["Become an Affiliate", "Advertise your product", "Sell on Market"]},
        {header:"Account", content: ["Your account", "Returns Centre", "100 % purchase protection", "Chat with us", "Help"]}
    ];
    const tags = ["Beans",
        "Carrots",
        "Apples",
        "Garlic",
        "Mushrooms",
        "Tomatoes",
        "Chilli peppers",
        "Broccoli",
        "Watermelons",
        "Oranges",
        "Bananas",
        "Grapes",
        "Cherries",
        "Meat",
        "Seo tag",
        "Fish",
        "Tag",
        "Fresh food",
        "Lemons"];
  return (
    <footer className='footer'>
        <div className='footer-links'>
            {footerContent.map((c) => 
            <div className='footer-links__block' key={c.header}>
                <h4 className='footer-links__header'>{c.header}</h4>
                {c.content.map((e) => 
                <a className='footer-links__link'href="#" key={e}>{e}</a>
                )}
            </div>
            )
            }           
        </div>
        <div className='footer-tags'>
            <h4 className='footer-tags__header'>Product tags</h4>
            <div className='footer-tags-container'>
            {
            tags.map((t) =>
                <a href="#" className='footer-tags-link' key={t}>{t}</a> 
            )
            }
           </div>
        </div>
        <p className='footer-copyright'>Copyright © 2020 petrbilek.com</p>
    </footer>
  )
}

export default Footer