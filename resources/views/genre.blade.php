<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Data Genre</title>
    <style>
        body {
            background-color: #1e1e1e;
            color: #e0e0e0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 30px;
        }

        h2 {
            color: #e0e0e0;
            text-align: center;
            margin-bottom: 25px;
        }

        table {
            width: 70%;
            margin: 0 auto;
            border-collapse: collapse;
            border: 1px solid #3a3a3a;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
            border-radius: 8px
        }

        th {
            background-color: #333333;
            color: #ffffff;
            padding: 15px 20px;
            text-align: left;
            text-transform: uppercase;
            font-size: 0.9em;
            letter-spacing: 0.1em;
        }

        td {
            padding: 12px 20px;
            border-bottom: 1px solid #2d2d2d;
            background-color: #252525;
            vertical-align: top;
        }

        tr:nth-child(even) td {
            background-color: #2c2c2c;
        }

        tr:hover td {
            background-color: #3a3a3a;
            transition: background-color 0.3s ease;
        }

        tr:last-child td {
            border-bottom: none;
        }
    </style>
</head>
<body>
    <h2>Daftar Genre</h2>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Nama</th>
                <th>Deskripsi</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($genres as $genre)
            <tr>
                <td>{{ $genre['id'] }}</td>
                <td>{{ $genre['name'] }}</td>
                <td>{{ $genre['description'] }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>
</body>
</html>