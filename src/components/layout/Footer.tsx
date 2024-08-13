import Link from "next/link";
import Icons from "../Icon";
import FooterNavItem from "../footer/FooterNavItem";
import FooterNavLink from "../footer/FooterNavLink";
import LightCircle from "../LightCircle";
import Container from "../Container";

export default function Footer() {
    return (
        <footer className="relative">
            <div className=" border-t border-b border-b-muted-foreground/20 border-t-muted-foreground/20 ">
                <Container>
                    <LightCircle className="bottom-0 -left-[20%]" />
                    <LightCircle className="-top-1/4 -right-[20%]" />
                    <div className="pt-24 pb-10 flex flex-col lg:flex-row gap-8 max-w-[1100px] mx-auto justify-between">
                        <div className="md:max-w-48">
                            <Icons.logo className="w-8 h-8" />
                            <p className="text-muted-foreground text-sm mt-4">Build beautiful, functional websites, without writing code</p>
                        </div>
                        <nav className="max-w-2xl w-full flex flex-wrap gap-4 justify-between">
                            <FooterNavItem title="Product">
                                <FooterNavLink href="/">Features</FooterNavLink>
                                <FooterNavLink href="/">Pricing</FooterNavLink>
                                <FooterNavLink href="/">Testimonials</FooterNavLink>
                                <FooterNavLink href="/">Integration</FooterNavLink>
                            </FooterNavItem>
                            <FooterNavItem title="Integrations">
                                <FooterNavLink href="/">Facebook</FooterNavLink>
                                <FooterNavLink href="/">Instagram</FooterNavLink>
                                <FooterNavLink href="/">Twitter</FooterNavLink>
                                <FooterNavLink href="/">LinkedIn</FooterNavLink>
                            </FooterNavItem>
                            <FooterNavItem title="Resources">
                                <FooterNavLink href="/">Blog</FooterNavLink>
                                <FooterNavLink href="/">Case</FooterNavLink>
                                <FooterNavLink href="/">Support</FooterNavLink>
                            </FooterNavItem>
                            <FooterNavItem title="Company">
                                <FooterNavLink href="/">About Us</FooterNavLink>
                                <FooterNavLink href="/">Privacy Policy</FooterNavLink>
                                <FooterNavLink href="/">Terms & Conditions</FooterNavLink>
                            </FooterNavItem>
                        </nav>
                    </div>

                </Container>
            </div>
            <div>
                <Container>
                    <div className="max-w-[1100px] mx-auto py-10">
                        <span className="text-muted-foreground text-sm">©{new Date().getFullYear()} Astra AI INC. All rights reserved.</span>
                    </div>
                </Container>
            </div>
        </footer>
    )
}
