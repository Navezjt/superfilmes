const apiKey = "fcfe44809de84129fab53e785124bb95";
const movieIds = [
  923939, 1167725, 1151703, 25095, 763820, 860267, 1074034, 818511, 804464, 1115128, 951491, 522526, 977770, 977592, 299054, 507903, 575157, 814776, 945729, 729120, 1130659, 983507, 1146348, 1093349, 1093994, 763261, 962279, 1088812, 1078862, 1072074, 1124624, 968051, 790493, 850871, 1152797, 1072371, 1172009, 820525, 353577, 1113448, 884184, 950071, 1122634, 1018754, 1075969, 1143190, 1073337, 991708, 1158385, 807023, 753601, 844409, 1076487, 532408, 869523, 936952, 885583, 791295, 970284, 977246, 1579, 540914, 983768, 1165111, 977223, 1135229, 1032696, 1126418, 892494, 1088080, 960481, 1121575, 916386, 1026542, 1064912, 823147, 828898, 978783, 760099, 782044, 1159086, 926393, 1150215, 1155458, 1030987, 1074262, 869641, 1126577, 1139819, 999644, 1151344, 830896, 1010826, 976553, 958340, 22538, 745391, 568467, 777245, 547404, 631583, 1146019, 522925, 920654, 1158959, 957445, 1142740, 1064835, 893345, 993867, 1116848, 300667, 1020532, 520720, 647250, 1153222, 829774, 259171, 1149381, 1141202, 63197, 1138603, 10677, 1126543, 1126536, 8645, 87827, 27850, 635910, 457335, 821890, 149, 1131444, 1140056, 565770, 614930, 832502, 1128604, 930094, 980489, 18254, 913673, 834404, 681986, 691422, 391713, 846961, 52451, 615656, 881209, 1082168, 61348, 722778, 2098, 1008042, 2253, 38884, 10756, 496450, 457332, 474392, 841, 38, 1008392, 32873, 376134, 1148969, 12429, 15371, 381289, 21057, 184313, 17445, 636173, 14011, 9655, 736769, 646473, 283378, 10515, 26688, 437109, 30143, 1024535, 1128719, 1059638, 45162, 16859, 835786, 324849, 346698, 785457, 890771, 500854, 805320, 1058647, 1083862, 872585, 11416, 1126844, 953371, 1075335, 177271, 822099, 778814, 1128718, 24982, 614479, 369557, 1149947, 1139162, 747188, 746333, 226486, 587092, 298, 449992, 109491, 402200, 531122, 994468, 1040148, 401104, 980078, 840326, 21188, 163, 1700, 582014, 347626, 733156, 603661, 959558, 11355, 566949, 23566, 798286, 242643, 1129956, 308266, 1000146, 1006911, 424121, 585244, 882569, 561717, 1002370, 597890, 513487, 809787, 15359, 9303, 884605, 996518, 733317, 517412, 1586, 301365, 1114901, 1079078, 1107872, 917007, 1061617, 976573, 660000, 758336, 988078, 1128568, 1010581, 335977, 653594, 615658, 685264, 536437, 884535, 218778, 1049638, 961323, 810731, 812225, 868985, 713776, 697843, 869623, 685264, 697843, 1128568, 1010581, 536437, 868985, 758336, 869623, 1061617, 810731, 615658, 1107872, 713776, 653594, 812225, 917007, 660000, 218778, 988078, 976573, 335977, 1049638, 961323, 884535, 8386, 816977, 799546, 667538, 945897, 647003, 797245, 1030613, 532327, 811631, 765869, 931935, 611213, 1119173, 1024621, 950480, 668461, 862553, 323694, 298618, 997023, 569094, 920125, 802119, 607430, 607442, 55680, 447277, 1004294, 1120628, 1029042, 522927, 1041377, 11130, 670429, 508935, 9880, 961427, 994052, 873126, 1025169, 547090, 138038, 500915, 1018648, 943930, 641163, 505904, 142, 740441, 128, 11970, 244063, 8130, 15137, 10494, 11132, 251, 4380, 23169, 65218, 19458, 667216, 228326, 515295, 340666, 313369, 10330, 385687, 72190, 472674, 76757, 566451, 1106732, 676547, 81250, 765613, 1016121, 332567, 13597, 614939, 23023, 1114905, 293863, 126319, 1122493, 487297, 460668, 1018341, 13680, 482321, 610892, 114955, 631060, 411088, 399366, 360055, 552688, 1883, 964980, 314095, 850167, 1117698, 42723, 620705, 510550, 529209, 643215, 1111140, 539441, 168672, 955991, 710718, 440844, 804150, 844417, 813726, 555604, 676710, 514222, 9291, 544, 455476, 940417, 633929, 789602, 723419, 12184, 335795, 1085103, 447365, 526103, 10145, 1101799, 1103576, 997776, 1538, 5966, 893752, 420808, 593643, 10625, 768362, 646389, 152792, 645290, 796185, 868759, 1068141, 9276, 817758, 713704, 437586, 845659, 1063422, 1653, 448776, 192, 283235, 392629, 978406, 6947, 842945, 952021, 106493, 91314, 1110586, 758323, 932430, 493529, 216769, 15787, 948713, 854239, 603692, 869626, 849869, 726759, 66859, 736790, 649609, 11820, 785084, 3053, 808087, 1003579, 958196, 8373, 1858, 38356, 4011, 33728, 42360, 429200, 459992, 116, 335988, 560050, 238713, 28178, 40833, 382322, 49014, 7345, 289222, 347031, 216015, 22537, 271164, 34295, 11152, 9487, 26932, 12159, 928, 35169, 596161, 1688, 661881, 1687, 470878, 602734, 2018, 871, 852096, 80, 677179, 914, 236751, 717728, 791177, 502356, 17654, 615777, 638974, 49797, 29697, 606954, 11072, 934433, 840427, 9475, 700391, 364689, 529485, 657561, 643866, 40231, 960258, 726649, 296, 9482, 13008, 323272, 11258, 722149, 260535, 621, 14854, 245, 242224, 768503, 28211, 739405, 6341, 991814, 339395, 472815, 550776, 1018, 284054, 782973, 614560, 534, 703134, 934641, 10948, 385371, 495601, 491480, 11033, 537739, 9400, 588228, 73756, 109414, 937278, 390062, 567, 406997, 10796, 776503, 38167, 16563, 376311, 6522, 80035, 16620, 116741, 10159, 560362, 873, 532635, 560964, 18674, 301337, 801, 869025, 71622, 14442, 4442, 302946, 630, 866413, 810873, 617264, 83088, 574674, 948333, 11678, 287590, 9340, 576784, 10144, 799804, 9920, 50253, 883016, 11224, 14175, 123553, 20544, 17979, 46993, 388, 945805, 77, 1074656, 180, 511785, 758009, 511817, 703451, 83090, 674324, 4858, 668482, 717980, 1083308, 843794, 83091, 1086351, 672741, 661374, 842725, 974188, 788752, 66105, 877269, 1162, 10998, 20196, 11948, 11574, 543583, 9599, 724885, 5968, 11778, 10406, 30914, 849, 41275, 31151, 191384, 1850, 484907, 40490, 49821, 401698, 640146, 560964, 10542, 15039, 821, 369406, 13312, 483987, 229, 477033, 517298, 477428, 9374, 333669, 25330, 536554, 484247, 393457, 549514, 458257, 73567, 419704, 11975, 594342, 877703, 995133, 64, 457915, 2064, 975490, 24021, 382602, 2609, 654739, 574207, 999127, 512895, 664422, 50619, 528112, 448432, 8966, 50620, 78383, 204260, 828613, 57212, 568160, 264216, 18239, 238215, 3563, 516237, 303857, 87428, 615643, 2370, 585759, 676701, 528356, 827529, 94016, 72213, 10661, 735291, 14533, 994143, 593427, 716706, 513045, 25508, 32302, 674944, 1885, 15648, 9405, 62204, 12139, 44040, 715931, 8338, 1788, 294254, 11087, 22419, 13220, 10329, 12193, 574376, 670, 336843, 814338, 315162, 87492, 228194, 522162, 2123, 518896, 27581, 480530, 8536, 1452, 504603, 445629, 11259, 369300, 435696, 9531, 1924, 19899, 20307, 11411, 475242, 426338, 13192, 412452, 12085, 467240, 531158, 9476, 434757, 338947, 59474, 322240, 901563, 6279, 3635, 4281, 10083, 468224, 470897, 237791, 434767, 395991, 9377, 2024, 2005, 227106, 712, 539885, 375785, 855, 1817, 74465, 88, 421473, 2270, 676, 13515, 91745, 300673, 755339, 71469, 528402, 720026, 442266, 756, 399361, 184125, 365651, 9656, 16052, 23966, 6488, 198663, 11380, 39100, 358962, 98, 258216, 8769, 18892, 442065, 802372, 483983, 508763, 586707, 497514, 314405, 577889, 858, 338958, 548754, 458423, 183662, 1034337, 576156, 1023795, 416494, 737288, 620883, 203739, 487558, 747803, 736526, 1051396, 581905, 624798, 879538, 753477, 633949, 633342, 1033303, 830784, 760991, 872497, 716532, 717151, 967998, 993621, 821881, 1015724, 774752, 823766, 875295, 10984, 1049233, 8095, 10085, 10423, 9385, 502033, 16335, 520905, 608195, 11893, 581392, 15797, 983, 523371, 2636, 18643, 11047, 10543, 77174, 31561, 76170, 1813, 9929, 9469, 19592, 799375, 1040263, 10863, 972671, 707886, 833097, 773543, 63311, 9874, 1015611, 274857, 10518, 8440, 583689, 390053, 682507, 796256, 560052, 39254, 11976, 6977, 939210, 705996, 626319, 915831, 881180, 14873, 649985, 593890, 524, 317557, 3558, 961484, 810015, 519674, 497, 784117, 10007, 935724, 29764, 9644, 766475, 744114, 883083, 811050, 11474, 113094, 10294,
];

function displayRandomMovie() {
  const randomMovieId = movieIds[Math.floor(Math.random() * movieIds.length)];
  const apiUrl = `https://api.themoviedb.org/3/movie/${randomMovieId}?api_key=${apiKey}&language=pt-BR`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const backdropPath = data.backdrop_path;
      const movieTitle = data.title;
      const movieOverview = data.overview;

      const movieBackdrop = document.getElementById("movie-backdrop");
      movieBackdrop.src = `https://image.tmdb.org/t/p/original/${backdropPath}`;

      movieBackdrop.addEventListener("click", () => {
        const iframeUrl = `https://embedder.net/e/${randomMovieId}`;
        window.open(`single-movie3.html?iframeUrl=${encodeURIComponent(iframeUrl)}`, "_blank");
      });

      const movieTitleElement = document.getElementById("movie-title");
      movieTitleElement.textContent = movieTitle;

      const movieOverviewElement = document.getElementById("movie-overview");
      movieOverviewElement.textContent = movieOverview;
    })
    .catch(error => {
      console.error(`Erro ao obter informações do filme ${randomMovieId}: ${error}`);
    });
}

displayRandomMovie();
