import { Header, Footer, Nav, LeftSide } from "../common";

interface ScreenProps {
  children: React.ReactNode;
  header?: true | React.ReactNode;
  nav?: true | React.ReactNode;
  side?: true | React.ReactNode;
  footer?: true | React.ReactNode;
  fullSize?: boolean;
}

export function Screen({ children, header, nav, side, footer }: ScreenProps) {
  return (
    <div style={{ height: "100%" }}>
      {header && typeof header === "boolean" ? <Header /> : header}
      {nav && typeof header === "boolean" ? <Nav /> : nav}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {side && typeof side === "boolean" ? <LeftSide /> : side}
        {children}
      </div>
      {footer && typeof footer === "boolean" ? <Footer /> : footer}
    </div>
  );
}
