"use client";

import Image from "next/image";
import { UserProps } from "../types";
import logo from "/logo.png";
import UserButton from "@/modules/authentication/components/user-button";
import SearchBar from "./serach-bar";
import InviteMember from "./invite-member";

interface Props {
  user: UserProps;
}

const Header = ({ user }: Props) => {
  return (
    <header className=" h-16 grid grid-cols-5 grid-rows-1 gap-2 overflow-x-auto overflow-hidden p-2 border">
      <div className="col-span-2 flex items-center justify-between  hover:cursor-pointer hover:opacity-80 ">
        <img className="h-24  object-contain" src={"/logo.png"} alt="logo" />
      </div>
      <div className="col-span-1 flex items-center justify-between space-x-2">
        <div
          className="border-animation relative p-[px] rounded flex-1 self-stretch overflow-hidden flex items-center justify-between "
          aria-hidden="true"
        >
          <SearchBar />
        </div>
      </div>
      
      <div className="col-span-2 flex items-center justify-end space-x-2 hover:cursor-pointer mr-4 gap-2">
        <InviteMember/>
        <UserButton user={user} size="sm" />
      </div>
    </header>
  );
};

export default Header;
