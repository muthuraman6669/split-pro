if(!self.define){let e,a={};const i=(i,s)=>(i=new URL(i+".js",s).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let o={};const r=e=>i(e,n),d={module:{uri:n},exports:o,require:r};a[n]=Promise.all(s.map((e=>d[e]||r(e)))).then((e=>(c(...e),o)))}}define(["./workbox-2e6be583"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/AppImages/android/android-launchericon-144-144.png",revision:"ddc9382a61e8c4312c0db146f0f9e795"},{url:"/AppImages/android/android-launchericon-192-192.png",revision:"56d41da404aebf72591ba359ac4342dc"},{url:"/AppImages/android/android-launchericon-48-48.png",revision:"af2ebf4fb40c50e664e7f5f512e616c8"},{url:"/AppImages/android/android-launchericon-512-512.png",revision:"2daaec44f6f1a6f93a9ea630c57007d9"},{url:"/AppImages/android/android-launchericon-72-72.png",revision:"9dcbdb65c4e1570950b17f10c492e6e5"},{url:"/AppImages/android/android-launchericon-96-96.png",revision:"4909fdc46c57b514570ccbe77c6a98c5"},{url:"/AppImages/icons.json",revision:"5dbbc3fe59816e65ba28e355a58ea45c"},{url:"/AppImages/ios/100.png",revision:"b842fec6650ebb45ffaebd0e0006801e"},{url:"/AppImages/ios/1024.png",revision:"e45d66f4cc59e49d33f1cd7b313ba685"},{url:"/AppImages/ios/114.png",revision:"9d3a2ee32617f2b0055055c387af923a"},{url:"/AppImages/ios/120.png",revision:"723d3acbc4effff965f4dd7f4d51a310"},{url:"/AppImages/ios/128.png",revision:"617afb7ef47b431253fc06930fb66eb9"},{url:"/AppImages/ios/144.png",revision:"ddc9382a61e8c4312c0db146f0f9e795"},{url:"/AppImages/ios/152.png",revision:"9722d222fffcfb48189271c4bb0d12f6"},{url:"/AppImages/ios/16.png",revision:"ca1141fcf86e394132d2cc1f63f80bec"},{url:"/AppImages/ios/167.png",revision:"23c9beb995aba218b10fd0a0d68c8584"},{url:"/AppImages/ios/180.png",revision:"17321d38a1aed6ddb5c446a09930c599"},{url:"/AppImages/ios/192.png",revision:"56d41da404aebf72591ba359ac4342dc"},{url:"/AppImages/ios/20.png",revision:"172ca20ff33d8c2a2e2cc3f769658bc5"},{url:"/AppImages/ios/256.png",revision:"b6486c8488cf72bf10ec92adc6ce3a45"},{url:"/AppImages/ios/29.png",revision:"1a560c3a70262df72f2795afd67fcbc0"},{url:"/AppImages/ios/32.png",revision:"2f09458fee1ccb7fa9f6475114cdef2f"},{url:"/AppImages/ios/40.png",revision:"0dcb092d1e1830349a9d62a1508f5937"},{url:"/AppImages/ios/50.png",revision:"d53b8515a97286f8050366d09883911e"},{url:"/AppImages/ios/512.png",revision:"2daaec44f6f1a6f93a9ea630c57007d9"},{url:"/AppImages/ios/57.png",revision:"375b54eb2dad2451b5fc122e73a16d1e"},{url:"/AppImages/ios/58.png",revision:"7871c540f63e9672c87da22123ce5ef6"},{url:"/AppImages/ios/60.png",revision:"4f378f51a8b0cc4c9f55af09cc7b3edd"},{url:"/AppImages/ios/64.png",revision:"c6bcc8a76614b36becc4b3cf25b05a9a"},{url:"/AppImages/ios/72.png",revision:"9dcbdb65c4e1570950b17f10c492e6e5"},{url:"/AppImages/ios/76.png",revision:"8f4ebcb6c739ba1efc76e195075b69f3"},{url:"/AppImages/ios/80.png",revision:"b47241c5f543ba17da36cc6d06d501a1"},{url:"/AppImages/ios/87.png",revision:"ae8e7912af34fc9b577f74722334ee33"},{url:"/AppImages/windows11/LargeTile.scale-100.png",revision:"a38018909606f1ea14096b473d717d10"},{url:"/AppImages/windows11/LargeTile.scale-125.png",revision:"95112f28c87c09ba7772407bb0ac201d"},{url:"/AppImages/windows11/LargeTile.scale-150.png",revision:"faca15a24443be86401733ee77be6f8a"},{url:"/AppImages/windows11/LargeTile.scale-200.png",revision:"480ce6e9123714da5c07e37d42cd245f"},{url:"/AppImages/windows11/LargeTile.scale-400.png",revision:"133e2f8633addff9c488d4be70436191"},{url:"/AppImages/windows11/SmallTile.scale-100.png",revision:"492472dd266cbe970bfdea79f38d253b"},{url:"/AppImages/windows11/SmallTile.scale-125.png",revision:"d0ea5f207a4b7bbdc51a95c961e3502a"},{url:"/AppImages/windows11/SmallTile.scale-150.png",revision:"c37bad5b303475de1030ef4982a58fef"},{url:"/AppImages/windows11/SmallTile.scale-200.png",revision:"7c4fd87c5c54824d01615f86bd79f2e6"},{url:"/AppImages/windows11/SmallTile.scale-400.png",revision:"d03355ec0ec3ac7dfee6001c960fc864"},{url:"/AppImages/windows11/SplashScreen.scale-100.png",revision:"117ae2d8bed9c0fb4cfd45c3bbacf8a2"},{url:"/AppImages/windows11/SplashScreen.scale-125.png",revision:"2cc180a34cf3370ac981941666368d98"},{url:"/AppImages/windows11/SplashScreen.scale-150.png",revision:"2a147463a0c4cd65e23321045d3196b6"},{url:"/AppImages/windows11/SplashScreen.scale-200.png",revision:"79d8e81bfb80fabe5c8283cd1a96bbdc"},{url:"/AppImages/windows11/SplashScreen.scale-400.png",revision:"45262545b6fff0b1bca92d1af812c5ec"},{url:"/AppImages/windows11/Square150x150Logo.scale-100.png",revision:"784a20be0a13d8c035b2dc0e464151e0"},{url:"/AppImages/windows11/Square150x150Logo.scale-125.png",revision:"5f7957cbe0593ab7f19217337ad7dd8c"},{url:"/AppImages/windows11/Square150x150Logo.scale-150.png",revision:"26622aa21f3a898ee93ccc76526ddaa9"},{url:"/AppImages/windows11/Square150x150Logo.scale-200.png",revision:"2e629aa0a4fe30d6bd2d11cb7b6afe78"},{url:"/AppImages/windows11/Square150x150Logo.scale-400.png",revision:"6c2142c31ea2b3988c424784be2e489a"},{url:"/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"ca1141fcf86e394132d2cc1f63f80bec"},{url:"/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"172ca20ff33d8c2a2e2cc3f769658bc5"},{url:"/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"920eddf8a71a6d068426ddb17acf7786"},{url:"/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"b6486c8488cf72bf10ec92adc6ce3a45"},{url:"/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"e9caa6edc747267a5de072a3711beefd"},{url:"/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"2f09458fee1ccb7fa9f6475114cdef2f"},{url:"/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"e5357d571470a530efad4d8750f7e2e2"},{url:"/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"0dcb092d1e1830349a9d62a1508f5937"},{url:"/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"2b4892b8d610f37971d06b0c85ead771"},{url:"/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"af2ebf4fb40c50e664e7f5f512e616c8"},{url:"/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"4f378f51a8b0cc4c9f55af09cc7b3edd"},{url:"/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"c6bcc8a76614b36becc4b3cf25b05a9a"},{url:"/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"9dcbdb65c4e1570950b17f10c492e6e5"},{url:"/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"b47241c5f543ba17da36cc6d06d501a1"},{url:"/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"4909fdc46c57b514570ccbe77c6a98c5"},{url:"/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"ca1141fcf86e394132d2cc1f63f80bec"},{url:"/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"172ca20ff33d8c2a2e2cc3f769658bc5"},{url:"/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"920eddf8a71a6d068426ddb17acf7786"},{url:"/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"b6486c8488cf72bf10ec92adc6ce3a45"},{url:"/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"e9caa6edc747267a5de072a3711beefd"},{url:"/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"2f09458fee1ccb7fa9f6475114cdef2f"},{url:"/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"e5357d571470a530efad4d8750f7e2e2"},{url:"/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"0dcb092d1e1830349a9d62a1508f5937"},{url:"/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"2b4892b8d610f37971d06b0c85ead771"},{url:"/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"af2ebf4fb40c50e664e7f5f512e616c8"},{url:"/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"4f378f51a8b0cc4c9f55af09cc7b3edd"},{url:"/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"c6bcc8a76614b36becc4b3cf25b05a9a"},{url:"/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"9dcbdb65c4e1570950b17f10c492e6e5"},{url:"/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"b47241c5f543ba17da36cc6d06d501a1"},{url:"/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"4909fdc46c57b514570ccbe77c6a98c5"},{url:"/AppImages/windows11/Square44x44Logo.scale-100.png",revision:"2b4892b8d610f37971d06b0c85ead771"},{url:"/AppImages/windows11/Square44x44Logo.scale-125.png",revision:"8b9a0b429edb4de9154c0e607de78a11"},{url:"/AppImages/windows11/Square44x44Logo.scale-150.png",revision:"e9effe2ae99aeb1d8737d8e73ea93bf6"},{url:"/AppImages/windows11/Square44x44Logo.scale-200.png",revision:"6bae7f4f09cc4f5f349986895a847af6"},{url:"/AppImages/windows11/Square44x44Logo.scale-400.png",revision:"3726c8ea2fca8ccca54c0413cef24a27"},{url:"/AppImages/windows11/Square44x44Logo.targetsize-16.png",revision:"ca1141fcf86e394132d2cc1f63f80bec"},{url:"/AppImages/windows11/Square44x44Logo.targetsize-20.png",revision:"172ca20ff33d8c2a2e2cc3f769658bc5"},{url:"/AppImages/windows11/Square44x44Logo.targetsize-24.png",revision:"920eddf8a71a6d068426ddb17acf7786"},{url:"/AppImages/windows11/Square44x44Logo.targetsize-256.png",revision:"b6486c8488cf72bf10ec92adc6ce3a45"},{url:"/AppImages/windows11/Square44x44Logo.targetsize-30.png",revision:"e9caa6edc747267a5de072a3711beefd"},{url:"/AppImages/windows11/Square44x44Logo.targetsize-32.png",revision:"2f09458fee1ccb7fa9f6475114cdef2f"},{url:"/AppImages/windows11/Square44x44Logo.targetsize-36.png",revision:"e5357d571470a530efad4d8750f7e2e2"},{url:"/AppImages/windows11/Square44x44Logo.targetsize-40.png",revision:"0dcb092d1e1830349a9d62a1508f5937"},{url:"/AppImages/windows11/Square44x44Logo.targetsize-44.png",revision:"2b4892b8d610f37971d06b0c85ead771"},{url:"/AppImages/windows11/Square44x44Logo.targetsize-48.png",revision:"af2ebf4fb40c50e664e7f5f512e616c8"},{url:"/AppImages/windows11/Square44x44Logo.targetsize-60.png",revision:"4f378f51a8b0cc4c9f55af09cc7b3edd"},{url:"/AppImages/windows11/Square44x44Logo.targetsize-64.png",revision:"c6bcc8a76614b36becc4b3cf25b05a9a"},{url:"/AppImages/windows11/Square44x44Logo.targetsize-72.png",revision:"9dcbdb65c4e1570950b17f10c492e6e5"},{url:"/AppImages/windows11/Square44x44Logo.targetsize-80.png",revision:"b47241c5f543ba17da36cc6d06d501a1"},{url:"/AppImages/windows11/Square44x44Logo.targetsize-96.png",revision:"4909fdc46c57b514570ccbe77c6a98c5"},{url:"/AppImages/windows11/StoreLogo.scale-100.png",revision:"d09d715d3c237a0f5218a37bdbeb4526"},{url:"/AppImages/windows11/StoreLogo.scale-125.png",revision:"a1aeec33ac0a8cf1f699095c79121d9a"},{url:"/AppImages/windows11/StoreLogo.scale-150.png",revision:"6ba6ad4db19c4a08275b1fcdd1bc40f8"},{url:"/AppImages/windows11/StoreLogo.scale-200.png",revision:"111cf74a4e34b820b2c994a6ab0184f6"},{url:"/AppImages/windows11/StoreLogo.scale-400.png",revision:"f2a75559d4c0e804c109358bc8746d86"},{url:"/AppImages/windows11/Wide310x150Logo.scale-100.png",revision:"070a7bb6f385a6b584bccb18739a1a04"},{url:"/AppImages/windows11/Wide310x150Logo.scale-125.png",revision:"c2bebe3a523ac07455046c28ad0b87ea"},{url:"/AppImages/windows11/Wide310x150Logo.scale-150.png",revision:"91a99c130386b7543b4900d8b7a99c12"},{url:"/AppImages/windows11/Wide310x150Logo.scale-200.png",revision:"117ae2d8bed9c0fb4cfd45c3bbacf8a2"},{url:"/AppImages/windows11/Wide310x150Logo.scale-400.png",revision:"79d8e81bfb80fabe5c8283cd1a96bbdc"},{url:"/OSI.svg",revision:"5dfa5b6894bb858e5bf30fc238eec943"},{url:"/PWA.svg",revision:"5ead82cf82ebdc1e4f3542b5c126802e"},{url:"/_next/static/_7PxHGP8qmq_OnMwaHV9K/_buildManifest.js",revision:"6c4f58e851989f3b0b5fbbd706620db5"},{url:"/_next/static/_7PxHGP8qmq_OnMwaHV9K/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/269-bd1264f9a74a1082.js",revision:"bd1264f9a74a1082"},{url:"/_next/static/chunks/293-9b87a02c5ab2a5cf.js",revision:"9b87a02c5ab2a5cf"},{url:"/_next/static/chunks/320-7841e8822606966d.js",revision:"7841e8822606966d"},{url:"/_next/static/chunks/403-88315c2dccd43f80.js",revision:"88315c2dccd43f80"},{url:"/_next/static/chunks/469-b28400ce8e3d10b5.js",revision:"b28400ce8e3d10b5"},{url:"/_next/static/chunks/484-4f2a826d020c8abd.js",revision:"4f2a826d020c8abd"},{url:"/_next/static/chunks/629-4be2f6211c96e22d.js",revision:"4be2f6211c96e22d"},{url:"/_next/static/chunks/631-443b6b33fd9a443a.js",revision:"443b6b33fd9a443a"},{url:"/_next/static/chunks/674-32d8f1d6ac3ecabd.js",revision:"32d8f1d6ac3ecabd"},{url:"/_next/static/chunks/782-fd80226ab1250ff7.js",revision:"fd80226ab1250ff7"},{url:"/_next/static/chunks/822-5112d335acc57f78.js",revision:"5112d335acc57f78"},{url:"/_next/static/chunks/883-49cf3b4d3a98a17b.js",revision:"49cf3b4d3a98a17b"},{url:"/_next/static/chunks/926-a35b54f269beeda5.js",revision:"a35b54f269beeda5"},{url:"/_next/static/chunks/946-70231cc63932dfba.js",revision:"70231cc63932dfba"},{url:"/_next/static/chunks/framework-49ac320dc6ce0e7a.js",revision:"49ac320dc6ce0e7a"},{url:"/_next/static/chunks/main-10d2924a1fd80a5e.js",revision:"10d2924a1fd80a5e"},{url:"/_next/static/chunks/pages/_app-93d1c2734f564fa3.js",revision:"93d1c2734f564fa3"},{url:"/_next/static/chunks/pages/_error-7b3af279a8dc815e.js",revision:"7b3af279a8dc815e"},{url:"/_next/static/chunks/pages/account-a7224e33bea2b400.js",revision:"a7224e33bea2b400"},{url:"/_next/static/chunks/pages/activity-cc093c4df38afc6f.js",revision:"cc093c4df38afc6f"},{url:"/_next/static/chunks/pages/add-89beb8aa72e723c4.js",revision:"89beb8aa72e723c4"},{url:"/_next/static/chunks/pages/auth/signin-62d9a9a776d97a8f.js",revision:"62d9a9a776d97a8f"},{url:"/_next/static/chunks/pages/balances-d3727e485b305f3c.js",revision:"d3727e485b305f3c"},{url:"/_next/static/chunks/pages/balances/%5BfriendId%5D-663a3fef8332df03.js",revision:"663a3fef8332df03"},{url:"/_next/static/chunks/pages/balances/%5BfriendId%5D/expenses/%5BexpenseId%5D-455c3993f3591ae6.js",revision:"455c3993f3591ae6"},{url:"/_next/static/chunks/pages/balances/expenses-dad1081894cc55c9.js",revision:"dad1081894cc55c9"},{url:"/_next/static/chunks/pages/expenses/%5BexpenseId%5D-9bf81dcfbbea4793.js",revision:"9bf81dcfbbea4793"},{url:"/_next/static/chunks/pages/groups-afc810bfead3cc19.js",revision:"afc810bfead3cc19"},{url:"/_next/static/chunks/pages/groups/%5BgroupId%5D-519f3433933e5bfb.js",revision:"519f3433933e5bfb"},{url:"/_next/static/chunks/pages/groups/%5BgroupId%5D/expenses/%5BexpenseId%5D-f0f77657855a4fb8.js",revision:"f0f77657855a4fb8"},{url:"/_next/static/chunks/pages/index-78991f7d8fe22cd1.js",revision:"78991f7d8fe22cd1"},{url:"/_next/static/chunks/pages/join-group-103c390968adbd15.js",revision:"103c390968adbd15"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-ce63874d5dde2a6d.js",revision:"ce63874d5dde2a6d"},{url:"/_next/static/css/1a57b0bd84fc361c.css",revision:"1a57b0bd84fc361c"},{url:"/_next/static/media/10939feefdad71be-s.woff2",revision:"72b3ae37567ee5efdf2254b657c36ba9"},{url:"/_next/static/media/20b8b8f6f47c1e10-s.woff2",revision:"7def222d1a45cb1cb7d8c3ae675dbdcc"},{url:"/_next/static/media/370d1cc320ec5619-s.woff2",revision:"a6ff41d10fa89e7f8fec937c243d7428"},{url:"/_next/static/media/3828f203592f7603-s.woff2",revision:"e9fd398a43c9e51f9ee14e757eaf95d9"},{url:"/_next/static/media/591327bf3b62a611-s.woff2",revision:"0ed299a4bb5262e17e2145783b2c18f1"},{url:"/_next/static/media/7777133e901cd5ed-s.p.woff2",revision:"a09f2fccfee35b7247b08a1a266f0328"},{url:"/_next/static/media/839135d04a097cea-s.woff2",revision:"79e6e81d255edac7e8627c7e16baccf5"},{url:"/_next/static/media/87c72f23c47212b9-s.woff2",revision:"790d0c8dbcd491d29d58f1369c199d40"},{url:"/_next/static/media/916d3686010a8de2-s.p.woff2",revision:"9212f6f9860f9fc6c69b02fedf6db8c3"},{url:"/_next/static/media/953974ac5e9ff354-s.woff2",revision:"6731e1ba3788bda094c89ee8fc131aef"},{url:"/_next/static/media/9a881e2ac07d406b-s.p.woff2",revision:"25b0e113ca7cce3770d542736db26368"},{url:"/_next/static/media/ac614beb32f7a7c2-s.woff2",revision:"20f5992a9c019fb146a38e1cc0c101d3"},{url:"/_next/static/media/aefc8ad6d88b3354-s.woff2",revision:"6a4298fc0390ec22c52f618daa0e82bf"},{url:"/_next/static/media/c04551857776278f-s.p.woff2",revision:"8d91ec1ca2d8b56640a47117e313a3e9"},{url:"/_next/static/media/d36a2a2bb416f59e-s.p.woff2",revision:"a7f7eebec745ef48ccf7a3d08c66d84a"},{url:"/_next/static/media/d869208648ca5469-s.p.woff2",revision:"72993dddf88a63e8f226656f7de88e57"},{url:"/_next/static/media/e025c64520263018-s.woff2",revision:"dc820d9f0f62811268590ff631f36be9"},{url:"/_next/static/media/f93b79c1ea023ab6-s.woff2",revision:"96b6d54684daa94742f7bfd72a981213"},{url:"/add_expense.svg",revision:"7fdcbf05378a944aaf1360306cc8190e"},{url:"/add_users.svg",revision:"a1fd9534b8d05e5ac456a2c2bcfd1b52"},{url:"/empty_img.svg",revision:"1ca0ba9508c6a056a269f0c6a74a19dc"},{url:"/favicon.ico",revision:"6d478c919fdae88b6c466c5b741b2fff"},{url:"/group.svg",revision:"257863ce59141a0bced069bfe4daefd7"},{url:"/hero.png",revision:"a1dcb9618e2c9534ae3253470ef35470"},{url:"/icons/android/android-launchericon-144-144.png",revision:"d26dfe9f8f37a30f07183a719433049a"},{url:"/icons/android/android-launchericon-192-192.png",revision:"abdcb0ed30631c6347c67dc2753e0395"},{url:"/icons/android/android-launchericon-48-48.png",revision:"8b85ee8f78ef860cd80f613912938cd4"},{url:"/icons/android/android-launchericon-512-512.png",revision:"18c457181514d42ea7e0eda4afcf62c9"},{url:"/icons/android/android-launchericon-72-72.png",revision:"9c2990a667a95633dfe7668cf36341a8"},{url:"/icons/android/android-launchericon-96-96.png",revision:"a2c0820b781ad2b6da73f5ad56b3a11e"},{url:"/icons/icons.json",revision:"5dbbc3fe59816e65ba28e355a58ea45c"},{url:"/icons/ios/100.png",revision:"fcc594c2b8038f51ba59f3d103c44749"},{url:"/icons/ios/1024.png",revision:"3e9c5484760462741b69ff018da909fa"},{url:"/icons/ios/114.png",revision:"c2dde23f19ceb9696d6d23866d7afade"},{url:"/icons/ios/120.png",revision:"014ebf2afbd808e5444cd20514a3748f"},{url:"/icons/ios/128.png",revision:"f1886369fbf2f654692034e8b741f122"},{url:"/icons/ios/144.png",revision:"d26dfe9f8f37a30f07183a719433049a"},{url:"/icons/ios/152.png",revision:"c2cc3492d4f28ae110dbdbae08fe272c"},{url:"/icons/ios/16.png",revision:"1cec384d49dc7990e0040449d7686cfd"},{url:"/icons/ios/167.png",revision:"46981ccd48eb7f32449e3e739fa6dd9b"},{url:"/icons/ios/180.png",revision:"e2aa9d5360a42c36a58a04da97113374"},{url:"/icons/ios/192.png",revision:"abdcb0ed30631c6347c67dc2753e0395"},{url:"/icons/ios/20.png",revision:"e6f353ee8e847296f046ac33ed13c593"},{url:"/icons/ios/256.png",revision:"63f366dc656672cc3e9ec7b3cae46225"},{url:"/icons/ios/29.png",revision:"e912a5a04eb1d2cd9b4ac59e9687ab94"},{url:"/icons/ios/32.png",revision:"3a3d9c8c99edc5f54672e244502b5e75"},{url:"/icons/ios/40.png",revision:"e8bf97e44fccb2858cc99e958b5caa34"},{url:"/icons/ios/50.png",revision:"30af4c34ee6a9807c266cd097ce7d1b0"},{url:"/icons/ios/512.png",revision:"18c457181514d42ea7e0eda4afcf62c9"},{url:"/icons/ios/57.png",revision:"736239cdae58d251b8c02cad5122a429"},{url:"/icons/ios/58.png",revision:"c24309d212beee92c2f8659c43f9ab5c"},{url:"/icons/ios/60.png",revision:"7961a411262c30c5a753b2edf7ca4451"},{url:"/icons/ios/64.png",revision:"d8c7b3b9679cbb6867648c11fe667947"},{url:"/icons/ios/72.png",revision:"9c2990a667a95633dfe7668cf36341a8"},{url:"/icons/ios/76.png",revision:"b9f3c39b14f8ebc14d9b903caa694787"},{url:"/icons/ios/80.png",revision:"bd85c5304e7b1bf2c563c28f4a530809"},{url:"/icons/ios/87.png",revision:"71efe63a0ed951b8e30f501a194d855e"},{url:"/icons/windows11/LargeTile.scale-100.png",revision:"adb69e756376411aa38d263ef0250012"},{url:"/icons/windows11/LargeTile.scale-125.png",revision:"1d9a51b6e74dcd7680277c657321e25a"},{url:"/icons/windows11/LargeTile.scale-150.png",revision:"069f48bf8ed04d6dbf3953a5573e2940"},{url:"/icons/windows11/LargeTile.scale-200.png",revision:"78a11fc9b6f0102d6ef0065c9c8709c4"},{url:"/icons/windows11/LargeTile.scale-400.png",revision:"0435e563e42158b19ace5d046158c6b4"},{url:"/icons/windows11/SmallTile.scale-100.png",revision:"bcda9978e0fc2f14c1dbf0750a34497a"},{url:"/icons/windows11/SmallTile.scale-125.png",revision:"92fbba910475fe2fa8d4149dbd026e8a"},{url:"/icons/windows11/SmallTile.scale-150.png",revision:"93299ba15686e16a89b0b9bd8589de9e"},{url:"/icons/windows11/SmallTile.scale-200.png",revision:"096562e1548d86d2f2ea5ca35e65ab2d"},{url:"/icons/windows11/SmallTile.scale-400.png",revision:"15fd044d08b45d4fff936220a6e2a2ab"},{url:"/icons/windows11/SplashScreen.scale-100.png",revision:"9012db7fd614e966587c6efff885b8ea"},{url:"/icons/windows11/SplashScreen.scale-125.png",revision:"5033aeb65fb237aa487842da4872a4e5"},{url:"/icons/windows11/SplashScreen.scale-150.png",revision:"7e8afe034941fe1c22c3ee3fbeb5a723"},{url:"/icons/windows11/SplashScreen.scale-200.png",revision:"b30d874c91324a737f5cd62651f3ce7e"},{url:"/icons/windows11/SplashScreen.scale-400.png",revision:"5ef787d4cf8f65a6dfceca5f82b2365f"},{url:"/icons/windows11/Square150x150Logo.scale-100.png",revision:"3f329ebfb29a0af8a30101a965614633"},{url:"/icons/windows11/Square150x150Logo.scale-125.png",revision:"14f3350dfe289b829b38ce53595bae67"},{url:"/icons/windows11/Square150x150Logo.scale-150.png",revision:"1243e42699499db48d1d92ad94a047f5"},{url:"/icons/windows11/Square150x150Logo.scale-200.png",revision:"00adc70afd9c44339dbe4fdaf5ea74ea"},{url:"/icons/windows11/Square150x150Logo.scale-400.png",revision:"a454c02b13afbeda515be52980abd27c"},{url:"/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"1cec384d49dc7990e0040449d7686cfd"},{url:"/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"e6f353ee8e847296f046ac33ed13c593"},{url:"/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"0865cd4c9f74e2c04157dea93c7ed471"},{url:"/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"63f366dc656672cc3e9ec7b3cae46225"},{url:"/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"f4ac4dee570fce942dd14f51c7f12ba5"},{url:"/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"3a3d9c8c99edc5f54672e244502b5e75"},{url:"/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"a1f2022c44aeb29cd7559f9259d46576"},{url:"/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"e8bf97e44fccb2858cc99e958b5caa34"},{url:"/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"63dd81a1c9699b026017cc8b3ab52df8"},{url:"/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"8b85ee8f78ef860cd80f613912938cd4"},{url:"/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"7961a411262c30c5a753b2edf7ca4451"},{url:"/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"d8c7b3b9679cbb6867648c11fe667947"},{url:"/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"9c2990a667a95633dfe7668cf36341a8"},{url:"/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"bd85c5304e7b1bf2c563c28f4a530809"},{url:"/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"a2c0820b781ad2b6da73f5ad56b3a11e"},{url:"/icons/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"1cec384d49dc7990e0040449d7686cfd"},{url:"/icons/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"e6f353ee8e847296f046ac33ed13c593"},{url:"/icons/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"0865cd4c9f74e2c04157dea93c7ed471"},{url:"/icons/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"63f366dc656672cc3e9ec7b3cae46225"},{url:"/icons/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"f4ac4dee570fce942dd14f51c7f12ba5"},{url:"/icons/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"3a3d9c8c99edc5f54672e244502b5e75"},{url:"/icons/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"a1f2022c44aeb29cd7559f9259d46576"},{url:"/icons/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"e8bf97e44fccb2858cc99e958b5caa34"},{url:"/icons/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"63dd81a1c9699b026017cc8b3ab52df8"},{url:"/icons/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"8b85ee8f78ef860cd80f613912938cd4"},{url:"/icons/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"7961a411262c30c5a753b2edf7ca4451"},{url:"/icons/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"d8c7b3b9679cbb6867648c11fe667947"},{url:"/icons/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"9c2990a667a95633dfe7668cf36341a8"},{url:"/icons/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"bd85c5304e7b1bf2c563c28f4a530809"},{url:"/icons/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"a2c0820b781ad2b6da73f5ad56b3a11e"},{url:"/icons/windows11/Square44x44Logo.scale-100.png",revision:"63dd81a1c9699b026017cc8b3ab52df8"},{url:"/icons/windows11/Square44x44Logo.scale-125.png",revision:"4277d47d4835b4ba4baff6dddc9e4da2"},{url:"/icons/windows11/Square44x44Logo.scale-150.png",revision:"8f456729a09e0dcdaf5cc7977423d4fd"},{url:"/icons/windows11/Square44x44Logo.scale-200.png",revision:"a3ec7b4fabb4c64cba9210f11791efeb"},{url:"/icons/windows11/Square44x44Logo.scale-400.png",revision:"eba97ea0ea35de483889fd05949cf603"},{url:"/icons/windows11/Square44x44Logo.targetsize-16.png",revision:"1cec384d49dc7990e0040449d7686cfd"},{url:"/icons/windows11/Square44x44Logo.targetsize-20.png",revision:"e6f353ee8e847296f046ac33ed13c593"},{url:"/icons/windows11/Square44x44Logo.targetsize-24.png",revision:"0865cd4c9f74e2c04157dea93c7ed471"},{url:"/icons/windows11/Square44x44Logo.targetsize-256.png",revision:"63f366dc656672cc3e9ec7b3cae46225"},{url:"/icons/windows11/Square44x44Logo.targetsize-30.png",revision:"f4ac4dee570fce942dd14f51c7f12ba5"},{url:"/icons/windows11/Square44x44Logo.targetsize-32.png",revision:"3a3d9c8c99edc5f54672e244502b5e75"},{url:"/icons/windows11/Square44x44Logo.targetsize-36.png",revision:"a1f2022c44aeb29cd7559f9259d46576"},{url:"/icons/windows11/Square44x44Logo.targetsize-40.png",revision:"e8bf97e44fccb2858cc99e958b5caa34"},{url:"/icons/windows11/Square44x44Logo.targetsize-44.png",revision:"63dd81a1c9699b026017cc8b3ab52df8"},{url:"/icons/windows11/Square44x44Logo.targetsize-48.png",revision:"8b85ee8f78ef860cd80f613912938cd4"},{url:"/icons/windows11/Square44x44Logo.targetsize-60.png",revision:"7961a411262c30c5a753b2edf7ca4451"},{url:"/icons/windows11/Square44x44Logo.targetsize-64.png",revision:"d8c7b3b9679cbb6867648c11fe667947"},{url:"/icons/windows11/Square44x44Logo.targetsize-72.png",revision:"9c2990a667a95633dfe7668cf36341a8"},{url:"/icons/windows11/Square44x44Logo.targetsize-80.png",revision:"bd85c5304e7b1bf2c563c28f4a530809"},{url:"/icons/windows11/Square44x44Logo.targetsize-96.png",revision:"a2c0820b781ad2b6da73f5ad56b3a11e"},{url:"/icons/windows11/StoreLogo.scale-100.png",revision:"1c85fc756c0c257bc32dedc710c5c555"},{url:"/icons/windows11/StoreLogo.scale-125.png",revision:"bc953609e9a569c9962f694db8924bfa"},{url:"/icons/windows11/StoreLogo.scale-150.png",revision:"128d6e8fdbd44e585556dbd26a32c11e"},{url:"/icons/windows11/StoreLogo.scale-200.png",revision:"f47f5b91ffa4f346ec790e608ec92134"},{url:"/icons/windows11/StoreLogo.scale-400.png",revision:"13acbd9c3b8b057cd244530e8a4f9d02"},{url:"/icons/windows11/Wide310x150Logo.scale-100.png",revision:"461ad5f07350b724593d8a268b32fa4a"},{url:"/icons/windows11/Wide310x150Logo.scale-125.png",revision:"273dc4a11b6f9cd03e477d30d401e27f"},{url:"/icons/windows11/Wide310x150Logo.scale-150.png",revision:"4b807fa3e3abbc9aad4f20f0cb46187a"},{url:"/icons/windows11/Wide310x150Logo.scale-200.png",revision:"9012db7fd614e966587c6efff885b8ea"},{url:"/icons/windows11/Wide310x150Logo.scale-400.png",revision:"b30d874c91324a737f5cd62651f3ce7e"},{url:"/logo.svg",revision:"e2422d796f4fa405457e732ccfdaa952"},{url:"/manifest.json",revision:"e9e1d06fe0d4f8c1cd91bde81af0b922"},{url:"/manifest/icon-192x192.png",revision:"6cc78ccadc0294f06ca360a22ce384a9"},{url:"/manifest/icon-256x256.png",revision:"dfdc33aaece99ee4045b1d8c6f572bb0"},{url:"/manifest/icon-384x384.png",revision:"f3627672e26b5c0cb5b87b73e34f4c1a"},{url:"/manifest/icon-512x512.png",revision:"3d68547ed86d64a5bda05c9f8a430711"},{url:"/manifest/manifest.webmanifest",revision:"8779685ba13925dd9af2b9ba463509ea"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:i,state:s})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
