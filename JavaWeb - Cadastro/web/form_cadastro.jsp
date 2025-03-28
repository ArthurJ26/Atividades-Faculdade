<%-- 
    Document   : form_cadastro
    Created on : 28 de mar. de 2025, 10:16:30
    Author     : laboratorio
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <h1>Cadastro de Usuario</h1>
        <form action="cadastrousuario.do" method="post">
          <p>  
            Digite o Nome:  <input type="text" name="nm" size="10">
          </p>
          <p>  
            Digite o Email:  <input type="text" name="em" size="10">
          </p>    
          <input type="submit" value="cadastrar">
        </form>
    </body>
</html>
