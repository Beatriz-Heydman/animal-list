import styled from "styled-components";

export const CardContainer = styled.div`
  width: 320px;
  height: 172px;
  border: 1px solid #c1bdbd;
  border-radius: 0.5rem;
  position: relative;
  padding: 1rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  font-size: 0.75rem;
  align-items: flex-start;
  color: #595959;
  backdrop-filter: blur(5px);
  background-color: #a8beb311;

  .span_title_info_card {
    font-weight: 500;
  }
`;
