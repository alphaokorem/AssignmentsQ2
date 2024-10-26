export default function SmallBanners() {
  return (
    <div id="banners">
      <div id="rightbanner">
        <div id="title1">
          <h1 className="rightbannerheading1">
            Macbook
            <b>
              <b>Air</b>
            </b>
          </h1>
          <p>
            The new 15-inch MacBook Air makes room for more of what you love
            with a spacious Liquid Retina display.
          </p>
          <br />
          <button id="buymacbook" className="shop">
            Shop Now
          </button>
        </div>
        <div>
          <img id="macbook" src="/banners/macbook.png" alt="" />
        </div>
      </div>

      <div id="leftbanners">
        <div id="widebanner">
          <div id="psheading">
            <h1>Playstation 5</h1>
            <p>
              Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
              will redefine your PlayStation experience.
            </p>
          </div>
          <div id="ps5div">
            <img id="ps5" src="/banners/PlayStation.png" alt="" />
          </div>
        </div>

        <div id="squarebanners">
          <div className="squares" id="square1">
            <div className="squaretitles">
              <h2>
                Apple Airpod
                <b>
                  <b>Max</b>
                </b>
              </h2>
              <p>Computational audio. Listen, it&apos;s powerful</p>
            </div>
            <div>
              <img
                className="widebannerimages"
                src="/banners/airpods.png"
                alt=""
              />
            </div>
          </div>

          <div className="squares" id="square2">
            <div className="squaretitles">
              <h2>
                Apple Vision{" "}
                <b>
                  <b>Pro</b>
                </b>
              </h2>
              <p>An immersive way to experience entertainment</p>
            </div>
            <div>
              <img
                className="widebannerimages"
                src="/banners/vision.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
