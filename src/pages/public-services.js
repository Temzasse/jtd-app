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

const PublicServicesTemplate = ({ data }) => (
  <Page>
    <SEO />

    <PageHeader img={data.headerImg.childImageSharp.fluid} title="Palvelut yksityisille" />

    <Section>
      <Heading as="h2" id="yksityisille" uppercase>
        Palvelut yksityisille
      </Heading>

      <SubHeading color={theme.primary[700]} uppercase>
        Jotta kotisi tekisi sinut onnelliseksi
      </SubHeading>

      <p>
        Tarjoan sisustus -ja tilasuunnittelua yksityiskoteihin, uudiskohteisiin
        ja vapaa-ajan asuntoihin asiakkaan toiveet huomioiden. Kotien
        suunnittelussa on tärkeintä, että lopputuloksena on persoonallinen,
        juuri sinulle suunniteltu koti.
      </p>

      <Gutter dir="vertical" amount={40} />

      <ServiceCard
        iconType="coffee"
        title="Alkukartoitus"
        items={[
          'Jutellaan, millaisia haaveita ja toiveita teillä on',
          'Kartoitetaan, kuinka suurta muutosta olette ajatelleet',
          'Käydään läpi projektin laajuus',
          'Saatte tarjouksen alkukartoituksen pohjalta',
        ]}
      />

      <Gutter dir="vertical" amount={40} />

      <ServiceCard
        iconType="box"
        title="Tilasuunnitelma"
        items={[
          'Suunnittelun tavoitteena on löytää toimivat ja kauniit ratkaisut',
          'Käydään läpi tilojen funktionalisuutta, tilajakoa ja mahdollista tilojen järkevöittämistä/rakenteellisia ratkaisuja',
          'Suunnittelutyössäni käytän 3D-suunnitteluohjelmaa, joka auttaa asiakasta tilojen visualisoinnissa',
        ]}
      />

      <Gutter dir="vertical" amount={40} />

      <ServiceCard
        iconType="bulb"
        title="Valaistussuunnitelma"
        items={[
          'Valaistuksen merkitystä ei voi koskaan korostaa liikaa, valaistus voi muuttaa tilan tyylin ja tunnelman',
          'Valaistussuunnitelma tehdään suunnittelukokonaisuus huomioiden',
          'Valaistussuunnitelmaan kuuluu valaisimien valinta ja valaisinpositioluettelo pohjakuvineen',
        ]}
      />

      <Gutter dir="vertical" amount={40} />

      <ServiceCard
        iconType="paint"
        title="Pintamateriaalit ja värit"
        items={[
          'Suunnittelun tavoitteena on haluttu tunnelma, joka muodostuu pintamateriaalien ja värien harmonisesta kokonaisuudesta',
          'Pintamateriaalien valinnassa huomiodaan tilojen käyttötarkoitus. Tavoitteena on löytää kauniit ja kestävät pinnat',
          'Pintojen visuaalisen ilmeen lisäksi on myös tärkeää, miltä pinnat tuntuvat. Erilaiset pintastruktuurit jättävät mieleen muistijälkiä',
        ]}
      />

      <Gutter dir="vertical" amount={40} />

      <ServiceCard
        iconType="furniture"
        title="Kiintokalusteet / Irtokalustesuunnitelma"
        items={[
          'Kiintokalustesuunnitelmat kalustetoimittajia varten tai yhteistyössä kalustetoimittajien kanssa',
          'Valitaan kotinne tyyliin sopivat irtokalusteet ja irtovalaisimet jo olemassa olevat kalusteet huomioiden',
          'Kiintokalusteiden avulla voidaan korostaa kodin tyyliä tai ne voivat olla aikaa kestävät neutraalit raamit kodille',
          'Irtokalusteilla luodaan kotiin persoonallista ilmettä',
          'Suunnittelen tarvittaessa mittatilauskalusteet yhteistyössä puusepän kanssa',
        ]}
      />

      <Gutter dir="vertical" amount={40} />

      <ServiceCard
        iconType="textile"
        title="Tekstiilit"
        items={[
          'Tekstiilisuunnitelma sisältää matot, verhot, päiväpeitteet ja tyynyt',
          'Tekstiilisuunnitelma kulkee käsikädessä värisuunnitelman kanssa',
          'Tekstiileillä viimeistellään kodin värimaailma ja tyyli',
          'Tekstiilit luovat kotiin kodikkuutta ja niillä on myös keskeinen merkitys kodin akustiikassa',
        ]}
      />
    </Section>

    <Gutter dir="vertical" amount={40} />

    <InfoSection bg={theme.primary[200]} h="auto">
      <Layout align="center">
        <MdInfoOutline size={24} color={theme.primary[800]} />
        <Gutter amount={8} />
        <InfoHeading>Huomaathan nämä asiat</InfoHeading>
      </Layout>

      <Gutter dir="vertical" amount={24} />

      <Text as="p">
        Pintamateriaaleista, väreistä, irtokalusteista ja tekstiileistä tehdään
        huonekortit, joissa on tietoa myös ko. tuotteiden hankintapaikoista.
        Sisustussuunnitelman laajuus sovitaan etukäteen aina asiakkaan tarpeen
        ja toiveiden mukaan. Sopimukseen voidaan sisällyttää kaikki edellä
        mainitut osakokonaisuudet tai vain osa niistä. Sopimukseen voidaan
        sisällyttää tarvittaessa myös tarjouspyynnöt, tilaukset ja jopa
        tavaroiden paikalleen asettaminen.
      </Text>

      <Gutter dir="vertical" amount={24} />

      <Text as="p">
        Interior Design Johanna Taskulalla on kattava yhteistyöverkosto
        erityissuunnittelijoiden kuten arkkitehti, rakenne - ja LVIS-
        suunnittelijoiden kanssa. Toimin myös yhteistyössä luotettavien ja
        taitavien remonttifirmojen kanssa. Suuremmissa suunnitteluprojekteissa
        teen yhteistyötä sisustussuunnittelijakollegoitteni kanssa.
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
    headerImg: file(relativePath: { eq: "public_services_header.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default PublicServicesTemplate;
