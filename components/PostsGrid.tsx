//11.26. Criando a base do PostCard
import styled from "styled-components";

export default styled.div`
  display: grid;
  //grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  //11.28. Deixando a lista responsiva - 2'20"
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;