import React from 'react';
import styled from '@emotion/styled';
import { MdInfo } from 'react-icons/md';

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
import { dotGrid } from '../utils';

const Services = ({ data }) => (
  <Page>
    <SEO />

    <PageHeader img={data.headerImg.childImageSharp.fluid} title="Palvelut" />

    <Section>
      <Heading as="h2" id="yksityisille">
        PALVELUT YKSITYISILLE
      </Heading>
      <SubHeading>Jotta kotisi tekisi sinut onnelliseksi</SubHeading>

      <p>
        Tarjoan sisustus -ja tilasuunnittelua yksityiskoteihin, uudiskohteisiin
        ja vapaa-ajan asuntoihin asiakkaan toiveet huomioiden. Kotien
        suunnittelussa on tärkeintä, että lopputuloksena on persoonallinen,
        juuri sinulle suunniteltu koti. Palveluihin kuuluu sisustussuunnittelu
        ja konsultointi.
      </p>

      <br />

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
          'Tuotoksena tilasuunnitelma mittakaavassa sisältäen kalustelayoutin',
        ]}
      />

      <Gutter dir="vertical" amount={40} />

      <ServiceCard
        iconType="bulb"
        title="Valaistussuunnitelma"
        items={[
          'Valaistuksen merkitystä ei voi koskaan korostaa liikaa, valaistus voi muuttaa tilan tyylin ja tunnelman',
          'Valaistussuunnitelma tehdään suunnittelukokonaisuus huomioiden',
          'Valaisimien valinta',
          'Tuotoksena valaisinpistekuva ja tiedot valituista valaisimista',
        ]}
      />

      <Gutter dir="vertical" amount={40} />

      <ServiceCard
        iconType="paint"
        title="Pintamateriaalit ja värit"
        items={[
          'Suunnittelun tavoitteena on haluttu tunnelma, joka muodostuu pintamateriaalien ja värien harmonisesta kokonaisuudesta',
          'Jotain muuta tähän myös',
          'Jotain muuta tähän myös',
        ]}
      />

      <Gutter dir="vertical" amount={40} />

      <ServiceCard
        iconType="furniture"
        title="Kiintokalusteet / Irtokalusteet"
        items={[
          'Kiintokalustesuunnitelmat kalustetoimittajia varten tai yhteistyössä kalustetoimittajien kanssa',
          'Valitaan kotinne tyyliin sopivat irtokalusteet ja irtovalaisimet jo olemassa olevat kalusteet huomioiden',
          'Ehkä jotain muuta tähän myös',
        ]}
      />

      <Gutter dir="vertical" amount={40} />

      <ServiceCard
        iconType="textile"
        title="Tekstiilit"
        items={[
          'Tekstiilisuunnitelma sisältää matot, verhot, päiväpeitteet, tyynyt jne.',
          'Tekstiilisuunnitelma kulkee käsikädessä värisuunnitelman kanssa',
          'Ehkä jotain muuta tähän myös',
        ]}
      />
    </Section>

    <Gutter dir="vertical" amount={40} />

    <InfoSection bg={theme.primary[200]} h="auto">
      <Layout align="center">
        <MdInfo size={28} color={theme.primary[800]} />
        <Gutter amount={8} />
        <Heading as="h3" color={theme.primary[800]}>
          Huomaathan nämä asiat
        </Heading>
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

    <br />

    <Section>
      <Heading as="h2" id="yrityksille">
        PALVELUT YRITYKSILLE
      </Heading>
      <SubHeading>
        HYVIN SUUNNITELTU TILA EROTTUU MUISTA, ON PUOLEENSAVETÄVÄ JA JÄTTÄÄ
        MUISTIJÄLJEN
      </SubHeading>

      <p>
        Toteutan majoitustilojen, opetustilojen ja toimitilojen tila -ja
        sisustussunnittelua. Erikoisosaamisenani ovat edustus -ja majoitustilat,
        kuten boutique-hotellit, sekä opetustilat.
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
        <MdInfo size={28} color={theme.primary[800]} />
        <Gutter amount={8} />
        <Heading as="h3" color={theme.primary[800]}>
          Yhteistyö muiden toimijoiden kanssa
        </Heading>
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

const InfoSection = styled(Section)`
  ${dotGrid(theme.primary[300])}
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

export default Services;
