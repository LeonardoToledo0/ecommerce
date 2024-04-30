import React from "react";
import { motion } from "framer-motion";
import {
  MenuItemNav,
  MenuItemNavLink,
  MenuLinkDiv,
  MotionDiv,
  MenuNav,
  MenuLink,
  Image,
} from "@/styles/StylesNavbar-Menu";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <MenuItemNav onMouseEnter={() => setActive(item)} className="relative ">
      <MenuItemNavLink>{item}</MenuItemNavLink>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <MenuLinkDiv>
              <MotionDiv>{children}</MotionDiv>
            </MenuLinkDiv>
          )}
        </motion.div>
      )}
    </MenuItemNav>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return <MenuNav onMouseLeave={() => setActive(null)}>{children}</MenuNav>;
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <MenuLink href={href}>
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </MenuLink>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return <MenuLink {...rest}>{children}</MenuLink>;
};
