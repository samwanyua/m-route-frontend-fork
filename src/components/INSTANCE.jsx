import "./INSTANCE.css";

const INSTANCE = () => {
  return (
    <section className="i-n-s-t-a-n-c-e1">
      <div className="sidebar3">
        <div className="sidebar-links3">
          <button className="btns9">
            <img className="icons9" alt="" src="/icons1.svg" />
            <div className="routes-plan9">Home</div>
          </button>
          <div className="btns10">
            <img className="icons10" alt="" src="/icons-11.svg" />
            <div className="routes-plan10">Routes plan</div>
          </div>
          <div className="btns11">
            <img className="icons11" alt="" src="/icons-21.svg" />
            <div className="routes-plan11">Settings</div>
          </div>
        </div>
      </div>
      <div className="f-r-a-m-e1">
        <div className="filter">
          <div className="f-r-a-m-e2">
            <img
              className="octiconfilter-24"
              loading="lazy"
              alt=""
              src="/octiconfilter24.svg"
            />
          </div>
          <div className="filter1">
            <div className="g-r-o-u-p-parent">
              <input className="g-r-o-u-p" type="text" />
              <div className="t-e-x-t">
                <img
                  className="iconsolidsearch"
                  alt=""
                  src="/iconsolidsearch.svg"
                />
              </div>
              <input
                className="search-routemerchandiserdate"
                placeholder="Search Route,merchandiser,date"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default INSTANCE;
