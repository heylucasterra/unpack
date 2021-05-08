import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Features = () => (
  <Section id="features">
    <StyledContainer>
      {/* <Subtitle>Features</Subtitle> */}
      <SectionTitle>Economize tempo <br></br>na sua mudança</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>Lista de tarefas</FeatureTitle>
          <FeatureText>
            Te ajudamos a criar uma lista de tarefas customizada para a sua mudança.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Parceiros de confiança</FeatureTitle>
          <FeatureText>
            Testamos os melhores serviços na cidade de São Paulo pra você não ter que pesquisar.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Mais tempo pra você</FeatureTitle>
          <FeatureText>
            Planos o.
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default Features

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
`
