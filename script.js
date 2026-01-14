// Product Data (Engineering & Electronics)
const products = [
  {
    "id": 1,
    "category": "componentes",
    "image": "IMAGES/prod_1_LM386.png",
    "name": "Amplificador operacional LM386",
    "price": "$7 MXN",
    "description": "Su bajo gasto de energ\u00eda en reposo lo hace ideal para proyectos port\u00e1tiles."
  },
  {
    "id": 2,
    "category": "componentes",
    "image": "IMAGES/prod_2_LM393.png",
    "name": "Comparador de voltaje LM393",
    "price": "$7 MXN",
    "description": "Su dise\u00f1o permite que estos comparadores funcionen con una \u00fanica fuente de alimentaci\u00f3n (desde 2V a 36V)"
  },
  {
    "id": 3,
    "category": "componentes",
    "image": "IMAGES/prod_3_NE5532P.png",
    "name": "Amplificador operativo NE5532P",
    "price": "$7 MXN",
    "description": "Es un amplificador operacional doble de bajo ruido y alto rendimiento, ideal para audio profesional"
  },
  {
    "id": 4,
    "category": "componentes",
    "image": "IMAGES/prod_4_PC817C.png",
    "name": "Optoacoplador PC817C",
    "price": "$7 MXN",
    "description": "Es un optoacoplador que funciona aislando el\u00e9ctricamente dos circuitos"
  },
  {
    "id": 5,
    "category": "componentes",
    "image": "IMAGES/prod_5_ULN2003AN.png",
    "name": "Amplificador de se\u00f1ales ULN2003AN",
    "price": "$7 MXN",
    "description": "Es un controlador Darlington de 7 canales, ideal para manejar cargas como rel\u00e9s, motores a pasos y LEDs"
  },
  {
    "id": 6,
    "category": "componentes",
    "image": "IMAGES/prod_6_ULN2803APG.png",
    "name": "Circuito integrado ULN2803APG",
    "price": "$7 MXN",
    "description": "Es un driver de potencia para interfaz entre microcontroladores (se\u00f1ales l\u00f3gicas) y cargas que requieren m\u00e1s corriente o voltaje"
  },
  {
    "id": 7,
    "category": "componentes",
    "image": "IMAGES/prod_7_L7812CV.png",
    "name": "Regulador de voltaje L7812CV",
    "price": "$7 MXN",
    "description": "Es un regulador de voltaje lineal positivo que entrega una salida fija de12V con una corriente m\u00e1xima de 1.5A (con disipador)"
  },
  {
    "id": 8,
    "category": "componentes",
    "image": "IMAGES/prod_8_L7818CV.png",
    "name": "Regulador de voltaje L7818CV",
    "price": "$7 MXN",
    "description": "Es un regulador de voltaje lineal de tres terminales que proporciona una salida fija de 18V DC y puede entregar hasta 1.5A de corriente"
  },
  {
    "id": 9,
    "category": "componentes",
    "image": "IMAGES/prod_9_L7805CV.png",
    "name": "Regulador de voltaje L7805CV",
    "price": "$10 MXN",
    "description": "Es un circuito integrado (CI) lineal que funciona como regulador de voltaje positivo"
  },
  {
    "id": 10,
    "category": "componentes",
    "image": "IMAGES/prod_10_L7806CV.png",
    "name": "Regulador de voltaje L7806CV",
    "price": "$7 MXN",
    "description": "es un regulador de voltaje lineal de 3 terminales que proporciona una salida fija de +6V y puede entregar hasta 1.5A de corriente"
  },
  {
    "id": 11,
    "category": "componentes",
    "image": "IMAGES/prod_11_L7808CV.png",
    "name": "Regulador de voltaje L7808CV",
    "price": "$7 MXN",
    "description": "es un regulador de voltaje lineal fijo que proporciona una salida estable de 8 voltios (8V), con una corriente m\u00e1xima de 1.5 Amperios (1.5A)"
  },
  {
    "id": 12,
    "category": "componentes",
    "image": "IMAGES/prod_12_L7809CV.png",
    "name": "Regulador de voltaje L7809CV",
    "price": "$7 MXN",
    "description": "Es un regulador de voltaje lineal positivo con voltaje de salida de 9V DC y corriente de salida m\u00e1xima 1.5A"
  },
  {
    "id": 13,
    "category": "componentes",
    "image": "IMAGES/prod_13_L7810CV.png",
    "name": "Regulador de voltaje L7810CV",
    "price": "$7 MXN",
    "description": "Es un regulador de voltaje lineal positivo fijo que proporciona +10V de salida con una corriente m\u00e1xima de 1.5A"
  },
  {
    "id": 14,
    "category": "componentes",
    "image": "IMAGES/prod_14_L7824CV.png",
    "name": "Regulador de voltaje L7824CV",
    "price": "$7 MXN",
    "description": "es un regulador de voltaje lineal positivo fijo que proporciona una salida estable de 24V con una corriente m\u00e1xima de 1.5A"
  },
  {
    "id": 15,
    "category": "componentes",
    "image": "IMAGES/prod_15_L7912CV.png",
    "name": "Regulador de voltaje L7912CV",
    "price": "$13 MXN",
    "description": "es un regulador de voltaje lineal negativo que proporciona una salida fija de -12V y puede suministrar hasta 1.5A"
  },
  {
    "id": 16,
    "category": "componentes",
    "image": "IMAGES/prod_16_LM317T.png",
    "name": "Regulador de voltaje LM317T",
    "price": "$15 MXN",
    "description": "Es un regulador de voltaje lineal ajustable que sirve para proporcionar una salida de voltaje estable y controlada (de 1.2V a 37V) a partir de una fuente de entrada m\u00e1s alta"
  },
  {
    "id": 17,
    "category": "componentes",
    "image": "IMAGES/prod_17_L7815CV.png",
    "name": "Regulador de voltaje L7815CV",
    "price": "$7 MXN",
    "description": "Es un circuito integrado (IC) que funciona como un regulador de voltaje lineal positivo de salida fija"
  },
  {
    "id": 18,
    "category": "componentes",
    "image": "IMAGES/prod_18_LM337T.png",
    "name": "Regulador de voltaje negativo LM337T",
    "price": "$15 MXN",
    "description": "Es un regulador de voltaje negativo ajustable de m\u00e1s de 1.5 A con un rango de voltaje de salida de -1.2 a -37 V."
  },
  {
    "id": 19,
    "category": "componentes",
    "image": "IMAGES/prod_19_MOC3011.png",
    "name": "Optoacoplador MOC3011",
    "price": "$15 MXN",
    "description": "Es un optoacoplador con salida de TRIAC, ideal para controlar cargas de CA"
  },
  {
    "id": 20,
    "category": "componentes",
    "image": "IMAGES/prod_20_MOC3010.png",
    "name": "Optoacoplador MOC3010",
    "price": "$15 MXN",
    "description": "Es un optoacoplador con salida de fototriac, ideal para controlar cargas de CA"
  },
  {
    "id": 21,
    "category": "componentes",
    "image": "IMAGES/prod_21_LM324N.png",
    "name": "Amplificador operacional LM324N",
    "price": "$10 MXN",
    "description": "El LM324N es un amplificador operacional cu\u00e1druple (amplificador operacional) en el encapsulado DIP de 14 pines"
  },
  {
    "id": 22,
    "category": "componentes",
    "image": "IMAGES/prod_22_741CN.png",
    "name": "Amplificador operacional 741CN",
    "price": "$9 MXN",
    "description": "Es un amplificador operacional (Op-Amp) muy com\u00fan, conocido por su versatilidad en aplicaciones anal\u00f3gicas, con caracter\u00edsticas clave como una ganancia alta, bajo consumo"
  },
  {
    "id": 23,
    "category": "componentes",
    "image": "IMAGES/prod_23_UA741CP.png",
    "name": "Amplificador operacional UA741CP",
    "price": "$7 MXN",
    "description": "Es un amplificador operacional (OpAmp) de prop\u00f3sito general, conocido por su versatilidad, encapsulado DIP-8, y capacidades de ajuste de offset"
  },
  {
    "id": 24,
    "category": "componentes",
    "image": "IMAGES/prod_24_LM358N.png",
    "name": "Amplificador operacional LM358N",
    "price": "$7 MXN",
    "description": "Es un amplificador operativo adaptable conocido por sus amplificadores operacionales de alta ganancia y con frecuencia"
  },
  {
    "id": 25,
    "category": "componentes",
    "image": "IMAGES/prod_25_LM358P.png",
    "name": "Amplificador operacional LM358P",
    "price": "$7 MXN",
    "description": "Es un amplificador operativo adaptable conocido por sus amplificadores operacionales de alta ganancia y con frecuencia"
  },
  {
    "id": 26,
    "category": "componentes",
    "image": "IMAGES/prod_26_TL082CP.png",
    "name": "Amplificador operacional TL082CP",
    "price": "$20 MXN",
    "description": ""
  },
  {
    "id": 27,
    "category": "componentes",
    "image": "IMAGES/prod_27_2N3906.png",
    "name": "Tansistor 2N3906",
    "price": "$2 MXN",
    "description": "Es un transistor BJT PNP de prop\u00f3sito general, encapsulado TO-92, con valores clave como: Voltaje Colector-Emisor (VCE) de 40V, Corriente de Colector (IC) de 200mA"
  },
  {
    "id": 28,
    "category": "componentes",
    "image": "IMAGES/prod_28_BC547.png",
    "name": "Tansistor BC547",
    "price": "$2 MXN",
    "description": "Es un transistor BJT (Transistor de Uni\u00f3n Bipolar) NPN de prop\u00f3sito general, baja potencia y bajo costo"
  },
  {
    "id": 29,
    "category": "componentes",
    "image": "IMAGES/prod_29_2N2222.png",
    "name": "Tansistor 2N2222",
    "price": "$2 MXN",
    "description": "Es un componente NPN de prop\u00f3sito general, sirve principalmente para amplificar se\u00f1ales peque\u00f1as o como un interruptor electr\u00f3nico r\u00e1pido para controlar dispositivos de baja a media potencia"
  },
  {
    "id": 30,
    "category": "componentes",
    "image": "IMAGES/prod_30_2N3904.png",
    "name": "Tansistor 2N3904",
    "price": "$2 MXN",
    "description": "El transistor 2N3904 sirve como un componente electr\u00f3nico de prop\u00f3sito general, ideal para amplificar se\u00f1ales de baja potencia y para conmutaci\u00f3n (encender/apagar)"
  },
  {
    "id": 31,
    "category": "componentes",
    "image": "IMAGES/prod_31_BC548.png",
    "name": "Tansistor BC548",
    "price": "$4 MXN",
    "description": ""
  },
  {
    "id": 32,
    "category": "componentes",
    "image": "IMAGES/prod_32_052NE7N.png",
    "name": "Mosfet 052NE7N",
    "price": "$22 MXN",
    "description": "Es un componente semiconductor (un tipo de transistor) que act\u00faa como un interruptor o amplificador electr\u00f3nico, fundamental en el dise\u00f1o de circuitos de potencia"
  },
  {
    "id": 33,
    "category": "componentes",
    "image": "IMAGES/prod_33_IRF640.png",
    "name": "Transistor IRF640",
    "price": "$15 MXN",
    "description": "Es un transistor MOSFET de potencia de canal N, que sirve para amplificar o, m\u00e1s comunmente, conmutar (encender/apagar)"
  },
  {
    "id": 34,
    "category": "componentes",
    "image": "IMAGES/prod_34_6N60.png",
    "name": "Mosfet 6N60",
    "price": "$30 MXN",
    "description": "Es un transistor de potencia de canal N que sirve para conmutar y amplificar se\u00f1ales electr\u00f3nicas a alta velocidad"
  },
  {
    "id": 35,
    "category": "componentes",
    "image": "IMAGES/prod_35_FDS4559.png",
    "name": "Mosfet FDS4559",
    "price": "$  MXN",
    "description": "Es un componente semiconductor vers\u00e1til para aplicaciones que requieren conmutaci\u00f3n eficiente de se\u00f1ales y potencia, integrando dos MOSFETs (uno positivo y uno negativo)"
  },
  {
    "id": 36,
    "category": "componentes",
    "image": "IMAGES/prod_36_TIP120.png",
    "name": "Transistor TIP120",
    "price": "$10 MXN",
    "description": "Dise\u00f1ado especialmente para l\u00ednea industrial de uso general y aplicaciones de conmutaci\u00f3n de baja velocidad soportando una alta ganancia de corriente continua y baja tensi\u00f3n de saturaci\u00f3n entre colector/emisor."
  },
  {
    "id": 37,
    "category": "componentes",
    "image": "IMAGES/prod_37_TIP125.png",
    "name": "Transistor TIP125",
    "price": "$10 MXN",
    "description": "Dise\u00f1ado para aplicaciones de conmutaci\u00f3n y amplificaci\u00f3n de prop\u00f3sito general que manejan corrientes y voltajes moderados"
  },
  {
    "id": 38,
    "category": "componentes",
    "image": "IMAGES/prod_38_TIP31C.png",
    "name": "Transistor TIP31C",
    "price": "$12 MXN",
    "description": "Es un transistor de potencia NPN con valores clave como 100V de voltaje Colector-Emisor (VCEO), 3A de corriente de colector m\u00e1xima (IC), y 40W de disipaci\u00f3n de potencia (Pd)"
  },
  {
    "id": 39,
    "category": "componentes",
    "image": "IMAGES/prod_39_TIP32C.png",
    "name": "Transistor TIP32C",
    "price": "$10 MXN",
    "description": "Es un transistor de potencia NPN de prop\u00f3sito general usado para amplificaci\u00f3n de audio, conmutaci\u00f3n r\u00e1pida (encender/apagar cargas) y control de motores"
  },
  {
    "id": 40,
    "category": "componentes",
    "image": "IMAGES/prod_40_TIP41C.png",
    "name": "Transistor TIP41C",
    "price": "$10 MXN",
    "description": "Es un transistor de potencia NPN de prop\u00f3sito general usado para amplificaci\u00f3n de audio, conmutaci\u00f3n r\u00e1pida (encender/apagar cargas) y control de motores"
  },
  {
    "id": 41,
    "category": "componentes",
    "image": "IMAGES/prod_41_TIP42C.png",
    "name": "Transistor TIP42C",
    "price": "$10 MXN",
    "description": "Sirve principalmente para amplificaci\u00f3n de se\u00f1ales y conmutaci\u00f3n en aplicaciones de baja frecuencia, como controladores de motores, fuentes de alimentaci\u00f3n, amplificadores de audio y reguladores de voltaje"
  },
  {
    "id": 42,
    "category": "componentes",
    "image": "IMAGES/prod_42_LM35.png",
    "name": "Sensor de temperatura LM35",
    "price": "$25 MXN",
    "description": "Dise\u00f1ado para medir temperaturas en grados Celsius, el LM35 ofrece una salida lineal de 10 mV por cada grado Celsius, lo que facilita su lectura"
  },
  {
    "id": 43,
    "category": "componentes",
    "image": "IMAGES/prod_43_SS49E.png",
    "name": "Sensor efecto hall flat SS49E",
    "price": "$15 MXN",
    "description": "Sirve para detectar y medir campos magn\u00e9ticos, convirtiendo la intensidad magn\u00e9tica en una se\u00f1al de voltaje anal\u00f3gica proporcional,"
  },
  {
    "id": 44,
    "category": "componentes",
    "image": "IMAGES/prod_44_TIC226D.png",
    "name": "Triac TIC226D",
    "price": "$26 MXN",
    "description": "Es un componente semiconductor que funciona como un interruptor electr\u00f3nico bidireccional para corriente alterna (CA)"
  },
  {
    "id": 45,
    "category": "componentes",
    "image": "IMAGES/prod_45_C106MG.png",
    "name": "Transistor C106MG",
    "price": "$6 MXN",
    "description": "El C106 es un tiristor SCR (rectificador controlado de silicio) dise\u00f1ado para el control de corriente en aplicaciones de potencia moderada"
  },
  {
    "id": 46,
    "category": "componentes",
    "image": "IMAGES/prod_46_1N5404.png",
    "name": "Diodo 1N5404",
    "price": "$3 MXN",
    "description": "Este tipo de diodos son muy empleados en fuentes de alimentaci\u00f3n para convertir una tensi\u00f3n alterna en una tensi\u00f3n continua"
  },
  {
    "id": 47,
    "category": "componentes",
    "image": "IMAGES/prod_47_1N4001.png",
    "name": "Diodo 1N4001",
    "price": "$3 MXN",
    "description": "Sirve principalmente para rectificar corriente alterna (CA) a continua (CC) en fuentes de alimentaci\u00f3n"
  },
  {
    "id": 48,
    "category": "componentes",
    "image": "IMAGES/prod_48_1N4004.png",
    "name": "Diodo 1N4004",
    "price": "$3 MXN",
    "description": "Sirve principalmente para rectificar corriente alterna (CA) a continua (CC), convirtiendo se\u00f1ales de CA en CC en fuentes de alimentaci\u00f3n, y tambi\u00e9n se usa para protecci\u00f3n contra picos de voltaje en rel\u00e9s y motores"
  },
  {
    "id": 49,
    "category": "componentes",
    "image": "IMAGES/prod_49_1N4007.png",
    "name": "Diodo 1N4007",
    "price": "$3 MXN",
    "description": "Sirve principalmente para rectificar corriente alterna (CA) a corriente continua (CC), convirtiendo la CA en CC pulsante"
  },
  {
    "id": 50,
    "category": "componentes",
    "image": "IMAGES/prod_50_1N5406.png",
    "name": "Diodo 1N5406",
    "price": "$3 MXN",
    "description": "sirve principalmente para rectificar corriente alterna (CA) a corriente continua (CC) en aplicaciones de potencia, convirtiendo el voltaje"
  },
  {
    "id": 51,
    "category": "componentes",
    "image": "IMAGES/prod_51_1N5408.png",
    "name": "Diodo 1N5408",
    "price": "$3 MXN",
    "description": "Sirve principalmente para convertir corriente alterna (AC) en corriente continua (DC) en fuentes de alimentaci\u00f3n y adaptadores"
  },
  {
    "id": 52,
    "category": "componentes",
    "image": "IMAGES/prod_52_1N5817.png",
    "name": "Diodo 1N5817",
    "price": "$3 MXN",
    "description": "Es un componente electr\u00f3nico tipo Schottky que sirve para rectificaci\u00f3n de alta eficiencia, protecci\u00f3n de polaridad y como diodo de rueda libre"
  },
  {
    "id": 53,
    "category": "componentes",
    "image": "IMAGES/prod_53_1N5819.png",
    "name": "Diodo 1N5819",
    "price": "$3 MXN",
    "description": "Se usa para rectificaci\u00f3n de corriente r\u00e1pida y eficiente en fuentes de alimentaci\u00f3n conmutadas, convertidores DC-DC y circuitos de protecci\u00f3n de polaridad"
  },
  {
    "id": 54,
    "category": "componentes",
    "image": "IMAGES/prod_54_1N5822.png",
    "name": "Diodo 1N5822",
    "price": "$3 MXN",
    "description": "Es un rectificador de barrera Schottky de 3A y 40V, usado para convertir corriente alterna (AC) a continua (DC) en fuentes de alimentaci\u00f3n"
  },
  {
    "id": 55,
    "category": "componentes",
    "image": "IMAGES/prod_55_DB3_DIAC.png",
    "name": "Diodo DB3 DIAC",
    "price": "$2 MXN",
    "description": "Es un componente electr\u00f3nico semiconductor que sirve como un interruptor bidireccional de disparo"
  },
  {
    "id": 56,
    "category": "componentes",
    "image": "IMAGES/prod_56_FR107.png",
    "name": "Diodo FR107",
    "price": "$3 MXN",
    "description": "Sirve para rectificar corriente y conmutar r\u00e1pidamente, convirtiendo CA en CC y manejando frecuencias altas en fuentes de alimentaci\u00f3n"
  },
  {
    "id": 57,
    "category": "componentes",
    "image": "IMAGES/prod_57_FR207.png",
    "name": "Diodo FR207",
    "price": "$3 MXN",
    "description": "Es un componente electr\u00f3nico de rectificaci\u00f3n r\u00e1pida (Fast Recovery) que permite el flujo de corriente en una sola direcci\u00f3n,"
  },
  {
    "id": 58,
    "category": "componentes",
    "image": "IMAGES/prod_58_RL207.png",
    "name": "Diodo RL207",
    "price": "$3 MXN",
    "description": "Sirve principalmente para rectificar corriente alterna (CA) a corriente continua (CC) en fuentes de alimentaci\u00f3n, cargadores y circuitos de potencia"
  },
  {
    "id": 59,
    "category": "componentes",
    "image": "IMAGES/prod_59_UF4007.png",
    "name": "Diodo UF4007",
    "price": "$3 MXN",
    "description": "Sirve para rectificaci\u00f3n de alta frecuencia y conmutaci\u00f3n r\u00e1pida, convirtiendo corriente alterna (CA) en continua (CC) de manera eficiente en aplicaciones como fuentes conmutadas"
  },
  {
    "id": 60,
    "category": "componentes",
    "image": "IMAGES/prod_60_1N4148.png",
    "name": "Diodo zener 1N4148",
    "price": "$3 MXN",
    "description": "Es un diodo de conmutaci\u00f3n r\u00e1pida, no un diodo Zener t\u00edpico, y sirve para aplicaciones de alta velocidad como rectificaci\u00f3n de se\u00f1ales r\u00e1pidas"
  },
  {
    "id": 61,
    "category": "componentes",
    "image": "IMAGES/prod_61_1N4728A.png",
    "name": "Diodo zener 1N4728A",
    "price": "$3 MXN",
    "description": "Sirve principalmente para estabilizar y regular el voltaje a un nivel constante de 3.3V (voltios) en circuitos electr\u00f3nicos"
  },
  {
    "id": 62,
    "category": "componentes",
    "image": "IMAGES/prod_62_1N4732A.png",
    "name": "Diodo zener 1N4732A",
    "price": "$4 MXN",
    "description": "Sirve principalmente para regular y estabilizar el voltaje en un circuito, manteniendo una tensi\u00f3n constante de 4.7V a pesar de las fluctuaciones de corriente"
  },
  {
    "id": 63,
    "category": "componentes",
    "image": "IMAGES/prod_63_1N4733A.png",
    "name": "Diodo zener 1N4733A",
    "price": "$4 MXN",
    "description": "Sirve principalmente para regular y estabilizar voltajes en circuitos electr\u00f3nicos, actuando como un regulador de voltaje de precisi\u00f3n para mantener una salida constante de 5.1 voltios"
  },
  {
    "id": 64,
    "category": "componentes",
    "image": "IMAGES/prod_64_1N4735.png",
    "name": "Diodo zener 1N4735",
    "price": "$2 MXN",
    "description": "Sirve principalmente para regular y estabilizar voltajes en circuitos electr\u00f3nicos, actuando como un regulador de voltaje de baja corriente o como una referencia de voltaje constante"
  },
  {
    "id": 65,
    "category": "componentes",
    "image": "IMAGES/prod_65_1N4736.png",
    "name": "Diodo zener 1N4736",
    "price": "$2 MXN",
    "description": "Es un componente semiconductor clave para la regulaci\u00f3n de voltaje, dise\u00f1ado para mantener una tensi\u00f3n constante de 6.8 V a 1 W de potencia m\u00e1xima"
  },
  {
    "id": 66,
    "category": "componentes",
    "image": "IMAGES/prod_66_1N914.png",
    "name": "Diodo zener 1N914",
    "price": "$4 MXN",
    "description": "Es diodo de se\u00f1al peque\u00f1a de prop\u00f3sito general, ideal para conmutaci\u00f3n r\u00e1pida y rectificaci\u00f3n de baja potencia"
  },
  {
    "id": 67,
    "category": "componentes",
    "image": "IMAGES/prod_67_1N7438.png",
    "name": "Diodo zener 1N7438",
    "price": "$4 MXN",
    "description": "Es un componente electr\u00f3nico dise\u00f1ado para mantener un voltaje constante en sus terminales cuando se polariza inversamente"
  },
  {
    "id": 68,
    "category": "componentes",
    "image": "IMAGES/prod_68_2W10.png",
    "name": "Puente rectificador 2W10",
    "price": "$5 MXN",
    "description": "Sirve para convertir corriente alterna (CA) en corriente continua (CC), una funci\u00f3n esencial en la mayor\u00eda de las fuentes de poder"
  },
  {
    "id": 69,
    "category": "componentes",
    "image": "IMAGES/prod_69_KBL406.png",
    "name": "Puente rectificador KBL406",
    "price": "$8 MXN",
    "description": "Sirve para convertir corriente alterna (AC) en corriente directa pulsante (DC)"
  },
  {
    "id": 70,
    "category": "componentes",
    "image": "IMAGES/prod_70_KBL608.png",
    "name": "Puente rectificador KBL608",
    "price": "$10 MXN",
    "description": "Sirve para convertir corriente alterna (CA) en corriente continua (CC), funcionando como un rectificador de onda completa"
  },
  {
    "id": 71,
    "category": "componentes",
    "image": "IMAGES/prod_71_KBP206.png",
    "name": "Puente rectificador KBP206",
    "price": "$5 MXN",
    "description": "Sirve para convertir corriente alterna (CA) en corriente continua (CC), transformando una se\u00f1al que oscila entre positivo y negativo en una se\u00f1al siempre positiva"
  },
  {
    "id": 72,
    "category": "componentes",
    "image": "IMAGES/prod_72_KBP307.png",
    "name": "Puente rectificador KBP307",
    "price": "$5 MXN",
    "description": "Sirve para convertir corriente alterna (CA) en corriente continua (CC), siendo fundamental en fuentes de poder, cargadores y electr\u00f3nica de consumo"
  },
  {
    "id": 73,
    "category": "componentes",
    "image": "IMAGES/prod_73_KBU1010.png",
    "name": "Puente rectificador KBU1010",
    "price": "$15 MXN",
    "description": "Sirve para convertir corriente alterna (CA) en corriente continua (CC) pulsante, utiliz\u00e1ndolo en fuentes de alimentaci\u00f3n para electrodom\u00e9sticos"
  },
  {
    "id": 74,
    "category": "componentes",
    "image": "IMAGES/prod_74_5W_0.01_Ohm.png",
    "name": "Resistencia cer\u00e1mica 5W 0.01 Ohm",
    "price": "$10 MXN",
    "description": "Se utiliza principalmente como una resistencia de detecci\u00f3n de corriente (o shunt) en circuitos de alta potencia"
  },
  {
    "id": 75,
    "category": "componentes",
    "image": "IMAGES/prod_75_5W_0.1_Ohm.png",
    "name": "Resistencia cer\u00e1mica 5W 0.1 Ohm",
    "price": "$10 MXN",
    "description": "Sirve para limitar la corriente y disipar altas cantidades de potencia (calor) en circuitos electr\u00f3nicos"
  },
  {
    "id": 76,
    "category": "componentes",
    "image": "IMAGES/prod_76_5W_0.47_Ohm.png",
    "name": "Resistencia cer\u00e1mica 5W 0.47 Ohm",
    "price": "$10 MXN",
    "description": "Se usa para limitar la corriente y disipar grandes cantidades de energ\u00eda (calor) en circuitos de potencia"
  },
  {
    "id": 77,
    "category": "componentes",
    "image": "IMAGES/prod_77_5W_0.22_Ohm.png",
    "name": "Resistencia cer\u00e1mica 5W 0.22 Ohm",
    "price": "$10 MXN",
    "description": "Se usa para limitar la corriente, disipar potencia (calor) en aplicaciones de potencia, como fuentes de alimentaci\u00f3n, audio, y control de motores/LEDs"
  },
  {
    "id": 78,
    "category": "componentes",
    "image": "IMAGES/prod_78_5W_1_Ohm.png",
    "name": "Resistencia cer\u00e1mica 5W 1 Ohm",
    "price": "$10 MXN",
    "description": "Sirve para controlar y disipar potencia en circuitos electr\u00f3nicos, actuando como carga, limitador de corriente o divisor de voltaje en aplicaciones de potencia moderada"
  },
  {
    "id": 79,
    "category": "componentes",
    "image": "IMAGES/prod_79_5W_3.9_Ohm.png",
    "name": "Resistencia cer\u00e1mica 5W 3.9 Ohm",
    "price": "$17 MXN",
    "description": "Sirve para limitar la corriente, controlar potencia, y disipar calor en circuitos que manejan energ\u00eda moderada"
  },
  {
    "id": 80,
    "category": "componentes",
    "image": "IMAGES/prod_80_SN74LS266N.png",
    "name": "Compuerta XNOR SN74LS266N",
    "price": "$19 MXN",
    "description": "Se usa para comparar dos se\u00f1ales binarias y detectar si son iguales, produciendo una salida ALTA (1) si ambas entradas son iguales (0-0 o 1-1) y una salida BAJA (0) si son diferentes (0-1 o 1-0)"
  },
  {
    "id": 81,
    "category": "componentes",
    "image": "IMAGES/prod_81_SN74LS00N.png",
    "name": "Compuerta NAND SN74LS00N",
    "price": "$8 MXN",
    "description": "Sirve para construir circuitos l\u00f3gicos digitales, ya que contiene cuatro compuertas NAND (producto l\u00f3gico negado) de dos entradas cada una"
  },
  {
    "id": 82,
    "category": "componentes",
    "image": "IMAGES/prod_82_SN74LS02N.png",
    "name": "Compuerta NOR SN74LS02N",
    "price": "$9 MXN",
    "description": "Sirve para realizar operaciones l\u00f3gicas digitales, combinando las funciones OR y NOT: su salida es ALTA (1) solo si todas sus entradas son BAJAS (0), y BAJA (0) si al menos una entrada es ALTA (1)"
  },
  {
    "id": 83,
    "category": "componentes",
    "image": "IMAGES/prod_83_SN74LS04N.png",
    "name": "Compuerta NOT SN74LS04N",
    "price": "$10 MXN",
    "description": "Sirve para invertir se\u00f1ales l\u00f3gicas (un \"0\" se vuelve \"1\", un \"1\" se vuelve \"0\") y contiene seis inversores independientes dentro de un solo chip"
  },
  {
    "id": 84,
    "category": "componentes",
    "image": "IMAGES/prod_84_SN74LS08N.png",
    "name": "Compuerta AND SN74LS08N",
    "price": "$9 MXN",
    "description": "Sirve para realizar la operaci\u00f3n l\u00f3gica \"Y\" (multiplicaci\u00f3n binaria): su salida es ALTA (1) solo si todas sus entradas est\u00e1n en ALTO (1), y BAJA (0) si al menos una entrada es BAJA (0)"
  },
  {
    "id": 85,
    "category": "componentes",
    "image": "IMAGES/prod_85_SN74LS32N.png",
    "name": "Compuerta OR SN74LS32N",
    "price": "$9 MXN",
    "description": "Sirve para realizar la disyunci\u00f3n l\u00f3gica (suma l\u00f3gica), donde la salida es ALTA (1) si una o ambas entradas est\u00e1n en ALTO (1)"
  },
  {
    "id": 86,
    "category": "componentes",
    "image": "IMAGES/prod_86_SN74LS86N.png",
    "name": "Compuerta XOR SN74LS86N",
    "price": "$8 MXN",
    "description": "Sirve para realizar la operaci\u00f3n l\u00f3gica \"O Exclusivo\", produciendo una salida ALTA (1) si las entradas son diferentes y BAJA (0) si son iguales"
  },
  {
    "id": 87,
    "category": "componentes",
    "image": "IMAGES/prod_87_SN74LS47N.png",
    "name": "Decodificador SN74LS47N",
    "price": "$16 MXN",
    "description": "Es un circuito integrado decodificador/controlador de BCD a 7 segmentos que convierte c\u00f3digos binarios (BCD) en las se\u00f1ales necesarias para activar un display de 7 segmentos de \u00e1nodo com\u00fan"
  },
  {
    "id": 88,
    "category": "componentes",
    "image": "IMAGES/prod_88_NE555.png",
    "name": "Circuito integrado NE555",
    "price": "$5 MXN",
    "description": "Es un circuito integrado (CI) fundamental en electr\u00f3nica que sirve para generar pulsos de temporizaci\u00f3n, retardos y oscilaciones de forma muy precisa y econ\u00f3mica"
  },
  {
    "id": 89,
    "category": "componentes",
    "image": "IMAGES/prod_89_74HC595N.png",
    "name": "Registro de desplazamiento 74HC595N",
    "price": "$11 MXN",
    "description": "Sirve para expandir las salidas digitales de un microcontrolador (como Arduino)"
  },
  {
    "id": 90,
    "category": "componentes",
    "image": "IMAGES/prod_90_74LS76N.png",
    "name": "Flip flop 74LS76N",
    "price": "$15 MXN",
    "description": "Es un circuito integrado que contiene dos biestables (flip-flops) de tipo J-K dual, utilizado para almacenar un bit de informaci\u00f3n (0 o 1) y sincronizar datos en sistemas digitales"
  },
  {
    "id": 91,
    "category": "componentes",
    "image": "IMAGES/prod_91_Resitencia_1mOhm.png",
    "name": "Resitencia 1m\u03a9",
    "price": "$1 MXN",
    "description": "Una resistencia de 1M\u03a9 (un megaohmio) es un componente pasivo que ofrece una oposici\u00f3n de un mill\u00f3n de ohmios al flujo de corriente, crucial para limitarla y controlar el voltaje en circuitos"
  },
  {
    "id": 92,
    "category": "componentes",
    "image": "IMAGES/prod_92_Resitencia_1Ohm.png",
    "name": "Resitencia 1\u03a9",
    "price": "$1 MXN",
    "description": "Una resistencia de 1\u03a9 se usa para limitar corriente, dividir voltaje, o como sensor de corriente, seg\u00fan la Ley de Ohm"
  },
  {
    "id": 93,
    "category": "componentes",
    "image": "IMAGES/prod_93_Resitencia_1.2Ohm.png",
    "name": "Resitencia 1.2\u03a9",
    "price": "$1 MXN",
    "description": "Una resistencia de 1.2 Ohm (Ohmios) es un componente que limita la corriente el\u00e9ctrica en un circuito, Usada para dividir voltaje, controlar LEDs o ajustar se\u00f1ales."
  },
  {
    "id": 94,
    "category": "componentes",
    "image": "IMAGES/prod_94_Resitencia_1.5Ohm.png",
    "name": "Resitencia 1.5\u03a9",
    "price": "$1 MXN",
    "description": "Una resistencia de 1.5 Ohm usualmente se utiliza  para diferentes aplicaciones como limitaci\u00f3n de corriente o divisi\u00f3n de voltaje en circuitos."
  },
  {
    "id": 95,
    "category": "componentes",
    "image": "IMAGES/prod_95_Resitencia_1.8Ohm.png",
    "name": "Resitencia 1.8\u03a9",
    "price": "$1 MXN",
    "description": "Se emplea para limitar el flujo de corriente, dividir voltajes, o como parte de filtros y osciladores en diversas aplicaciones electr\u00f3nicas."
  },
  {
    "id": 96,
    "category": "componentes",
    "image": "IMAGES/prod_96_Resitencia_2Ohm.png",
    "name": "Resitencia 2\u03a9",
    "price": "$1 MXN",
    "description": "Una resistencia de 2 ohmios (\u03a9) es un componente pasivo que se opone al flujo de corriente. Se usan en control de corriente, fuentes de alimentaci\u00f3n y circuitos de audio."
  },
  {
    "id": 97,
    "category": "componentes",
    "image": "IMAGES/prod_97_Resitencia_2.2Ohm.png",
    "name": "Resitencia 2.2\u03a9",
    "price": "$1 MXN",
    "description": "su principal funci\u00f3n es limitar el paso de la corriente en un circuito el\u00e9ctrico. tiene diferentes uso, puede usarse desde un componente que ayude a generar un peque\u00f1o retardo en el funcionamiento de un circuito"
  },
  {
    "id": 98,
    "category": "componentes",
    "image": "IMAGES/prod_98_Resitencia_2.4Ohm.png",
    "name": "Resitencia 2.4\u03a9",
    "price": "$1 MXN",
    "description": "Usada en circuitos para controlar el flujo el\u00e9ctrico y en aplicaciones como limitaci\u00f3n de corriente para LEDs"
  },
  {
    "id": 99,
    "category": "componentes",
    "image": "IMAGES/prod_99_Resitencia_2.7Ohm.png",
    "name": "Resitencia 2.7\u03a9",
    "price": "$1 MXN",
    "description": "se usa en electr\u00f3nica general para limitar corriente, dividir voltaje y protecci\u00f3n de componentes en circuitos de baja/media potencia, siendo com\u00fan en telecomunicaciones, equipos m\u00e9dicos, automoci\u00f3n y proyectos de audio"
  },
  {
    "id": 100,
    "category": "componentes",
    "image": "IMAGES/prod_100_Resitencia_3Ohm.png",
    "name": "Resitencia 3\u03a9",
    "price": "$1 MXN",
    "description": "Por ejemplo, para un LED, la resistencia de 2.3\u03a9 controla cu\u00e1nta corriente fluye, protegi\u00e9ndolo"
  },
  {
    "id": 101,
    "category": "componentes",
    "image": "IMAGES/prod_101_Resitencia_3.3Ohm.png",
    "name": "Resitencia 3.3\u03a9",
    "price": "$1 MXN",
    "description": "Se usan en electr\u00f3nica general para dividir voltajes, como resistencias de pull-up/down, para limitar corriente en LEDs, y en etapas de filtrado en telecomunicaciones, automotriz o equipos m\u00e9dicos."
  },
  {
    "id": 102,
    "category": "componentes",
    "image": "IMAGES/prod_101_Resitencia_3.3Ohm.png",
    "name": "Resitencia 3.6\u03a9",
    "price": "$1 MXN",
    "description": "Se usa para limitar la corriente, dividir voltajes, como carga en circuitos electr\u00f3nicos, y en fuentes de poder, control de LEDs"
  },
  {
    "id": 103,
    "category": "componentes",
    "image": "IMAGES/prod_101_Resitencia_3.3Ohm.png",
    "name": "Resitencia 3.9\u03a9",
    "price": "$1 MXN",
    "description": "Se usan para limitar corriente (ej. LEDs), dividir voltajes, temporizaci\u00f3n en circuitos, y como componentes pasivos en electr\u00f3nica general."
  },
  {
    "id": 104,
    "category": "componentes",
    "image": "IMAGES/prod_101_Resitencia_3.3Ohm.png",
    "name": "Resitencia 4.3\u03a9",
    "price": "$1 MXN",
    "description": "Elemento fundamental para controlar la corriente en electr\u00f3nica, y su elecci\u00f3n depender\u00e1 de la precisi\u00f3n, potencia y m\u00e9todo de montaje requeridos."
  },
  {
    "id": 105,
    "category": "componentes",
    "image": "IMAGES/prod_101_Resitencia_3.3Ohm.png",
    "name": "Resitencia 4.7\u03a9",
    "price": "$1 MXN",
    "description": "Su uso desde filtrado b\u00e1sico hasta aplicaciones de precisi\u00f3n."
  },
  {
    "id": 106,
    "category": "componentes",
    "image": "IMAGES/prod_101_Resitencia_3.3Ohm.png",
    "name": "Resitencia 5.1\u03a9",
    "price": "$1 MXN",
    "description": "Se usan para limitar corriente (ej. LEDs), dividir voltajes, temporizaci\u00f3n en circuitos, y como componentes pasivos en electr\u00f3nica general."
  },
  {
    "id": 107,
    "category": "componentes",
    "image": "IMAGES/prod_101_Resitencia_3.3Ohm.png",
    "name": "Resitencia 5.6\u03a9",
    "price": "$1 MXN",
    "description": "limitar la corriente, dividir voltajes y proteger componentes en circuitos de baja a media potencia, siendo com\u00fan en audio, telecomunicaciones, electr\u00f3nica de consumo (TVs, radios"
  },
  {
    "id": 108,
    "category": "componentes",
    "image": "IMAGES/prod_101_Resitencia_3.3Ohm.png",
    "name": "Resitencia 6.2\u03a9",
    "price": "$1 MXN",
    "description": "se usa principalmente para limitar la corriente en circuitos, como la protecci\u00f3n de LEDs, como divisor de voltaje, en circuitos de polarizaci\u00f3n (pull-up/pull-down)"
  },
  {
    "id": 109,
    "category": "componentes",
    "image": "IMAGES/prod_101_Resitencia_3.3Ohm.png",
    "name": "Resitencia 6.8\u03a9",
    "price": "$1 MXN",
    "description": "limita la corriente, divide el voltaje o disipar energ\u00eda en una amplia gama de circuitos electr\u00f3nicos"
  },
  {
    "id": 110,
    "category": "componentes",
    "image": "IMAGES/prod_101_Resitencia_3.3Ohm.png",
    "name": "Resitencia 7.5\u03a9",
    "price": "$1 MXN",
    "description": "limita la corriente, divide el voltaje o disipar energ\u00eda en una amplia gama de circuitos electr\u00f3nicos"
  },
  {
    "id": 111,
    "category": "componentes",
    "image": "IMAGES/prod_101_Resitencia_3.3Ohm.png",
    "name": "Resitencia 8.2\u03a9",
    "price": "$1 MXN",
    "description": "Para aplicaciones de potencia, con valores comunes de tolerancia de 5% o 1%, y materiales como carb\u00f3n o \u00f3xido de metal."
  },
  {
    "id": 112,
    "category": "componentes",
    "image": "IMAGES/prod_101_Resitencia_3.3Ohm.png",
    "name": "Resitencia 9.1\u03a9",
    "price": "$1 MXN",
    "description": "Una resistencia de 9.1 Ohms puede ser un componente peque\u00f1o para baja potencia o uno grande (resistencia de cemento) para alta potencia, dependiendo de la capacidad en Watts que necesites para tu circuito."
  },
  {
    "id": 113,
    "category": "componentes",
    "image": "IMAGES/prod_101_Resitencia_3.3Ohm.png",
    "name": "Resitencia 10\u03a9",
    "price": "$1 MXN",
    "description": "Para corrientes moderadas, buena para circuitos de audio."
  },
  {
    "id": 114,
    "category": "componentes",
    "image": "IMAGES/prod_101_Resitencia_3.3Ohm.png",
    "name": "Resitencia 12\u03a9",
    "price": "$1 MXN",
    "description": "Se usan para dividir voltajes, limitar corrientes, generar frecuencias o como carga en diversos circuitos electr\u00f3nicos, desde DIY hasta industriales."
  },
  {
    "id": 115,
    "category": "componentes",
    "image": "IMAGES/prod_101_Resitencia_3.3Ohm.png",
    "name": "Resitencia 15\u03a9",
    "price": "$1 MXN",
    "description": "Se usan principalmente para limitar la corriente, ajustar voltajes y disipar energ\u00eda"
  },
  {
    "id": 116,
    "category": "componentes",
    "image": "IMAGES/prod_101_Resitencia_3.3Ohm.png",
    "name": "Resitencia 18\u03a9",
    "price": "$1 MXN",
    "description": "Se usan principalmente para limitar la corriente, dividir el voltaje o acondicionar se\u00f1ales"
  },
  {
    "id": 117,
    "category": "componentes",
    "image": "IMAGES/prod_101_Resitencia_3.3Ohm.png",
    "name": "Resitencia 20\u03a9",
    "price": "$1 MXN",
    "description": "Se utilizan para proteger componentes sensibles como los LEDs, asegurando que la corriente que pasa a trav\u00e9s de ellos no exceda su clasificaci\u00f3n m\u00e1xima."
  },
  {
    "id": 118,
    "category": "componentes",
    "image": "IMAGES/prod_101_Resitencia_3.3Ohm.png",
    "name": "Resitencia 22\u03a9",
    "price": "$1 MXN",
    "description": "limitar la corriente y dividir voltajes en circuitos electr\u00f3nicos, polarizando transistores en amplificadores de audio, y en circuitos de control y temporizaci\u00f3n"
  },
  {
    "id": 119,
    "category": "componentes",
    "image": "IMAGES/prod_101_Resitencia_3.3Ohm.png",
    "name": "Resitencia 24\u03a9",
    "price": "$1 MXN",
    "description": "Limitar la corriente, proteger componentes como LEDs, en circuitos de filtrado, como carga adaptada, y en sistemas donde se necesita una ca\u00edda de voltaje espec\u00edfica"
  },
  {
    "id": 120,
    "category": "componentes",
    "image": "IMAGES/prod_101_Resitencia_3.3Ohm.png",
    "name": "Resitencia 27\u03a9",
    "price": "$1 MXN",
    "description": "limitar la corriente en circuitos electr\u00f3nicos, en aplicaciones como telecomunicaciones, equipos m\u00e9dicos y control de LEDs"
  },
  {
    "id": 121,
    "category": "componentes",
    "image": "IMAGES/prod_101_Resitencia_3.3Ohm.png",
    "name": "Resitencia 30\u03a9",
    "price": "$1 MXN",
    "description": "Se usa com\u00fanmente en dise\u00f1o de circuitos para limitar la corriente, dividir voltaje, como carga en pruebas, en circuitos de audio, o para adaptar impedancias en telecomunicaciones"
  },
  {
    "id": 122,
    "category": "componentes",
    "image": "IMAGES/prod_101_Resitencia_3.3Ohm.png",
    "name": "Resitencia 33\u03a9",
    "price": "$1 MXN",
    "description": "Limitar corriente en LEDs, como parte de divisores de voltaje, en circuitos de polarizaci\u00f3n de transistores, filtros de frecuencia con capacitores, y en puentes de Wheatstone para sensores"
  },
  {
    "id": 123,
    "category": "componentes",
    "image": "IMAGES/prod_101_Resitencia_3.3Ohm.png",
    "name": "Resitencia 36\u03a9",
    "price": "$1 MXN",
    "description": "limitar la corriente el\u00e9ctrica en circuitos de electr\u00f3nica (Arduino, prototipos), como componente de divisores de voltaje, cargas, fuentes de poder,  circuitos de audio."
  },
  {
    "id": 124,
    "category": "componentes",
    "image": "IMAGES/prod_101_Resitencia_3.3Ohm.png",
    "name": "Resitencia 39\u03a9",
    "price": "$1 MXN",
    "description": "Limitar la corriente, generar retardos, controlar se\u00f1ales y como componente de carga en diversos circuitos"
  },
  {
    "id": 125,
    "category": "componentes",
    "image": "IMAGES/prod_125_Resitencia_43Ohm.png",
    "name": "Resitencia 43\u03a9",
    "price": "$1 MXN",
    "description": "Limitar la corriente, generar retardos, controlar se\u00f1ales y como componente de carga en diversos circuitos"
  },
  {
    "id": 126,
    "category": "componentes",
    "image": "IMAGES/prod_126_Resitencia_47Ohm.png",
    "name": "Resitencia 47\u03a9",
    "price": "$1 MXN",
    "description": "limitar la corriente en circuitos de LEDs, como divisores de voltaje para polarizar transistores, en circuitos de se\u00f1al para Arduino y Raspberry Pi, como pull-ups/downs y en circuitos de audio y fuentes de alimentaci\u00f3n de baja potencia"
  },
  {
    "id": 127,
    "category": "componentes",
    "image": "IMAGES/prod_127_Resitencia_51Ohm.png",
    "name": "Resitencia 51\u03a9",
    "price": "$1 MXN",
    "description": "limitar corriente en circuitos de audio, fuentes de alimentaci\u00f3n, equipos m\u00e9dicos y telecomunicaciones"
  },
  {
    "id": 128,
    "category": "componentes",
    "image": "IMAGES/prod_128_Resitencia_56Ohm.png",
    "name": "Resitencia 56\u03a9",
    "price": "$1 MXN",
    "description": "limitar la corriente, dividir voltajes y proteger componentes en una gran variedad de circuitos electr\u00f3nicos, desde audio, telecomunicaciones, computadoras y equipos m\u00e9dicos"
  },
  {
    "id": 129,
    "category": "componentes",
    "image": "IMAGES/prod_129_Resitencia_62Ohm.png",
    "name": "Resitencia 62\u03a9",
    "price": "$1 MXN",
    "description": "prototipado, limitaci\u00f3n de corriente para LEDs y componentes, como resistencias de pull-up/pull-down en circuitos digitales con microcontroladores (Arduino), divisores de voltaje y como componentes en circuitos de audio/amplificadores"
  },
  {
    "id": 130,
    "category": "componentes",
    "image": "IMAGES/prod_130_Resitencia_68Ohm.png",
    "name": "Resitencia 68\u03a9",
    "price": "$1 MXN",
    "description": "limitar la corriente, dividir voltajes y temporizar circuitos en una amplia gama de dispositivos electr\u00f3nicos"
  },
  {
    "id": 131,
    "category": "componentes",
    "image": "IMAGES/prod_131_Resitencia_75Ohm.png",
    "name": "Resitencia 75\u03a9",
    "price": "$1 MXN",
    "description": "aplicaciones de video y audio digital (TV, Blu-ray, cine en casa) para coincidir la impedancia"
  },
  {
    "id": 132,
    "category": "componentes",
    "image": "IMAGES/prod_132_Resitencia_82Ohm.png",
    "name": "Resitencia 82\u03a9",
    "price": "$1 MXN",
    "description": "circuitos electr\u00f3nicos para limitar la corriente, proteger componentes como LEDs, en circuitos de audio, telecomunicaciones, y proyectos de electr\u00f3nica general como Arduino, para dividir voltajes, temporizar circuitos, y en fuentes de poder"
  },
  {
    "id": 133,
    "category": "componentes",
    "image": "IMAGES/prod_133_Resitencia_91Ohm.png",
    "name": "Resitencia 91\u03a9",
    "price": "$1 MXN",
    "description": "limitar corriente y voltaje, como en circuitos de control de motores (resistores de frenado para variadores de frecuencia), para proteger componentes como LEDs, en la configuraci\u00f3n de divisores de voltaje,"
  },
  {
    "id": 134,
    "category": "componentes",
    "image": "IMAGES/prod_134_Resitencia_100Ohm.png",
    "name": "Resitencia 100\u03a9",
    "price": "$1 MXN",
    "description": "Limitar la corriente, proteger componentes sensibles (como diodos ESD) contra picos transitorios, y en circuitos de baja potencia para divisores de voltaje, como en m\u00f3dulos Arduino para ajustar voltajes (5V a 3.3V), y en temporizadores RC"
  },
  {
    "id": 135,
    "category": "componentes",
    "image": "IMAGES/prod_135_Resitencia_120Ohm.png",
    "name": "Resitencia 120\u03a9",
    "price": "$1 MXN",
    "description": "Se emplea en circuitos generales para limitar corriente y voltaje, polarizar circuitos y en dispositivos de prueba, industriales y automotrices."
  },
  {
    "id": 136,
    "category": "componentes",
    "image": "IMAGES/prod_136_Resitencia_200Ohm.png",
    "name": "Resitencia 200\u03a9",
    "price": "$1 MXN",
    "description": "Us\u00e1ndose como divisor de voltaje, pull-up/down, temporizador, generador de frecuencia y para control de corriente en telecomunicaciones, equipos m\u00e9dicos y prototipado, controlando el flujo de electrones como un grifo para agua"
  },
  {
    "id": 137,
    "category": "componentes",
    "image": "IMAGES/prod_137_Resitencia_220Ohm.png",
    "name": "Resitencia 220\u03a9",
    "price": "$1 MXN",
    "description": "Limitar la corriente en circuitos, protegiendo componentes sensibles como los LEDs de quemarse"
  },
  {
    "id": 138,
    "category": "componentes",
    "image": "IMAGES/prod_138_Resitencia_300Ohm.png",
    "name": "Resitencia 300\u03a9",
    "price": "$1 MXN",
    "description": "Limitar corriente, ajustar niveles de impedancia en audio (como en guitarras), proteger componentes sensibles, generar retardos o frecuencias en circuitos, y como parte de divisores de voltaje"
  },
  {
    "id": 139,
    "category": "componentes",
    "image": "IMAGES/prod_139_Resitencia_360Ohm.png",
    "name": "Resitencia 360\u03a9",
    "price": "$1 MXN",
    "description": "Ideal en prototipos (placas de pruebas), como pull-up/pull-down para transistores, en sistemas de audio, y para proteger componentes como LEDs o controlar la velocidad de ventiladores"
  },
  {
    "id": 140,
    "category": "componentes",
    "image": "IMAGES/prod_140_Resitencia_390Ohm.png",
    "name": "Resitencia 390\u03a9",
    "price": "$1 MXN",
    "description": "Limitar la corriente en circuitos LED (protegi\u00e9ndolos), como divisor de voltaje, para polarizar componentes activos (como transistores), en la terminaci\u00f3n de l\u00edneas de transmisi\u00f3n, y en equipos de telecomunicaciones, m\u00e9dicos y de audio"
  },
  {
    "id": 141,
    "category": "componentes",
    "image": "IMAGES/prod_141_Resitencia_430Ohm.png",
    "name": "Resitencia 430\u03a9",
    "price": "$1 MXN",
    "description": "Para disipar potencia en circuitos de audio o instrumentaci\u00f3n, y en aplicaciones industriales como el frenado de inversores de potencia, ajustando la corriente y el voltaje para proteger componentes y controlar el flujo el\u00e9ctrico."
  },
  {
    "id": 142,
    "category": "componentes",
    "image": "IMAGES/prod_142_Resitencia_470Ohm.png",
    "name": "Resitencia 470\u03a9",
    "price": "$1 MXN",
    "description": "Se usa principalmente para limitar la corriente el\u00e9ctrica, protegiendo componentes como LEDs y microcontroladores, y tambi\u00e9n act\u00faa como divisor de voltaje o para polarizar circuitos"
  },
  {
    "id": 143,
    "category": "componentes",
    "image": "IMAGES/prod_143_Resitencia_510Ohm.png",
    "name": "Resitencia 510\u03a9",
    "price": "$1 MXN",
    "description": "Se usa principalmente  limitar corriente, dividir voltaje y para polarizaci\u00f3n en circuitos electr\u00f3nicos"
  },
  {
    "id": 144,
    "category": "componentes",
    "image": "IMAGES/prod_144_Resitencia_560Ohm.png",
    "name": "Resitencia 560\u03a9",
    "price": "$1 MXN",
    "description": "Se usa principalmente   limitar la corriente en circuitos electr\u00f3nicos, especialmente para polarizar LEDs"
  },
  {
    "id": 145,
    "category": "componentes",
    "image": "IMAGES/prod_145_Resitencia_620Ohm.png",
    "name": "Resitencia 620\u03a9",
    "price": "$1 MXN",
    "description": "Limitar corriente, dividir voltaje y en circuitos de temporizaci\u00f3n en electr\u00f3nica general, como en equipos de audio, televisores y computadoras"
  },
  {
    "id": 146,
    "category": "componentes",
    "image": "IMAGES/prod_146_Resitencia_680Ohm.png",
    "name": "Resitencia 680\u03a9",
    "price": "$1 MXN",
    "description": "limitar el flujo de corriente y dividir voltajes"
  },
  {
    "id": 147,
    "category": "componentes",
    "image": "IMAGES/prod_147_Resitencia_750Ohm.png",
    "name": "Resitencia 750\u03a9",
    "price": "$1 MXN",
    "description": "Limitar corriente, dividir voltajes y proteger componentes en circuitos electr\u00f3nicos, como en el dise\u00f1o de circuitos de audio, fuentes de alimentaci\u00f3n, y para controlar el flujo a LEDs"
  },
  {
    "id": 148,
    "category": "componentes",
    "image": "IMAGES/prod_148_Resitencia_820Ohm.png",
    "name": "Resitencia 820\u03a9",
    "price": "$1 MXN",
    "description": "limitar el flujo de corriente y dividir voltajes en circuitos electr\u00f3nicos de baja potencia"
  },
  {
    "id": 149,
    "category": "componentes",
    "image": "IMAGES/prod_149_Resitencia_910Ohm.png",
    "name": "Resitencia 910\u03a9",
    "price": "$1 MXN",
    "description": "limitar la corriente, dividir voltajes y en circuitos de polarizaci\u00f3n (pull-up/pull-down) en electr\u00f3nica general, desde prototipado en placas de pruebas (protoboards) hasta telecomunicaciones y equipos m\u00e9dicos"
  },
  {
    "id": 150,
    "category": "componentes",
    "image": "IMAGES/prod_150_Resitencia_1kOhm.png",
    "name": "Resitencia 1k\u03a9",
    "price": "$1 MXN",
    "description": "Limitar la corriente y dividir voltajes, protegiendo componentes como LEDs, configurando puntos de polarizaci\u00f3n para transistores, en circuitos temporizadores con capacitores, y para asegurar niveles l\u00f3gicos estables en circuitos digitales"
  },
  {
    "id": 151,
    "category": "componentes",
    "image": "IMAGES/prod_151_Resitencia_1.2kOhm.png",
    "name": "Resitencia 1.2k\u03a9",
    "price": "$1 MXN",
    "description": "Limitar corriente, dividir voltajes, y como pull-up/pull-down en prototipos y circuitos en electr\u00f3nica general, telecomunicaciones, audio y equipos m\u00e9dicos, controlando el flujo de electrones para proteger componentes y establecer niveles l\u00f3gicos en circuitos digitales y anal\u00f3gicos"
  },
  {
    "id": 152,
    "category": "componentes",
    "image": "IMAGES/prod_152_Resitencia_1.5kOhm.png",
    "name": "Resitencia 1.5k\u03a9",
    "price": "$1 MXN",
    "description": "limitar corriente (como en circuitos LED), como pull-up/pull-down en microcontroladores, en divisores de voltaje, y en diversas aplicaciones en telecomunicaciones, electr\u00f3nica m\u00e9dica y prototipado"
  },
  {
    "id": 153,
    "category": "componentes",
    "image": "IMAGES/prod_153_Resitencia_1.8kOhm.png",
    "name": "Resitencia 1.8k\u03a9",
    "price": "$1 MXN",
    "description": "Limitar la corriente y dividir voltajes en circuitos electr\u00f3nicos, protegiendo componentes como LEDs, en telecomunicaciones, equipos m\u00e9dicos, fuentes de alimentaci\u00f3n, y como pull-up/pull-down en l\u00f3gica digital, controlando el flujo de electrones en aplicaciones de baja y media potencia."
  },
  {
    "id": 154,
    "category": "componentes",
    "image": "IMAGES/prod_154_Resitencia_2kOhm.png",
    "name": "Resitencia 2k\u03a9",
    "price": "$1 MXN",
    "description": "limitar la corriente, dividir voltajes, crear circuitos de retroalimentaci\u00f3n y polarizar componentes como transistores"
  },
  {
    "id": 155,
    "category": "componentes",
    "image": "IMAGES/prod_155_Resitencia_2.2kOhm.png",
    "name": "Resitencia 2.2k\u03a9",
    "price": "$1 MXN",
    "description": "limitar corriente (como en LEDs), dividir voltaje, en circuitos de audio, telecomunicaciones, acondicionamiento de se\u00f1ales, temporizadores, y como resistencias de pull-up/pull-down en circuitos digitales"
  },
  {
    "id": 156,
    "category": "componentes",
    "image": "IMAGES/prod_156_Resitencia_2.4kOhm.png",
    "name": "Resitencia 2.4k\u03a9",
    "price": "$1 MXN",
    "description": "Se usa frecuentemente para limitar la cantidad de corriente que fluye hacia otros componentes sensibles (como LEDs u otros semiconductores) para protegerlos de da\u00f1os por sobrecarga."
  },
  {
    "id": 157,
    "category": "componentes",
    "image": "IMAGES/prod_157_Resitencia_2.7kOhm.png",
    "name": "Resitencia 2.7k\u03a9",
    "price": "$1 MXN",
    "description": "se usa com\u00fanmente en circuitos electr\u00f3nicos para limitar la corriente, dividir voltajes, y como resistencias de pull-up/pull-down en placas de circuito impreso (PCB), prototipado, y en equipos de telecomunicaciones, automoci\u00f3n y m\u00e9dicos"
  },
  {
    "id": 158,
    "category": "componentes",
    "image": "IMAGES/prod_158_Resitencia_3kOhm.png",
    "name": "Resitencia 3k\u03a9",
    "price": "$1 MXN",
    "description": "limitar la corriente, dividir el voltaje y como resistencias pull-up/pull-down"
  },
  {
    "id": 159,
    "category": "componentes",
    "image": "IMAGES/prod_159_Resitencia_3.3kOhm.png",
    "name": "Resitencia 3.3k\u03a9",
    "price": "$1 MXN",
    "description": "limitar corriente, dividir voltaje, pull-up/pull-down y filtrado en circuitos electr\u00f3nicos"
  },
  {
    "id": 160,
    "category": "componentes",
    "image": "IMAGES/prod_160_Resitencia_3.6kOhm.png",
    "name": "Resitencia 3.6k\u03a9",
    "price": "$1 MXN",
    "description": "limitar corriente, como pull-up o pull-down en circuitos de prototipado, en fuentes de alimentaci\u00f3n, para controles de iluminaci\u00f3n LED, y en diversas aplicaciones de telecomunicaciones y equipos m\u00e9dicos, funcionando como un componente pasivo para ajustar el flujo el\u00e9ctrico y estabilizar circuitos."
  },
  {
    "id": 161,
    "category": "componentes",
    "image": "IMAGES/prod_161_Resitencia_3.9kOhm.png",
    "name": "Resitencia 3.9k\u03a9",
    "price": "$1 MXN",
    "description": "limitar corriente, dividir voltaje y como resistencia de pull-up/pull-down en circuitos de prototipado y electr\u00f3nicos generales"
  },
  {
    "id": 162,
    "category": "componentes",
    "image": "IMAGES/prod_162_Resitencia_4.3kOhm.png",
    "name": "Resitencia 4.3k\u03a9",
    "price": "$1 MXN",
    "description": "Se usa com\u00fanmente para limitar la corriente (como en LEDs), como divisor de voltaje, en circuitos de polarizaci\u00f3n, para pull-ups/pull-downs en microcontroladores, o en prototipado en placas de pruebas"
  },
  {
    "id": 163,
    "category": "componentes",
    "image": "IMAGES/prod_163_Resitencia_4.7kOhm.png",
    "name": "Resitencia 4.7k\u03a9",
    "price": "$1 MXN",
    "description": "Limitar la corriente (especialmente con LEDs y pines de microcontroladores), crear divisores de voltaje para obtener voltajes de referencia, en filtros de se\u00f1al, y como resistencias de pull-up/pull-down en circuitos digitales, siendo un componente vers\u00e1til en prototipado y dise\u00f1os de PCB para controlar el flujo el\u00e9ctrico y asegurar el correcto funcionamiento de componentes sensibles."
  },
  {
    "id": 164,
    "category": "componentes",
    "image": "IMAGES/prod_164_Resitencia_5.1kOhm.png",
    "name": "Resitencia 5.1k\u03a9",
    "price": "$1 MXN",
    "description": "limitar corriente, como en resistencias pull-up/pull-down para se\u00f1ales digitales (como en puertos USB-C), en divisores de voltaje, y como parte de  filtros de frecuencia o temporizadores en circuitos electr\u00f3nicos generales, siendo un valor est\u00e1ndar vers\u00e1til para prototipado y equipos de telecomunicaciones, m\u00e9dicos y audio."
  },
  {
    "id": 165,
    "category": "componentes",
    "image": "IMAGES/prod_165_Resitencia_5.6kOhm.png",
    "name": "Resitencia 5.6k\u03a9",
    "price": "$1 MXN",
    "description": "divisi\u00f3n de voltaje, limitaci\u00f3n de corriente (protegiendo LEDs), pull-up/pull-down en l\u00f3gica digital, temporizaci\u00f3n RC y en circuitos de audio, telecomunicaciones y prototipado, sirviendo como un componente estable para ajustar niveles de se\u00f1al y proteger otros elementos en una amplia gama de proyectos electr\u00f3nicos."
  },
  {
    "id": 166,
    "category": "componentes",
    "image": "IMAGES/prod_166_Resitencia_6.2kOhm.png",
    "name": "Resitencia 6.2k\u03a9",
    "price": "$1 MXN",
    "description": "limitar corriente, en circuitos de acoplamiento (como filtros), divisiones de voltaje, y como pull-up/pull-down en microcontroladores"
  },
  {
    "id": 167,
    "category": "componentes",
    "image": "IMAGES/prod_167_Resitencia_6.8kOhm.png",
    "name": "Resitencia 6.8k\u03a9",
    "price": "$1 MXN",
    "description": "Limitar corriente, como pull-up/pull-down en circuitos digitales, en divisores de voltaje, en etapas de audio, filtros y proyectos de electr\u00f3nica general, protegiendo componentes y ajustando se\u00f1ales en aplicaciones como telecomunicaciones, automoci\u00f3n y equipos m\u00e9dicos"
  },
  {
    "id": 168,
    "category": "componentes",
    "image": "IMAGES/prod_168_Resitencia_7.5kOhm.png",
    "name": "Resitencia 7.5k\u03a9",
    "price": "$1 MXN",
    "description": "Se usa com\u00fanmente para limitar la corriente, como resistencias pull-up/pull-down en prototipado (protoboards), en circuitos de instrumentaci\u00f3n, equipos m\u00e9dicos, y para proteger componentes sensibles como LEDs, funcionando como un divisor de voltaje o para configurar umbrales en microcontroladores y circuitos anal\u00f3gicos"
  },
  {
    "id": 169,
    "category": "componentes",
    "image": "IMAGES/prod_169_Resitencia_8.2kOhm.png",
    "name": "Resitencia 8.2k\u03a9",
    "price": "$1 MXN",
    "description": "Se usa com\u00fanmente para limitar corriente, como pull-up/pull-down en circuitos digitales, en circuitos de audio/telecomunicaciones y en prototipado, actuando como divisor de voltaje o en circuitos de temporizaci\u00f3n, y su valor se elige para ajustar el comportamiento de un circuito en aplicaciones como equipos m\u00e9dicos o automotrices"
  },
  {
    "id": 170,
    "category": "componentes",
    "image": "IMAGES/prod_170_Resitencia_9.1kOhm.png",
    "name": "Resitencia 9.1k\u03a9",
    "price": "$1 MXN",
    "description": "limitar corriente, dividir voltaje, como pull-up/pull-down en circuitos digitales, y en circuitos de entrada o de control de voltaje, protegiendo componentes como LEDs o sensores y estableciendo puntos de polarizaci\u00f3n, especialmente en prototipado y electr\u00f3nica general"
  },
  {
    "id": 171,
    "category": "componentes",
    "image": "IMAGES/prod_171_Resitencia_12kOhm.png",
    "name": "Resitencia 12k\u03a9",
    "price": "$1 MXN",
    "description": "Limitar la corriente y dividir el voltaje en circuitos electr\u00f3nicos, sirviendo como pull-up/pull-down, limitador de corriente, o en circuitos de temporizaci\u00f3n y frecuencia"
  },
  {
    "id": 172,
    "category": "componentes",
    "image": "IMAGES/prod_172_Resitencia_15kOhm.png",
    "name": "Resitencia 15k\u03a9",
    "price": "$1 MXN",
    "description": "Limitar la corriente en circuitos (como para LEDs o transistores), en circuitos de detecci\u00f3n de voltaje o como resistencias de pull-up/pull-down, generando peque\u00f1os tiempos de retardo o frecuencias en circuitos de control, y en aplicaciones generales de prototipado en telecomunicaciones y equipos m\u00e9dicos, protegiendo componentes"
  },
  {
    "id": 173,
    "category": "componentes",
    "image": "IMAGES/prod_173_Resitencia_18kOhm.png",
    "name": "Resitencia 18k\u03a9",
    "price": "$1 MXN",
    "description": "Limitar la corriente y dividir voltaje en circuitos electr\u00f3nicos, protegiendo componentes sensibles como LEDs"
  },
  {
    "id": 174,
    "category": "componentes",
    "image": "IMAGES/prod_174_Resitencia_20kOhm.png",
    "name": "Resitencia 20k\u03a9",
    "price": "$1 MXN",
    "description": "Limitar corriente, dividir voltaje, crear pull-up/pull-down en circuitos digitales, generar tiempos de retardo, establecer frecuencias (con capacitores), o como parte de redes como el DAC R-2R, siendo ideal para prototipos y telecomunicaciones"
  },
  {
    "id": 175,
    "category": "componentes",
    "image": "IMAGES/prod_175_Resitencia_22kOhm.png",
    "name": "Resitencia 22k\u03a9",
    "price": "$1 MXN",
    "description": "Limitar corriente, dividir voltaje, polarizar transistores y como pull-up/pull-down en circuitos digitales"
  },
  {
    "id": 176,
    "category": "componentes",
    "image": "IMAGES/prod_176_Resitencia_24kOhm.png",
    "name": "Resitencia 24k\u03a9",
    "price": "$1 MXN",
    "description": "Limitar corriente, dividir voltaje, en circuitos de polarizaci\u00f3n (pull-up/pull-down), para generar retardos o frecuencias, y en aplicaciones generales como prototipado, telecomunicaciones y equipos m\u00e9dicos, ajustando el flujo el\u00e9ctrico en cualquier circuito electr\u00f3nico para proteger componentes o establecer niveles l\u00f3gicos"
  },
  {
    "id": 177,
    "category": "componentes",
    "image": "IMAGES/prod_177_Resitencia_27kOhm.png",
    "name": "Resitencia 27k\u03a9",
    "price": "$1 MXN",
    "description": "Limitar corriente, dividir voltaje, en circuitos de polarizaci\u00f3n (pull-up/pull-down), para generar retardos o frecuencias, y en aplicaciones generales como prototipado, telecomunicaciones y equipos m\u00e9dicos, ajustando el flujo el\u00e9ctrico en cualquier circuito electr\u00f3nico para proteger componentes o establecer niveles l\u00f3gicos"
  },
  {
    "id": 178,
    "category": "componentes",
    "image": "IMAGES/prod_178_Resitencia_30kOhm.png",
    "name": "Resitencia 30k\u03a9",
    "price": "$1 MXN",
    "description": "Limitar corriente el\u00e9ctrica o para dividir el voltaje"
  },
  {
    "id": 179,
    "category": "componentes",
    "image": "IMAGES/prod_179_Resitencia_33kOhm.png",
    "name": "Resitencia 33k\u03a9",
    "price": "$1 MXN",
    "description": "Limitar corriente dividir voltajes, polarizar componentes (como transistores), o en circuitos de temporizaci\u00f3n y filtrado, controlando la velocidad de carga/descarga de capacitores y ajustando frecuencias en una amplia gama de dispositivos electr\u00f3nicos, desde telecomunicaciones hasta equipos m\u00e9dicos"
  },
  {
    "id": 180,
    "category": "componentes",
    "image": "IMAGES/prod_180_Resitencia_36kOhm.png",
    "name": "Resitencia 36k\u03a9",
    "price": "$1 MXN",
    "description": "Limitar corriente dividir el voltaje o polarizar elementos activos."
  },
  {
    "id": 181,
    "category": "componentes",
    "image": "IMAGES/prod_181_Resitencia_39kOhm.png",
    "name": "Resitencia 39k\u03a9",
    "price": "$1 MXN",
    "description": "Limitar corriente como pull-up/pull-down en l\u00f3gica digital, generar retardos o frecuencias en circuitos, en aplicaciones de telecomunicaciones, equipos m\u00e9dicos y prototipado, limitando el flujo el\u00e9ctrico para proteger componentes o establecer bias en transistores y microcontroladores"
  },
  {
    "id": 182,
    "category": "componentes",
    "image": "IMAGES/prod_182_Resitencia_43kOhm.png",
    "name": "Resitencia 43k\u03a9",
    "price": "$1 MXN",
    "description": "Limitar corriente dividir el voltaje y polarizar transistores"
  },
  {
    "id": 183,
    "category": "componentes",
    "image": "IMAGES/prod_183_Resitencia_47kOhm.png",
    "name": "Resitencia 47k\u03a9",
    "price": "$1 MXN",
    "description": "Limitar corriente en circuitos (como para LEDs), en divisores de voltaje para ajustar niveles de se\u00f1al (por ejemplo, para microcontroladores), como resistencias pull-up o pull-down para definir estados l\u00f3gicos, en circuitos de temporizaci\u00f3n (RC) y como componentes en filtros de audio o se\u00f1ales"
  }
];

