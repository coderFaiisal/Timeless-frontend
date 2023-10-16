"use client";
import {
  GiBigDiamondRing,
  GiJewelCrown,
  GiPerfumeBottle,
} from "react-icons/gi";
import {
  PiShoppingCartThin,
  PiGiftThin,
  PiHeartStraightLight,
} from "react-icons/pi";
import { BsSearch } from "react-icons/bs";
import React from "react";
import logo from "../../../public/logo.png";
import {
  Dialog,
  DialogBody,
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Input,
} from "@material-tailwind/react";
import { HiChevronDown } from "react-icons/hi2";
import {
  BsFillCpuFill,
  BsFillMotherboardFill,
  BsBuildingAdd,
} from "react-icons/bs";
import { IoWatchOutline } from "react-icons/io5";
import {
  AiOutlineUser,
  AiOutlineSetting,
  AiOutlinePoweroff,
} from "react-icons/ai";
import { CgSmartphoneRam } from "react-icons/cg";
import { ImPower } from "react-icons/im";
import { FiMonitor } from "react-icons/fi";
import { MdOutlineDevicesOther } from "react-icons/md";
import { LuHardDrive } from "react-icons/lu";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

const colors = {
  blue: "bg-blue-50 text-blue-500",
  orange: "bg-orange-50 text-orange-500",
  green: "bg-green-50 text-green-500",
  purple: "bg-purple-50 text-purple-500",
  teal: "bg-teal-50 text-teal-500",
  cyan: "bg-cyan-50 text-cyan-500",
  pink: "bg-pink-50 text-pink-500",
  red: "bg-red-50 text-red-500",
};

