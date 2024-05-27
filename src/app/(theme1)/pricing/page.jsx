import Accordion from '@/app/ui/Accordion';
import Cta from '@/app/ui/Cta';
import PricingSection from '@/app/ui/Pricing/PricingSection';
import SectionHeading from '@/app/ui/SectionHeading';
const accordionData = [
  {
    question: 'What is a copy?',
    answer:
      "Yes, you can write long articel for your blog posts, product descriptions or any long article with CopyGen. We're always updating our template and tools, so let us know what are expecting!",
  },
  {
    question: 'Does CopyGen to write long articles?',
    answer:
      "Yes, you can write long articel for your blog posts, product descriptions or any long article with CopyGen. We're always updating our template and tools, so let us know what are expecting!",
  },
  {
    question: 'Is the generated content original?',
    answer:
      "Yes, you can write long articel for your blog posts, product descriptions or any long article with CopyGen. We're always updating our template and tools, so let us know what are expecting!",
  },
  {
    question: 'Do you have wordpress plugin?',
    answer:
      "Yes, you can write long articel for your blog posts, product descriptions or any long article with CopyGen. We're always updating our template and tools, so let us know what are expecting!",
  },
];

export const metadata = {
  title: 'Pricing',
};

export default function Pricing() {
  return (
    <>
      <div className="nk-header" />
      <section className="section section-bottom-0 has-shape has-mask">
        <div className="nk-shape bg-shape-blur-m mt-8 start-50 top-0 translate-middle-x" />
        <div className="nk-mask bg-pattern-dot bg-blend-around mt-n5 mb-10p mh-50vh" />
        <div className="container">
          <SectionHeading
            overlineTitle="Plans & Pricing"
            title="Plans that best suit your business requirements"
            containerWidthClass="col-lg-10 col-xl-9 col-xxl-8"
            variant="h1"
          />
          <PricingSection />
        </div>
      </section>
      <section className="section section-bottom-0">
        <div className="container">
          <SectionHeading
            overlineTitle="FAQ'S"
            title="Frequently Asked Questions"
            containerWidthClass="col-xl-8"
          />
          <Accordion data={accordionData} plusMinus />
        </div>
      </section>
      <section className="section section-bottom-0">
        <div className="container">
          <Cta
            overlineTitle="Boost your writing productivity"
            title="End writer’s block today"
            subtitle="It’s like having access to a team of copywriting experts writing
              powerful copy for you in 1-click."
            btnUrl="/login"
            btnText="Start writing for free"
            infoList={[
              'No credit card required',
              'Cancel anytime',
              '10+ tools to expolore',
            ]}
          />
        </div>
      </section>
    </>
  );
}
