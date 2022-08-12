import { getFirestore, setDoc, doc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./.firebase-config";


export default async function() {
  initializeApp(firebaseConfig);
  const db = getFirestore();

  // read 'data.csv' to string
  // read file


  const data = `Namn,Hemtelefon,Telefon,KTH-användarnamn,E-postadress,Gata,Postort,Stad,nØllegrupp
  "Max Ahlgren",,"070-738 13 75",maxla3,maxolof1@hotmail.com,"Kungshamra 82 lgh 1105","170 70",Solna,"En stor stark"
  "Ali Ajeenah",,"072-904 00 44",aajeenah,ali.ajeenah@gmail.com,"Vedevågslingan 34","124 74",Bandhagen,"Carlssons Clister"
  "Kevin Akyüz",,"070-316 35 09",akyuz,kevin.akyuez@gmail.com,"Kabelverksgatan 32 lgh 1604","125 48",Älvsjö,"Het halloumi"
  "Johannes Alatalo",,"076-313 96 44",jalatalo,hojannes1@gmail.com,"Vallagränd 41 lgh 1211","136 39",Handen,"Donkey Kong"
  "Aziz Ali",,"072-975 79 53",azizali,aziz.alfta@gmail.com,"Kungshamra 3 lgh 1201","170 70",Solna,Japaleno
  "Jones Mella Ali",,"070-754 02 26",jonesma,jonesmella-ali@hotmail.com,"Garvargatan 15 lgh 1402","112 21",Stockholm,"Krallig kråka"
  "Albin Alvelius",,"070-752 21 89",albinalv,albin.alvelius@gmail.com,"Anisgränd 18","182 45",Enebyberg,"Långt lösenord"
  "Filip Andersson",,"072-241 64 79",filande,fillepang@gmail.com,"Panko 9","725 97",Västerås,"Donkey Kong"
  "Emil Andersson",,"070-975 40 00",emil3,emil-andersson92@hotmail.com,"Västra vägen 10 lgh 1209","582 34",Linköping,"Donkey Kong"
  "Malcolm Anim-addo",,"072-978 26 28",,staglingaa@gmail.com,"GÃtgatan 23 a lgh 1101","116 46",Stockholm,"Het halloumi"
  "Elliot Arn",,"070-230 77 41",fedarn,Elliot.arn@gmail.com,"Jägarstigen 8","181 46",Lidingö,Batasco
  "Linda Arslan",,"079-025 40 56",lindaars,linda.arslan3@gmail.com,"Grimvägen 12 lgh 1303","182 68",Djursholm,"Donkey Kong"
  "Melissa Arslan",,"076-076 20 81",melars,melissa.arslaan@gmail.com,"GrimvÃgen 12 lgh 1303","182 68",Djursholm,"Frysta Hallon"
  "Axel Axhag",,"072-332 46 86",aaxhag,axelhugoaxhag@gmail.com,"Esbjergsgatan 21","632 30",Eskilstuna,Gaffeltruck
  "Zeshen Bao",,"070-036 36 11",zeshen,Zeshen@hotmail.se,"Liljeholmsvägen 32 lgh 1401","117 61",Stockholm,"Carlssons Clister"
  "Niels Barth",,"072-339 00 18",nielsba,nielsbarth@hotmail.com,"Kummelbyvägen 11","191 40",Sollentuna,"Abnormalt tryck"
  "Love Belin",,"076-010 04 95",lovebel,lovebelin@gmail.com,"Högalidsgatan 44 b lgh 1202","117 30",Stockholm,Batasco
  "Melvin Bentinger",,"072-546 20 20",melvinbe,melvinbentinger2@gmail.com,"Aftonvägen 77","146 31",Tullinge,"En stor stark"
  "Tim Bergbom",,"073-646 66 32",tbergbom,timbergbom@yahoo.se,"Ãstra tvÃrgatan 1","621 43",Visby,"Ingen fara, ingen ingefära"
  "Alberto Bergqvist",,"070-862 44 25",albb,alberto.bergqvist@gmail.com,"Rörstrandsgatan 2 a lgh 1301","113 40",Stockholm,"Donkey Kong"
  "Jonathan Blomlöf",,"073-731 07 73",jblomlof,joning.b@hotmail.com,"Larsbergsvägen 13 lgh 1901","181 38",Lidingö,"Frysta Hallon"
  "Albin Blomqvist",,"072-174 98 12",albinbl,abbe.blomqvist@gmail.com,"Fjällgatan 23","646 32",Gnesta,"Het halloumi"
  "Oliver Erik Tor Bojs",,"070-276 84 60",oetbojs,oliver.bojs@hotmail.com,"Barrstigen 41 lgh 1101","167 31",Bromma,"Långt lösenord"
  "Rikard Boman",,"076-349 23 04",rbom,Rikardrikard1@gmail.com,"Bråbogatan 15 lgh 1102","602 16",Norrköping,Gaffeltruck
  "Ivar Boqvist",,"070-559 10 14",ivarbo,ivboq001@gmail.com,"Tellusborgsvägen 41 lgh 1004","126 33",HÃgersten,"Abnormalt tryck"
  "Per Anders Fredrik Bramstedt",,"070-744 22 29",paulino,i.am.dire@gmail.com,"VÃrdkasevÃgen 27","125 52",ÃlvsjÃ,"Frysta Hallon"
  "Carl Broman",,"076-799 93 95",carlbrom,Carl.broman02@gmail.com,"Döbelnsgatan 52 lgh 1703","113 52",Stockholm,Japaleno
  "Lydia Brorsson",,"073-528 78 63",lydiabr,lydia.brorsson@gmail.com,"Fannydals strandväg 33","131 41",Nacka,"Abnormalt tryck"
  "David Byström",,"073-355 55 24",dbys,david_bystrom@live.se,"Anundsvägen 32","168 53",Bromma,"Långt lösenord"
  "Sofie Bälter",,"072-322 06 82",sbalter,sofie.balter04@gmail.com,"Blåklintsvägen 15","181 31",Lidingö,"Abnormalt tryck"
  "Björn Björnström Cano",,"072-066 10 08",bjornbc,bjornstrom.bjorn@gmail.com,"Körsbärsvägen 12 lgh 1401","114 23",Stockholm,"Långt lösenord"
  "Marcus Carlbom",,"076-788 03 11",mcarlbo,marcus@carlbom.cc,"Kryssarvägen 4 lgh 1203","183 58",Täby,"Carlssons Clister"
  "Aaron Carlsson",,"073-966 94 05",aaronca,aaron.carlsson2@gmail.com,"Skärgårdsstadsvägen 31",18470,Åkersberga,Japaleno
  "Roger Chen",,"070-222 34 50",rogerche,RogMasterRC@gmail.com,"SpireavÃgen 11","703 75",Ãrebro,"Frysta Hallon"
  "Dmitry Chirin",,"070-425 98 58",dmitryc,chirin.dima@gmail.com,"Krongårdsvägen 11 lgh 1202","143 46",Vårby,"Långt lösenord"
  "Tenzin Sangpo Choedon",,"070-889 37 32",choedon,sangpo.choedon@gmail.com,"Selmedalsvägen 62 lgh 1603","129 37",Hägersten,"Carlssons Clister"
  "John Christensen",,"073-444 12 03",johnchr,johnchristensen@outlook.com,"Vikdalsvägen 61 b","131 52","Nacka strand",Batasco
  "Lovisa Claesson",,"072-878 24 96",lovisacl,lovisac14@gmail.com,"Fredsvägen 5","645 33",Strängnäs,Batasco
  "Eliot Colegate",,"076-307 91 01",colegate,eliotcolegate@gmail.com,"Rundkyrkoallén n 8","168 58",Bromma,"Ingen fara, ingen ingefära"
  "Kristoffer Czarnocki",,"079-339 21 29",kcza,kristoffer.r.czarnocki@gmail.com,"Ugglemossvägen 10 a","129 42",Hägersten,"Het halloumi"
  "Kevin Dahlén",,"076-027 99 29",kevinda,kevin.dahlen@gmail.com,"Skinnaråsvägen 13d",,Sollentuna,"Krallig kråka"
  "Walaa Darkoushe",,"073-906 23 58",walaad,walaa.darkoushe@icloud.com,"Snapphanevägen 138 lgh 1201","177 54",Järfälla,"Het halloumi"
  "Nima Cheraghi Dehdezi",,"073-765 13 60",nimacd,nima.cheraghi2003@gmail.com,"Rådanvägen 11","191 37",Sollentuna,"Krallig kråka"
  "Hasim Demirok",,"073-320 07 54",hasim,harre_01@hotmail.com,"Hyppingeplan 12 lgh 1201","163 68",Spånga,Japaleno
  "Athina Destouni",,"073-144 96 49",destouni,des.athina@gmail.com,"Lidköpingsvägen 56 lgh 1001","121 39",Johanneshov,"Carlssons Clister"
  "Isac Diamant",,"073-417 98 38",isacnd,isac.c.diamant@gmail.com,"Värmdövägen 216","131 42",Nacka,Batasco
  "Filip Dimitrijevic",,"070-391 17 70",filipdi,filipdim97@gmail.com,"Simrishamnsvägen 15 lgh 0903","121 53",Johanneshov,"Carlssons Clister"
  "Leo Yucheng Ding",,"073-771 80 92",lyding,leo20020723@gmail.com,"Wiboms väg 6 lgh 1402","171 60",Solna,Japaleno
  "Avan Dosky",,"073-144 69 98",dosky,avanosh2002@gmail.com,"Kastrupgatan 13 lgh 1001","164 41",Kista,"Het halloumi"
  "Adam Egnell",,"072-315 70 11",aegnell,adam.egnell@hotmail.com,"Ringarstigen 9","168 58",Bromma,"Het halloumi"
  "Tomas Mikael Elmgren",,"076-101 77 88",tmelm,elmgrentom@gmail.com,"Fafnervägen 56","182 66",Djursholm,"Långt lösenord"
  "Elin Eriksson",,"070-657 08 42",eline2,elin.v.eriksson@icloud.com,"Ãlsta byvÃg 12","195 92",MÃrsta,"Frysta Hallon"
  "Amanda Eskeus",,"073-560 94 63",amahe,amanda111he@gmail.com,"Fuxvägen 3","177 39",Järfälla,"Abnormalt tryck"
  "Morgan Fagerström",,"076-199 93 95",morganfa,fagerstrom.morgan@gmail.com,"Tantogatan 71 lgh 0903","118 42",Stockholm,"Frysta Hallon"
  "Avid Fayaz",,"073-634 94 41",avidf,avidfayyaz@gmail.com,"Harald hjärnesgatan 18 a lgh 1001","417 40",Göteborg,Batasco
  "August Filannino",,"076-083 07 06",,filannino.august@gmail.com,"Emmylundsvägen 3 lgh 1603","171 72",Solna,"En stor stark"
  "Samuel Flodin",,"072-557 63 08",samflo,samuel.flodin17@gmail.com,"Vintertullstorget 52 lgh 1402","116 43",Stockholm,"Ingen fara, ingen ingefära"
  "Alexander Forslund",,"076-898 58 54",alforslu,alexforslund.dev@gmail.com,"Mossvägen 6","135 69",Tyresö,Batasco
  "Jens William Forslund",,"073-544 60 65",jwfo,jens.w.forslund@gmail.com,"Bergavägen 7 a lgh 1402","184 31",Åkersberga,"Ingen fara, ingen ingefära"
  "Kristian Friedensberg",,"070-854 39 67",krrf,kristian_ruminskifriedensberg@hotmail.com,"Nybohovsbacken 97",11764,Stockholm,"Långt lösenord"
  "Feven Gebremeskel",,"073-526 58 12",feveng,feven.gebremeskel14@gmail.com,"Duvholmsgränd 23","127 41",Skärholmen,"Ingen fara, ingen ingefära"
  "Kaleb Girmay",,"070-478 26 77",kaleb,kalebgirmay@gmail.com,"Molkomsbacken 26 lgh 1701","123 33",Farsta,"Ingen fara, ingen ingefära"
  "Rickard Graveley",,"072-527 42 53",ricgra,ricgra@hotmail.com,"Kyrkfjärdsvägen 27","178 52",Ekerö,"Ingen fara, ingen ingefära"
  "Jack Gugolz",,"073-630 60 40",jgugolz,jack@gugolz.se,"Skeppsmyrevägen 9","141 40",Huddinge,"Carlssons Clister"
  "Eskil Gunnarsson",,"070-286 32 95",eskilgu,eskil.ca.gunnarsson@gmail.com,"Bryggargatan 3 lgh 1515","111 21",Stockholm,"En stor stark"
  "Lewis Gustafson",,"070-360 03 91",lewisg,lewis-g@live.se,"Järpvägen 26","175 64",Järfälla,"Frysta Hallon"
  "Christofer Gärtner",,"072-569 13 37",cgartner,crille.gartner@gmail.com,"Bergkantstigen 3","131 46",Nacka,Batasco
  "Johan Hahlin",,"070-283 93 77",johanhah,hahlin.johan@gmail.com,"Gärdesvägen 8 b","191 45",Sollentuna,"Krallig kråka"
  "Kevin Hamed",,"070-842 18 53",khamed,kevin.d.hamed@gmail.com,"Nydalavägen 143","152 51",Södertälje,Gaffeltruck
  "Edwin Hammar",,"073-955 66 55",edwinh,edwinh@kth.se,"Grindslantsvägen 16","754 71",Uppsala,Mellanmjölk
  "Peter Hamra",,"072-940 55 53",phamra,Peter.hamra@gmail.com,"Handbollsvägen 5","151 59",Södertälje,"Donkey Kong"
  "Ashkan Hanifi",,"073-831 49 73",ashhan,pinchu906@gmail.com,"Langelandsgatan 10 lgh 1501","164 43",Kista,"Abnormalt tryck"
  "Karim Haque",,"072-878 95 52",karimha,goldiehaque@gmail.com,"Flygkärsvägen 7 lgh 1001","183 62",Täby,Batasco
  "Ahmed Haj Hassine",,"070-073 90 32",ahhh,ahmedhajhassine2000@gmail.com,"Enbärsvägen 9 lgh 1303","196 35",Kungsängen,Batasco
  "Louise Hellström",,"073-585 73 88",lohell,lollanboll02@gmail.com,"Daggstigen 9a","141 38",Huddinge,"Het halloumi"
  "Elias Hollstrand",,"070-759 46 81",hollstra,elias.hollstrand@icloud.com,"Adolf lemons väg 62","187 76",Täby,Japaleno
  "Dilan Ismail",,"070-283 34 70",dilanis,dilanismail0121@gmail.com,"Attackvägen 10 lgh 1022","175 63",Järfälla,"Krallig kråka"
  "Alexander Jastrzebski",,"070-955 56 08",ajas,alexander011@live.se,"Flisavägen 20 lgh 1102","723 53",Västerås,"Krallig kråka"
  "Edwin Jogensjö",,"073-332 04 19",edwinnj,edwin03@live.se,"Funbo-broby 69","755 97",Uppsala,"Frysta Hallon"
  "Elin Johnsson",,"072-454 13 69",elinjohn,elin.johnsson00@gmail.com,"Ankarsrumsgatan 10 ",16350,Spånga,Japaleno
  "Viggo Jonsson",,"072-748 18 92",viggojo,viggojjonsson@gmail.com,"Kronobergsgatan 11 lgh 1402","112 38",Stockholm,"Ingen fara, ingen ingefära"
  "Oscar Jonsson",,"070-911 25 65",oscjonss,oscar.jonsson29@gmail.com,"Ljuslinsvägen 2 lgh 1001","856 53",Sundsvall,"Carlssons Clister"
  "Alexander Järvheden",,"070-546 15 04",jarvh,alexander.jarvheden@gmail.com,"Marknadsvägen 101 lgh 1102",18378,Täby,Japaleno
  "Victor Karlsson",,"073-097 69 72",vickarls,Victor_karlsson_95@outlook.com,"Hertig Carls Väg 42A lgh 1002","151 38",Södertälje,Gaffeltruck
  "Alexander Karpov",,"076-921 28 53",karpov,alexander.karpoff112@gmail.com,"Östra kyrkogatan 15 b lgh 1103","611 33",Nyköping,"Abnormalt tryck"
  "Ellen Kastensson",,"076-852 17 88",ellenkas,ellen.kastensson.ek@gmail.com,"Hägerstensvägen 294","129 41",Hägersten,"Ingen fara, ingen ingefära"
  "Biruk Debebe Kebede",,"076-586 45 18",bdkebede,1birukde@gmail.com,"Ervallakroken 11 lgh 1403","124 66",Bandhagen,Japaleno
  "Eddie Kero",,"073-088 19 51",ekero,eddie.k.a.kero@gmail.com,"Bladvägen 10","184 32",Åkersberga,"Donkey Kong"
  "Karl-erik Knauth",,"073-706 72 95",keknauth,kalle.knauth@gmail.com,"Vickervägen 13","175 50",Järfälla,Gaffeltruck
  "Nikola Kotur",,"070-943 25 77",nkotur,nikola_kotur@hotmail.com,"Malmvägen 31","141 71",Segeltorp,Gaffeltruck
  "Erik Kronke",,"070-070 03 75",ekronke,kronke.erik@gmail.com,"Albods väg 14 b","193 40",Sigtuna,"Frysta Hallon"
  "William Krull",,"073-622 78 66",krull,zapdos079@gmail.com,"Hovslagarvägen 12","136 73",Vendelsö,"Krallig kråka"
  "Mattias Kvist",,"070-298 28 73",makv,mattias.kvist@telia.com,"Breddalsvägen 16","148 35",Ösmo,Japaleno
  "Pontus Lenner",,"070-373 15 08",plenner,pontus.lenner@gmail.com,"Vattugatan 10",17273,Sundbyberg,Batasco
  "Jonas Drøivoldsmo Lesund",,+4794095788,jonasdl,lesund.jonas@gmail.com,"Humlehaugvegen 30",7055,Trondheim,"Krallig kråka"
  "Andy Li",,"076-336 00 26",andyli,andydy_li_@hotmail.com,"Igeldammsgatan 22 e lgh 1101","112 49",Stockholm,Batasco
  "Carl Liljencrantz",,"076-006 34 41",liljencr,carl.liljencrantz@gmail.com,"Backavägen 5 a","641 37",Katrineholm,Batasco
  "Jesper Lindeberg",,"076-917 15 40",jelindeb,jesperlindeberg@icloud.com,"Västerängsvägen 2","185 39",Vaxholm,"En stor stark"
  "Agnes Lindencrona",,"073-566 70 40",lindencr,agnes.lindencrona@gmail.com,"Linnégatan 42 lgh 1002","114 47",Stockholm,"Het halloumi"
  "Karl Linder",,"070-755 79 01",kalinder,Kalle.linder16@gmail.com,"Nautilusvägen 23","181 66",Lidingö,Gaffeltruck
  "Charlotta Lindsten",,"070-660 84 92",chalinds,charlotta.lindsten@gmail.com,"Vanadisplan 1","907 36",Stockholm,"Ingen fara, ingen ingefära"
  "Elsa Linnéusson",,"072-889 63 30",elsalin,elsa.linneusson@gmail.com,"Scheelegatan 5","521 31",Falköping,Batasco
  "Mandi Liu",,"072-311 04 17",mandil,mmanddii@gmail.com,"Karlbergsvägen 14 lgh 1204","113 27",Stockholm,"En stor stark"
  "Edvin Livak",,"073-871 04 81",livak,edvinlivak@hotmail.com,"Spånga kyrkväg 480","163 62",Spånga,"Het halloumi"
  "Ellen Ljungkrantz",,"072-213 31 15",ellenlju,ellen.ljungkrantz@hotmail.com,"Uringe 14 lilla uringe gård","147 91",Grödinge,Japaleno
  "Måns Lorentzen",,"070-220 26 24",manslo,mans@lillasyster.se,"Tantogatan 41 lgh 1702","118 42",Stockholm,Japaleno
  "Lucas Lund",,"073-514 58 11",lucaslu,lucas.ja.lund@gmail.com,"Solhemsbackarna 103","163 56",Spånga,"Långt lösenord"
  "Elin Sigrid Margareta Andersson Lundell",,"072-164 28 12",esmal,elin.s.m.andersson@gmail.com,"Sandstensvägen 15","187 34",Täby,"En stor stark"
  "Alexander Lundgren",,"072-534 46 05",alelundg,alexander_lundgren@hotmail.se,"Haga walhalla 1","169 70",Solna,"Långt lösenord"
  "Fabian Lundquist",,"073-623 36 96",falu,lundquist339@gmail.com,"Valhallavägen 174 lgh 1508","115 27",Stockholm,"Abnormalt tryck"
  "Karl Joel David Lundström",,"076-173 13 33",kjdlu,dlundstro@gmail.com,"Lundagatan 49 lgh 1308","117 28",Stockholm,"Frysta Hallon"
  "Linus Lundström",,"073-748 03 87",linlunds,linus.k.lundstrom@gmail.com,"Studentbacken 23 lgh 1301","115 57",Stockholm,"Carlssons Clister"
  "Alexander Lundvall",,"073-430 45 55",allundva,alexanderleo.lundvall@gmail.com,"Södra catalinagränd 15 lgh 1202","183 68",Täby,"Carlssons Clister"
  "Dennis Luu",,"072-330 01 36",dluu,dennis877.luu@gmail.com,"Drottninggatan 8 b lgh 1301","632 17",Eskilstuna,"Het halloumi"
  "Kevin Löv",,"072-442 98 57",klov,Kevin.Looov@gmail.com,"Romansvägen 107","142 42",Skogås,"Ingen fara, ingen ingefära"
  "Fredrik Magnevill",,"073-373 40 05",magnev,fredrik.magnevill@gmail.com,"Nackanäsparken 2","131 33",Nacka,"En stor stark"
  "Axel Magnius",,"073-653 68 03",amagnius,axel.magnius@gmail.com,"Rödbosundsvägen 36","184 60",Åkersberga,"Krallig kråka"
  "Anton Magnusson",,"070-600 73 89",antmag,anton.magnusson0417@gmail.com,"Murkelvägen 80","186 56",Vallentuna,"En stor stark"
  "Lukas Malmberg",,"073-303 28 29",lukmal,malmberglukas@outlook.com,"Babordsgatan 2B",72359,Västerås,"Abnormalt tryck"
  "Castor Mann",,"072-270 40 35",castorm,Castormannen@gmail.com,"Stavsjövägen 54","125 41",Älvsjö,"Ingen fara, ingen ingefära"
  "Linus Markström",,"070-517 72 78",lmark,linusmarkstrom@icloud.com,"Filipstadsbacken 66 lgh 1202","123 43",Farsta,"Långt lösenord"
  "Kevin Mattila",,"070-277 60 64",kmattila,mattila1200@gmail.com,"Högdalsvägen 15","136 75",Vendelsö,"Het halloumi"
  "Roy Mavi",,"076-324 38 85",rmavi,roymavi43@gmail.com,"Riddargatan 3 b","114 35",Stockholm,"Carlssons Clister"
  "Olof Bargholtz Melcherson",,"072-578 11 78",olofbm,olof.melcherson@gmail.com,"Nautilusvägen 7","181 66",Lidingö,"Frysta Hallon"
  "Daniel Edvard Mennander",,"076-584 84 53",demen,dannex200@hotmail.com,"Ekbacksvägen 15 a","183 57",Täby,"Ingen fara, ingen ingefära"
  "Selsabeel Mohamed",,"072-433 22 92",selmoh,selsabeel.albaqir@gmail.com,"Diagnosvägen 15 e lgh 1002","141 54",Huddinge,"En stor stark"
  "Yusuf Mohamed",,"070-046 97 77",yusufm,officialyusuf21@gmail.com,"Tornervägen 29","177 30",Järfälla,"Donkey Kong"
  "Jacob Molin",,"070-246 11 55",jacmol,Jacob.Molin@outlook.com,"Häggbacken 3","187 34",TÃby,Batasco
  "Sebastian Montén",,"073-324 24 91",smonten,sebastianmonten@gmail.com,"Virvelvindsvägen 8","167 67",Bromma,Gaffeltruck
  "Anders Mouanga",,"070-739 58 75",mouanga,shortgolind@gmail.com,"Sidenvägen 21","178 37",Ekerö,Gaffeltruck
  "Ioannis Mouratidis",,"072-947 15 44",imou,ioannis.mouratidis03@gmail.com,"Västra banvägen 88","184 50",Åkersberga,Gaffeltruck
  "Felicia Murkes",,"076-715 50 85",murkes,feliciamurkes@gmail.com,"Karlavägen 90 lgh 1401","115 22",Stockholm,"Ingen fara, ingen ingefära"
  "Viktor Mårtensson",,"073-834 13 65",vmarte,viktor.g.maartensson@gmail.com,,,,"Abnormalt tryck"
  "Lidya Hailemicael Nasser",,"073-968 48 84",lhnasser,hailemicaelslidya@gmail.com,"Storgatan 11 lgh 1101","829 50",BergsjÃ,Japaleno
  "Kristoffer Nelléus",,"072-350 37 94",knelleus,kristoffernelleus@gmail.com,"Drevkroken 35","163 54",Spånga,"Carlssons Clister"
  "Daniel Nikolic",,"076-066 42 95",dannik,daniel.nikolic2003@outlook.com,"Mor wingmarks gränd 3","129 41",Hägersten,Gaffeltruck
  "Adam Njegovanovic",,"076-046 50 64",adamnj,adam.nj03@gmail.com,"Södra agnegatan 31 lgh 1203","112 29",Stockholm,"Ingen fara, ingen ingefära"
  "Arvid Nordström",,"072-150 71 58",arvnor,arvid.nordstrom@outlook.com,"Vasseurs väg 11","182 39",Danderyd,Batasco
  "Daniel Norman",,"070-280 60 02",dnorma,daniel.norman@fannyudde.com,"Skönviksvägen 274 lgh 1101","122 66",Enskede,"Långt lösenord"
  "Eskil Nyberg",,"073-815 73 37",eskilny,eskil.nyberg@gmail.com,"Stockholmsvägen 55","182 74",Stocksund,Gaffeltruck
  "Vidar Nykvist",,"072-017 35 52",vidarnyk,vidde.nykvist@gmail.com,"Mittfältsgatan 5 lgh 1503","169 41",Solna,"Abnormalt tryck"
  "Gabriel Nyström",,"070-357 07 12",grn,gabraanys.2000@gmail.com,"Pernillas väg 10","449 36",Nödinge,"Donkey Kong"
  "Lukas Nyström",,"072-333 39 80",lukasnys,lukas.ma.nystrom@gmail.com,"Kungsholmsgatan 50","112 27",Stockholm,"Donkey Kong"
  "Klas Markus Näsvall",,"076-349 75 30",kmnas,markus.nasvall@gmail.com,"Träskobacken 13","129 42",Hägersten,"Abnormalt tryck"
  "Joachim Olsson",,"076-091 11 45",joaco,Joachim1999@live.se,"Svartviksslingan 96",16739,Bromma,Japaleno
  "Erik Olsson",,"070-543 08 11",eolsson5,o.erik@protonmail.com,"Lövångersgatan 22","162 63",Vällingby,Japaleno
  "Daniel Parmhed",,"073-622 57 47",parmhed,daniel.parmhed97@gmail.com,"Sandholmsväen 43","132 52",Saltsjö-boo,"Carlssons Clister"
  "Nicklas Peng",,"076-327 54 56",npeng,nicklas.peng@gmail.com,"Sandhamnsgatan 55 lgh 1105","115 28",Stockholm,"Abnormalt tryck"
  "Athanasios Pittakis",,"073-906 85 16",pittakis,athanasiospittakis@gmail.com,"Skebokvarnsvägen 121 lgh 1101","124 52",Bandhagen,"En stor stark"
  "Alec Pramanik",,"073-755 29 59",pramanik,alec.pramanik@gmail.com,"Professorsslingan 10 lgh 1117","114 17",Stockholm,Japaleno
  "Vilhelm Prytz",,"076-799 97 00",vprytz,vilhelm@prytznet.se,"Gustavslundsvägen 38","144 63",Rönninge,"Carlssons Clister"
  "Chloe Joyce Raneses",,"070-400 13 76",cjwr,chloejoycer@gmail.com,"Fruängstorget 5 lgh 1003","129 52",Hägersten,"Frysta Hallon"
  "Mohammed Faisal Ahmed Ba Rashed",,"072-942 00 16",mfabr,mohomeister@gmail.com,"BullerholmsgrÃnd 55","127 40",SkÃrholmen,"Het halloumi"
  "Albin Renck",,"076-564 83 97",albinjr,albin.renck@gmail.com,"Skärvstensvägen 15","752 65",Uppsala,Batasco
  "Villiam Riegler",,"070-391 00 59",villiamr,ville@riegler.se,"Likagovägen 3","793 32",Leksand,"Het halloumi"
  "Paulino Guerra Rojas",,"070-342 00 41",ossianst,paulino@kth.se,"Högsätravägen 17 lgh 1102","181 58",Lidingö,Japaleno
  "Sofia Rosberg",,"076-761 10 94",srosberg,hundborste@gmail.com,"Tuvstigen 5","135 53",TyresÃ,"Frysta Hallon"
  "Joakim Rosendahl",,"076-191 38 43",jorosend,joakim.rosendahl@clac.se,"Dalvägen 46","187 33",Täby,"Långt lösenord"
  "Crystopher William Mariño Ross",,"072-026 41 61",cwmr,crystoross@gmail.com,"Hammarbyvägen 12 lgh 1403","194 36","Upplands väsby","En stor stark"
  "Daniel Ruijs",,"070-634 59 88",ruijs,daniel.ruijs@gmail.com,"Amanuensvägen 10","114 16",Stockholm,"Donkey Kong"
  "Bernard Rumar",,"070-916 74 15",bernardr,rumarbernard@gmail.com,"Edinsvägen 3 lgh 1601","131 45",Nacka,"Donkey Kong"
  "Alexander Runebou",,"073-527 23 52",alerun,alexanderrunebou02@gmail.com,"Nimrodsgatan 17 lgh 1002","115 42",Stockholm,"Het halloumi"
  "Anton Rönnquist",,"076-256 08 58",antron,anton.ronnquist@gmail.com,"Klocksippevögen 24 a","589 35",Linköping,"Krallig kråka"
  "Toshihide Sakao",,"072-889 52 83",sakao,toshisakao@gmail.com,"Carl malmstens väg 14 lgh 1203","170 73",Solna,"Ingen fara, ingen ingefära"
  "Dilan Saleh",,"073-493 40 74",dilans,dilansaleh1@hotmail.com,"Virebergsvägen 9 lgh 1706","169 30",Solna,"Abnormalt tryck"
  "Daniel Sandström",,"070-590 85 30",dansand,mail@danielsandstrom.org,"Klippgatan 16 c lgh 1305","171 47",Solna,"Carlssons Clister"
  "Sofia Sanyang",,"076-274 39 94",ssanyang,sofia.sanyang@hotmail.com,"Skebokvarnsvägen 366 lgh 1603","124 50",Bandhagen,"Krallig kråka"
  "Markus Selin",,"070-994 68 57",marselin,MackanOlson@hotmail.com,"SturevÃgen 2","641 61",Valla,"Het halloumi"
  "Sebastian Senic",,"073-781 04 90",senic,sebastian.senic@gmail.com,"Torsgatan 42","113 62",Stockholm,"Het halloumi"
  "Simon Severinsson",,"076-029 98 78",simonsev,simon.severinsson@gmail.com,"Hunnebergsgatan 24","582 34",LinkÃping,Gaffeltruck
  "Chantelle Shabo",,"076-237 52 99",cshabo,chantelle.shabo@icloud.com,"Lustgårdsgatan 3 lgh 1205","112 18",Stockholm,"Abnormalt tryck"
  "Siham Shahoud",,"072-027 36 41",shahoud,siham.shahoud1991@gmail.com,"Ättetorpsvägen 40 lgh 1101","616 31",Åby,"Donkey Kong"
  "Arvin Habibzadeh Shakibi",,"073-908 58 58",arvinha,arvinhh@hotmail.com,"Norra stationsgatan 99 lgh 1208","113 64",Stockholm,"Donkey Kong"
  "Najibullah Shirzad",,"070-487 76 24",nshirzad,najibullahshirzad2743@gmail.com,"Levertinsgatan 12 lgh 1003","754 30",Uppsala,"Ingen fara, ingen ingefära"
  "Daniel Skalin",,"070-495 39 68",dskalin,daniel.skalin01@gmail.com,"KvartalsvÃgen 20 lgh 1002","177 63",JÃrfÃlla,"Frysta Hallon"
  "Erik Smit",,"070-844 11 57",esmit,eriksmit24@gmail.com,"Landåvägen 12 lgh 1401","131 49",Nacka,"Carlssons Clister"
  "Gabriel Soldati",,"076-402 93 55",gabns,gabbe-999@hotmail.com,"Götgatan 103 b lgh 1102","116 62",Stockholm,"Långt lösenord"
  "Ossian Stange",,"073-417 96 86",dire,ossian.stange@outlook.com,"Hökmossevägen 20","126 42"," Hägersten",Gaffeltruck
  "Oliver Stenberg",,"076-868 83 68",ostenbe,stenberg.oliver@gmail.com,"Bigarråvägen 3 lgh 1912","114 21",Stockholm,Gaffeltruck
  "Tore Stenberg",,"076-340 99 98",toreste,tore.gaani@gmail.com,"Kungshamra 71 lgh 1220","170 70",Solna,"Krallig kråka"
  "Felix Stenberg",,"070-466 63 16",felixste,felix@smeden.org,"Lill-jans plan 1 lgh 1402","114 25",Stockholm,"Krallig kråka"
  "Dennis Gabriel Rune Stensvad",,"070-731 69 83",stensvad,dennisstensvad@gmail.com,"Tumultgränd 192","162 47",Vällingby,Gaffeltruck
  "Alexander Stjernberg",,"070-626 25 70",stjernbe,alex.stjernberg@gmail.com,"Vasavägen 230 b","192 69",Sollentuna,Gaffeltruck
  "Emma Strandberg",,"070-827 35 95",emmastra,emma.strandberg@hotmail.com,"Kokärrsvägen 4","451 32",Uddevalla,"Krallig kråka"
  "Daniel Strömberg",,"072-353 93 77",dstrombe,danielrrginting@gmail.com,"Lykttändarens väg 24","179 75",Skå,Gaffeltruck
  "Movitz Sunar",,"072-180 34 76",movitzs,movitz.sunar@gmail.com,"Engelbrektsgatan 12","114 32",Stockholm,"Långt lösenord"
  "Johan Sundgren",,"079-349 59 76",jsundg,johansundgren2015@gmail.com,"Skogsduvevägen 22","141 40",Huddinge,Japaleno
  "Daniel Svensson",,"072-316 60 40",daniels5,danielsvensson2003@gmail.com,"Kyttingevägen 4b","181 31",Lidingö,"Krallig kråka"
  "Zackarias Söderberg",,"070-630 27 53",,zackarias.soderberg@gmail.com,"Johannisdalsgatan 7 a","129 44",Hägersten,"Ingen fara, ingen ingefära"
  "Erik Söderlund",,"072-864 17 00",eriso,erik@smeden.org,"Mårdvägen 11","167 56",Bromma,"En stor stark"
  "Kani Tahir",,"072-313 70 01",ktahir,kani.tahir@hotmail.com,"Hagagatan 16 a lgh 1403","113 48",Stockholm,"Krallig kråka"
  "Isabella Takami",,"079-336 92 72",isat,iallgentakami@gmail.com,"Arkitektvägen 32 lgh 1201","168 32",Bromma,Japaleno
  "Olle Thomsen",,"073-655 00 87",olleth,Olle.thomsen@gmail.com,"Mässingsvägen 11","176 74",Järfälla,"Långt lösenord"
  "Emma Tisell",,"070-825 58 82",etisell,tisell.emma@gmail.com,"Skiljevägen 9 a","182 56",Danderyd,Batasco
  "Jimmy Tran",,"070-570 64 40",jimmytr,jimmyyentran@gmail.com,"Mörsilsgatan 30 lgh 1005","162 66",Vällingby,"Frysta Hallon"
  "Haralampos Tricopoulos",,"070-864 86 26",htri,haralampos.tricopoulos@gmail.com,"Johan enbergs väg 38 a 2 tr","171 61",Solna,"Krallig kråka"
  "Tilde Tärnvik",,"070-672 07 89",tarnvik,tilde@tarnvik.com,"Rösvägen 20 a","163 44",Spånga,Batasco
  "Carl Uhlhorn",,"070-288 66 09",uhlhorn,Carl.Uhlhorn@telia.com,"Mörbylund 7 g","182 30",Danderyd,"Krallig kråka"
  "Ava Vatanchi",,"072-907 07 09",vatanchi,ava.vatanchi93@gmail.com,"Borgarfjordsgatan 21 a lgh 2208","164 53",Kista,"Donkey Kong"
  "Adam Viberg",,"073-973 99 11",adamvib,adam.viberg@gmail.com,"Bolkavägen 11 d lgh 1101","761 42",Norrtälje,"Donkey Kong"
  "Herman Vänman",,"072-214 19 90",hermanv,herman.wanman@gmail.com,"Råbyvägen 20 lgh 1102","754 22",Uppsala,"Abnormalt tryck"
  "Karl Walfridson",,"072-536 76 29",karlwalf,kalle.walis@gmail.com,"Hemmansvägen 6","175 50",Järfälla,"Frysta Hallon"
  "Adam Wallén",,"072-323 98 33",adwa,adamwallen03@gmail.com,"Barrvägen 5 b","191 33",Sollentuna,"Långt lösenord"
  "Oscar Walter",,"070-778 55 98",owalter,oscar.walter1891@gmail.com,"Bockgränd 37","175 45",Järfälla,"Donkey Kong"
  "David Welzien",,"073-096 40 28",welzien,David.Welzien@gmail.com,"Grindtorpsvägen 33 lgh 1101","183 49",Täby,"En stor stark"
  "Markus Wessén",,,mwesse,markus.wessen@hotmail.com,"Solhagavägen 47",16347,Spånga,"Het halloumi"
  "Hanna Westerdahl",,"076-405 02 21",hwesterd,hanna.wdahl@gmail.com,"spångavägen 84 äppelvägen 54",,bromma,"Carlssons Clister"
  "Tim White",,"072-975 67 81",twhite,tim.elis.white@gmail.com,"Körsbärsvägen 4c lgh 1109","114 23",Stockholm,"Långt lösenord"
  "Robin Widjeback",,"072-218 59 91",robinwid,r.widjeback@hotmail.se,"SpelvÃgen 19 lgh 1203","663 30",Skoghall,"Frysta Hallon"
  "Benjamin Widman",,"076-408 22 28",bwidman,benjaneb1@gmail.com,"AniaravÃgen 17","175 65",JÃrfÃlla,"Het halloumi"
  "Simon Wigh",,"073-023 58 50",swigh,swigh@telia.com,"Albanovägen 21 lgh 1207","114 19",Stockholm,"Frysta Hallon"
  "Hugo Larsson Wilhelmsson",,"070-931 03 40",hugolw,hugoahus@hotmail.se,"Syrsevägen 5","296 33",Åhus,"Donkey Kong"
  "Erik Wirdemark",,"072-322 51 32",erikwir,erik.wirdemark@gmail.com,"TutviksvÃgen 15","136 75",VendelsÃ,"Frysta Hallon"
  "Oscar Witt",,"070-351 90 99",owitt,witt.oscar03@gmail.com,"Södermannagatan 57A lgh 1101","116 66",Stockholm,"Långt lösenord"
  "Albin Woxnerud",,"072-579 49 29",alww,albin@woxnerud.se,"Torögatan 64","122 65",Enskde,"Carlssons Clister"
  "Edwin Wästlund",,"073-100 77 87",edwinw,edwin@wastlund.net,"Studievägen 2","183 55",Täby,"En stor stark"
  "Seerat Yasir",,"073-637 86 49",seeraty,seeratyasir@hotmail.com,"Smedjevägen 3 lgh 1201","191 49",Sollentuna,"Carlssons Clister"
  "Måns Zellman",,"076-050 00 72",mansz,mans.zellman@gmail.com,"Sjövägen 12","183 52",Täby,"En stor stark"
  "Lucas Zetterberg",,"070-295 07 91",lucasz,lucas.zetterberg@outlook.com,"Tjäderspelsvägen 35","155 30",Nykvarn,"En stor stark"
  "Haiyue Zhang",,"072-327 27 86",haiyuez,haiyuenj@gmail.com,"Idungränd 2 c","187 73",Täby,"En stor stark"
  "Daniel Zimmer",,"070-835 24 18",dzimmer,daniel92920@gmail.com,"Storholmsvägen 358","132 52",Saltsjö-boo,"Abnormalt tryck"
  "Fabian Öst",,"070-758 86 80",fabianos,fabianst213@gmail.com,"Torsvägen 25","133 38",Saltsjöbaden,"Donkey Kong"
  `; // Get csv from stön

  for (const line of data.split("\n").slice(1, -1)) {
    const [
      name,
      _homePhone,
      phone,
      kthId,
      email,
      street,
      postCode,
      city,
      group,
    ] = line.split(",").map(c =>
      (/^".*"$/.test(c))
        ? c.slice(1, -1)
        : c
    );

    if (!kthId) {
      console.log(name);
      continue;
    }

    await setDoc(
      doc(db, "n0llan", kthId),
      { name, phone, kthId, email, street, postCode, city, group },
    );
  }
}

