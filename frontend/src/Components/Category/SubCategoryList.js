import React, { useEffect } from "react";
import { useState } from "react";
// import { getCategories } from '../../Function/Category';
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import { getsub, getsubs } from "../../Function/Sub";

function SubCategoryList() {
  const style = {
    color: "#203647",
  };
  const [sub, setsub] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getsubs().then((c) => {
      setsub(c.data);
      setLoading(false);
    });
  }, []);
  console.log(sub);
  const showCategory = () =>
    sub.map((c) => (
      <div key={c._id} className="btn col btn-lg btn-primary btn-raised m-3 ">
        <Link to={`/sub/${c.slug}`} style={style}>
          {c.name}
        </Link>
      </div>
    ));

  return (
    <div className="container" style={style}>
      <div className="row">
        {loading ? (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        ) : (
          showCategory()
        )}
      </div>
    </div>
  );
}

export default SubCategoryList;
