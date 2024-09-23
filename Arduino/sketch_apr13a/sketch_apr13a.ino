#include <Servo.h>
#include <Key.h>
#include <Keypad.h>

const byte LINHAS = 4; // Linhas do teclado
const byte COLUNAS = 4; // Colunas do teclado
const char TECLAS_MATRIZ[LINHAS][COLUNAS] = { // Matriz de caracteres (mapeamento do teclado)
  {'1', '2', '3', 'A'},
  {'4', '5', '6', 'B'},
  {'7', '8', '9', 'C'},
  {'*', '0', '#', 'D'}
};



const int pinoServo = 12; //PINO DIGITAL UTILIZADO PELO SERVO  



  Servo s; //OBJETO DO TIPO SERVO



int pos; //POSIÃ‡ÃƒO DO SERVO




const byte PINOS_LINHAS[LINHAS] = {9
, 8, 7, 6}; // Pinos de conexao com as linhas do teclado
const byte PINOS_COLUNAS[COLUNAS] = {5, 4, 3, 2}; // Pinos de conexao com as colunas do teclado



Keypad teclado_personalizado = Keypad(makeKeymap(TECLAS_MATRIZ), PINOS_LINHAS, PINOS_COLUNAS, LINHAS, COLUNAS); // Inicia teclado



void setup() {
  Serial.begin(9600); // Inicia porta serial



    delay(5000);



  s.attach(pinoServo); //ASSOCIAÃ‡ÃƒO DO PINO DIGITAL AO OBJETO DO TIPO SERVO



  s.write(0); //INICIA O MOTOR NA POSIÃ‡ÃƒO 0Âº
}



void loop() {



  char leitura_teclas = teclado_personalizado.getKey(); // Atribui a variavel a leitura do teclado



  if (leitura_teclas) { // Se alguma tecla foi pressionada
    Serial.println(leitura_teclas); 
    // Imprime a tecla pressionada na porta serial



  if (leitura_teclas == '7')
  {

     delay(100);
     for(pos = 0; pos < 180; pos++){

      s.write(pos);

      delay (15);}



      delay(1000); 
  }
  else if (leitura_teclas == 'C')



  {



    for(pos = 180; pos >= 0; pos--){ //PARA "pos" IGUAL A 180, ENQUANTO "pos" MAIOR OU IGUAL QUE 0, DECREMENTA "pos"



    s.write(pos); //ESCREVE O VALOR DA POSIÃ‡ÃƒO QUE O SERVO DEVE GIRAR



    delay(15);



    }
    }



   



    
  }

}   
