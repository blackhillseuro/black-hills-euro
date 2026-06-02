// ─── EDIT THIS FILE FIRST ────────────────────────────────────────────────────
// All business info lives here. Fields marked TODO need real owner data.
// Everything else is clean starter copy — edit freely.
// ─────────────────────────────────────────────────────────────────────────────

export const SITE = {
  name: 'Black Hills Euro',
  tagline: 'After-Hours European Maintenance & Diagnostics · Rapid City, SD',

  phone: '(605) 646-2102',
  phoneHref: 'tel:+16056462102',
  smsHref: 'sms:+16056462102',

  email: 'blackhillseuro@gmail.com',
  emailHref: 'mailto:blackhillseuro@gmail.com',

  url: 'https://www.blackhillseuro.com',
  instagram: 'blackhillseuro',
  instagramHref: 'https://www.instagram.com/blackhillseuro/',

  city: 'Rapid City',
  state: 'SD',

  // After-work mobile service — Mon–Fri evenings, weekends during the day
  hours: {
    weekdays: 'Mon – Fri: 4:00 PM – 9:00 PM',
    saturday: 'Sat: 9:00 AM – 5:00 PM',
    sunday:   'Sun: 9:00 AM – 5:00 PM',
  },

  // Used in structured data and footer copy
  founded: '2024',
  serviceRadius: '25 miles from Rapid City',
}

export const BRANDS = [
  'BMW',
  'Mercedes-Benz',
  'Audi',
  'Volkswagen',
  'Porsche',
  'Volvo',
  'Land Rover',
]

// Cities within ~25 miles of Rapid City.
// Sturgis (~28 mi) and beyond were removed — outside your stated radius.
export const SERVICE_AREAS = [
  'Rapid City',   // home base
  'Box Elder',    // ~9 mi east — Ellsworth AFB corridor
  'Summerset',    // ~12 mi west
  'Blackhawk',    // ~14 mi west
  'Piedmont',     // ~16 mi northwest
  'New Underwood', // ~20 mi east
  'Rapid Valley', // eastern Rapid City suburbs
]

// Services shown on the home page grid and the /services page.
// Edit descriptions to match exactly what you offer and how you talk about it.
export const SERVICES = [
  {
    title: 'Oil & Fluid Service',
    description:
      'We use the correct manufacturer-spec oil and fluids for your vehicle, not generic off-the-shelf substitutes. Includes coolant, brake fluid, and transmission fluid service.',
  },
  {
    title: 'Brake Service',
    description:
      'Pads, rotors, calipers, and brake fluid flush. We use OEM-quality parts and reset electronic parking brake systems and brake wear sensors correctly.',
  },
  {
    title: 'Engine Diagnostics',
    description:
      'Factory-level scan tools for BMW, Mercedes-Benz, Audi, VW, Porsche, Volvo, and Land Rover. We read every module — not just the check engine light.',
  },
  {
    title: 'Battery & Electrical',
    description:
      'Modern European vehicles require the battery to be registered to the car after replacement, not just swapped. We handle the full process so the charging system works correctly.',
  },
  {
    title: 'Suspension & Steering',
    description:
      'Control arms, ball joints, tie rods, sway bar links, shocks, and struts. Common wear items on high-mileage BMWs and Audis — diagnosed and replaced on-site.',
  },
  {
    title: 'Cooling System',
    description:
      'Water pumps, thermostats, radiator hoses, and coolant flush. European engines run precise cooling tolerances — we test the system before we leave.',
  },
  {
    title: 'Pre-Purchase Inspection',
    description:
      'Thinking about buying a used European car? We inspect it at the seller\'s location so you know exactly what you\'re getting before you sign anything.',
  },
  {
    title: 'Scheduled Maintenance',
    description:
      'Manufacturer service intervals done correctly — filters, fluids, spark plugs, belts — at your home or office, without the dealer markup or the wait.',
  },
]

// FAQ answers should sound like you talking, not a brochure.
export const HOME_FAQS = [
  {
    question: 'Do you come to my area?',
    answer:
      "We serve Rapid City and nearby communities within about 25 miles: Box Elder, Summerset, Blackhawk, Piedmont, Rapid Valley, and New Underwood. Not sure? Text us your zip and we'll tell you.",
  },
  {
    question: 'Do I need to be home while you work?',
    answer:
      "No. As long as we can access the vehicle and you're reachable by phone if we have a question, you don't need to be there. Most of our customers are at work or running errands when we show up.",
  },
  {
    question: 'What if the job requires a lift?',
    answer:
      "We'll tell you before we schedule, not after we arrive. The vast majority of what European car owners actually need (oil service, brakes, battery, diagnostics, suspension, cooling) can be done on flat ground. When something genuinely requires a lift, we say so and refer you to someone we trust.",
  },
  {
    question: 'What brands do you work on?',
    answer:
      "BMW, Mercedes-Benz, Audi, Volkswagen, Porsche, Volvo, and Land Rover. That's it. We don't work on domestic or Asian vehicles. Staying focused on European makes is how we stay good at it.",
  },
  {
    question: 'Is after-hours service more expensive than a shop?',
    answer:
      "No, and often it's less. We don't carry the overhead of a fixed shop, so our rates reflect that. Factor in the rental car, the Uber, or the half-day you'd spend at a dealer, and after-hours service at your location usually wins on total cost.",
  },
  {
    question: 'How do I know what the repair will cost?',
    answer:
      "We give you a quote before any work starts. No surprise invoices. If we get into the job and find something unexpected, we call you first. You decide — we don't assume.",
  },
]
