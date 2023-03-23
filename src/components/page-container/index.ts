import styled from "styled-components";

export const PageContainer = styled.div`
  min-width: 100%;
  min-height: 100%;
  background-color: #ffffff;
  display: flex;
  position: relative;
  padding: 2rem;
  flex-direction: column;
  gap: 2rem;

  .icon_paw_page_container {
    color: #f0f0f0;
    font-size: 900px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(0%, -50%);
  }

  .span_filter_animals {
    color: #67887d;
    font-size: 1rem;
    font-weight: 600;
  }
`;
