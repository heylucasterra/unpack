import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Features = () => (
  <Section id="features">
    <StyledContainer>
      {/* <Subtitle>Features</Subtitle> */}
      <SectionTitle>Mudar nunca foi tão simples<br></br></SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle style={{maxWidth:'200px'}}>Tudo em um só lugar</FeatureTitle>
          <FeatureText>
          Centralizamos a comununicação, cadastros, contratações, transferências, entregas e pagamentos, tudo 100% digital.</FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Parceiros de confiança</FeatureTitle>
          <FeatureText>
          Conte com nossa rede de fornecedores de confiança para: Transporte, Personal Organizers, TV & Internet, Materiais, Seguros, e mais.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Acompanhamento dedicado</FeatureTitle>
          <FeatureText>
          Nosso time está disponível para você e sua mudança via Whatsapp.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Tempo de volta pra você</FeatureTitle>
          <FeatureText>
          Foque nas mudanças que estão acontecendo na sua vida, deixe que nós desempacotamos as caixas!
          </FeatureText>
        </FeatureItem>
        
      </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default Features

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.secondary};
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
  max-width: 700px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    max-width: 100%;
    grid-template-columns: 1fr;
    padding: 0;
    text-align: center;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
  text-align: center;
  @media (max-width: ${props => props.theme.screen.sm}) {
    max-width: 100%;
  }
`

const FeatureText = styled.p`
  text-align: left;

`
