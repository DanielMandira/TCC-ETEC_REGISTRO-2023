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
    public partial class telaAgendamento : Form
    {
        public telaAgendamento()
        {
            InitializeComponent();

        }

        public telaAgendamento(string id)
        {
            InitializeComponent();
            lbl_id.Text = id;
        }
        usuario user = new usuario();
        private void telaAgendamento_Load(object sender, EventArgs e)
        {
            dgvBD.DataSource = user.Agendamentos();
            


            //Alteração dos registros

        
        }
      
        private void btn_sair_Click(object sender, EventArgs e)
        {
            this.Hide();
            telaSeleção sel = new telaSeleção(lbl_id.Text);
            sel.Show();
        }

        private void dgvBD_CellMouseClick(object sender, DataGridViewCellMouseEventArgs e)
        {

        }

        private void dgvBD_CellClick(object sender, DataGridViewCellEventArgs e)
        {
            txt_id.Text = dgvBD.CurrentRow.Cells[2].Value.ToString();
            id_Linha.Text = dgvBD.CurrentRow.Cells[0].Value.ToString();
        }

        private void id_Linha_Click(object sender, EventArgs e)
        {

        }

        private void button2_Click(object sender, EventArgs e)
        {
            try
            {
                user.set_agenda(txt_id.Text);
                user.set_id(int.Parse(id_Linha.Text));
                user.UpAgendamento();
            }
            finally
            {
                MessageBox.Show("Agendamento Alterado com Sucesso!!");

                dgvBD.DataSource=user.Agendamentos();

            }
            
        }
    }
}
