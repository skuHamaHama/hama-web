const Header = () => {
    return (
        <header>
            <div 
                style = {{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                }}
            >
                <img
                    style={{ width: "214px", height: "40px", margin: "30px"}}
                    alt="Logo_IMG"
                    src="./img/header/logo.svg"
                />
            </div>
        </header>
    )
}

// const Logo = styled.div`
//     background-image: url('./img/header/logo.svg');
//     background-repeat: no-repeat;
//     position: absolute;
//     top: 5%;
//     left: 2%;
//     width: 214px;
//     height: 40px;
// `;

// const Input = styled.div`
//     background-image: url('./img/header/input.svg');
//     position: absolute;
//     top: 6%;
//     left: 33%;
//     width: 520px;
//     height: 41px;
// `;

// const SearchIcon = styled.div`
//     background-image: url('./img/header/searchIcon.svg');
//     position: absolute;
//     top: 6.5%;
//     left: 73%;
//     width: 40px;
//     height: 38px;
// `;

export default Header