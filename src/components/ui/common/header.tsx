import Link from "next/link";
import Image from "next/image";
import React, { FC } from "react";
import {
  FaFacebookF,
  FaGooglePlus,
  FaPhoneAlt,
  FaSkype,
  FaYoutube
} from "react-icons/fa";

const headerNavLinks = [
  { href: '/', title: 'Home' },
  // { href: '/tags', title: 'Tags' },
  { href: '/products', title: 'Products' },
  { href: '/technology', title: 'Công nghệ' },
  { href: '/news', title: 'News' },
  { href: '/media', title: 'Media' },
  { href: '/contact', title: 'Liên hệ' },
  // { href: 'mailto:nghiango262@gmail.com', title: 'Contact' },
];

const contactInfo = {
  address: "Đ/C: 93/81/14,LE VAN THO, PHUONG 9, GO VAP, TP.HCM",
  members: [
    {
      name: "Minh",
      phone: "09853985983",
      email: "minhphan@gmail.com",
    },
    {
      name: "Minh",
      phone: "09853985983",
      email: "minhphan@gmail.com",
    },
  ],
  email: "info@kakaka.com"
}

interface Props {
  hidden: boolean;
  positionY: number;
}

const KHeader: FC<Props> = ({ hidden, positionY }) => {
  const [hasMounted, setHasMounted] = React.useState(false);
  const [isOpen, setOpen] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  const handleClick = () => {
    setOpen(!isOpen);
  };

  const bgHeader = ` dark:bg-black bg-gray-300 opacity-70`;
  const classname = `${positionY >= -150
    ? 'hidden transition duration-500 transform bg-black opacity-70'
    : (hidden
      ? 'transition duration-500 ease-in-out shadow-lg'
      : 'transition duration-500 ease-in-out transform -translate-y-full') +
    ' ' +
    bgHeader
    } `;

  const NavTemp = () => (
    <div className="container mx-auto">
      <div className="flex items-center justify-between py-6 text-white">
        {/* Logo and name */}
        <Link href="/">
          <a className="flex items-center space-x-4">
            <div className="relative w-10 h-10 cursor-pointer">
              <Image
                src="/images/logo.png"
                alt="Ngo NGHIA Headshot"
                layout="fill"
                objectFit="cover"
                className="rounded-full p-8"
              />
            </div>
            <h1 className="hidden text-2xl font-bold md:block">TÂN PHÚ PHÁT</h1>
          </a>
        </Link>

        {/* View Mobile NAV - Icon menu */}
        <button type="button" className=" lg:hidden" onClick={handleClick}>
          <svg
            className="w-6 h-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            {isOpen && (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
            )}
            {!isOpen && (
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            )}
          </svg>
        </button>

        {/* View DeskTOP NAV - List ITEMS */}
        <nav className="hidden lg:block">
          <div className="flex flex-row items-center justify-end space-x-16">
            {headerNavLinks.map((nav) => (
              <Link href={nav.href} key={nav.title}>
                <a className="text-base font-semibold md:text-lg link-underline">{nav.title}</a>
              </Link>
            ))}
            {/*
              <ThemeToggle />
              */}
          </div>
        </nav>
      </div>
    </div>

  )

  return (
    <>
      <header>
        <div id="Header" className="bg-green-200 flex flex-col justify-center ">
          <HeaderInfo />
          <div className="flex flex-col px-8 py-4 text-white">
            <NavTemp />
          </div>
        </div>
        {/** Floating View show when scroll not on top */}


      </header>
      <div className={`top-0 left-0 z-40 w-full bg-white ${classname}`}>
        <NavTemp />
        {/* View Mobile NAV - List ITEMS VIEW NGOAI*/}

      </div>
      {isOpen && (
        <nav className={`z-50 flex items-center lg:hidden `}>
          <div className="flex flex-col items-center w-full py-12 space-y-8 bg-white shadow-md">
            {headerNavLinks.map((nav) => (
              <Link href={nav.href} key={nav.title} className="">
                <a onClick={() => setOpen(false)}
                  className="w-4/5 py-4 text-lg font-bold text-center bg-white hover:bg-red-300">
                  {nav.title}
                </a>
              </Link>
            ))}
            {/* 

        <ThemeToggle />
*/}

          </div>
        </nav>
      )}
    </>
  );
}

const HeaderInfo = () => {
  const { address, members, email } = contactInfo;
  return (
    <div className="flex px-4 py-2 bg-[#2C2C2C]" >
      <div className="container mx-auto flex flex-1 items-center justify-between">
        <div className="flex items-center gap-8">
          <span className="text-[#F79727] font-semibold lg:text-center">{address}</span>
          <ul className="hidden lg:flex gap-8 text-white font-extralight text-sm">
            {
              members.map((member, idx) => <li className="" key={idx}>
                <Item
                  name={member.name}
                  phone={member.phone}
                />
              </li>)
            }
            <li>{email}</li>
          </ul>
        </div>
        <ul className="social__icons hidden lg:flex text-white">
          <li className="__skype h-5 w-5">
            <Link href={'https://www.facebook.com'} target={"_blank"} title="Skype">
              <a>
                <FaSkype />
              </a>
            </Link>
          </li>
          <li className="__facebook">
            <Link href={'https://www.facebook.com'} target={"_blank"} title="Skype">
              <a>
                <FaFacebookF />
              </a>
            </Link>
          </li>
          <li className="__googleplus">

            <Link href={'https://www.facebook.com'} target={"_blank"} title="Skype">
              <a>
                <FaGooglePlus />
              </a>
            </Link>
          </li>
          <li className="__youtube">
            <Link href={'https://www.facebook.com'} target={"_blank"} title="Skype">
              <a>
                <FaYoutube />
              </a>
            </Link>
          </li>
        </ul>

      </div>
    </div >
  );
}

const SocialIcon = ({

}) => {

  return (
    <Link href={''}>
      <a>

      </a>
    </Link>
  );
}

const Item = ({ name, phone, email }: {
  name: string,
  phone: string,
  email?: string
}) => {

  return (<Link href={"/"}>
    <a className="flex items-center gap-2">
      <FaPhoneAlt />
      <span>{phone}</span>
      <span>{' ('}{name}{')'}</span>
    </a>
  </Link>);
}

export default KHeader
