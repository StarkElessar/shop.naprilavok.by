const currencyRate = 2.52
// 1 Sheet Polycarbonate
const SHEET_1_3MM = Math.round(27 * currencyRate)
const SHEET_1_6MM = Math.round(31 * currencyRate)
// Polycarbonate 6mm:
const POLIC_6MM_4M    = SHEET_1_6MM * 3,
      POLIC_6MM_6M    = SHEET_1_6MM * 4,
      POLIC_6MM_8M    = SHEET_1_6MM * 5,
      POLIC_6MM_10M   = SHEET_1_6MM * 6
// Polycarbonate 6mm DK:
const POLIC_DK_6MM_4M   = SHEET_1_6MM * 4,
      POLIC_DK_6MM_6M   = SHEET_1_6MM * 5,
      POLIC_DK_6MM_8M   = SHEET_1_6MM * 6,
      POLIC_DK_6MM_10M  = SHEET_1_6MM * 7
// Polycarbonate 4mm:
const POLIC_4MM_4M  = 69,
      POLIC_4MM_6M  = 89,
      POLIC_4MM_8M  = 111,
      POLIC_4MM_10M = 131
// Polycarbonate 4mm DK:
const POLIC_DK_4MM_4M   = 89,
      POLIC_DK_4MM_6M   = 111,
      POLIC_DK_4MM_8M   = 131,
      POLIC_DK_4MM_10M  = 152
// Shipping:
const SHIPPING_MIN  = 64,
      SHIPPING_MID  = 77,
      SHIPPING_MAX  = 90
// 20-mini:
const $20MINI_4M_100SM   = 533,
      $20MINI_4M_67SM    = 570,
      $20MINI_6M_100SM   = 681,
      $20MINI_6M_67SM    = 740,
      $20MINI_8M_100SM   = 818,
      $20MINI_8M_67SM    = 904,
      $20MINI_10M_100SM  = 969,
      $20MINI_10M_67SM   = 1068
// 24-mini:
const $24MINI_4M_100SM   = 529,
      $24MINI_4M_67SM    = 565,
      $24MINI_6M_100SM   = 685,
      $24MINI_6M_67SM    = 732,
      $24MINI_8M_100SM   = 830,
      $24MINI_8M_67SM    = 899,
      $24MINI_10M_100SM  = 982,
      $24MINI_10M_67SM   = 1069
// 20-c:
const $20C_4M_100SM   = 546,
      $20C_4M_67SM    = 577,
      $20C_4M_50SM    = 627,
      $20C_6M_100SM   = 737,
      $20C_6M_67SM    = 820,
      $20C_6M_50SM    = 886,
      $20C_8M_100SM   = 941,
      $20C_8M_67SM    = 1018,
      $20C_8M_50SM    = 1117,
      $20C_10M_100SM  = 1130,
      $20C_10M_67SM   = 1218,
      $20C_10M_50SM   = 1345
// 40-c:
const $40C_4M_100SM   = 633,
      $40C_4M_67SM    = 691,
      $40C_4M_50SM    = 744,
      $40C_6M_100SM   = 877,
      $40C_6M_67SM    = 965,
      $40C_6M_50SM    = 1011,
      $40C_8M_100SM   = 1094,
      $40C_8M_67SM    = 1193,
      $40C_8M_50SM    = 1289,
      $40C_10M_100SM  = 1301,
      $40C_10M_67SM   = 1420,
      $40C_10M_50SM   = 1536
// 40-ck:
const $40CK_4M_67SM  = 847,
      $40CK_6M_67SM  = 1142,
      $40CK_8M_67SM  = 1415,
      $40CK_10M_67SM = 1673
// 20-fc:
const $20FC_4M_100SM   = 889,
      $20FC_4M_67SM    = 957,
      $20FC_6M_100SM   = 1181,
      $20FC_6M_67SM    = 1289,
      $20FC_8M_100SM   = 1459,
      $20FC_8M_67SM    = 1624,
      $20FC_10M_100SM  = 1733,
      $20FC_10M_67SM   = 1937
// 3500-40-c:
const $3500_40C_4M_100SM  = 744,
      $3500_40C_4M_67SM   = 795,
      $3500_40C_4M_50SM   = 845,
      $3500_40C_6M_100SM  = 991,
      $3500_40C_6M_67SM   = 1075,
      $3500_40C_6M_50SM   = 1158,
      $3500_40C_8M_100SM  = 1223,
      $3500_40C_8M_67SM   = 1349,
      $3500_40C_8M_50SM   = 1463,
      $3500_40C_10M_100SM = 1444,
      $3500_40C_10M_67SM  = 1603,
      $3500_40C_10M_50SM  = 1742
// 4000-40-c:
const $4000_40C_4M_100SM  = 797,
      $4000_40C_4M_67SM   = 839,
      $4000_40C_4M_50SM   = 879,
      $4000_40C_6M_100SM  = 1030,
      $4000_40C_6M_67SM   = 1112,
      $4000_40C_6M_50SM   = 1194,
      $4000_40C_8M_100SM  = 1276,
      $4000_40C_8M_67SM   = 1398,
      $4000_40C_8M_50SM   = 1508,
      $4000_40C_10M_100SM = 1511,
      $4000_40C_10M_67SM  = 1628,
      $4000_40C_10M_50SM  = 1799
// 20-d:
const $20D_4M_100SM   = 968,
      $20D_4M_67SM    = 1081,
      $20D_6M_100SM   = 1306,
      $20D_6M_67SM    = 1486,
      $20D_8M_100SM   = 1648,
      $20D_8M_67SM    = 1865,
      $20D_10M_100SM  = 1965,
      $20D_10M_67SM   = 2219
// 20-df:
const $20DF_4M_67SM   = 1081,
      $20DF_6M_67SM   = 1486,
      $20DF_8M_67SM   = 1865,
      $20DF_10M_67SM  = 2219
// 40-dk:
const $40DK_4M_100SM   = 1347,
      $40DK_6M_100SM   = 1702,
      $40DK_8M_100SM   = 2151,
      $40DK_10M_100SM  = 2533
// 40-a:
const $40A_4M_100SM   = 822
const $40A_6M_100SM   = 1082
const $40A_8M_100SM   = 1351
const $40A_10M_100SM  = 1592
const $40A_4M_67SM    = 900
const $40A_6M_67SM    = 1198
const $40A_8M_67SM    = 1536
const $40A_10M_67SM   = 1772
// 40-ak:
const $40AK_4M_100SM  = 985
const $40AK_6M_100SM  = 1287
const $40AK_8M_100SM  = 1562
const $40AK_10M_100SM = 1839
const $40AK_4M_67SM   = 1043
const $40AK_6M_67SM   = 1366
const $40AK_8M_67SM   = 1648
const $40AK_10M_67SM  = 1950


