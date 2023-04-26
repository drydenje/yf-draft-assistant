import Link from "next/link";
import Button from "@/components/Button";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div class="flex flex-row justify-between">
      <nav>
        <ul class="flex flex-row items-center list-none">
          {[
            ["Home", "/"],
            ["Franchise", "/franchise"],
            ["Leagues", "/league"],
            ["Players", "/player"],
            ["About", "/about"],
          ].map(([title, url]) => (
            <li class="text-xl mx-2 my-2 hover:underline">
              <Link href={url}>{title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Button />
      {/* <h2
        className={`text-4xl sm:text-6xl md:text-9xl text-center text-gray-800`}
        // className={`${roboto.className} text-4xl sm:text-6xl md:text-9xl text-center text-gray-800`}
      >
        LIGHT MODE
      </h2>
      <h2
        className={`text-4xl sm:text-6xl md:text-9xl text-center text-white `}
        // className={`${roboto.className} text-4xl sm:text-6xl md:text-9xl text-center text-white `}
      >
        DARK MODE
      </h2> */}
    </div>
  );
};

export default NavBar;
