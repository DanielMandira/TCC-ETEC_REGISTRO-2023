namespace Bibliotec
{
    partial class telaEmprestimo
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
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(telaEmprestimo));
            this.dgvAgenda = new System.Windows.Forms.DataGridView();
            this.btn_sair = new System.Windows.Forms.Button();
            this.button2 = new System.Windows.Forms.Button();
            this.groupBox1 = new System.Windows.Forms.GroupBox();
            this.id_usuario = new System.Windows.Forms.Label();
            this.lbl_id = new System.Windows.Forms.Label();
            this.id_livro = new System.Windows.Forms.Label();
            this.label1 = new System.Windows.Forms.Label();
            this.pictureBox2 = new System.Windows.Forms.PictureBox();
            this.pictureBox1 = new System.Windows.Forms.PictureBox();
            this.label13 = new System.Windows.Forms.Label();
            this.dgvEmpre = new System.Windows.Forms.DataGridView();
            ((System.ComponentModel.ISupportInitialize)(this.dgvAgenda)).BeginInit();
            this.groupBox1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox2)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.dgvEmpre)).BeginInit();
            this.SuspendLayout();
            // 
            // dgvAgenda
            // 
            this.dgvAgenda.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dgvAgenda.Location = new System.Drawing.Point(559, 210);
            this.dgvAgenda.Name = "dgvAgenda";
            this.dgvAgenda.RowTemplate.Height = 25;
            this.dgvAgenda.Size = new System.Drawing.Size(539, 176);
            this.dgvAgenda.TabIndex = 255;
            this.dgvAgenda.CellClick += new System.Windows.Forms.DataGridViewCellEventHandler(this.dgvAgenda_CellClick);
            this.dgvAgenda.CellContentClick += new System.Windows.Forms.DataGridViewCellEventHandler(this.dgvBD_CellContentClick);
            // 
            // btn_sair
            // 
            this.btn_sair.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(41)))), ((int)(((byte)(41)))), ((int)(((byte)(41)))));
            this.btn_sair.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.btn_sair.ForeColor = System.Drawing.Color.White;
            this.btn_sair.Location = new System.Drawing.Point(26, 411);
            this.btn_sair.Name = "btn_sair";
            this.btn_sair.Size = new System.Drawing.Size(78, 47);
            this.btn_sair.TabIndex = 254;
            this.btn_sair.Text = "Voltar";
            this.btn_sair.UseVisualStyleBackColor = false;
            this.btn_sair.Click += new System.EventHandler(this.btn_sair_Click);
            // 
            // button2
            // 
            this.button2.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.button2.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(41)))), ((int)(((byte)(41)))), ((int)(((byte)(41)))));
            this.button2.Location = new System.Drawing.Point(1020, 411);
            this.button2.Name = "button2";
            this.button2.Size = new System.Drawing.Size(78, 42);
            this.button2.TabIndex = 253;
            this.button2.Text = "Inserir Dados";
            this.button2.UseVisualStyleBackColor = true;
            this.button2.Click += new System.EventHandler(this.button2_Click);
            // 
            // groupBox1
            // 
            this.groupBox1.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(120)))), ((int)(((byte)(53)))), ((int)(((byte)(96)))));
            this.groupBox1.BackgroundImageLayout = System.Windows.Forms.ImageLayout.None;
            this.groupBox1.Controls.Add(this.id_usuario);
            this.groupBox1.Controls.Add(this.lbl_id);
            this.groupBox1.Controls.Add(this.id_livro);
            this.groupBox1.Controls.Add(this.label1);
            this.groupBox1.Controls.Add(this.pictureBox2);
            this.groupBox1.Controls.Add(this.pictureBox1);
            this.groupBox1.Controls.Add(this.label13);
            this.groupBox1.Location = new System.Drawing.Point(-40, -11);
            this.groupBox1.Margin = new System.Windows.Forms.Padding(4, 3, 4, 3);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Padding = new System.Windows.Forms.Padding(4, 3, 4, 3);
            this.groupBox1.Size = new System.Drawing.Size(1162, 138);
            this.groupBox1.TabIndex = 250;
            this.groupBox1.TabStop = false;
            // 
            // id_usuario
            // 
            this.id_usuario.AutoSize = true;
            this.id_usuario.BackColor = System.Drawing.Color.Transparent;
            this.id_usuario.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.id_usuario.ForeColor = System.Drawing.Color.White;
            this.id_usuario.Location = new System.Drawing.Point(961, 39);
            this.id_usuario.Name = "id_usuario";
            this.id_usuario.Size = new System.Drawing.Size(97, 20);
            this.id_usuario.TabIndex = 250;
            this.id_usuario.Text = "ID_usuario";
            this.id_usuario.Visible = false;
            // 
            // lbl_id
            // 
            this.lbl_id.AutoSize = true;
            this.lbl_id.BackColor = System.Drawing.Color.Transparent;
            this.lbl_id.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.lbl_id.ForeColor = System.Drawing.Color.White;
            this.lbl_id.Location = new System.Drawing.Point(786, 39);
            this.lbl_id.Name = "lbl_id";
            this.lbl_id.Size = new System.Drawing.Size(28, 20);
            this.lbl_id.TabIndex = 248;
            this.lbl_id.Text = "ID";
            this.lbl_id.Visible = false;
            // 
            // id_livro
            // 
            this.id_livro.AutoSize = true;
            this.id_livro.BackColor = System.Drawing.Color.Transparent;
            this.id_livro.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.id_livro.ForeColor = System.Drawing.Color.White;
            this.id_livro.Location = new System.Drawing.Point(873, 39);
            this.id_livro.Name = "id_livro";
            this.id_livro.Size = new System.Drawing.Size(76, 20);
            this.id_livro.TabIndex = 249;
            this.id_livro.Text = "ID_Livro";
            this.id_livro.Visible = false;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Segoe UI Black", 18F, ((System.Drawing.FontStyle)((System.Drawing.FontStyle.Bold | System.Drawing.FontStyle.Italic))), System.Drawing.GraphicsUnit.Point);
            this.label1.ForeColor = System.Drawing.Color.White;
            this.label1.Location = new System.Drawing.Point(490, 75);
            this.label1.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(196, 32);
            this.label1.TabIndex = 46;
            this.label1.Text = " no Emprestimo";
            // 
            // pictureBox2
            // 
            this.pictureBox2.Image = ((System.Drawing.Image)(resources.GetObject("pictureBox2.Image")));
            this.pictureBox2.Location = new System.Drawing.Point(198, 22);
            this.pictureBox2.Margin = new System.Windows.Forms.Padding(4, 3, 4, 3);
            this.pictureBox2.Name = "pictureBox2";
            this.pictureBox2.Size = new System.Drawing.Size(195, 93);
            this.pictureBox2.TabIndex = 45;
            this.pictureBox2.TabStop = false;
            // 
            // pictureBox1
            // 
            this.pictureBox1.Image = ((System.Drawing.Image)(resources.GetObject("pictureBox1.Image")));
            this.pictureBox1.Location = new System.Drawing.Point(46, 12);
            this.pictureBox1.Margin = new System.Windows.Forms.Padding(4, 3, 4, 3);
            this.pictureBox1.Name = "pictureBox1";
            this.pictureBox1.Size = new System.Drawing.Size(144, 120);
            this.pictureBox1.TabIndex = 44;
            this.pictureBox1.TabStop = false;
            // 
            // label13
            // 
            this.label13.AutoSize = true;
            this.label13.Font = new System.Drawing.Font("Segoe UI Black", 18F, ((System.Drawing.FontStyle)((System.Drawing.FontStyle.Bold | System.Drawing.FontStyle.Italic))), System.Drawing.GraphicsUnit.Point);
            this.label13.ForeColor = System.Drawing.Color.White;
            this.label13.Location = new System.Drawing.Point(495, 39);
            this.label13.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.label13.Name = "label13";
            this.label13.Size = new System.Drawing.Size(227, 32);
            this.label13.TabIndex = 12;
            this.label13.Text = "Inserção de Dados";
            // 
            // dgvEmpre
            // 
            this.dgvEmpre.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dgvEmpre.Location = new System.Drawing.Point(14, 210);
            this.dgvEmpre.Name = "dgvEmpre";
            this.dgvEmpre.RowTemplate.Height = 25;
            this.dgvEmpre.Size = new System.Drawing.Size(539, 176);
            this.dgvEmpre.TabIndex = 256;
            // 
            // telaEmprestimo
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 15F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1114, 479);
            this.Controls.Add(this.dgvEmpre);
            this.Controls.Add(this.dgvAgenda);
            this.Controls.Add(this.btn_sair);
            this.Controls.Add(this.button2);
            this.Controls.Add(this.groupBox1);
            this.Name = "telaEmprestimo";
            this.Text = "telaEmprestimo";
            this.Load += new System.EventHandler(this.telaEmprestimo_Load);
            ((System.ComponentModel.ISupportInitialize)(this.dgvAgenda)).EndInit();
            this.groupBox1.ResumeLayout(false);
            this.groupBox1.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox2)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.dgvEmpre)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private DataGridView dgvAgenda;
        private Button btn_sair;
        private Button button2;
        private GroupBox groupBox1;
        private Label id_usuario;
        private Label id_livro;
        private Label lbl_id;
        private Label label1;
        private PictureBox pictureBox2;
        private PictureBox pictureBox1;
        private Label label13;
        private DataGridView dgvEmpre;
    }
}