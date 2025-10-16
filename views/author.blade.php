<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Data Author</title>
    <style>
        body {
            background-color: #1e1e1e; 
            color: #e0e0e0; 
            font-family: Arial, sans-serif;
            margin: 20px; 
        }

        h2 {
            color: #e0e0e0;
            text-align: center;
            margin-bottom: 25px;
        }

        table {
            width: 80%; 
            margin: 0 auto; 
            border-collapse: collapse; 
            border: 1px solid #444444; 
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); 
        }

        th {
            background-color: #333333;
            color: #e0e0e0;
            padding: 12px 15px;
            text-align: left;
            border-bottom: 1px solid #444444;
        }

        td {
            padding: 10px 15px;
            border-bottom: 1px solid #444444; 
            background-color: #252525; 
        }

        tr:nth-child(even) td {
            background-color: #2c2c2c;
        }

        tr:hover td {
            background-color: #3a3a3a; 
            cursor: pointer;
        }

        tr:last-child td {
            border-bottom: none;
        }
    </style>
</head>
<body>
    <h2>Daftar Author</h2>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Nama</th>
                <th>Foto</th>
                <th>Bio</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($authors as $author)
            <tr>
                <td>{{ $author['id'] }}</td>
                <td>{{ $author['name'] }}</td>
                <td>{{ $author['photo'] }}</td>
                <td>{{ $author['bio'] }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>
</body>
</html>