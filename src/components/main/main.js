import { Link } from "react-router-dom";
import * as S from "./main.style";

export const MainPage = (props) => {
    const logo = `${process.env.PUBLIC_URL}/logo.png`;

    return(
        <div>
            <S.MainCenterblock>
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
            </S.MainCenterblock>
            <Link to="/course/1"><button>1</button></Link>
            <Link to="/course/2"><button>2</button></Link>
            <Link to="/course/3"><button>3</button></Link>
            <Link to="/course/4"><button>4</button></Link>
            <Link to="/course/5"><button>5</button></Link>
        </div>
    )
}

