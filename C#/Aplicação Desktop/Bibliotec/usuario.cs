using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using MySql.Data;
using MySql.Data.MySqlClient;
using System.Data;
using System.Security.Cryptography;
using System.Globalization;
using Org.BouncyCastle.Asn1.Tsp;

namespace Bibliotec
{
    internal class usuario : conexao
    {
        //( telefone_usuario, tipo_usuario, genero_usuario, data_nasc_usuario, imagem_usuario, endereco_usuario)

        private int _id;
        private string _nome;
        private string _sobrenome;
        private string _senha;
        private string _email;

        public void set_id(int idx)
        {
            this._id = idx;
        }
        public int get_id()
        {
            return this._id;
        }
        public void set_user(string user)
        {
            this._nome = user;
        }
        public string get_user()
        {
            return this._nome;
        }

        public void set_senha(string senha)
        {
            this._senha = senha;
        }
        public string get_senha()
        {
            return this._senha;
        }
        public void set_email(string email)
        {
            this._email = email;
        }
        public string get_email()
        {
            return this._email;
        }
        public void set_nome(string nome)
        {
            this._nome = nome;
        }
        public string get_nome()
        {
            return this._nome;
        }
        public void set_sobrenome(string sobrenome)
        {
            this._sobrenome = sobrenome;
        }
        public string get_sobrenome()
        {
            return this._sobrenome;
        }



        private string _telefone;
        private string _tipoUser;
        private string _generoUser;
        private string _dataNascUser;
        private string _fotoUser;
        private string _enderecoCidadeUser;
        private string _enderecoBairroUser;
        private string _enderecoRuaUser;
        private string _enderecoNUser;

        string senhaCriptografada;

        public void set_telefone(string telefone)
        {
            this._telefone = telefone;
        }
        public string get_telefone()
        {
            return this._telefone;
        }
        public void set_tipoUser(string tipoUser)
        {
            this._tipoUser = tipoUser;
        }
        public string get_tipoUser()
        {
            return this._tipoUser;
        }
        public void set_generoUser(string generoUser)
        {
            this._generoUser = generoUser;
        }
        public string get_generoUser()
        {
            return this._generoUser;
        }
        public void set_dataNascUser(string dataNascUser)
        {
            this._dataNascUser = dataNascUser;
        }
        public string get_dataNascUser()
        {
            return this._dataNascUser;
        }
        public void set_fotoUser(string fotoUser)
        {
            this._fotoUser = fotoUser;
        }
        public string get_fotoUser()
        {
            return this._fotoUser;
        }
        public void set_enderecoCidadeUser(string enderecoCidadeUser)
        {
            this._enderecoCidadeUser = enderecoCidadeUser;
        }
        public string get_enderecoCidadeUser()
        {
            return this._enderecoCidadeUser;
        }
        public void set_enderecoBairroUser(string enderecoBairroUser)
        {
            this._enderecoBairroUser = enderecoBairroUser;
        }
        public string get_enderecoBairroUser()
        {
            return this._enderecoBairroUser;
        }
        public void set_enderecoRuaUser(string enderecoRuaUser)
        {
            this._enderecoRuaUser = enderecoRuaUser;
        }
        public string get_enderecoRuaUser()
        {
            return this._enderecoRuaUser;
        }
        public void set_enderecoNUser(string enderecoNUser)
        {
            this._enderecoNUser = enderecoNUser;
        }
        public string get_enderecoNUser()
        {
            return this._enderecoNUser;
        }

        public string date()
        {
            var data = DateTime.Parse(get_dataNascUser()).ToString("yyyy/MM/dd");

            return data;
        }

        private string _titulo;
        private string _isbn;
        private string _dimensaoLivro;
        private string _autor;
        private string _sobreAutor;
        private string _numeroPaginas;
        private string _dataPublicacao;
        private string _idiomaLivro;
        private string _editora;
        private string _capaLivro;
        private string _sinopse;
        private string _genero;

