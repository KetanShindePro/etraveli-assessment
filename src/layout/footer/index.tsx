import "./footer.css";
import { CiLinkedin } from "react-icons/ci";

export default function Footer() {
  return (
    <footer className="layout-footer">
      <span className="footer-logo">MoviePedia</span>
      <span className="footer-content">
        <a
          href="https://www.linkedin.com/in/ketan-shinde-47676a70/"
          target="_blank"
          rel="noreferrer"
        >
          <CiLinkedin size={"3rem"} />
        </a>
      </span>
      <span className="footer-copywrite">@Copywrite by MoviePedia</span>
    </footer>
  );
}
