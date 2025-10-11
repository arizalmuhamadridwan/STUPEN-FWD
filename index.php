<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Formulir Nilai Ujian</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            color: #e0e0e0;
            margin: 0;
            padding: 20px;
        }

        .container {
            max-width: 600px;
            margin: 40px auto;
            padding: 20px;
            background: #1e1e1e;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        h2, h3 {
            border-bottom: 2px solid #eee;
            padding-bottom: 10px;
        }

        form label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }

        form input[type="text"],
        form input[type="email"],
        form input[type="number"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box; 
        }

        form input[type="submit"] {
            background-color: #e0e0e0;
            color: #1e1e1e;
            padding: 10px 15px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s ease;
        }

        form input[type="submit"]:hover {
            background-color: #414141ff;
            color: white;
        }

        hr {
            border: 0;
            height: 1px;
            background: #ccc;
            margin: 20px 0;
        }

        .result-output {
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 4px;
            background-color: #e9ecef;
            line-height: 1.6;
            color: #1e1e1e;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Formulir Nilai Ujian</h2>
        
        <form method="POST" action="">
            <label for="nama">Nama:</label>
            <input type="text" id="nama" name="nama" required><br>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required><br>

            <label for="nilai">Nilai Ujian (0-100):</label>
            <input type="number" id="nilai" name="nilai" required min="0" max="100"><br>

            <input type="submit" name="kirim" value="Kirim">
        </form>

        <hr>

        <?php

        if (isset($_POST['kirim'])) {
            $nama = htmlspecialchars($_POST['nama']);
            $email = htmlspecialchars($_POST['email']);
            $nilai = (int)$_POST['nilai'];

            if ($nilai >= 70 && $nilai <= 100) {
                $status = "Selamat $nama, Anda dinyatakan Lulus";
            } 
            else if ($nilai >= 0 && $nilai <= 69){
                $status = "$nama, Anda dinyatakan Remedial";
            }
            else {
                $status = "Masukan Input dengan benar (Nilai harus antara 0-100)";
            } 

            echo "<h3>Hasil:</h3>";
            echo "<div class='result-output'>";
            echo "Nama: $nama <br>";
            echo "Email: $email <br>";
            echo "Nilai: $nilai <br>";
            echo "Status: $status";
        }
        ?>
        
    </div>
</body>
</html>