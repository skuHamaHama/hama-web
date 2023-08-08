// import styled from "styled-components"
import Footer from "./Footer"
import Header from "./Header"

//컴포넌트를 넣을 수 있도록 property로 컴포넌트를 받도록
const Layout = (props: {
    children: React.ReactNode
}) => {
    return (
        <div style={{
            paddingTop: "120px"
        }}>
            <Header/>
            <main style={{
                minHeight: "calc(100vh - 150px)"
            }}>
                {props.children}
            </main>
            <Footer/>
        </div>
    )
}


export default Layout