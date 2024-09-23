using Org.BouncyCastle.Crypto;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using static System.Windows.Forms.VisualStyles.VisualStyleElement;

namespace Bibliotec
{
    public partial class EditarBD : Form
    {
        public EditarBD()
        {
            InitializeComponent();
        }

        public EditarBD(string id)
        {
            InitializeComponent();
            lbl_id.Text = id;
        }
    
        private void textBox8_TextChanged(object sender, EventArgs e)
        {

        }

        private void tableLayoutPanel1_Paint(object sender, PaintEventArgs e)
        {

        }

        private void btn_sair_Click(object sender, EventArgs e)
        {
            this.Hide();
            telaSeleção sel = new telaSeleção(lbl_id.Text);
            sel.Show();
        }

        private void comboBox1_SelectedIndexChanged(object sender, EventArgs e)
        {
            cBnome.Items.Add("Livros");
            cBnome.Items.Add("Usuários");
        }

        private void EditarBD_Enter(object sender, EventArgs e)
        {
           
        }

        private void button3_Click(object sender, EventArgs e)
        {
            
        }

        private void radioButton1_CheckedChanged(object sender, EventArgs e)
        {

            
        }

        private void EditarBD_Activated(object sender, EventArgs e)
        {
            
        }
        usuario user = new usuario();
        private void button1_Click(object sender, EventArgs e)
        {
            
            if (cBnome.Text == "Livros")
            {
                dgvBD.DataSource = user.consultarLivro();
                user.set_idLivroUsuario(txt_id.Text);
                    user.consultarLivro();
                

                
                

                //Alteração dos registros

                dgvBD.Columns["id_livro"].HeaderText = "Livro";
                dgvBD.Columns["titulo_livro"].HeaderText = "Título";
                dgvBD.Columns["isbn_10"].HeaderText = "Codigo Livro";
                dgvBD.Columns["dimensao_livro"].HeaderText = "Dimensão Livro";
                dgvBD.Columns["autor_livro"].HeaderText = "Autor";
                dgvBD.Columns["sinopse_livro"].HeaderText = "Sinopse";
                dgvBD.Columns["sobre_autor"].HeaderText = "Sobre Autor";
                dgvBD.Columns["editora_livro"].HeaderText = "Editora";
                dgvBD.Columns["numero_paginas"].HeaderText = "Número Paginas";
                dgvBD.Columns["data_publicacao"].HeaderText = "Data Publicação";
                dgvBD.Columns["idioma_livro"].HeaderText = "Idioma";
                dgvBD.Columns["imagem_livro"].HeaderText = "Capa Livro";
               
            }
            else if (cBnome.Text == "Usuários")
            {
                dgvBD.DataSource = user.consultarUsuario();
                user.set_idLivroUsuario(txt_id.Text);
                user.consultarUsuario();
               
                
                


                //Alteração dos registros

                dgvBD.Columns["id_usuario"].HeaderText = "Usuário";
                dgvBD.Columns["nome_usuario"].HeaderText = "Nome";
                dgvBD.Columns["sobrenome_usuario"].HeaderText = "Sobrenome";
                dgvBD.Columns["email_usuario"].HeaderText = "E-mail";
                dgvBD.Columns["tipo_usuario"].HeaderText = "Tipo User";
                dgvBD.Columns["telefone_usuario"].HeaderText = "WhatsApp";
                dgvBD.Columns["senha_usuario"].HeaderText = "Senha Login";
                dgvBD.Columns["genero_usuario"].HeaderText = "Genero User";
                dgvBD.Columns["data_nasc_usuario"].HeaderText = "Data Nascimento";
                dgvBD.Columns["imagem_usuario"].HeaderText = "Foto User";
                dgvBD.Columns["rua_usuario"].HeaderText = "Endereço Rua";
                dgvBD.Columns["cidade_usuario"].HeaderText = "Endereço Cidade";
                dgvBD.Columns["bairro_usuario"].HeaderText = "Endereço Bairro";
                dgvBD.Columns["numeroResidencia_usuario"].HeaderText = "Endereço Número Casa";
                dgvBD.Columns["bio_usuario"].HeaderText = "Biografia User";

                
            }

            

        }

