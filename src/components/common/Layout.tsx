// import styled from "styled-components"
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

//컴포넌트를 넣을 수 있도록 property로 컴포넌트를 받도록
export const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div
      style={
        {
          // paddingTop: "120px"
        }
      }
    >
      <Header />
      <main
        style={{
          minHeight: "calc(100vh - 150px)",
        }}
      >
        {props.children}
      </main>
      <Footer />
    </div>
  );
};
