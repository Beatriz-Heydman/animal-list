import styled from "styled-components";

export const CardContainer = styled.div`
  width: min(320px, 100%);
  min-height: 172px;
  border: 1px solid #c1bdbd;
  border-radius: 0.5rem;
  position: relative;
  padding: 1rem;
  gap: 1rem;
  display: flex;
  flex-wrap: wrap;
  font-size: 0.75rem;
  align-items: center;
  color: #595959;
  backdrop-filter: blur(5px);
  background-color: #a8beb311;
  justify-content: space-between;

  .span_title_info_card {
    font-weight: 500;
  }
`;
