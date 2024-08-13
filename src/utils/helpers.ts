import Icons from "@/components/Icon";
import { featuresType, plansType, stepsType, testimoniesType } from "@/types";

export const STEPS: stepsType[] = [
  {
    icon: Icons.auth,
    title: "Sign Up",
    description: "Create your free account to get started with Astra.",
  },
  {
    icon: Icons.customize,
    title: "Customize",
    description: "Choose a template and customize it to fit your needs.",
  },
  {
    icon: Icons.launch,
    title: "Launch",
    description: "Publish your website and share it with the world",
  },
];

export const FEATURES: featuresType[] = [
  {
    icon: Icons.bolt,
    title: "Fast Setup",
    description:
      "Get your website up and running in minutes with our intuitive AI-powered builder",
  },
  {
    icon: Icons.palette,
    title: "Customizable Templates",
    description:
      "Choose from a variety of stunning templates and customize them to suit your brand.",
  },
  {
    icon: Icons.seo,
    title: "SEO Optimized",
    description:
      "Built-in SEO features ensure your website ranks well on search engines.",
  },
  {
    icon: Icons.monitor,
    title: "Responsive Design",
    description:
      "Your website will look great on any device, from desktops to mobile phones.",
  },
  {
    icon: Icons.shop,
    title: "E-Commerce Ready",
    description:
      "Start selling online with our e-commerce features and integrations.",
  },
  {
    icon: Icons.server,
    title: "Secure Hosting",
    description:
      "Enjoy peace of mind with secure and reliable hosting for your website.",
  },
];

export const PLANS: plansType[] = [
  {
    type: "Starter",
    price: 0,
    text: "Perfect for trying out plura",
    features: ["Limited projects", "1 Team member", "Basic features"],
    textButton: "Start to free",
    href: "",
    main: false,
  },
  {
    type: "Unlimited Saas",
    price: 199,
    text: "The ultimate agency kit",
    features: [
      "Unlimited  projects",
      "5 Team members",
      "Advanced design tools",
      "Customizable domain",
    ],
    textButton: "Upgrade to Pro",
    href: "",
    main: true,
  },
  {
    type: "Enterprise",
    price: 399,
    text: "For serious agency owners",
    features: [
      "Unlimited projects",
      "Unlimited Team members",
      "Custom branding",
      "Priority support (24/7)",
    ],
    textButton: "Upgrade to Enterprise",
    href: "",
    main: false,
  },
];

export const TESTIMONIES: testimoniesType[] = [
  {
    name: "Osmar",
    user: "OsmarPT",
    text: "I've never been anything like this before, it's amazing. I love it.",
  },
  {
    name: "Osmar",
    user: "OsmarPT",
    text: "I don't know what to say. I'm speechless. This is amazing.",
  },
  {
    name: "Jenny",
    user: "Jenny10",
    text: "I'm at a loss for words. This is amazing. I love it.",
  },
  {
    name: "Diego",
    user: "DiegoSO",
    text: "I've never been anything like this before, it's amazing. I love it.",
  },
  {
    name: "Jenny",
    user: "Jenny10",
    text: "I'm at a loss for words. This is amazing. I love it.",
  },
  {
    name: "Diego",
    user: "DiegoSO",
    text: "I've never been anything like this before, it's amazing. I love it.",
  },
];
