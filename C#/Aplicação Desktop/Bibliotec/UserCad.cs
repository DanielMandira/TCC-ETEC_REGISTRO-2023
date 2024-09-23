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
    public partial class UserCad : Form
    {
        public UserCad()
        {
            InitializeComponent();
        }

        public UserCad(string id)
        {
            InitializeComponent();
            lbl_id.Text= id;
        }
        private void btn_sair_Click(object sender, EventArgs e)
        {
            this.Hide();
            telaSeleção sel = new telaSeleção(lbl_id.Text);
            sel.Show();
        }
        usuario user = new usuario();

        private void button2_Click(object sender, EventArgs e)
        {
            try
            {
                user.set_nome(txt_nome.Text);
                user.set_sobrenome(txt_sobrenome.Text);
                user.set_telefone(txt_telefone.Text);
                user.set_email(txt_email.Text);
                user.set_senha(txt_senha.Text);

                if (rb_professor.Checked = true)
                {
                    user.set_tipoUser(rb_professor.Text);
                }
                else if (rb_usuario.Checked = true)
                {
                    user.set_tipoUser(rb_usuario.Text);
                }
                else if(rb_adm.Checked = true)
                {
                    user.set_tipoUser(rb_adm.Text);
                }


                if (rb_generoMasculino.Checked)
                {
                    user.set_generoUser(rb_generoMasculino.Text);
                }
                else if (rb_generoFeminino.Checked)
                {
                    user.set_generoUser(rb_generoFeminino.Text);
                }
                else if (rb_generoOutro.Checked)
                {
                    user.set_generoUser(rb_generoOutro.Text);
                }

                user.set_dataNascUser(txt_dataNascimento.Text);
                user.set_fotoUser(txt_fotoUser.Text);
                user.set_enderecoCidadeUser(txt_enderecoCidadeUser.Text);
                user.set_enderecoBairroUser(txt_enderecoBairroUser.Text);
                user.set_enderecoRuaUser(txt_enderecoRuaUser.Text);
                user.set_enderecoNUser(txt_enderecoNUser.Text);
                user.set_bio(txt_bio.Text);

                if (txt_senha.Text == txt_confirmaSenha.Text)
                {
                    user.CadUser();
                    MessageBox.Show("Usuário Cadastrado com Sucesso!");
                    
                }

                

            }
            finally
            {
                this.Visible = false;
                telaSeleção sel = new telaSeleção(lbl_id.Text);
                sel.Show();
            }

        }

        private void txt_nome_TextChanged(object sender, EventArgs e)
        {

        }

        private void rb_generoFeminino_CheckedChanged(object sender, EventArgs e)
        {
            
        }
    }
}
