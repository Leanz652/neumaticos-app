import { Injectable } from '@angular/core';

export interface neumaticos {
  MARCA: string;
  Modelo: string;
  Año: string;
  Referencia: string;
}

@Injectable({
  providedIn: 'root',
})
export class NeumaticosService {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  dataNeumaticos: neumaticos[] = [
    {
      MARCA: 'SMART',
      Modelo: 'FORTWO',
      Año: '2018',
      Referencia: '195/45R16 84V   205/45R16 87V',
    },
    {
      MARCA: 'RENAULT',
      Modelo: 'KANGOO',
      Año: '2013',
      Referencia: '175/70R14 82T',
    },
    {
      MARCA: 'FORD',
      Modelo: 'KA',
      Año: '2005',
      Referencia: '185/60R14 82H',
    },
    {
      MARCA: 'MERCEDES',
      Modelo: 'CLK',
      Año: '2005',
      Referencia: '225/45R17 94W   245/40R17 91W',
    },
    {
      MARCA: 'LAND ROVER',
      Modelo: 'RANGE ROVER SPORT',
      Año: '2018',
      Referencia: '275/40R20 106Y',
    },
    {
      MARCA: 'DAIHATSU',
      Modelo: 'CHARADE',
      Año: '1996',
      Referencia: '155/80R13 79T',
    },
    {
      MARCA: 'ROVER',
      Modelo: '600 SERIES',
      Año: '1997',
      Referencia: '195/55R15 85H',
    },
    {
      MARCA: 'FORD',
      Modelo: 'RANGER',
      Año: '2003',
      Referencia: '245/70R16 113/100S',
    },
    {
      MARCA: 'MITSUBISHI',
      Modelo: 'MONTERO IO',
      Año: '2002',
      Referencia: '215/65R16 98S',
    },
    {
      MARCA: 'TOYOTA',
      Modelo: 'HILUX SW4',
      Año: '2004',
      Referencia: '265/70R16 112S',
    },
    {
      MARCA: 'VOLKSWAGEN',
      Modelo: 'CROSSFOX',
      Año: '2009',
      Referencia: '205/60R15 90T',
    },
    {
      MARCA: 'DODGE',
      Modelo: 'JOURNEY',
      Año: '2015',
      Referencia: '225/65R17 98H',
    },
    {
      MARCA: 'CHEVROLET',
      Modelo: 'AVALANCHE',
      Año: '2008',
      Referencia: '265/70R17 113S',
    },
    {
      MARCA: 'CITROEN',
      Modelo: 'ZX',
      Año: '1998',
      Referencia: '185/60R14 82H',
    },
    {
      MARCA: 'RAM',
      Modelo: 'PICKUP',
      Año: '2013',
      Referencia: '275/60R20 114S',
    },
    {
      MARCA: 'FERRARI',
      Modelo: 'CALIFORNIA',
      Año: '2013',
      Referencia: '245/40R19 94Y   285/40R19 103Y',
    },
    {
      MARCA: 'AUDI',
      Modelo: 'A1',
      Año: '2018',
      Referencia: '215/45R16 90V',
    },
    {
      MARCA: 'ALFA ROMEO',
      Modelo: '159',
      Año: '2011',
      Referencia: '225/50R17 94W',
    },
    {
      MARCA: 'CITROEN',
      Modelo: 'SAXO',
      Año: '1999',
      Referencia: '165/70R13 78T',
    },
    {
      MARCA: 'CHEVROLET',
      Modelo: 'CRUZE',
      Año: '2015',
      Referencia: '215/50R17 91V',
    },
    {
      MARCA: 'HONDA',
      Modelo: 'FIT',
      Año: '2013',
      Referencia: '185/55R16 83V',
    },
    {
      MARCA: 'CHEVROLET',
      Modelo: 'LUV',
      Año: '2000',
      Referencia: '215/75R14 112/110Q',
    },
    {
      MARCA: 'HYUNDAI',
      Modelo: 'VELOSTER',
      Año: '2012',
      Referencia: '215/45R17 91V',
    },
    {
      MARCA: 'CITROEN',
      Modelo: 'AIRCROSS',
      Año: '2011',
      Referencia: '205/60R16 92H',
    },
    {
      MARCA: 'RENAULT',
      Modelo: 'SANDERO STEPWAY II',
      Año: '2015',
      Referencia: '205/55R16 91V',
    },
    {
      MARCA: 'SUBARU',
      Modelo: 'XV',
      Año: '2012',
      Referencia: '205/60R16 91V',
    },
    {
      MARCA: 'MITSUBISHI',
      Modelo: 'MONTERO SPORT',
      Año: '2012',
      Referencia: '255/65R17 110H',
    },
    {
      MARCA: 'FORD',
      Modelo: 'FOCUS II',
      Año: '2009',
      Referencia: '205/55R16 91V',
    },
    {
      MARCA: 'TOYOTA',
      Modelo: 'CAMRY',
      Año: '2001',
      Referencia: '215/60R16 94V',
    },
    {
      MARCA: 'RAM',
      Modelo: 'PICKUP',
      Año: '2015',
      Referencia: '275/60R20 114S',
    },
    {
      MARCA: 'DAIHATSU',
      Modelo: 'CUORE',
      Año: '1999',
      Referencia: '145/70R12 69T',
    },
    {
      MARCA: 'FERRARI',
      Modelo: '575M MARANELLO',
      Año: '2004',
      Referencia: '255/40R18 95Y   295/35R18 99Y',
    },
    {
      MARCA: 'TOYOTA',
      Modelo: 'CORONA',
      Año: '1996',
      Referencia: '195/60R15 88H',
    },
    {
      MARCA: 'FIAT',
      Modelo: 'MOBI',
      Año: '2018',
      Referencia: '175/65R14 82T',
    },
    {
      MARCA: 'CHEVROLET',
      Modelo: 'MERIVA',
      Año: '2012',
      Referencia: '185/60R15 88H',
    },
    {
      MARCA: 'PEUGEOT',
      Modelo: 'BOXER',
      Año: '2006',
      Referencia: '205/70R15 106/104R',
    },
    {
      MARCA: 'RENAULT',
      Modelo: 'FLUENCE II',
      Año: '2017',
      Referencia: '225/50R17 94V',
    },
    {
      MARCA: 'JEEP',
      Modelo: 'RENEGADE',
      Año: '2015',
      Referencia: '255/55R18 98V',
    },
    {
      MARCA: 'CHEVROLET',
      Modelo: 'CAPTIVA II',
      Año: '2019',
      Referencia: '235/60R17 102H',
    },
    {
      MARCA: 'KIA',
      Modelo: 'SHUMA',
      Año: '1999',
      Referencia: '185/65R14 86H',
    },
    {
      MARCA: 'JAGUAR',
      Modelo: 'XK SERIES',
      Año: '2013',
      Referencia: '255/35R20 97Y   285/30R20 99Y',
    },
    {
      MARCA: 'PEUGEOT',
      Modelo: '806',
      Año: '2002',
      Referencia: '205/65R15 94V',
    },
    {
      MARCA: 'PEUGEOT',
      Modelo: '207',
      Año: '2011',
      Referencia: '205/45R17 88V',
    },
    {
      MARCA: 'DAIHATSU',
      Modelo: 'ROCKY',
      Año: '1997',
      Referencia: '215/80R15 102S',
    },
    {
      MARCA: 'BMW',
      Modelo: 'SERIE 8',
      Año: '1998',
      Referencia: '235/50R16 95W',
    },
    {
      MARCA: 'VOLKSWAGEN',
      Modelo: 'UP',
      Año: '2017',
      Referencia: '185/60R15 82T',
    },
    {
      MARCA: 'PORSCHE',
      Modelo: 'MACAN',
      Año: '2017',
      Referencia: '265/45R20 104Y   295/40R20 110Y',
    },
    {
      MARCA: 'KIA',
      Modelo: 'BONGO',
      Año: '2015',
      Referencia: '195/80R14 106/104R   5.00R12 83/81P',
    },
    {
      MARCA: 'JEEP',
      Modelo: 'PATRIOT',
      Año: '2014',
      Referencia: '215/60R17 95H',
    },
    {
      MARCA: 'LAND ROVER',
      Modelo: 'DISCOVERY',
      Año: '2001',
      Referencia: '255/55R18 109H',
    },
    {
      MARCA: 'PEUGEOT',
      Modelo: 'BOXER',
      Año: '2005',
      Referencia: '205/70R15 106/104R',
    },
    {
      MARCA: 'AUDI',
      Modelo: 'A7',
      Año: '2012',
      Referencia: '225/40R19 93Y',
    },
    {
      MARCA: 'MITSUBISHI',
      Modelo: 'GALANT',
      Año: '1997',
      Referencia: '205/60R15 91V',
    },
    {
      MARCA: 'JAGUAR',
      Modelo: 'XF',
      Año: '2016',
      Referencia: '255/35R20 97Y   285/30R20 99Y',
    },
    {
      MARCA: 'MAZDA',
      Modelo: 'MPV',
      Año: '1997',
      Referencia: '215/65R15 96V',
    },
    {
      MARCA: 'FORD',
      Modelo: 'ECOSPORT',
      Año: '2004',
      Referencia: '205/65R15 94T',
    },
    {
      MARCA: 'PEUGEOT',
      Modelo: 'PARTNER CARGO',
      Año: '2014',
      Referencia: '165/70R14 89R',
    },
    {
      MARCA: 'AUDI',
      Modelo: 'TTRS',
      Año: '2017',
      Referencia: '245/35R19 93Y',
    },
    {
      MARCA: 'VOLVO',
      Modelo: 'S80',
      Año: '2009',
      Referencia: '245/45R17 95Y',
    },
    {
      MARCA: 'NISSAN',
      Modelo: 'NP300',
      Año: '2012',
      Referencia: '195/80R15 C 106R',
    },
    {
      MARCA: 'ALFA ROMEO',
      Modelo: 'SPIDER',
      Año: '2014',
      Referencia: '225/50R17 94W',
    },
    {
      MARCA: 'PORSCHE',
      Modelo: '718 BOXSTER',
      Año: '2017',
      Referencia: '235/45R18 94Y   265/45R18 101Y',
    },
    {
      MARCA: 'FERRARI',
      Modelo: 'F430',
      Año: '2008',
      Referencia: '225/35R19 88Y   285/35R19 99Y',
    },
    {
      MARCA: 'KIA',
      Modelo: 'PREGIO',
      Año: '2004',
      Referencia: '195/80R14 106/104R',
    },
    {
      MARCA: 'FIAT',
      Modelo: 'STILO',
      Año: '2011',
      Referencia: '215/50R17 91V',
    },
    {
      MARCA: 'VOLVO',
      Modelo: 'XC90 II',
      Año: '2018',
      Referencia: '275/45R20 110V',
    },
    {
      MARCA: 'HYUNDAI',
      Modelo: 'GALLOPER',
      Año: '1999',
      Referencia: '265/70R15 112T',
    },
    {
      MARCA: 'LAND ROVER',
      Modelo: 'DEFENDER',
      Año: '2004',
      Referencia: '235/85R16 120/116Q',
    },
    {
      MARCA: 'DAIHATSU',
      Modelo: 'SIRION',
      Año: '1999',
      Referencia: '145/80R13 75T',
    },
    {
      MARCA: 'VOLKSWAGEN',
      Modelo: 'GOLF VII',
      Año: '2017',
      Referencia: '225/45R17 91W',
    },
    {
      MARCA: 'PEUGEOT',
      Modelo: '307',
      Año: '2008',
      Referencia: '205/55R16 91V',
    },
    {
      MARCA: 'VOLKSWAGEN',
      Modelo: 'UP',
      Año: '2019',
      Referencia: '185/60R15 82T',
    },
    {
      MARCA: 'LAND ROVER',
      Modelo: 'DISCOVERY 4',
      Año: '2014',
      Referencia: '255/55R19 111V',
    },
    {
      MARCA: 'TOYOTA',
      Modelo: 'CAMRY',
      Año: '2007',
      Referencia: '215/60R16 94V',
    },
    {
      MARCA: 'HYUNDAI',
      Modelo: 'SONATA',
      Año: '2010',
      Referencia: '215/60R16 95V',
    },
    {
      MARCA: 'MITSUBISHI',
      Modelo: 'SPACE WAGON',
      Año: '2002',
      Referencia: '205/65R15 94V',
    },
    {
      MARCA: 'SUBARU',
      Modelo: 'LEGACY',
      Año: '2018',
      Referencia: '215/45R17 87W',
    },
    {
      MARCA: 'DODGE',
      Modelo: 'RAM PICKUP',
      Año: '2010',
      Referencia: '265/70R17 113S',
    },
    {
      MARCA: 'NISSAN',
      Modelo: 'PATROL',
      Año: '2000',
      Referencia: '265/70R16 110/107S',
    },
    {
      MARCA: 'VOLKSWAGEN',
      Modelo: 'POLO',
      Año: '2007',
      Referencia: '185/60R14 82H',
    },
    {
      MARCA: 'BMW',
      Modelo: 'X1',
      Año: '2009',
      Referencia: '225/50R17 94H',
    },
    {
      MARCA: 'ROVER',
      Modelo: 'MINI',
      Año: '1997',
      Referencia: '145/70R12 69S',
    },
    {
      MARCA: 'KIA',
      Modelo: 'MOHAVE',
      Año: '2009',
      Referencia: '265/65R18 113T',
    },
    {
      MARCA: 'FORD',
      Modelo: 'ECOSPORT II',
      Año: '2014',
      Referencia: '205/65R15 94T',
    },
    {
      MARCA: 'LAND ROVER',
      Modelo: 'RANGE ROVER',
      Año: '2010',
      Referencia: '275/40R20 106Y',
    },
    {
      MARCA: 'NISSAN',
      Modelo: 'ALTIMA',
      Año: '2016',
      Referencia: '215/55R17 94V',
    },
    {
      MARCA: 'VOLVO',
      Modelo: 'C30',
      Año: '2009',
      Referencia: '225/50R17 94Y',
    },
    {
      MARCA: 'LAND ROVER',
      Modelo: 'RANGE ROVER EVOQUE',
      Año: '2015',
      Referencia: '245/45R20 99V',
    },
    {
      MARCA: 'SUZUKI',
      Modelo: 'SWIFT',
      Año: '2007',
      Referencia: '185/60R15 88H',
    },
    {
      MARCA: 'KIA',
      Modelo: 'PRIDE',
      Año: '1996',
      Referencia: '145/70R12 69T',
    },
    {
      MARCA: 'CITROEN',
      Modelo: 'C4 LOUNGE',
      Año: '2013',
      Referencia: '225/45R17 91V',
    },
    {
      MARCA: 'SAAB',
      Modelo: '9000',
      Año: '1997',
      Referencia: '195/60R15 88V',
    },
    {
      MARCA: 'ALFA ROMEO',
      Modelo: 'GIULIETTA',
      Año: '2010',
      Referencia: '225/45R17 91W',
    },
    {
      MARCA: 'PORSCHE',
      Modelo: 'CAYMAN',
      Año: '2008',
      Referencia: '235/40R18 91Y   265/40R18 101Y',
    },
    {
      MARCA: 'CHRYSLER',
      Modelo: '300M',
      Año: '2000',
      Referencia: '225/60R16 98V',
    },
    {
      MARCA: 'TOYOTA',
      Modelo: 'RAV4',
      Año: '2014',
      Referencia: '225/65R17 101H',
    },
    {
      MARCA: 'LAND ROVER',
      Modelo: 'FREELANDER II',
      Año: '2012',
      Referencia: '235/65R17 104H',
    },
    {
      MARCA: 'NISSAN',
      Modelo: '370Z',
      Año: '2015',
      Referencia: '225/50R18 94W   245/45R18 96W',
    },
    {
      MARCA: 'HYUNDAI',
      Modelo: 'H100',
      Año: '2001',
      Referencia: '195/80R14 106/104R',
    },
    {
      MARCA: 'FIAT',
      Modelo: 'ARGO',
      Año: '2019',
      Referencia: '205/50R17 91V',
    },
  ];

  dataMarcas: string[] = [
    'SUZUKI',
    'PEUGEOT',
    'MERCEDES',
    'FORD',
    'FIAT',
    'BMW',
    'MAZDA',
    'HYUNDAI',
    'CHRYSLER',
    'CITROEN',
    'KIA',
    'RENAULT',
    'VOLVO',
    'CHEVROLET',
    'FERRARI',
    'VOLKSWAGEN',
    'DAIHATSU',
    'JEEP',
    'MITSUBISHI',
    'SUBARU',
    'TOYOTA',
    'LAND ROVER',
    'JAGUAR',
    'ALFA ROMEO',
    'NISSAN',
    'LEXUS',
    'HONDA',
    'PORSCHE',
    'JAC',
    'LIFAN',
  ];

  getMarcas(): string[] {
    return this.dataMarcas;
  }

  getDataNeumaticos(marca: string) {
    return this.dataNeumaticos.filter((value) => value.MARCA == marca);
  }

  getDataNeumaticosPorMarcaYAnio(marca: string, anio: string) {
    return this.dataNeumaticos
      .filter((value) => value.MARCA == marca && anio == anio)
      .map((valor) => valor.Modelo);
  }
}
