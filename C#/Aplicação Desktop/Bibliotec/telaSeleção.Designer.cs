namespace Bibliotec
{
    partial class telaSeleção
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(telaSeleção));
            System.Windows.Forms.DataGridViewCellStyle dataGridViewCellStyle1 = new System.Windows.Forms.DataGridViewCellStyle();
            System.Windows.Forms.DataGridViewCellStyle dataGridViewCellStyle2 = new System.Windows.Forms.DataGridViewCellStyle();
            System.Windows.Forms.DataGridViewCellStyle dataGridViewCellStyle3 = new System.Windows.Forms.DataGridViewCellStyle();
            System.Windows.Forms.DataGridViewCellStyle dataGridViewCellStyle4 = new System.Windows.Forms.DataGridViewCellStyle();
            this.pictureBox4 = new System.Windows.Forms.PictureBox();
            this.btn_UserCad = new System.Windows.Forms.Button();
            this.label2 = new System.Windows.Forms.Label();
            this.Btn_bd = new System.Windows.Forms.Button();
            this.btn_sair = new System.Windows.Forms.Button();
            this.groupBox1 = new System.Windows.Forms.GroupBox();
            this.btn_inserirAgendamentos = new System.Windows.Forms.Button();
            this.btn_LivroCad = new System.Windows.Forms.Button();
            this.label4 = new System.Windows.Forms.Label();
            this.lbl_nome = new System.Windows.Forms.Label();
            this.btn_voltar = new System.Windows.Forms.Button();
            this.lbl_id = new System.Windows.Forms.Label();
            this.dgvdados = new System.Windows.Forms.DataGridView();
            this.button1 = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox4)).BeginInit();
            this.groupBox1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.dgvdados)).BeginInit();
            this.SuspendLayout();
            // 
            // pictureBox4
            // 
            this.pictureBox4.Image = ((System.Drawing.Image)(resources.GetObject("pictureBox4.Image")));
            this.pictureBox4.Location = new System.Drawing.Point(12, 12);
            this.pictureBox4.Name = "pictureBox4";
            this.pictureBox4.Size = new System.Drawing.Size(144, 120);
            this.pictureBox4.TabIndex = 163;
            this.pictureBox4.TabStop = false;
            // 
            // btn_UserCad
            // 
            this.btn_UserCad.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(159)))), ((int)(((byte)(160)))), ((int)(((byte)(255)))));
            this.btn_UserCad.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.btn_UserCad.ForeColor = System.Drawing.Color.Black;
            this.btn_UserCad.Location = new System.Drawing.Point(170, 154);
            this.btn_UserCad.Name = "btn_UserCad";
            this.btn_UserCad.Size = new System.Drawing.Size(143, 58);
            this.btn_UserCad.TabIndex = 162;
            this.btn_UserCad.Text = "Cadastro de usuários";
            this.btn_UserCad.UseVisualStyleBackColor = false;
            this.btn_UserCad.Click += new System.EventHandler(this.button2_Click);
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Font = new System.Drawing.Font("Segoe UI Black", 18F, ((System.Drawing.FontStyle)((System.Drawing.FontStyle.Bold | System.Drawing.FontStyle.Italic))), System.Drawing.GraphicsUnit.Point);
            this.label2.ForeColor = System.Drawing.Color.White;
            this.label2.Location = new System.Drawing.Point(308, 10);
            this.label2.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(250, 32);
            this.label2.TabIndex = 165;
            this.label2.Text = "Para onde deseja ir?";
            // 
            // Btn_bd
            // 
            this.Btn_bd.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(159)))), ((int)(((byte)(160)))), ((int)(((byte)(255)))));
            this.Btn_bd.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.Btn_bd.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(41)))), ((int)(((byte)(41)))), ((int)(((byte)(41)))));
            this.Btn_bd.Location = new System.Drawing.Point(170, 310);
            this.Btn_bd.Name = "Btn_bd";
            this.Btn_bd.Size = new System.Drawing.Size(143, 58);
            this.Btn_bd.TabIndex = 168;
            this.Btn_bd.Text = "Editar banco de dados";
            this.Btn_bd.UseVisualStyleBackColor = false;
            this.Btn_bd.Click += new System.EventHandler(this.Btn_bd_Click);
            // 
            // btn_sair
            // 
            this.btn_sair.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(41)))), ((int)(((byte)(41)))), ((int)(((byte)(41)))));
            this.btn_sair.Font = new System.Drawing.Font("Microsoft Sans Serif", 9.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.btn_sair.ForeColor = System.Drawing.Color.White;
            this.btn_sair.Location = new System.Drawing.Point(190, 459);
            this.btn_sair.Name = "btn_sair";
            this.btn_sair.Size = new System.Drawing.Size(145, 51);
            this.btn_sair.TabIndex = 169;
            this.btn_sair.Text = "Sair";
            this.btn_sair.UseVisualStyleBackColor = false;
            this.btn_sair.Click += new System.EventHandler(this.btn_sair_Click);
            // 
            // groupBox1
            // 
            this.groupBox1.BackColor = System.Drawing.SystemColors.InactiveBorder;
            this.groupBox1.BackgroundImageLayout = System.Windows.Forms.ImageLayout.None;
            this.groupBox1.Controls.Add(this.button1);
            this.groupBox1.Controls.Add(this.btn_inserirAgendamentos);
            this.groupBox1.Controls.Add(this.btn_LivroCad);
            this.groupBox1.Controls.Add(this.btn_UserCad);
            this.groupBox1.Controls.Add(this.Btn_bd);
            this.groupBox1.ForeColor = System.Drawing.Color.Brown;
            this.groupBox1.Location = new System.Drawing.Point(190, 69);
            this.groupBox1.Margin = new System.Windows.Forms.Padding(4, 3, 4, 3);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Padding = new System.Windows.Forms.Padding(4, 3, 4, 3);
            this.groupBox1.Size = new System.Drawing.Size(478, 384);
            this.groupBox1.TabIndex = 189;
            this.groupBox1.TabStop = false;
            // 
            // btn_inserirAgendamentos
            // 
            this.btn_inserirAgendamentos.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(159)))), ((int)(((byte)(160)))), ((int)(((byte)(255)))));
            this.btn_inserirAgendamentos.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.btn_inserirAgendamentos.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(41)))), ((int)(((byte)(41)))), ((int)(((byte)(41)))));
            this.btn_inserirAgendamentos.Location = new System.Drawing.Point(170, 79);
            this.btn_inserirAgendamentos.Name = "btn_inserirAgendamentos";
            this.btn_inserirAgendamentos.Size = new System.Drawing.Size(143, 58);
            this.btn_inserirAgendamentos.TabIndex = 170;
            this.btn_inserirAgendamentos.Text = "Cadastrar Agendamentos";
            this.btn_inserirAgendamentos.UseVisualStyleBackColor = false;
            this.btn_inserirAgendamentos.Click += new System.EventHandler(this.btn_inserirAgendamentos_Click);
            // 
            // btn_LivroCad
            // 
            this.btn_LivroCad.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(159)))), ((int)(((byte)(160)))), ((int)(((byte)(255)))));
            this.btn_LivroCad.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.btn_LivroCad.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(41)))), ((int)(((byte)(41)))), ((int)(((byte)(41)))));
            this.btn_LivroCad.Location = new System.Drawing.Point(170, 232);
            this.btn_LivroCad.Name = "btn_LivroCad";
            this.btn_LivroCad.Size = new System.Drawing.Size(143, 58);
            this.btn_LivroCad.TabIndex = 169;
            this.btn_LivroCad.Text = "Cadastro de Livros";
            this.btn_LivroCad.UseVisualStyleBackColor = false;
            this.btn_LivroCad.Click += new System.EventHandler(this.btn_LivroCad_Click);
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.BackColor = System.Drawing.Color.Transparent;
            this.label4.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.label4.ForeColor = System.Drawing.Color.White;
            this.label4.Location = new System.Drawing.Point(685, 9);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(125, 20);
            this.label4.TabIndex = 244;
            this.label4.Text = "Administrador:";
            this.label4.Click += new System.EventHandler(this.label4_Click);
            // 
            // lbl_nome
            // 
            this.lbl_nome.AutoSize = true;
            this.lbl_nome.BackColor = System.Drawing.Color.Transparent;
            this.lbl_nome.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.lbl_nome.ForeColor = System.Drawing.Color.White;
            this.lbl_nome.Location = new System.Drawing.Point(672, 51);
            this.lbl_nome.MaximumSize = new System.Drawing.Size(150, 0);
            this.lbl_nome.MinimumSize = new System.Drawing.Size(150, 0);
            this.lbl_nome.Name = "lbl_nome";
            this.lbl_nome.Size = new System.Drawing.Size(150, 20);
            this.lbl_nome.TabIndex = 245;
            this.lbl_nome.Text = "USer";
            this.lbl_nome.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // btn_voltar
            // 
            this.btn_voltar.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(41)))), ((int)(((byte)(41)))), ((int)(((byte)(41)))));
            this.btn_voltar.Font = new System.Drawing.Font("Microsoft Sans Serif", 9.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.btn_voltar.ForeColor = System.Drawing.Color.White;
            this.btn_voltar.Location = new System.Drawing.Point(523, 459);
            this.btn_voltar.Name = "btn_voltar";
            this.btn_voltar.Size = new System.Drawing.Size(145, 51);
            this.btn_voltar.TabIndex = 246;
            this.btn_voltar.Text = "Voltar";
            this.btn_voltar.UseVisualStyleBackColor = false;
            this.btn_voltar.Click += new System.EventHandler(this.btn_voltar_Click);
            // 
            // lbl_id
            // 
            this.lbl_id.AutoSize = true;
            this.lbl_id.BackColor = System.Drawing.Color.Transparent;
            this.lbl_id.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.lbl_id.ForeColor = System.Drawing.Color.White;
            this.lbl_id.Location = new System.Drawing.Point(410, 473);
            this.lbl_id.Name = "lbl_id";
            this.lbl_id.Size = new System.Drawing.Size(28, 20);
            this.lbl_id.TabIndex = 247;
            this.lbl_id.Text = "ID";
            this.lbl_id.Visible = false;
            this.lbl_id.Enter += new System.EventHandler(this.lbl_id_Enter);
            // 
            // dgvdados
            // 
            this.dgvdados.AllowUserToAddRows = false;
            this.dgvdados.AllowUserToDeleteRows = false;
            this.dgvdados.AllowUserToResizeColumns = false;
            this.dgvdados.AllowUserToResizeRows = false;
            dataGridViewCellStyle1.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(120)))), ((int)(((byte)(53)))), ((int)(((byte)(96)))));
            dataGridViewCellStyle1.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(120)))), ((int)(((byte)(53)))), ((int)(((byte)(96)))));
            dataGridViewCellStyle1.SelectionBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(120)))), ((int)(((byte)(53)))), ((int)(((byte)(96)))));
            dataGridViewCellStyle1.SelectionForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(120)))), ((int)(((byte)(53)))), ((int)(((byte)(96)))));
            dataGridViewCellStyle1.WrapMode = System.Windows.Forms.DataGridViewTriState.False;
            this.dgvdados.AlternatingRowsDefaultCellStyle = dataGridViewCellStyle1;
            this.dgvdados.BackgroundColor = System.Drawing.Color.FromArgb(((int)(((byte)(120)))), ((int)(((byte)(53)))), ((int)(((byte)(96)))));
            this.dgvdados.BorderStyle = System.Windows.Forms.BorderStyle.None;
            dataGridViewCellStyle2.Alignment = System.Windows.Forms.DataGridViewContentAlignment.MiddleLeft;
            dataGridViewCellStyle2.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(120)))), ((int)(((byte)(53)))), ((int)(((byte)(96)))));
            dataGridViewCellStyle2.Font = new System.Drawing.Font("Segoe UI", 9F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            dataGridViewCellStyle2.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(120)))), ((int)(((byte)(53)))), ((int)(((byte)(96)))));
            dataGridViewCellStyle2.SelectionBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(120)))), ((int)(((byte)(53)))), ((int)(((byte)(96)))));
            dataGridViewCellStyle2.SelectionForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(120)))), ((int)(((byte)(53)))), ((int)(((byte)(96)))));
            dataGridViewCellStyle2.WrapMode = System.Windows.Forms.DataGridViewTriState.False;
            this.dgvdados.ColumnHeadersDefaultCellStyle = dataGridViewCellStyle2;
            this.dgvdados.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dgvdados.ColumnHeadersVisible = false;
            this.dgvdados.Enabled = false;
            this.dgvdados.GridColor = System.Drawing.Color.FromArgb(((int)(((byte)(120)))), ((int)(((byte)(53)))), ((int)(((byte)(96)))));
            this.dgvdados.Location = new System.Drawing.Point(799, 631);
            this.dgvdados.MultiSelect = false;
            this.dgvdados.Name = "dgvdados";
            dataGridViewCellStyle3.Alignment = System.Windows.Forms.DataGridViewContentAlignment.MiddleLeft;
            dataGridViewCellStyle3.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(120)))), ((int)(((byte)(53)))), ((int)(((byte)(96)))));
            dataGridViewCellStyle3.Font = new System.Drawing.Font("Segoe UI", 9F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            dataGridViewCellStyle3.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(120)))), ((int)(((byte)(53)))), ((int)(((byte)(96)))));
            dataGridViewCellStyle3.SelectionBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(120)))), ((int)(((byte)(53)))), ((int)(((byte)(96)))));
            dataGridViewCellStyle3.SelectionForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(120)))), ((int)(((byte)(53)))), ((int)(((byte)(96)))));
            dataGridViewCellStyle3.WrapMode = System.Windows.Forms.DataGridViewTriState.True;
            this.dgvdados.RowHeadersDefaultCellStyle = dataGridViewCellStyle3;
            this.dgvdados.RowHeadersVisible = false;
            dataGridViewCellStyle4.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(120)))), ((int)(((byte)(53)))), ((int)(((byte)(96)))));
            dataGridViewCellStyle4.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(120)))), ((int)(((byte)(53)))), ((int)(((byte)(96)))));
            dataGridViewCellStyle4.SelectionBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(120)))), ((int)(((byte)(53)))), ((int)(((byte)(96)))));
            dataGridViewCellStyle4.SelectionForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(120)))), ((int)(((byte)(53)))), ((int)(((byte)(96)))));
            this.dgvdados.RowsDefaultCellStyle = dataGridViewCellStyle4;
            this.dgvdados.RowTemplate.Height = 25;
            this.dgvdados.ShowCellErrors = false;
            this.dgvdados.ShowCellToolTips = false;
            this.dgvdados.ShowEditingIcon = false;
            this.dgvdados.ShowRowErrors = false;
            this.dgvdados.Size = new System.Drawing.Size(10, 76);
            this.dgvdados.TabIndex = 248;
            this.dgvdados.UseWaitCursor = true;
            // 
            // button1
            // 
            this.button1.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(159)))), ((int)(((byte)(160)))), ((int)(((byte)(255)))));
            this.button1.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.button1.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(41)))), ((int)(((byte)(41)))), ((int)(((byte)(41)))));
            this.button1.Location = new System.Drawing.Point(170, 5);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(143, 58);
            this.button1.TabIndex = 171;
            this.button1.Text = "Cadastrar Emprestimo";
            this.button1.UseVisualStyleBackColor = false;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // telaSeleção
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 15F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(120)))), ((int)(((byte)(53)))), ((int)(((byte)(96)))));
            this.ClientSize = new System.Drawing.Size(811, 537);
            this.Controls.Add(this.dgvdados);
            this.Controls.Add(this.lbl_id);
            this.Controls.Add(this.btn_voltar);
            this.Controls.Add(this.lbl_nome);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.groupBox1);
            this.Controls.Add(this.btn_sair);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.pictureBox4);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedSingle;
            this.MaximizeBox = false;
            this.Name = "telaSeleção";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "telaSeleção";
            this.Load += new System.EventHandler(this.telaSeleção_Load);
            this.Enter += new System.EventHandler(this.telaSeleção_Enter);
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox4)).EndInit();
            this.groupBox1.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.dgvdados)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion
        private PictureBox pictureBox4;
        private Button btn_UserCad;
        private Label label2;
        private Button Btn_bd;
        private Button btn_sair;
        private GroupBox groupBox1;
        private Label label4;
        private Label lbl_nome;
        private Button btn_LivroCad;
        private Button btn_voltar;
        private Label lbl_id;
        private DataGridView dgvdados;
        private Button btn_inserirAgendamentos;
        private Button button1;
    }
}