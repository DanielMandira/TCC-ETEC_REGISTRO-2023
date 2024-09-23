namespace Bibliotec
{
    public partial class Login : Form
    {
        public Login()
        {
            InitializeComponent();
        }
        usuario user = new usuario();
        private void btn_Entrar_Click(object sender, EventArgs e)
        {

            try
            {
                user.set_senha(txtSenha.Text);
                user.set_email(txtEmail.Text);
                // user.set_id(int.Parse(lbl_Id.Text));
                user.Login();
                dgvdados.DataSource = user.Login();


                int ids = dgvdados.SelectedCells[0].RowIndex;
                int senhas = dgvdados.SelectedCells[0].RowIndex;
                int emails = dgvdados.SelectedCells[0].RowIndex;
                DataGridViewRow idx = dgvdados.Rows[ids];
                DataGridViewRow Senha1 = dgvdados.Rows[senhas];
                DataGridViewRow Email1 = dgvdados.Rows[emails];
                string id = Convert.ToString(idx.Cells["id_usuario"].Value);
                string senha = Convert.ToString(Senha1.Cells["senha_usuario"].Value);
                string email = Convert.ToString(Email1.Cells["email_usuario"].Value);
                lblSenha.Text = senha;
                lblemail.Text = email;
                lbl_Id.Text = id;



                if (txtSenha.Text == lblSenha.Text)
                {
                    
                    this.Visible = false;
                    telaSeleção sel = new telaSeleção(lbl_Id.Text);
                    sel.Show();

                }
            }
            catch
            {
                if (txtSenha.Text == "" && txtEmail.Text == "")
                {
                    MessageBox.Show("Preencha o Campo Usuario ou o Campo Senha");
                }

                else
                {

                    MessageBox.Show("Usuario ou Senha Invalidos");
                }
            }



        }

        private void Login_Load(object sender, EventArgs e)
        {

        }

        private void btn_sair_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }
    }
}