// Scroll Animation Observer (Moved up to be available for renderProducts)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Modal Functions
function openModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    document.getElementById('modalImage').src = product.image;
    document.getElementById('modalTitle').textContent = product.name;
    document.getElementById('modalCategory').textContent = product.category;
    document.getElementById('modalPrice').textContent = product.price;
    document.getElementById('modalDescription').textContent = product.description || "Sin descripción disponible.";
    
    // Construct WhatsApp Link
    const message = `Hola, me interesa el producto: ${product.name} (ID: ${product.id}). Precio: ${product.price}. ¿Tienen envío?`;
    const whatsappUrl = `https://wa.me/524774129364?text=${encodeURIComponent(message)}`;
    document.getElementById('modalWhatsappBtn').href = whatsappUrl;

    const modal = document.getElementById('productModal');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent scrolling body when modal is open
}

function closeModal() {
    const modal = document.getElementById('productModal');
    modal.classList.add('hidden');
    document.body.style.overflow = ''; // Restore scrolling
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// Render Products
const productGrid = document.getElementById('product-grid');
const searchInput = document.getElementById('searchInput');

function renderProducts(category = 'all', searchTerm = '') {
    productGrid.innerHTML = '';
    
    const filteredProducts = products.filter(p => {
        const matchesCategory = category === 'all' || p.category === category;
        const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              p.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (filteredProducts.length === 0) {
        productGrid.innerHTML = `
            <div class="col-span-full text-center py-12">
                <i class="fas fa-search text-6xl text-gray-300 mb-4"></i>
                <h3 class="text-2xl font-bold text-gray-500">No se encontraron productos</h3>
                <p class="text-gray-400">Intenta con otra búsqueda o categoría.</p>
            </div>
        `;
        return;
    }

    filteredProducts.forEach((product, index) => {
        const productCard = document.createElement('div');
        // Updated classes for carousel on ALL devices
        // Mobile: w-[45%] (approx 2 items) | Desktop: w-[280px] (fixed width cards)
        productCard.className = 'group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-on-scroll min-w-[160px] w-[45%] md:w-[280px] flex-shrink-0 snap-start cursor-pointer flex flex-col h-full';
        
        // Add click event to open modal
        productCard.onclick = (e) => {
            // Prevent opening modal if clicking specific buttons if needed, but here we want generally open
            openModal(product.id);
        };

        productCard.innerHTML = `
            <div class="relative overflow-hidden h-40 md:h-64 bg-gray-50">
                <img src="${product.image}" loading="lazy" alt="${product.name}" class="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-110 mix-blend-multiply">
                <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-300"></div>
                <div class="absolute top-2 right-2 md:top-4 md:right-4 bg-brand-accent text-brand-dark font-bold px-2 py-0.5 md:px-3 md:py-1 rounded-full shadow-md text-xs md:text-sm uppercase">
                    ${product.category}
                </div>
            </div>
            <div class="p-4 md:p-6 flex flex-col flex-grow">
                <h3 class="text-sm md:text-lg font-bold mb-2 text-brand-dark group-hover:text-brand-primary transition-colors duration-300 line-clamp-2 leading-tight min-h-[2.5em]">${product.name}</h3>
                <p class="text-gray-500 mb-3 md:mb-4 text-xs line-clamp-2 flex-grow">${product.description}</p>
                
                <div class="mt-auto">
                    <div class="flex flex-col mb-3">
                        <span class="text-[10px] text-gray-400 uppercase font-semibold">Precio</span>
                        <span class="text-lg md:text-2xl font-extrabold text-brand-primary">${product.price}</span>
                    </div>
                    
                    <button class="w-full bg-brand-light hover:bg-brand-accent hover:text-brand-dark text-gray-700 font-bold py-2 px-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-xs md:text-sm group-hover:shadow-md">
                        <i class="fas fa-eye"></i> 
                        <span>Ver Detalles</span>
                    </button>
                </div>
            </div>
        `;
        
        productGrid.appendChild(productCard);
    });

    // Re-attach observer to new elements
    const newElements = productGrid.querySelectorAll('.animate-on-scroll');
    newElements.forEach(el => {
        el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-1000', 'ease-out');
        observer.observe(el);
    });
}

// Filter Buttons Logic
let currentCategory = 'all';

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Reset styles for all buttons
        document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.remove('bg-brand-primary', 'text-white');
            b.classList.add('bg-white', 'text-brand-dark', 'border', 'border-brand-primary');
        });
        
        // Set active style for clicked button
        e.target.classList.remove('bg-white', 'text-brand-dark', 'border', 'border-brand-primary');
        e.target.classList.add('bg-brand-primary', 'text-white');

        currentCategory = e.target.dataset.category;
        renderProducts(currentCategory, searchInput.value);
    });
});

