import { PiSwapDuotone } from "react-icons/pi";

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 mt-20">

            <aside>
                <div className="flex items-center gap-1">
                    <a className="text-3xl font-bold flex items-center gap-1">
                        Skill
                        <span className="text-emerald-400">
                            Swap
                        </span>

                        <span className="text-emerald-400 text-4xl">
                            <PiSwapDuotone />
                        </span>
                    </a>
                </div>

                <p className="max-w-xs">
                    Connecting learners and mentors through skill sharing.
                    Learn, teach, and grow together in your local community.
                </p>
            </aside>

            <nav>
                <h6 className="footer-title">Explore</h6>

                <a className="link link-hover">
                    Home
                </a>

                <a className="link link-hover">
                    Popular Skills
                </a>

                <a className="link link-hover">
                    Top Providers
                </a>

                <a className="link link-hover">
                    How It Works
                </a>
            </nav>

            <nav>
                <h6 className="footer-title">Company</h6>

                <a className="link link-hover">
                    About Us
                </a>

                <a className="link link-hover">
                    Contact
                </a>

                <a className="link link-hover">
                    Community
                </a>

                <a className="link link-hover">
                    Careers
                </a>
            </nav>

            <nav>
                <h6 className="footer-title">Legal</h6>

                <a className="link link-hover">
                    Privacy Policy
                </a>

                <a className="link link-hover">
                    Terms of Service
                </a>

                <a className="link link-hover">
                    Cookie Policy
                </a>

                <a className="link link-hover">
                    Support
                </a>
            </nav>

        </footer>
    );
};

export default Footer;