import React from "react";
import BootstrapPagination from "react-bootstrap/Pagination";
import { useHistory } from "react-router-dom";
import styles from "./Pagination.module.css";

function Pagination(props) {
  let { active, baseUrl } = props;
  let history = useHistory();
  if (!active) {
    active = 1;
  }

  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <BootstrapPagination.Item
        key={number}
        active={number === Number(active)}
        id={active ? styles.paginationActive : null}
        onClick={() => {
          history.push(`${baseUrl}?page=${number}`);
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        {number}
      </BootstrapPagination.Item>
    );
  }

  return (
    <div className="d-flex justify-content-center">
      <BootstrapPagination className={styles.pagination}>
        {items}
      </BootstrapPagination>
    </div>
  );
}

export default Pagination;
