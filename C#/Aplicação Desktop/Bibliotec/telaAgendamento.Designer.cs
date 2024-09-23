namespace Bibliotec
{
    partial class telaAgendamento
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
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(telaAgendamento));
            this.dgvBD = new System.Windows.Forms.DataGridView();
            this.btn_sair = new System.Windows.Forms.Button();
            this.button2 = new System.Windows.Forms.Button();
            this.txt_id = new System.Windows.Forms.TextBox();
            this.label12 = new System.Windows.Forms.Label();
            this.groupBox1 = new System.Windows.Forms.GroupBox();
            this.id_Tabela = new System.Windows.Forms.Label();
            this.id_Linha = new System.Windows.Forms.Label();
            this.lbl_id = new System.Windows.Forms.Label();
            this.label1 = new System.Windows.Forms.Label();
            this.pictureBox2 = new System.Windows.Forms.PictureBox();
            this.pictureBox1 = new System.Windows.Forms.PictureBox();
            this.label13 = new System.Windows.Forms.Label();
            ((System.ComponentModel.ISupportInitialize)(this.dgvBD)).BeginInit();
            this.groupBox1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox2)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).BeginInit();
            this.SuspendLayout();
            // 
            // dgvBD
            // 
            this.dgvBD.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dgvBD.Location = new System.Drawing.Point(119, 197);
            this.dgvBD.Name = "dgvBD";
            this.dgvBD.RowTemplate.Height = 25;
            this.dgvBD.Size = new System.Drawing.Size(539, 176);
            this.dgvBD.TabIndex = 249;
            this.dgvBD.CellClick += new System.Windows.Forms.DataGridViewCellEventHandler(this.dgvBD_CellClick);
            this.dgvBD.CellMouseClick += new System.Windows.Forms.DataGridViewCellMouseEventHandler(this.dgvBD_CellMouseClick);
            // 
            // btn_sair
            // 
            this.btn_sair.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(41)))), ((int)(((byte)(41)))), ((int)(((byte)(41)))));
            this.btn_sair.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.btn_sair.ForeColor = System.Drawing.Color.White;
            this.btn_sair.Location = new System.Drawing.Point(12, 518);
            this.btn_sair.Name = "btn_sair";
            this.btn_sair.Size = new System.Drawing.Size(78, 47);
            this.btn_sair.TabIndex = 248;
            this.btn_sair.Text = "Voltar";
            this.btn_sair.UseVisualStyleBackColor = false;
            this.btn_sair.Click += new System.EventHandler(this.btn_sair_Click);
            // 
            // button2
            // 
            this.button2.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.button2.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(41)))), ((int)(((byte)(41)))), ((int)(((byte)(41)))));
            this.button2.Location = new System.Drawing.Point(516, 444);
            this.button2.Name = "button2";
            this.button2.Size = new System.Drawing.Size(78, 42);
            this.button2.TabIndex = 245;
            this.button2.Text = "Editar";
            this.button2.UseVisualStyleBackColor = true;
            this.button2.Click += new System.EventHandler(this.button2_Click);
            // 
            // txt_id
            // 
            this.txt_id.Location = new System.Drawing.Point(310, 451);
            this.txt_id.Name = "txt_id";
            this.txt_id.Size = new System.Drawing.Size(141, 23);
            this.txt_id.TabIndex = 244;
            // 
            // label12
            // 
            this.label12.AutoSize = true;
            this.label12.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.label12.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(41)))), ((int)(((byte)(41)))), ((int)(((byte)(41)))));
            this.label12.Location = new System.Drawing.Point(216, 454);
            this.label12.Name = "label12";
            this.label12.Size = new System.Drawing.Size(53, 20);
            this.label12.TabIndex = 243;
            this.label12.Text = "Data:";
            // 
            // groupBox1
            // 
            this.groupBox1.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(120)))), ((int)(((byte)(53)))), ((int)(((byte)(96)))));
            this.groupBox1.BackgroundImageLayout = System.Windows.Forms.ImageLayout.None;
            this.groupBox1.Controls.Add(this.id_Tabela);
            this.groupBox1.Controls.Add(this.id_Linha);
            this.groupBox1.Controls.Add(this.lbl_id);
            this.groupBox1.Controls.Add(this.label1);
            this.groupBox1.Controls.Add(this.pictureBox2);
            this.groupBox1.Controls.Add(this.pictureBox1);
            this.groupBox1.Controls.Add(this.label13);
            this.groupBox1.Location = new System.Drawing.Point(-42, -9);
            this.groupBox1.Margin = new System.Windows.Forms.Padding(4, 3, 4, 3);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Padding = new System.Windows.Forms.Padding(4, 3, 4, 3);
            this.groupBox1.Size = new System.Drawing.Size(1080, 138);
            this.groupBox1.TabIndex = 241;
            this.groupBox1.TabStop = false;
            // 
            // id_Tabela
            // 
            this.id_Tabela.AutoSize = true;
            this.id_Tabela.BackColor = System.Drawing.Color.Transparent;
            this.id_Tabela.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.id_Tabela.ForeColor = System.Drawing.Color.White;
            this.id_Tabela.Location = new System.Drawing.Point(760, 95);
            this.id_Tabela.Name = "id_Tabela";
            this.id_Tabela.Size = new System.Drawing.Size(92, 20);
            this.id_Tabela.TabIndex = 250;
            this.id_Tabela.Text = "ID_Tabela";
            this.id_Tabela.Visible = false;
            // 
            // id_Linha
            // 
            this.id_Linha.AutoSize = true;
            this.id_Linha.BackColor = System.Drawing.Color.Transparent;
            this.id_Linha.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.id_Linha.ForeColor = System.Drawing.Color.White;
            this.id_Linha.Location = new System.Drawing.Point(760, 55);
            this.id_Linha.Name = "id_Linha";
            this.id_Linha.Size = new System.Drawing.Size(82, 20);
            this.id_Linha.TabIndex = 249;
            this.id_Linha.Text = "ID_Linha";
            this.id_Linha.Visible = false;
            this.id_Linha.Click += new System.EventHandler(this.id_Linha_Click);
            // 
            // lbl_id
            // 
            this.lbl_id.AutoSize = true;
            this.lbl_id.BackColor = System.Drawing.Color.Transparent;
            this.lbl_id.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.lbl_id.ForeColor = System.Drawing.Color.White;
            this.lbl_id.Location = new System.Drawing.Point(760, 75);
            this.lbl_id.Name = "lbl_id";
            this.lbl_id.Size = new System.Drawing.Size(28, 20);
            this.lbl_id.TabIndex = 248;
            this.lbl_id.Text = "ID";
            this.lbl_id.Visible = false;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Segoe UI Black", 18F, ((System.Drawing.FontStyle)((System.Drawing.FontStyle.Bold | System.Drawing.FontStyle.Italic))), System.Drawing.GraphicsUnit.Point);
            this.label1.ForeColor = System.Drawing.Color.White;
            this.label1.Location = new System.Drawing.Point(489, 75);
            this.label1.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(223, 32);
            this.label1.TabIndex = 46;
            this.label1.Text = " no Agendamento";
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
            this.label13.Location = new System.Drawing.Point(494, 39);
            this.label13.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.label13.Name = "label13";
            this.label13.Size = new System.Drawing.Size(223, 32);
            this.label13.TabIndex = 12;
            this.label13.Text = "Inserção de Datas";
            // 
            // telaAgendamento
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 15F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(833, 577);
            this.Controls.Add(this.dgvBD);
            this.Controls.Add(this.btn_sair);
            this.Controls.Add(this.button2);
            this.Controls.Add(this.txt_id);
            this.Controls.Add(this.label12);
            this.Controls.Add(this.groupBox1);
            this.Name = "telaAgendamento";
            this.Text = "telaAgendamento";
            this.Load += new System.EventHandler(this.telaAgendamento_Load);
            ((System.ComponentModel.ISupportInitialize)(this.dgvBD)).EndInit();
            this.groupBox1.ResumeLayout(false);
            this.groupBox1.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox2)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private DataGridView dgvBD;
        private Button btn_sair;
        private Button button2;
        private TextBox txt_id;
        private Label label12;
        private GroupBox groupBox1;
        private Label id_Tabela;
        private Label id_Linha;
        private Label lbl_id;
        private Label label1;
        private PictureBox pictureBox2;
        private PictureBox pictureBox1;
        private Label label13;
    }
}