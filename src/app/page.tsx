import AnimationSection from "@/components/AnimationSection";
import Badge from "@/components/Badge";
import FeatureCard from "@/components/cards/FeatureCard";
import PlanCard from "@/components/cards/PlanCard";
import StepCard from "@/components/cards/StepCard";
import TestimonyCard from "@/components/cards/TestimonyCard";
import Container from "@/components/Container";
import HeadSection from "@/components/HeadSection";
import ImageMain from "@/components/ImageMain";
import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import Marquee from "@/components/ui/Marquee";
import { FEATURES, PLANS, STEPS, TESTIMONIES } from "@/utils/helpers";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Lamp } from '@/components/ui/Lamp'
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import LightCircle from "@/components/LightCircle";
import Form from "@/components/Form";

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <Section className="relative">
          <AnimationSection>
            <div className="max-w-3xl w-[90%] lg:w-full mx-auto isolate z-50">
              <Badge>Introducing Astra AI</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl  mt-8 mb-6 font-semibold text-pretty bg-clip-text md:!leading-snug bg-gradient-to-b from-gray-50 to-gray-100 text-transparent">Build your next idea and ship your dream site </h1>
              <p className="text-base md:text-lg leading-normal md:leading-snug  text-foreground/80">Zero code, maximum speed. Make professional sites easy, fast and fun while delivering best-in-class SEO, performance.</p>
              <Link href='/' className="hidden lg:flex items-center border-t border-t-foreground/30 shadow shadow-background/40 backdrop-blur-lg gap-4 mt-8 w-max mx-auto p-2 rounded-full bg-white/20 ">
                <span className="font-medium inline-block pl-4"> ✨ Start building your dream website now!</span>
                <Button className="rounded-3xl ring-foreground/20 ring-1 inline-flex gap-1">Get Started <ArrowRight width={20} /> </Button>
              </Link>
              <ImageMain />
            </div>
            <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 "></div>
          </AnimationSection>
        </Section>
        <Section>
          <AnimationSection>
            <HeadSection
              sectionName="The Process"
              title="Three steps to build your dream website"
              description="Turn your vision into reality in just 3 simple steps" />
            <Container>

              <div className="grid lg:grid-cols-3 mt-12">
                {
                  STEPS.map(({ title, description, icon }) => (
                    <StepCard
                      title={title}
                      description={description}
                      icon={icon}
                    />
                  ))
                }
              </div>

            </Container>
          </AnimationSection>
        </Section>
        <Section className="relative">
          <AnimationSection>
            <HeadSection
              sectionName="Features"
              title="Discover our powerful features"
              description="Astra offers a range of features to help you build a stunning website in no time"

            />
            <Image src='/assets/feature.svg' alt="image of feature" width={200} height={200} className="mx-auto w-full max-w-64 mt-8" />
            <Container>
              <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
                {
                  FEATURES.map(({ description, icon, title }) => (
                    <FeatureCard
                      title={title}
                      description={description}
                      icon={icon}
                    />
                  ))
                }
              </div>
            </Container>
            <LightCircle className="top-[20%]  -right-[20%]"/>
          </AnimationSection>
        </Section>
        <Section className="relative">
          <AnimationSection>
            <HeadSection
              sectionName="Pricing"
              title="Unlock the right plan for your business"
              description="Choose the best plan for your business and start building your dream website today"

            />
            <Container>
              <div className="grid gap-6 lg:grid-cols-3 mt-8">
                {
                  PLANS.map(({ features, href, main, price, text, textButton, type }) => (
                    <PlanCard
                      features={features}
                      href={href}
                      main={main}
                      price={price}
                      text={text}
                      textButton={textButton}
                      type={type}
                    />
                  ))
                }
              </div>
            </Container>
            <LightCircle className="bottom-1/3 -left-[18%] "/>
            <LightCircle className="-top-0 -right-[18%]  "/>
          </AnimationSection>
        </Section>
        <Section>
          <AnimationSection className="relative">
            <HeadSection
              sectionName="Our Customers"
              title="What people are saying"
              description="See how Astra empowers businesses of all sizes. Here's what real people are saying on Twitter"
              className="mb-10"
            />
            <Container className="relative">
              <Marquee reverse pauseOnHover className="[--duration:20s]">
                {
                  TESTIMONIES.map(({ name, text, user }) => (
                    <TestimonyCard
                      name={name}
                      user={user}
                      text={text}
                    />
                  ))
                }
              </Marquee>
              <Marquee pauseOnHover className="[--duration:20s]">
                {
                  TESTIMONIES.map(({ name, text, user }) => (
                    <TestimonyCard
                      name={name}
                      user={user}
                      text={text}
                    />
                  ))
                }
              </Marquee>
            <div className="absolute bg-gradient-to-r from-background pointer-events-none left-0 top-0 bottom-0 w-1/3"></div>
            <div className="absolute bg-gradient-to-l from-background pointer-events-none right-0 top-0 bottom-0 w-1/3"></div>

            </Container>

          </AnimationSection>
        </Section>
        <Section>
          <Container>
            <Lamp>
              <div className="relative max-w-3xl mx-auto py-4 translate-y-10 md:translate-y-0">
                <h2 className="font-semibold md:mt-0 text-4xl lg:text-6xl leading-tight lg:leading-snug max-w-md lg:max-w-none ">From Idea to Launch Faster Than Ever</h2>
                <p className="text-muted-foreground mt-4 mb-8 max-w-md mx-auto">Build stunning websites with Astra's intuitive drag-and-drop builder and powerful AI assistant</p>
                <Link href={'/'} className="py-2.5 px-5 text-sm rounded-md bg-foreground text-black font-medium flex items-center gap-2 w-max mx-auto">
                  Get started to Free
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </Lamp>

          </Container>
        </Section>
        <Section className="py-10 text-left" >
          <AnimationSection>
            <Container>
             <Form/>
            </Container>
          </AnimationSection>
        </Section>
      </Main>
      <Footer />

    </>

  );
}
