using Microsoft.VisualBasic.ApplicationServices;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Bibliotec
{
    public partial class EdicaoLivro : Form
    {
        public EdicaoLivro(string id, string ida)
        {
            InitializeComponent();
            lbl_id.Text = id;
            id_Tabela.Text = ida;
        }

        usuario user = new usuario();
        private void EdicaoLivro_Load(object sender, EventArgs e)
        {
            
            dgvLivro.DataSource = user.consultarEditarLivro();
            
            user.set_idLivroUsuario(id_Tabela.Text);

            dgvLivro.DataSource = user.consultarEditarLivro();


            //Alteração dos registros

            dgvLivro.Columns["livroId"].HeaderText = "Livro";
            dgvLivro.Columns["titulo_livro"].HeaderText = "Título";
            dgvLivro.Columns["isbn_10"].HeaderText = "Codigo Livro";
            dgvLivro.Columns["dimensao_livro"].HeaderText = "Dimensão Livro";
            dgvLivro.Columns["autor_livro"].HeaderText = "Autor";
            dgvLivro.Columns["sinopse_livro"].HeaderText = "Sinopse";
            dgvLivro.Columns["sobre_autor"].HeaderText = "Sobre Autor";
            dgvLivro.Columns["editora_livro"].HeaderText = "Editora";
            dgvLivro.Columns["numero_paginas"].HeaderText = "Número Paginas";
            dgvLivro.Columns["data_publicacao"].HeaderText = "Data Publicação";
            dgvLivro.Columns["idioma_livro"].HeaderText = "Idioma";
            dgvLivro.Columns["imagem_livro"].HeaderText = "Capa Livro";


            dgvLivro.Columns["generoLivro"].HeaderText = "generoLivro";
            dgvLivro.Columns["nome_genero"].HeaderText = "Título";


            id_Tabela.Text = lbl_id.Text;
            id_Linha.Text = dgvLivro.RowCount.ToString();
            if (int.Parse(id_Linha.Text) > 1)
            {
                int idx = dgvLivro.SelectedCells[0].RowIndex;
                DataGridViewRow selectedRow = dgvLivro.Rows[idx];


                txt_titulo.Text = Convert.ToString(selectedRow.Cells["titulo_livro"].Value);
                txt_isbn.Text = Convert.ToString(selectedRow.Cells["isbn_10"].Value);
                txt_Dimensao.Text = Convert.ToString(selectedRow.Cells["dimensao_livro"].Value);
                txt_autor.Text = Convert.ToString(selectedRow.Cells["autor_livro"].Value);
                txt_Sinopse.Text = Convert.ToString(selectedRow.Cells["sinopse_livro"].Value);
                txt_sobreAutor.Text = Convert.ToString(selectedRow.Cells["sobre_autor"].Value);
                txt_Editora.Text = Convert.ToString(selectedRow.Cells["editora_livro"].Value);
                txt_NdePaginas.Text = Convert.ToString(selectedRow.Cells["numero_paginas"].Value);
                txt_DataPublicacao.Text = Convert.ToString(selectedRow.Cells["data_publicacao"].Value);
                txt_IdiomaLivro.Text = Convert.ToString(selectedRow.Cells["idioma_livro"].Value);
                txt_Capa.Text = Convert.ToString(selectedRow.Cells["imagem_livro"].Value);

                string genero = Convert.ToString(selectedRow.Cells["nome_genero"].Value);

                if (rbtn_literaturaInfa.Text == genero)
                {
                    rbtn_literaturaInfa.Checked = true;
                }
                else if (rbtn_enciclopedia.Text == genero)
                {
                    rbtn_enciclopedia.Checked = true;
                }
                else if (rbtn_fantasia.Text == genero)
                {
                    rbtn_fantasia.Checked = true;
                }
                else if (rbtn_suspense.Text == genero)
                {
                    rbtn_suspense.Checked = true;
                }
                else if (rbtn_drama.Text == genero)
                {
                    rbtn_drama.Checked = true;
                }
                else if (rbtn_acao.Text == genero)
                {
                    rbtn_acao.Checked = true;
                }
                else if (rbtn_terror.Text == genero)
                {
                    rbtn_terror.Checked = true;
                }
                else if (rbtn_romance.Text == genero)
                {
                    rbtn_romance.Checked = true;
                }
                else if (rbtn_sci_fi.Text == genero)
                {
                    rbtn_sci_fi.Checked = true;
                }
                else if (rbtn_fabula.Text == genero)
                {
                    rbtn_fabula.Checked = true;
                }
                else if (rbtn_aventura.Text == genero)
                {
                    rbtn_aventura.Checked = true;
                }
                else if (rbtn_autoAjuda.Text == genero)
                {
                    rbtn_autoAjuda.Checked = true;
                }
                else if (rbtn_didatico.Text == genero)
                {
                    rbtn_didatico.Checked = true;
                }
                else if (rbtn_hqmangas.Text == genero)
                {
                    rbtn_hqmangas.Checked = true;
                }
                else if (rbtn_bibiografia.Text == genero)
                {
                    rbtn_bibiografia.Checked = true;
                }


            }

        }

        private void btn_voltar_Click(object sender, EventArgs e)
        {
            
        }

        private void pictureBox3_Click(object sender, EventArgs e)
        {

        }

        private void pictureBox4_Click(object sender, EventArgs e)
        {

        }

        private void btn_Cadastrar_Click(object sender, EventArgs e)
        {

        }

        private void dgvLivro_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {
            
        }

        private void dgvLivro_CellContentClick_1(object sender, DataGridViewCellEventArgs e)
        {

        }

        private void dgvLivro_CellLeave(object sender, DataGridViewCellEventArgs e)
        {
   

         
        }

        private void btn_Cadastrar_Click_1(object sender, EventArgs e)
        {
            
                if (rbtn_literaturaInfa.Checked || rbtn_enciclopedia.Checked || rbtn_fantasia.Checked || rbtn_suspense.Checked || rbtn_drama.Checked || rbtn_acao.Checked || rbtn_terror.Checked || rbtn_romance.Checked || rbtn_sci_fi.Checked || rbtn_fabula.Checked || rbtn_aventura.Checked || rbtn_autoAjuda.Checked || rbtn_didatico.Checked || rbtn_hqmangas.Checked || rbtn_bibiografia.Checked)
                {
                    if (rbtn_literaturaInfa.Checked)
                    {
                        user.set_genero(rbtn_literaturaInfa.Text);
                    }
                    else if (rbtn_enciclopedia.Checked)
                    {
                        user.set_genero(rbtn_enciclopedia.Text);
                    }
                    else if (rbtn_fantasia.Checked)
                    {
                        user.set_genero(rbtn_fantasia.Text);
                    }
                    else if (rbtn_suspense.Checked)
                    {
                        user.set_genero(rbtn_suspense.Text);
                    }
                    else if (rbtn_drama.Checked)
                    {
                        user.set_genero(rbtn_drama.Text);
                    }
                    else if (rbtn_acao.Checked)
                    {
                        user.set_genero(rbtn_acao.Text);
                    }
                    else if (rbtn_terror.Checked)
                    {
                        user.set_genero(rbtn_terror.Text);
                    }
                    else if (rbtn_romance.Checked)
                    {
                        user.set_genero(rbtn_romance.Text);
                    }
                    else if (rbtn_sci_fi.Checked)
                    {
                        user.set_genero(rbtn_sci_fi.Text);
                    }
                    else if (rbtn_fabula.Checked)
                    {
                        user.set_genero(rbtn_fabula.Text);
                    }
                    else if (rbtn_aventura.Checked)
                    {
                        user.set_genero(rbtn_aventura.Text);
                    }
                    else if (rbtn_autoAjuda.Checked)
                    {
                        user.set_genero(rbtn_autoAjuda.Text);
                    }
                    else if (rbtn_didatico.Checked)
                    {
                        user.set_genero(rbtn_didatico.Text);
                    }
                    else if (rbtn_hqmangas.Checked)
                    {
                        user.set_genero(rbtn_hqmangas.Text);
                    }
                    else if (rbtn_bibiografia.Checked)
                    {
                        user.set_genero(rbtn_bibiografia.Text);
                    }
                    user.set_titulo(txt_titulo.Text);
                    user.set_isbn(txt_isbn.Text);
                    user.set_dimensaoLivro(txt_Dimensao.Text);
                    user.set_autor(txt_autor.Text);
                    user.set_sobreAutor(txt_sobreAutor.Text);
                    user.set_numeroPaginas(txt_NdePaginas.Text);
                    user.set_dataPublicacao(txt_DataPublicacao.Text);
                    user.set_editora(txt_Editora.Text);
                    user.set_capaLivro(txt_Capa.Text);
                    user.set_sinopse(txt_Sinopse.Text);
                    user.UpLivro();

                    MessageBox.Show("Livro Editado com Sucesso;");
                    this.Hide();
                    EditarBD sel = new EditarBD(lbl_id.Text);
                    sel.Show();
                }
                else
                {
                    MessageBox.Show("Selecione um Gênero para o Livro");
                }

            
          
                
            
            
           
            
        }

        private void dgvLivro_Enter(object sender, EventArgs e)
        {
            
        }

        private void btn_daravolta_Click(object sender, EventArgs e)
        {
            this.Hide();
            EditarBD sel = new EditarBD(lbl_id.Text);
            sel.Show();
        }
    }
}
