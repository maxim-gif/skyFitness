import { useState } from "react";
import * as S from "./menuProf.style";

export const MenuProfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

    return(
        <S.dropdown onClick={toggleOpen}>
        <S.button >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9" fill="none">
  <path d="M12.3552 1.03308L6.67761 6.7107L0.999999 1.03308" stroke="black" stroke-width="2"/>
</svg>
        </S.button>
        <S.dropdownContent className={isOpen ? 'open' : ''}>
          <a href="#">Ссылка 1</a>
          <a href="#">Ссылка 2</a>
          <a href="#">Ссылка 3</a>
        </S.dropdownContent>
      </S.dropdown>
    )
}