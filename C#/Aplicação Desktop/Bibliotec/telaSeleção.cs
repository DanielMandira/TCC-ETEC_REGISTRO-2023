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
    public partial class telaSeleção : Form
    {
        usuario user = new usuario();
        public telaSeleção()
        {
            InitializeComponent();
        }

        public telaSeleção(string id)
        {
            InitializeComponent();
            lbl_id.Text = id;
        }
        

        private void label4_Click(object sender, EventArgs e)
        {

        }

        private void btn_sair_Click(object sender, EventArgs e)
        {
            Application.Exit();

        }

        private void button2_Click(object sender, EventArgs e)
        {
            this.Hide();
            UserCad uc = new UserCad(lbl_id.Text);
            uc.Show();
        }

        private void btn_LivroCad_Click(object sender, EventArgs e)
        {
            this.Hide();
            LivroCad lc = new LivroCad(lbl_id.Text);
            lc.Show();
        }

        private void Btn_bd_Click(object sender, EventArgs e)
        {
            this.Hide();
            EditarBD bd = new EditarBD(lbl_id.Text);
            bd.Show();
        }

        private void btn_voltar_Click(object sender, EventArgs e)
        {
            this.Hide();
            Login log = new Login();
            log.Show();
        }

        private void lbl_id_Enter(object sender, EventArgs e)
        {

        }

        private void btn_nome_Click(object sender, EventArgs e)
        {
           
        }

        private void telaSeleção_Enter(object sender, EventArgs e)
        {
           
        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            
        }

        private void telaSeleção_Load(object sender, EventArgs e)
        {
            try 
            { 
                user.set_id(int.Parse(lbl_id.Text));
                user.NomeUser();
                dgvdados.DataSource = user.NomeUser();



                int nome = dgvdados.SelectedCells[0].RowIndex;

                DataGridViewRow nomes = dgvdados.Rows[nome];

                string Nome = Convert.ToString(nomes.Cells["nome_usuario"].Value);

                lbl_nome.Text = Nome;
                

            }
            catch
            {
               
            }
        }

        private void btn_inserirAgendamentos_Click(object sender, EventArgs e)
        {
            this.Hide();
            telaAgendamento bd = new telaAgendamento(lbl_id.Text);
            bd.Show();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            this.Hide();
            telaEmprestimo bd = new telaEmprestimo(lbl_id.Text);
            bd.Show();
        }
    }
}