const DATA = {
  about: [
    {
      imgUrl: '/15-02.svg',
      title: '???????????? ??????????????????',
      description: '?? ???????????????????????? ???????????? ???????????????????????? ?????????? ???????????? ??????????????????.'
    },
    {
      imgUrl: '/12-02.svg',
      title: '???????????????????? ????????????????',
      description: '???????? ???????????????????? ????????????. ???????????? ?????????????????????????? ?????????????????? ?????????? ???????????? ?? ?????????????????????? ?? ??????????????????????.'
    },
    {
      imgUrl: '/16-02.svg',
      title: '???????????? ????????????',
      description: '???????????????????????????????? ???????????????? ?????????????? ?????????????? ?? ?????????????????? ???????? ?? ???????? ???????? ??????????????????????????.'
    },
    {
      imgUrl: '/13-02.svg',
      title: '??????????????????',
      description: '?? ?????? ?????????? ???????????????????? ?????????????? ?? ????????????/?????????????????? ???? 3 ???? 48 ??????????????.'
    },
    {
      imgUrl: '/18-02.svg',
      title: '?????????????????? ????????',
      description: '???? ???????????????? ???????????? ???????????????????? ?????????????? ?? ?? ?????? ?????????????????????? ????????????????????????. ?????????????? ?? ?????? ???????????????? ???????????????? ???????? ???? ?????? ?????????????? ???? ???????????????????? ????.'
    },
    {
      imgUrl: '/14-02.svg',
      title: '????????????????????????',
      description: '???????? ?????????????????????? ?? ???????????????? ??????????. ?????????????????????? ????????????????????????.'
    },
  ],
  makepurchase: [
    {
      id: 1,
      subtitle: '????????????',
      title: '???????????????? ??????????????',
      description: '???????????????? ???? <a title="?????????????? ?? ????????????????" href="#catalog">????????????????</a> ??????????????, ?????????????? ?????? ????????????????????????'
    },
    {
      id: 2,
      subtitle: '????????????',
      title: ' ???????????????? ????????????',
      description: '???????????????? ???????????????? ???????????? ?????? ?????????????????? ???? ????????????<br><a title="???????????????? ???????????????????????? ???? ????????????????" href="tel:+375297428310">+375 (29) 742-83-10</a>'
    },
    {
      id: 3,
      subtitle: '????????????',
      title: '?????????????????? ??????????',
      description: '???????????????????? ???????????? ???? ????????????????: ??????????/??????????/?????????????? ???????????? ????????????'
    },
    {
      id: 4,
      className: 'btn-pulse',
      subtitle: '??????????????????',
      title: '????????????????/??????????????????',
      description: '???????????????????? ???????? ?????????????? ?? ?????????????? 2-3 ????????. ???? ?????????????? ?????????? ?????????????? ???????? ??????????????'
    },
  ],
  catalogTeplic: [
    {
      id: '20m',
      title: '?????????????????? "????????-20??"',
      productName: '20-mini',
      tube: '20x20',
      width: '2.00',
      height: '1.92',
      images: [
        'teplica-1.webp',
        'teplica-1.2.webp',
        'teplica-1.3.webp',
        'teplica-1.4.webp',
        'teplica-1.5.webp',
      ],
      numberIndicators: ['0', '1', '2', '3', '4',],
      arcStep: {
        '1': '100sm',
        '0.67': '67sm',
      },
      polycarbonate: ['3', '4', '6',],
    },
    {
      id: '24m',
      title: '?????????????????? "????????-24??"',
      productName: '24-mini',
      tube: '20x20',
      width: '2.40',
      height: '1.75',
      images: [
        'teplica-1.webp',
        'teplica-1.2.webp',
        'teplica-1.3.webp',
        'teplica-1.4.webp',
        'teplica-1.5.webp',
      ],
      numberIndicators: ['0', '1', '2', '3', '4',],
      arcStep: {
        '1': '100sm',
        '0.67': '67sm',
      },
      polycarbonate: ['3', '4', '6'],
    },
    {
      id: '20c',
      title: '"??????????????????????-20??"',
      productName: '20-c',
      tube: '20x20',
      width: '3.00',
      height: '2.00',
      images: [
        'teplica-2.3.webp',
        'teplica-2.4.webp',
        'teplica-2.5.webp',
      ],
      numberIndicators: ['0', '1', '2',],
      arcStep: {
        '1': '100sm',
        '0.67': '67sm',
        '0.5': '50sm',
      },
      polycarbonate: ['3', '4', '6'],
    },
    {
      id: '40c',
      title: '"??????????-40??"',
      productName: '40-c',
      tube: '40x20',
      width: '3.00',
      height: '2.00',
      images: [
        'teplica-3.2.webp',
        'teplica-3.3.webp',
        'teplica-3.4.webp',
        'teplica-3.5.webp',
      ],
      numberIndicators: ['0', '1', '2', '3',],
      arcStep: {
        '1': '100sm',
        '0.67': '67sm',
        '0.5': '50sm',
      },
      polycarbonate: ['3', '4', '6'],
    },
    {
      id: '40ck',
      title: '"????????-40????"',
      productName: '40-ck',
      tube: '40x20',
      width: '3.00',
      height: '2.00',
      images: [
        'teplica-40ck-04.webp',
        'teplica-40ck-02.webp',
        'teplica-40ck-01.webp',
        'teplica-40ck-05.webp',
      ],
      numberIndicators: ['0', '1', '2', '3',],
      arcStep: {
        '0.67': '67sm',
      },
      polycarbonate: ['3', '4', '6'],
    },
    {
      id: '20fc',
      title: '?????????????????? "??????????-20????"',
      productName: '20-fc',
      tube: '20x20',
      width: '3.00',
      height: '2.00',
      images: [
        'teplica-4.2.webp',
        'teplica-4.3.webp',
        'teplica-4.5.webp',
      ],
      numberIndicators: ['0', '1', '2',],
      arcStep: {
        '1': '100sm',
        '0.67': '67sm',
      },
      polycarbonate: ['3', '4', '6'],
    },
    {
      id: '3500-40c',
      title: '?????????? 3.5 ????????????',
      productName: '3500-40c',
      tube: '40x20',
      width: '3.50',
      height: '2.00',
      images: [
        'teplica-5.webp',
        'teplica-5.2.webp',
        'teplica-5.4.webp',
        'teplica-5.5.webp',
      ],
      numberIndicators: ['0', '1', '2', '3',],
      arcStep: {
        '1': '100sm',
        '0.67': '67sm',
        '0.5': '50sm',
      },
      polycarbonate: ['3', '4'],
    },
    {
      id: '4000-40c',
      title: '?????????? 4 ????????????',
      productName: '4000-40c',
      tube: '40x20',
      width: '4.00',
      height: '2.00',
      images: [
        'teplica-40c-4000-01.webp',
        'teplica-40c-4000-02.webp',
        'teplica-40c-4000-03.webp',
        'teplica-5.webp',
        'teplica-5.3.webp',
        'teplica-5.4.webp',
      ],
      numberIndicators: ['0', '1', '2', '3', '4', '5'],
      arcStep: {
        '1': '100sm',
        '0.67': '67sm',
        '0.5': '50sm',
      },
      polycarbonate: ['3', '4'],
    },
    {
      id: '20d',
      title: '"??????????-20??"',
      productName: '20d',
      tube: '20x20',
      width: '2.85',
      height: '2.40',
      images: [
        'teplica-20d-1.webp',
        'teplica-20d-2.webp',
        'teplica-20d-3.webp',
        'teplica-20d-4.webp',
        'teplica-20d-5.webp',
        'teplica-20d-6.webp',
      ],
      numberIndicators: ['0', '1', '2', '3', '4', '5'],
      arcStep: {
        '1': '100sm',
        '0.67': '67sm',
      },
      polycarbonate: ['3', '4', '6'],
    },
    {
      id: '20df',
      title: '"??????????-20????"',
      productName: '20df',
      tube: '20x20',
      width: '2.85',
      height: '2.40',
      images: [
        'teplica-20df-1.webp',
        'teplica-20df-2.webp',
        'teplica-20df-3.webp',
        'teplica-20df-4.webp',
        'teplica-20df-5.webp',
        'teplica-20df-6.webp',
      ],
      numberIndicators: ['0', '1', '2', '3', '4', '5'],
      arcStep: {
        '0.67': '67sm',
      },
      polycarbonate: ['3', '4', '6'],
    },
    {
      id: '40dk',
      title: '"??????????-40????"',
      productName: '40dk',
      tube: '40x20',
      width: '2.85',
      height: '2.40',
      images: [
        'teplica-40dk-01.webp',
        'teplica-40dk-02.webp',
        'teplica-40dk-03.webp',
        'teplica-40dk-04.webp',
        'teplica-40dk-05.webp',
      ],
      numberIndicators: ['0', '1', '2', '3', '4'],
      arcStep: {
        '1': '100sm',
      },
      polycarbonate: ['3', '4', '6'],
    },
    {
      id: '40a',
      title: '"??????????-40??"',
      productName: '40-a',
      tube: '40x20',
      width: '3.00',
      height: '2.30',
      images: [
        'teplica-40a-02.webp',
        'teplica-40a-01.webp',
        'teplica-40a-03.webp',
        'teplica-40a-04.webp',
        'teplica-40a-05.webp',
      ],
      numberIndicators: ['0', '1', '2', '3', '4'],
      arcStep: {
        '1': '100sm',
        '0.67': '67sm',
      },
      polycarbonate: ['3', '4', '6'],
    },
    {
      id: '40ak',
      title: '"?????????? ????????-40????"',
      productName: '40-ak',
      tube: '40x20',
      width: '3.00',
      height: '2.30',
      images: [
        'teplica-40ak-01.webp',
        'teplica-40ak-02.webp',
        'teplica-40ak-03.webp',
        'teplica-40ak-04.webp',
        'teplica-40ak-05.webp',
      ],
      numberIndicators: ['0', '1', '2', '3', '4'],
      arcStep: {
        '1': '100sm',
        '0.67': '67sm',
      },
      polycarbonate: ['3', '4', '6'],
    },
  ],
  addEquipment: [
    {
      name: '????????????<br>"??????????????" 4??',
      imgUrl: '/pickle.webp',
      altName: '???????????? ??????????????',
      price: 43,
    },
    {
      name: '????????????<br>"??????????????" 6??',
      imgUrl: '/pickle.webp',
      altName: '???????????? ??????????????',
      price: 51,
    },
    {
      name: '??-??????????????',
      imgUrl: '/p-profile.webp',
      altName: '??-??????????????',
      price: 6,
    },
    {
      name: '???????????????? 6??',
      imgUrl: '/garters.webp',
      altName: '????????????????',
      price: 21,
    },
    {
      name: '????????-??????????',
      imgUrl: '/auto-watering.webp',
      altName: '???????????????????????????? ??????????',
      price: 61,
    },
    {
      name: '??????????-?????????? 1??',
      imgUrl: '/punched-tape.webp',
      altName: '???????????????????????????? ??????????',
      price: 2,
    },
    {
      name: '??????????????',
      imgUrl: '/gaz-lift.webp',
      altName: '??????????????',
      price: 43,
    },
    {
      name: '???????????????????????? 4????',
      imgUrl: '/polic.webp',
      altName: '????????????????????????',
      price: 121,
    },
  ],
  accordion: [
    {
      title: '?????????? ?????? ?????????? ???????????? ???????????????????????',
      description: '?????????????????????? ?????????? ?????????????????? 1 ????????, ?? ?????????????????????? ?????????????? ?? ?????????? ???????????????? ???????????? ???? ????????????????. ?????? ?????????? ???????????????????? ???????????????? ?????????????????????? ?????????? ?????????????? ?? ?????????? 0, 67 ??????????, ?????????? ?????????????? ???????????????? ???????? ?????????? ?????????????? ???????????????? ?????????????? ?? ?????????? ????????????. ????, ?? ?? ?????????? 0, 5 ?????????? ?????????????? ?????????? ?????????????????? ?????????????????? ?????????????????????? ????????????????.'
    },
    {
      title: '???? ?????????? ?????????? ?? ???????? ?????????????? ???????????????',
      description: '?????????????????????? ???????????? ????????????????????????, ?????? ?????????? ?????? ?????????? ?????????????? ?????????? ???????????? ?????????????? 2 ??? 4 ????????. ?????????????????????? ???????????????? ?????????????? ?????????????? ????????????. ?????? ???????????? ?????????? ???????????????????? ?? ???????? ????????, ?????? ?????????????? ?????????? ??????????????????.'
    },
    {
      title: '?????? ???????????????????? ?????? ???????????? ???????????????',
      description: '???????????? ?????????? ???????????? ???????????????????????????? ?????????????????????? ????????????. ???? ?????????????????????? ?????? ???????????????????? ??????????: ???????????????????? ?????? ?????????????????? ????????????????, ???????????????????????? ?????? ?? ?????????????? ???????? ???? 10.'
    },
    {
      title: '???? ?????????? ?????????? ???? ?????????????????? ?????? ???????????????',
      description: '?? ?????????? ???????????? ???????????????? ???????????????????????????? ???? 2-???? ???????? ?? ?????????????? ????????????, ???? ???????? ???????????????????????? ????????????????. ???? ???? ???????????? ???????????? ?????????????????????????? ?????????? ???????????? ???????? ?? ?????????? ?????????? ???????? ??????????.'
    },
  ],
  priceList: {
    '20-mini': {
      'demountable': {
        '4m': {
          '100sm': {
            '3mm': $20MINI_4M_100SM,
            '4mm': $20MINI_4M_100SM + POLIC_4MM_4M,
            '6mm': $20MINI_4M_100SM + POLIC_6MM_4M,
            '0mm': $20MINI_4M_100SM - (SHEET_1_3MM * 3),
          },
          '67sm': {
            '3mm': $20MINI_4M_67SM,
            '4mm': $20MINI_4M_67SM + POLIC_4MM_4M,
            '6mm': $20MINI_4M_67SM + POLIC_6MM_4M,
            '0mm': $20MINI_4M_67SM - (SHEET_1_3MM * 3),
          },
        },
        '6m': {
          '100sm': {
            '3mm': $20MINI_6M_100SM,
            '4mm': $20MINI_6M_100SM + POLIC_4MM_6M,
            '6mm': $20MINI_6M_100SM + POLIC_6MM_6M,
            '0mm': $20MINI_6M_100SM - (SHEET_1_3MM * 4),
          },
          '67sm': {
            '3mm': $20MINI_6M_67SM,
            '4mm': $20MINI_6M_67SM + POLIC_4MM_6M,
            '6mm': $20MINI_6M_67SM + POLIC_6MM_6M,
            '0mm': $20MINI_6M_67SM - (SHEET_1_3MM * 4),
          }
        },
        '8m': {
          '100sm': {
            '3mm': $20MINI_8M_100SM,
            '4mm': $20MINI_8M_100SM + POLIC_4MM_8M,
            '6mm': $20MINI_8M_100SM + POLIC_6MM_8M,
            '0mm': $20MINI_8M_100SM - (SHEET_1_3MM * 5),
          },
          '67sm': {
            '3mm': $20MINI_8M_67SM,
            '4mm': $20MINI_8M_67SM + POLIC_4MM_8M,
            '6mm': $20MINI_8M_67SM + POLIC_6MM_8M,
            '0mm': $20MINI_8M_67SM - (SHEET_1_3MM * 5),
          },
        },
        '10m': {
          '100sm': {
            '3mm': $20MINI_10M_100SM,
            '4mm': $20MINI_10M_100SM + POLIC_4MM_10M,
            '6mm': $20MINI_10M_100SM + POLIC_6MM_10M,
            '0mm': $20MINI_10M_100SM - (SHEET_1_3MM * 6),
          },
          '67sm': {
            '3mm': $20MINI_10M_67SM,
            '4mm': $20MINI_10M_67SM + POLIC_4MM_10M,
            '6mm': $20MINI_10M_67SM + POLIC_6MM_10M,
            '0mm': $20MINI_10M_67SM - (SHEET_1_3MM * 6),
          },
        },
      },
      'one-piece': {
        '4m': {
          '100sm': {
            '3mm': $20MINI_4M_100SM + SHIPPING_MIN,
            '4mm': $20MINI_4M_100SM + SHIPPING_MIN + POLIC_4MM_4M,
            '6mm': $20MINI_4M_100SM + SHIPPING_MIN + POLIC_6MM_4M,
            '0mm': $20MINI_4M_100SM + SHIPPING_MIN - (SHEET_1_3MM * 3),
          },
          '67sm': {
            '3mm': $20MINI_4M_67SM + SHIPPING_MIN,
            '4mm': $20MINI_4M_67SM + SHIPPING_MIN + POLIC_4MM_4M,
            '6mm': $20MINI_4M_67SM + SHIPPING_MIN + POLIC_6MM_4M,
            '0mm': $20MINI_4M_67SM + SHIPPING_MIN - (SHEET_1_3MM * 3),
          },
        },
        '6m': {
          '100sm': {
            '3mm': $20MINI_6M_100SM + SHIPPING_MIN,
            '4mm': $20MINI_6M_100SM + SHIPPING_MIN + POLIC_4MM_6M,
            '6mm': $20MINI_6M_100SM + SHIPPING_MIN + POLIC_6MM_6M,
            '0mm': $20MINI_6M_100SM + SHIPPING_MIN - (SHEET_1_3MM * 4),
          },
          '67sm': {
            '3mm': $20MINI_6M_67SM + SHIPPING_MIN,
            '4mm': $20MINI_6M_67SM + SHIPPING_MIN + POLIC_4MM_6M,
            '6mm': $20MINI_6M_67SM + SHIPPING_MIN + POLIC_6MM_6M,
            '0mm': $20MINI_6M_67SM + SHIPPING_MIN - (SHEET_1_3MM * 4),
          },
        },
        '8m': {
          '100sm': {
            '3mm': $20MINI_8M_100SM + SHIPPING_MIN,
            '4mm': $20MINI_8M_100SM + SHIPPING_MIN + POLIC_4MM_8M,
            '6mm': $20MINI_8M_100SM + SHIPPING_MIN + POLIC_6MM_8M,
            '0mm': $20MINI_8M_100SM + SHIPPING_MIN - (SHEET_1_3MM * 5),
          },
          '67sm': {
            '3mm': $20MINI_8M_67SM + SHIPPING_MIN,
            '4mm': $20MINI_8M_67SM + SHIPPING_MIN + POLIC_4MM_8M,
            '6mm': $20MINI_8M_67SM + SHIPPING_MIN + POLIC_6MM_8M,
            '0mm': $20MINI_8M_67SM + SHIPPING_MIN - (SHEET_1_3MM * 5),
          },
        },
        '10m': {
          '100sm': {
            '3mm': $20MINI_10M_100SM + SHIPPING_MIN,
            '4mm': $20MINI_10M_100SM + SHIPPING_MIN + POLIC_4MM_10M,
            '6mm': $20MINI_10M_100SM + SHIPPING_MIN + POLIC_6MM_10M,
            '0mm': $20MINI_10M_100SM + SHIPPING_MIN - (SHEET_1_3MM * 6),
          },
          '67sm': {
            '3mm': $20MINI_10M_67SM + SHIPPING_MIN,
            '4mm': $20MINI_10M_67SM + SHIPPING_MIN + POLIC_4MM_10M,
            '6mm': $20MINI_10M_67SM + SHIPPING_MIN + POLIC_6MM_10M,
            '0mm': $20MINI_10M_67SM + SHIPPING_MIN - (SHEET_1_3MM * 6),
          },
        },
      }
    },
    '24-mini': {
      'demountable': {
        '4m': {
          '100sm': {
            '3mm': $24MINI_4M_100SM,
            '4mm': $24MINI_4M_100SM + POLIC_4MM_4M,
            '6mm': $24MINI_4M_100SM + POLIC_6MM_4M,
            '0mm': $24MINI_4M_100SM - (SHEET_1_3MM * 3),
          },
          '67sm': {
            '3mm': $24MINI_4M_67SM,
            '4mm': $24MINI_4M_67SM + POLIC_4MM_4M,
            '6mm': $24MINI_4M_67SM + POLIC_6MM_4M,
            '0mm': $24MINI_4M_67SM - (SHEET_1_3MM * 3),
          },
        },
        '6m': {
          '100sm': {
            '3mm': $24MINI_6M_100SM,
            '4mm': $24MINI_6M_100SM + POLIC_4MM_6M,
            '6mm': $24MINI_6M_100SM + POLIC_6MM_6M,
            '0mm': $24MINI_6M_100SM - (SHEET_1_3MM * 4),
          },
          '67sm': {
            '3mm': $24MINI_6M_67SM,
            '4mm': $24MINI_6M_67SM + POLIC_4MM_6M,
            '6mm': $24MINI_6M_67SM + POLIC_6MM_6M,
            '0mm': $24MINI_6M_67SM - (SHEET_1_3MM * 4),
          }
        },
        '8m': {
          '100sm': {
            '3mm': $24MINI_8M_100SM,
            '4mm': $24MINI_8M_100SM + POLIC_4MM_8M,
            '6mm': $24MINI_8M_100SM + POLIC_6MM_8M,
            '0mm': $24MINI_8M_100SM - (SHEET_1_3MM * 5),
          },
          '67sm': {
            '3mm': $24MINI_8M_67SM ,
            '4mm': $24MINI_8M_67SM  + POLIC_4MM_8M,
            '6mm': $24MINI_8M_67SM  + POLIC_6MM_8M,
            '0mm': $24MINI_8M_67SM - (SHEET_1_3MM * 5),
          }
        },
        '10m': {
          '100sm': {
            '3mm': $24MINI_10M_100SM,
            '4mm': $24MINI_10M_100SM + POLIC_4MM_10M,
            '6mm': $24MINI_10M_100SM + POLIC_6MM_10M,
            '0mm': $24MINI_10M_100SM - (SHEET_1_3MM * 6),
          },
          '67sm': {
            '3mm': $24MINI_10M_67SM,
            '4mm': $24MINI_10M_67SM + POLIC_4MM_10M,
            '6mm': $24MINI_10M_67SM + POLIC_6MM_10M,
            '0mm': $24MINI_10M_67SM - (SHEET_1_3MM * 6),
          },
        },
      },
      'one-piece': {
        '4m': {
          '100sm': {
            '3mm': $24MINI_4M_100SM + SHIPPING_MIN,
            '4mm': $24MINI_4M_100SM + SHIPPING_MIN + POLIC_4MM_4M,
            '6mm': $24MINI_4M_100SM + SHIPPING_MIN + POLIC_6MM_4M,
            '0mm': $24MINI_4M_100SM + SHIPPING_MIN - (SHEET_1_3MM * 3),
          },
          '67sm': {
            '3mm': $24MINI_4M_67SM + SHIPPING_MIN,
            '4mm': $24MINI_4M_67SM + SHIPPING_MIN + POLIC_4MM_4M,
            '6mm': $24MINI_4M_67SM + SHIPPING_MIN + POLIC_6MM_4M,
            '0mm': $24MINI_4M_67SM + SHIPPING_MIN - (SHEET_1_3MM * 3),
          },
        },
        '6m': {
          '100sm': {
            '3mm': $24MINI_6M_100SM + SHIPPING_MIN,
            '4mm': $24MINI_6M_100SM + SHIPPING_MIN + POLIC_4MM_6M,
            '6mm': $24MINI_6M_100SM + SHIPPING_MIN + POLIC_6MM_6M,
            '0mm': $24MINI_6M_100SM + SHIPPING_MIN - (SHEET_1_3MM * 4),
          },
          '67sm': {
            '3mm': $24MINI_6M_67SM + SHIPPING_MIN,
            '4mm': $24MINI_6M_67SM + SHIPPING_MIN + POLIC_4MM_6M,
            '6mm': $24MINI_6M_67SM + SHIPPING_MIN + POLIC_6MM_6M,
            '0mm': $24MINI_6M_67SM + SHIPPING_MIN - (SHEET_1_3MM * 4),
          }
        },
        '8m': {
          '100sm': {
            '3mm': $24MINI_8M_100SM + SHIPPING_MIN,
            '4mm': $24MINI_8M_100SM + SHIPPING_MIN + POLIC_4MM_8M,
            '6mm': $24MINI_8M_100SM + SHIPPING_MIN + POLIC_6MM_8M,
            '0mm': $24MINI_8M_100SM + SHIPPING_MIN - (SHEET_1_3MM * 5),
          },
          '67sm': {
            '3mm': $24MINI_8M_67SM + SHIPPING_MIN,
            '4mm': $24MINI_8M_67SM + SHIPPING_MIN + POLIC_4MM_8M,
            '6mm': $24MINI_8M_67SM + SHIPPING_MIN + POLIC_6MM_8M,
            '0mm': $24MINI_8M_67SM + SHIPPING_MIN - (SHEET_1_3MM * 5),
          }
        },
        '10m': {
          '100sm': {
            '3mm': $24MINI_10M_100SM + SHIPPING_MIN,
            '4mm': $24MINI_10M_100SM + SHIPPING_MIN + POLIC_4MM_10M,
            '6mm': $24MINI_10M_100SM + SHIPPING_MIN + POLIC_6MM_10M,
            '0mm': $24MINI_10M_100SM + SHIPPING_MIN - (SHEET_1_3MM * 6),
          },
          '67sm': {
            '3mm': $24MINI_10M_67SM + SHIPPING_MIN,
            '4mm': $24MINI_10M_67SM + SHIPPING_MIN + POLIC_4MM_10M,
            '6mm': $24MINI_10M_67SM + SHIPPING_MIN + POLIC_6MM_10M,
            '0mm': $24MINI_10M_67SM + SHIPPING_MIN - (SHEET_1_3MM * 6),
          },
        },
      }
    },
    '20-c': {
      'demountable': {
        '4m': {
          '100sm': {
            '3mm': $20C_4M_100SM,
            '4mm': $20C_4M_100SM + POLIC_4MM_4M,
            '6mm': $20C_4M_100SM + POLIC_6MM_4M,
            '0mm': $20C_4M_100SM - (SHEET_1_3MM * 3),
          },
          '67sm': {
            '3mm': $20C_4M_67SM,
            '4mm': $20C_4M_67SM + POLIC_4MM_4M,
            '6mm': $20C_4M_67SM + POLIC_6MM_4M,
            '0mm': $20C_4M_67SM - (SHEET_1_3MM * 3),
          },
          '50sm': {
            '3mm': $20C_4M_50SM,
            '4mm': $20C_4M_50SM + POLIC_4MM_4M,
            '6mm': $20C_4M_50SM + POLIC_6MM_4M,
            '0mm': $20C_4M_50SM - (SHEET_1_3MM * 3),
          },
        },
        '6m': {
          '100sm': {
            '3mm': $20C_6M_100SM,
            '4mm': $20C_6M_100SM + POLIC_4MM_6M,
            '6mm': $20C_6M_100SM + POLIC_6MM_6M,
            '0mm': $20C_6M_100SM - (SHEET_1_3MM * 4),
          },
          '67sm': {
            '3mm': $20C_6M_67SM,
            '4mm': $20C_6M_67SM + POLIC_4MM_6M,
            '6mm': $20C_6M_67SM + POLIC_6MM_6M,
            '0mm': $20C_6M_67SM - (SHEET_1_3MM * 4),
          },
          '50sm': {
            '3mm': $20C_6M_50SM,
            '4mm': $20C_6M_50SM + POLIC_4MM_6M,
            '6mm': $20C_6M_50SM + POLIC_6MM_6M,
            '0mm': $20C_6M_50SM - (SHEET_1_3MM * 4),
          },
        },
        '8m': {
          '100sm': {
            '3mm': $20C_8M_100SM,
            '4mm': $20C_8M_100SM + POLIC_4MM_8M,
            '6mm': $20C_8M_100SM + POLIC_6MM_8M,
            '0mm': $20C_8M_100SM - (SHEET_1_3MM * 5),
          },
          '67sm': {
            '3mm': $20C_8M_67SM,
            '4mm': $20C_8M_67SM + POLIC_4MM_8M,
            '6mm': $20C_8M_67SM + POLIC_6MM_8M,
            '0mm': $20C_8M_67SM - (SHEET_1_3MM * 5),
          },
          '50sm': {
            '3mm': $20C_8M_50SM,
            '4mm': $20C_8M_50SM + POLIC_4MM_8M,
            '6mm': $20C_8M_50SM + POLIC_6MM_8M,
            '0mm': $20C_8M_50SM - (SHEET_1_3MM * 5),
          },
        },
        '10m': {
          '100sm': {
            '3mm': $20C_10M_100SM,
            '4mm': $20C_10M_100SM + POLIC_4MM_10M,
            '6mm': $20C_10M_100SM + POLIC_6MM_10M,
            '0mm': $20C_10M_100SM - (SHEET_1_3MM * 6),
          },
          '67sm': {
            '3mm': $20C_10M_67SM,
            '4mm': $20C_10M_67SM + POLIC_4MM_10M,
            '6mm': $20C_10M_67SM + POLIC_6MM_10M,
            '0mm': $20C_10M_67SM - (SHEET_1_3MM * 6),
          },
          '50sm': {
            '3mm': $20C_10M_50SM,
            '4mm': $20C_10M_50SM + POLIC_4MM_10M,
            '6mm': $20C_10M_50SM + POLIC_6MM_10M,
            '0mm': $20C_10M_50SM - (SHEET_1_3MM * 6),
          },
        },
      },
      'one-piece': {
        '4m': {
          '100sm': {
            '3mm': $20C_4M_100SM + SHIPPING_MID,
            '4mm': $20C_4M_100SM + SHIPPING_MID + POLIC_4MM_4M,
            '6mm': $20C_4M_100SM + SHIPPING_MID + POLIC_6MM_4M,
            '0mm': $20C_4M_100SM + SHIPPING_MID - (SHEET_1_3MM * 3),
          },
          '67sm': {
            '3mm': $20C_4M_67SM + SHIPPING_MID,
            '4mm': $20C_4M_67SM + SHIPPING_MID + POLIC_4MM_4M,
            '6mm': $20C_4M_67SM + SHIPPING_MID + POLIC_6MM_4M,
            '0mm': $20C_4M_67SM + SHIPPING_MID - (SHEET_1_3MM * 3),
          },
          '50sm': {
            '3mm': $20C_4M_50SM + SHIPPING_MID,
            '4mm': $20C_4M_50SM + SHIPPING_MID + POLIC_4MM_4M,
            '6mm': $20C_4M_50SM + SHIPPING_MID + POLIC_6MM_4M,
            '0mm': $20C_4M_50SM + SHIPPING_MID - (SHEET_1_3MM * 3),
          },
        },
        '6m': {
          '100sm': {
            '3mm': $20C_6M_100SM + SHIPPING_MID,
            '4mm': $20C_6M_100SM + SHIPPING_MID + POLIC_4MM_6M,
            '6mm': $20C_6M_100SM + SHIPPING_MID + POLIC_6MM_6M,
            '0mm': $20C_6M_100SM + SHIPPING_MID - (SHEET_1_3MM * 4),
          },
          '67sm': {
            '3mm': $20C_6M_67SM + SHIPPING_MID,
            '4mm': $20C_6M_67SM + SHIPPING_MID + POLIC_4MM_6M,
            '6mm': $20C_6M_67SM + SHIPPING_MID + POLIC_6MM_6M,
            '0mm': $20C_6M_67SM + SHIPPING_MID - (SHEET_1_3MM * 4),
          },
          '50sm': {
            '3mm': $20C_6M_50SM + SHIPPING_MID,
            '4mm': $20C_6M_50SM + SHIPPING_MID + POLIC_4MM_6M,
            '6mm': $20C_6M_50SM + SHIPPING_MID + POLIC_6MM_6M,
            '0mm': $20C_6M_50SM + SHIPPING_MID - (SHEET_1_3MM * 4),
          },
        },
        '8m': {
          '100sm': {
            '3mm': $20C_8M_100SM + SHIPPING_MID,
            '4mm': $20C_8M_100SM + SHIPPING_MID + POLIC_4MM_8M,
            '6mm': $20C_8M_100SM + SHIPPING_MID + POLIC_6MM_8M,
            '0mm': $20C_8M_100SM + SHIPPING_MID - (SHEET_1_3MM * 5),
          },
          '67sm': {
            '3mm': $20C_8M_67SM + SHIPPING_MID,
            '4mm': $20C_8M_67SM + SHIPPING_MID + POLIC_4MM_8M,
            '6mm': $20C_8M_67SM + SHIPPING_MID + POLIC_6MM_8M,
            '0mm': $20C_8M_67SM + SHIPPING_MID - (SHEET_1_3MM * 5),
          },
          '50sm': {
            '3mm': $20C_8M_50SM + SHIPPING_MID,
            '4mm': $20C_8M_50SM + SHIPPING_MID + POLIC_4MM_8M,
            '6mm': $20C_8M_50SM + SHIPPING_MID + POLIC_6MM_8M,
            '0mm': $20C_8M_50SM + SHIPPING_MID - (SHEET_1_3MM * 5),
          },
        },
        '10m': {
          '100sm': {
            '3mm': $20C_10M_100SM + SHIPPING_MID,
            '4mm': $20C_10M_100SM + SHIPPING_MID + POLIC_4MM_10M,
            '6mm': $20C_10M_100SM + SHIPPING_MID + POLIC_6MM_10M,
            '0mm': $20C_10M_100SM + SHIPPING_MID - (SHEET_1_3MM * 6),
          },
          '67sm': {
            '3mm': $20C_10M_67SM + SHIPPING_MID,
            '4mm': $20C_10M_67SM + SHIPPING_MID + POLIC_4MM_10M,
            '6mm': $20C_10M_67SM + SHIPPING_MID + POLIC_6MM_10M,
            '0mm': $20C_10M_67SM + SHIPPING_MID - (SHEET_1_3MM * 6),
          },
          '50sm': {
            '3mm': $20C_10M_50SM + SHIPPING_MID,
            '4mm': $20C_10M_50SM + SHIPPING_MID + POLIC_4MM_10M,
            '6mm': $20C_10M_50SM + SHIPPING_MID + POLIC_6MM_10M,
            '0mm': $20C_10M_50SM + SHIPPING_MID - (SHEET_1_3MM * 6),
          },
        },
      }
    },
    '40-c': {
      'demountable': {
        '4m': {
          '100sm': {
            '3mm': $40C_4M_100SM,
            '4mm': $40C_4M_100SM + POLIC_4MM_4M,
            '6mm': $40C_4M_100SM + POLIC_6MM_4M,
            '0mm': $40C_4M_100SM - (SHEET_1_3MM * 3),
          },
          '67sm': {
            '3mm': $40C_4M_67SM,
            '4mm': $40C_4M_67SM + POLIC_4MM_4M,
            '6mm': $40C_4M_67SM + POLIC_6MM_4M,
            '0mm': $40C_4M_67SM - (SHEET_1_3MM * 3),
          },
          '50sm': {
            '3mm': $40C_4M_50SM,
            '4mm': $40C_4M_50SM + POLIC_4MM_4M,
            '6mm': $40C_4M_50SM + POLIC_6MM_4M,
            '0mm': $40C_4M_50SM - (SHEET_1_3MM * 3),
          },
        },
        '6m': {
          '100sm': {
            '3mm': $40C_6M_100SM,
            '4mm': $40C_6M_100SM + POLIC_4MM_6M,
            '6mm': $40C_6M_100SM + POLIC_6MM_6M,
            '0mm': $40C_6M_100SM - (SHEET_1_3MM * 4),
          },
          '67sm': {
            '3mm': $40C_6M_67SM,
            '4mm': $40C_6M_67SM + POLIC_4MM_6M,
            '6mm': $40C_6M_67SM + POLIC_6MM_6M,
            '0mm': $40C_6M_67SM - (SHEET_1_3MM * 4),
          },
          '50sm': {
            '3mm': $40C_6M_50SM,
            '4mm': $40C_6M_50SM + POLIC_4MM_6M,
            '6mm': $40C_6M_50SM + POLIC_6MM_6M,
            '0mm': $40C_6M_50SM - (SHEET_1_3MM * 4),
          },
        },
        '8m': {
          '100sm': {
            '3mm': $40C_8M_100SM,
            '4mm': $40C_8M_100SM + POLIC_4MM_8M,
            '6mm': $40C_8M_100SM + POLIC_6MM_8M,
            '0mm': $40C_8M_100SM - (SHEET_1_3MM * 5),
          },
          '67sm': {
            '3mm': $40C_8M_67SM,
            '4mm': $40C_8M_67SM + POLIC_4MM_8M,
            '6mm': $40C_8M_67SM + POLIC_6MM_8M,
            '0mm': $40C_8M_67SM - (SHEET_1_3MM * 5),
          },
          '50sm': {
            '3mm': $40C_8M_50SM,
            '4mm': $40C_8M_50SM + POLIC_4MM_8M,
            '6mm': $40C_8M_50SM + POLIC_6MM_8M,
            '0mm': $40C_8M_50SM - (SHEET_1_3MM * 5),
          },
        },
        '10m': {
          '100sm': {
            '3mm': $40C_10M_100SM,
            '4mm': $40C_10M_100SM + POLIC_4MM_10M,
            '6mm': $40C_10M_100SM + POLIC_6MM_10M,
            '0mm': $40C_10M_100SM - (SHEET_1_3MM * 6),
          },
          '67sm': {
            '3mm': $40C_10M_67SM,
            '4mm': $40C_10M_67SM + POLIC_4MM_10M,
            '6mm': $40C_10M_67SM + POLIC_6MM_10M,
            '0mm': $40C_10M_67SM - (SHEET_1_3MM * 6),
          },
          '50sm': {
            '3mm': $40C_10M_50SM,
            '4mm': $40C_10M_50SM + POLIC_4MM_10M,
            '6mm': $40C_10M_50SM + POLIC_6MM_10M,
            '0mm': $40C_10M_50SM - (SHEET_1_3MM * 6),
          },
        },
      },
      'one-piece': {
        '4m': {
          '100sm': {
            '3mm': $40C_4M_100SM + SHIPPING_MID,
            '4mm': $40C_4M_100SM + SHIPPING_MID + POLIC_4MM_4M,
            '6mm': $40C_4M_100SM + SHIPPING_MID + POLIC_6MM_4M,
            '0mm': $40C_4M_100SM + SHIPPING_MID - (SHEET_1_3MM * 3),
          },
          '67sm': {
            '3mm': $40C_4M_67SM + SHIPPING_MID,
            '4mm': $40C_4M_67SM + SHIPPING_MID + POLIC_4MM_4M,
            '6mm': $40C_4M_67SM + SHIPPING_MID + POLIC_6MM_4M,
            '0mm': $40C_4M_67SM + SHIPPING_MID - (SHEET_1_3MM * 3),
          },
          '50sm': {
            '3mm': $40C_4M_50SM + SHIPPING_MID,
            '4mm': $40C_4M_50SM + SHIPPING_MID + POLIC_4MM_4M,
            '6mm': $40C_4M_50SM + SHIPPING_MID + POLIC_6MM_4M,
            '0mm': $40C_4M_50SM + SHIPPING_MID - (SHEET_1_3MM * 3),
          },
        },
        '6m': {
          '100sm': {
            '3mm': $40C_6M_100SM + SHIPPING_MID,
            '4mm': $40C_6M_100SM + SHIPPING_MID + POLIC_4MM_6M,
            '6mm': $40C_6M_100SM + SHIPPING_MID + POLIC_6MM_6M,
            '0mm': $40C_6M_100SM + SHIPPING_MID - (SHEET_1_3MM * 4),
          },
          '67sm': {
            '3mm': $40C_6M_67SM + SHIPPING_MID,
            '4mm': $40C_6M_67SM + SHIPPING_MID + POLIC_4MM_6M,
            '6mm': $40C_6M_67SM + SHIPPING_MID + POLIC_6MM_6M,
            '0mm': $40C_6M_67SM + SHIPPING_MID - (SHEET_1_3MM * 4),
          },
          '50sm': {
            '3mm': $40C_6M_50SM + SHIPPING_MID,
            '4mm': $40C_6M_50SM + SHIPPING_MID + POLIC_4MM_6M,
            '6mm': $40C_6M_50SM + SHIPPING_MID + POLIC_6MM_6M,
            '0mm': $40C_6M_50SM + SHIPPING_MID - (SHEET_1_3MM * 4),
          },
        },
        '8m': {
          '100sm': {
            '3mm': $40C_8M_100SM + SHIPPING_MID,
            '4mm': $40C_8M_100SM + SHIPPING_MID + POLIC_4MM_8M,
            '6mm': $40C_8M_100SM + SHIPPING_MID + POLIC_6MM_8M,
            '0mm': $40C_8M_100SM + SHIPPING_MID - (SHEET_1_3MM * 5),
          },
          '67sm': {
            '3mm': $40C_8M_67SM + SHIPPING_MID,
            '4mm': $40C_8M_67SM + SHIPPING_MID + POLIC_4MM_8M,
            '6mm': $40C_8M_67SM + SHIPPING_MID + POLIC_6MM_8M,
            '0mm': $40C_8M_67SM + SHIPPING_MID - (SHEET_1_3MM * 5),
          },
          '50sm': {
            '3mm': $40C_8M_50SM + SHIPPING_MID,
            '4mm': $40C_8M_50SM + SHIPPING_MID + POLIC_4MM_8M,
            '6mm': $40C_8M_50SM + SHIPPING_MID + POLIC_6MM_8M,
            '0mm': $40C_8M_50SM + SHIPPING_MID - (SHEET_1_3MM * 5),
          },
        },
        '10m': {
          '100sm': {
            '3mm': $40C_10M_100SM + SHIPPING_MID,
            '4mm': $40C_10M_100SM + SHIPPING_MID + POLIC_4MM_10M,
            '6mm': $40C_10M_100SM + SHIPPING_MID + POLIC_6MM_10M,
            '0mm': $40C_10M_100SM + SHIPPING_MID - (SHEET_1_3MM * 6),
          },
          '67sm': {
            '3mm': $40C_10M_67SM + SHIPPING_MID,
            '4mm': $40C_10M_67SM + SHIPPING_MID + POLIC_4MM_10M,
            '6mm': $40C_10M_67SM + SHIPPING_MID + POLIC_6MM_10M,
            '0mm': $40C_10M_67SM + SHIPPING_MID - (SHEET_1_3MM * 6),
          },
          '50sm': {
            '3mm': $40C_10M_50SM + SHIPPING_MID,
            '4mm': $40C_10M_50SM + SHIPPING_MID + POLIC_4MM_10M,
            '6mm': $40C_10M_50SM + SHIPPING_MID + POLIC_6MM_10M,
            '0mm': $40C_10M_50SM + SHIPPING_MID - (SHEET_1_3MM * 6),
          },
        },
      }
    },
    '40-ck': {
      'demountable': {
        '4m': {
          '67sm': {
            '3mm': $40CK_4M_67SM,
            '4mm': $40CK_4M_67SM + POLIC_4MM_4M,
            '6mm': $40CK_4M_67SM + POLIC_6MM_4M,
            '0mm': $40CK_4M_67SM - (SHEET_1_3MM * 3),
          },
        },
        '6m': {
          '67sm': {
            '3mm': $40CK_6M_67SM,
            '4mm': $40CK_6M_67SM + POLIC_4MM_6M,
            '6mm': $40CK_6M_67SM + POLIC_6MM_6M,
            '0mm': $40CK_6M_67SM - (SHEET_1_3MM * 4),
          },
        },
        '8m': {
          '67sm': {
            '3mm': $40CK_8M_67SM,
            '4mm': $40CK_8M_67SM + POLIC_4MM_8M,
            '6mm': $40CK_8M_67SM + POLIC_6MM_8M,
            '0mm': $40CK_8M_67SM - (SHEET_1_3MM * 5),
          },
        },
        '10m': {
          '67sm': {
            '3mm': $40CK_10M_67SM,
            '4mm': $40CK_10M_67SM + POLIC_4MM_10M,
            '6mm': $40CK_10M_67SM + POLIC_6MM_10M,
            '0mm': $40CK_10M_67SM - (SHEET_1_3MM * 6),
          },
        },
      },
      'one-piece': {
        '4m': {
          '67sm': {
            '3mm': $40CK_4M_67SM + SHIPPING_MID,
            '4mm': $40CK_4M_67SM + SHIPPING_MID + POLIC_4MM_4M,
            '6mm': $40CK_4M_67SM + SHIPPING_MID + POLIC_6MM_4M,
            '0mm': $40CK_4M_67SM + SHIPPING_MID - (SHEET_1_3MM * 3),
          },
        },
        '6m': {
          '67sm': {
            '3mm': $40CK_6M_67SM + SHIPPING_MID,
            '4mm': $40CK_6M_67SM + SHIPPING_MID + POLIC_4MM_6M,
            '6mm': $40CK_6M_67SM + SHIPPING_MID + POLIC_6MM_6M,
            '0mm': $40CK_6M_67SM + SHIPPING_MID - (SHEET_1_3MM * 4),
          },
        },
        '8m': {
          '67sm': {
            '3mm': $40CK_8M_67SM + SHIPPING_MID,
            '4mm': $40CK_8M_67SM + SHIPPING_MID + POLIC_4MM_8M,
            '6mm': $40CK_8M_67SM + SHIPPING_MID + POLIC_6MM_8M,
            '0mm': $40CK_8M_67SM + SHIPPING_MID - (SHEET_1_3MM * 5),
          },
        },
        '10m': {
          '67sm': {
            '3mm': $40CK_10M_67SM + SHIPPING_MID,
            '4mm': $40CK_10M_67SM + SHIPPING_MID + POLIC_4MM_10M,
            '6mm': $40CK_10M_67SM + SHIPPING_MID + POLIC_6MM_10M,
            '0mm': $40CK_10M_67SM + SHIPPING_MID - (SHEET_1_3MM * 6),
          },
        },
      }
    },
    '20-fc': {
      'demountable': {
        '4m': {
          '100sm': {
            '3mm': $20FC_4M_100SM,
            '4mm': $20FC_4M_100SM + POLIC_4MM_4M,
            '6mm': $20FC_4M_100SM + POLIC_6MM_4M,
            '0mm': $20FC_4M_100SM - (SHEET_1_3MM * 3),
          },
          '67sm': {
            '3mm': $20FC_4M_67SM,
            '4mm': $20FC_4M_67SM + POLIC_4MM_4M,
            '6mm': $20FC_4M_67SM + POLIC_6MM_4M,
            '0mm': $20FC_4M_67SM - (SHEET_1_3MM * 3),
          },
        },
        '6m': {
          '100sm': {
            '3mm': $20FC_6M_100SM,
            '4mm': $20FC_6M_100SM + POLIC_4MM_6M,
            '6mm': $20FC_6M_100SM + POLIC_6MM_6M,
            '0mm': $20FC_6M_100SM - (SHEET_1_3MM * 4),
          },
          '67sm': {
            '3mm': $20FC_6M_67SM,
            '4mm': $20FC_6M_67SM + POLIC_4MM_6M,
            '6mm': $20FC_6M_67SM + POLIC_6MM_6M,
            '0mm': $20FC_6M_67SM - (SHEET_1_3MM * 4),
          },
        },
        '8m': {
          '100sm': {
            '3mm': $20FC_8M_100SM,
            '4mm': $20FC_8M_100SM + POLIC_4MM_8M,
            '6mm': $20FC_8M_100SM + POLIC_6MM_8M,
            '0mm': $20FC_8M_100SM - (SHEET_1_3MM * 5),
          },
          '67sm': {
            '3mm': $20FC_8M_67SM,
            '4mm': $20FC_8M_67SM + POLIC_4MM_8M,
            '6mm': $20FC_8M_67SM + POLIC_6MM_8M,
            '0mm': $20FC_8M_67SM - (SHEET_1_3MM * 5),
          },
        },
        '10m': {
          '100sm': {
            '3mm': $20FC_10M_100SM,
            '4mm': $20FC_10M_100SM + POLIC_4MM_10M,
            '6mm': $20FC_10M_100SM + POLIC_6MM_10M,
            '0mm': $20FC_10M_100SM - (SHEET_1_3MM * 6),
          },
          '67sm': {
            '3mm': $20FC_10M_67SM,
            '4mm': $20FC_10M_67SM + POLIC_4MM_10M,
            '6mm': $20FC_10M_67SM + POLIC_6MM_10M,
            '0mm': $20FC_10M_67SM - (SHEET_1_3MM * 6),
          },
        },
      },
      'one-piece': {
        '4m': {
          '100sm': {
            '3mm': $20FC_4M_100SM + SHIPPING_MID,
            '4mm': $20FC_4M_100SM + SHIPPING_MID + POLIC_4MM_4M,
            '6mm': $20FC_4M_100SM + SHIPPING_MID + POLIC_6MM_4M,
            '0mm': $20FC_4M_100SM + SHIPPING_MID - (SHEET_1_3MM * 3),
          },
          '67sm': {
            '3mm': $20FC_4M_67SM + SHIPPING_MID,
            '4mm': $20FC_4M_67SM + SHIPPING_MID + POLIC_4MM_4M,
            '6mm': $20FC_4M_67SM + SHIPPING_MID + POLIC_6MM_4M,
            '0mm': $20FC_4M_67SM + SHIPPING_MID - (SHEET_1_3MM * 3),
          },
        },
        '6m': {
          '100sm': {
            '3mm': $20FC_6M_100SM + SHIPPING_MID,
            '4mm': $20FC_6M_100SM + SHIPPING_MID + POLIC_4MM_6M,
            '6mm': $20FC_6M_100SM + SHIPPING_MID + POLIC_6MM_6M,
            '0mm': $20FC_6M_100SM + SHIPPING_MID - (SHEET_1_3MM * 4),
          },
          '67sm': {
            '3mm': $20FC_6M_67SM + SHIPPING_MID,
            '4mm': $20FC_6M_67SM + SHIPPING_MID + POLIC_4MM_6M,
            '6mm': $20FC_6M_67SM + SHIPPING_MID + POLIC_6MM_6M,
            '0mm': $20FC_6M_67SM + SHIPPING_MID - (SHEET_1_3MM * 4),
          },
        },
        '8m': {
          '100sm': {
            '3mm': $20FC_8M_100SM + SHIPPING_MID,
            '4mm': $20FC_8M_100SM + SHIPPING_MID + POLIC_4MM_8M,
            '6mm': $20FC_8M_100SM + SHIPPING_MID + POLIC_6MM_8M,
            '0mm': $20FC_8M_100SM + SHIPPING_MID - (SHEET_1_3MM * 5),
          },
          '67sm': {
            '3mm': $20FC_8M_67SM + SHIPPING_MID,
            '4mm': $20FC_8M_67SM + SHIPPING_MID + POLIC_4MM_8M,
            '6mm': $20FC_8M_67SM + SHIPPING_MID + POLIC_6MM_8M,
            '0mm': $20FC_8M_67SM + SHIPPING_MID - (SHEET_1_3MM * 5),
          },
        },
        '10m': {
          '100sm': {
            '3mm': $20FC_10M_100SM + SHIPPING_MID,
            '4mm': $20FC_10M_100SM + SHIPPING_MID + POLIC_4MM_10M,
            '6mm': $20FC_10M_100SM + SHIPPING_MID + POLIC_6MM_10M,
            '0mm': $20FC_10M_100SM + SHIPPING_MID - (SHEET_1_3MM * 6),
          },
          '67sm': {
            '3mm': $20FC_10M_67SM + SHIPPING_MID,
            '4mm': $20FC_10M_67SM + SHIPPING_MID + POLIC_4MM_10M,
            '6mm': $20FC_10M_67SM + SHIPPING_MID + POLIC_6MM_10M,
            '0mm': $20FC_10M_67SM + SHIPPING_MID - (SHEET_1_3MM * 6),
          },
        },
      }
    },
    '3500-40c': {
      'demountable': {
        '4m': {
          '100sm': {
            '3mm': $3500_40C_4M_100SM,
            '4mm': $3500_40C_4M_100SM + POLIC_4MM_4M,
            '0mm': $3500_40C_4M_100SM - (SHEET_1_3MM * 3),
          },
          '67sm': {
            '3mm': $3500_40C_4M_67SM,
            '4mm': $3500_40C_4M_67SM + POLIC_4MM_4M,
            '0mm': $3500_40C_4M_67SM - (SHEET_1_3MM * 3),
          },
          '50sm': {
            '3mm': $3500_40C_4M_50SM,
            '4mm': $3500_40C_4M_50SM + POLIC_4MM_4M,
            '0mm': $3500_40C_4M_50SM - (SHEET_1_3MM * 3),
          },
        },
        '6m': {
          '100sm': {
            '3mm': $3500_40C_6M_100SM,
            '4mm': $3500_40C_6M_100SM + POLIC_4MM_6M,
            '0mm': $3500_40C_6M_100SM - (SHEET_1_3MM * 4),
          },
          '67sm': {
            '3mm': $3500_40C_6M_67SM,
            '4mm': $3500_40C_6M_67SM + POLIC_4MM_6M,
            '0mm': $3500_40C_6M_67SM - (SHEET_1_3MM * 4),
          },
          '50sm': {
            '3mm': $3500_40C_6M_50SM,
            '4mm': $3500_40C_6M_50SM + POLIC_4MM_6M,
            '0mm': $3500_40C_6M_50SM - (SHEET_1_3MM * 4),
          },
        },
        '8m': {
          '100sm': {
            '3mm': $3500_40C_8M_100SM,
            '4mm': $3500_40C_8M_100SM + POLIC_4MM_8M,
            '0mm': $3500_40C_8M_100SM - (SHEET_1_3MM * 5),
          },
          '67sm': {
            '3mm': $3500_40C_8M_67SM,
            '4mm': $3500_40C_8M_67SM + POLIC_4MM_8M,
            '0mm': $3500_40C_8M_67SM - (SHEET_1_3MM * 5),
          },
          '50sm': {
            '3mm': $3500_40C_8M_50SM,
            '4mm': $3500_40C_8M_50SM + POLIC_4MM_8M,
            '0mm': $3500_40C_8M_50SM - (SHEET_1_3MM * 5),
          },
        },
        '10m': {
          '100sm': {
            '3mm': $3500_40C_10M_100SM,
            '4mm': $3500_40C_10M_100SM + POLIC_4MM_10M,
            '0mm': $3500_40C_10M_100SM - (SHEET_1_3MM * 6),
          },
          '67sm': {
            '3mm': $3500_40C_10M_67SM,
            '4mm': $3500_40C_10M_67SM + POLIC_4MM_10M,
            '0mm': $3500_40C_10M_67SM - (SHEET_1_3MM * 6),
          },
          '50sm': {
            '3mm': $3500_40C_10M_50SM,
            '4mm': $3500_40C_10M_50SM + POLIC_4MM_10M,
            '0mm': $3500_40C_10M_50SM - (SHEET_1_3MM * 6),
          },
        },
      },
      'one-piece': {
        '4m': {
          '100sm': {
            '3mm': $3500_40C_4M_100SM + SHIPPING_MAX,
            '4mm': $3500_40C_4M_100SM + SHIPPING_MAX + POLIC_4MM_4M,
            '0mm': $3500_40C_4M_100SM + SHIPPING_MAX - (SHEET_1_3MM * 3),
          },
          '67sm': {
            '3mm': $3500_40C_4M_67SM + SHIPPING_MAX,
            '4mm': $3500_40C_4M_67SM + SHIPPING_MAX + POLIC_4MM_4M,
            '0mm': $3500_40C_4M_67SM + SHIPPING_MAX - (SHEET_1_3MM * 3),
          },
          '50sm': {
            '3mm': $3500_40C_4M_50SM + SHIPPING_MAX,
            '4mm': $3500_40C_4M_50SM + SHIPPING_MAX + POLIC_4MM_4M,
            '0mm': $3500_40C_4M_50SM + SHIPPING_MAX - (SHEET_1_3MM * 3),
          },
        },
        '6m': {
          '100sm': {
            '3mm': $3500_40C_6M_100SM + SHIPPING_MAX,
            '4mm': $3500_40C_6M_100SM + SHIPPING_MAX + POLIC_4MM_6M,
            '0mm': $3500_40C_6M_100SM + SHIPPING_MAX - (SHEET_1_3MM * 4),
          },
          '67sm': {
            '3mm': $3500_40C_6M_67SM + SHIPPING_MAX,
            '4mm': $3500_40C_6M_67SM + SHIPPING_MAX + POLIC_4MM_6M,
            '0mm': $3500_40C_6M_67SM + SHIPPING_MAX - (SHEET_1_3MM * 4),
          },
          '50sm': {
            '3mm': $3500_40C_6M_50SM + SHIPPING_MAX,
            '4mm': $3500_40C_6M_50SM + SHIPPING_MAX + POLIC_4MM_6M,
            '0mm': $3500_40C_6M_50SM + SHIPPING_MAX - (SHEET_1_3MM * 4),
          },
        },
        '8m': {
          '100sm': {
            '3mm': $3500_40C_8M_100SM + SHIPPING_MAX,
            '4mm': $3500_40C_8M_100SM + SHIPPING_MAX + POLIC_4MM_8M,
            '0mm': $3500_40C_8M_100SM + SHIPPING_MAX - (SHEET_1_3MM * 5),
          },
          '67sm': {
            '3mm': $3500_40C_8M_67SM + SHIPPING_MAX,
            '4mm': $3500_40C_8M_67SM + SHIPPING_MAX + POLIC_4MM_8M,
            '0mm': $3500_40C_8M_67SM + SHIPPING_MAX - (SHEET_1_3MM * 5),
          },
          '50sm': {
            '3mm': $3500_40C_8M_50SM + SHIPPING_MAX,
            '4mm': $3500_40C_8M_50SM + SHIPPING_MAX + POLIC_4MM_8M,
            '0mm': $3500_40C_8M_50SM + SHIPPING_MAX - (SHEET_1_3MM * 5),
          },
        },
        '10m': {
          '100sm': {
            '3mm': $3500_40C_10M_100SM + SHIPPING_MAX,
            '4mm': $3500_40C_10M_100SM + SHIPPING_MAX + POLIC_4MM_10M,
            '0mm': $3500_40C_10M_100SM + SHIPPING_MAX - (SHEET_1_3MM * 6),
          },
          '67sm': {
            '3mm': $3500_40C_10M_67SM + SHIPPING_MAX,
            '4mm': $3500_40C_10M_67SM + SHIPPING_MAX + POLIC_4MM_10M,
            '0mm': $3500_40C_10M_67SM + SHIPPING_MAX - (SHEET_1_3MM * 6),
          },
          '50sm': {
            '3mm': $3500_40C_10M_50SM + SHIPPING_MAX,
            '4mm': $3500_40C_10M_50SM + SHIPPING_MAX + POLIC_4MM_10M,
            '0mm': $3500_40C_10M_50SM + SHIPPING_MAX - (SHEET_1_3MM * 6),
          },
        },
      }
    },
    '4000-40c': {
      'demountable': {
        '4m': {
          '100sm': {
            '3mm': $4000_40C_4M_100SM,
            '4mm': $4000_40C_4M_100SM + POLIC_4MM_4M,
            '0mm': $4000_40C_4M_100SM - (SHEET_1_3MM * 3),
          },
          '67sm': {
            '3mm': $4000_40C_4M_67SM,
            '4mm': $4000_40C_4M_67SM + POLIC_4MM_4M,
            '0mm': $4000_40C_4M_67SM - (SHEET_1_3MM * 3),
          },
          '50sm': {
            '3mm': $4000_40C_4M_50SM,
            '4mm': $4000_40C_4M_50SM + POLIC_4MM_4M,
            '0mm': $4000_40C_4M_50SM - (SHEET_1_3MM * 3),
          },
        },
        '6m': {
          '100sm': {
            '3mm': $4000_40C_6M_100SM,
            '4mm': $4000_40C_6M_100SM + POLIC_4MM_6M,
            '0mm': $4000_40C_6M_100SM - (SHEET_1_3MM * 4),
          },
          '67sm': {
            '3mm': $4000_40C_6M_67SM,
            '4mm': $4000_40C_6M_67SM + POLIC_4MM_6M,
            '0mm': $4000_40C_6M_67SM - (SHEET_1_3MM * 4),
          },
          '50sm': {
            '3mm': $4000_40C_6M_50SM,
            '4mm': $4000_40C_6M_50SM + POLIC_4MM_6M,
            '0mm': $4000_40C_6M_50SM - (SHEET_1_3MM * 4),
          },
        },
        '8m': {
          '100sm': {
            '3mm': $4000_40C_8M_100SM,
            '4mm': $4000_40C_8M_100SM + POLIC_4MM_8M,
            '0mm': $4000_40C_8M_100SM - (SHEET_1_3MM * 5),
          },
          '67sm': {
            '3mm': $4000_40C_8M_67SM,
            '4mm': $4000_40C_8M_67SM + POLIC_4MM_8M,
            '0mm': $4000_40C_8M_67SM - (SHEET_1_3MM * 5),
          },
          '50sm': {
            '3mm': $4000_40C_8M_50SM,
            '4mm': $4000_40C_8M_50SM + POLIC_4MM_8M,
            '0mm': $4000_40C_8M_50SM - (SHEET_1_3MM * 5),
          },
        },
        '10m': {
          '100sm': {
            '3mm': $4000_40C_10M_100SM,
            '4mm': $4000_40C_10M_100SM + POLIC_4MM_10M,
            '0mm': $4000_40C_10M_100SM - (SHEET_1_3MM * 6),
          },
          '67sm': {
            '3mm': $4000_40C_10M_67SM,
            '4mm': $4000_40C_10M_67SM + POLIC_4MM_10M,
            '0mm': $4000_40C_10M_67SM - (SHEET_1_3MM * 6),
          },
          '50sm': {
            '3mm': $4000_40C_10M_50SM,
            '4mm': $4000_40C_10M_50SM + POLIC_4MM_10M,
            '0mm': $4000_40C_10M_50SM - (SHEET_1_3MM * 6),
          },
        },
      },
      'one-piece': {
        '4m': {
          '100sm': {
            '3mm': $4000_40C_4M_100SM + SHIPPING_MAX,
            '4mm': $4000_40C_4M_100SM + POLIC_4MM_4M + SHIPPING_MAX,
            '0mm': $4000_40C_4M_100SM + SHIPPING_MAX - (SHEET_1_3MM * 3),
          },
          '67sm': {
            '3mm': $4000_40C_4M_67SM + SHIPPING_MAX,
            '4mm': $4000_40C_4M_67SM + POLIC_4MM_4M + SHIPPING_MAX,
            '0mm': $4000_40C_4M_67SM + SHIPPING_MAX - (SHEET_1_3MM * 3),
          },
          '50sm': {
            '3mm': $4000_40C_4M_50SM + SHIPPING_MAX,
            '4mm': $4000_40C_4M_50SM + POLIC_4MM_4M + SHIPPING_MAX,
            '0mm': $4000_40C_4M_50SM + SHIPPING_MAX - (SHEET_1_3MM * 3),
          },
        },
        '6m': {
          '100sm': {
            '3mm': $4000_40C_6M_100SM + SHIPPING_MAX,
            '4mm': $4000_40C_6M_100SM + POLIC_4MM_6M + SHIPPING_MAX,
            '0mm': $4000_40C_6M_100SM + SHIPPING_MAX - (SHEET_1_3MM * 4),
          },
          '67sm': {
            '3mm': $4000_40C_6M_67SM + SHIPPING_MAX,
            '4mm': $4000_40C_6M_67SM + POLIC_4MM_6M + SHIPPING_MAX,
            '0mm': $4000_40C_6M_67SM + SHIPPING_MAX - (SHEET_1_3MM * 4),
          },
          '50sm': {
            '3mm': $4000_40C_6M_50SM + SHIPPING_MAX,
            '4mm': $4000_40C_6M_50SM + POLIC_4MM_6M + SHIPPING_MAX,
            '0mm': $4000_40C_6M_50SM + SHIPPING_MAX - (SHEET_1_3MM * 4),
          },
        },
        '8m': {
          '100sm': {
            '3mm': $4000_40C_8M_100SM + SHIPPING_MAX,
            '4mm': $4000_40C_8M_100SM + POLIC_4MM_8M + SHIPPING_MAX,
            '0mm': $4000_40C_8M_100SM + SHIPPING_MAX - (SHEET_1_3MM * 5),
          },
          '67sm': {
            '3mm': $4000_40C_8M_67SM + SHIPPING_MAX,
            '4mm': $4000_40C_8M_67SM + POLIC_4MM_8M + SHIPPING_MAX,
            '0mm': $4000_40C_8M_67SM + SHIPPING_MAX - (SHEET_1_3MM * 5),
          },
          '50sm': {
            '3mm': $4000_40C_8M_50SM + SHIPPING_MAX,
            '4mm': $4000_40C_8M_50SM + POLIC_4MM_8M + SHIPPING_MAX,
            '0mm': $4000_40C_8M_50SM + SHIPPING_MAX - (SHEET_1_3MM * 5),
          },
        },
        '10m': {
          '100sm': {
            '3mm': $4000_40C_10M_100SM + SHIPPING_MAX,
            '4mm': $4000_40C_10M_100SM + POLIC_4MM_10M + SHIPPING_MAX,
            '0mm': $4000_40C_10M_100SM + SHIPPING_MAX - (SHEET_1_3MM * 6),
          },
          '67sm': {
            '3mm': $4000_40C_10M_67SM + SHIPPING_MAX,
            '4mm': $4000_40C_10M_67SM + POLIC_4MM_10M + SHIPPING_MAX,
            '0mm': $4000_40C_10M_67SM + SHIPPING_MAX - (SHEET_1_3MM * 6),
          },
          '50sm': {
            '3mm': $4000_40C_10M_50SM + SHIPPING_MAX,
            '4mm': $4000_40C_10M_50SM + POLIC_4MM_10M + SHIPPING_MAX,
            '0mm': $4000_40C_10M_50SM + SHIPPING_MAX - (SHEET_1_3MM * 6),
          },
        },
      }
    },
    '20d': {
      'demountable': {
        '4m': {
          '100sm': {
            '3mm': $20D_4M_100SM,
            '4mm': $20D_4M_100SM + POLIC_DK_4MM_4M,
            '6mm': $20D_4M_100SM + POLIC_DK_6MM_4M,
            '0mm': $20D_4M_100SM - (SHEET_1_3MM * 4),
          },
          '67sm': {
            '3mm': $20D_4M_67SM,
            '4mm': $20D_4M_67SM + POLIC_DK_4MM_4M,
            '6mm': $20D_4M_67SM + POLIC_DK_6MM_4M,
            '0mm': $20D_4M_67SM - (SHEET_1_3MM * 4),
          },
        },
        '6m': {
          '100sm': {
            '3mm': $20D_6M_100SM,
            '4mm': $20D_6M_100SM + POLIC_DK_4MM_6M,
            '6mm': $20D_6M_100SM + POLIC_DK_6MM_6M,
            '0mm': $20D_6M_100SM - (SHEET_1_3MM * 5),
          },
          '67sm': {
            '3mm': $20D_6M_67SM,
            '4mm': $20D_6M_67SM + POLIC_DK_4MM_6M,
            '6mm': $20D_6M_67SM + POLIC_DK_6MM_6M,
            '0mm': $20D_6M_67SM - (SHEET_1_3MM * 5),
          },
        },
        '8m': {
          '100sm': {
            '3mm': $20D_8M_100SM,
            '4mm': $20D_8M_100SM + POLIC_DK_4MM_8M,
            '6mm': $20D_8M_100SM + POLIC_DK_6MM_8M,
            '0mm': $20D_8M_100SM - (SHEET_1_3MM * 6),
          },
          '67sm': {
            '3mm': $20D_8M_67SM,
            '4mm': $20D_8M_67SM + POLIC_DK_4MM_8M,
            '6mm': $20D_8M_67SM + POLIC_DK_6MM_8M,
            '0mm': $20D_8M_67SM - (SHEET_1_3MM * 6),
          },
        },
        '10m': {
          '100sm': {
            '3mm': $20D_10M_100SM,
            '4mm': $20D_10M_100SM + POLIC_DK_4MM_10M,
            '6mm': $20D_10M_100SM + POLIC_DK_6MM_10M,
            '0mm': $20D_10M_100SM - (SHEET_1_3MM * 7),
          },
          '67sm': {
            '3mm': $20D_10M_67SM,
            '4mm': $20D_10M_67SM + POLIC_DK_4MM_10M,
            '6mm': $20D_10M_67SM + POLIC_DK_6MM_10M,
            '0mm': $20D_10M_67SM - (SHEET_1_3MM * 7),
          },
        },
      },
      'one-piece': {
        '4m': {
          '100sm': {
            '3mm': $20D_4M_100SM + SHIPPING_MID,
            '4mm': $20D_4M_100SM + POLIC_DK_4MM_4M + SHIPPING_MID,
            '6mm': $20D_4M_100SM + POLIC_DK_6MM_4M + SHIPPING_MID,
            '0mm': $20D_4M_100SM + SHIPPING_MID - (SHEET_1_3MM * 4),
          },
          '67sm': {
            '3mm': $20D_4M_67SM + SHIPPING_MID,
            '4mm': $20D_4M_67SM + POLIC_DK_4MM_4M + SHIPPING_MID,
            '6mm': $20D_4M_67SM + POLIC_DK_6MM_4M + SHIPPING_MID,
            '0mm': $20D_4M_67SM + SHIPPING_MID - (SHEET_1_3MM * 4),
          },
        },
        '6m': {
          '100sm': {
            '3mm': $20D_6M_100SM + SHIPPING_MID,
            '4mm': $20D_6M_100SM + POLIC_DK_4MM_6M + SHIPPING_MID,
            '6mm': $20D_6M_100SM + POLIC_DK_6MM_6M + SHIPPING_MID,
            '0mm': $20D_6M_100SM + SHIPPING_MID - (SHEET_1_3MM * 5),
          },
          '67sm': {
            '3mm': $20D_6M_67SM + SHIPPING_MID,
            '4mm': $20D_6M_67SM + POLIC_DK_4MM_6M + SHIPPING_MID,
            '6mm': $20D_6M_67SM + POLIC_DK_6MM_6M + SHIPPING_MID,
            '0mm': $20D_6M_67SM + SHIPPING_MID - (SHEET_1_3MM * 5),
          },
        },
        '8m': {
          '100sm': {
            '3mm': $20D_8M_100SM + SHIPPING_MID,
            '4mm': $20D_8M_100SM + POLIC_DK_4MM_8M + SHIPPING_MID,
            '6mm': $20D_8M_100SM + POLIC_DK_6MM_8M + SHIPPING_MID,
            '0mm': $20D_8M_100SM + SHIPPING_MID - (SHEET_1_3MM * 6),
          },
          '67sm': {
            '3mm': $20D_8M_67SM + SHIPPING_MID,
            '4mm': $20D_8M_67SM + POLIC_DK_4MM_8M + SHIPPING_MID,
            '6mm': $20D_8M_67SM + POLIC_DK_6MM_8M + SHIPPING_MID,
            '0mm': $20D_8M_67SM + SHIPPING_MID - (SHEET_1_3MM * 6),
          },
        },
        '10m': {
          '100sm': {
            '3mm': $20D_10M_100SM + SHIPPING_MID,
            '4mm': $20D_10M_100SM + POLIC_DK_4MM_10M + SHIPPING_MID,
            '6mm': $20D_10M_100SM + POLIC_DK_6MM_10M + SHIPPING_MID,
            '0mm': $20D_10M_100SM + SHIPPING_MID - (SHEET_1_3MM * 7),
          },
          '67sm': {
            '3mm': $20D_10M_67SM + SHIPPING_MID,
            '4mm': $20D_10M_67SM + POLIC_DK_4MM_10M + SHIPPING_MID,
            '6mm': $20D_10M_67SM + POLIC_DK_6MM_10M + SHIPPING_MID,
            '0mm': $20D_10M_67SM + SHIPPING_MID - (SHEET_1_3MM * 7),
          },
        },
      }
    },
    '20df': {
      'demountable': {
        '4m': {
          '67sm': {
            '3mm': $20DF_4M_67SM,
            '4mm': $20DF_4M_67SM + POLIC_DK_4MM_4M,
            '6mm': $20DF_4M_67SM + POLIC_DK_6MM_4M,
            '0mm': $20DF_4M_67SM - (SHEET_1_3MM * 4),
          },
        },
        '6m': {
          '67sm': {
            '3mm': $20DF_6M_67SM,
            '4mm': $20DF_6M_67SM + POLIC_DK_4MM_6M,
            '6mm': $20DF_6M_67SM + POLIC_DK_6MM_6M,
            '0mm': $20DF_6M_67SM - (SHEET_1_3MM * 5),
          },
        },
        '8m': {
          '67sm': {
            '3mm': $20DF_8M_67SM,
            '4mm': $20DF_8M_67SM + POLIC_DK_4MM_8M,
            '6mm': $20DF_8M_67SM + POLIC_DK_6MM_8M,
            '0mm': $20DF_8M_67SM - (SHEET_1_3MM * 6),
          },
        },
        '10m': {
          '67sm': {
            '3mm': $20DF_10M_67SM,
            '4mm': $20DF_10M_67SM + POLIC_DK_4MM_10M,
            '6mm': $20DF_10M_67SM + POLIC_DK_6MM_10M,
            '0mm': $20DF_10M_67SM - (SHEET_1_3MM * 7),
          },
        },
      },
      'one-piece': {
        '4m': {
          '67sm': {
            '3mm': $20DF_4M_67SM + SHIPPING_MID,
            '4mm': $20DF_4M_67SM + POLIC_DK_4MM_4M + SHIPPING_MID,
            '6mm': $20DF_4M_67SM + POLIC_DK_6MM_4M + SHIPPING_MID,
            '0mm': $20DF_4M_67SM + SHIPPING_MID - (SHEET_1_3MM * 4),
          },
        },
        '6m': {
          '67sm': {
            '3mm': $20DF_6M_67SM + SHIPPING_MID,
            '4mm': $20DF_6M_67SM + POLIC_DK_4MM_6M + SHIPPING_MID,
            '6mm': $20DF_6M_67SM + POLIC_DK_6MM_6M + SHIPPING_MID,
            '0mm': $20DF_6M_67SM + SHIPPING_MID - (SHEET_1_3MM * 5),
          },
        },
        '8m': {
          '67sm': {
            '3mm': $20DF_8M_67SM + SHIPPING_MID,
            '4mm': $20DF_8M_67SM + POLIC_DK_4MM_8M + SHIPPING_MID,
            '6mm': $20DF_8M_67SM + POLIC_DK_6MM_8M + SHIPPING_MID,
            '0mm': $20DF_8M_67SM + SHIPPING_MID - (SHEET_1_3MM * 6),
          },
        },
        '10m': {
          '67sm': {
            '3mm': $20DF_10M_67SM + SHIPPING_MID,
            '4mm': $20DF_10M_67SM + POLIC_DK_4MM_10M + SHIPPING_MID,
            '6mm': $20DF_10M_67SM + POLIC_DK_6MM_10M + SHIPPING_MID,
            '0mm': $20DF_10M_67SM + SHIPPING_MID - (SHEET_1_3MM * 7),
          },
        },
      }
    },
    '40dk': {
      'demountable': {
        '4m': {
          '100sm': {
            '3mm': $40DK_4M_100SM,
            '4mm': $40DK_4M_100SM + POLIC_DK_4MM_4M,
            '6mm': $40DK_4M_100SM + POLIC_DK_6MM_4M,
            '0mm': $40DK_4M_100SM - (SHEET_1_3MM * 4),
          },
        },
        '6m': {
          '100sm': {
            '3mm': $40DK_6M_100SM,
            '4mm': $40DK_6M_100SM + POLIC_DK_4MM_6M,
            '6mm': $40DK_6M_100SM + POLIC_DK_6MM_6M,
            '0mm': $40DK_6M_100SM - (SHEET_1_3MM * 5),
          },
        },
        '8m': {
          '100sm': {
            '3mm': $40DK_8M_100SM,
            '4mm': $40DK_8M_100SM + POLIC_DK_4MM_8M,
            '6mm': $40DK_8M_100SM + POLIC_DK_6MM_8M,
            '0mm': $40DK_8M_100SM - (SHEET_1_3MM * 6),
          },
        },
        '10m': {
          '100sm': {
            '3mm': $40DK_10M_100SM,
            '4mm': $40DK_10M_100SM + POLIC_DK_4MM_10M,
            '6mm': $40DK_10M_100SM + POLIC_DK_6MM_10M,
            '0mm': $40DK_10M_100SM - (SHEET_1_3MM * 7),
          },
        },
      },
      'one-piece': {
        '4m': {
          '100sm': {
            '3mm': $40DK_4M_100SM + SHIPPING_MID,
            '4mm': $40DK_4M_100SM + POLIC_DK_4MM_4M + SHIPPING_MID,
            '6mm': $40DK_4M_100SM + POLIC_DK_6MM_4M + SHIPPING_MID,
            '0mm': $40DK_4M_100SM + SHIPPING_MID - (SHEET_1_3MM * 4),
          },
        },
        '6m': {
          '100sm': {
            '3mm': $40DK_6M_100SM + SHIPPING_MID,
            '4mm': $40DK_6M_100SM + POLIC_DK_4MM_6M + SHIPPING_MID,
            '6mm': $40DK_6M_100SM + POLIC_DK_6MM_6M + SHIPPING_MID,
            '0mm': $40DK_6M_100SM + SHIPPING_MID - (SHEET_1_3MM * 5),
          },
        },
        '8m': {
          '100sm': {
            '3mm': $40DK_8M_100SM + SHIPPING_MID,
            '4mm': $40DK_8M_100SM + POLIC_DK_4MM_8M + SHIPPING_MID,
            '6mm': $40DK_8M_100SM + POLIC_DK_6MM_8M + SHIPPING_MID,
            '0mm': $40DK_8M_100SM + SHIPPING_MID - (SHEET_1_3MM * 6),
          },
        },
        '10m': {
          '100sm': {
            '3mm': $40DK_10M_100SM + SHIPPING_MID,
            '4mm': $40DK_10M_100SM + POLIC_DK_4MM_10M + SHIPPING_MID,
            '6mm': $40DK_10M_100SM + POLIC_DK_6MM_10M + SHIPPING_MID,
            '0mm': $40DK_10M_100SM + SHIPPING_MID - (SHEET_1_3MM * 7),
          },
        },
      }
    },
    '40-a': {
      'demountable': {
        '4m': {
          '100sm': {
            '3mm': $40A_4M_100SM,
            '4mm': $40A_4M_100SM + POLIC_4MM_4M,
            '6mm': $40A_4M_100SM + POLIC_6MM_4M,
            '0mm': $40A_4M_100SM - (SHEET_1_3MM * 3),
          },
          '67sm': {
            '3mm': $40A_4M_67SM,
            '4mm': $40A_4M_67SM + POLIC_4MM_4M,
            '6mm': $40A_4M_67SM + POLIC_6MM_4M,
            '0mm': $40A_4M_67SM - (SHEET_1_3MM * 3),
          },
        },
        '6m': {
          '100sm': {
            '3mm': $40A_6M_100SM,
            '4mm': $40A_6M_100SM + POLIC_4MM_6M,
            '6mm': $40A_6M_100SM + POLIC_6MM_6M,
            '0mm': $40A_6M_100SM - (SHEET_1_3MM * 4),
          },
          '67sm': {
            '3mm': $40A_6M_67SM,
            '4mm': $40A_6M_67SM + POLIC_4MM_6M,
            '6mm': $40A_6M_67SM + POLIC_6MM_6M,
            '0mm': $40A_6M_67SM - (SHEET_1_3MM * 4),
          },
        },
        '8m': {
          '100sm': {
            '3mm': $40A_8M_100SM,
            '4mm': $40A_8M_100SM + POLIC_4MM_8M,
            '6mm': $40A_8M_100SM + POLIC_6MM_8M,
            '0mm': $40A_8M_100SM - (SHEET_1_3MM * 5),
          },
          '67sm': {
            '3mm': $40A_8M_67SM,
            '4mm': $40A_8M_67SM + POLIC_4MM_8M,
            '6mm': $40A_8M_67SM + POLIC_6MM_8M,
            '0mm': $40A_8M_67SM - (SHEET_1_3MM * 5),
          },
        },
        '10m': {
          '100sm': {
            '3mm': $40A_10M_100SM,
            '4mm': $40A_10M_100SM + POLIC_4MM_10M,
            '6mm': $40A_10M_100SM + POLIC_6MM_10M,
            '0mm': $40A_10M_100SM - (SHEET_1_3MM * 6),
          },
          '67sm': {
            '3mm': $40A_10M_67SM,
            '4mm': $40A_10M_67SM + POLIC_4MM_10M,
            '6mm': $40A_10M_67SM + POLIC_6MM_10M,
            '0mm': $40A_10M_67SM - (SHEET_1_3MM * 6),
          },
        },
      },
      'one-piece': {
        '4m': {
          '100sm': {
            '3mm': $40A_4M_100SM + SHIPPING_MID,
            '4mm': $40A_4M_100SM + SHIPPING_MID + POLIC_4MM_4M,
            '6mm': $40A_4M_100SM + SHIPPING_MID + POLIC_6MM_4M,
            '0mm': $40A_4M_100SM + SHIPPING_MID - (SHEET_1_3MM * 3),
          },
          '67sm': {
            '3mm': $40A_4M_67SM + SHIPPING_MID,
            '4mm': $40A_4M_67SM + SHIPPING_MID + POLIC_4MM_4M,
            '6mm': $40A_4M_67SM + SHIPPING_MID + POLIC_6MM_4M,
            '0mm': $40A_4M_67SM + SHIPPING_MID - (SHEET_1_3MM * 3),
          },
        },
        '6m': {
          '100sm': {
            '3mm': $40A_6M_100SM + SHIPPING_MID,
            '4mm': $40A_6M_100SM + SHIPPING_MID + POLIC_4MM_6M,
            '6mm': $40A_6M_100SM + SHIPPING_MID + POLIC_6MM_6M,
            '0mm': $40A_6M_100SM + SHIPPING_MID - (SHEET_1_3MM * 4),
          },
          '67sm': {
            '3mm': $40A_6M_67SM + SHIPPING_MID,
            '4mm': $40A_6M_67SM + SHIPPING_MID + POLIC_4MM_6M,
            '6mm': $40A_6M_67SM + SHIPPING_MID + POLIC_6MM_6M,
            '0mm': $40A_6M_67SM + SHIPPING_MID - (SHEET_1_3MM * 4),
          },
        },
        '8m': {
          '100sm': {
            '3mm': $40A_8M_100SM + SHIPPING_MID,
            '4mm': $40A_8M_100SM + SHIPPING_MID + POLIC_4MM_8M,
            '6mm': $40A_8M_100SM + SHIPPING_MID + POLIC_6MM_8M,
            '0mm': $40A_8M_100SM + SHIPPING_MID - (SHEET_1_3MM * 5),
          },
          '67sm': {
            '3mm': $40A_8M_67SM + SHIPPING_MID,
            '4mm': $40A_8M_67SM + SHIPPING_MID + POLIC_4MM_8M,
            '6mm': $40A_8M_67SM + SHIPPING_MID + POLIC_6MM_8M,
            '0mm': $40A_8M_67SM + SHIPPING_MID - (SHEET_1_3MM * 5),
          },
        },
        '10m': {
          '100sm': {
            '3mm': $40A_10M_100SM + SHIPPING_MID,
            '4mm': $40A_10M_100SM + SHIPPING_MID + POLIC_4MM_10M,
            '6mm': $40A_10M_100SM + SHIPPING_MID + POLIC_6MM_10M,
            '0mm': $40A_10M_100SM + SHIPPING_MID - (SHEET_1_3MM * 6),
          },
          '67sm': {
            '3mm': $40A_10M_67SM + SHIPPING_MID,
            '4mm': $40A_10M_67SM + SHIPPING_MID + POLIC_4MM_10M,
            '6mm': $40A_10M_67SM + SHIPPING_MID + POLIC_6MM_10M,
            '0mm': $40A_10M_67SM + SHIPPING_MID - (SHEET_1_3MM * 6),
          },
        },
      }
    },
    '40-ak': {
      'demountable': {
        '4m': {
          '100sm': {
            '3mm': $40AK_4M_100SM,
            '4mm': $40AK_4M_100SM + POLIC_4MM_4M,
            '6mm': $40AK_4M_100SM + POLIC_6MM_4M,
            '0mm': $40AK_4M_100SM - (SHEET_1_3MM * 3),
          },
          '67sm': {
            '3mm': $40AK_4M_67SM,
            '4mm': $40AK_4M_67SM + POLIC_4MM_4M,
            '6mm': $40AK_4M_67SM + POLIC_6MM_4M,
            '0mm': $40AK_4M_67SM - (SHEET_1_3MM * 3),
          },
        },
        '6m': {
          '100sm': {
            '3mm': $40AK_6M_100SM,
            '4mm': $40AK_6M_100SM + POLIC_4MM_6M,
            '6mm': $40AK_6M_100SM + POLIC_6MM_6M,
            '0mm': $40AK_6M_100SM - (SHEET_1_3MM * 4),
          },
          '67sm': {
            '3mm': $40AK_6M_67SM,
            '4mm': $40AK_6M_67SM + POLIC_4MM_6M,
            '6mm': $40AK_6M_67SM + POLIC_6MM_6M,
            '0mm': $40AK_6M_67SM - (SHEET_1_3MM * 4),
          },
        },
        '8m': {
          '100sm': {
            '3mm': $40AK_8M_100SM,
            '4mm': $40AK_8M_100SM + POLIC_4MM_8M,
            '6mm': $40AK_8M_100SM + POLIC_6MM_8M,
            '0mm': $40AK_8M_100SM - (SHEET_1_3MM * 5),
          },
          '67sm': {
            '3mm': $40AK_8M_67SM,
            '4mm': $40AK_8M_67SM + POLIC_4MM_8M,
            '6mm': $40AK_8M_67SM + POLIC_6MM_8M,
            '0mm': $40AK_8M_67SM - (SHEET_1_3MM * 5),
          },
        },
        '10m': {
          '100sm': {
            '3mm': $40AK_10M_100SM,
            '4mm': $40AK_10M_100SM + POLIC_4MM_10M,
            '6mm': $40AK_10M_100SM + POLIC_6MM_10M,
            '0mm': $40AK_10M_100SM - (SHEET_1_3MM * 6),
          },
          '67sm': {
            '3mm': $40A_10M_67SM,
            '4mm': $40A_10M_67SM + POLIC_4MM_10M,
            '6mm': $40A_10M_67SM + POLIC_6MM_10M,
            '0mm': $40A_10M_67SM - (SHEET_1_3MM * 6),
          },
        },
      },
      'one-piece': {
        '4m': {
          '100sm': {
            '3mm': $40AK_4M_100SM + SHIPPING_MID,
            '4mm': $40AK_4M_100SM + SHIPPING_MID + POLIC_4MM_4M,
            '6mm': $40AK_4M_100SM + SHIPPING_MID + POLIC_6MM_4M,
            '0mm': $40AK_4M_100SM + SHIPPING_MID - (SHEET_1_3MM * 3),
          },
          '67sm': {
            '3mm': $40AK_4M_67SM + SHIPPING_MID,
            '4mm': $40AK_4M_67SM + SHIPPING_MID + POLIC_4MM_4M,
            '6mm': $40AK_4M_67SM + SHIPPING_MID + POLIC_6MM_4M,
            '0mm': $40AK_4M_67SM + SHIPPING_MID - (SHEET_1_3MM * 3),
          },
        },
        '6m': {
          '100sm': {
            '3mm': $40AK_6M_100SM + SHIPPING_MID,
            '4mm': $40AK_6M_100SM + SHIPPING_MID + POLIC_4MM_6M,
            '6mm': $40AK_6M_100SM + SHIPPING_MID + POLIC_6MM_6M,
            '0mm': $40AK_6M_100SM + SHIPPING_MID - (SHEET_1_3MM * 4),
          },
          '67sm': {
            '3mm': $40AK_6M_67SM + SHIPPING_MID,
            '4mm': $40AK_6M_67SM + SHIPPING_MID + POLIC_4MM_6M,
            '6mm': $40AK_6M_67SM + SHIPPING_MID + POLIC_6MM_6M,
            '0mm': $40AK_6M_67SM + SHIPPING_MID - (SHEET_1_3MM * 4),
          },
        },
        '8m': {
          '100sm': {
            '3mm': $40AK_8M_100SM + SHIPPING_MID,
            '4mm': $40AK_8M_100SM + SHIPPING_MID + POLIC_4MM_8M,
            '6mm': $40AK_8M_100SM + SHIPPING_MID + POLIC_6MM_8M,
            '0mm': $40AK_8M_100SM + SHIPPING_MID - (SHEET_1_3MM * 5),
          },
          '67sm': {
            '3mm': $40AK_8M_67SM + SHIPPING_MID,
            '4mm': $40AK_8M_67SM + SHIPPING_MID + POLIC_4MM_8M,
            '6mm': $40AK_8M_67SM + SHIPPING_MID + POLIC_6MM_8M,
            '0mm': $40AK_8M_67SM + SHIPPING_MID - (SHEET_1_3MM * 5),
          },
        },
        '10m': {
          '100sm': {
            '3mm': $40AK_10M_100SM + SHIPPING_MID,
            '4mm': $40AK_10M_100SM + SHIPPING_MID + POLIC_4MM_10M,
            '6mm': $40AK_10M_100SM + SHIPPING_MID + POLIC_6MM_10M,
            '0mm': $40AK_10M_100SM + SHIPPING_MID - (SHEET_1_3MM * 6),
          },
          '67sm': {
            '3mm': $40AK_10M_67SM + SHIPPING_MID,
            '4mm': $40AK_10M_67SM + SHIPPING_MID + POLIC_4MM_10M,
            '6mm': $40AK_10M_67SM + SHIPPING_MID + POLIC_6MM_10M,
            '0mm': $40AK_10M_67SM + SHIPPING_MID - (SHEET_1_3MM * 6),
          },
        },
      }
    },
  },
}