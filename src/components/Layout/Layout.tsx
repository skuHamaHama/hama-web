import styled from "styled-components"
import Footer from "./Footer"
import Header from "./Header"

//컴포넌트를 넣을 수 있도록 property로 컴포넌트를 받도록
const Layout = (props: {
    children: React.ReactNode
}) => {
    return (
        <div style={{
            paddingTop: "80px"
        }}>
            <Header/>
            <Main>
                {props.children}
            </Main>
            <Footer/>
        </div>
    )
}

const Main = styled.main`
    min-height: clac(100vh-180px);
`;

export default Layout