import Footer from "./Footer"
import Header from "./Header"

//컴포넌트를 넣을 수 있도록 property로 컴포넌트를 받도록
const Layout = () => {
    return (
        <div>
            <Header/>
            {/* <main>
                {props.childern}
            </main> */}
            <Footer/>
        </div>
    )
}

export default Layout