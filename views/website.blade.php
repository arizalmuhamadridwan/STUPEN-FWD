<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Website</title>
    <style>
        body { background-color: #111; color: #fff; font-family: Arial; text-align: center; }
        table { width: 80%; margin: 30px auto; border-collapse: collapse; }
        th, td { border: 1px solid #333; padding: 10px; }
        th { background-color: #222; }
        tr:nth-child(even) { background-color: #1a1a1a; }
    </style>
</head>
<body>
    <h2>Daftar Website</h2>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Judul</th>
                <th>Deskripsi</th>
                <th>Harga</th>
                <th>Foto</th>
                <th>Genre</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($websites as $website)
            <tr>
                <td>{{ $website['id'] }}</td>
                <td>{{ $website['title'] }}</td>
                <td>{{ $website['description'] }}</td>
                <td>{{ $website['prize'] }}</td>
                <td>{{ $website['image'] }}</td>
                <td>{{ $website['genre'] }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>
</body>
</html>