// Search Logic
searchInput.addEventListener('input', (e) => {
    renderProducts(currentCategory, e.target.value);
});

// Carousel Logic
const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;
const totalSlides = 3; // Number of slides in HTML

function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
});

// Auto-play carousel
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
}, 5000);

// Contact Form Logic (AJAX)
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const formStatus = document.getElementById('formStatus');
const resetFormBtn = document.getElementById('resetFormBtn');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        
        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                contactForm.classList.add('hidden');
                formSuccess.classList.remove('hidden');
                contactForm.reset();
            } else {
                const data = await response.json();
                if (Object.hasOwn(data, 'errors')) {
                    formStatus.textContent = data["errors"].map(error => error["message"]).join(", ");
                } else {
                    formStatus.textContent = "Hubo un problema al enviar el mensaje.";
                }
                formStatus.classList.remove('hidden');
            }
        } catch (error) {
            formStatus.textContent = "Hubo un problema al enviar el mensaje.";
            formStatus.classList.remove('hidden');
        }
    });

    if (resetFormBtn) {
        resetFormBtn.addEventListener('click', () => {
            formSuccess.classList.add('hidden');
            contactForm.classList.remove('hidden');
            formStatus.classList.add('hidden');
        });
    }
}

// Initial Render and Static Elements Observer
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(); // Initial render called here to ensure DOM is ready

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
        el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-1000', 'ease-out');
        observer.observe(el);
    });
});