function sumCalibrationValuesPart1(input: string): number {
  let sum = 0;

  input.split('\n').forEach((line) => {
    const numbers = line.match(/\d/g);
    if (numbers) {
      const value = numbers[0] + numbers[numbers.length - 1];
      sum += parseInt(value, 10);
    }
  });

  return sum;
}

function sumCalibrationValuesPart2(input: string): number {
  const map: Record<string, string> = {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9'
  } as const;

  let sum = 0;

  input.split('\n').forEach((line) => {
    const numbers = line.match(/(\d|one|two|three|four|five|six|seven|eight|nine)/g);
    if (numbers) {
      const first = parseNumber(numbers[0]);
      const last = parseNumber(numbers[numbers.length - 1]);
      sum += parseInt(first + last, 10);
    }
  });

  return sum;

  function parseNumber(input: string): string {
    return (Object.keys(map).includes(input)) ? map[input] : input;
  }
}

export function day1Part1() {
  return sumCalibrationValuesPart1(puzzleInput());
}

export function day1Part2() {
  return sumCalibrationValuesPart2(puzzleInput());
}

function testInputPart2() {
  return 'two1nine\n' +
    'eightwothree\n' +
    'abcone2threexyz\n' +
    'xtwone3four\n' +
    '4nineeightseven2\n' +
    'zoneight234\n' +
    '7pqrstsixteen';
}

function testInputPart1() {
  return '1abc2\n' +
    'pqr3stu8vwx\n' +
    'a1b2c3d4e5f\n' +
    'treb7uchet';
}

