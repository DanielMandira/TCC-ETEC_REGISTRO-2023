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
    public partial class EditarUsers : Form
    {
        public EditarUsers()
        {
            InitializeComponent();
           
        }
        public EditarUsers(string id, string igs)
        {
            InitializeComponent();
            lbl_id.Text = id;
            id_tabela.Text = igs;
        }
        usuario user = new usuario();
        private void EditarUsers_Load(object sender, EventArgs e)
        {
            dgvLivro.DataSource = user.consultarUsuario();

            user.set_idLivroUsuario(id_tabela.Text);

            dgvLivro.DataSource = user.consultarUsuario();


            //Alteração dos registros

            dgvLivro.Columns["id_usuario"].HeaderText = "ID";
            dgvLivro.Columns["nome_usuario"].HeaderText = "Nome";
            dgvLivro.Columns["sobrenome_usuario"].HeaderText = "Sobrenome";
            dgvLivro.Columns["email_usuario"].HeaderText = "Email";
            dgvLivro.Columns["tipo_usuario"].HeaderText = "Tipo_User";
            dgvLivro.Columns["telefone_usuario"].HeaderText = "Telefone";
            dgvLivro.Columns["senha_usuario"].HeaderText = "Senha_User";
            dgvLivro.Columns["genero_usuario"].HeaderText = "Gênero_User";
            dgvLivro.Columns["data_nasc_usuario"].HeaderText = "DataNascimento_User";
            dgvLivro.Columns["imagem_usuario"].HeaderText = "Foto_user";
            dgvLivro.Columns["rua_usuario"].HeaderText = "Rua";
            dgvLivro.Columns["cidade_usuario"].HeaderText = "Cidade";
            dgvLivro.Columns["bairro_usuario"].HeaderText = "Bairro";
            dgvLivro.Columns["numeroResidencia_usuario"].HeaderText = "N°";
            dgvLivro.Columns["bio_usuario"].HeaderText = "Bio";


            id_tabela.Text = lbl_id.Text;
            id_Linha.Text = dgvLivro.RowCount.ToString();
            if (int.Parse(id_Linha.Text) > 1)
            {
                int idx = dgvLivro.SelectedCells[0].RowIndex;
                DataGridViewRow selectedRow = dgvLivro.Rows[idx];



                
                string genero = Convert.ToString(selectedRow.Cells["genero_usuario"].Value);
                string tipo = Convert.ToString(selectedRow.Cells["tipo_usuario"].Value);

                if (genero == "Feminino") 
                {
                    rb_generoFeminino.Checked= true;
                }
                else if(genero == "Masculino")
                {
                    rb_generoMasculino.Checked= true;
                }
                else if (genero == "Outro")
                {
                    rb_generoOutro.Checked = true;
                }


                if (tipo ==  "Usuário " || tipo == "Usuário" )
                {
                    rb_usuario.Checked = true;
                }
                else if (tipo == "Professor" || tipo == "Professor ")
                {
                    rb_professor.Checked = true;
                }
                else if (tipo == "Administrador " || tipo == "Administrador")
                {
                    rb_adm.Checked= true;
                }
                

                txt_nome.Text = Convert.ToString(selectedRow.Cells["nome_usuario"].Value);
                txt_sobrenome.Text = Convert.ToString(selectedRow.Cells["sobrenome_usuario"].Value);
                txt_email.Text = Convert.ToString(selectedRow.Cells["email_usuario"].Value);
                txt_telefone.Text = Convert.ToString(selectedRow.Cells["telefone_usuario"].Value);
                txt_senha.Text = Convert.ToString(selectedRow.Cells["senha_usuario"].Value);
                txt_confirmaSenha.Text = Convert.ToString(selectedRow.Cells["senha_usuario"].Value);
                txt_dataNascimento.Text = Convert.ToString(selectedRow.Cells["data_nasc_usuario"].Value);
                txt_fotoUser.Text = Convert.ToString(selectedRow.Cells["imagem_usuario"].Value);
                txt_enderecoRuaUser.Text = Convert.ToString(selectedRow.Cells["rua_usuario"].Value);
                txt_enderecoCidadeUser.Text = Convert.ToString(selectedRow.Cells["cidade_usuario"].Value);
                txt_enderecoBairroUser.Text = Convert.ToString(selectedRow.Cells["bairro_usuario"].Value);
                txt_enderecoNUser.Text = Convert.ToString(selectedRow.Cells["numeroResidencia_usuario"].Value);
                txt_bio.Text = Convert.ToString(selectedRow.Cells["bio_usuario"].Value);
            }
           }

            private void btn_sair_Click(object sender, EventArgs e)
        {
            this.Hide();
            EditarBD sel = new EditarBD(lbl_id.Text);
            sel.Show();
        }

        private void btn_cadastrar_Click(object sender, EventArgs e)
        {
            try
            {
if (rb_generoFeminino.Checked = true)
            {
                
                user.set_generoUser(rb_generoFeminino.Text);
            }
            else if (rb_generoMasculino.Checked = true)
            {
                
                user.set_generoUser(rb_generoMasculino.Text);
            }
            else if (rb_generoOutro.Checked = true)
            {
               
                user.set_generoUser(rb_generoOutro.Text);
            }


            if (rb_usuario.Checked = true)
            {
               
                user.set_tipoUser(rb_usuario.Text);
            }
            else if (rb_professor.Checked = true)
            {
                user.set_tipoUser(rb_professor.Text);
            }
            else if(rb_adm.Checked= true)
            {
                user.set_tipoUser(rb_adm.Text);
            }

            user.set_nome(txt_nome.Text);
            user.set_sobrenome(txt_sobrenome.Text);
            user.set_email(txt_email.Text);
            user.set_telefone(txt_telefone.Text);
            user.set_senha(txt_senha.Text);
            user.set_dataNascUser(txt_dataNascimento.Text);
            user.set_fotoUser(txt_fotoUser.Text);
            user.set_enderecoRuaUser(txt_enderecoRuaUser.Text);
            user.set_enderecoCidadeUser(txt_enderecoCidadeUser.Text);
            user.set_enderecoBairroUser(txt_enderecoCidadeUser.Text);
            user.set_enderecoNUser(txt_enderecoNUser.Text);
            user.set_bio(txt_bio.Text);
            user.UpUsuario();
           
            }
            finally
            {
                MessageBox.Show("Usuário Alterado com Sucesso!");
                this.Hide();
                EditarBD sel = new EditarBD(lbl_id.Text);
                sel.Show();
            }
            
        }

        private void id_tabela_Click(object sender, EventArgs e)
        {

        }

        private void EditarUsers_MouseLeave(object sender, EventArgs e)
        {

        }
    }
}
