'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "69a904ac9adfbefaa69a720e4c13780a",
".git/config": "d77cfe95886d56b1fa9996c4581771af",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "76e2f6d68fe3fddf838c92039498c8be",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5649fdf7653951558e74c8a602e8ca58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "02b0990da7a2b42aa50856daf09da22f",
".git/logs/refs/heads/master": "02b0990da7a2b42aa50856daf09da22f",
".git/logs/refs/remotes/origin/HEAD": "a51a7fd5bd61344fa2d4dcb5208ef699",
".git/logs/refs/remotes/origin/master": "a36e14edc91af2f526f36c4fbba70125",
".git/objects/03/207f202280fc17a26e07a2cf51e6ad5eb5c784": "20df2c90e3a34ab90f69d6538a31ab4f",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/05/a6d0c214f5df886caba161a7b14ffa19e2a853": "820274e1c4b33fe76481bdce2d52110a",
".git/objects/05/cf568aeb17b16624861d676a2a997ecfef60fd": "89d6df019c7f74de4d9f1107d539c870",
".git/objects/06/048054bf05c3f0fb3868eba06f512bda7af272": "4eac285dd285a2354f2880298ed27324",
".git/objects/0f/50b1f3d3c0310d9f69e1072b727d6f2a1230e2": "a37ace47306ff5cd3cdb64d3750336a9",
".git/objects/12/0f9b6b52a247b6ac43872816114e102355a1f0": "4becd068c7ce6747e5e18d8ed4679fbf",
".git/objects/16/690abd573c6ed80971f9498d1dd16a7f250036": "2a246de2d11c41acb18df71bed1e165b",
".git/objects/17/3b54db842fc758e5868b126402e26452b30337": "2ce4b1bb2574cc021bfdea5c314fd7de",
".git/objects/1d/1c51020bcc7e2ad932798fce6c88a2a02afbad": "30c6df7612c52aa5f2738f05d48992a6",
".git/objects/1d/b0be79b994b9015cc6b8f44680e655894a1af7": "43c0a45fcccb26cb1725865f35c3df6f",
".git/objects/22/8d6e89b34573f605dc081458a0a4e85d77b8f2": "2ec320b410076e0ea626caa7deabc299",
".git/objects/22/abd382564caed287df7ad3aa2f27e6ac01e57e": "f413f7502419aa5f8242747f0653b5cd",
".git/objects/24/1d393eb895e4bc775d19ac435edd2dad3dde78": "640645fb0822a262a7eb767552b733ef",
".git/objects/26/8179e90fe7625606385ac76b9133d38d50a525": "59ba664eae985f62ef6da49935c6abab",
".git/objects/29/35653b2c23175242e5101c7331277ae409c0f0": "c20d5b3b98a9d81e1dca20539421d0eb",
".git/objects/30/913b290b414a261255af462f756913ccfab255": "b10281a02686dc423ea55ba543bc3fc5",
".git/objects/32/54f8b6b30bb2035b5a1de01641e91fb7904eb2": "afda77d22ddc9d4938e13a140c12d959",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/3e65152bcf355d7074542804c2e32d952caa7d": "cc0862755231a672434b563215e46196",
".git/objects/35/6b6672a9227cb006d2fe97ea55b8fef717b868": "e1028c3a50d22f5045e457dba3b93216",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/35/daf817811686f998c6277342a4bbb798e0c987": "2e8bca36f4ba0f18d461c2586ce75fa8",
".git/objects/39/baaab8d8cad0645aaf329f7a056e7126c9f416": "ced4ef042a260c33f86b80f78322a0c3",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/42/5dda108f2f75b0c912aa9c79e1199a8dc6d829": "22c1113f8d5e412ad34a54f0b0d9fe64",
".git/objects/42/d3d5490f706f769e96bfc4a3ec917281c2b686": "58b9da3778fddfaba0b0f2ba4ff3c763",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/28bb7bb829f5274d3d8696eb9f0e58e44ac1b2": "88dd9e315e21279fe3c9caad0905411f",
".git/objects/4c/b9d4608627a128153e66548fabc860629f18a5": "c0df35ab736855e85f01152093aaa658",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/54/2ceff2697921e8ec8a1e7aaa1be5297fa246b0": "764ae6ab2403f9196c98bc56e90e88a8",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/58/5e562e745c4b656aa6a4a0933c2d6e6e07aaec": "ec22e4dffcdf47806721df986cff77b1",
".git/objects/58/701cf42dbc5ece6f975b19d01f3f781130f114": "9181641c0cb39ee96e144b1d5ecb6db6",
".git/objects/5e/08efdd67470bbbf97983e855f966e5476b4be0": "7edd3d561813b939b6f0d7ec7475af92",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/69/35ceb94e66080d9bab08db1857d1fa234bf422": "9718da3e14b007187a88bedcd7518d32",
".git/objects/6a/4c5f827396e28748be23d1c082b626e719b378": "9e6a17915742ddc9a800d2c5c7ad2848",
".git/objects/6a/9b548762941aff145325656078e4b42f0fc12f": "7407aa79678d7761c0ab182a803c3817",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/939da54c0414bf54e875e39a028bc3a12c453a": "c8a677a38f8be7b897db6b93bfa8e865",
".git/objects/6d/905b011b6ad3b3d3ee2fd9adac1000ce7ea431": "a6a6ac112deb125b588cf7d9867ef748",
".git/objects/6e/cd89c28315205885e7ca0d56df992c9801103f": "247febec1582f2ec3fc9d65f142d0d80",
".git/objects/70/a8d0e0420a347030fb87eefbb99997d87a6882": "f9fbf5b9474c69bfecc95397e41d2335",
".git/objects/72/68eb2cdd7e0c0b135fa087690b854644305c41": "592026e3e4520047c35f40d7f5e50c6e",
".git/objects/80/988f3b502e8c976ddea8f9c3009cfed363cf84": "846002617e424583d1bb5bbd75cda5ec",
".git/objects/82/063efe4b9508b68c2fd66c8821b4689505a87a": "e5c55c302fc927523516a21209a64f34",
".git/objects/87/a1020841e936636db37332c53d23f0b7e96aa6": "1290356642cb2df17aa7d5ef2afa1070",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/4526171a96fcbe788b8f04a6e9b95d8ee8d101": "aeb7bb115e941613a9a31f8e75f928cc",
".git/objects/8e/b4777a7869ef1d6fc8f9fbb64e8e4a3a58e1a7": "a33d40aba53bf065a86861887c0e5906",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/93/1de00bf50f663c6a8383463780edad8bc25554": "f43adcbe734860cbe13040f3cb7ab779",
".git/objects/96/6a89fdca5f89ff6dafd9b125fce248e1cdc108": "6a3066d4b752ede76d916714d3084b75",
".git/objects/98/e227ee8e742617fd6f10b7684ba094e58cb286": "389ec78eebbd31d8faed79e02c778da0",
".git/objects/9b/a46327fdd4bc7fd30aa5c9eb9f120b713ab1e6": "cc881c285e60eae1301edadbc5b50125",
".git/objects/9d/7414514ac9f4e61e5b11fb984c83d6a7cba2cc": "9892da46678faa61bdd05b756a0f62fe",
".git/objects/a1/aa9bb27c828513f4728e33420dcd2610abe25a": "f9733ab8349c400e6493461efd6525f6",
".git/objects/a4/80eeb0e66aa1ac2fc72b3c83d10e42d328ecb4": "b4b6904b2230b03dece93b06ca6a4adc",
".git/objects/a4/bf2978049d19b22132a97582d87b13cb589b0b": "d98e41865b1934e71ff40ebd4700dd82",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/aa/45a92418b812392984ac1d3dbcd74cdcbb213e": "c2ed3771ce64a7fee9933b18b90e8768",
".git/objects/aa/9e086d1d09cdb2b58c9f0ccef6256350179856": "80c25c3f6ca33b3c3036c7d5fa14f6c6",
".git/objects/ac/b09a7e12144619171ff4f271f8c9b49ba95048": "dc78543cf76fc47b2816b9bbecdf4006",
".git/objects/b1/5891a3fd8b327389ed5b0bf9876226e2edeb6f": "7b2afccc9917be4e22118c8c806efb1e",
".git/objects/b4/08e2fad393f64bbc8e224f20a06ccc5a794fa7": "36b0cda7b461a13cb57d6d56ffa60e50",
".git/objects/b4/16a02407a53ad77954303f6defbc46b1b45b45": "c451be1dc09cab4454f4f4be6a93c477",
".git/objects/b4/642ae9c6c85829e963b7d04002705d8c398f0a": "c21c851babcab9ef206193e5a02743fe",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/66c1c68078f4e9d5a452bb2130dbb3b4fb8108": "f551df36792ef00630e015ef19b5572d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/21e5f50da04fec59f56c212f4ddc2b617c1b87": "15af380846bc28b7b364c56b818f1bb9",
".git/objects/c2/93948c9714ea8b5525368f6661d43d20fe5720": "a06df27c666f4a904e43d093d2411b96",
".git/objects/c7/84e721f9664907cd636e85cfd9629b53eacc41": "6f81da52fe47ca15cb4beced61a19573",
".git/objects/c9/5e287a3507430df06858044786bb870ff557a8": "311430367e4030e2453ca5ed3b94739a",
".git/objects/cf/c9575ead533774b5590feb546022cd10e1a9db": "7e642166239cc9071b2a0aa90e54c4ac",
".git/objects/d1/3da2b691a6e248a0e6abe858b229e39e0326da": "fdf33700c86f20b90995851a4ccfc216",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d7/d5124babbf39e9b1191704ced1b2c6343a017e": "09743de24ef53e9cd2878a98ee71b68b",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d9/a27597d2a97519f7339512e8d88c44fd8eafd8": "58ef816690f42a0b1733e231760abb61",
".git/objects/d9/f2a1ac590593a91aae4bec3881a894912c87b1": "d5910c2d5e67c5f9bb3978872e258386",
".git/objects/db/a1429629150f5d31e1d015541573ade13d3688": "5f1feccab3a2fdea0bed69d5d68c61d9",
".git/objects/db/e5ae9f8c455ecec31851e600f710543906e766": "d21634d35a1e243154aeaa6755990745",
".git/objects/e1/14b72d70f45fd7943a5f37f040bb5087aebff6": "78e8527bd8e2abd55ab98edf57d689dc",
".git/objects/e6/3adea03ca981ef04948580f3b6c74a404d4175": "ea53559853266e5e9c68049aa7ec7c10",
".git/objects/e7/926d1c21d6ab4162dd9ec7c3e8696eb3e5a11c": "6bc421ba7d94b473e242055b88d853a9",
".git/objects/e8/5e97b7f6e1e6f9323d47b4ff05d6cbf6dc4f25": "f5ca73122c0fabb8ef710b6b782b9336",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/416d2f0122be63e5af9956d4769f81671be5bd": "e24110c6d3fca24dcd24ce8ba5a75bb5",
".git/objects/ec/98a7ae6a129eada8e14fc896c38006664bae05": "ba3c299531f770338f6c32130749c48d",
".git/objects/ee/aca46573cfe2d86a8cef480fe3b8eea8ba52b5": "b2c77f8142e516717945297d36e74d84",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/6e57c183f6580cadb19b6e8b94186ede167c02": "64b936c4385688323c6e59c34632ea71",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f8/981043ba30279a6ca5c01ba2da674204c29d35": "bd327aa39c0d9a64c0a9e1816d12eec0",
".git/objects/fa/00ea4f8a94f031f6456ed94b64b362e733950f": "f41ee46a232c78bd9a5530f2dd0167ea",
".git/objects/fb/49c9fa8a9837483b0f236cb55008ee63fd6652": "cd02bf0faafda9139e043ba84fef69a5",
".git/refs/heads/master": "f7eb7c4340c424ae7b9dd5bab8639fe1",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "f7eb7c4340c424ae7b9dd5bab8639fe1",
"assets/AssetManifest.bin": "b65c4a8c78d069992297fd0c8af63964",
"assets/AssetManifest.bin.json": "21619c5ac73b90c1d17f0e18b57ccede",
"assets/AssetManifest.json": "4fa35815a1ab59e1091e6481ac7529b9",
"assets/assets/images/banner.png": "2ac8fb4f985a6505ab144960bbacd75c",
"assets/assets/images/brand.jpg": "9f4cd5a2ac4310726e2ca5fa29aae308",
"assets/assets/images/category.png": "516752c838ef96f41a6278e0945623cd",
"assets/assets/images/chat.png": "cae1d9774bd419c7cceb2b8062088889",
"assets/assets/images/chat_off.png": "0c6d4e7175c1ecd12017ad256b20c5fc",
"assets/assets/images/home.png": "08c864e3b2a5b66502ee6c728c55e388",
"assets/assets/images/home_off.png": "3b1ec75100dde8180ca4a3a775014f69",
"assets/assets/images/logo.png": "64881828ddd47c38f3bb5674c09433e0",
"assets/assets/images/new.jpg": "db038b0d7198c42eacc80c4ef20213b7",
"assets/assets/images/news.png": "b2817d36dd2c7e969471aa879f7cb338",
"assets/assets/images/order.png": "dd0f98fc456bc0bb9f9e58b4574b7c17",
"assets/assets/images/order_off.png": "2b43eceedb57fa921535ee583c5e4bb0",
"assets/assets/images/product.png": "af49a7412ba9ed6102c675c313421692",
"assets/assets/images/product_off.png": "53dcccf2542105eec450b39d682e8ebd",
"assets/assets/images/supplier.png": "d2693001a1bc3c9b90c5e86e41ce40a7",
"assets/assets/images/supplier_off.png": "60858f8cdd8baf560b3cf9c994e71159",
"assets/assets/images/user.png": "af52bd1ca77e37292fa4de44d091cb91",
"assets/assets/images/user_off.png": "7450a1c8dd277c5bd8b112c4c810b02b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "64b4a15f748e03cb6ff820faca05e7d0",
"assets/NOTICES": "62802c12bb54701dbbab801035bf2833",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
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
"flutter_bootstrap.js": "43c48463ddc86f480fa88ce6da389465",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4037be93e33aa16aac30db4c61494711",
"/": "4037be93e33aa16aac30db4c61494711",
"main.dart.js": "1f1d598f7cb7050bb146fe037fd57002",
"manifest.json": "4506d391677d9f94f2d8a69885a93b6c",
"version.json": "6d0bb761325539e72e40ae2f6db4cab4"};
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
