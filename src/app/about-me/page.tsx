"use client";
import React from "react";

import { motion } from "framer-motion";
import { skills, workExperience } from "@/__data__/about";
import {
  BriefcaseBusinessIcon,
  BriefcaseIcon,
  MapPin,
  WorkflowIcon,
} from "lucide-react";
import { Badge } from "@/Components/ui/badge";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTheme } from "next-themes";
export default function page() {
  const { theme } = useTheme();
  console.log("THEMEEE", theme);

  return (
    <div className=" mx-auto   max-w-4xl px-4 space-y-8">
      <section>
        <h2 className="text-2xl  text-center tracking-wide">My Story</h2>
        <p className=" text-sm text-muted-foreground mt-10">
          As a developer with full-stack expertise in the <strong> MERN</strong>{" "}
          stack, <strong> TypeScript</strong>, <strong> PostgreSQL</strong> and{" "}
          <strong> MongoDB</strong>, I've excelled in dynamic environments at
          Metalogic, and Mindrisers Technology, delivering innovative web
          applications.
        </p>
        <p className=" text-sm text-muted-foreground mt-2">
          I am passionate about leveraging my React and Node.js expertise to
          create impactful solutions and contribute to forward-thinking
          projects.
        </p>
      </section>

      {/* WORK EXPERIECNE */}
      <section>
        <div className=" text-center">
          <h2 className=" text-2xl">Work Experience</h2>
          <p className=" text-sm text-muted-foreground">
            My professional journey
          </p>
        </div>
        <div>
          <div className=" ">
            <VerticalTimeline animate={true} lineColor={"#b1c6fe"}>
              {workExperience.map((job, idx) => {
                return (
                  <VerticalTimelineElement
                    key={idx}
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "#b1c6fe",
                      color: theme === "dark" ? "#fff" : "#000",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  #b1c6fe",
                    }}
                    date={job.period}
                    iconStyle={{
                      background: "#b1c6fe",
                      color: "#fff",
                    }}
                    icon={<BriefcaseBusinessIcon />}
                  >
                    <h3 className="vertical-timeline-element-title">
                      {job.company}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle text-xs">
                      {job.position}
                    </h4>
                    <h4 className=" text-xs  flex items-center gap-1 mt-2 font-thin">
                      <span>
                        {" "}
                        <MapPin size={12} />
                      </span>
                      {job.location}
                    </h4>
                  </VerticalTimelineElement>
                );
              })}
            </VerticalTimeline>
          </div>
        </div>
      </section>
      {/* SKILLS SECTION */}
      <section>
        <div className=" text-center">
          <h2 className=" text-2xl">Work Experience</h2>
          <p className=" text-sm text-muted-foreground">
            My professional journey
          </p>
        </div>
        <div>
          <div>
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="my-8">
                <h3 className=" mb-2 capitalize">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className=" text-sm font-thin"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="text-center py-4 text-sm text-gray-600">
        © 2024 Milan Prajapati. All rights reserved.
      </footer>
    </div>
  );
}
