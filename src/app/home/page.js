'use client';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Grid,
  Link,
  Column,
} from '@carbon/react';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <Grid className="landing-page" fullWidth>
      <Column lg={16} md={8} sm={4} className="landing-page__banner">
        <Breadcrumb noTrailingSlash>
          <BreadcrumbItem>
            <a href="/">Who is...</a>
          </BreadcrumbItem>
        </Breadcrumb>
        <h1 className="landing-page__heading">Ghassan Shahatit</h1>
        <h2 className="landing-page__p">Better Known as Gus Shahatit</h2>
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__r2">
        <Tabs defaultSelectedIndex={0}>
          <TabList className="tabs-group">
            <Tab>About</Tab>
            <Tab>LinkedIn</Tab>
            <Tab>GitHub</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column
                  md={4}
                  lg={7}
                  sm={4}
                  className="landing-page__tab-content"
                >
                  <h2 className="landing-page__subheading">About me:</h2>
                  <p className="landing-page__p">
                    I am a 2023 graduate in Computer Science & Statistics from
                    the University of Illinois Urbana-Champaign, currently
                    working as a Cloud Sales/Software Engineer at IBM. I
                    currently live in the suburbs of Chicago and am typically
                    kept busy by my hobbies and work. I enjoy programming,
                    hanging out with friends, exercising, boxing, traveling,
                    studying languages (Arabic & Mandarin), and learning just
                    about anything!
                  </p>
                </Column>
                <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
                  <Image
                    className="landing-page__illo"
                    src="/tab-illo.png"
                    alt="Carbon illustration"
                    width={786}
                    height={647}
                  />
                </Column>
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column
                  lg={16}
                  md={8}
                  sm={4}
                  className="landing-page__tab-content"
                >
                  Connect with me on LinkedIn!
                </Column>
                <Column lg={16} md={8} sm={4} className="landing-page__p">
                  <Link href="https://www.linkedin.com/in/ghassan-shahatit/">
                    Let's Connect Here!
                  </Link>
                </Column>
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column
                  lg={16}
                  md={8}
                  sm={4}
                  className="landing-page__tab-content"
                >
                  Please note that this is a new GitHub account created post
                  graduation. Most of my past projects related to my former
                  internship/work experiences that are private. My past
                  school/personal projects are on my former University GitHub
                  account that I'd be happy to discuss in conversation.
                </Column>
                <Column lg={16} md={8} sm={4} className="landing-page__p">
                  <Link href="https://github.com/gus-shahatit">
                    Check it out Here!
                  </Link>
                </Column>
              </Grid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__r3">
        <Grid>
          <Column md={4} lg={4} sm={4}>
            <h3 className="landing-page__label">My Interests</h3>
          </Column>
          <Column md={4} lg={4} sm={4}>
            Generative AI
          </Column>
          <Column md={4} lg={4} sm={4}>
            Blockchain
          </Column>
          <Column md={4} lg={4} sm={4}>
            Cloud Technologies
          </Column>
        </Grid>
      </Column>
    </Grid>
  );
}
