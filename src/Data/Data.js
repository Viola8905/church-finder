// 





const Data = [
  {
    city: "Ужгород",
    region: "ужгородський",
    churches: [
      {
        name: "Храм Святої Тройці (м-н Шахта)",
        address: "вул.Тімірязєва, 8 ",
        src: "",
        img: "",
      },
      {
        name: "Єпархіальний Храм прп.Амфілохія Почаївського",
        address: "вул.Станційна,16 а ",
        src: "",
        img: "",
      },
      {
        name: "Храм Преображення Господнього",
        address: "вул.Р.Шухевича,8 Б. ",
        src: "",
        img: "",
      },
      {
        name: "Свято-Троїцький храм",
        address: "вул.Київська набережна, 16 ",
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2637.438665357658!2d22.263901144185706!3d48.62058722653705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473919a3b38202a7%3A0x7b8a657fdbb9568!2z0KHQstGP0YLQviDQotGA0L7QuNGG0LrQuNC5INGF0YDQsNC8!5e0!3m2!1sru!2sua!4v1650375121159!5m2!1sru!2sua",
        img: "",
      },
      {
        name: "Храм св.першомученика і архідиякона Стефана",
        address: "вул.Київська набережна, 16 ",
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2637.438665357658!2d22.263901144185706!3d48.62058722653705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473919a3b38202a7%3A0x7b8a657fdbb9568!2z0KHQstGP0YLQviDQotGA0L7QuNGG0LrQuNC5INGF0YDQsNC8!5e0!3m2!1sru!2sua!4v1650375121159!5m2!1sru!2sua",
        img: "с.Минай/вул.Коротка,1 Д.",
      },
    ],
  },
  {
    city: "Перечин",
    region: "ужгородський",
    churches: [
      {
        name: " Храм Покрови Пресвятої Богородиці",
        address: "вул.Лермонтова,14",
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1556.3650309182394!2d22.489910616970356!3d48.74128547780134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4739130b82af8a3f%3A0x8275fbe767cdbf74!2sUkrayins%CA%B9ka%20Pravoslavna%20Tserkva%20Kyyivs%CA%B9koho%20Patriarkhatu!5e0!3m2!1sru!2sua!4v1650275719453!5m2!1sru!2sua",
        img: "",
      },
    ],
  },
  {
    city: "Сімер",
    region: "ужгородський",
    churches: [
      {
        name: " Храм св.вмч.Параскеви-П'ятниці",
        address: "вул.Зарічна,46.",
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10526.396311181725!2d22.508193269775393!3d48.73225199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473912ff59b38dbf%3A0x95ddb8541676d43b!2sRelihiyna%20Hromada%20Ukrayins%CA%B9koyi%20Pravoslavnoyi%20Tserkvy%20Svyato-Pokrovs%CA%B9koyi%20Tserkvy%20S.%20Simer%20Perechyns%CA%B9koho%20Rayonu!5e0!3m2!1sru!2sua!4v1650276937921!5m2!1sru!2sua",
        img: "",
      },
    ],
  },
  {
    city: "Мукачево",
    region: "мукачівський",
    churches: [
      {
        name: " Храм Успіння Пресвятої Богородиці",
        address: "вул.Я.Мудрого,42 а.",
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10588.373633712763!2d22.707202369775395!3d48.43554699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4739ab7fd4163e8d%3A0x62cd39a2c8ca9e66!2sUspens%CA%B9ka%20Tserkva%20Ptsu!5e0!3m2!1sru!2sua!4v1650276783086!5m2!1sru!2sua",
        img: "",
      },
      {
        name: " Храм Преображення Господнього",
        address: "вул.І.Франка, бічна",
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2222.759560625994!2d22.731656203069534!3d48.41994935044984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4739ac933ec9e26d%3A0xd5d8c7b5e86339fb!2sKhram%20Preobrazhennya%20Hospodn%CA%B9oho%20Ptsu!5e0!3m2!1sru!2sua!4v1650276695079!5m2!1sru!2sua",
        img: "",
      },
    ],
  },
  {
    city: "Свалява",
    region: "мукачівський",
    churches: [
      {
        name: "Храм св. пророка і предтечі Господнього Івана Хрестителя",
        address: "вул.Асталоша,24.",
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.4437300486697!2d22.98819422548959!3d48.545541781484815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x10d283e14a3b3d91!2z0KbQtdGA0LrQstCwINCg0ZbQt9C00LLQsCDQn9GA0LXRgdCy0Y_RgtC-0Zcg0JHQvtCz0L7RgNC-0LTQuNGG0ZY!5e0!3m2!1suk!2sua!4v1650393467264!5m2!1suk!2sua",
        img: "",
      },
    ],
  },
  {
    city: "с.Пилипець",
    region: "хустський",
    churches: [
      {
        name: "Храм Різдва Пресвятої Богородиці",
        address: " с.Пилипець № 362.",
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2634.8595348775675!2d23.3325265318665!3d48.669929035319555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4739eb412556a685%3A0x58f090f367350441!2z0KXRgNCw0Lwg0KHQstGP0YLQvi3QoNC-0LbQtNC10YHRgtCy0LAg0JHQvtCz0L7RgNC-0LTQuNGG0ZY!5e0!3m2!1suk!2sua!4v1650393682831!5m2!1suk!2sua",
        img: "",
      },
    ],
  },
  {
    city: "Берегово",
    region: "берегівський",
    churches: [
      {
        name: "Свято-Троїцько-Михайлівський храм",
        address: " вул.Можайського,52 ",
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.595178097989!2d22.649864915380146!3d48.195150855128745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473844d6a3dd715f%3A0x473e34d1eebc92a5!2z0KHQstGP0YLQvi3QotGA0L7QuNGG0LrQvtCc0LjRhdCw0LnQu9C-0LLRgdC60LjQuSDQodC-0LHQvtGA!5e0!3m2!1sru!2sua!4v1650380744125!5m2!1sru!2sua",
        img: "https://www.google.com/maps/place/%D0%A1%D0%B2%D1%8F%D1%82%D0%BE-%D0%A2%D1%80%D0%BE%D0%B8%D1%86%D0%BA%D0%BE%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9+%D0%A1%D0%BE%D0%B1%D0%BE%D1%80/@48.1951473,22.6520536,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipPajNv9sZaOl_Z4VsH0mq0eCOUAK2gqn3pe7kFq!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPajNv9sZaOl_Z4VsH0mq0eCOUAK2gqn3pe7kFq%3Dw121-h86-k-no!7i1054!8i746!4m9!1m2!2m1!1z0JHQtdGA0LXQs9C-0LLQviDRhtC10YDQutCy0LA!3m5!1s0x473844d6a3dd715f:0x473e34d1eebc92a5!8m2!3d48.1951439!4d22.6520279!15sCh3QkdC10YDQtdCz0L7QstC-INGG0LXRgNC60LLQsJIBD29ydGhvZG94X2NodXJjaA!5m1!1e1#",
      },
    ],
  },
  {
    city: "Виноградів",
    region: "берегівський",
    churches: [
      {
        name: "Храм Успіння Пресвятої Богородиці ",
        address: "вул.І.Франка,1.",
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.4502363165684!2d23.03630831573407!3d48.140124558962455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47383a676f30b953%3A0xa65a818fba1d1474!2sKhram%20Uspinnya%20Presvyatoyi%20Bohorodytsi.%20Upts.!5e0!3m2!1sru!2sua!4v1650279450838!5m2!1sru!2sua",
        img: "https://www.google.com/maps/place/Khram+Uspinnya+Presvyatoyi+Bohorodytsi.+Upts./@48.140121,23.038497,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipOtBRraS7twKMwQO53dWESMLrI8s-YEmeqJPuf0!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOtBRraS7twKMwQO53dWESMLrI8s-YEmeqJPuf0%3Dw114-h86-k-no!7i3264!8i2448!4m5!3m4!1s0x47383a676f30b953:0xa65a818fba1d1474!8m2!3d48.140161!4d23.0385061!5m1!1e1#",
      },
    ],
  },
  {
    city: "Іршава",
    region: "іршавський",
    churches: [
      {
        name: "Храм святих апостолів Петра і Павла ",
        address: "вул.Шкільна ",
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1106.0822188968766!2d23.047560121082157!3d48.310271655969814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4738353c947f6d5d%3A0x30105f8e1b105b56!2z0LLRg9C7LiDQqNC60ZbQu9GM0L3QsCwg0IbRgNGI0LDQstCwLCDQl9Cw0LrQsNGA0L_QsNGC0YHRjNC60LAg0L7QsdC70LDRgdGC0Yw!5e0!3m2!1sru!2sua!4v1650279696555!5m2!1sru!2sua",
        img: "https://karpaty.rocks/sites/default/files/photo/history/cerkva_petra_i_pavla_irshava_0.jpg",
      },
    ],
  },
  {
    city: "Хуст",
    region: "хустський",
    churches: [
      {
        name: "Храм св.вмч.Катерини ",
        address: "вул.Колгоспна,2",
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4344.821653717512!2d23.2932380821789!3d48.17418047840452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4738294310c1a739%3A0x900a91ee477ded1f!2sBlahovishchens%CA%B9ka%20Tserkva.%20Upts.!5e0!3m2!1sru!2sua!4v1650280021310!5m2!1sru!2sua", //під питанням
        img: "немає фото",
      },
    ],
  },
  {
    city: "Тячів",
    region: "тячівський",
    churches: [
      {
        name: "Храм св.вмч.Варвари",
        address: " вул.Леонтовича,108.",
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10675.105934083596!2d23.564766736673594!3d48.01802802044473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4737912d248897a9%3A0xe1a7fe3e4d4af8a5!2sKhram%20Svyatoyi%20Velykomuchenytsi%20Varvary%2C%20Zakarpat%C2%B7s%CA%B9ka%20Yeparkhiya%20Pravoslavnoyi%20Tserkvy%20Ukrayiny!5e0!3m2!1sru!2sua!4v1650382674145!5m2!1sru!2sua",
        img: "немає фото",
      },
    ],
  },
  {
    city: "смт.Буштино",
    region: "тячівський",
    churches: [
      {
        name: "Храм св.вмч.Пантелеймона Цілителя",
        address: "вул.Головна,444",
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10666.37121169082!2d23.45910463669714!3d48.0601994587526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47378f597874b46d%3A0xa0fcccdbefd82c17!2sUkrayins%CA%B9ka%20Pravoslavna%20Tserkva%20Svyatoho%20Velykomuchenyka%20Panteleymona%20Ptsu!5e0!3m2!1sru!2sua!4v1650382552502!5m2!1sru!2sua",
        img: "data:image/jpeg;base64,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",
      },
    ],
  },
  {
    city: "с.Нересниця",
    region: "тячівський",
    churches: [
      {
        name: "Храм Різдва св.Івана Предтечі.",
        address: "вул.Грушевського,207 ",
        src: "",
        img: "немає зображення",
      },
    ],
  },
  {
    city: "смт.Великий Бичків",
    region: "рахівський",
    churches: [
      {
        name: "Храм св.пророка Іллі",
        address: " вул.Гоголя,2",
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2671.0149480770797!2d23.984608515607952!3d47.97476957921074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4737a501e528b057%3A0x53cc1811f0139930!2sKhram%20Svyatoho%20Proroka%20Illi%20Ptsu!5e0!3m2!1sru!2sua!4v1650387272472!5m2!1sru!2sua",
        img: "немає фото",
      },
      {
        name: "Храм Покрови Пресвятої Богородиці",
        address: "вул.Покровська",
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2622.643109269256!2d23.997759215607743!3d47.96849707921032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4737a5d428e7c309%3A0x8753ff18b1153e7f!2sTserkva%20Ptsu%20Pokrovy%20Presvyatoyi%20Bohorodytsi.!5e1!3m2!1sru!2sua!4v1650387749755!5m2!1sru!2sua",
        img: "https://www.google.com/maps/place/Tserkva+Ptsu+Pokrovy+Presvyatoyi+Bohorodytsi./@47.9683683,23.9997529,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipMcsctcoCCNPTus-Kxw5wlj1wqn59eNnSSD4kI7!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMcsctcoCCNPTus-Kxw5wlj1wqn59eNnSSD4kI7%3Dw203-h440-k-no!7i1844!8i4000!4m9!1m2!2m1!1z0YHQvNGCLtCS0LXQu9C40LrQuNC5INCR0LjRh9C60ZbQsiDRhtC10YDQutCy0LA!3m5!1s0x4737a5d428e7c309:0x8753ff18b1153e7f!8m2!3d47.9684909!4d23.9998607!15sCi_RgdC80YIu0JLQtdC70LjQutC40Lkg0JHQuNGH0LrRltCyINGG0LXRgNC60LLQsJIBBmNodXJjaA!5m1!1e1#",
      },
    ],
  },
  {
    city: "Рахів",
    region: "рахівський",
    churches: [
      {
        name: "Храм Вознесення Господнього ",
        address: "вул.Б.Хмельницького  ",
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7568.888541640172!2d24.204738153856844!3d48.05720440460533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4737a91edbd65f15%3A0x4d9c34b44d4151f6!2sKaplytsya%20Voznesinnya%20Hospodn%CA%B9oho%20Relehiynoi%20Hromady%20Ukrains%CA%B9koi%20Ptskp!5e0!3m2!1sru!2sua!4v1650280812606!5m2!1sru!2sua",
        img: "https://www.google.com/maps/place/Kaplytsya+Voznesinnya+Hospodn%CA%B9oho+Relehiynoi+Hromady+Ukrains%CA%B9koi+Ptskp/@48.0581298,24.2087469,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipNVQWsV6f_O9W7KRLDAN1ECp5JXWNsjndEIIv86!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNVQWsV6f_O9W7KRLDAN1ECp5JXWNsjndEIIv86%3Dw114-h86-k-no!7i4160!8i3120!4m9!1m2!2m1!1z0YDQsNGF0ZbQsiDRhtC10YDQutCy0LA!3m5!1s0x4737a91edbd65f15:0x4d9c34b44d4151f6!8m2!3d48.0581298!4d24.2087469!15sChfRgNCw0YXRltCyINGG0LXRgNC60LLQsFoZIhfRgNCw0YXRltCyINGG0LXRgNC60LLQsJIBBmNoYXBlbJoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VOak9EaHRhbEIzRUFF!5m1!1e1#",
      },
    ],
  },
  {
    city: "с.Косівська Поляна",
    region: "рахівський",
    churches: [
      {
        name: "Храм Собору 12-ти Апостолів ",
        address: "вул.Ставище,1224 А",
        src: "",
        img: "Немає зображення",
      },
    ],
  },
	{
		city: "с.Ділове",
    region: "рахівський",
    churches: [
      {
        name: "Храм Успіння Пресвятої Богородиці  ",
        address: "вул.Визволення,4 А",
        src: "",
        img: "Немає зображення",
      },
    ],
	},
  {
    city: "смт.Ясіня",
    region: "рахівський",
    churches: [
      {
        name: "Православна Церква Покрови Пресвятої Богородиці",
        address: "нема",
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3357.759044409096!2d24.34590861902491!3d48.25721803202253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47371bae2f5234fd%3A0x4320c55206d9ba8b!2z0J_RgNCw0LLQvtGB0LvQsNCy0L3QsCDQptC10YDQutCy0LAg0J_QvtC60YDQvtCy0Lgg0J_RgNC10YHQstGP0YLQvtGXINCR0L7Qs9C-0YDQvtC00LjRhtGW!5e1!3m2!1sru!2sua!4v1650393205811!5m2!1sru!2sua",
        img: "https://lh5.googleusercontent.com/p/AF1QipMkWR0QLcYEM06ts2rB4RMj9Kp1EdonxY6bnjxC=w408-h306-k-no",
      },
      {
        name: "Свято-Іллінський храм",
        address: "вул.Возз'єднання, 181 А ",
        src: "",
        img: "",
      },
      {
        name: "Свято-Троїцький храм",
        address: "вул. Борканюка, 2Б",
        src: "",
        img: "",
      },
    ],
  },
];



export default Data;
