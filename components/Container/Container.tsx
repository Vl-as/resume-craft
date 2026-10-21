import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

function Container({ children }: ContainerProps) {
  return <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">{children}</div>;
}

export default Container;
