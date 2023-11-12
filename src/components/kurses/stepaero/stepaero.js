import { Link } from "react-router-dom";
import * as S from "./stepaero.style";
import sprite from "../../../img/sprite.svg";

export const PageCourses = () => {
  const logo = `${process.env.PUBLIC_URL}/logowhite.png`;

  return (
    <>
      <S.MainCenterblock>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </S.MainCenterblock>
      <S.TextImg>
        <S.Text>Степ-аэробика</S.Text>
        <svg
          id="Image"
          width="1160"
          height="310"
          viewBox="0 0 1160 310"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M734.5 204.862C734.5 182.77 752.409 164.862 774.5 164.862C796.592 164.862 814.5 182.77 814.5 204.862V274.862C814.5 296.953 796.592 314.862 774.5 314.862C752.409 314.862 734.5 296.953 734.5 274.862V204.862Z"
            fill="#AD61FF"
          />
          <path
            d="M930.669 13.7282C941.694 -6.11955 966.721 -13.2723 986.568 -2.24781C1006.42 8.77663 1013.57 33.8035 1002.54 53.6513L915.95 209.551C904.925 229.399 879.898 236.552 860.051 225.527C840.203 214.503 833.05 189.476 844.075 169.628L930.669 13.7282Z"
            fill="#9A48F1"
          />
          <path
            d="M978.939 95.3594C989.81 75.7868 1014.49 68.7325 1034.06 79.6031C1053.63 90.4736 1060.69 115.153 1049.82 134.725L933.82 343.579C922.949 363.152 898.27 370.206 878.698 359.335C859.125 348.465 852.071 323.786 862.942 304.213L978.939 95.3594Z"
            fill="#AD61FF"
          />
          <path
            d="M977.5 276.862C977.5 254.77 995.409 236.862 1017.5 236.862C1039.59 236.862 1057.5 254.77 1057.5 276.862V368.862H977.5V276.862Z"
            fill="#AD61FF"
          />
          <g filter="url(#filter0_b_26_1424)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M975.732 0V46.1564C975.709 29.6077 962.286 16.1996 945.732 16.1996H917.466C900.897 16.1996 887.466 29.6311 887.466 46.1997V90.3021C887.449 73.7477 874.024 60.3327 857.466 60.3327H829.2C812.631 60.3327 799.2 73.7642 799.2 90.3327V145.462C799.179 128.91 785.756 115.499 769.2 115.499H763C746.431 115.499 733 128.931 733 145.499V258.932H799.2H887.466L975.732 258.932H1064V0H1130C1146.57 0 1160 13.4315 1160 30V280C1160 296.569 1146.57 310 1130 310H30C13.4315 310 0 296.569 0 280V30C0 13.4315 13.4315 0 30 0H975.732Z"
              fill="#CDCDCD"
              fill-opacity="0.1"
            />
          </g>
          <g opacity="0.36" filter="url(#filter1_i_26_1424)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1005.73 -49.9999C989.164 -49.9999 975.732 -36.5684 975.732 -19.9999V258.932H1064V-19.9999C1064 -36.5684 1050.57 -49.9999 1034 -49.9999H1005.73ZM917.466 16.1999C900.897 16.1999 887.466 29.6314 887.466 46.1999V90.3024C887.449 73.7479 874.024 60.333 857.466 60.333H829.2C812.631 60.333 799.2 73.7644 799.2 90.333V145.462C799.179 128.911 785.756 115.499 769.2 115.499H763C746.431 115.499 733 128.931 733 145.499V258.932H799.2L887.466 258.932H975.732V46.1999C975.732 29.6314 962.301 16.1999 945.732 16.1999H917.466Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_b_26_1424"
              x="-29.0373"
              y="-29.0373"
              width="1218.07"
              height="368.075"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="14.5187" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_26_1424"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_26_1424"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_i_26_1424"
              x="733"
              y="-49.9999"
              width="342.998"
              height="320.932"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="12" dy="12" />
              <feGaussianBlur stdDeviation="6.5" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.678431 0 0 0 0 0.380392 0 0 0 0 1 0 0 0 0.5 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_26_1424"
              />
            </filter>
          </defs>
        </svg>
      </S.TextImg>
<S.Foryou>Подойдет для вас, если:</S.Foryou>

      <S.Ul>
        <S.Ulli>
          <svg
            width="67"
            height="67"
            viewBox="0 0 67 67"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="67" height="67" rx="33.5" fill="#C7E957" />
            <path
              d="M32.8989 22.8705C32.8989 25.2705 32.0349 26.2625 29.9549 26.2625H29.1869V28.9505H32.8989V45.7825H36.0989V21.7825H32.8989V22.8705Z"
              fill="black"
            />
          </svg>

          <S.Li>Хотите укрепить дыхательную и сердечно-сосудистой системы</S.Li>
        </S.Ulli>
        <S.Ulli>
          <svg
            width="67"
            height="67"
            viewBox="0 0 67 67"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="67" height="67" rx="33.5" fill="#C7E957" />
            <path
              d="M39.7705 28.1505C39.7705 23.7345 37.0185 21.4625 33.6265 21.4625C30.1705 21.4625 27.4185 23.7025 27.4185 28.1825V30.2945H30.6185V28.4385C30.6185 25.4305 31.8345 24.4065 33.6265 24.4065C35.3225 24.4065 36.5705 25.4945 36.5705 28.1505C36.5705 34.0065 27.2265 36.5665 27.2265 44.1825V45.7825H40.0905V42.8385H30.6825C31.5145 37.6225 39.7705 34.7745 39.7705 28.1505Z"
              fill="black"
            />
          </svg>

          <S.Li>Быстрый сбросить лишние килограммы</S.Li>
        </S.Ulli>
        <S.Ulli>
          <svg
            width="67"
            height="67"
            viewBox="0 0 67 67"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="67" height="67" rx="33.5" fill="#C7E957" />
            <path
              d="M33.6675 35.0305C35.8435 35.0305 37.2195 36.0865 37.2195 38.7425V39.4465C37.2195 42.0385 35.8435 43.1585 33.6675 43.1585C31.4915 43.1585 30.0515 42.0065 30.0515 39.3825V38.2625H26.8515V39.6705C26.8515 43.8625 29.8915 46.1025 33.6675 46.1025C37.4115 46.1025 40.4195 43.8625 40.4195 39.7345V38.3265C40.4195 35.7345 39.0435 33.9745 36.9635 33.1105C38.6595 32.2465 39.7795 30.6465 39.7795 28.3745V27.2225C39.7795 23.4785 37.0275 21.4625 33.6675 21.4625C30.2435 21.4625 27.4915 23.4465 27.4915 27.1585V28.3105H30.6915V27.4465C30.6915 25.3025 31.9395 24.4065 33.6675 24.4065C35.3955 24.4065 36.5795 25.3025 36.5795 27.5105V28.4705C36.5795 30.8385 35.4595 31.8305 33.6675 31.8305H31.8755V35.0305H33.6675Z"
              fill="black"
            />
          </svg>

          <S.Li>Улучшить настроение, повысить жизненный тонус</S.Li>
        </S.Ulli>
      </S.Ul>
      <S.Directions>
        <p>Направления:</p>
      </S.Directions>
      <S.DirectionsOl>
        <S.Li>Для начинающих</S.Li>
        <S.Li>Для похудения</S.Li>
      </S.DirectionsOl>
      <S.DirectionsOl>
      <S.Li>Для детей</S.Li>
      </S.DirectionsOl>
    </>
  );
};
