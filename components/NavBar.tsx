import Link from "next/link";
import Logo from "./../public/favicon.ico";
import Image from "next/image";
const NavBar = () => {
  return (
    <div className="navbar">
      <Image src={Logo} alt="Logo" width={75} height={75} />
      <Link passHref href="/">
        <button className="ui inverted orange button">Home</button>
      </Link>
      <Link passHref href="/posts/new">
        <button className="ui inverted orange button">Add Post</button>
      </Link>
    </div>
  );
};

export default NavBar;
