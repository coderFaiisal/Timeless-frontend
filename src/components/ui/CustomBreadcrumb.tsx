import { Breadcrumbs } from "@material-tailwind/react";
import Link from "next/link";
import { HiHome } from "react-icons/hi";

const CustomBreadcrumb = ({
  items,
}: {
  items: {
    label: string;
    link: string;
  }[];
}) => {
  const breadCrumbItems = [
    {
      title: (
        <Link href="/">
          <HiHome />
        </Link>
      ),
    },
    ...items.map((item) => {
      return {
        title: item.link ? (
          <Link href={item.link}>{item.label}</Link>
        ) : (
          <span>{item.label}</span>
        ),
      };
    }),
  ];

  return (
    <Breadcrumbs>
      {breadCrumbItems.map((item, idx) => (
        <p key={idx}>{item.title}</p>
      ))}
    </Breadcrumbs>
  );
};

export default CustomBreadcrumb;
