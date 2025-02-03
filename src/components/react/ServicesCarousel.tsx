import { motion } from "motion/react";
import airtableImg from "@/assets/images/carousel/airtable.png";
import asanaImg from "@/assets/images/carousel/asana.png";
import driveImg from "@/assets/images/carousel/drive.png";
import dropboxImg from "@/assets/images/carousel/dropbox.png";
import githubImg from "@/assets/images/carousel/github.png";
import hubspotImg from "@/assets/images/carousel/hubspot.png";
import jiraImg from "@/assets/images/carousel/jira.png";
import mailchimpImg from "@/assets/images/carousel/mailchimp.png";
import mondayImg from "@/assets/images/carousel/monday.png";
import notionImg from "@/assets/images/carousel/notion.png";
import salesforceImg from "@/assets/images/carousel/salesforce.png";
import slackImg from "@/assets/images/carousel/slack.png";
import teamsImg from "@/assets/images/carousel/teams.png";
import trelloImg from "@/assets/images/carousel/trello.png";
import zendeskImg from "@/assets/images/carousel/zendesk.png";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    alt: "Airtable",
    image: airtableImg,
  },
  {
    alt: "Asana",
    image: asanaImg,
  },
  {
    alt: "Drive",
    image: driveImg,
  },
  {
    alt: "Dropbox",
    image: dropboxImg,
  },
  {
    alt: "GitHub",
    image: githubImg,
  },
  {
    alt: "Hubspot",
    image: hubspotImg,
  },
  {
    alt: "Jira",
    image: jiraImg,
  },
  {
    alt: "Mailchimp",
    image: mailchimpImg,
  },
  {
    alt: "Monday",
    image: mondayImg,
  },
  {
    alt: "Notion",
    image: notionImg,
  },
  {
    alt: "Salesforce",
    image: salesforceImg,
  },
  {
    alt: "Slack",
    image: slackImg,
  },
  {
    alt: "Teams",
    image: teamsImg,
  },
  {
    alt: "Trello",
    image: trelloImg,
  },
  {
    alt: "Zendesk",
    image: zendeskImg,
  },
];

export function ServicesCarousel() {
  const [carouselWidth, setCarouselWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carouselElement = carouselRef.current;
    if (!carouselElement) return;
    console.log(carouselElement.scrollWidth);
    setCarouselWidth(carouselElement.scrollWidth);
  }, []);

  return (
    <div className="container mx-auto p-0 pt-5 md:pt-0">
      <div className="relative h-12 w-full overflow-hidden">
        <motion.div
          ref={carouselRef}
          className="flex min-w-fit gap-20"
          initial={{ x: 0 }}
          animate={{ x: -(carouselWidth / 2) - 40 }}
          transition={{
            duration: services.length * 5,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...services, ...services].map((service, index) => (
            <div key={`${service.alt}-${index}`} className="min-h-12 min-w-fit">
              <img
                src={service.image.src}
                alt={service.alt}
                className="h-full"
              />
            </div>
          ))}
        </motion.div>
        <div className="pointer-events-none absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-white to-transparent" />
      </div>
    </div>
  );
}