const navListMenuItems = [
  {
    color: "blue",
    name: "Processor",
    link: "/categories/Processor",
    icon: BsFillCpuFill,
    description: "Learn about our story and our mission statement.",
  },
  {
    color: "pink",
    name: "Monitor",
    link: "/categories/Monitor",
    icon: FiMonitor,
    description: "Learn about our story and our mission statement.",
  },
  {
    color: "green",
    name: "Motherboard",
    link: "/categories/Motherboard",
    icon: BsFillMotherboardFill,
    description: "Learn about our story and our mission statement.",
  },
  {
    color: "teal",
    name: "Graphics Card",
    link: "/categories/Graphics Card",
    icon: LuHardDrive,
    description: "Learn about our story and our mission statement.",
  },
  {
    color: "orange",
    name: "RAM",
    link: "/categories/RAM",
    icon: CgSmartphoneRam,
    description: "Learn about our story and our mission statement.",
  },
  {
    color: "cyan",
    name: "Storage Device",
    link: "/categories/Storage Device",
    icon: BsBuildingAdd,
    description: "Learn about our story and our mission statement.",
  },
  {
    color: "red",
    name: "Power Supply Unit",
    link: "/categories/Power Supply Unit",
    icon: ImPower,
    description: "Learn about our story and our mission statement.",
  },
  {
    color: "purple",
    name: "Others",
    link: "/categories/Others",
    icon: MdOutlineDevicesOther,
    description: "Learn about our story and our mission statement.",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map((list) => (
    <div key={list?.name}>
      <Link href={list?.link}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div
            className={`rounded-lg p-5  ${
              colors[list?.color as keyof typeof colors]
            }`}
          >
            {React.createElement(list?.icon, {
              className: "h-6 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm"
            >
              {list?.name}
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              {list?.description}
            </Typography>
          </div>
        </MenuItem>
      </Link>
    </div>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-normal">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <GiBigDiamondRing className="h-[18px] w-[18px]" />
              LOVE & ENGAGEMENT
              <HiChevronDown
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <HiChevronDown
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-4 gap-y-2">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Link href="/">
        <ListItem className="flex items-center gap-2 py-2 pr-4 font-normal text-sm blue-gray">
          <GiJewelCrown className="h-[18px] w-[18px]" />
          JEWELLERY
        </ListItem>
      </Link>

      <NavListMenu />

      <Link href="/products">
        <ListItem className="flex items-center gap-2 py-2 pr-4 font-normal text-sm blue-gray">
          <IoWatchOutline className="h-[18px] w-[18px]" />
          WATCHES
        </ListItem>
      </Link>
      <Link href="/products">
        <ListItem className="flex items-center gap-2 py-2 pr-4 font-normal text-sm blue-gray">
          <PiGiftThin className="h-[18px] w-[18px]" />
          GIFTS
        </ListItem>
      </Link>

      <Link href="/marketPlace">
        <ListItem className="flex items-center gap-2 py-2 pr-4 font-normal text-sm blue-gray">
          <GiPerfumeBottle className="h-[18px] w-[18px]" />
          FRAGRANCE
        </ListItem>
      </Link>
    </List>
  );
}

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const { data: session } = useSession();

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="rounded-full p-0 m-0 hover:opacity-50"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="logged in user"
            className="border border-gray-900 p-0.5"
            src={session?.user?.image!}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        <MenuItem className={`flex items-center gap-2 rounded`}>
          {React.createElement(AiOutlineUser, {
            className: `h-4 w-4`,
            strokeWidth: 2,
          })}
          <Typography as="span" variant="small" className="font-normal">
            My Profile
          </Typography>
        </MenuItem>

        <MenuItem className={`flex items-center gap-2 rounded`}>
          {React.createElement(AiOutlineSetting, {
            className: `h-4 w-4`,
            strokeWidth: 2,
          })}
          <Typography as="span" variant="small" className="font-normal">
            Edit Profile
          </Typography>
        </MenuItem>

        <MenuItem
          onClick={() => signOut({ callbackUrl: "http://localhost:3000" })}
          className={`flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10`}
        >
          {React.createElement(AiOutlinePoweroff, {
            className: `h-4 w-4`,
            strokeWidth: 2,
          })}
          <Typography as="span" variant="small" className="font-normal">
            Sign Out
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export function Header() {
  const [openNav, setOpenNav] = React.useState(false);
  const { data: session } = useSession();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto px-4 py-2 rounded-none w-full shadow-none">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            width={80}
            className="ml-2 md:ml-6 lg:ml-10"
          />
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex items-center">
          {/*  */}

          <div className="ml-auto flex gap-1 md:mr-4">
            <IconButton variant="text" color="blue-gray">
              <BsSearch onClick={handleOpen} className="h-6 w-6" />
              <Dialog size="xs" open={open} handler={handleOpen}>
                <DialogBody>
                  <div className="relative flex w-full gap-2">
                    <Input
                      type="search"
                      label="Type here.."
                      className="pr-20"
                      containerProps={{
                        className: "w-full",
                      }}
                      crossOrigin={undefined}
                    />
                    <Button
                      size="sm"
                      className="!absolute right-1 top-1 rounded"
                    >
                      Search
                    </Button>
                  </div>
                </DialogBody>
              </Dialog>
            </IconButton>
            <IconButton variant="text" color="blue-gray">
              <PiHeartStraightLight className="h-5 w-5" />
            </IconButton>
            <IconButton variant="text" color="blue-gray">
              <PiShoppingCartThin className="h-5 w-5" />
            </IconButton>
          </div>
        </div>
        <div className="flex lg:hidden">
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <RxCross1 className="h-6 w-6" strokeWidth={2} />
            ) : (
              <RxHamburgerMenu className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
          {session?.user?.email && <ProfileMenu />}
        </div>
      </div>
      <Collapse open={openNav}>
        <NavList />
        {/*  */}

        <div className="ml-auto flex gap-1 md:mr-4">
          <IconButton variant="text" color="blue-gray">
            <BsSearch className="h-5 w-5" />
          </IconButton>
          <IconButton variant="text" color="blue-gray">
            <PiHeartStraightLight className="h-5 w-5" />
          </IconButton>
          <IconButton variant="text" color="blue-gray">
            <PiShoppingCartThin className="h-5 w-5" />
          </IconButton>
        </div>
      </Collapse>
    </Navbar>
  );
}

export default Header;
