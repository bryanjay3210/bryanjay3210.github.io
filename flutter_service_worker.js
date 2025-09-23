'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "cf917c5928f82f3a68212d392e01df74",
".git/config": "4010ac01da66369d3378133d9d3e39d7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e6ca06cd1a98649d7926748e79fd130d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4a1e3c24701910dfe2701a92f922b696",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fc9770f6a31e3734b6d9cf70ff9976c6",
".git/logs/refs/heads/main": "d39adf4d5a47a227c88f9f428ab72ec9",
".git/logs/refs/remotes/origin/HEAD": "93431392faad8487446096b40ddbd190",
".git/logs/refs/remotes/origin/main": "742920774b8f7ee7ea1b0e719b882090",
".git/objects/01/8197d62fe5a2f83b334ad2b8f9be7298cefaec": "9f38372aa98ba4e72a586b4171c1faad",
".git/objects/0c/7e1661734ceccf6fcba4ef9046fcc5a2a4352d": "bd47b113c45eacf5f3e4df5700b1afa8",
".git/objects/0f/4d7a19836e7435bc431e26855ba31c7c93f628": "11094f1c5025befe27b229cf76b874ed",
".git/objects/10/2dd390ab974ef52b2c8f6b86ca2718b79159a6": "a11d0dea71f7228d944e21947d041515",
".git/objects/10/f6907a840542ba4dcc0216d3ca0518293142f0": "c3f860dd5d06adb585d9d18bf56625cb",
".git/objects/11/5eebcec9415e23ae81cf94b4e3e3c8bd2fefae": "bf2851a9b45610d69e4a1165b4e71879",
".git/objects/16/d465e84d3cb99ac495b3d5dfcf9c9ef9789822": "3c2a3dcea92d7bad727402ffb380aff0",
".git/objects/18/62f2f6b69b829619035f7608cf3b7647c90a7d": "e3a25f19c59afd72a1fedd298058f7a3",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/1d/e1b4bba431e811bebac52324844e7b9532160e": "add6a64ac441586f47ca1e1d63dcfc4f",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/26/34bace89dc2e278dce74fab130f8d6006ba6af": "32496e7e985674052207d88faf661095",
".git/objects/28/2efbf692034a4b21c23aa9d558e51376c47c0f": "c37b0a10e3d992385834287db30580e6",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/39/86501558466ad91c2e8583f31dbba29340bc7d": "f1b6a09dbbf1386cee28b26142349083",
".git/objects/3b/3c47e58c120e9cdee7466934033505879b8cee": "1e8ec3d6a89911590517e5528c51ea27",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/42/fbeda96bbd6775209e350ad46bd3d6646810a1": "ccfcb75b507dfa8bf854c0057220b39c",
".git/objects/45/972a6decb3a8aae2d937e6f97fd6237dc3d321": "2974becb690e434f6133078a18c5af0a",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/50/2f9e6a20702567ce29b1a2b7eea88b8fb3e052": "cf5c8ce939f6016ad2e1d780decd2494",
".git/objects/51/0626d83df1a5d604703c4817392fced37a2837": "f37a7ac1ed64097a3061211e611b8453",
".git/objects/51/a46648fa32a65f810dd4313640d8fb219a1827": "168e08e09aa26b0a8fe261d88341cc89",
".git/objects/55/c7c329ef824aa5bc66d4e75b1aa152cc835b51": "752cd595d061d5e5ed826f97c35932db",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5d/d01c4429f89e730ba39277dbedc015fc6f0f57": "3abffb4fa463c3376e73625164d707c0",
".git/objects/5e/e7aad574e9bdc825e6fcbf88e19b9a598b145b": "2cffb4572cc14547b6112dbff2b0062a",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/60/63a434006d64fc336af63e003817463a339a44": "dc2ffbc768e28e89b86262b7a6037223",
".git/objects/69/46a58d005c071c0dcfc4129970911a967a1776": "3b3b84ba1a10dc603b9e42a5b59719a6",
".git/objects/6d/34ccfd5f1ffb53f862cd6e5c1c0617a3ae157b": "c8f9b99b39f014c7407e8df0da72cbd9",
".git/objects/72/1802afe715194ff14c62cdfd789cd3ba403900": "1751c61cc36bfaf75998f218621f72cc",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/72/472228da7757224b6e310f5122b0b234f4b388": "ffd20e6827486149b5a62f5c5fd6d691",
".git/objects/73/833fa3319d7d5d7d9688a568a0b4ea1f48e1ab": "1e5a4e544e0f002a3c89a380f412ac25",
".git/objects/75/02c4efab08ec88362a7d129c80e03db15e3576": "6cffbabb5e2b6412bb4f664fce4ce24a",
".git/objects/7b/58a23c2fbbe21960042f24976ba36a5c484161": "681e34762915026d77ee25b0e80aca7e",
".git/objects/7c/4277b8a167b38e0013d14033de79ccb84eacfc": "93863675c3809fb9f3200dabad9811ba",
".git/objects/7d/62290689a080fb7b46255e7cb79fdb4017886c": "fc8c053ef95693fa1682465f2ac67a7c",
".git/objects/7d/ecb6dc3da7f140bb6388672ef91ee1e42a5c7e": "596fee66a77aed6718b5f73bd8adf51c",
".git/objects/7f/8c5d34e374b162db472d290e81809aac1b9ef6": "840ed1923487de734ef2073835d16c93",
".git/objects/81/2e07bf101f68bb8ae9c3164394163b14bc85a1": "82e540c7309dc22ff295f3158aeff03f",
".git/objects/83/73f421999b8ebc21e61618d949c84e3156806c": "c810ac09a3943c0638ff98221c88395e",
".git/objects/86/5d19f3b241eabfc37efb6e260b05e6229069e8": "c8bb302483d04f17ca3325048439ea62",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/17f0a4402c3b2c898bc51e0bc8c5f6c028edc5": "4d53adb162ecb2dcad8bb9f4a57f7959",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/b0abfb7f8625e85d4fd82dcb3234e0ee731b3b": "970b5aa0ffd8acd25d9491f17f366842",
".git/objects/8e/33a830901e2e58b3d8d8f781a94831050491eb": "0a30774588ebac9a8217648f3100ec25",
".git/objects/8e/ea3609509f195b05bee8a83604134a685c389b": "d59fd996630a07b29adb2b17729a1ee2",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/90/fb9ed75930968045ca22500a005b4be9dfbc44": "fa7f4ded9513971c8cb1aae82d4b05a8",
".git/objects/91/36bd62e7d37fcbe383314b9c6ce05d2e0662cd": "77454cfc542fb950dee01b72954e4146",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/98/4b2e9c861f11ab94d9b6072e155e83d4cc855d": "ff94dd22e92f0b30ffac66212a3cac23",
".git/objects/a0/1226ab84b8637baee8bdc4f9e091775d980c12": "18480646780a68dc7547f2a58afd3be6",
".git/objects/a3/9983a581e0389b839dfcb132b605af440cd6db": "10130d48fc0080e49b96b60d950e0380",
".git/objects/a4/94e1b69830dd97299d53d382aef8661749a5c6": "a262cd737cb279d5bb90034976fd90e0",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/c43308c2800a6cb0e0e8a5427f5169d96e4a63": "3b20de44c32258c71c15f2afc36799e3",
".git/objects/c5/5d4e69c47c6d64d50469134fd5dd9808b18ff1": "23c2029dc6312b6c29bd3ffdc6eb6a63",
".git/objects/c7/21f2d4b753908670d981fbf2d8126cb399b9bd": "c0835e435a83d21e9af625c6b128b86b",
".git/objects/cd/22645908a0b7902d6afdb99666d60fc520b5bf": "e4783ec478434747b47529102279f148",
".git/objects/ce/1b374bca2f28db3d61ee30b69aa2fd2cecc0db": "3a0918a0418571b92fe91a6eeb915f92",
".git/objects/ce/c4295b81418e01b55fca5b30e813055d99c3bb": "40ae39a6edd727ad29dad73909c9c251",
".git/objects/d2/7b955306436a74a78e79286fabb31b4c395377": "57425f150787ede8f1de11255b9d321e",
".git/objects/d2/94999b4a06254ce315917cf9d2b50ec513394c": "c67ae65dbe7c128ce1f1e9484bc17440",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/dd/c09bbd1dba7e3dddaec159c646d37ef2aea736": "b7b524f72309af1cc28cf68fc37b2023",
".git/objects/e1/a6398c784720b960288aa475d8e433bff30ecf": "c9ff2744811f1f5fe29ab82e0bf6155d",
".git/objects/e2/106b8374f7ba0290ea8746205b4ced69c1377a": "5ed57fe69258bfebd67a4ad1e7e3df8d",
".git/objects/e5/cbd1d52883054f362c9050759804db08c712b9": "8fe7f0b17db7ca33342e0ea00249cf09",
".git/objects/e6/efa98a98d65f2a4e2d330a74a995795296fa93": "397bf7dc1c99f197c5206dba94382189",
".git/objects/e9/a9fb42e50d7fa83af4332c64c1bc3f024ecf53": "a17a6b801949fd2d5f5b52f268999781",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/295e904867814ec469486ab99c26cee669b070": "b658d19b0fb174335812ed82f46bdee3",
".git/objects/ed/9565740b028341c0483cb1cf0518c76e172f0c": "36e34021a12a84fb1839f3441395e05e",
".git/objects/ed/9c57b759e8401ef3dc9cd181a1db5be3105d19": "7ecf9342e0763beea409946bcc9d3a9b",
".git/objects/ed/d37e01aa28a285fcf6b65f54d4c23522022ecc": "7c37b8a9586d7e255ae6fbc7e38c1187",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f4/a9658864d1d2ff458e5e612cf4875947e262ec": "2271fbf304193bc1486ef30251d9ebe8",
".git/objects/f8/330b3fcceff62055342e3e0a5650437c0582d0": "eb07cdc30f1b34f781db717dbe80eba2",
".git/objects/fb/944b8a39a27d9876b7df8e0ad51010647a19d5": "eb616e3d49369c73cd2eb72725054880",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/ff/f3588fbb1eeaf181c16a6efb6be43e4dbec37e": "eeba1cc1b5782d6963a48b30eed12c55",
".git/refs/heads/main": "54f4ec57da96da9d3e81451048c8512e",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "54f4ec57da96da9d3e81451048c8512e",
"assets/AssetManifest.bin": "51e8559db354a666d3da184af3bb764c",
"assets/AssetManifest.bin.json": "c822fdfb593d2c2ecd76d333b3f6abe5",
"assets/AssetManifest.json": "aab4801b146b1c673da8d927cd926e52",
"assets/assets/profile.png": "69b711654eefc6ed1373e96c6e331d2c",
"assets/assets/skills_icon/angular.png": "2de556d0a3950dd52cae4ecccec6bd91",
"assets/assets/skills_icon/aspcore.png": "c826dc020957da0bfccb99c11d4b13f2",
"assets/assets/skills_icon/aspmvc.jpeg": "b968ae670f70fbfa600fee3aef2afcde",
"assets/assets/skills_icon/aspmvc.png": "679b3783830b76e4b5fe21e2e2005654",
"assets/assets/skills_icon/aspnet.png": "1b9b898b4047396d2980f9ce87d64d02",
"assets/assets/skills_icon/aspzero.png": "f7bb53ca67fe0801266868476e746adc",
"assets/assets/skills_icon/bootstrap.png": "e9815572e25adf645c7866527f02b7a5",
"assets/assets/skills_icon/csharp.png": "30f38a77007864957dd87f3da045129e",
"assets/assets/skills_icon/css.png": "09a9f0212278ccb935ddb08a84bfe271",
"assets/assets/skills_icon/firebase.png": "ec161661bdb734208d7cf9bf454b5821",
"assets/assets/skills_icon/flutter.png": "4fb9b83cd6cbeac22779a328c91fc6e8",
"assets/assets/skills_icon/git.png": "dc1fbd3079fe56688788208e0913512c",
"assets/assets/skills_icon/hive.png": "30151613bb47b9cecc8b3d6b78d49d0e",
"assets/assets/skills_icon/html.png": "7c43003f90aabe2f00c7a8b698d816de",
"assets/assets/skills_icon/javascript.png": "b2cfc8e57ad3163545da9f67aa70cd66",
"assets/assets/skills_icon/json.png": "693fa6e26e3ebe6a9a5597618bddfdbc",
"assets/assets/skills_icon/laravel.png": "4362151b0ac0b2715f29c6892b3d5656",
"assets/assets/skills_icon/mysql.png": "d26b2baad850cc3749fe814dda02b38d",
"assets/assets/skills_icon/node.png": "3d2e7036febc7d59b65f3a253683d9ec",
"assets/assets/skills_icon/php.png": "92b198d8ce73b00eb1625da554ac67d2",
"assets/assets/skills_icon/react.png": "dec13a18266691aaaa011633d7f1f68c",
"assets/assets/skills_icon/sqlserver.png": "712d391369723024febb0c6819318302",
"assets/assets/skills_icon/supabase.png": "094d7fa1ea52341f9a6336e6972af235",
"assets/assets/skills_icon/vue.png": "17a6510bd8f6fb6133926b30a99acdce",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "4cb965443005350b246e65a300419222",
"assets/NOTICES": "c530374e280c356de47aa89ae732ef30",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "5f72d664707e4d711a1c0c240912cd50",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "a96eb2260ca81f6ab63444ce9bb78432",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "20217a59a0431c1a6ca971e91a647938",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "8a891650d1a8cf63ddbbe98ad2c8abcf",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "8d0116292ea3665767c560b46f48e1b8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "40a60e67628366727c7fffd5e8c4cbfd",
"/": "40a60e67628366727c7fffd5e8c4cbfd",
"main.dart.js": "f06a908d0a1edc20bb19af5ccdb9ebfc",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
