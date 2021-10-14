import React from "react";
 
export default ({ heading, links ,isFirst,isLast}) => {
 
 
  return (
    <div className={isFirst?"footer-main-head footer-div":isLast?"footer-last footer-div":"footer-div" }>
      <h4 className={`foter-sub-head ${isFirst?"head-main-footer":""}`}>{heading}</h4>
      <div className="footer-sub-area">
        {links.map((x, i) => (
          isFirst?<p  key={i} className="foter-sub-a1">
          {x.name} {x.hasSpan ? x.span() : <></>}
        </p>:<a href={x.href} key={i} className="foter-sub-a">
          {x.name} {x.hasSpan ? x.span() : <></>}
        </a>
        ))}
      </div>
    </div>
  );
};
