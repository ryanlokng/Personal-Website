export default function Footer() {
  return (
    <footer role="contentinfo">
      <div className="footer-inner">
        <span className="footer-copy">© {new Date().getFullYear()} Ryan Ng</span>
        <span className="footer-tag">Winners don't give up</span>
        <span className="footer-copy">HKU Engineering</span>
      </div>
    </footer>
  );
}
