import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaGooglePlus,
  FaSkype,
  FaYoutube
} from "react-icons/fa";

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

const Header = () => {
  const { address, members, email } = contactInfo;
  return (
    <div className="flex px-8 py-4 bg-blue-200" >
      <div className="__action-bar">
        <span>{address}</span>
        <ul>
          {
            members.map((member, idx) => <li key={idx}>
              <Item
                name={member.name}
                phone={member.phone}
              />
            </li>)
          }
          <li>{email}</li>
        </ul>
        <ul className="social__icons bg-slate-500 flex">
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

  return (<div>

    <a>
      <span>{name}</span>
      <span>{phone}</span>
    </a>
  </div>);
}

export default Header
