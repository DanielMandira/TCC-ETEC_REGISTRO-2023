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
    public partial class telaEmprestimo : Form
    {
        public telaEmprestimo()
        {
            InitializeComponent();
        }
        public telaEmprestimo(string id)
        {
            InitializeComponent();
            lbl_id.Text = id;
        }
        usuario user = new usuario();
        private void telaEmprestimo_Load(object sender, EventArgs e)
        {
            dgvEmpre.Visible = false;
            dgvAgenda.DataSource = user.Agendamentos();
        }

        private void dgvBD_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {

        }

        private void btn_sair_Click(object sender, EventArgs e)
        {
            this.Hide();
            telaSeleção sel = new telaSeleção(lbl_id.Text);
            sel.Show();
        }

        private void dgvAgenda_CellClick(object sender, DataGridViewCellEventArgs e)
        {
            try
            {
                id_livro.Text = dgvAgenda.CurrentRow.Cells[4].Value.ToString();
                id_usuario.Text = dgvAgenda.CurrentRow.Cells[3].Value.ToString();
            }
            finally
            { 
                
                dgvEmpre.Visible = true;
                dgvEmpre.DataSource = user.Emprest();
            }

        }

        private void button2_Click(object sender, EventArgs e)
        {
            try
            {
                user.set_idLivroUsuario(id_usuario.Text);
                user.set_livro(id_livro.Text);
                user.InsertEmpre();
            }
            finally
            {
                dgvEmpre.DataSource = user.Emprestimo();
                dgvAgenda.DataSource=user.Agendamentos();
            }
           
        }
    }
}