        public void set_titulo(string titulo)
        {
            this._titulo = titulo;
        }
        public string get_titulo()
        {
            return this._titulo;
        }
        public void set_isbn(string isbn)
        {
            this._isbn = isbn;
        }
        public string get_isbn()
        {
            return this._isbn;
        }
        public void set_dimensaoLivro(string dimensaoLivro)
        {
            this._dimensaoLivro = dimensaoLivro;
        }
        public string get_dimensaoLivro()
        {
            return this._dimensaoLivro;
        }
        public void set_autor(string autor)
        {
            this._autor = autor;
        }
        public string get_autor()
        {
            return this._autor;
        }
        public void set_sobreAutor(string sobreAutor)
        {
            this._sobreAutor = sobreAutor;
        }
        public string get_sobreAutor()
        {
            return this._sobreAutor;
        }
        public void set_numeroPaginas(string numeroPaginas)
        {
            this._numeroPaginas = numeroPaginas;
        }
        public string get_numeroPaginas()
        {
            return this._numeroPaginas;
        }
        public void set_dataPublicacao(string dataPublicacao)
        {
            this._dataPublicacao = dataPublicacao;
        }
        public string get_dataPublicacao()
        {
            return this._dataPublicacao;
        }
        public void set_idiomaLivro(string idiomaLivro)
        {
            this._idiomaLivro = idiomaLivro;
        }
        public string get_idiomaLivro()
        {
            return this._idiomaLivro;
        }
        public void set_editora(string editora)
        {
            this._editora = editora;
        }
        public string get_editora()
        {
            return this._editora;
        }
        public void set_capaLivro(string capaLivro)
        {
            this._capaLivro = capaLivro;
        }
        public string get_capaLivro()
        {
            return this._capaLivro;
        }
        public void set_sinopse(string sinopse)
        {
            this._sinopse = sinopse;
        }
        public string get_sinopse()
        {
            return this._sinopse;
        }
        public void set_genero(string genero)
        {
            this._genero = genero;
        }
        public string get_genero()
        {
            return this._genero;
        }
        public string data()
        {
            var data = DateTime.Parse(get_dataPublicacao()).ToString("yyyy/MM/dd");
            return data;
        }



        public static string CalculaHash(string Senha)
        {
            try
            {
                System.Security.Cryptography.MD5 md5 = System.Security.Cryptography.MD5.Create();
                byte[] inputBytes = System.Text.Encoding.ASCII.GetBytes(Senha);
                byte[] hash = md5.ComputeHash(inputBytes);
                System.Text.StringBuilder sb = new System.Text.StringBuilder();
                for (int i = 0; i < hash.Length; i++)
                {
                    sb.Append(hash[i].ToString("X2"));
                }
                return sb.ToString(); // Retorna senha criptografada 
            }
            catch (Exception)
            {
                return null; // Caso encontre erro retorna nulo
            }

          
            
        }


        public DataTable Login()
        {
            string s = get_senha();
           
            senhaCriptografada = CalculaHash(s).ToLower();
        

            this.abrirConexao();
            string mSQL = "SELECT id_usuario,senha_usuario,email_usuario FROM usuario WHERE senha_usuario = '" + get_senha() + "' AND email_usuario = '" + get_email() + "';";

            MySqlCommand cmd = new MySqlCommand(mSQL, conectar);
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);

            this.fecharConexao();

            DataTable dt = new DataTable();
            da.Fill(dt);
            return dt;

        }
        public DataTable NomeUser()
        {
            this.abrirConexao();
            string mSQL = "SELECT nome_usuario FROM usuario WHERE id_usuario = '" + get_id() + "';";

            MySqlCommand cmd = new MySqlCommand(mSQL, conectar);
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);

            this.fecharConexao();

