import React from "react";
import classes from "./Pagination.module.scss";

const Pagination = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
      <div className={classes.paginationWrapper}>
        {pages.map((page) => {
          return (
            <span
              className={props.currentPage === page && classes.selectedPage}
              onClick={(e) => {
                props.onPageChanged(page);
              }}
            >
              {page}{" "}
            </span>
          );
        })}
      </div>
  );
};

export default Pagination;
