import React, { useRef } from "react";
import catalog from "../../src/utils/catalog";
import styles from "../../src/style/style.module.css";


function Catalog() {
  let produkList = [...catalog]; 

  const produkContainerRef = useRef(null);

  const handleClick = () => {
    const newProduk = {
      id: produkList.length + 1,
      title: "HighTech",
      year: 2023,
      description: "Solusi digitalisasi bisnis.",
      image: "https://picsum.photos/150/150",
    };

    produkList.push(newProduk); 

    if (produkContainerRef.current) {
      const newProductElement = document.createElement("div");
      newProductElement.className = styles.card;
      newProductElement.innerHTML = `
        <img src="${newProduk.image}" alt="${newProduk.nama}" />
        <h3>${newProduk.title}</h3>
        <p>Tahun: ${newProduk.year}</p>
        <p>Deskripsi: ${newProduk.description}</p>
      `;

      produkContainerRef.current.appendChild(newProductElement);
    }

    console.log("Produk terbaru:", produkList);
    alert("Produk baru berhasil ditambahkan catalog website!");
  };

  return (
    <div className={styles.produkContainer}>
      <h1 className={styles.headline}>Catalog Kami</h1>
      <div className={styles.cardContainer} ref={produkContainerRef}>
        {produkList.map((item) => (
          <div key={item.id} className={styles.card}>
            <img src={item.image} alt={item.nama} className={styles.cardImg} />
            <h3>{item.title}</h3>
            <p>Tahun: {item.year}</p>
            <p>Deskripsi: {item.description}</p>
          </div>
        ))}
      </div>

      <button onClick={handleClick} className={styles.addButton}>
        Tambah Produk Baru
      </button>
    </div>
  );
}

export default Catalog;
