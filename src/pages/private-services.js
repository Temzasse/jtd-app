import React from 'react';
import styled from '@emotion/styled';
import { MdInfoOutline } from 'react-icons/md';

import Page from '../components/Page';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Text from '../components/Text';
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import Layout from '../components/Layout';
import Section from '../components/Section';
import ServiceCard from '../components/ServiceCard';
import Gutter from '../components/Gutter';
import theme from '../theme';

const PrivateServicesTemplate = ({ data }) => (
  <Page>
    <SEO />

    <PageHeader img={data.headerImg.childImageSharp.fluid} title="Palvelut yrityksille" />

    <Section>
      <Heading as="h2" id="yrityksille">
        PALVELUT YRITYKSILLE
      </Heading>
      <SubHeading color={theme.grey[500]}>
        HYVIN SUUNNITELTU TILA EROTTUU MUISTA, ON PUOLEENSAVETÄVÄ JA JÄTTÄÄ
        MUISTIJÄLJEN
      </SubHeading>

      <p>
        Toteutan toimitilojen, toimisto- ja opetustilojen sekä edustustilojen
        tila- ja sisustussuunnittelua. Erikoisosaamisenani on majoitus- ja
        edustustilojen sunnittelu.
      </p>

      <p>
        Suunnittelun tavoitteena on luoda yritykselle viihtyisät tilat, jossa
        sekä asiakkaat että työntekijät viihtyvät. Toimivat ja viihtyisät tilat
        lisäävät yrityksen houkuttelevuutta ja näin ollen tukevat
        liiketoimintaa. Kaikki suunnitteluprojektit räätälöidään asiakkaan
        tarpeiden mukaan. Uudistus voi olla pieni yritysilmeen faceliftaus tai
        monipuolinen kokonaisuus.
      </p>

      <p>
        Teen tarvittaessa yritykselle myös konseptisuunnitelman.
        Konseptisuunnittelussa vastataan kysymyksiin, mitä tiloissa tehdään ja
        mitkä ovat palvelutuotannon periaatteet. Konseptisuunnittelussa mm.
        haastatellaan yrityksen työntekijöitä sekä asiakkaita. Suunnittelussa
        huomioidaan yrityksen liiketoiminta, toimintatavat sekä asiakkaiden ja
        tilan käyttäjien tarpeet ja toiveet. Konseptisuunnittelun tavoitteena on
        luoda juuri sopivat, brändin mukaiset tilat omalle asiakaskunnalle ja
        henkilöstölle.
      </p>

      <Gutter dir="vertical" amount={40} />

      <ServiceCard
        iconType="building"
        title="Yrityksen tilasuunnitelma"
        items={[
          'Yrityksen tilojen uudistaminen tulee ajankohtaiseksi tilan tarpeen kasvaessa tai esim. muuton tai brändin uudistamisen yhteydessä.',
          'Tilasuunnittelussa keskeisiä asioita ovat tilojen käyttötarve ja yrityksen toimintatavat. Tiloista luodaan toimivia ja monikäyttöisiä.',
          'Laadukas tilasuunnittelu tukee yrityksen brändiä ja sen visuaalista ilmettä.',
          'Tiloista luodaan kokonaisuus, jossa yhtenäinen ilme kulkee tilasta toiseen.',
          'Myös tilojen akustiset ominaisuudet otetaan huomioon tilasuunnittelussa.',
        ]}
      />

      <Gutter dir="vertical" amount={40} />

      <ServiceCard
        iconType="briefcase"
        title="Yrityksen sisustussuunnitelma"
        items={[
          'Tila -ja sisustussuunnitelma kulkevat usein käsi kädessä. Toimivien tilaratkaisujen löydyttyä yritykseen tehdään sisustussuunnitelma.',
          'Sisustussuunnitelman tarkoitus on luoda yrityksen asiakkaille miellyttäviä ja elämyksellisiä kohtaamistiloja sekä inspiroivia työtiloja yrityksen työntekijöille.',
          'Viihtyisällä työympäristöllä on vaikutusta myös työntekijöiden motivaatioon ja tehokkuuteen.',
          'Sisustussuunnitelma kattaa pintamateriaalit, kiinto -ja irtokalusteet, valaistuksen ja tekstiilit.',
          'Suunnitelma voidaan tehdä uudiskohteeseen, remonttikohteessen tai jo valmiit tilat päivitetään viihtyisemmäksi uudella sisustuksella.',
          'Myös sisustusssuunnitelman laajuus räätälöidään aina asiakkaan toiveiden mukaan. Tarvittaessa sopimukseen sisällytetään pienimpienkin yksityiskohtien suunnittelu ja tuotteiden esillepanot.',
        ]}
      />
    </Section>

    <Gutter dir="vertical" amount={40} />

    <InfoSection bg={theme.primary[200]} h="auto">
      <Layout align="center">
        <MdInfoOutline size={24} color={theme.primary[800]} />
        <Gutter amount={8} />
        <InfoHeading>Yhteistyö muiden toimijoiden kanssa</InfoHeading>
      </Layout>

      <Gutter dir="vertical" amount={24} />

      <Text as="p">
        Interior Design Johanna Taskulalla on kattava yhteistyöverkosto
        erityissuunnittelijoiden kuten arkkitehti, rakenne - ja LVIS-
        suunnittelijoiden kanssa. Toimin myös yhteistyössä luotettavien ja
        taitavien remonttifirmojen kanssa. Suuremmissa
        yrityssuunnitteluprojekteissa teen yhteistyötä
        sisustussuunnittelijakollegoitteni kanssa.
      </Text>
    </InfoSection>
  </Page>
);

const InfoSection = styled(Section)``;

const InfoHeading = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: ${props => props.theme.primary[800]};
`;

export const query = graphql`
  query {
    headerImg: file(relativePath: { eq: "services_header.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default PrivateServicesTemplate;
