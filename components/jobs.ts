export type Job = {
  slug: string
  title: string
  division: string
  location: string
  summary: string
  responsibilities: string[]
}

const REMOTE = "UK & Ireland · Remote"

export const APPLY_EMAIL = "havencarty@gmail.com"

export const jobs: Job[] = [
  {
    slug: "prototype-engineer",
    title: "Prototype Engineer — Engineering Sample Assembly",
    division: "Product Delivery",
    location: "Twickenham · On-site",
    summary:
      "Join client R&D teams and build the engineering samples they put in front of investors, field trials and certification.",
    responsibilities: [
      "Assemble engineering samples for connected devices from prototype to pre-certification builds",
      "Work inside the client's R&D team, not around it, to turn designs into working hardware",
      "Prove each sample works before it leaves the bench",
    ],
  },
  {
    slug: "test-qa-engineer",
    title: "Test & QA Engineer",
    division: "Product Delivery",
    location: REMOTE,
    summary:
      "Own the documented QA that ships with every build, so clients know exactly what was tested and how.",
    responsibilities: [
      "Plan and run functional tests on engineering samples",
      "Write the QA record that goes with every build",
      "Feed failures back to assembly and firmware so they get fixed fast",
    ],
  },
  {
    slug: "embedded-firmware-engineer",
    title: "Embedded Firmware Engineer",
    division: "Product Delivery",
    location: REMOTE,
    summary:
      "Develop custom firmware and over-the-air (OTA) update infrastructure for device fleets of every size, from pilots to unlimited-device deployments.",
    responsibilities: [
      "Build custom firmware from our basic templates up to client-specific builds",
      "Design and maintain OTA update infrastructure",
      "Develop custom protocols for enterprise deployments",
    ],
  },
  {
    slug: "iot-cloud-engineer",
    title: "IoT Cloud Engineer — Azure IoT Hub",
    division: "Systems Integration",
    location: REMOTE,
    summary:
      "Connect devices to the cloud with Azure IoT Hub, from 100-device pilots to 1,000-device deployments and beyond.",
    responsibilities: [
      "Set up and configure Azure IoT Hub for new client projects",
      "Onboard and manage device fleets as deployments grow",
      "Work with firmware to keep device-to-cloud messaging reliable",
    ],
  },
  {
    slug: "systems-integration-engineer",
    title: "Systems Integration Engineer — Smart Buildings",
    division: "Systems Integration",
    location: REMOTE,
    summary:
      "Deliver smart metering and smart office systems where occupancy sensors, climate control and energy data work together.",
    responsibilities: [
      "Install and commission smart metering across residential portfolios",
      "Integrate occupancy sensors and climate control in office environments",
      "Support property and facilities teams after go-live",
    ],
  },
]
