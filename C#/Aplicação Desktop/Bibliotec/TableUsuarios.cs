using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using MySql.Data;
using MySql.Data.MySqlClient;
using System.Data;
using System.Diagnostics;

namespace Bibliotec
{
    internal class TableUsuarios : conexao
    {
        private string nome_usuario;
        private string telefone_usuario;
        private int id_usuario;
        private string email_usuario;
        private string senha_usuario;
        private string tipo_usuario;
        private string genero_usuario;
        private DateTime data_nasc_usuario;
        private string imagem_usuario;
        private string endereco_usuario;

        public void set_nome_usuario(string nome_usuario)
        {
            this.nome_usuario = nome_usuario;
        }

        public string get_nome_usuario()
        {
            return this.nome_usuario;
        }

        public void set_telefone_usuario(string telefone_usuario)
        {
            this.telefone_usuario = telefone_usuario;
        }

        public string get_telefone_usuario()
        {
            return this.telefone_usuario.ToString();
        }

        public void set_id_usuario(int id_usuario)
        {
            this.id_usuario = id_usuario;
        }

        public string get_id_usuario()
        {
            return this.id_usuario.ToString();
        }

        public void set_email_usuario(string email_usuario)
        {
            this.email_usuario = email_usuario;
        }

        public string get_email_usuario()
        {
            return this.email_usuario;
        }

        public void set_senha_usuario(string senha_usuario)
        {
            this.senha_usuario = senha_usuario;
        }

        public string get_senha_usuario()
        {
            return this.senha_usuario;
        }

        public void set_tipo_usuario(string tipo_usuario)
        {
            this.tipo_usuario = tipo_usuario;
        }

        public string get_tipo_usuario()
        {
            return this.tipo_usuario;
        }

        public void set_genero_usuario(string genero_usuario)
        {
           this.genero_usuario = genero_usuario;
        }

        public string get_genero_usuario()
        {
            return this.genero_usuario;
        }

        public void setData_nasc_usuario(DateTime data_nasc_usuario)
        {
            this.data_nasc_usuario = data_nasc_usuario;
        }

        public DateTime get_data_nasc_usuario()
        {
            return this.data_nasc_usuario;
        }

    }
}