import Link from "next/link";
import { MdArrowBack } from "react-icons/md";

import * as Styled from "./styled";

export const BackToOverview = () => (
  <Link href="/" passHref>
    <Styled.Link>
      <Styled.IconWrapper>
        <MdArrowBack />
      </Styled.IconWrapper>
      <Styled.TextWrapper>Back to overview</Styled.TextWrapper>
    </Styled.Link>
  </Link>
);
