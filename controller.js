let userList = [];

export function setData(data) {
  userList = data;
}

export function getData() {
  return userList;
}

export function tampilkanData() {
  let table = `
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nama</th>
          <th>Umur</th>
          <th>Alamat</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
  `;
  userList.forEach(({ id, nama, umur, alamat, email }) => {
    table += `
      <tr>
        <td>${id}</td>
        <td>${nama}</td>
        <td>${umur}</td>
        <td>${alamat}</td>
        <td>${email}</td>
      </tr>
    `;
  });
  table += `</tbody></table>`;
  document.getElementById("output").innerHTML = table;
}

export function tambahData(userBaru) {
  const idBaru = userList.length > 0 ? userList[userList.length - 1].id + 1 : 1;
  userList = [...userList, { id: idBaru, ...userBaru }];
  tampilkanData();
}

export function hapusData(id) {
  const sebelum = userList.length;
  userList = userList.filter(u => u.id !== id);
  if (userList.length < sebelum) {
    alert(`Data dengan id ${id} berhasil dihapus!`);
  } else {
    alert(`Data dengan id ${id} tidak ditemukan!`);
  }
  tampilkanData();
}
