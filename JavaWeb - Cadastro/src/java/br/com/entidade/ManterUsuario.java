/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.com.entidade;

import br.com.controle.Usuarios;
import java.sql.PreparedStatement;


public class ManterUsuario extends DAO{
    public void inserir(Usuarios u) throws Exception {
    try {
    abrirBanco();
    String query = "INSERT INTO usuarios(codigo,nomer,email) "
            + "values(null,?,?)";
    pst=(PreparedStatement) con.prepareStatement(query);
    pst.setString(1, u.getNomer());
    pst.setString(2, u.getEmail());
    pst.execute();
    fecharBanco();
    } catch (Exception e) {
        System.out.println("Erro " + e.getMessage());
    }
    }
}
