import Link from "next/link";
import { useRouter } from "next/router";

function ActiveLink({ children, href, activeClass, normalClass }) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <Link href={href}>
      <a
        onClick={handleClick}
        className={router.pathname === href ? activeClass : normalClass}
      >
        {children}
      </a>
    </Link>
  );
}

export default ActiveLink;
