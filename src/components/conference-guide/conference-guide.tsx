"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BookCheck, CalendarCheck, ChevronDown, FileEdit, GraduationCap, Hotel, Pencil, PresentationIcon, ScrollText, Send, UserCheck } from 'lucide-react'
import { useState } from "react"

export default function ConferenceGuide() {
  const [openSection, setOpenSection] = useState<number | null>(null)

  const steps = [
    {
      title: "Paper Submission",
      description: "Initial steps for paper submission",
      icon: <ScrollText className="w-5 h-5" />,
      status: "Required",
      items: [
        {
          title: "Review Call for Papers",
          description: "Check submission guidelines, deadlines, and conference themes",
          icon: <FileEdit className="w-4 h-4" />,
        },
        {
          title: "Submit Abstract",
          description: "Prepare and submit your abstract (250-300 words)",
          icon: <Pencil className="w-4 h-4" />,
        },
        {
          title: "Full Paper Submission",
          description: "Upon abstract acceptance, submit your complete paper",
          icon: <Send className="w-4 h-4" />,
        },
      ],
    },
    {
      title: "Registration",
      description: "Conference registration process",
      icon: <UserCheck className="w-5 h-5" />,
      status: "Required",
      items: [
        {
          title: "Complete Registration Form",
          description: "Fill in your personal and academic details",
          icon: <FileEdit className="w-4 h-4" />,
        },
        {
          title: "Pay Registration Fee",
          description: "Process the conference registration payment",
          icon: <BookCheck className="w-4 h-4" />,
        },
      ],
    },
    {
      title: "Conference Preparation",
      description: "Prepare for conference attendance",
      icon: <CalendarCheck className="w-5 h-5" />,
      status: "Required",
      items: [
        {
          title: "Travel Arrangements",
          description: "Book your flights and plan your journey",
          icon: <Hotel className="w-4 h-4" />,
        },
        {
          title: "Accommodation",
          description: "Book your hotel or accommodation",
          icon: <Hotel className="w-4 h-4" />,
        },
        {
          title: "Prepare Presentation",
          description: "Create and rehearse your presentation",
          icon: <PresentationIcon className="w-4 h-4" />,
        },
      ],
    },
    {
      title: "Conference Participation",
      description: "During and after the conference",
      icon: <GraduationCap className="w-5 h-5" />,
      status: "Required",
      items: [
        {
          title: "Attend Sessions",
          description: "Participate in conference sessions and networking events",
          icon: <UserCheck className="w-4 h-4" />,
        },
        {
          title: "Present Paper",
          description: "Present your research at the scheduled time",
          icon: <PresentationIcon className="w-4 h-4" />,
        },
        {
          title: "Submit Final Paper",
          description: "Submit the final version of your paper with any revisions",
          icon: <Send className="w-4 h-4" />,
        },
      ],
    },
  ]

  return (
    <ScrollArea className="h-full w-full px-4 py-6 bg-green-100">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter text-red-700 dark:text-red-500 sm:text-4xl md:text-5xl">
            Conference Guide
          </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-[600px] mx-auto">
            Follow these steps to successfully register, attend, and present at the academic conference
          </p>
        </div>

        <div className="grid gap-6">
          {steps.map((step, index) => (
            <Collapsible
              key={index}
              open={openSection === index}
              onOpenChange={() => setOpenSection(openSection === index ? null : index)}
            >
              <Card>
                <CollapsibleTrigger className="w-full">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full">
                          {step.icon}
                        </div>
                        <div className="text-left">
                          <CardTitle className="text-green-700 dark:text-green-500">{step.title}</CardTitle>
                          <CardDescription>{step.description}</CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge variant="secondary" className="bg-red-600 dark:bg-red-900/30 text-white dark:text-red-500">
                          {step.status}
                        </Badge>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform text-black dark:text-slate-300 ${
                            openSection === index ? "transform rotate-180" : ""
                          }`}
                        />
                      </div>
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="pt-0">
                    <div className="grid gap-4">
                      {step.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-start space-x-4 p-4 rounded-lg bg-green-50 dark:bg-green-900/20"
                        >
                          <div className="p-2 bg-green-800 text-white dark:bg-green-900/30 rounded-full shadow-sm">
                            {item.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold text-green-700 dark:text-green-500">{item.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>
          ))}
        </div>

        <div className="text-center flex flex-col md:flex-row md:items-center gap-4">
          <Button variant="outline" className="mx-auto border-red-700 dark:border-red-500 text-white bg-red-700 dark:text-red-500 dark:hover:bg-red-900/20">
            Register for Conference
          </Button>
          <Button variant="outline" className="mx-auto border-green-700 dark:border-green-500 text-green-700 dark:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20">
            Download Conference Guidelines
          </Button>
        </div>
      </div>
    </ScrollArea>
  )
}