            DataTable dt = new DataTable();
            da.Fill(dt);
            return dt;
        }
        public DataTable CadUser()
        {
            this.abrirConexao();
            string mSQL = "INSERT INTO usuario (nome_usuario,sobrenome_usuario, telefone_usuario, email_usuario, senha_usuario, tipo_usuario, genero_usuario, data_nasc_usuario, imagem_usuario, cidade_usuario,bairro_usuario,rua_usuario,numeroResidencia_usuario,bio_usuario) VALUES ('" + get_nome() + "','" + get_sobrenome() + "','" + get_telefone() + "','" + get_email() + "',md5('" + get_senha() + "'),'" + get_tipoUser() + "','" + get_generoUser() + "','" + date() + "','" + get_fotoUser() + "','" + get_enderecoCidadeUser() + "','" + get_enderecoBairroUser() + "','" + get_enderecoRuaUser() + "','" + get_enderecoNUser() + "','"+get_bio()+"')";

            MySqlCommand cmd = new MySqlCommand(mSQL, conectar);
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);

            this.fecharConexao();

            DataTable dt = new DataTable();
            da.Fill(dt);
            return dt;
        }


        public DataTable CadGeneroLivro()
        {
            this.abrirConexao();
            string mSQL = "insert into livro_genero(codigo_genero,id_livro) values ( (select codigo_genero from genero_livro where nome_genero = '" + get_genero() + "'),(select max(id_livro) from livro));";

            MySqlCommand cmd = new MySqlCommand(mSQL, conectar);
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);

            this.fecharConexao();

            DataTable dt = new DataTable();
            da.Fill(dt);
            return dt;
        }
        private string _quant;
        public void set_quant(string quant)
        {
            this._quant = quant;
        }
        public string get_quant()
        {
            return this._quant;
        }
        public DataTable CadQuantiLivro()
        {
            this.abrirConexao();
            string mSQL = "insert into disponibilidade(id_livro,quantidade_livro) values ((select max(id_livro) from livro),'"+get_quant()+"');";

            MySqlCommand cmd = new MySqlCommand(mSQL, conectar);
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);

            this.fecharConexao();

            DataTable dt = new DataTable();
            da.Fill(dt);
            return dt;
        }
        public DataTable CadLivro()
        {
            try
            {
                //                                       DATE_FORMAT('$varDataNasc','%Y/%m/%d')   DATE_FORMAT('" + get_dataPublicacao() + ",%Y/%m/%d),'"

                this.abrirConexao();
                string mSQLLivro = "insert into livro(titulo_livro,isbn_10,dimensao_livro,autor_livro,sinopse_livro,sobre_autor,editora_livro,numero_paginas,data_publicacao,idioma_livro,imagem_livro) VALUES ('" + get_titulo() + "','" + get_isbn() + "','" + get_dimensaoLivro() + "','" + get_autor() + "','" + get_sinopse() + "','" + get_sobreAutor() + "','" + get_editora() + "','" + get_numeroPaginas() + "','" + data() + "','" + get_idiomaLivro() + "','" + get_capaLivro() + "');";

                MySqlCommand cmd = new MySqlCommand(mSQLLivro, conectar);
                MySqlDataAdapter da = new MySqlDataAdapter(cmd);

                this.fecharConexao();


                DataTable dt = new DataTable();
                da.Fill(dt);
                return dt;
            }

            finally { CadGeneroLivro();CadQuantiLivro(); }
        }

        private string _idLivro;

        public void set_idLivroUsuario(string Id)
        {
            this._idLivro = Id;
        }
        public string get_idLivroUsuario()
        {
            return this._idLivro;
        }

        private string _bio;

        public void set_bio(string Bio)
        {
            this._bio = Bio;
        }
        public string get_bio()
        {
            return this._bio;
        }


        public DataTable consultarLivro()
        {
            this.abrirConexao();
            string mSQL = "SELECT * FROM livro where id_livro = '" + get_idLivroUsuario()+"';";

            MySqlCommand cmd = new MySqlCommand(mSQL, conectar);
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);

            this.fecharConexao();

            DataTable dt = new DataTable();
            da.Fill(dt);
            return dt;
        }
        public DataTable consultarEditarLivro()
        {
            this.abrirConexao();
            string mSQL = "SELECT max(livro.id_livro) as livroId,titulo_livro,isbn_10,dimensao_livro,autor_livro,sinopse_livro,sobre_autor,editora_livro,numero_paginas,data_publicacao,idioma_livro,imagem_livro,genero_livro.codigo_genero as generoLivro,nome_genero FROM livro inner join livro_genero on livro.id_livro = livro_genero.id_livro inner join genero_livro on genero_livro.codigo_genero = livro_genero.codigo_genero where livro.id_livro = '" + get_idLivroUsuario() + "';";

            MySqlCommand cmd = new MySqlCommand(mSQL, conectar);
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);

            this.fecharConexao();

            DataTable dt = new DataTable();
            da.Fill(dt);
            return dt;
        }
        public DataTable consultarUsuario()
        {
            this.abrirConexao();
            string mSQL = "SELECT * FROM usuario where id_usuario = '" + get_idLivroUsuario() + "';";

            MySqlCommand cmd = new MySqlCommand(mSQL, conectar);
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);

            this.fecharConexao();

            DataTable dt = new DataTable();
            da.Fill(dt);
            return dt;
        }

        public DataTable editarLivro()
        {
            this.abrirConexao();
            string mSQL = "update livro set    where id_livro = '" + get_idLivroUsuario() + "';";

            MySqlCommand cmd = new MySqlCommand(mSQL, conectar);
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);

            this.fecharConexao();

            DataTable dt = new DataTable();
            da.Fill(dt);
            return dt;
        }
        public DataTable UpUsuario()
        {
            this.abrirConexao();
            string mSQL = "update usuario set  nome_usuario = '"+get_nome()+"',sobrenome_usuario = '"+get_sobrenome()+ "', email_usuario = '"+get_email()+ "', tipo_usuario = '"+get_tipoUser()+ "', telefone_usuario = '"+get_telefone()+ "', senha_usuario = md5('"+get_senha()+ "'), genero_usuario = '"+get_generoUser()+ "',data_nasc_usuario = '"+date()+ "', imagem_usuario = '"+get_fotoUser()+ "', rua_usuario = '"+get_enderecoRuaUser()+ "',cidade_usuario = '"+get_enderecoCidadeUser()+ "', bairro_usuario = '"+get_enderecoBairroUser()+ "',numeroResidencia_usuario = '"+get_enderecoNUser()+ "',bio_usuario = '"+get_bio()+"'  where id_usuario = '" + get_idLivroUsuario() + "';";

            MySqlCommand cmd = new MySqlCommand(mSQL, conectar);
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);

            this.fecharConexao();

            DataTable dt = new DataTable();
            da.Fill(dt);
            return dt;
        }
        public DataTable UpGeneroLivro()
        {
            this.abrirConexao();
            string mSQL = "update livro_genero set codigo_genero = (select codigo_genero from genero_livro where nome_genero = '" + get_genero() + "') where id_livro = '"+ get_idLivroUsuario()+"'";

            MySqlCommand cmd = new MySqlCommand(mSQL, conectar);
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);

            this.fecharConexao();

            DataTable dt = new DataTable();
            da.Fill(dt);
            return dt;
        }
        public DataTable UpLivro()
        {
            try
            {
                //                                       DATE_FORMAT('$varDataNasc','%Y/%m/%d')   DATE_FORMAT('" + get_dataPublicacao() + ",%Y/%m/%d),'"

                this.abrirConexao();
                string mSQLLivro = "update livro set titulo_livro = '" + get_titulo() + "',isbn_10 = '" + get_isbn() + "',dimensao_livro = '" + get_dimensaoLivro() + "',autor_livro = '" + get_autor() + "',sinopse_livro = '" + get_sinopse() + "',sobre_autor = '" + get_sobreAutor() + "',editora_livro = '" + get_editora() + "',numero_paginas = '" + get_numeroPaginas() + "',data_publicacao = '"+data()+"',idioma_livro = '" + get_idiomaLivro() + "',imagem_livro = '" + get_capaLivro() + "' where id_livro = '"+get_idLivroUsuario()+"'";

                MySqlCommand cmd = new MySqlCommand(mSQLLivro, conectar);
                MySqlDataAdapter da = new MySqlDataAdapter(cmd);

                this.fecharConexao();


                DataTable dt = new DataTable();
                da.Fill(dt);
                return dt;
            }

            finally { UpGeneroLivro(); }
        }
        public DataTable Agendamentos()
        {
          
                this.abrirConexao();
                string mSQLLivro = "select * from agendamento;";

                MySqlCommand cmd = new MySqlCommand(mSQLLivro, conectar);
                MySqlDataAdapter da = new MySqlDataAdapter(cmd);

                this.fecharConexao();


                DataTable dt = new DataTable();
                da.Fill(dt);
                return dt;
            
        }
        private string _agenda;
        public void set_agenda(string agenda)
        {
            this._agenda = agenda;
        }
        public string get_agenda()
        {
            return this._agenda;
        }

        public string datea()
        {
            var data = DateTime.Parse(get_agenda()).ToString("yyyy/MM/dd");

            return data;
        }
        public DataTable UpAgendamento()
        {
            
                //                                       DATE_FORMAT('$varDataNasc','%Y/%m/%d')   DATE_FORMAT('" + get_dataPublicacao() + ",%Y/%m/%d),'"

                this.abrirConexao();
                string mSQLLivro = "update agendamento set data_prevista_retirada = '"+datea()+"', status_agendamento = 'Agendado' where codigo_agendamento = '"+get_id()+"';";

                MySqlCommand cmd = new MySqlCommand(mSQLLivro, conectar);
                MySqlDataAdapter da = new MySqlDataAdapter(cmd);

                this.fecharConexao();


                DataTable dt = new DataTable();
                da.Fill(dt);
                return dt;
            
        }
        private string _livro;
        public void set_livro(string livro)
        {
            this._livro = livro;
        }
        public string get_livro()
        {
            return this._livro;
        }

        public DataTable deleteAgenda()
        {

            //                                       DATE_FORMAT('$varDataNasc','%Y/%m/%d')   DATE_FORMAT('" + get_dataPublicacao() + ",%Y/%m/%d),'"

            this.abrirConexao();
            string mSQLLivro = "delete from agendamento where id_usuario = '"+get_idLivroUsuario()+"' and id_livro = '"+get_livro()+"';";

            MySqlCommand cmd = new MySqlCommand(mSQLLivro, conectar);
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);

            this.fecharConexao();


            DataTable dt = new DataTable();
            da.Fill(dt);
            return dt;

        }
        public DataTable Emprest()
        {

            //                                       DATE_FORMAT('$varDataNasc','%Y/%m/%d')   DATE_FORMAT('" + get_dataPublicacao() + ",%Y/%m/%d),'"

            this.abrirConexao();
            string mSQLLivro = "select * from emprestimo where id_usuario = '" + get_idLivroUsuario() + "' and id_livro = '" + get_livro() + "';";

            MySqlCommand cmd = new MySqlCommand(mSQLLivro, conectar);
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);

            this.fecharConexao();


            DataTable dt = new DataTable();
            da.Fill(dt);
            return dt;

        }
        public DataTable Emprestimo()
        {

            //                                       DATE_FORMAT('$varDataNasc','%Y/%m/%d')   DATE_FORMAT('" + get_dataPublicacao() + ",%Y/%m/%d),'"

            this.abrirConexao();
            string mSQLLivro = "select * from emprestimo;";

            MySqlCommand cmd = new MySqlCommand(mSQLLivro, conectar);
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);

            this.fecharConexao();


            DataTable dt = new DataTable();
            da.Fill(dt);
            return dt;

        }
        public DataTable InsertEmpre()
        {
            try
            {
                //                                       DATE_FORMAT('$varDataNasc','%Y/%m/%d')   DATE_FORMAT('" + get_dataPublicacao() + ",%Y/%m/%d),'"

                this.abrirConexao();
                string mSQLLivro = "insert into emprestimo(data_emprestimo_livro,status_emprestimo,data_devolucao_livro,id_livro,id_usuario) values ('"+DateTime.Now.ToString("yyyy'-'MM'-'dd") + "','Emprestado',null,'"+get_livro()+ "','"+get_idLivroUsuario()+"');";

                MySqlCommand cmd = new MySqlCommand(mSQLLivro, conectar);
                MySqlDataAdapter da = new MySqlDataAdapter(cmd);

                this.fecharConexao();


                DataTable dt = new DataTable();
                da.Fill(dt);
                return dt;
            }

            finally { deleteAgenda(); }
        }
    }
}

