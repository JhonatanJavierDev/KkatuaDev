import Counter from "./Counter";
const About = ({ dark }) => {
  return (
    <div className="tr__section" id="about">
      <div className="tr__about">
        <div className="container">
          <div className="wrapper">
            <div className="left">
              <div className="image">
                <img src={`img/about/${dark ? 2 : 1}.jpg`} alt="image" />
                <div className="numbers year">
                  <div className="wrapper">
                    <h3>
                      <Counter end={18} />
                    </h3>
                    <span className="name">
                      Years of
                      <br />
                      Success
                    </span>
                  </div>
                </div>
                <div className="numbers project">
                  <div className="wrapper">
                    <h3>
                      <Counter end={9} />K
                    </h3>
                    <span className="name">
                      Total
                      <br />
                      Projects
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="title wow fadeInUp" data-wow-duration="1s">
                <span>{`I'm a Designer`}</span>
                <h3>Neque porro quisquam est qui...</h3>
              </div>
              <div className="text wow fadeInUp" data-wow-duration="1s">
                <p>
                  {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed diam id tellus tempus lobortis id ac urna. 
                  Etiam tempor ex sit amet quam viverra, id hendrerit sem venenatis. Etiam id lobortis elit. 
                  Cras elementum dignissim eleifend. Pellentesque nec augue porta, tincidunt lacus vel, sollicitudin arcu. 
                  Integer tellus quam, venenatis quis malesuada sed, placerat ac nulla. Curabitur a nisl orci. 
                  Pellentesque tincidunt erat magna, sed vestibulum ex aliquam ac. 
                  Curabitur nisi leo, vestibulum non scelerisque at, aliquet sed neque. 
                  Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                  Aenean purus ligula, mattis et sapien vel, tincidunt blandit mi.
                  `}
                </p>
              </div>
              <div
                className="tr__button wow fadeInUp"
                data-wow-duration="1s"
              >
                <a className="anchor" href="#contact">
                  <span>Hire Me</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="img/brushes/about/1.png" alt="image" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/about/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default About;
