import styled from "styled-components";

const Title = ({ title }) => <SectionTitle>{title}</SectionTitle>;

const SectionTitle = styled.h1`
  margin: 0;
  padding: 1rem;
  font-size: 2rem;
  text-align: center;
  color: #fff;
  background: #2bae66ff;
  text-transform: capitalize;
  letter-spacing: 2px;
`;

export default Title;
