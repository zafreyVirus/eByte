"use client"
import styles from "./links.module.css"
import NavLink from "./navLink/navLink";
import { useState } from "react";

const links =[
    {
        title: "Homepage",
        path: "/"
    },
    {
        title: "About",
        path: "/about"
    },
    {
        title: "Contact",
        path: "/contact"
    },
    {
        title: "Blog",
        path: "/blog"
    },
];

function Links() {

  const [open, setOpen] = useState(false);

const session = true;
const isAdmin = true;

    return (
      <div className={styles.container}>
    <div className={styles.links}>
      {links.map((link =>(
      <NavLink item={link} key={link.title}/>
      )))}
      {
        session ? (
          <>
          {isAdmin && <NavLink item={{title: "Admin", path:"/admin"}}/>}
          <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{title: "Login", path: "/login"}}/>
        )
      }
    </div>

    <button className={styles.menuButton} onClick={()=> setOpen((prev)=> !prev)}>
      { open ? <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg> : 
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
      }
    
    </button>
    {
      open && (
        <div className={styles.mobileLinks}>
          {
            links.map((link)=> (
              <NavLink item={link} key={link.title}/>
            ))
          }
        </div>
      )
    }
    </div>
  )
}

export default Links
