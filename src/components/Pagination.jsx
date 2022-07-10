import React from "react";
import BootstrapPagination from "react-bootstrap/Pagination";
import { useNavigate } from "react-router-dom";
import styles from "./Pagination.module.css";

function Pagination(props) {
  // Componenta va primi ca prop-uri numarul paginii care este activa, precum si url-ul catre care redirecteaza la click pe o noua pagina.
  let { active, baseUrl } = props;
  // Folosim hook-ul useNavigate.
  let navigate = useNavigate();
  // Daca nu am primit nicio valoare pentru prop-ul active, inseamna ca pagina 1 este activa.
  if (!active) {
    active = 1;
  }

  let items = [];
  for (let number = 1; number <= 5; number++) {
    // Vom avea 5 componente de tip BootstrapPagination.Item.
    items.push(
      <BootstrapPagination.Item
        key={number}
        // Prop-ul active va avea valoarea true daca pagina curenta este cea activa.
        active={number === Number(active)}
        // Daca pagina este activa, ii adaugam un id pentru stilizare (suprascrierea stilizarii de la Bootstrap).
        id={active ? styles.paginationActive : null}
        onClick={() => {
          // La click pe buton, navigam catre noua pagina.
          navigate(`${baseUrl}?page=${number}`);
          // Si scrollam inapoi in varful paginii.
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
      {/* Pe ecran afisam itemii paginatiei, impachetati de componenta BootstrapPagination. */}
      <BootstrapPagination className={styles.pagination}>
        {items}
      </BootstrapPagination>
    </div>
  );
}

export default Pagination;
