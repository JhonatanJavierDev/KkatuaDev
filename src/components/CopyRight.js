const CopyRight = () => {
  return (
    <div className="tr__section">
      <div className="tr__copyright">
        <div className="container">
          <div className="inner">
            <div className="left wow fadeInLeft" data-wow-duration="1s">
              <p>
                Developed by {' '}
                <a
                  href="https://github.com/jhonatanjavierdev"
                  target="_blank"
                  rel="noreferrer"
                >
                   Jhon Corella {' '}
                </a>
                © {new Date().getFullYear()}
              </p>
            </div>
            <div className="right wow fadeInRight" data-wow-duration="1s">
              <ul>
                <li>
                  <a href="#">{`Terms & Condition`}</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyRight;
