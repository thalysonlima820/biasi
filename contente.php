<?php
$connectionString = "(DESCRIPTION=(ADDRESS_LIST = (ADDRESS = (PROTOCOL = TCP)(HOST = hostname)(PORT = portnumber)))(CONNECT_DATA=(SID=sid)(SERVER=DEDICATED)))";
$username = "seu_usuario";
$password = "sua_senha";

// Conecta ao banco de dados Oracle
$conn = oci_connect($username, $password, $connectionString);

if (!$conn) {
    $e = oci_error();
    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}

// Executa uma consulta
$query = "SELECT * FROM sua_tabela";
$statement = oci_parse($conn, $query);
oci_execute($statement);

// Obtém os resultados da consulta
while ($row = oci_fetch_array($statement, OCI_ASSOC+OCI_RETURN_NULLS)) {
    foreach ($row as $item) {
        echo $item . " ";
    }
    echo "<br>";
}

// Fecha a conexão com o banco de dados Oracle
oci_free_statement($statement);
oci_close($conn);
?>
