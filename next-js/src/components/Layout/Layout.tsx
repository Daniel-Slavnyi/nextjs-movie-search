import { useEffect,ReactNode, useState } from "react";
import Header from "../Header/Header";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [titleOfsearch, setTitleOfsearch] = useState<string>("");
  const [movies, setMovies] = useState<any[]>([]);
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
