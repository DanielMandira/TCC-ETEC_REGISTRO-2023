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
    public partial class LivroCad : Form
    {
        public LivroCad()
        {
            InitializeComponent();
        }
        public LivroCad(string id)
        {
            InitializeComponent();
            lbl_id.Text = id;
        }

        private void LivroCad_Load(object sender, EventArgs e)
        {

        }

        private void btn_sair_Click(object sender, EventArgs e)
        {
            this.Hide();
            telaSeleção sel = new telaSeleção(lbl_id.Text);
            sel.Show();
        }
        
        private void button2_Click(object sender, EventArgs e)
        {

           
        }
        usuario user = new usuario();
        private void button1_Click(object sender, EventArgs e)
        {
         
            try
            {
 if (rbtn_acao.Checked)
            {
                user.set_genero(rbtn_acao.Text);
            }
            else if(rbtn_autoAjuda.Checked)
            {
                user.set_genero(rbtn_autoAjuda.Text);
            }
            else if (rbtn_aventura.Checked)
            {
                user.set_genero(rbtn_aventura.Text);
            }
            else if (rbtn_bibiografia.Checked)
            {
                user.set_genero(rbtn_bibiografia.Text);
            }
            else if (rbtn_didatico.Checked)
            {
                user.set_genero(rbtn_didatico.Text);
            }
            else if (rbtn_drama.Checked)
            {
                user.set_genero(rbtn_drama.Text);
            }
            else if (rbtn_enciclopedia.Checked)
            {
                user.set_genero(rbtn_enciclopedia.Text);
            }
            else if (rbtn_fabula.Checked)
            {
                user.set_genero(rbtn_fabula.Text);
            }
            else if (rbtn_fantasia.Checked)
            {
                user.set_genero(rbtn_fantasia.Text);
            }
            else if (rbtn_hqmangas.Checked)
            {
                user.set_genero(rbtn_hqmangas.Text);
            }
            else if (rbtn_literaturaInfa.Checked)
            {
                user.set_genero(rbtn_literaturaInfa.Text);
            }
            else if (rbtn_romance.Checked)
            {
                user.set_genero(rbtn_romance.Text);
            }
            else if (rbtn_sci_fi.Checked)
            {
                user.set_genero(rbtn_sci_fi.Text);
            }
            else if (rbtn_suspense.Checked)
            {
                user.set_genero(rbtn_suspense.Text);
            }
            else if (rbtn_terror.Checked)
            {
                user.set_genero(rbtn_terror.Text);
            }
            user.set_autor(txt_autor.Text);
            user.set_dimensaoLivro(txt_Dimensao.Text);
            user.set_sinopse(txt_Sinopse.Text);
            user.set_titulo(txt_titulo.Text);
            user.set_isbn(txt_isbn.Text);
            user.set_sobreAutor(txt_sobreAutor.Text);
            user.set_numeroPaginas(txt_NdePaginas.Text);
            user.set_dataPublicacao(txt_DataPublicacao.Text);
            user.set_idiomaLivro(txt_IdiomaLivro.Text);
            user.set_editora(txt_Editora.Text);
            user.set_capaLivro(txt_Capa.Text);
            user.set_quant(txt_quantLivro.Text);
            user.CadLivro();
            }
            finally
            {
                MessageBox.Show("Livro Cadastrado com Sucesso!");
                this.Hide();
                telaSeleção sel = new telaSeleção(lbl_id.Text);
                sel.Show();
            }
           
        }

        private void button1_Click_1(object sender, EventArgs e)
        {
            if (rbtn_acao.Checked)
            {
                user.set_genero(rbtn_acao.Text);
            }
            else if (rbtn_autoAjuda.Checked)
            {
                user.set_genero(rbtn_autoAjuda.Text);
            }
            else if (rbtn_aventura.Checked)
            {
                user.set_genero(rbtn_aventura.Text);
            }
            else if (rbtn_bibiografia.Checked)
            {
                user.set_genero(rbtn_bibiografia.Text);
            }
            else if (rbtn_didatico.Checked)
            {
                user.set_genero(rbtn_didatico.Text);
            }
            else if (rbtn_drama.Checked)
            {
                user.set_genero(rbtn_drama.Text);
            }
            else if (rbtn_enciclopedia.Checked)
            {
                user.set_genero(rbtn_enciclopedia.Text);
            }
            else if (rbtn_fabula.Checked)
            {
                user.set_genero(rbtn_fabula.Text);
            }
            else if (rbtn_fantasia.Checked)
            {
                user.set_genero(rbtn_fantasia.Text);
            }
            else if (rbtn_hqmangas.Checked)
            {
                user.set_genero(rbtn_hqmangas.Text);
            }
            else if (rbtn_literaturaInfa.Checked)
            {
                user.set_genero(rbtn_literaturaInfa.Text);
            }
            else if (rbtn_romance.Checked)
            {
                user.set_genero(rbtn_romance.Text);
            }
            else if (rbtn_sci_fi.Checked)
            {
                user.set_genero(rbtn_sci_fi.Text);
            }
            else if (rbtn_suspense.Checked)
            {
                user.set_genero(rbtn_suspense.Text);
            }
            else if (rbtn_terror.Checked)
            {
                user.set_genero(rbtn_terror.Text);
            }
           
        }

        private void rbtn_literaturaInfa_CheckedChanged(object sender, EventArgs e)
        {

        }

        private void button1_Click_2(object sender, EventArgs e)
        {
            this.Hide();
            telaSeleção sel = new telaSeleção(lbl_id.Text);
            sel.Show();
        }

        private void dgv__CellContentClick(object sender, DataGridViewCellEventArgs e)
        {

        }
    }
}
