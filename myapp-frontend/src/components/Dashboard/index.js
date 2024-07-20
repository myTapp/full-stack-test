import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

const Dashboard = ({ token }) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://app2.mytapp.com.br/api/app/getTaps?e_id=456",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setData(response.data.info.data);
      } catch (err) {
        console.error("Error fetching data", err);
      }
    };

    fetchData();
  }, [token]);

  // Calcular os itens a serem exibidos na página atual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Navegar para a próxima página
  const nextPage = () => {
    if (currentPage < Math.ceil(data.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Navegar para a página anterior
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="div-container">
      <h2 className="title">NOSSAS CERVEJAS</h2>
      <ul className="list-out">
        {currentItems.map((item) => (
          <li className="list-in" key={item.tap_id}>
            <img className="img-beer" src={item.beer_image} alt="beer_image" />
            <p className="beer-name">{item.beer_name}</p>
            <p>Nível de alcool: {item.beer_alcohol}</p>
            <p>IBU: {item.beer_ibu}</p>
            <p>{item.beer_description}</p>
            <p>Tipo: {item.beer_style}</p>
            <p>Cervejaria: {item.brewery}</p>
            <p>
              {item.price_ml !== 0
                ? `Caneca 1 litro: R$ ${item.price_ml * 1000},00`
                : "Sem estoque"}
            </p>
          </li>
        ))}
      </ul>
      <div className="buttons-pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
