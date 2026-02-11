// Product Data (Engineering & Electronics)
const products = [
  {
    "id": 1,
    "category": "componentes",
    "image": "IMAGES/prod_1_LM386.png",
    "name": "Amplificador operacional LM386",
    "price": "$7 MXN",
    "description": "Amplificador de potencia de audio de bajo voltaje. Ideal para radios, amplificadores de guitarra portátiles y proyectos de hobby. Ganancia ajustable de 20 a 200.",
    "specs": {
        "Producto": "Amplificador Operacional",
        "Modelo": "LM386",
        "Voltaje de Operación": "4V - 12V",
        "Potencia de Salida": "325mW (típico)",
        "Encapsulado": "DIP-8",
        "Marca": "Texas Instruments / Genérico",
        "Temperatura Operativa": "0°C ~ 70°C",
        "SKU": "MVK-0001"
    }
  },
  {
    "id": 2,
    "category": "componentes",
    "image": "IMAGES/prod_2_LM393.png",
    "name": "Comparador de voltaje LM393",
    "price": "$7 MXN",
    "description": "Comparador de voltaje dual de alta precisión. Diseñado para operar con una sola fuente de alimentación; compatible con lógica TTL y CMOS. Perfecto para sensores y detección de umbrales.",
    "specs": {
        "Producto": "Comparador de Voltaje Dual",
        "Modelo": "LM393",
        "Voltaje de Alimentación": "2V - 36V",
        "Corriente de Salida": "20mA",
        "Encapsulado": "DIP-8",
        "Tipo de Salida": "Colector Abierto",
        "SKU": "MVK-0002"
    }
  },
  {
    "id": 3,
    "category": "componentes",
    "image": "IMAGES/prod_3_NE5532P.png",
    "name": "Amplificador operativo NE5532P",
    "price": "$7 MXN",
    "description": "Amplificador operacional dual de bajo ruido y alto rendimiento. Estándar de la industria para preamplificadores de audio, consolas de mezcla y equipos de alta fidelidad."
  },
  {
    "id": 4,
    "category": "componentes",
    "image": "IMAGES/prod_4_PC817C.png",
    "name": "Optoacoplador PC817C",
    "price": "$7 MXN",
    "description": "Optoacoplador de alta confiabilidad para aislamiento de señal. Protege microcontroladores de voltajes peligrosos y ruidos eléctricos. Ideal para fuentes conmutadas y control de relés."
  },
  {
    "id": 5,
    "category": "componentes",
    "image": "IMAGES/prod_5_ULN2003AN.png",
    "name": "Amplificador de se\u00f1ales ULN2003AN",
    "price": "$7 MXN",
    "description": "Array de transistores Darlington de alta corriente. El driver por excelencia para manejar motores paso a paso, relés y tiras LED desde Arduino o microcontroladores."
  },
  {
    "id": 6,
    "category": "componentes",
    "image": "IMAGES/prod_6_ULN2803APG.png",
    "name": "Circuito integrado ULN2803APG",
    "price": "$7 MXN",
    "description": "Driver Darlington de 8 canales de alta potencia. Permite controlar cargas inductivas múltiples como relés y solenoides directamente desde salidas lógicas de 5V."
  },
  {
    "id": 7,
    "category": "componentes",
    "image": "IMAGES/prod_7_L7812CV.png",
    "name": "Regulador de voltaje L7812CV",
    "price": "$7 MXN",
    "description": "Regulador de voltaje positivo de 12V (Serie L7812). Proporciona una salida fija de 12V a 1.5A, común en aplicaciones de audio y relés."
  },
  {
    "id": 8,
    "category": "componentes",
    "image": "IMAGES/prod_8_L7818CV.png",
    "name": "Regulador de voltaje L7818CV",
    "price": "$7 MXN",
    "description": "Regulador de voltaje positivo de la serie 78XX. Proporciona una salida estabilizada y protegida contra sobrecalentamiento. Indispensable para fuentes de alimentación lineales."
  },
  {
    "id": 9,
    "category": "componentes",
    "image": "IMAGES/prod_9_L7805CV.png",
    "name": "Regulador de voltaje L7805CV",
    "price": "$10 MXN",
    "description": "Regulador de voltaje positivo de 5V (Serie L7805). Proporciona una salida fija de 5V a 1.5A, ideal para alimentar circuitos digitales, Arduino y sensores."
  },
  {
    "id": 10,
    "category": "componentes",
    "image": "IMAGES/prod_10_L7806CV.png",
    "name": "Regulador de voltaje L7806CV",
    "price": "$7 MXN",
    "description": "Regulador de voltaje positivo de la serie 78XX. Proporciona una salida estabilizada y protegida contra sobrecalentamiento. Indispensable para fuentes de alimentación lineales."
  },
  {
    "id": 11,
    "category": "componentes",
    "image": "IMAGES/prod_11_L7808CV.png",
    "name": "Regulador de voltaje L7808CV",
    "price": "$7 MXN",
    "description": "Regulador de voltaje positivo de la serie 78XX. Proporciona una salida estabilizada y protegida contra sobrecalentamiento. Indispensable para fuentes de alimentación lineales."
  },
  {
    "id": 12,
    "category": "componentes",
    "image": "IMAGES/prod_12_L7809CV.png",
    "name": "Regulador de voltaje L7809CV",
    "price": "$7 MXN",
    "description": "Regulador de voltaje positivo de la serie 78XX. Proporciona una salida estabilizada y protegida contra sobrecalentamiento. Indispensable para fuentes de alimentación lineales."
  },
  {
    "id": 13,
    "category": "componentes",
    "image": "IMAGES/prod_13_L7810CV.png",
    "name": "Regulador de voltaje L7810CV",
    "price": "$7 MXN",
    "description": "Regulador de voltaje positivo de la serie 78XX. Proporciona una salida estabilizada y protegida contra sobrecalentamiento. Indispensable para fuentes de alimentación lineales."
  },
  {
    "id": 14,
    "category": "componentes",
    "image": "IMAGES/prod_14_L7824CV.png",
    "name": "Regulador de voltaje L7824CV",
    "price": "$7 MXN",
    "description": "Regulador de voltaje positivo de la serie 78XX. Proporciona una salida estabilizada y protegida contra sobrecalentamiento. Indispensable para fuentes de alimentación lineales."
  },
  {
    "id": 15,
    "category": "componentes",
    "image": "IMAGES/prod_15_L7912CV.png",
    "name": "Regulador de voltaje L7912CV",
    "price": "$13 MXN",
    "description": "Regulador de voltaje negativo de la serie 79XX. Complemento ideal para fuentes de alimentación duales en circuitos analógicos y amplificadores operacionales."
  },
  {
    "id": 16,
    "category": "componentes",
    "image": "IMAGES/prod_16_LM317T.png",
    "name": "Regulador de voltaje LM317T",
    "price": "$15 MXN",
    "description": "Regulador de voltaje positivo ajustable (1.2V a 37V). Extremadamente versátil, permite configurar la tensión de salida exacta requerida por tu proyecto con solo dos resistencias externas."
  },
  {
    "id": 17,
    "category": "componentes",
    "image": "IMAGES/prod_17_L7815CV.png",
    "name": "Regulador de voltaje L7815CV",
    "price": "$7 MXN",
    "description": "Regulador de voltaje positivo de la serie 78XX. Proporciona una salida estabilizada y protegida contra sobrecalentamiento. Indispensable para fuentes de alimentación lineales."
  },
  {
    "id": 18,
    "category": "componentes",
    "image": "IMAGES/prod_18_LM337T.png",
    "name": "Regulador de voltaje negativo LM337T",
    "price": "$15 MXN",
    "description": "Regulador de voltaje negativo ajustable. La contraparte del LM317, perfecto para diseñar fuentes simétricas variables de laboratorio o audio."
  },
  {
    "id": 19,
    "category": "componentes",
    "image": "IMAGES/prod_19_MOC3011.png",
    "name": "Optoacoplador MOC3011",
    "price": "$15 MXN",
    "description": "Optoacoplador con salida a Triac. Diseñado para interfaz segura entre lógica de bajo voltaje (DC) y control de potencia de corriente alterna (AC, 110V/220V)."
  },
  {
    "id": 20,
    "category": "componentes",
    "image": "IMAGES/prod_20_MOC3010.png",
    "name": "Optoacoplador MOC3010",
    "price": "$15 MXN",
    "description": "Optoacoplador con salida a Triac. Diseñado para interfaz segura entre lógica de bajo voltaje (DC) y control de potencia de corriente alterna (AC, 110V/220V)."
  },
  {
    "id": 21,
    "category": "componentes",
    "image": "IMAGES/prod_21_LM324N.png",
    "name": "Amplificador operacional LM324N",
    "price": "$10 MXN",
    "description": "Amplificador operacional cuádruple de propósito general. Cuatro Op-Amps independientes en un solo chip, optimizados para operar con una sola fuente de alimentación."
  },
  {
    "id": 22,
    "category": "componentes",
    "image": "IMAGES/prod_22_741CN.png",
    "name": "Amplificador operacional 741CN",
    "price": "$9 MXN",
    "description": "El clásico Amplificador Operacional UA741. Un componente legendario para aprendizaje y aplicaciones analógicas generales, filtros y comparadores."
  },
  {
    "id": 23,
    "category": "componentes",
    "image": "IMAGES/prod_23_UA741CP.png",
    "name": "Amplificador operacional UA741CP",
    "price": "$7 MXN",
    "description": "El clásico Amplificador Operacional UA741. Un componente legendario para aprendizaje y aplicaciones analógicas generales, filtros y comparadores."
  },
  {
    "id": 24,
    "category": "componentes",
    "image": "IMAGES/prod_24_LM358N.png",
    "name": "Amplificador operacional LM358N",
    "price": "$7 MXN",
    "description": "Amplificador operacional dual de bajo consumo. Diseñado específicamente para operar con baterías y fuentes simples, ideal para sensores e instrumentación portátil."
  },
  {
    "id": 25,
    "category": "componentes",
    "image": "IMAGES/prod_25_LM358P.png",
    "name": "Amplificador operacional LM358P",
    "price": "$7 MXN",
    "description": "Amplificador operacional dual de bajo consumo. Diseñado específicamente para operar con baterías y fuentes simples, ideal para sensores e instrumentación portátil."
  },
  {
    "id": 26,
    "category": "componentes",
    "image": "IMAGES/prod_26_TL082CP.png",
    "name": "Amplificador operacional TL082CP",
    "price": "$20 MXN",
    "description": "Amplificador operacional JFET dual de alta velocidad. Ofrece baja distorsión armónica y alta impedancia de entrada, excelente para aplicaciones de audio y alta fidelidad."
  },
  {
    "id": 27,
    "category": "componentes",
    "image": "IMAGES/prod_27_2N3906.png",
    "name": "Tansistor 2N3906",
    "price": "$2 MXN",
    "description": "Transistor PNP de propósito general. El complemento perfecto para el 2N3904 en etapas de amplificación push-pull y lógica complementaria."
  },
  {
    "id": 28,
    "category": "componentes",
    "image": "IMAGES/prod_28_BC547.png",
    "name": "Tansistor BC547",
    "price": "$2 MXN",
    "description": "Transistor NPN de propósito general de bajo ruido. Ampliamente utilizado en etapas de preamplificación de audio y circuitos de conmutación de baja potencia."
  },
  {
    "id": 29,
    "category": "componentes",
    "image": "IMAGES/prod_29_2N2222.png",
    "name": "Tansistor 2N2222",
    "price": "$2 MXN",
    "description": "Transistor BJT NPN de propósito general. El 'caballo de batalla' para conmutación y amplificación de pequeñas señales. Indispensable en cualquier kit de electrónica."
  },
  {
    "id": 30,
    "category": "componentes",
    "image": "IMAGES/prod_30_2N3904.png",
    "name": "Tansistor 2N3904",
    "price": "$2 MXN",
    "description": "Transistor NPN de conmutación rápida. Complemento del 2N3906, ideal para lógica digital discreta y amplificadores de pequeña señal."
  },
  {
    "id": 31,
    "category": "componentes",
    "image": "IMAGES/prod_31_BC548.png",
    "name": "Tansistor BC548",
    "price": "$4 MXN",
    "description": "Transistor NPN de propósito general. Similar al BC547, ideal para circuitos de juguete, osciladores y drivers de LED simples."
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
    "description": "MOSFET de potencia N-Channel. Diseñado para conmutación de alta velocidad, ideal para fuentes PWM, control de motores DC y choppers."
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
    "description": "Transistor Darlington NPN de potencia. Alta ganancia de corriente, ideal para controlar motores DC, solenoides y lámparas de potencia media desde Arduino."
  },
  {
    "id": 37,
    "category": "componentes",
    "image": "IMAGES/prod_37_TIP125.png",
    "name": "Transistor TIP125",
    "price": "$10 MXN",
    "description": "Transistor Darlington PNP de potencia. Complemento del TIP120 para control de cargas y puentes H en manejo de motores."
  },
  {
    "id": 38,
    "category": "componentes",
    "image": "IMAGES/prod_38_TIP31C.png",
    "name": "Transistor TIP31C",
    "price": "$12 MXN",
    "description": "Transistor de potencia NPN. Versátil para amplificadores de audio de media potencia y reguladores de voltaje en serie."
  },
  {
    "id": 39,
    "category": "componentes",
    "image": "IMAGES/prod_39_TIP32C.png",
    "name": "Transistor TIP32C",
    "price": "$10 MXN",
    "description": "Transistor de potencia PNP. Complemento del TIP31, utilizado en etapas de salida de audio y control de corriente."
  },
  {
    "id": 40,
    "category": "componentes",
    "image": "IMAGES/prod_40_TIP41C.png",
    "name": "Transistor TIP41C",
    "price": "$10 MXN",
    "description": "Transistor de potencia NPN robusto. Popular en amplificadores de audio clase A y B y fuentes de alimentación conmutadas."
  },
  {
    "id": 41,
    "category": "componentes",
    "image": "IMAGES/prod_41_TIP42C.png",
    "name": "Transistor TIP42C",
    "price": "$10 MXN",
    "description": "Transistor de potencia PNP robusto. Pareja complementaria del TIP41 para diseños de amplificadores simétricos."
  },
  {
    "id": 42,
    "category": "componentes",
    "image": "IMAGES/prod_42_LM35.png",
    "name": "Sensor de temperatura LM35",
    "price": "$25 MXN",
    "description": "Sensor de temperatura de precisión integrado. Salida de voltaje linealmente proporcional a la temperatura en grados Celsius. Fácil de usar con cualquier ADC."
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
    "description": "Tiristor bidireccional (TRIAC). Interruptor de estado sólido para corriente alterna, ideal para dimmers de luz y control de velocidad de motores universales."
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
    "description": "Diodo rectificador de alta corriente (3A). Ideal para fuentes de alimentación de mayor potencia donde el 1N4007 se queda corto."
  },
  {
    "id": 47,
    "category": "componentes",
    "image": "IMAGES/prod_47_1N4001.png",
    "name": "Diodo 1N4001",
    "price": "$3 MXN",
    "description": "Diodo rectificador de propósito general. Robusto y confiable para rectificación de fuentes de alimentación y protección contra polaridad inversa."
  },
  {
    "id": 48,
    "category": "componentes",
    "image": "IMAGES/prod_48_1N4004.png",
    "name": "Diodo 1N4004",
    "price": "$3 MXN",
    "description": "Diodo rectificador de propósito general. Robusto y confiable para rectificación de fuentes de alimentación y protección contra polaridad inversa."
  },
  {
    "id": 49,
    "category": "componentes",
    "image": "IMAGES/prod_49_1N4007.png",
    "name": "Diodo 1N4007",
    "price": "$3 MXN",
    "description": "Diodo rectificador de propósito general. Robusto y confiable para rectificación de fuentes de alimentación y protección contra polaridad inversa."
  },
  {
    "id": 50,
    "category": "componentes",
    "image": "IMAGES/prod_50_1N5406.png",
    "name": "Diodo 1N5406",
    "price": "$3 MXN",
    "description": "Diodo rectificador de alta corriente (3A). Ideal para fuentes de alimentación de mayor potencia donde el 1N4007 se queda corto."
  },
  {
    "id": 51,
    "category": "componentes",
    "image": "IMAGES/prod_51_1N5408.png",
    "name": "Diodo 1N5408",
    "price": "$3 MXN",
    "description": "Diodo rectificador de alta corriente (3A). Ideal para fuentes de alimentación de mayor potencia donde el 1N4007 se queda corto."
  },
  {
    "id": 52,
    "category": "componentes",
    "image": "IMAGES/prod_52_1N5817.png",
    "name": "Diodo 1N5817",
    "price": "$3 MXN",
    "description": "Diodo Schottky de barrera. Baja caída de voltaje y conmutación muy rápida, ideal para fuentes conmutadas y circuitos solares de baja pérdida."
  },
  {
    "id": 53,
    "category": "componentes",
    "image": "IMAGES/prod_53_1N5819.png",
    "name": "Diodo 1N5819",
    "price": "$3 MXN",
    "description": "Diodo Schottky de barrera. Baja caída de voltaje y conmutación muy rápida, ideal para fuentes conmutadas y circuitos solares de baja pérdida."
  },
  {
    "id": 54,
    "category": "componentes",
    "image": "IMAGES/prod_54_1N5822.png",
    "name": "Diodo 1N5822",
    "price": "$3 MXN",
    "description": "Diodo Schottky de barrera. Baja caída de voltaje y conmutación muy rápida, ideal para fuentes conmutadas y circuitos solares de baja pérdida."
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
    "description": "Diodo de conmutación rápida de pequeña señal. Esencial para lógica digital, protección de relés (diodo volante) y mezcla de señales."
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
    "description": "Resistencia de película de carbón de cer\u00e1mica 5W 0.01  Ohms con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 75,
    "category": "componentes",
    "image": "IMAGES/prod_75_5W_0.1_Ohm.png",
    "name": "Resistencia cer\u00e1mica 5W 0.1 Ohm",
    "price": "$10 MXN",
    "description": "Resistencia de película de carbón de cer\u00e1mica 5W 0.1  Ohms con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 76,
    "category": "componentes",
    "image": "IMAGES/prod_76_5W_0.47_Ohm.png",
    "name": "Resistencia cer\u00e1mica 5W 0.47 Ohm",
    "price": "$10 MXN",
    "description": "Resistencia de película de carbón de cer\u00e1mica 5W 0.47  Ohms con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 77,
    "category": "componentes",
    "image": "IMAGES/prod_77_5W_0.22_Ohm.png",
    "name": "Resistencia cer\u00e1mica 5W 0.22 Ohm",
    "price": "$10 MXN",
    "description": "Resistencia de película de carbón de cer\u00e1mica 5W 0.22  Ohms con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 78,
    "category": "componentes",
    "image": "IMAGES/prod_78_5W_1_Ohm.png",
    "name": "Resistencia cer\u00e1mica 5W 1 Ohm",
    "price": "$10 MXN",
    "description": "Resistencia de película de carbón de cer\u00e1mica 5W 1  Ohms con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 79,
    "category": "componentes",
    "image": "IMAGES/prod_79_5W_3.9_Ohm.png",
    "name": "Resistencia cer\u00e1mica 5W 3.9 Ohm",
    "price": "$17 MXN",
    "description": "Resistencia de película de carbón de cer\u00e1mica 5W 3.9  Ohms con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 80,
    "category": "componentes",
    "image": "IMAGES/prod_80_SN74LS266N.png",
    "name": "Compuerta XNOR SN74LS266N",
    "price": "$19 MXN",
    "description": "Circuito integrado lógico de la serie 74LS/HC. Compuertas lógicas fundamentales (AND, OR, NOT, XOR) para aprendizaje digital y diseño de lógica discreta."
  },
  {
    "id": 81,
    "category": "componentes",
    "image": "IMAGES/prod_81_SN74LS00N.png",
    "name": "Compuerta NAND SN74LS00N",
    "price": "$8 MXN",
    "description": "Circuito integrado lógico de la serie 74LS/HC. Compuertas lógicas fundamentales (AND, OR, NOT, XOR) para aprendizaje digital y diseño de lógica discreta."
  },
  {
    "id": 82,
    "category": "componentes",
    "image": "IMAGES/prod_82_SN74LS02N.png",
    "name": "Compuerta NOR SN74LS02N",
    "price": "$9 MXN",
    "description": "Circuito integrado lógico de la serie 74LS/HC. Compuertas lógicas fundamentales (AND, OR, NOT, XOR) para aprendizaje digital y diseño de lógica discreta."
  },
  {
    "id": 83,
    "category": "componentes",
    "image": "IMAGES/prod_83_SN74LS04N.png",
    "name": "Compuerta NOT SN74LS04N",
    "price": "$10 MXN",
    "description": "Circuito integrado lógico de la serie 74LS/HC. Compuertas lógicas fundamentales (AND, OR, NOT, XOR) para aprendizaje digital y diseño de lógica discreta.",
  },
  {
    "id": 84,
    "category": "componentes",
    "image": "IMAGES/prod_84_SN74LS08N.png",
    "name": "Compuerta AND SN74LS08N",
    "price": "$9 MXN",
    "description": "Circuito integrado lógico de la serie 74LS/HC. Compuertas lógicas fundamentales (AND, OR, NOT, XOR) para aprendizaje digital y diseño de lógica discreta.",
  },
  {
    "id": 85,
    "category": "componentes",
    "image": "IMAGES/prod_85_SN74LS32N.png",
    "name": "Compuerta OR SN74LS32N",
    "price": "$9 MXN",
    "description": "Circuito integrado lógico de la serie 74LS/HC. Compuertas lógicas fundamentales (AND, OR, NOT, XOR) para aprendizaje digital y diseño de lógica discreta."
  },
  {
    "id": 86,
    "category": "componentes",
    "image": "IMAGES/prod_86_SN74LS86N.png",
    "name": "Compuerta XOR SN74LS86N",
    "price": "$8 MXN",
    "description": "Circuito integrado lógico de la serie 74LS/HC. Compuertas lógicas fundamentales (AND, OR, NOT, XOR) para aprendizaje digital y diseño de lógica discreta.",
  },
  {
    "id": 87,
    "category": "componentes",
    "image": "IMAGES/prod_87_SN74LS47N.png",
    "name": "Decodificador SN74LS47N",
    "price": "$16 MXN",
    "description": "Circuito integrado lógico de la serie 74LS/HC. Compuertas lógicas fundamentales (AND, OR, NOT, XOR) para aprendizaje digital y diseño de lógica discreta."
  },
  {
    "id": 88,
    "category": "componentes",
    "image": "IMAGES/prod_88_NE555.png",
    "name": "Circuito integrado NE555",
    "price": "$5 MXN",
    "description": "El legendario circuito integrado Temporizador 555. Capaz de generar oscilaciones, retardos precisos y PWM. El chip más popular y versátil de la historia."
  },
  {
    "id": 89,
    "category": "componentes",
    "image": "IMAGES/prod_89_74HC595N.png",
    "name": "Registro de desplazamiento 74HC595N",
    "price": "$11 MXN",
    "description": "Registro de desplazamiento de 8 bits. La solución perfecta para expandir las salidas digitales de tu Arduino, controlando hasta 8 LEDs o dispositivos con solo 3 pines."
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
    "image": "IMAGES/prod_91_Resistencia_1mOhm.png",
    "name": "Resistencia 1m\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 1m\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 92,
    "category": "componentes",
    "image": "IMAGES/prod_92_Resistencia_1Ohm.png",
    "name": "Resistencia 1\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 1\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 93,
    "category": "componentes",
    "image": "IMAGES/prod_93_Resistencia_1.2Ohm.png",
    "name": "Resistencia 1.2\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 1.2\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 94,
    "category": "componentes",
    "image": "IMAGES/prod_94_Resistencia_1.5Ohm.png",
    "name": "Resistencia 1.5\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 1.5\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 95,
    "category": "componentes",
    "image": "IMAGES/prod_95_Resistencia_1.8Ohm.png",
    "name": "Resistencia 1.8\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 1.8\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 96,
    "category": "componentes",
    "image": "IMAGES/prod_96_Resistencia_2Ohm.png",
    "name": "Resistencia 2\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 2\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 97,
    "category": "componentes",
    "image": "IMAGES/prod_97_Resistencia_2.2Ohm.png",
    "name": "Resistencia 2.2\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 2.2\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 98,
    "category": "componentes",
    "image": "IMAGES/prod_98_Resistencia_2.4Ohm.png",
    "name": "Resistencia 2.4\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 2.4\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 99,
    "category": "componentes",
    "image": "IMAGES/prod_99_Resistencia_2.7Ohm.png",
    "name": "Resistencia 2.7\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 2.7\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 100,
    "category": "componentes",
    "image": "IMAGES/prod_100_Resistencia_3Ohm.png",
    "name": "Resistencia 3\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 3\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 101,
    "category": "componentes",
    "image": "IMAGES/prod_101_Resistencia_3.3Ohm.png",
    "name": "Resistencia 3.3\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 3.3\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 102,
    "category": "componentes",
    "image": "IMAGES/prod_101_Resistencia_3.3Ohm.png",
    "name": "Resistencia 3.6\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 3.6\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 103,
    "category": "componentes",
    "image": "IMAGES/prod_101_Resistencia_3.3Ohm.png",
    "name": "Resistencia 3.9\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 3.9\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 104,
    "category": "componentes",
    "image": "IMAGES/prod_101_Resistencia_3.3Ohm.png",
    "name": "Resistencia 4.3\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 4.3\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 105,
    "category": "componentes",
    "image": "IMAGES/prod_101_Resistencia_3.3Ohm.png",
    "name": "Resistencia 4.7\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 4.7\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 106,
    "category": "componentes",
    "image": "IMAGES/prod_101_Resistencia_3.3Ohm.png",
    "name": "Resistencia 5.1\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 5.1\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 107,
    "category": "componentes",
    "image": "IMAGES/prod_101_Resistencia_3.3Ohm.png",
    "name": "Resistencia 5.6\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 5.6\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 108,
    "category": "componentes",
    "image": "IMAGES/prod_101_Resistencia_3.3Ohm.png",
    "name": "Resistencia 6.2\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 6.2\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 109,
    "category": "componentes",
    "image": "IMAGES/prod_101_Resistencia_3.3Ohm.png",
    "name": "Resistencia 6.8\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 6.8\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 110,
    "category": "componentes",
    "image": "IMAGES/prod_101_Resistencia_3.3Ohm.png",
    "name": "Resistencia 7.5\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 7.5\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 111,
    "category": "componentes",
    "image": "IMAGES/prod_101_Resistencia_3.3Ohm.png",
    "name": "Resistencia 8.2\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 8.2\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 112,
    "category": "componentes",
    "image": "IMAGES/prod_101_Resistencia_3.3Ohm.png",
    "name": "Resistencia 9.1\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 9.1\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 113,
    "category": "componentes",
    "image": "IMAGES/prod_101_Resistencia_3.3Ohm.png",
    "name": "Resistencia 10\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 10\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 114,
    "category": "componentes",
    "image": "IMAGES/prod_101_Resistencia_3.3Ohm.png",
    "name": "Resistencia 12\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 12\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 115,
    "category": "componentes",
    "image": "IMAGES/prod_101_Resistencia_3.3Ohm.png",
    "name": "Resistencia 15\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 15\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 116,
    "category": "componentes",
    "image": "IMAGES/prod_101_Resistencia_3.3Ohm.png",
    "name": "Resistencia 18\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 18\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 117,
    "category": "componentes",
    "image": "IMAGES/prod_101_Resistencia_3.3Ohm.png",
    "name": "Resistencia 20\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 20\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 118,
    "category": "componentes",
    "image": "IMAGES/prod_101_Resistencia_3.3Ohm.png",
    "name": "Resistencia 22\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 22\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 119,
    "category": "componentes",
    "image": "IMAGES/prod_101_Resistencia_3.3Ohm.png",
    "name": "Resistencia 24\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 24\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 120,
    "category": "componentes",
    "image": "IMAGES/prod_101_Resistencia_3.3Ohm.png",
    "name": "Resistencia 27\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 27\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 121,
    "category": "componentes",
    "image": "IMAGES/prod_101_Resistencia_3.3Ohm.png",
    "name": "Resistencia 30\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 30\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 122,
    "category": "componentes",
    "image": "IMAGES/prod_101_Resistencia_3.3Ohm.png",
    "name": "Resistencia 33\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 33\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 123,
    "category": "componentes",
    "image": "IMAGES/prod_101_Resistencia_3.3Ohm.png",
    "name": "Resistencia 36\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 36\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 124,
    "category": "componentes",
    "image": "IMAGES/prod_101_Resistencia_3.3Ohm.png",
    "name": "Resistencia 39\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 39\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 125,
    "category": "componentes",
    "image": "IMAGES/prod_125_Resistencia_43Ohm.png",
    "name": "Resistencia 43\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 43\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 126,
    "category": "componentes",
    "image": "IMAGES/prod_126_Resistencia_47Ohm.png",
    "name": "Resistencia 47\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 47\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 127,
    "category": "componentes",
    "image": "IMAGES/prod_127_Resistencia_51Ohm.png",
    "name": "Resistencia 51\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 51\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 128,
    "category": "componentes",
    "image": "IMAGES/prod_128_Resistencia_56Ohm.png",
    "name": "Resistencia 56\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 56\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 129,
    "category": "componentes",
    "image": "IMAGES/prod_129_Resistencia_62Ohm.png",
    "name": "Resistencia 62\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 62\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 130,
    "category": "componentes",
    "image": "IMAGES/prod_130_Resistencia_68Ohm.png",
    "name": "Resistencia 68\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 68\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 131,
    "category": "componentes",
    "image": "IMAGES/prod_131_Resistencia_75Ohm.png",
    "name": "Resistencia 75\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 75\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 132,
    "category": "componentes",
    "image": "IMAGES/prod_132_Resistencia_82Ohm.png",
    "name": "Resistencia 82\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 82\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 133,
    "category": "componentes",
    "image": "IMAGES/prod_133_Resistencia_91Ohm.png",
    "name": "Resistencia 91\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 91\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 134,
    "category": "componentes",
    "image": "IMAGES/prod_134_Resistencia_100Ohm.png",
    "name": "Resistencia 100\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 100\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 135,
    "category": "componentes",
    "image": "IMAGES/prod_135_Resistencia_120Ohm.png",
    "name": "Resistencia 120\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 120\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 136,
    "category": "componentes",
    "image": "IMAGES/prod_136_Resistencia_200Ohm.png",
    "name": "Resistencia 200\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 200\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 137,
    "category": "componentes",
    "image": "IMAGES/prod_137_Resistencia_220Ohm.png",
    "name": "Resistencia 220\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 220\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 138,
    "category": "componentes",
    "image": "IMAGES/prod_138_Resistencia_300Ohm.png",
    "name": "Resistencia 300\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 300\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 139,
    "category": "componentes",
    "image": "IMAGES/prod_139_Resistencia_360Ohm.png",
    "name": "Resistencia 360\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 360\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 140,
    "category": "componentes",
    "image": "IMAGES/prod_140_Resistencia_390Ohm.png",
    "name": "Resistencia 390\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 390\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 141,
    "category": "componentes",
    "image": "IMAGES/prod_141_Resistencia_430Ohm.png",
    "name": "Resistencia 430\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 430\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 142,
    "category": "componentes",
    "image": "IMAGES/prod_142_Resistencia_470Ohm.png",
    "name": "Resistencia 470\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 470\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 143,
    "category": "componentes",
    "image": "IMAGES/prod_143_Resistencia_510Ohm.png",
    "name": "Resistencia 510\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 510\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 144,
    "category": "componentes",
    "image": "IMAGES/prod_144_Resistencia_560Ohm.png",
    "name": "Resistencia 560\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 560\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 145,
    "category": "componentes",
    "image": "IMAGES/prod_145_Resistencia_620Ohm.png",
    "name": "Resistencia 620\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 620\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 146,
    "category": "componentes",
    "image": "IMAGES/prod_146_Resistencia_680Ohm.png",
    "name": "Resistencia 680\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 680\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 147,
    "category": "componentes",
    "image": "IMAGES/prod_147_Resistencia_750Ohm.png",
    "name": "Resistencia 750\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 750\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 148,
    "category": "componentes",
    "image": "IMAGES/prod_148_Resistencia_820Ohm.png",
    "name": "Resistencia 820\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 820\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 149,
    "category": "componentes",
    "image": "IMAGES/prod_149_Resistencia_910Ohm.png",
    "name": "Resistencia 910\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 910\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 150,
    "category": "componentes",
    "image": "IMAGES/prod_150_Resistencia_1kOhm.png",
    "name": "Resistencia 1k\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 1k\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 151,
    "category": "componentes",
    "image": "IMAGES/prod_151_Resistencia_1.2kOhm.png",
    "name": "Resistencia 1.2k\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 1.2k\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 152,
    "category": "componentes",
    "image": "IMAGES/prod_152_Resistencia_1.5kOhm.png",
    "name": "Resistencia 1.5k\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 1.5k\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 153,
    "category": "componentes",
    "image": "IMAGES/prod_153_Resistencia_1.8kOhm.png",
    "name": "Resistencia 1.8k\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 1.8k\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 154,
    "category": "componentes",
    "image": "IMAGES/prod_154_Resistencia_2kOhm.png",
    "name": "Resistencia 2k\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 2k\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 155,
    "category": "componentes",
    "image": "IMAGES/prod_155_Resistencia_2.2kOhm.png",
    "name": "Resistencia 2.2k\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 2.2k\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 156,
    "category": "componentes",
    "image": "IMAGES/prod_156_Resistencia_2.4kOhm.png",
    "name": "Resistencia 2.4k\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 2.4k\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 157,
    "category": "componentes",
    "image": "IMAGES/prod_157_Resistencia_2.7kOhm.png",
    "name": "Resistencia 2.7k\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 2.7k\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 158,
    "category": "componentes",
    "image": "IMAGES/prod_158_Resistencia_3kOhm.png",
    "name": "Resistencia 3k\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 3k\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 159,
    "category": "componentes",
    "image": "IMAGES/prod_159_Resistencia_3.3kOhm.png",
    "name": "Resistencia 3.3k\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 3.3k\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 160,
    "category": "componentes",
    "image": "IMAGES/prod_160_Resistencia_3.6kOhm.png",
    "name": "Resistencia 3.6k\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 3.6k\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 161,
    "category": "componentes",
    "image": "IMAGES/prod_161_Resistencia_3.9kOhm.png",
    "name": "Resistencia 3.9k\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 3.9k\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 162,
    "category": "componentes",
    "image": "IMAGES/prod_162_Resistencia_4.3kOhm.png",
    "name": "Resistencia 4.3k\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 4.3k\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 163,
    "category": "componentes",
    "image": "IMAGES/prod_163_Resistencia_4.7kOhm.png",
    "name": "Resistencia 4.7k\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 4.7k\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 164,
    "category": "componentes",
    "image": "IMAGES/prod_164_Resistencia_5.1kOhm.png",
    "name": "Resistencia 5.1k\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 5.1k\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 165,
    "category": "componentes",
    "image": "IMAGES/prod_165_Resistencia_5.6kOhm.png",
    "name": "Resistencia 5.6k\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 5.6k\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 166,
    "category": "componentes",
    "image": "IMAGES/prod_166_Resistencia_6.2kOhm.png",
    "name": "Resistencia 6.2k\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 6.2k\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 167,
    "category": "componentes",
    "image": "IMAGES/prod_167_Resistencia_6.8kOhm.png",
    "name": "Resistencia 6.8k\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 6.8k\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 168,
    "category": "componentes",
    "image": "IMAGES/prod_168_Resistencia_7.5kOhm.png",
    "name": "Resistencia 7.5k\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 7.5k\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 169,
    "category": "componentes",
    "image": "IMAGES/prod_169_Resistencia_8.2kOhm.png",
    "name": "Resistencia 8.2k\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 8.2k\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 170,
    "category": "componentes",
    "image": "IMAGES/prod_170_Resistencia_9.1kOhm.png",
    "name": "Resistencia 9.1k\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 9.1k\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 171,
    "category": "componentes",
    "image": "IMAGES/prod_171_Resistencia_12kOhm.png",
    "name": "Resistencia 12k\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 12k\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 172,
    "category": "componentes",
    "image": "IMAGES/prod_172_Resistencia_15kOhm.png",
    "name": "Resistencia 15k\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 15k\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 173,
    "category": "componentes",
    "image": "IMAGES/prod_173_Resistencia_18kOhm.png",
    "name": "Resistencia 18k\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 18k\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 174,
    "category": "componentes",
    "image": "IMAGES/prod_174_Resistencia_20kOhm.png",
    "name": "Resistencia 20k\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 20k\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 175,
    "category": "componentes",
    "image": "IMAGES/prod_175_Resistencia_22kOhm.png",
    "name": "Resistencia 22k\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 22k\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 176,
    "category": "componentes",
    "image": "IMAGES/prod_176_Resistencia_24kOhm.png",
    "name": "Resistencia 24k\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 24k\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 177,
    "category": "componentes",
    "image": "IMAGES/prod_177_Resistencia_27kOhm.png",
    "name": "Resistencia 27k\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 27k\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 178,
    "category": "componentes",
    "image": "IMAGES/prod_178_Resistencia_30kOhm.png",
    "name": "Resistencia 30k\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 30k\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 179,
    "category": "componentes",
    "image": "IMAGES/prod_179_Resistencia_33kOhm.png",
    "name": "Resistencia 33k\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 33k\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 180,
    "category": "componentes",
    "image": "IMAGES/prod_180_Resistencia_36kOhm.png",
    "name": "Resistencia 36k\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 36k\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 181,
    "category": "componentes",
    "image": "IMAGES/prod_181_Resistencia_39kOhm.png",
    "name": "Resistencia 39k\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 39k\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 182,
    "category": "componentes",
    "image": "IMAGES/prod_182_Resistencia_43kOhm.png",
    "name": "Resistencia 43k\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 43k\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 183,
    "category": "componentes",
    "image": "IMAGES/prod_183_Resistencia_47kOhm.png",
    "name": "Resistencia 47k\u03a9",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 47k\u03a9 con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 184,
    "category": "componentes",
    "image": "IMAGES/prod_101_Resistencia_3.3Ohm.png",
    "name": "Resistencia 150Ω",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 150  Ohmss con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 185,
    "category": "componentes",
    "image": "IMAGES/prod_101_Resistencia_3.3Ohm.png",
    "name": "Resistencia 330Ω",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 330  Ohmss con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 186,
    "category": "componentes",
    "image": "IMAGES/prod_194_Resistencia_100kOhm.png",
    "name": "Resistencia 10kΩ",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 10k  Ohmss con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 187,
    "category": "componentes",
    "image": "IMAGES/prod_187_Resistencia_51kOhm.png",
    "name": "Resistencia 51kΩ",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 51k  Ohmss con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 188,
    "category": "componentes",
    "image": "IMAGES/prod_188_Resistencia_56kOhm.png",
    "name": "Resistencia 56kΩ",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 56k  Ohmss con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 189,
    "category": "componentes",
    "image": "IMAGES/prod_189_Resistencia_62kOhm.png",
    "name": "Resistencia 62kΩ",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 62k  Ohmss con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 190,
    "category": "componentes",
    "image": "IMAGES/prod_190_Resistencia_68kOhm.png",
    "name": "Resistencia 68kΩ",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 68k  Ohmss con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 191,
    "category": "componentes",
    "image": "IMAGES/prod_191_Resistencia_75kOhm.png",
    "name": "Resistencia 75kΩ",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 75k  Ohmss con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 192,
    "category": "componentes",
    "image": "IMAGES/prod_192_Resistencia_82kOhm.png",
    "name": "Resistencia 82kΩ",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 82k  Ohmss con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 193,
    "category": "componentes",
    "image": "IMAGES/prod_193_Resistencia_91kOhm.png",
    "name": "Resistencia 91kΩ",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 91k  Ohmss con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 194,
    "category": "componentes",
    "image": "IMAGES/prod_194_Resistencia_100kOhm.png",
    "name": "Resistencia 100kΩ",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 100k  Ohmss con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 196,
    "category": "componentes",
    "image": "IMAGES/prod_196_Resistencia_120kOhm.png",
    "name": "Resistencia 120kΩ",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 120k  Ohmss con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 197,
    "category": "componentes",
    "image": "IMAGES/prod_194_Resistencia_100kOhm.png",
    "name": "Resistencia 150kΩ",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 150k  Ohmss con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 198,
    "category": "componentes",
    "image": "IMAGES/prod_194_Resistencia_100kOhm.png",
    "name": "Resistencia 180kΩ",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 180k  Ohmss con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 199,
    "category": "componentes",
    "image": "IMAGES/prod_199_Resistencia_220kOhm.png",
    "name": "Resistencia 220kΩ",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 220k  Ohmss con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 200,
    "category": "componentes",
    "image": "IMAGES/prod_194_Resistencia_100kOhm.png",
    "name": "Resistencia 270kΩ",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 270k  Ohmss con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 201,
    "category": "componentes",
    "image": "IMAGES/prod_201_Resistencia_330kOhm.png",
    "name": "Resistencia 330kΩ",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 330k  Ohmss con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 202,
    "category": "componentes",
    "image": "IMAGES/prod_194_Resistencia_100kOhm.png",
    "name": "Resistencia 390kΩ",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 390k  Ohmss con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 203,
    "category": "componentes",
    "image": "IMAGES/prod_203_Resistencia_470kOhm.png",
    "name": "Resistencia 470kΩ",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 470k  Ohmss con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 204,
    "category": "componentes",
    "image": "IMAGES/prod_204_Resistencia_510kOhm.png",
    "name": "Resistencia 510kΩ",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 510k  Ohmss con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 205,
    "category": "componentes",
    "image": "IMAGES/prod_205_Resistencia_560kOhm.png",
    "name": "Resistencia 560kΩ",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 560k  Ohmss con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 195,
    "category": "componentes",
    "image": "IMAGES/prod_195_Resistencia_1MOhm.png",
    "name": "Resistencia 1MΩ",
    "price": "$1 MXN",
    "description": "Resistencia de película de carbón de 1M  Ohmss con potencia de 1/4W. Componente esencial de alta fiabilidad para controlar corriente y voltaje en circuitos electrónicos. Ideal para prototipos Arduino, reparaciones y diseño de PCBs. Cuerpo con código de colores estándar y terminales estañadas para soldadura fácil."
  },
  {
    "id": 206,
    "category": "componentes",
    "image": "IMAGES/prod_206_Potenciometro_1MOhm.png",
    "name": "Potenciómetro 1MΩ",
    "price": "$10 MXN",
    "description": "Potenciómetro de 1MΩ de ajuste lineal/logarítmico. Componente resistivo variable de alta durabilidad, perfecto para controles de interfaz de usuario como volumen, brillo o calibración de sensores. Eje estriado compatible con perillas estándar."
  },
  {
    "id": 207,
    "category": "componentes",
    "image": "IMAGES/prod_207_Potenciometro_1K.png",
    "name": "Potenciómetro 1K",
    "price": "$10 MXN",
    "description": "Potenciómetro de 1K de ajuste lineal/logarítmico. Componente resistivo variable de alta durabilidad, perfecto para controles de interfaz de usuario como volumen, brillo o calibración de sensores. Eje estriado compatible con perillas estándar."
  },
  {
    "id": 208,
    "category": "componentes",
    "image": "IMAGES/prod_208_Potenciometro_2K.png",
    "name": "Potenciómetro 2K",
    "price": "$10 MXN",
    "description": "Potenciómetro de 2K de ajuste lineal/logarítmico. Componente resistivo variable de alta durabilidad, perfecto para controles de interfaz de usuario como volumen, brillo o calibración de sensores. Eje estriado compatible con perillas estándar."
  },
  {
    "id": 209,
    "category": "componentes",
    "image": "IMAGES/prod_209_Potenciometro_10K.png",
    "name": "Potenciómetro 10K",
    "price": "$10 MXN",
    "description": "Potenciómetro de 10K de ajuste lineal/logarítmico. Componente resistivo variable de alta durabilidad, perfecto para controles de interfaz de usuario como volumen, brillo o calibración de sensores. Eje estriado compatible con perillas estándar."
  },
  {
    "id": 210,
    "category": "componentes",
    "image": "IMAGES/prod_210_Potenciometro_20K.png",
    "name": "Potenciómetro 20K",
    "price": "$10 MXN",
    "description": "Potenciómetro de 20K de ajuste lineal/logarítmico. Componente resistivo variable de alta durabilidad, perfecto para controles de interfaz de usuario como volumen, brillo o calibración de sensores. Eje estriado compatible con perillas estándar."
  },
  {
    "id": 211,
    "category": "componentes",
    "image": "IMAGES/prod_211_Potenciometro_500  OHMS.png",
    "name": "Potenciómetro 500 OHMS",
    "price": "$10 MXN",
    "description": "Potenciómetro de 500 OHMS de ajuste lineal/logarítmico. Componente resistivo variable de alta durabilidad, perfecto para controles de interfaz de usuario como volumen, brillo o calibración de sensores. Eje estriado compatible con perillas estándar."
  },
  {
    "id": 212,
    "category": "componentes",
    "image": "IMAGES/prod_212_Potenciometro_500  K.png",
    "name": "Potenciómetro 500K",
    "price": "$10 MXN",
    "description": "Potenciómetro de 500K de ajuste lineal/logarítmico. Componente resistivo variable de alta durabilidad, perfecto para controles de interfaz de usuario como volumen, brillo o calibración de sensores. Eje estriado compatible con perillas estándar."
  },
  {
    "id": 213,
    "category": "componentes",
    "image": "IMAGES/prod_213_Potenciometro_250 K.png",
    "name": "Potenciómetro 250K",
    "price": "$10 MXN",
    "description": "Potenciómetro de 250K de ajuste lineal/logarítmico. Componente resistivo variable de alta durabilidad, perfecto para controles de interfaz de usuario como volumen, brillo o calibración de sensores. Eje estriado compatible con perillas estándar."
  },
  {
    "id": 214,
    "category": "componentes",
    "image": "IMAGES/prod_214_Potenciometro_50 K.png",
    "name": "Potenciómetro 50K",
    "price": "$10 MXN",
    "description": "Potenciómetro de 50K de ajuste lineal/logarítmico. Componente resistivo variable de alta durabilidad, perfecto para controles de interfaz de usuario como volumen, brillo o calibración de sensores. Eje estriado compatible con perillas estándar."
  },
  {
    "id": 215,
    "category": "componentes",
    "image": "IMAGES/prod_215_Potenciometro_5K.png",
    "name": "Potenciómetro 5K",
    "price": "$10 MXN",
    "description": "Potenciómetro de 5K de ajuste lineal/logarítmico. Componente resistivo variable de alta durabilidad, perfecto para controles de interfaz de usuario como volumen, brillo o calibración de sensores. Eje estriado compatible con perillas estándar."
  },
  {
    "id": 216,
    "category": "componentes",
    "image": "IMAGES/prod_216_Potenciometro_100K.png",
    "name": "Potenciómetro 100K (A)",
    "price": "$10 MXN",
    "description": "Potenciómetro de 100K (A) de ajuste lineal/logarítmico. Componente resistivo variable de alta durabilidad, perfecto para controles de interfaz de usuario como volumen, brillo o calibración de sensores. Eje estriado compatible con perillas estándar."
  },
  {
    "id": 217,
    "category": "componentes",
    "image": "IMAGES/prod_217_Potenciometro_100K.png",
    "name": "Potenciómetro 100K (B)",
    "price": "$10 MXN",
    "description": "Potenciómetro de 100K (B) de ajuste lineal/logarítmico. Componente resistivo variable de alta durabilidad, perfecto para controles de interfaz de usuario como volumen, brillo o calibración de sensores. Eje estriado compatible con perillas estándar."
  },
  {
    "id": 218,
    "category": "componentes",
    "image": "IMAGES/prod_218_Potenciometro_50K.png",
    "name": "Potenciómetro 50K (B)",
    "price": "$10 MXN",
    "description": "Potenciómetro de 50K (B) de ajuste lineal/logarítmico. Componente resistivo variable de alta durabilidad, perfecto para controles de interfaz de usuario como volumen, brillo o calibración de sensores. Eje estriado compatible con perillas estándar."
  }
,
  {
    "id": 219,
    "category": "componentes",
    "image": "IMAGES/prod_219.png",
    "name": "Capacitor Electrolítico 10 V  a 220 uF",
    "price": "$7.00  MXN",
    "description": "Capacitor Electrolítico de alta calidad Capacitor Electrolítico 10 V  a 220 uF. Diseñado para aplicaciones de filtrado en fuentes de alimentación, desacoplamiento de señales y almacenamiento de energía. Con un voltaje máximo de 10V y capacitancia de 220uF, es ideal para proyectos de electrónica general y reparaciones. Formato radial polarizado, excelente estabilidad y larga vida útil.",
    "specs": {
      "Producto": "Capacitor Electrolítico",
      "Modelo": "10 V  a 220 uF",
      "Voltaje": "S/P  Nominal",
      "Tolerancia": "0.2",
      "Color": "Negro",
      "SKU": "CAP-219"
    }
  },
  {
    "id": 220,
    "category": "componentes",
    "image": "IMAGES/prod_220.png",
    "name": "Capacitor Electrolítico 10 V a 47 uF",
    "price": "$7 MXN",
    "description": "Capacitor Electrolítico de alta calidad Capacitor Electrolítico 10 V a 47 uF. Diseñado para aplicaciones de filtrado en fuentes de alimentación, desacoplamiento de señales y almacenamiento de energía. Con un voltaje máximo de 10V y capacitancia de 47uF, es ideal para proyectos de electrónica general y reparaciones. Formato radial polarizado, excelente estabilidad y larga vida útil.",
    "specs": {
      "Producto": "Capacitor Electrolítico",
      "Modelo": "10 V a 47 uF",
      "Voltaje": "S/P  Nominal",
      "Tolerancia": "0.2",
      "Color": "negro",
      "SKU": "CAP-220"
    }
  },
  {
    "id": 221,
    "category": "componentes",
    "image": "IMAGES/prod_221.png",
    "name": "Capacitor Electrolítico 10V a 470uF",
    "price": "$7 MXN",
    "description": "Capacitor Electrolítico de alta calidad Capacitor Electrolítico 10V a 470uF. Diseñado para aplicaciones de filtrado en fuentes de alimentación, desacoplamiento de señales y almacenamiento de energía. Con un voltaje máximo de 10V y capacitancia de 470uF, es ideal para proyectos de electrónica general y reparaciones. Formato radial polarizado, excelente estabilidad y larga vida útil.",
    "specs": {
      "Producto": "Capacitor Electrolítico",
      "Modelo": "10V a 470uF",
      "Voltaje": "S/P  Nominal",
      "Tolerancia": "0.2",
      "Color": "negro",
      "SKU": "CAP-221"
    }
  },
  {
    "id": 222,
    "category": "componentes",
    "image": "IMAGES/prod_222.png",
    "name": "Capacitor Electrolítico 16V a 100uF",
    "price": "$7 MXN",
    "description": "Capacitor Electrolítico de alta calidad Capacitor Electrolítico 16V a 100uF. Diseñado para aplicaciones de filtrado en fuentes de alimentación, desacoplamiento de señales y almacenamiento de energía. Con un voltaje máximo de 16V y capacitancia de 100uF, es ideal para proyectos de electrónica general y reparaciones. Formato radial polarizado, excelente estabilidad y larga vida útil.",
    "specs": {
      "Producto": "Capacitor Electrolítico",
      "Modelo": "16V a 100uF",
      "Voltaje": "S/P  Nominal",
      "Tolerancia": "0.2",
      "Color": "negro",
      "SKU": "CAP-222"
    }
  },
  {
    "id": 223,
    "category": "componentes",
    "image": "IMAGES/prod_223.png",
    "name": "Capacitor Electrolítico 16V a 1000uF",
    "price": "$7 MXN",
    "description": "Capacitor Electrolítico de alta calidad Capacitor Electrolítico 16V a 1000uF. Diseñado para aplicaciones de filtrado en fuentes de alimentación, desacoplamiento de señales y almacenamiento de energía. Con un voltaje máximo de 16V y capacitancia de 1000uF, es ideal para proyectos de electrónica general y reparaciones. Formato radial polarizado, excelente estabilidad y larga vida útil.",
    "specs": {
      "Producto": "Capacitor Electrolítico",
      "Modelo": "16V a 1000uF",
      "Voltaje": "S/P  Nominal",
      "Tolerancia": "0.2",
      "Color": "negro",
      "SKU": "CAP-223"
    }
  },
  {
    "id": 224,
    "category": "componentes",
    "image": "IMAGES/prod_224.png",
    "name": "Capacitor Electrolítico 16V a 22uF",
    "price": "$7 MXN",
    "description": "Capacitor Electrolítico de alta calidad Capacitor Electrolítico 16V a 22uF. Diseñado para aplicaciones de filtrado en fuentes de alimentación, desacoplamiento de señales y almacenamiento de energía. Con un voltaje máximo de 16V y capacitancia de 22uF, es ideal para proyectos de electrónica general y reparaciones. Formato radial polarizado, excelente estabilidad y larga vida útil.",
    "specs": {
      "Producto": "Capacitor Electrolítico",
      "Modelo": "16V a 22uF",
      "Voltaje": "S/P  Nominal",
      "Tolerancia": "0.2",
      "Color": "negro",
      "SKU": "CAP-224"
    }
  },
  {
    "id": 225,
    "category": "componentes",
    "image": "IMAGES/prod_225.png",
    "name": "Capacitor Electrolítico 16V a 2200uF",
    "price": "$7 MXN",
    "description": "Capacitor Electrolítico de alta calidad Capacitor Electrolítico 16V a 2200uF. Diseñado para aplicaciones de filtrado en fuentes de alimentación, desacoplamiento de señales y almacenamiento de energía. Con un voltaje máximo de 16V y capacitancia de 2200uF, es ideal para proyectos de electrónica general y reparaciones. Formato radial polarizado, excelente estabilidad y larga vida útil.",
    "specs": {
      "Producto": "Capacitor Electrolítico",
      "Modelo": "16V a 2200uF",
      "Voltaje": "S/P  Nominal",
      "Tolerancia": "0.2",
      "Color": "negro",
      "SKU": "CAP-225"
    }
  },
  {
    "id": 226,
    "category": "componentes",
    "image": "IMAGES/prod_226.png",
    "name": "Capacitor Electrolítico 16V a 33uF",
    "price": "$7 MXN",
    "description": "Capacitor Electrolítico de alta calidad Capacitor Electrolítico 16V a 33uF. Diseñado para aplicaciones de filtrado en fuentes de alimentación, desacoplamiento de señales y almacenamiento de energía. Con un voltaje máximo de 16V y capacitancia de 33uF, es ideal para proyectos de electrónica general y reparaciones. Formato radial polarizado, excelente estabilidad y larga vida útil.",
    "specs": {
      "Producto": "Capacitor Electrolítico",
      "Modelo": "16V a 33uF",
      "Voltaje": "S/P  Nominal",
      "Tolerancia": "0.2",
      "Color": "negro",
      "SKU": "CAP-226"
    }
  },
  {
    "id": 227,
    "category": "componentes",
    "image": "IMAGES/prod_227.png",
    "name": "Capacitor Electrolítico 16V a 470uF",
    "price": "$7 MXN",
    "description": "Capacitor Electrolítico de alta calidad Capacitor Electrolítico 16V a 470uF. Diseñado para aplicaciones de filtrado en fuentes de alimentación, desacoplamiento de señales y almacenamiento de energía. Con un voltaje máximo de 16V y capacitancia de 470uF, es ideal para proyectos de electrónica general y reparaciones. Formato radial polarizado, excelente estabilidad y larga vida útil.",
    "specs": {
      "Producto": "Capacitor Electrolítico",
      "Modelo": "16V a 470uF",
      "Voltaje": "S/P  Nominal",
      "Tolerancia": "0.2",
      "Color": "verde",
      "SKU": "CAP-227"
    }
  },
  {
    "id": 228,
    "category": "componentes",
    "image": "IMAGES/prod_228.png",
    "name": "Capacitor Electrolítico 16V a 680uF",
    "price": "$7 MXN",
    "description": "Capacitor Electrolítico de alta calidad Capacitor Electrolítico 16V a 680uF. Diseñado para aplicaciones de filtrado en fuentes de alimentación, desacoplamiento de señales y almacenamiento de energía. Con un voltaje máximo de 16V y capacitancia de 680uF, es ideal para proyectos de electrónica general y reparaciones. Formato radial polarizado, excelente estabilidad y larga vida útil.",
    "specs": {
      "Producto": "Capacitor Electrolítico",
      "Modelo": "16V a 680uF",
      "Voltaje": "S/P  Nominal",
      "Tolerancia": "0.2",
      "Color": "negro",
      "SKU": "CAP-228"
    }
  },
  {
    "id": 229,
    "category": "componentes",
    "image": "IMAGES/prod_229.png",
    "name": "Capacitor Electrolítico 25V a 10uF",
    "price": "$7 MXN",
    "description": "Capacitor Electrolítico de alta calidad Capacitor Electrolítico 25V a 10uF. Diseñado para aplicaciones de filtrado en fuentes de alimentación, desacoplamiento de señales y almacenamiento de energía. Con un voltaje máximo de 25V y capacitancia de 10uF, es ideal para proyectos de electrónica general y reparaciones. Formato radial polarizado, excelente estabilidad y larga vida útil.",
    "specs": {
      "Producto": "Capacitor Electrolítico",
      "Modelo": "25V a 10uF",
      "Voltaje": "S/P  Nominal",
      "Tolerancia": "0.2",
      "Color": "negro",
      "SKU": "CAP-229"
    }
  },
  {
    "id": 230,
    "category": "componentes",
    "image": "IMAGES/prod_230.png",
    "name": "Capacitor Electrolítico 25V a 100uF",
    "price": "$7 MXN",
    "description": "Capacitor Electrolítico de alta calidad Capacitor Electrolítico 25V a 100uF. Diseñado para aplicaciones de filtrado en fuentes de alimentación, desacoplamiento de señales y almacenamiento de energía. Con un voltaje máximo de 25V y capacitancia de 100uF, es ideal para proyectos de electrónica general y reparaciones. Formato radial polarizado, excelente estabilidad y larga vida útil.",
    "specs": {
      "Producto": "Capacitor Electrolítico",
      "Modelo": "25V a 100uF",
      "Voltaje": "S/P  Nominal",
      "Tolerancia": "0.2",
      "Color": "negro",
      "SKU": "CAP-230"
    }
  },
  {
    "id": 231,
    "category": "componentes",
    "image": "IMAGES/prod_231.png",
    "name": "Capacitor Electrolítico 25V a 1000uF",
    "price": "$7 MXN",
    "description": "Capacitor Electrolítico de alta calidad Capacitor Electrolítico 25V a 1000uF. Diseñado para aplicaciones de filtrado en fuentes de alimentación, desacoplamiento de señales y almacenamiento de energía. Con un voltaje máximo de 25V y capacitancia de 1000uF, es ideal para proyectos de electrónica general y reparaciones. Formato radial polarizado, excelente estabilidad y larga vida útil.",
    "specs": {
      "Producto": "Capacitor Electrolítico",
      "Modelo": "25V a 1000uF",
      "Voltaje": "S/P  Nominal",
      "Tolerancia": "0.2",
      "Color": "negro",
      "SKU": "CAP-231"
    }
  },
  {
    "id": 232,
    "category": "componentes",
    "image": "IMAGES/prod_232.png",
    "name": "Capacitor Electrolítico 25V a 22uF",
    "price": "$7 MXN",
    "description": "Capacitor Electrolítico de alta calidad Capacitor Electrolítico 25V a 22uF. Diseñado para aplicaciones de filtrado en fuentes de alimentación, desacoplamiento de señales y almacenamiento de energía. Con un voltaje máximo de 25V y capacitancia de 22uF, es ideal para proyectos de electrónica general y reparaciones. Formato radial polarizado, excelente estabilidad y larga vida útil.",
    "specs": {
      "Producto": "Capacitor Electrolítico",
      "Modelo": "25V a 22uF",
      "Voltaje": "S/P  Nominal",
      "Tolerancia": "0.2",
      "Color": "negro",
      "SKU": "CAP-232"
    }
  },
  {
    "id": 233,
    "category": "componentes",
    "image": "IMAGES/prod_233.png",
    "name": "Capacitor Electrolítico 25V a 2200uF",
    "price": "$7 MXN",
    "description": "Capacitor Electrolítico de alta calidad Capacitor Electrolítico 25V a 2200uF. Diseñado para aplicaciones de filtrado en fuentes de alimentación, desacoplamiento de señales y almacenamiento de energía. Con un voltaje máximo de 25V y capacitancia de 2200uF, es ideal para proyectos de electrónica general y reparaciones. Formato radial polarizado, excelente estabilidad y larga vida útil.",
    "specs": {
      "Producto": "Capacitor Electrolítico",
      "Modelo": "25V a 2200uF",
      "Voltaje": "S/P  Nominal",
      "Tolerancia": "0.2",
      "Color": "negro",
      "SKU": "CAP-233"
    }
  },
  {
    "id": 234,
    "category": "componentes",
    "image": "IMAGES/prod_234.png",
    "name": "Capacitor Electrolítico 25V a 330uF",
    "price": "$7 MXN",
    "description": "Capacitor Electrolítico de alta calidad Capacitor Electrolítico 25V a 330uF. Diseñado para aplicaciones de filtrado en fuentes de alimentación, desacoplamiento de señales y almacenamiento de energía. Con un voltaje máximo de 25V y capacitancia de 330uF, es ideal para proyectos de electrónica general y reparaciones. Formato radial polarizado, excelente estabilidad y larga vida útil.",
    "specs": {
      "Producto": "Capacitor Electrolítico",
      "Modelo": "25V a 330uF",
      "Voltaje": "S/P  Nominal",
      "Tolerancia": "0.2",
      "Color": "verde",
      "SKU": "CAP-234"
    }
  },
  {
    "id": 235,
    "category": "componentes",
    "image": "IMAGES/prod_235.png",
    "name": "Capacitor Electrolítico 25V a 47uF",
    "price": "$7 MXN",
    "description": "Capacitor Electrolítico de alta calidad Capacitor Electrolítico 25V a 47uF. Diseñado para aplicaciones de filtrado en fuentes de alimentación, desacoplamiento de señales y almacenamiento de energía. Con un voltaje máximo de 25V y capacitancia de 47uF, es ideal para proyectos de electrónica general y reparaciones. Formato radial polarizado, excelente estabilidad y larga vida útil.",
    "specs": {
      "Producto": "Capacitor Electrolítico",
      "Modelo": "25V a 47uF",
      "Voltaje": "S/P  Nominal",
      "Tolerancia": "0.2",
      "Color": "Negro",
      "SKU": "CAP-235"
    }
  },
  {
    "id": 236,
    "category": "componentes",
    "image": "IMAGES/prod_236.png",
    "name": "Capacitor Electrolítico 50V a 0.1uF",
    "price": "$7 MXN",
    "description": "Capacitor Electrolítico de alta calidad Capacitor Electrolítico 50V a 0.1uF. Diseñado para aplicaciones de filtrado en fuentes de alimentación, desacoplamiento de señales y almacenamiento de energía. Con un voltaje máximo de 50V y capacitancia de 0.1uF, es ideal para proyectos de electrónica general y reparaciones. Formato radial polarizado, excelente estabilidad y larga vida útil.",
    "specs": {
      "Producto": "Capacitor Electrolítico",
      "Modelo": "50V a 0.1uF",
      "Voltaje": "S/P  Nominal",
      "Tolerancia": "0.2",
      "Color": "Negro",
      "SKU": "CAP-236"
    }
  },
  {
    "id": 237,
    "category": "componentes",
    "image": "IMAGES/prod_237.png",
    "name": "Capacitor Electrolítico 50V a 0.22uF",
    "price": "$7 MXN",
    "description": "Capacitor Electrolítico de alta calidad Capacitor Electrolítico 50V a 0.22uF. Diseñado para aplicaciones de filtrado en fuentes de alimentación, desacoplamiento de señales y almacenamiento de energía. Con un voltaje máximo de 50V y capacitancia de 0.22uF, es ideal para proyectos de electrónica general y reparaciones. Formato radial polarizado, excelente estabilidad y larga vida útil.",
    "specs": {
      "Producto": "Capacitor Electrolítico",
      "Modelo": "50V a 0.22uF",
      "Voltaje": "S/P  Nominal",
      "Tolerancia": "0.2",
      "Color": "Negro",
      "SKU": "CAP-237"
    }
  },
  {
    "id": 238,
    "category": "componentes",
    "image": "IMAGES/prod_238.png",
    "name": "Capacitor Electrolítico 50V a 0.47uF",
    "price": "$7 MXN",
    "description": "Capacitor Electrolítico de alta calidad Capacitor Electrolítico 50V a 0.47uF. Diseñado para aplicaciones de filtrado en fuentes de alimentación, desacoplamiento de señales y almacenamiento de energía. Con un voltaje máximo de 50V y capacitancia de 0.47uF, es ideal para proyectos de electrónica general y reparaciones. Formato radial polarizado, excelente estabilidad y larga vida útil.",
    "specs": {
      "Producto": "Capacitor Electrolítico",
      "Modelo": "50V a 0.47uF",
      "Voltaje": "S/P  Nominal",
      "Tolerancia": "0.2",
      "Color": "Negro",
      "SKU": "CAP-238"
    }
  },
  {
    "id": 239,
    "category": "componentes",
    "image": "IMAGES/prod_239.png",
    "name": "Capacitor Electrolítico 50V a 1uF",
    "price": "$7 MXN",
    "description": "Capacitor Electrolítico de alta calidad Capacitor Electrolítico 50V a 1uF. Diseñado para aplicaciones de filtrado en fuentes de alimentación, desacoplamiento de señales y almacenamiento de energía. Con un voltaje máximo de 50V y capacitancia de 1uF, es ideal para proyectos de electrónica general y reparaciones. Formato radial polarizado, excelente estabilidad y larga vida útil.",
    "specs": {
      "Producto": "Capacitor Electrolítico",
      "Modelo": "50V a 1uF",
      "Voltaje": "S/P  Nominal",
      "Tolerancia": "0.2",
      "Color": "Negro",
      "SKU": "CAP-239"
    }
  },
  {
    "id": 240,
    "category": "componentes",
    "image": "IMAGES/prod_240.png",
    "name": "Capacitor Electrolítico 50V a 10uF",
    "price": "$7 MXN",
    "description": "Capacitor Electrolítico de alta calidad Capacitor Electrolítico 50V a 10uF. Diseñado para aplicaciones de filtrado en fuentes de alimentación, desacoplamiento de señales y almacenamiento de energía. Con un voltaje máximo de 50V y capacitancia de 10uF, es ideal para proyectos de electrónica general y reparaciones. Formato radial polarizado, excelente estabilidad y larga vida útil.",
    "specs": {
      "Producto": "Capacitor Electrolítico",
      "Modelo": "50V a 10uF",
      "Voltaje": "S/P  Nominal",
      "Tolerancia": "0.2",
      "Color": "Negro",
      "SKU": "CAP-240"
    }
  },
  {
    "id": 241,
    "category": "componentes",
    "image": "IMAGES/prod_241.png",
    "name": "Capacitor Electrolítico 50V a 100uF",
    "price": "$7 MXN",
    "description": "Capacitor Electrolítico de alta calidad Capacitor Electrolítico 50V a 100uF. Diseñado para aplicaciones de filtrado en fuentes de alimentación, desacoplamiento de señales y almacenamiento de energía. Con un voltaje máximo de 50V y capacitancia de 100uF, es ideal para proyectos de electrónica general y reparaciones. Formato radial polarizado, excelente estabilidad y larga vida útil.",
    "specs": {
      "Producto": "Capacitor Electrolítico",
      "Modelo": "50V a 100uF",
      "Voltaje": "S/P  Nominal",
      "Tolerancia": "0.2",
      "Color": "Negro",
      "SKU": "CAP-241"
    }
  },
  {
    "id": 242,
    "category": "componentes",
    "image": "IMAGES/prod_242.png",
    "name": "Capacitor Electrolítico 50V a 1000uF",
    "price": "$7 MXN",
    "description": "Capacitor Electrolítico de alta calidad Capacitor Electrolítico 50V a 1000uF. Diseñado para aplicaciones de filtrado en fuentes de alimentación, desacoplamiento de señales y almacenamiento de energía. Con un voltaje máximo de 50V y capacitancia de 1000uF, es ideal para proyectos de electrónica general y reparaciones. Formato radial polarizado, excelente estabilidad y larga vida útil.",
    "specs": {
      "Producto": "Capacitor Electrolítico",
      "Modelo": "50V a 1000uF",
      "Voltaje": "S/P  Nominal",
      "Tolerancia": "0.2",
      "Color": "Negro",
      "SKU": "CAP-242"
    }
  },
  {
    "id": 243,
    "category": "componentes",
    "image": "IMAGES/prod_243.png",
    "name": "Capacitor Electrolítico 50V a 2.2uF",
    "price": "$7 MXN",
    "description": "Capacitor Electrolítico de alta calidad Capacitor Electrolítico 50V a 2.2uF. Diseñado para aplicaciones de filtrado en fuentes de alimentación, desacoplamiento de señales y almacenamiento de energía. Con un voltaje máximo de 50V y capacitancia de 2.2uF, es ideal para proyectos de electrónica general y reparaciones. Formato radial polarizado, excelente estabilidad y larga vida útil.",
    "specs": {
      "Producto": "Capacitor Electrolítico",
      "Modelo": "50V a 2.2uF",
      "Voltaje": "S/P  Nominal",
      "Tolerancia": "0.2",
      "Color": "Negro",
      "SKU": "CAP-243"
    }
  },
  {
    "id": 244,
    "category": "componentes",
    "image": "IMAGES/prod_244.png",
    "name": "Capacitor Electrolítico 50V a 3.3uF",
    "price": "$7 MXN",
    "description": "Capacitor Electrolítico de alta calidad Capacitor Electrolítico 50V a 3.3uF. Diseñado para aplicaciones de filtrado en fuentes de alimentación, desacoplamiento de señales y almacenamiento de energía. Con un voltaje máximo de 50V y capacitancia de 3.3uF, es ideal para proyectos de electrónica general y reparaciones. Formato radial polarizado, excelente estabilidad y larga vida útil.",
    "specs": {
      "Producto": "Capacitor Electrolítico",
      "Modelo": "50V a 3.3uF",
      "Voltaje": "S/P  Nominal",
      "Tolerancia": "0.2",
      "Color": "Negro",
      "SKU": "CAP-244"
    }
  },
  {
    "id": 245,
    "category": "componentes",
    "image": "IMAGES/prod_245.png",
    "name": "Capacitor Electrolítico 50V a 4.7uF",
    "price": "$7 MXN",
    "description": "Capacitor Electrolítico de alta calidad Capacitor Electrolítico 50V a 4.7uF. Diseñado para aplicaciones de filtrado en fuentes de alimentación, desacoplamiento de señales y almacenamiento de energía. Con un voltaje máximo de 50V y capacitancia de 4.7uF, es ideal para proyectos de electrónica general y reparaciones. Formato radial polarizado, excelente estabilidad y larga vida útil.",
    "specs": {
      "Producto": "Capacitor Electrolítico",
      "Modelo": "50V a 4.7uF",
      "Voltaje": "S/P  Nominal",
      "Tolerancia": "0.2",
      "Color": "Negro",
      "SKU": "CAP-245"
    }
  },
  {
    "id": 246,
    "category": "componentes",
    "image": "IMAGES/prod_246.png",
    "name": "Capacitor Electrolítico 50V a 47uF",
    "price": "$7 MXN",
    "description": "Capacitor Electrolítico de alta calidad Capacitor Electrolítico 50V a 47uF. Diseñado para aplicaciones de filtrado en fuentes de alimentación, desacoplamiento de señales y almacenamiento de energía. Con un voltaje máximo de 50V y capacitancia de 47uF, es ideal para proyectos de electrónica general y reparaciones. Formato radial polarizado, excelente estabilidad y larga vida útil.",
    "specs": {
      "Producto": "Capacitor Electrolítico",
      "Modelo": "50V a 47uF",
      "Voltaje": "S/P  Nominal",
      "Tolerancia": "0.2",
      "Color": "Negro",
      "SKU": "CAP-246"
    }
  },
  {
    "id": 247,
    "category": "componentes",
    "image": "IMAGES/prod_247.png",
    "name": "Capacitor Electrolítico 50V a 470uF",
    "price": "$7 MXN",
    "description": "Capacitor Electrolítico de alta calidad Capacitor Electrolítico 50V a 470uF. Diseñado para aplicaciones de filtrado en fuentes de alimentación, desacoplamiento de señales y almacenamiento de energía. Con un voltaje máximo de 50V y capacitancia de 470uF, es ideal para proyectos de electrónica general y reparaciones. Formato radial polarizado, excelente estabilidad y larga vida útil.",
    "specs": {
      "Producto": "Capacitor Electrolítico",
      "Modelo": "50V a 470uF",
      "Voltaje": "S/P  Nominal",
      "Tolerancia": "0.2",
      "Color": "Negro",
      "SKU": "CAP-247"
    }
  }

,
{
  "id": 248,
  "category": "accesorios",
  "image": "IMAGES/prod_248_Audifonos_.png",
  "name": "Audifonos ",
  "price": "$120 MXN",
  "description": "Lennon. LN-BTX800B. Bluetooth sterio. Negro. Individ. Individ."
},
{
  "id": 249,
  "category": "accesorios",
  "image": "IMAGES/prod_249_Lupa_con_luz_led.png",
  "name": "Lupa con luz led",
  "price": "$120 MXN",
  "description": "Helping Hand Magnifier . TE-8001. Negro. Individ. Individ."
},
{
  "id": 250,
  "category": "accesorios",
  "image": "IMAGES/prod_250_Adaptador_universal_para_laptop_de_65w.png",
  "name": "Adaptador universal para laptop de 65w",
  "price": "$120 MXN",
  "description": "Taika. TK-UN165. Adecuado para la mayoria de las computadoras portatiles . Negro. Individ. Individ."
},
{
  "id": 251,
  "category": "accesorios",
  "image": "IMAGES/prod_251_Repetidor_de_wifi.png",
  "name": "Repetidor de wifi",
  "price": "$120 MXN",
  "description": "IT-BLUE. IT-RW3007. Mejora la covertura de redes WAN . Blanco. Individ. Individ."
},
{
  "id": 252,
  "category": "accesorios",
  "image": "IMAGES/prod_252_Mause_inalambrico.png",
  "name": "Mause inalambrico",
  "price": "$120 MXN",
  "description": "Wireless. A2-C158-1. Bluetooth . Negro. Individ. Individ."
},
{
  "id": 253,
  "category": "accesorios",
  "image": "IMAGES/prod_253_Eliminador.png",
  "name": "Eliminador",
  "price": "$120 MXN",
  "description": "S/N. HZHF-0520. Negro. Individ. Individ."
},
{
  "id": 254,
  "category": "accesorios",
  "image": "IMAGES/prod_254_Adaptador_.png",
  "name": "Adaptador ",
  "price": "$120 MXN",
  "description": "IT-BLUE. IT-282. Negro. Individ. Individ."
},
{
  "id": 255,
  "category": "accesorios",
  "image": "IMAGES/prod_255_wifi_panorama_camara.png",
  "name": "wifi panorama camara",
  "price": "$120 MXN",
  "description": "No tiene. No tiene. Blanco. 110V. Individ. Individ."
},
{
  "id": 256,
  "category": "accesorios",
  "image": "IMAGES/prod_256_Microfono.png",
  "name": "Microfono",
  "price": "$120 MXN",
  "description": "Lennon. LN-M86. Microfono Profecional y Dynamic. Microfono Profecional y Dynamic. Negro. Individ. Individ."
},
{
  "id": 257,
  "category": "accesorios",
  "image": "IMAGES/prod_257_Microfono.png",
  "name": "Microfono",
  "price": "$120 MXN",
  "description": "IT-BLUE. IT-M0014/5M. Microfono Dinamico. Microfono Dinamico. Negro. Individ. Individ."
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
    // Removed specific title text assignment as title is now dynamic in header maybe? 
    // Wait, the new design doesn't have a main title in the body, it uses "MEVEK ELECTRONICS" as branding.
    // The product Name acts as the main identifier in the specs table usually, but we should show it prominently.
    // Let's check the HTML I just wrote. 
    // I missed adding a specific element for the Product Name in the new HTML layout! 
    // The Ficha Tecnica image usually has the "TIPO DE COMPONENTE" or "VALOR" as key identifiers.
    // However, for general use, I should probably put the Name clearly somewhere or ensure it's in the Specs table.
    // Let's inject it into the Specs Table as the first row "PRODUCTO" if not present.
    
    // Actually, looking at the HTML "modalTitle" is gone. 
    // I need to update the HTML to include the Product Name, perhaps in the header or top of body.
    // Or I can put it in the "Descripción" section header?
    // Let's add it to the Specs Table for now as "Producto".

    // Generate Specs Table
    const specsTable = document.getElementById('modalSpecsTable');
    specsTable.innerHTML = '';

    // Default Specs based on existing data
    const specs = product.specs || {
        "Producto": product.name,
        "Categoría": product.category,
        "SKU": `MVK-${product.id.toString().padStart(4, '0')}`,
        "Marca": "Genérico / Varios",
        "Estado": "Nuevo"
    };

    // If specs didn't have Name, ensure it's there
    if (!specs["Producto"]) specs["Producto"] = product.name;

    Object.entries(specs).forEach(([key, value], index) => {
        const row = document.createElement('tr');
        row.className = index % 2 === 0 ? "bg-cyan-50" : "bg-white";
        row.innerHTML = `
            <td class="px-4 py-2 font-bold text-gray-600 uppercase text-xs w-1/3 border-r border-gray-100">${key}:</td>
            <td class="px-4 py-2 text-gray-800 font-medium text-sm">${value}</td>
        `;
        specsTable.appendChild(row);
    });

    document.getElementById('modalPrice').textContent = product.price;
    document.getElementById('modalDescription').textContent = product.description || "Sin descripción disponible.";
    
    // Construct WhatsApp Link
    const message = `Hola, me interesa el producto: ${product.name} (ID: ${product.id}). Precio: ${product.price}. ¿Tienen envío?`;
    // Using the user-provided short link. We append the text parameter hoping it overrides/appends.
    // If not, it will just open the chat with the business, which is the primary goal.
    const whatsappUrl = `https://wa.me/message/5JU7EJBVWDXLB1?text=${encodeURIComponent(message)}`;
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

function normalizeString(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function renderProducts(category = 'all', searchTerm = '') {
    productGrid.innerHTML = '';
    
    const normalizedSearch = normalizeString(searchTerm);

    const filteredProducts = products.filter(p => {
        const matchesCategory = category === 'all' || p.category === category;
        const matchesSearch = normalizeString(p.name).includes(normalizedSearch) || 
                              normalizeString(p.description).includes(normalizedSearch);
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
                <img src="${product.image}" loading="lazy" alt="${product.name}" onerror="this.onerror=null;this.src='IMAGES/prod_101_Resitencia_3.3Ohm.png';" class="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-110 mix-blend-multiply">
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