        private void dataGridView1_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {

        }

        private void button2_Click(object sender, EventArgs e)
        {

            if (cBnome.Text == "Usuários")
            {
                dgvBD.DataSource = user.consultarUsuario();
                user.set_idLivroUsuario(txt_id.Text);
                user.consultarUsuario();


                //Alteração dos registros

                dgvBD.Columns["id_usuario"].HeaderText = "Usuário";
                dgvBD.Columns["nome_usuario"].HeaderText = "Nome";
                dgvBD.Columns["sobrenome_usuario"].HeaderText = "Sobrenome";
                dgvBD.Columns["email_usuario"].HeaderText = "E-mail";
                dgvBD.Columns["tipo_usuario"].HeaderText = "Tipo User";
                dgvBD.Columns["telefone_usuario"].HeaderText = "WhatsApp";
                dgvBD.Columns["senha_usuario"].HeaderText = "Senha Login";
                dgvBD.Columns["genero_usuario"].HeaderText = "Genero User";
                dgvBD.Columns["data_nasc_usuario"].HeaderText = "Data Nascimento";
                dgvBD.Columns["imagem_usuario"].HeaderText = "Foto User";
                dgvBD.Columns["rua_usuario"].HeaderText = "Endereço Rua";
                dgvBD.Columns["cidade_usuario"].HeaderText = "Endereço Cidade";
                dgvBD.Columns["bairro_usuario"].HeaderText = "Endereço Bairro";
                dgvBD.Columns["numeroResidencia_usuario"].HeaderText = "Endereço Número Casa";
                dgvBD.Columns["bio_usuario"].HeaderText = "Biografia User";


                id_Linha.Text = dgvBD.RowCount.ToString();
                id_Tabela.Text = txt_id.Text;
                
                if (int.Parse(id_Linha.Text) > 1)
                    {
                    this.Hide();
                    EditarUsers uc = new EditarUsers(lbl_id.Text,id_Tabela.Text);
                    uc.Show();
                    
                 
                }
                    else {
                    MessageBox.Show("Usuário Não Encontrado");
                    }

            }
            else if (cBnome.Text == "Livros")
            {
                dgvBD.DataSource = user.consultarLivro();
                user.set_idLivroUsuario(txt_id.Text);
                user.consultarLivro();


                //Alteração dos registros

                dgvBD.Columns["id_livro"].HeaderText = "Livro";
                dgvBD.Columns["titulo_livro"].HeaderText = "Título";
                dgvBD.Columns["isbn_10"].HeaderText = "Codigo Livro";
                dgvBD.Columns["dimensao_livro"].HeaderText = "Dimensão Livro";
                dgvBD.Columns["autor_livro"].HeaderText = "Autor";
                dgvBD.Columns["sinopse_livro"].HeaderText = "Sinopse";
                dgvBD.Columns["sobre_autor"].HeaderText = "Sobre Autor";
                dgvBD.Columns["editora_livro"].HeaderText = "Editora";
                dgvBD.Columns["numero_paginas"].HeaderText = "Número Paginas";
                dgvBD.Columns["data_publicacao"].HeaderText = "Data Publicação";
                dgvBD.Columns["idioma_livro"].HeaderText = "Idioma";
                dgvBD.Columns["imagem_livro"].HeaderText = "Capa Livro";

                id_Linha.Text = dgvBD.RowCount.ToString();
                id_Tabela.Text = txt_id.Text;
                if (int.Parse(id_Linha.Text) > 1)
                    {
                    this.Hide();
                    EdicaoLivro uc = new EdicaoLivro(lbl_id.Text, id_Tabela.Text);
                    uc.Show();
                    }
                else
                    {
                        MessageBox.Show("Livro Não Encontrado");
                    }
                
            }
            
        }

        private void EditarBD_Load(object sender, EventArgs e)
        {

        }
    }
}
