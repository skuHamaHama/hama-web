import styled from "styled-components";

const Footer = () => {
    return (
        <footer>
            <Container>
                <Start/>
                <Wrapper>
                    <Logo src="./img/footer/logo.svg"/>
                    <ul>
                        <p><strong>페이지</strong></p>
                        <li><a href="#">로그인/회원가입</a></li>
                        <li><a href="#">관심상품</a></li>
                        <li><a href="#">마이페이지</a></li>
                        <li><a href="#">사용한 쿠폰</a></li>
                    </ul>
                    <ul>
                        <p><strong>이메일</strong></p>
                        <li>happyyj01@naver.com</li>
                    </ul>
                </Wrapper>
                <End/>
            </Container>
        </footer>
    )
}

const Container = styled.div`
    margin-top: auto;  
    height: 200px; 
`;

const Start = styled.div`
    border: 1px solid #000000;
`;

const End = styled.div`
    border: 15px solid #358CC1;
`;

const Logo = styled.img`
    width: 184px;
    height: 35px;
    margin: 90px 0px 90px 70px;
`;

const Wrapper = styled.div`
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 30px 50px;
    & ul{
        font-size: 14px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        list-style: none;
        &::before {
            content: '|';
            width: 1px;
            height: 16px;
            background-color: #dbdbdb;
            position: absolute;
            top: 2px;
            left: 3px;
        }
        
    }
    & li {
        font-size: 14px;
        padding: 10px 7px 0 10px;
        position: relative; 
        &:first-child:before{
            width: 0;
        }
    }

    & a {
        text-decoration: none;
        color: #231815;
    }

    & p {
        font-size: 19px;
    }  
`;


export default Footer