function puzzleInput() {
  return '5ffour295\n' +
    'm9qvkqlgfhtwo3seven4seven\n' +
    '2vdqng1sixzjlkjvq\n' +
    '5twonineeight3onefive\n' +
    '2three2seveneightseven\n' +
    'eightsevenfive3bcptwo\n' +
    'five8six\n' +
    'twonineseven24one3\n' +
    'one8bdxplbtfninefourspqn\n' +
    'nineeight3fiveseven\n' +
    'xmkhttr64htgvhjfivefcjlzjqrsjlfivekbcnhqpzg\n' +
    '261flvsthree\n' +
    'one2mgnphzcx45rmnffneight\n' +
    'sevenfivesixzvpone8f1plj\n' +
    'ccthpbg6six3\n' +
    'f1hzds5kfdsj\n' +
    'qkneightwofourninejzjfmkjv8eightthdtp\n' +
    'eight62rvkjphrdtwoseventwo28\n' +
    'eight33\n' +
    'sevenkzvnkj5ftone\n' +
    '76sixrcznjkthreethree72nf\n' +
    '5nnine\n' +
    '3cjseventhreen\n' +
    'sixsix18ctxvtxbs\n' +
    '7mksmd9threetnkbtwo\n' +
    '7hxnrgnl8\n' +
    'vq3dcgtlzgfives8kthone7\n' +
    '76tmpjjvbzzclfour\n' +
    'ptwonefive2threekfrtvnbmplpsevenseven\n' +
    '79sixone\n' +
    'mheightfhllpvk6rdnrznkndp\n' +
    '7sixfjsspxhljrtsz39szdtsrfkh\n' +
    '3prqtwolcljdhcksix6three3gjkvcsz\n' +
    '31vjpsdqlncjone\n' +
    '2qhbsjcxqfive\n' +
    'cccgsqgj2seveneight2\n' +
    'eightthree65tbhvpnthree\n' +
    'ltpeight27fivethxzjthree27\n' +
    'm31cxstb4\n' +
    'xfmnzconevzmzkcthree2\n' +
    '837\n' +
    'vjone779jzskrxqgkrd2\n' +
    'rgd9eight\n' +
    '3onetwo34one\n' +
    'threeffthlxtmc8zfpl7fivetwo2seven\n' +
    'two6rxqghhnnthm\n' +
    '9gfjhhlc4hlpcc\n' +
    'glcj9zdnfkrnfcvqqhr9four\n' +
    'seven6564four\n' +
    '3lrlkmqbvllqpn7fivedmmqhk\n' +
    '8fivefiver3eighteight3\n' +
    '3eightthree\n' +
    'bhzsjfivefour391753\n' +
    'nine5sixsix4jrqdljfive8\n' +
    'threeninenine68gkjlrh8n\n' +
    '7vdprdhrmbrnineonektjpseveneight\n' +
    '3prjtkg6three1\n' +
    'nine5rnbxdsgdnine2seven\n' +
    'threes6\n' +
    '62zzbgfq7\n' +
    '5hbcvdhslxb\n' +
    '6msfzlhmksplcbmrqoneoneone\n' +
    '4sevennine3\n' +
    'five99threezmxsj7sqbtthree\n' +
    '56vbt42three\n' +
    '12fjlcvkgcv\n' +
    'dnsdbrphqhrthmqtm7sixonezv5fgtwo\n' +
    '5seven5fourlhgb\n' +
    'fivetwo26threeone7eight3\n' +
    'lxlzzhfkfive4eight2fivezqkdxczbmndvflrsq\n' +
    '71nineseven5one58\n' +
    'fivelncljrgtxkdq51gnnpvtsbnine3five\n' +
    'mjlrpthgvz57skzbs24fourtwoneklr\n' +
    'njqlhp39five\n' +
    '8xxmstonetwolhlcgzcpqb\n' +
    '8gjqlbgfive\n' +
    'xcdssbrltmf8sevenkxntdzgfsv\n' +
    'vhgjfxeightvfvpgcxsnineninepkrjtqtseven7\n' +
    'two3ztllvnrmg7fivetwo\n' +
    'five1jspfivethree1one\n' +
    '5stkpqcjhxvmrn\n' +
    'three3six12fourkdmlgfbflm\n' +
    '7sixeightnnjnc4one7four\n' +
    '4bqszrqnfzl9nlp\n' +
    'two3threesnjpncrjljpcxhjdzxqcjcjbktvxjgvnfp\n' +
    '36tworrhlh\n' +
    '43trbqvgrrsjbrxhk\n' +
    'eight7five\n' +
    'four934eight8three\n' +
    '9zjzhmtkt4bvljpttc25sixsix\n' +
    'twotwocmzcczsjz2qcslmnjl1pqfjqfhlpmtjlpzpjhffxr\n' +
    '4fseven\n' +
    'sevennvxlnineph8ninefqbm\n' +
    '2611five42\n' +
    'two7nine\n' +
    '7eightfour7gh19\n' +
    '71kzdvkfbqnineonetwo\n' +
    'onesixnine325\n' +
    '5cbtbckx4vhtslbk\n' +
    'eightdgczsgkc5seventlsfd\n' +
    'xdljsnqjctzmmxcgxctdxxg73four\n' +
    '2shjqglxct5rctbmgvfvjfvrqsvdmthree\n' +
    'three71onekbksz8\n' +
    'ninesevenzrcxnnbvninetwoftsvg39\n' +
    'twofour36\n' +
    'onerddzfgdnpkjxlbh9twojbtqk\n' +
    'jjcnine59lgcttxncsix\n' +
    'ninesevenone76zrtmvdponeprfszns\n' +
    'bzrxtwocqczcmkdlnjtwor7\n' +
    'sixjqcgcl973one5eight\n' +
    'freightwo7three\n' +
    'dnzdrnthreemlqvrjspl79kfkfrbjm6czkzqvqp\n' +
    'two7953mftrgpkxjmrpvn\n' +
    'xone4vqljzqrspsgdhvnsgsptwo4\n' +
    '2612fvhthree\n' +
    'one3nine\n' +
    '8five9onetwo\n' +
    'fourtwo45sixxkjgdvrpltlnrtdbbpjjmqq\n' +
    'four1fiveonenine6\n' +
    '4three4\n' +
    'qkjpskjglpeightjnc8two\n' +
    'eight85sixfour\n' +
    '53fivefive\n' +
    'lbmqqpdbpnppzzmttmbpkxbl6sixfour\n' +
    'ninemlm7\n' +
    'mbvxvl2\n' +
    '1vpszgjvdbd\n' +
    '7qd7two3onesevenkkgnnlztzxs\n' +
    'cqrnn1ninefxpglvtkf1\n' +
    '7sixvnknzqpnhvsix6tbfnljfoursixrjzqxctmq\n' +
    'five889four\n' +
    '5rvsk7tsljtfivefour\n' +
    'prkhvq61clveight9dcvcfsr\n' +
    'four6ninenp2\n' +
    'xoneight2five3fqmc6zrgcbzbzghpvbzt\n' +
    'sixghxgbjfivesxrth5frzxcjfivegnktshzrpmbdlp\n' +
    '6prgnxdseven2ggcqhc88\n' +
    'five46\n' +
    '4bmvzlbcsggseventhreefivesix66\n' +
    'pzkljhppcmpnnng4\n' +
    'ninefivemqnjsmkgtnzzstrq55\n' +
    'one4lveightqjhjjzmrtwo97sctp\n' +
    '3vzdmk\n' +
    'lrzj71215\n' +
    'three78ddzzmvfxfzsqtkdqtfsnk5\n' +
    'db7\n' +
    'deightwofour9eight63foursixcgllm\n' +
    '123\n' +
    'sevenninegtphtjkkbhdx6sqbggcbljx4\n' +
    '8qtk4\n' +
    'thvml91nngfjgrsfive2three\n' +
    '17nine92twojkvmfrmpqhtlk\n' +
    'ninetworcvtjc76\n' +
    '5jrzpvgchg7tlfdlbfmxj8stb\n' +
    '3t6sixjtnjxhxnfv\n' +
    '9f2skxmzgnthreenine\n' +
    '8sevenonethreeeightsixthree\n' +
    'csrcdmtmscqvqkpthreepfour86\n' +
    'threeseveneightfour5zsgfour\n' +
    'onellbgsvseven9\n' +
    'rnnkxtbnx1threekbddbpzthreerxcnbcgx\n' +
    'jbvlsxdxsixxjj65one5fours\n' +
    'kzsix4zg8fgmzc\n' +
    'mkfpflcpkd37\n' +
    '5sixthreefivectltwo94eight\n' +
    'fponeight86phxr\n' +
    '278dmxscxb42\n' +
    'five86\n' +
    '63jqkh7sixnine1jmqsqtdhpg\n' +
    'zxchvfnvskctd9\n' +
    '64sgddnvnm6five37rzhpzlccz4\n' +
    '69nzlzkrkqt9ninehqrmvklgq234\n' +
    'qqtc2pdzzddgjrfhcvsbrbstwo4pdl\n' +
    'ninegjlqdclpmgcjfdqhhsl7n\n' +
    'voneight6\n' +
    'onevfqrnvpm9mfkgseightonemrpj\n' +
    '9twosixfivexz\n' +
    '1mlbvlninepjvn1onesixfour\n' +
    '1one33fiveeightfour\n' +
    'onevsrlmzfivefour11\n' +
    '5gpfqbtn9sevenninefiveseven\n' +
    '8six8oner3vxgttfhtlnnine\n' +
    'qc1kcpnpqdthreeeightwoj\n' +
    'v8onefive\n' +
    '8eight56kkpnbzvczmkxtzkjbcm1\n' +
    '1threegeightcjb5pdpz29\n' +
    'ttxcmthreekdsxdfxvrclfn4sixfive69\n' +
    'zgddz389\n' +
    '2one344nkxtsvf762\n' +
    'klncdshlrkpfrxflsncnfmtg5\n' +
    'trvmkbjvreight2kdhxfvlz3ds\n' +
    'seven57xqrzmcsnjftfthreeonetwofive\n' +
    '5five686lvmlgk4twonefmr\n' +
    'six1khm82xronexqhzjdqzx\n' +
    'zldbsjcsnine6vkdslrmtnpthree2\n' +
    'tbbtcl5xnsrjdz\n' +
    '1pqxgmnc1\n' +
    '3ninefckfrppvdlmf7\n' +
    'cprpq7three9twobql\n' +
    'fivexgjsgvpd12lzvcbpstpsprdvs\n' +
    'eightone2\n' +
    '4threeninexhdcxrffive414\n' +
    '79sxxtpxtpmj\n' +
    '37nine\n' +
    'mfmgtz32smkgxgmnk\n' +
    '68sevenhmchv\n' +
    'skjxk9shvdrznrrz5onetbdcjmk73\n' +
    '865seven\n' +
    '4twofivesixbtqjcjthreeeight\n' +
    '64fxctcljfsixninedxdbthree\n' +
    'rgxzttr21vnvgbcfceight91\n' +
    'jseven422onerzpxvgjpd\n' +
    'twofkktmpvcb4zngnnpdsixtwokgxcgk\n' +
    'xhcddkcvjpcb4354\n' +
    '88eightsevenseven\n' +
    '2twoqpxtqlccksixthreetwotwo\n' +
    'vqnlmpsixvpbxdnsfive4\n' +
    'fourfivefive6one\n' +
    '7xlkzc4\n' +
    '17klxs\n' +
    'snml9\n' +
    'ninepzvg964hqczmdfvnbvrkngrs\n' +
    '76nine5twosnm86\n' +
    'prjrjfxffczhv4six\n' +
    'eight53twonine\n' +
    'tkjh2eightjh\n' +
    'k2zsfdsm\n' +
    'four1hlxxvgqcgvhcdcjrr68\n' +
    'onethree4nine844threetwo\n' +
    '94twonedsn\n' +
    '2four3five4tgpkrjdmdfrbjddkxv\n' +
    '3cnsj\n' +
    'oneninetwo3cpfrdhnrbrd4\n' +
    '2nfcbffx1qhszkhkmmeightnine8v\n' +
    '4three6llthreemrpztjb\n' +
    '53xksczcvmdsixnmxvqcctpv1\n' +
    'xzhhpr66threeblplpkmktp9pgseven\n' +
    'seven63twoneb\n' +
    '9btlntpndseventwovtnplnqldthreenine\n' +
    'nthreeseven4five\n' +
    'zpktwone1gjzntpllkghhsqqsix8p\n' +
    'eightfourlcrkqcjfsheightfive69\n' +
    'hvkv8\n' +
    'four93dzrfive9eightthree8\n' +
    '9fivecfour47threecpcjbf\n' +
    'pb1one8two\n' +
    'seven64twofivefoursix\n' +
    'hgjjjj7mkxztspmzvbdcbbfkone\n' +
    'mkdmqzfpkvqfcfiveshstxgnrs9fzzdr\n' +
    'ssddfgcd2three\n' +
    'xzzrrxm28seven\n' +
    '1nffqfjtmftwothreeninerqbthmhkhseven\n' +
    'lkbbgsjmbtpgncfive63\n' +
    'jddsdrkmhkthreefoursixone1\n' +
    '6nine5ngdcninemq7xqlsmdkgjf\n' +
    'eightfhppf3f9jgdvzldxltrgg2\n' +
    '3nszqpfth9338six\n' +
    'srmhtvn46five8four\n' +
    '6qqttwoeightthree\n' +
    'threedpqxmlghsgls8sixsslthdfzdknmjeight\n' +
    'rtwone66four2\n' +
    'six4dt5one1\n' +
    'xrmlvrfpmtttvppc5\n' +
    '34fivesixfivesix\n' +
    '1rnrtkbqlpphqlch52eight\n' +
    'fourgbr19\n' +
    '79sixfoureight8\n' +
    'kdlqxjzdx7mrdqpeightzgdx\n' +
    '1eight6254dplmqrpkq1\n' +
    'sevenvqpnd222\n' +
    'mpddrhlncrp1fivev69znxthree\n' +
    '87znxjsmsvlzxbfivesevenrgghkbrsdq5\n' +
    '5rxbkctnsfeightxpbllldgjxqdrd3dmt\n' +
    '6twog48eightone\n' +
    '2sixfour\n' +
    '433onexklbhneightfour\n' +
    'eight5hjlmdsnzxeight1\n' +
    '9fvqtc\n' +
    'ltmcrnhrpqtwo7five9\n' +
    'six55\n' +
    'mpsjhvbxmkpppfjhdjlgcrvkzpvds6htl\n' +
    'jldzmj671vzljbmrjtwo\n' +
    'rsznrsrtcz2threerk5ggdrtfmktrjjrdpjvvhshhqszzmbzp\n' +
    'nine53v\n' +
    '6khbvone\n' +
    'tvzoneight5khzglntxjgb\n' +
    'qtgx9zhtrqcnlblvrsngsfkeightninefvlnpjbxsix\n' +
    'tljmkjbb1kncvqsix9jthkqlkvkztjjbtrbqjxjmrblzzjfive\n' +
    'eight6l\n' +
    '47qxgjthreeeightwohp\n' +
    'lqponeightggj4smzdbzqg86three\n' +
    '75znine\n' +
    'nvqgzfx4five\n' +
    'five8pks78fourdbspf\n' +
    'seventczx3threeninemlsevenmvntwo\n' +
    'one59tqqxbjhp\n' +
    'six5threehgmcnpvone6bsix4\n' +
    'eightsixckfpcffour4\n' +
    'hbzjvzdr2five7\n' +
    'one4jxz5fourm\n' +
    '76bbldjckqksixhcmb3\n' +
    'onenine49vq\n' +
    '6rzxhsmnfbmqgsgvt57k1six\n' +
    'zdftpqqplpqfhrd16four\n' +
    'ninebsnjtrkfhgfbqsnqhrthree1mqkrrtxnine4\n' +
    'nine3lhrzkbcmzq11\n' +
    'fourthree5ninesljdvseightsix5\n' +
    '8qjtbfjpf\n' +
    '8twobvtgbgbtnxrh5lblkxtnlphfmhpccfzz2\n' +
    'brqbgn27377kltngmlqsfnf3\n' +
    'twotwo67nkgmth9one\n' +
    '29twoonevqffqqjqsixthreeeightseven\n' +
    'xbrv6qgqjxmvjkr5ngjhdjlvnjsmlqgngfr\n' +
    'ggbmtmbcrnkj83vhhgdjlfsix4\n' +
    '4blnxlvmq6zpfpgxcp38\n' +
    'dcvrzvqcteighttwo3cxfn5\n' +
    'qzsix5fbqbflhzzvblfhvfgmzkm8\n' +
    '7twojtbdkzpsix2seven6\n' +
    '6six86\n' +
    'two4sbnnsskqtm\n' +
    '19onefourfivefoursmg7\n' +
    '9rxrbxbmqs1twoseveneightthreetwo\n' +
    'two3zmcdnm3rlpkjqgthree\n' +
    'gtlkgpmpprpbbrzjrsp9ssvnzg68nine\n' +
    'ptwonerddxhnzfive53xhflnccpfkeight1one\n' +
    'sixvxlbllseven8seven81\n' +
    'jhfxcvccjdsevenfive58\n' +
    '5ninefourmz\n' +
    'one7three9threeoneonetwo\n' +
    'four4clsfoursixxvkzx\n' +
    'fourseven3\n' +
    'szeightwo18l16rxcmvdmkcvb\n' +
    'bdzqlbthreedsb45five9\n' +
    '8pztdljxbjjthreenineeightseven7crkdr8eightwocb\n' +
    '9krvttdxf34mrpzzchrgeightthree\n' +
    '8jqlmgseveneightzvxrszfsixf\n' +
    'ninefiveztthreeeight7l5\n' +
    '7vhbjdnldvlfourhpptwo53pqbnzqnine\n' +
    'mxdhsixseven6\n' +
    'threepzlkeight7ppdpqqlv\n' +
    'nine15threeqxlrngntwokhzgh\n' +
    '4hblzjb22\n' +
    'pm6eighteightsnztcmfoureightninefive\n' +
    '3jffzhl\n' +
    '97dlrqzvfour6594oneightltg\n' +
    'sixlpfivelbjktk7\n' +
    'three23seven\n' +
    '44x7twoninedrzvnfourseven\n' +
    '8xpndnspgbnfourzcngchbmd\n' +
    'gpdfptgjxcthreeptmpttnfive1\n' +
    'rzcnffhslj398xrhlkbxbcgqtcsjdl3three7\n' +
    'fourddqlonetwo5ms7\n' +
    'zjnfvksq4djdrjtxdmnsixqshlntxn\n' +
    'fournpgkxtp4twojtmqgjgnzdxrnvdxfsltzpflmg1nine\n' +
    'one2one3\n' +
    'twosixfgklbnprck26vstrjkfxgmbhhceightwomz\n' +
    'bxxbt5two2g7\n' +
    '5gnineone8697five\n' +
    'vcvsfxdninecz8stcvnine\n' +
    'five8fivenxzcjqjxfrbmhdnthree6kkplgmthree\n' +
    'dtchdczdvbsevenzsb4one\n' +
    '78cdeightvjdlqpvql2fgrrrd61\n' +
    'pvr5nineoneightzvs\n' +
    '8three8jvthree\n' +
    '2one6one\n' +
    'three3six\n' +
    'thzmsdbqthreertfjsddone7\n' +
    'nmhctqdj3hlsixonevkhdbvskg\n' +
    'five42255\n' +
    'ninefivenqmljgv3\n' +
    'hjgm71\n' +
    'mldfbltrfn6jxjsixpbkzbcqvcj\n' +
    'three8nmmp9threeeightwohft\n' +
    'eight9zltdfrdnrthree\n' +
    '3twom\n' +
    '5kt\n' +
    'pgvglmgpjtnqnkg96seven3seven\n' +
    'lhnnine2qjptwonine3\n' +
    'eightfourllgmfkjnthreegc6bbdrfcninem\n' +
    'xmlckt9kkdprslxthree91nine\n' +
    'threespfklnine538\n' +
    'qlkbjplh1\n' +
    '5sevenfivefour\n' +
    '2ninejsjfngfhhldkkghqlmflqfbqpvtnsthgj8four\n' +
    '59eightthreejdzbzbfxlnjqgxxhpbhqhxv3\n' +
    'threebsgqfseven4xdvnpvpnzslfsvxvshptjffn\n' +
    'vnnpmdqhzm61sevenfivepmbktbsdljp\n' +
    '379zffourxvlvpb6\n' +
    '3mhlnbdqr\n' +
    'one9kjqtgm5hrbrxrseven\n' +
    'twobqssixdfz6\n' +
    'f1bnhjnfzpcrsevenfour3\n' +
    'ninefive1\n' +
    '5oneonecfdpdqthree75\n' +
    'eight7ninefivesft2cmfonefour\n' +
    '8fourfour\n' +
    'bnfive69vcqhfive5ft\n' +
    '9lkpj2eight9ssmsbh8three\n' +
    'bq9drgtone2sixfour9kthrmeightwob\n' +
    'eighteightgppg86\n' +
    '1six1fivekmnkvlfnhsxtpthree\n' +
    'gqxqtdktrltmhqp4fivelbqsrklgfllrh48fxgdlcvsrc\n' +
    'twothree6ckkclhsnine\n' +
    'five5eightqfn\n' +
    '37threedkvtvnfs3mbmzhjbnine\n' +
    'hclcdxsvhzpc9onethrees\n' +
    '6gff5txnv7qmgptkgdrggfnlh\n' +
    'nnpvnstlb9hhdqjhbxkbthrzclvsbgktwo\n' +
    'zvkqdqmqgfivetwo334vzgvllv\n' +
    '7foursix\n' +
    'ninedfbmns5xqthree\n' +
    '16frxsevenpnfbgdhb\n' +
    'qqfcn6353one\n' +
    'eightpczvxnzmhkgc25ztrrqkmeight\n' +
    '94lnlmx2\n' +
    '9mvtssn\n' +
    'kctwonegkprf9onefive38bjsvnnxsgpseven\n' +
    '4stwosevenkccc\n' +
    '1sbnbxzninesixfkcdfl\n' +
    '69eightonedsjoneone6\n' +
    '8five5rrsplshtlmrj\n' +
    'chntvmpkdr8nsnine12one\n' +
    'ninefourqlxfj6cfzczseven4v\n' +
    '1gsbnklv6lszhmrrfvmsevenpfckscfn5\n' +
    'lgt9ninekgstwovkgqckhbthree7three\n' +
    'ztwone91ltzmtmgpdr\n' +
    '1eightlqvrone\n' +
    '11jbvdprskhkczr32tdjmxbf1\n' +
    'oneqttfcdtxbt6\n' +
    'four6one8mvzqskzgnh\n' +
    'eight74fourcnflfncmjsix5skdqcmvtwo\n' +
    'jmqpvlv71\n' +
    '9oneightgd\n' +
    '8341\n' +
    'pdtmqvhzvp7\n' +
    'bpfnfdm2eight4\n' +
    '2fivedxlntgmgjtwooneightt\n' +
    'tjmvvbqmq9njjxrbmgrlcbrbtzjbone\n' +
    '7sixsixsix\n' +
    'eighttwo6bheightfour\n' +
    'onedtdhrsjsvflfmrkfz3d\n' +
    'hxbzrvj5ninenine\n' +
    'vdldceight7eight\n' +
    'twombtmnntjsfpmvjhqt2\n' +
    '2eight96\n' +
    '9fivegbgvtpzrg1\n' +
    '5three1fjhsn\n' +
    '473\n' +
    'np8\n' +
    'kbdrczcmsbfives4two9sevenseven\n' +
    'ninelmrkgtfive145five\n' +
    '5two92eightdspeight\n' +
    '6zxtlvlrcl\n' +
    '1mkcvsctvh1eight3pmrckhbone1\n' +
    '4pqrrvqsqlvsixbt1\n' +
    '742cl2qnknmcxqjtklbjmsjdvdhngptpljmfour\n' +
    'bfsfcf92\n' +
    'vzjlrffouronertfhcsmdgbjrdcd55\n' +
    'knineonecmsvonetwo3\n' +
    'vpnqsix2qgptjp5shdeightthree\n' +
    'jdp5lgffkrmsxjd8twoeightgnfzkpt8\n' +
    'four6three2rq6lpseven\n' +
    '1pfnmmpctwovqvonebcbqjhghrbthreepdxf\n' +
    'kpxkgdheight4nine\n' +
    '839sixfive5kh9\n' +
    '21seveneightmffgnmqvbfive32g\n' +
    '8twozncssnsllksbncbz1dgmtdljdssix\n' +
    'jchhdqjf1\n' +
    '7six2\n' +
    'onefourtwo3five\n' +
    'zgktwo3\n' +
    'dlxdsdslhnine7\n' +
    'two86\n' +
    '2kjkmmjbsprfourseventkqlr\n' +
    '5threetwocvhlnnqhchchgl6\n' +
    'gtdlffspsjhcnxqdfour6\n' +
    '2gkldzksdxcnhgcdvshgxjv9rcxhh\n' +
    'twogjx7nine\n' +
    '25threeqmh9qfghrnvzb\n' +
    '248onefouronexcjbbqpcfb\n' +
    'onethree8pqkzsmlfdcfhz\n' +
    '74j\n' +
    'szfjpjbnfcjmsthree9\n' +
    '99msrmcxn\n' +
    '1f9twoone\n' +
    'mrsvrhbgfone42fivethreetllzkd\n' +
    'rnrvx9925\n' +
    '4fourzhonefive2eight\n' +
    'threeonetwo3nfbgnjxq\n' +
    'eightgz1lnqeighteight\n' +
    '6fivefvvtvqcjsix\n' +
    'djrl13\n' +
    'gppmmzq5threej7pc4three\n' +
    '63sixhtcmp1sixtwo\n' +
    'fcjjzf3nxdtxnqmtjthreeonefour2\n' +
    '8fpbc5\n' +
    '25mrzjfppbfourfrzrspqkcbmn\n' +
    '1qrmkvgxnc\n' +
    'qvbmn7\n' +
    'nine6lvdddmrfxc4two4cdhhdzthree6\n' +
    'mtrjrfb6htv4mcrzqrbkthree\n' +
    'eight3oneseventbbdqpffnfm\n' +
    'eightxfll15rxkdkglxsthreethree7\n' +
    '38fivethreelsixbczgzdffn\n' +
    '884twolp1ninetwo\n' +
    'csxl4one8\n' +
    'dtrxqjshbfournine9two5gng\n' +
    'dgpvkcqzn7\n' +
    'nineeighttpzfnpzdtjzseven9seven\n' +
    'eightnkrrnmbvqz2cvktr\n' +
    '55nine6kttszrtjvm\n' +
    'vxvzmmmnrkzvkffivetxhgj8pqtfvvlprd\n' +
    '43kfvtplhjfdfivefiveseventwothreezkmqlsk\n' +
    'gpkgckdone7xssjkmlsgddg\n' +
    '4fourqrspbqzzthreefour28five\n' +
    'one1st3kmseven\n' +
    'fourjqmmbone6four7gnine5\n' +
    'one93mbdbtqvtqmcjxhtzst2onezhlmszqh\n' +
    '7krlt\n' +
    'dbstsmrm4onefour\n' +
    'vqqxjteight3\n' +
    'ppndcfssbchr2vsr4xdhzvs9jbdkrh\n' +
    '2vdkxkqmrzveightzrgnineninentx\n' +
    '6one7\n' +
    'three24sixsix\n' +
    'hthree441threemchrone\n' +
    'threeqhxzkpjkbthree5\n' +
    'seven5hcxhlgxtr8qjtjpqnqc\n' +
    '2mcxlqpqqffvljnhhlplnmlq\n' +
    'fvbckcgjgk7two\n' +
    'zgglpqj92bjfvrfntsdfvffx1fourseven\n' +
    'jgeightwo6\n' +
    'ldthsjlm6crjhxdvlqthree3\n' +
    'five38threenine4dgctxdfour\n' +
    'mljrxk52eight3bkbeight\n' +
    '1mkkgnvzeightninesnr\n' +
    '895sixd\n' +
    'qqngkprp9eight\n' +
    '9qp1cqtkhdhdlv6hrl8eightwodln\n' +
    'ldgksxpnp7mxckrpftsixone3bqkktvmqsix\n' +
    'chtzvmneighteight5pjrdxrmdqh82\n' +
    'tfr7ppsxdfvhtsdlqlmbscfourthree8bxhgtztwo\n' +
    'three65dnlpgcmx6\n' +
    'znf69pbfsbfmxgn7four9\n' +
    '5bhqfcghxssjflbzmrninesevengbqvtkgs8\n' +
    '3vkdpfdkhpsix96eightgbckkflpq\n' +
    'drkbpmfkrrzqeightninevgznnmf9three71\n' +
    '8lpl4twoneff\n' +
    'gvffv6229eightvbgbhzb8\n' +
    'xvrzxvxmsv3oneeight8eight8\n' +
    '4vfnppkqxvbxfktcltspgbnljp2\n' +
    '43twobgftvc\n' +
    'sdpmpm4sixfourzlxkfrt7nine\n' +
    'eightzkxc6nzgjfgmjdfive37jcz\n' +
    '624fivetxvlrtnnng3\n' +
    'fivefoureight5xrrvkjflbktjmxsonehlzggjkft\n' +
    'threextctdxfcmjsqxt9hscbhsevenfour\n' +
    'sdvmnpdfvsdslcqft3zhdhdbxvbkkseveneight\n' +
    'npzx52done\n' +
    'foursggcg88sixzhf4\n' +
    'one2fourr\n' +
    'jhjgptzvjhvs8eight\n' +
    'cdsrpfqmtnthreesevenonefive9\n' +
    '6five4four1xjjlhgsv\n' +
    '7nine5eightjbrdlvfphb\n' +
    '8ninegrhnkhsfc5pstfcrttwoone\n' +
    '9kpcchc\n' +
    'seveneightnine24\n' +
    '91two\n' +
    'four9vvlfive3five\n' +
    'threedmxvdqfrhrlfour5sixngmpngxvclcjhcrseven\n' +
    'threethree36seven1five6\n' +
    'six2five\n' +
    'one79581eight\n' +
    'xsrbppnt7nine8\n' +
    'lcltq633rvzkkqxfxmonenine3seven\n' +
    '4two9hnjxpmft3mkzdqcvjpsmnccplcqk\n' +
    '6six3\n' +
    'pr4eightfour2sixfivekgvstmktkcbqgz\n' +
    'foursevenpxgbkrmmcjbvdvqqcrdhbx1zkg\n' +
    'tkkl8sixvonesztkszlmzbczxgdnnkmn8\n' +
    'gzptmplvxzmzjqfzrjcmjlzbfdrpfpfivesix3three\n' +
    '848kphtdjgqfkfourshmzjpfdpsdfzxlldz\n' +
    '18eightjmlzlfdch64three\n' +
    '8pf6\n' +
    '5rt51\n' +
    '9ffpmlqnbcs7lcsrbczglslhrrphbh55\n' +
    'lcmllcsix7sbcrrrlfiveeight\n' +
    '9lbkmqrtfgxjphplc4eightfivethreesixzdpgrkptj\n' +
    'ltwo9\n' +
    'jbklfg3oneg\n' +
    '1g6sixlszmvjmrf4dzvnqcbzh\n' +
    '8lfxxtmfqslxqjxxshqs4\n' +
    'xddmf6five2\n' +
    '454eightnxtlqzeight\n' +
    '5xgtstcbfg\n' +
    '2seven7dqseven5hkndsjthree\n' +
    'sevenncjnrvvf24threezxdzps\n' +
    'onetfnl1xmlqkrsjbtwo71gbscmnmvnvmjj\n' +
    '8three8seven27cqxzkpbdzfourhghz\n' +
    '4kcrthree9\n' +
    '1dhsvlhzr8ngdb\n' +
    'cqvfmsdnone4tcfqhpdgzsixnineeight7\n' +
    'three7mtwosix\n' +
    '5eightonefourzxlhlhxlbxds4\n' +
    '8dzvdsp9xgnine\n' +
    'jzftwosnpgtpqt1\n' +
    'pdpfive72eight\n' +
    'lbvvclr71zmfmqjfq8gqmmltwo\n' +
    '84three\n' +
    'eight9fourfnzxkqt5ss3\n' +
    'threethreetworfqzpqfour172\n' +
    'ninemzxqfzqk96df\n' +
    'eight7cknshzjlnlcb3kzseven\n' +
    'eight9seven\n' +
    'twok5vmxtlpdhvthreeone\n' +
    '6seven2nmjdbjscsevenvkdmp\n' +
    'sixseven8\n' +
    'qslfivetwogvvlnine7ninefive\n' +
    'nrdcfbqczppphqvqxcd6mz\n' +
    '78ktndqqlrrlfourcgxpnvdps5\n' +
    'sixtwo8jrkz9q\n' +
    '986zhdpnlmlpseven\n' +
    '1six676rnine8eight\n' +
    'threebdqknone9onefour\n' +
    'dmnbb39seven6\n' +
    'threeqshbxpnm41two41five\n' +
    'mkdldph7eight7736\n' +
    'sevenfour25\n' +
    'p5q\n' +
    '263rgnrnmn97mbrjfnmgzlrgz\n' +
    'hmfgzqjtmhmncxthree26csfnggsmnt\n' +
    '8bzrjhrvdlzxnhctffoureight86sevencjtrpql\n' +
    'nine5twozl2seven\n' +
    'bsssxvkksbrgszldgpbfmxqldeight8tqmdvmdgrnclceight5\n' +
    '2seven41sixnine5\n' +
    '143lprjcnrzfive\n' +
    '2seven3\n' +
    '7853\n' +
    '46stkfqskgx9\n' +
    '4pztjcp3pmjnnts\n' +
    'sixptnckh8t\n' +
    '84seven\n' +
    '815four\n' +
    'pxxvhzc9rtgv1dph\n' +
    '73foursix4nflbrsvnzmmgmfbpg67\n' +
    '3nine57ninelzcsqsgrn\n' +
    'spzldcone17seventhreethreeqlrq\n' +
    '7three3zmmfvxtsdsthree\n' +
    'mgvmckndvnpc89jvqsix5\n' +
    'fouronej34vsrzdgnm\n' +
    '53g25nkpgckxl\n' +
    'lhtzx73mhqvgflfkblfjqrb4\n' +
    'eightfiveone5ktqstpvmszlhhssjbn\n' +
    'vgznine5s\n' +
    '5cgp\n' +
    '6cntgsl4ninemmgcsqntl9mzlvpqjz1\n' +
    'cpcqqv67seven33\n' +
    '9jvnlhceightvmtxddxlng5three\n' +
    'gcfcnpkjcj6five247zn\n' +
    'onekqqdjdqgnine1eightonesdx\n' +
    '8qzmdhp9983\n' +
    '1sevenfour\n' +
    'qvjfzqstwo7six\n' +
    '2sixvzvmsc2jczxrlcq5rj\n' +
    'ptgqfourvqmtglcnine7three2eight\n' +
    'xkprfrrjqr2eight6sixdkprbtpmpjxfvxtz\n' +
    'oneninetwo7cdbbrrlnjk\n' +
    'hvbhdqnpgzsevendjggs1threeglslxpmv4eight\n' +
    'fiveone348five85\n' +
    '87fcxflzm7\n' +
    'jlkoneight9seven\n' +
    'kx5hjbmqg8\n' +
    'vgklfrnljrbqeightfour5fhjhdhjgttxntmm\n' +
    'dtrkgphmlftq9threedmpbgsnsvzvsevenxnx\n' +
    '113nine8fourmvqqfblbgz\n' +
    'sdssh8nlzpgqdhvdpxc\n' +
    'ch2twofour26seven8\n' +
    '1fivebmxpnineone3eightwojhd\n' +
    '6xknv3threethree3\n' +
    'twostx3fourtptgklkfg\n' +
    'fourh9lxgnine55\n' +
    'one991two2lf6\n' +
    'two3jjhcmsd3sixeighttwoeight\n' +
    '43ms3sixthree4\n' +
    '9fourfrzrgvxrmkb6onez1\n' +
    'nvtjhfpbht376pp5eight\n' +
    'pbtclmsrkxspmmnchlm2sevenpqnksccztwo5eight\n' +
    'vtcjnine3\n' +
    'mcvsbgbktgssgkqxs1pztwo\n' +
    'kvndtblmgqbkzxhmghthree47mtqqjctxtm\n' +
    'bjkndjfivezctcbhzpffthreeninefourseven1xmfdsr\n' +
    'rhgshgkmtd9\n' +
    'sixtwobrnkvrlnsix7mvbp\n' +
    'twoninefivefive8fourvthree\n' +
    'kk3\n' +
    '1xpjcsbnpxtwofivehqvxpgqznlthree\n' +
    'vbcgppkcjjxqpknfthreefivenine19n\n' +
    '74jfqfbsjthjkhdzk\n' +
    'nine86vmclcgfscreighttnmlnsvdpxlkt\n' +
    '3dxbsctxgntfivehlcbdzgqtxvqddsjdrjnpgjtxhc\n' +
    '6ftlgzrbfjeightsix5onesevenfourtwoneh\n' +
    '4ninezcpvppbktl35eight\n' +
    'four7five27nine2\n' +
    '5qhbdqjcdtbsevenfivenine\n' +
    '99six\n' +
    'fourfivezhgtbmkhxrj9threehtwonebj\n' +
    '4threethree19threefivetjmcnvpkrfdmhjsnzlv\n' +
    '7sevenvxmtninefvvprtdhkhxpkth5\n' +
    'qbmtvl12fiveclone4three\n' +
    '44fivevpqtslbxkskhftmk\n' +
    'ltbfourkpbgvx3nine\n' +
    'zxtmnh111stz\n' +
    '3tdvhjtfdcheightwobjf\n' +
    'xrn14foureightspmeightspgmvbs9\n' +
    'j1\n' +
    'txsmrhnzf9fiveqnine4\n' +
    '31znnthgrtzf33dzxtdndbf\n' +
    'vdtwotwo4zjthree\n' +
    '17tdhvl4txhjthree9two7\n' +
    '1nttq8tphmdhbvnhcfqmvtmfxm1zzdcll\n' +
    '991\n' +
    '5zxlddbxrpc628\n' +
    '91dgxjxkrxfxtgzmfourzqlvpqvdbmgxxx1\n' +
    'tdk94sevenone6\n' +
    'two1fivembnftwoxqqjzdfivetxxm\n' +
    'four5one75eight\n' +
    'eighteight8znlfvz7\n' +
    'one3trkt77qnkgldtthree9two\n' +
    'fourdkgjxbf8one3three85\n' +
    'gkgsldqmndfrvx1tmfchpxsfxeight\n' +
    'fivevxfdmlrdqseight2zc3\n' +
    '32threegcznf25jvfn3five\n' +
    '7one86five\n' +
    '7vdckjfive8four7one\n' +
    'sixeight5gcdnine4\n' +
    'vgnvsv2zhvqkbrninehfkrn87\n' +
    'fkzonekghrlnmdktwo635\n' +
    '8fivekrhmdnt5sevenseven\n' +
    'three96bcvgp4\n' +
    'jhnvjp1rhrfive\n' +
    'fpvhhkqmgstwosix2jfour\n' +
    'sixqfvvbfvljmsevenlzfr5\n' +
    'xpvdzngsdz3nrvkr4lvhhdvmxq\n' +
    '8vlxjqpvpqmqnktfive\n' +
    'pvgxjdb7pqk711\n' +
    'pqxl3r8sixsixpstcxjtjdrns\n' +
    'gmmqrkfqrzddtmpnsvzkqnz3zjqbn9threenlm\n' +
    '2823eightfour4\n' +
    'two558xqtrtrtf8tnsj\n' +
    'bv6twonmfttddpf\n' +
    '17nbtdjone48\n' +
    'three6sevenzhzstnmlkf\n' +
    '89eightjlphdkfszlfftq44\n' +
    'threenxqvz3seveneight\n' +
    '1lzdsevenseven3onefourtwoeight\n' +
    'nnd1threez8\n' +
    'six9eight2nxcxplkdp8\n' +
    'cd88rkbvmqqlnfqgbbq66\n' +
    '2eight9cnzrk8five\n' +
    'onecl7\n' +
    'vjfsvqfivejhbscnhqkkfk31\n' +
    'fpqdkcsx6\n' +
    'ninezztlsddbk3two\n' +
    '1xmfsfh6726threesix\n' +
    '6four6196one7seven\n' +
    '2bpsgvlgcqvsix\n' +
    '1464hctgxfxzb\n' +
    '6nhcbfour36eightwohv\n' +
    '9five5\n' +
    'eight7dkktqkseven\n' +
    'pxzxsqz56fourtwofive\n' +
    'threednzfgdfpmr925two\n' +
    'kphngkzkpl867zllm95\n' +
    '39threekthvvqkvm2\n' +
    'seven6fsqfhltgvqnmghczlrjqnbjstsgprpxfhfphftfnp\n' +
    '23fourhjtvq7mp\n' +
    'drq9\n' +
    'fkqsmgddvxhrjvvtsjlr5four6\n' +
    '5ngcfsqvlcl7vbfive3\n' +
    '6372cltztz\n' +
    '1threefiveseventhree\n' +
    'one5ninebfdgzhqs581\n' +
    'hdqfour9\n' +
    'four6jzfdkdzkrdnnshltjlt\n' +
    'jlqtqzm6nine2one\n' +
    'bbvpcplzrbmjvvtm3qhk6fivefive2\n' +
    'pnclzfmfqcgmkrrtzlbptfnhlpdfsix66hjghhrmpvl\n' +
    '7sgnbxrkvfour4pqkpdzgmsg5three\n' +
    'lqgfzc9six57five9fivek\n' +
    'rfour9\n' +
    '3sfsgzbfoursix\n' +
    '5sixsqddmc67fiveone93\n' +
    '8sixnine\n' +
    'threecdgvgckq285\n' +
    'sevenfivetwo58qgq\n' +
    '4three3eightfouronefive2p\n' +
    'sroneightgmcbfhpsxdvlfqcvdhhk34\n' +
    'lxxhdmseveneighttwotwo5one34\n' +
    'threeninevlvch3fourrvppn6\n' +
    '4dgjx\n' +
    'twonpthklzbv8seven2lzbgktjfive\n' +
    'threefivesix7cnvjqpzrbv\n' +
    'zdonefour65seven\n' +
    'nine5vnmhqdntnlkfx6threeztdqpnm\n' +
    '2three8\n' +
    'tthqsj6two\n' +
    '3sixfivenine4pslhjnine5\n' +
    '1ckvr8\n' +
    'one8bnvhglghpq\n' +
    'zvzbnine91fiveseven\n' +
    'kffpqshlljcjqqlgp8threenine2\n' +
    '1fivek5qzfour\n' +
    'fqlthree14five1sixng7\n' +
    'two74fcrvqjtc\n' +
    'sixsixhbztdjfcztqrsqccdzb6lfx\n' +
    'twotwofour4onefourgszqbqlnz\n' +
    '4fourcjthree\n' +
    '5two7eight\n' +
    'zdzsmflkzvxkzvzvfive6\n' +
    '6vsblnxtwozjmrs\n' +
    'sixfour95jmzgl6\n' +
    'jgbpdkmltwo1xzxvvb\n' +
    'pnvcbnv6jpfkdddglz\n' +
    'sixz95threefourninesix3\n' +
    '9sixthree3three\n' +
    'tbzq1ninemrsfjncvsix6\n' +
    'zpjxspcmzhkdchhxqcd8threesixhdhfourfxpjzfqbone\n' +
    'm4cnntxcthree\n' +
    '38onexslhfourvttrfeightsqthree\n' +
    'eightng6pcz\n' +
    '8h1jkprzqdbz9six99\n' +
    '69nppconethree8\n' +
    '3qvlktndrrdtjrtmnine\n' +
    'two62eightthreevjjmtpmmt54\n' +
    'smgmnkmpktthree27nine\n' +
    'bdtbhgsdkjfhgrctc2trthree\n' +
    'six9sixthreeone\n' +
    'three6kssbz2sgnine\n' +
    '5kx88xfive\n' +
    'fiveeightpnfqtzcrkb22\n' +
    'fivettnmjmlrlb3fourfourjxmsj2five\n' +
    'xeightwo9cvpbhrgqphgdsix3foureight\n' +
    '1nhpcsrknine\n' +
    'gqtxctr1lfouronetwo\n' +
    '3sjdmn4ninevjpqgjvmzsqv319\n' +
    'joneight7zphm2hkpnine3szvjtljlqx\n' +
    '2sevenmmmhvxnfourvvtkpppc\n' +
    'vloneonethreeonenine2\n' +
    '9tbsmxpmsevensix\n' +
    'j3sixfive6fourninethree\n' +
    'ltmmsrbk8zjbpht9vxfive\n' +
    'nine1twoxpnsvnzqm3kgkkps7\n' +
    'eightthree59\n' +
    'nine5six616fourzmxkjpxr4\n' +
    'six42fivev\n' +
    'bgzteightsevencbbpfbbcrc5\n' +
    'dgmfbzbmlvzfive7pqmseventhree\n' +
    'sixsevenfiveonehcrbsevenfive3\n' +
    'twomjspbjhmlsqn42foursix\n' +
    '8two2seven6fourninefive\n' +
    'fourfivefvg1\n' +
    'twofour9\n' +
    '5vvlk3vfone\n' +
    'glrnhpdjq715ninehtone\n' +
    '1twosixmgrnvfmxxcfdtpjthreetwo\n' +
    'four21\n' +
    '3bjsrzpnq49ktnmrmlgeight5bvlvqdkcnvrrbvx\n' +
    'four4z3eight25seven\n' +
    '66bkdmrjh4three7\n' +
    '67zgzvldlkx2thgsbseight8seven\n' +
    'xknjonethreeninezjd4\n' +
    '17twofour64eightfnzkcgccljnrtnf\n' +
    'fivebgfpbtdn5f\n' +
    'ddlkgjmgs9twolxhpcqh\n' +
    'bgkzkf5fourtlphndsxb3nine\n' +
    '5srkjggqxmr3seven\n' +
    'fourksnmcsbcxsevenbnnrnvr9five\n' +
    'onetwonmsixltg5jztchznvml1five\n' +
    '3sevenone9ninetwofive\n' +
    'cqzsvsqrktwo8eight681seven\n' +
    'six5eightx7lpvlqpcp9\n' +
    'sbpbrqksix99four7six\n' +
    'mqcldhrjm49nine62fivethree\n' +
    'btskhbz7hkqnbhpnb4njbtrssp5oneonebth\n' +
    '2gtdvj9pbbbppkpg34dcjhbtc\n' +
    'mtphkzhdsix6seven\n' +
    '7dmsmrxfive2dmsbkhseven7\n' +
    '3five6xninezfqndzmtsix\n' +
    '8mrh5two2\n' +
    'zcpthree17ggpxmqlk\n' +
    '97tbtthree\n' +
    'tcztntvls2cnnlsixqjgkchpkmc\n' +
    'cjl462mdrxzzt\n' +
    'bbvhrqfjppsevenfive7fivethree\n' +
    'mfbmkd65\n' +
    '3471kmrcckrqgninethree7\n' +
    '2bfourtwocdhjzqvsxknine3three\n' +
    'ljzxxfcbfive1eight8eightkx7\n' +
    'gsdcjthree1\n' +
    'gmctxtr1jdsl\n' +
    'rrjtxqqtssix45three1five\n' +
    '7633\n' +
    'sixbpsdone7fourrmgzjp1\n' +
    '26flznhqvrcpzfbqkseven5nine9zfg\n' +
    'nrqgcthree15dchnrnghkntktfxl\n' +
    'fzvbvntrhrmcx81nvnfppmz\n' +
    'qrfzn1sqg\n' +
    'pcbvps9xhlkjnpgpfoursr6\n' +
    '6v7\n' +
    'six75sixninezpsjptdfhkrk\n' +
    'dlfgjjkfmfngfivefive5lzrcbsz\n' +
    '6sfgpfg\n' +
    '5four1bvggfs62nineone\n' +
    '2eightthreegvqznfjmhdxhblxf7qkxcst\n' +
    'seven51ldfnhlpvzn1ctlmn\n' +
    'jxdhkn56vmnxseven\n' +
    '89fjpcfklprlqkcbxjpdnp3\n' +
    'lxdgnhqqgvone3\n' +
    'ninesftqvgbbl4seven\n' +
    '4pcqqxhghsnn9two8gqrqdzjt3\n' +
    '2jntsg1two48zbbclss5\n' +
    'onegcgcrccvsxzvkpfqdj4oneightrgd\n' +
    'xrpnjjdqxxkqjqjvgsevenjnnkmxxgtl2smcbrlcceight\n' +
    'sixone43\n' +
    '2nine1ninejrdzndmqjfourthreegnsxstzjqc2\n' +
    'rtptwoone2sixlxtn3\n' +
    'one4twosevenbhbmlt\n' +
    'xfiveeight41832\n' +
    'bxgfchvjpgcmmmcchxsixcqeightskxbmscgpsix45\n' +
    'fivesix17zhcvp5\n' +
    'jkjmvzjmonefour73eight8fiveoneightczf\n' +
    'nbsjxlmdzx95\n' +
    '8threeonesix5rzr\n' +
    'rxktdsbrr6nineseven7\n' +
    '4twofvhvl3srvtcgkjm4oneighthx\n' +
    '39mqbdrf\n' +
    '8sevenseven79xqtvrznine1\n' +
    '1sdckgsknfour\n' +
    'sevendmftpbmfzkctrfdzlhk3sevenfourhqbxcjn\n' +
    'hxkxzvz3147zksknjrjmvbtbrtm\n' +
    'xqnjh3518rtgcqggb\n' +
    'fnzvkdqhpmm555nljnxmdprb\n' +
    '97fourtwo\n' +
    '5xhkdtvkgvhvsthreebrvbp72\n' +
    'jhl48khqkfbxjpgvprhbzp9fivepknpdthvthree\n' +
    'kjk6\n' +
    '43fiveonetlzeight16j\n' +
    'one4threesix\n' +
    'mtsbnsgtwofourzkn3twoone7\n' +
    'pmttwo45x\n' +
    '182twoone\n' +
    'jpltone6one1\n' +
    '33jkrsevenseven\n' +
    'cbtnktlrksevenone4onesevensevensvvxjjgrx\n' +
    '9zzgsq34eight9eight\n' +
    '9five1\n' +
    'threehfjkpxcvnbthreethreefour6\n' +
    'fivevgtwo1rctjzcrlninethree5six\n' +
    '1onetwotzhvqgtpnxz1vntznz\n' +
    'jvvztshjdchbgkcxmjkjghth54twofourrvbl\n' +
    'onesix4seven7fourdgdsmvldzccqlhrxl\n' +
    '839hdjjplqgclx\n' +
    'jqtfgbxkgb368\n' +
    '6sevenfivedlprsevenc\n' +
    '6czklmzsmxgmktzxmxsixmnlfxonetwonesgj\n' +
    'four28sbkrsqcdgl1three\n' +
    'sllmdpqvvdeight5vtvcz3kthpxgfkbgklxrfm\n' +
    'one5six6\n' +
    '3psklrfivefvlxrsghqveight34\n' +
    '6gkrrpj\n' +
    '32ddzqvxbpgrlndeight\n' +
    'nine16sixljvqjsddfstwo9\n' +
    'eightmpfjpdkhhzsix23one5\n' +
    'rjnlkfv9txshfcvgzp9875qtqvbjjvbggpvmpqfr\n' +
    'dvjnqskcqqb5pppfvgcz7one\n' +
    'threekllssmdxsjtwodzdcxjlk43\n' +
    'fourninervscfnpgt8xkmkflvtjthree\n' +
    'xcvpzpfdrtthreesix2nine\n' +
    'onektssgthree8rjvlkpq8mfour\n' +
    'twoqqxgqblvmc8tqsrbs\n' +
    'fourthreejlgkfour6\n' +
    'ninesix87\n' +
    '92\n' +
    'pmzqmmdh9vqvxrxbhglj7\n' +
    'fourrhhhdmzcbvbldqlmb4\n' +
    'rtrx3foureightsxlp2mlxtslh6five\n' +
    '3nineddhmnfngtfour1seven3\n' +
    'lfnt5\n' +
    '3kjhffpxlt2\n' +
    'onefive29htsdkllvr\n' +
    'tbninefour4eight\n' +
    '18k62nine1\n' +
    'seven6sevenphjfhdtnrhfsgcfived9seven\n' +
    'ttmtqrh3four4oneightrkv\n' +
    '42onekfbgxgtzl7qxzrmqbmeight\n' +
    '7fjkfdlmhqxtwoxcpssngss\n' +
    'gsntbddbnone4cjqjmspzcsxmvvthreefive\n' +
    '56four4one2\n' +
    'cqmzqbxzfvonevmmmlxsnjr5zfg';
}