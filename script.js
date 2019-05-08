document.body.onload = addElement;

function addElement() {
    const header =  document.createElement('header');
    document.body.appendChild(header);
    
    const firstTitle = document.createElement('h1');
    firstTitle.innerHTML = "CSS1K";
    header.appendChild(firstTitle);

    const nav = document.createElement('nav');
    header.appendChild(nav);
    const secondTitle = document.createElement('h2');
    secondTitle.innerHTML = "Select a design";
    nav.appendChild(secondTitle);

    let ul = document.createElement('ul');
    nav.appendChild(ul);

    const li = [
        {
            tag: 'a',
            href: './',
            name: 'Default',
            secondHref: 'http://twitter.com/jacobrask',
            secondName: 'Jacob Rask'
        },
        {
            tag: 'a',
            href: '#stripes',
            name: 'Stripes',
            secondHref: 'http://vasilis.nl',
            secondName: 'Vasilis van Gemert'
        },
        {
            tag: 'a',
            href: '#notepad',
            name: 'Notepad',
            secondHref: 'http://twitter.com/eworm_',
            secondName: 'Wout Mager'
        },
        {
            tag: 'a',
            href: '#gardenof3den',
            name: 'Garden of CSS-3Den',
            secondHref: 'http://designfestival.com',
            secondName: 'Alex Walker'
        },
        {
            tag: 'a',
            href: '#bbubles',
            name: 'Bbubles',
            secondHref: 'http://cssing.org.ua',
            secondName: 'akella &amp; Genn'
        },
        {
            tag: 'a',
            href: '#swiss',
            name: 'Swiss',
            secondHref: 'http://chrsl.net',
            secondName: 'Chris Lee'
        },
        {
            tag: 'a',
            href: '#turnaround',
            name: 'Turn around',
            secondHref: 'http://www.basvandorst.nl',
            secondName: 'Bas van Dorst'
        },
        {
            tag: 'a',
            href: '#whirl',
            name: 'Whirl',
            secondHref: 'https://twitter.com/iamvdo',
            secondName: 'Vincent De Oliveira'
        },
        {
            tag: 'a',
            href: '#bundler_inspired',
            name: 'BundlerInspired',
            secondHref: 'https://github.com/PhilG',
            secondName: 'PhilG'
        },
        {
            tag: 'a',
            href: '#oldie',
            name: 'Oldie',
            secondHref: 'http://pointlessone.org',
            secondName: 'Alexander Mankuta'
        },
        {
            tag: 'a',
            href: '#typhon',
            name: 'Typhon',
            secondHref: 'http://eswat.ca',
            secondName: 'ESWAT'
        },
        {
            tag: 'a',
            href: '#cube',
            name: 'Cube',
            secondHref: 'http://be.net/iurevych',
            secondName: 'Sergii Iurevych'
        },
        {
            tag: 'a',
            href: '#northern-lights',
            name: 'Northern Lights',
            secondHref: 'http://potapoff.org',
            secondName: 'Igor «SkAZi» Potapov'
        },
        {
            tag: 'a',
            href: '#skewed',
            name: 'Skewed',
            secondHref: 'http://twitter.com/sntxrrr',
            secondName: 'Paul Steffens'
        },
        {
            tag: 'a',
            href: '#moonlight',
            name: 'Moonlight',
            secondHref: 'http://twitter.com/derSchepp',
            secondName: 'Christian "Schepp" Schaefer'
        },
        {
            tag: 'a',
            href: '#typewriter',
            name: 'Typewriter',
            secondHref: 'http://thisbythem.com',
            secondName: 'Lance Alton Troxel'
        },
        {
            tag: 'a',
            href: '#oldschool',
            name: 'Old School',
            secondHref: 'http://romanliutikov.com',
            secondName: 'Roman Liutikov'
        },
        {
            tag: 'a',
            href: '#butchery',
            name: 'Butchery',
            secondHref: 'http://vibby.fr',
            secondName: 'Vibby'
        },
        {
            tag: 'a',
            href: '#m6tt',
            name: 'm6tt',
            secondHref: 'http://m6tt.com',
            secondName: 'Matt Woodfield'
        },
        {
            tag: 'a',
            href: '#1024-bytes',
            name: '1024-bytes',
            secondHref: 'http://github.com/faisalman',
            secondName: 'Faisalman'
        },
        {
            tag: 'a',
            href: '#molokai',
            name: 'Molokai',
            secondHref: 'http://designtomarkup.com',
            secondName: 'Kien Nguyen'
        },
        {
            tag: 'a',
            href: '#android',
            name: 'Android',
            secondHref: 'http://agat.in',
            secondName: 'Aleksej Romanovskij'
        },
        {
            tag: 'a',
            href: '#bookshelf',
            name: 'Bookshelf',
            secondHref: 'https://github.com/SelenIT',
            secondName: 'SelenIT'
        },
        {
            tag: 'a',
            href: '#geocities',
            name: 'GeoCities',
            secondHref: 'https://github.com/asavartsov/',
            secondName: 'Alexey Savartsov'
        },
        {
            tag: 'a',
            href: '#imbatman',
            name: "I'm Batman",
            secondHref: '#',
            secondName: 'Paul Reid'
        },
        {
            tag: 'a',
            href: '#ebhoren',
            name: 'Ebhoren',
            secondHref: 'http://www.dominic-mercier.com',
            secondName: 'Dominic Mercier'
        },
        {
            tag: 'a',
            href: '#facetime',
            name: 'Facetime',
            secondHref: 'http://twitter.com/bnijenhuis',
            secondName: 'Bernard Nijenhuis'
        },
        {
            tag: 'a',
            href: '#cloudy',
            name: 'Cloudy',
            secondHref: 'http://twitter.com/putnik',
            secondName: 'Sergey Leschina'
        },
        {
            tag: 'a',
            href: '#greymatter',
            name: 'Grey Matter',
            secondHref: 'http://pepelsbey.net',
            secondName: 'Vadim Makeev'
        },
        {
            tag: 'a',
            href: '#blue_square',
            name: 'Blue square',
            secondHref: 'http://twitter.com/hsablonniere',
            secondName: 'Hubert Sablonnière'
        },
        {
            tag: 'a',
            href: '#helvetipink',
            name: 'HelvetiPink',
            secondHref: 'http://billkeller.name',
            secondName: 'Bill Keller'
        },
        {
            tag: 'a',
            href: '#summersun',
            name: 'Summer Sun',
            secondHref: 'http://twitter.com/tanya_peasgood',
            secondName: 'Tanya Peasgood'
        },
        {
            tag: 'a',
            href: '#lessismore',
            name: 'Less is More',
            secondHref: 'http://twitter.com/rob_balfre',
            secondName: 'Rob Balfre'
        },
        {
            tag: 'a',
            href: '#inset',
            name: 'Inset',
            secondHref: 'http://www.hachemuda.com',
            secondName: 'Guillermo Latorre'
        },
        {
            tag: 'a',
            href: '#legible',
            name: 'Legible',
            secondHref: 'http://lumens.se',
            secondName: 'Reimund Trost'
        },
        {
            tag: 'a',
            href: '#greenlemon',
            name: 'Green Lemon',
            secondHref: 'http://twitter.com/d_radunz',
            secondName: 'Dirk Radunz'
        },
        {
            tag: 'a',
            href: '#wired',
            name: 'Wired',
            secondHref: 'http://www.digitalwaxworks.com',
            secondName: 'Brett DeWoody'
        },
        {
            tag: 'a',
            href: '#narcissist',
            name: 'Narcissist',
            secondHref: 'http://jackiebalzer.com',
            secondName: 'Jackie Balzer'
        },
        {
            tag: 'a',
            href: '#juizstar',
            name: 'Juiz Star',
            secondHref: 'http://www.creativejuiz.fr',
            secondName: 'Geoffrey Crofte'
        },
        {
            tag: 'a',
            href: '#wolfr',
            name: 'Wolfr',
            secondHref: 'http://twitter.com/wolfr_',
            secondName: 'Johan Ronsse'
        },
        {
            tag: 'a',
            href: '#fortyeight1k',
            name: 'fortyeight1k',
            secondHref: 'http://michael.haschke.biz',
            secondName: 'Michael Haschke'
        },
        {
            tag: 'a',
            href: '#columns',
            name: 'Columns',
            secondHref: 'http://rmcreative.ru',
            secondName: 'Alexander Makarov'
        },
        {
            tag: 'a',
            href: '#trainspotting',
            name: 'Trainspotting',
            secondHref: 'http://www.hboaventura.com',
            secondName: 'Henrique Boaventura'
        },
        {
            tag: 'a',
            href: '#ribbon',
            name: 'ribbon',
            secondHref: 'http://oodavid.com',
            secondName: 'David King'
        },
        {
            tag: 'a',
            href: '#solarized',
            name: 'Solarized',
            secondHref: 'http://twitter.com/heirenton',
            secondName: 'heirenton'
        },
        {
            tag: 'a',
            href: '#openwater',
            name: 'Open Water',
            secondHref: 'https://github.com/gilmoreorless',
            secondName: 'Gilmore Davidson'
        },
        {
            tag: 'a',
            href: '#html5colors',
            name: 'HTML5 Colors',
            secondHref: 'http://www.theweblife.com',
            secondName: 'Michael Garrett Jones'
        },
        {
            tag: 'a',
            href: '#heart_css',
            name: 'heart css',
            secondHref: 'https://github.com/kjchoy',
            secondName: 'Choy Kum Jin'
        },
        {
            tag: 'a',
            href: '#sourcy',
            name: 'Sourcy',
            secondHref: 'http://kizu.ru/en/',
            secondName: 'Roman Komarov'
        },
        {
            tag: 'a',
            href: '#terminal',
            name: 'Terminal',
            secondHref: 'http://twitter.com/PanyaKor',
            secondName: 'Mikhail Korepanov'
        },
        {
            tag: 'a',
            href: '#goodnight_moon',
            name: 'Goodnight Moon',
            secondHref: 'http://livingcode.org',
            secondName: 'Dethe Elza'
        },
        {
            tag: 'a',
            href: '#fancy',
            name: 'Fancy',
            secondHref: 'http://www.trustweb.it',
            secondName: 'Michele Cipriani'
        },
        {
            tag: 'a',
            href: '#textlevels',
            name: 'Text Levels',
            secondHref: 'http://www.patrickmann.com',
            secondName: 'Patrick Mann'
        },
        {
            tag: 'a',
            href: '#yelo',
            name: 'Yelo',
            secondHref: 'http://bartdebruin.nl',
            secondName: 'Bart de Bruin'
        },
        {
            tag: 'a',
            href: '#spartan',
            name: 'Spartan',
            secondHref: 'http://trentm.com',
            secondName: 'Trent Mick'
        },
        {
            tag: 'a',
            href: '#paper',
            name: 'paper',
            secondHref: 'http://daniel-rauber.de',
            secondName: 'Daniel Rauber'
        },
        {
            tag: 'a',
            href: '#lucuma',
            name: 'Lúcuma',
            secondHref: 'http://twitter.com/germanmartinez',
            secondName: 'Germán Martínez'
        },
        {
            tag: 'a',
            href: '#freshsoda',
            name: 'Fresh Soda',
            secondHref: 'http://jungundwillich.de',
            secondName: 'Jan Ortgies'
        },
        {
            tag: 'a',
            href: '#ev',
            name: 'Ev',
            secondHref: 'http://evangeneer.net',
            secondName: 'Mathieu Rochette'
        },
        {
            tag: 'a',
            href: '#b4ya11y',
            name: 'B4y &amp; A11y',
            secondHref: 'http://twitter.com/etBen',
            secondName: 'Benoit Klein'
        },
        {
            tag: 'a',
            href: '#adaptype',
            name: 'Adaptype',
            secondHref: 'http://vasilis.nl',
            secondName: 'Vasilis van Gemert'
        },
        {
            tag: 'a',
            href: '#bleubleu',
            name: 'BleuBleu',
            secondHref: 'http://www.leightonrodney.com',
            secondName: 'Leighton Rodney'
        },
        {
            tag: 'a',
            href: '#simpl',
            name: 'Simpl',
            secondHref: 'http://www.neofyt.com',
            secondName: 'Neofyt'
        },
        {
            tag: 'a',
            href: '#mitchiru',
            name: 'Mitchiru',
            secondHref: 'http://banquo.de',
            secondName: 'Michael Fritz'
        },
        {
            tag: 'a',
            href: '#casoy',
            name: 'Casoy',
            secondHref: 'http://twitter.com/robertboloc',
            secondName: 'Robert Boloc'
        },
        {
            tag: 'a',
            href: '#thesimpleswede',
            name: 'The Simple Swede',
            secondHref: 'http://www.tobiasphoto.com',
            secondName: 'Tobias Akeblom'
        },
        {
            tag: 'a',
            href: '#photobox',
            name: 'PhotoBox',
            secondHref: 'http://stinkyinkshop.co.uk',
            secondName: 'Stinkyink'
        },
        {
            tag: 'a',
            href: '#desktop',
            name: 'Desktop',
            secondHref: 'http://webmolot.com',
            secondName: 'Webmolot'
        },
        {
            tag: 'a',
            href: '#monochrome',
            name: 'Monochrome',
            secondHref: 'http://tamerayd.in',
            secondName: 'Tamer Aydin'
        },
        {
            tag: 'a',
            href: '#expandable',
            name: 'Expandable',
            secondHref: 'http://twitter.com/curlybrace',
            secondName: 'Dennis Madvedovsky'
        },
        {
            tag: 'a',
            href: '#bluebrush',
            name: 'BlueBrush',
            secondHref: 'https://twitter.com/jennyhao',
            secondName: 'Jenny Hao'
        },
        {
            tag: 'a',
            href: '#noticeboard',
            name: 'Notice Board',
            secondHref: 'http://www.about.me/niharsawant',
            secondName: 'Nihar Sawant'
        },
        {
            tag: 'a',
            href: '#triangulate',
            name: 'Triangulate',
            secondHref: 'http://jumplinkdesign.co.vu',
            secondName: 'Sebastien Paquet'
        },
        {
            tag: 'a',
            href: '#aapl',
            name: 'AAPL',
            secondHref: 'http://twitter.com/joffreyjaffeux',
            secondName: 'Joffrey Jaffeux'
        },
        {
            tag: 'a',
            href: '#yollaw',
            name: 'Yollaw',
            secondHref: 'http://franzose.in',
            secondName: 'Yan Ivanov'
        },
        {
            tag: 'a',
            href: '#stretchy',
            name: 'Stretchy',
            secondHref: 'http://twitter.com/mistadikay',
            secondName: 'Denis Koltsov'
        },
        {
            tag: 'a',
            href: '#smile',
            name: 'smile',
            secondHref: 'http://twitter.com/realmuecke',
            secondName: 'Michael Scharnagl'
        },
        {
            tag: 'a',
            href: '#toolbar',
            name: 'Toolbar',
            secondHref: 'http://chervonny.ru/en/',
            secondName: 'Maxim Chervonny'
        },
        {
            tag: 'a',
            href: '#roundrect',
            name: 'Round Rect',
            secondHref: 'http://www.bitstorm.org',
            secondName: 'Edwin Martin'
        },
        {
            tag: 'a',
            href: '#therhythm',
            name: 'The Rhythm',
            secondHref: 'http://kizu.ru/en/',
            secondName: 'Roman Komarov'
        },
        {
            tag: 'a',
            href: '#simplebox',
            name: 'SimpleBox',
            secondHref: 'http://raelmax.com',
            secondName: 'Rael Max'
        },
        {
            tag: 'a',
            href: '#crawl',
            name: 'Crawl',
            secondHref: 'http://atelierbramdehaan.nl',
            secondName: 'Bram de Haan'
        }
        
    ];

    function createLi(data) {
        let a, hrefValue, href, 
            secondHref, secondHrefValue, name,
            secondName, secondA;
            
            data.forEach(function(obj) {
                for (let key in obj) {
                    if (key === 'href') {
                        href = key;
                        hrefValue = obj.href;
                    } else if (key === 'secondHref') {
                        secondHref = 'href';
                        secondHrefValue = obj.secondHref;
                    } else if (key === 'name') {
                        name = obj[key];
                    } else if (key === 'secondName') {
                        secondName = obj[key];
                    };
                } 
            newLi = document.createElement('li');
            ul.appendChild(newLi);
            a = document.createElement(obj.tag);
            a.setAttribute(href, hrefValue);
            a.innerHTML = name;
            secondA = document.createElement(obj.tag);
            secondA.setAttribute(secondHref, secondHrefValue);
            secondA.innerHTML = secondName;
            newLi.appendChild(a);
            newLi.appendChild(secondA);
        });
    }
    createLi(li);

    let article = document.createElement('article');
    article.setAttribute('role', 'main');
    document.body.appendChild(article);
    const headerInArticle = document.createElement('header');
    article.appendChild(headerInArticle);

    let abbrCSS = document.createElement('abbr');
    abbrCSS.innerHTML='CSS';
    const secondTitleInArticle = document.createElement('h2');
    secondTitleInArticle.append('The Beauty in ', abbrCSS, ' Design');
    headerInArticle.appendChild(secondTitleInArticle);
    
    const p = document.createElement('p');
    const abbr = document.createElement('abbr');
    abbr.setAttribute('title', 'Kibibyte');
    abbr.innerHTML = 'K';
    const dfn = document.createElement('dfn');
    dfn.setAttribute('title', '1024 bytes');
    dfn.innerHTML = 'Kibibyte';
    const secondAbbrCSS = document.createElement('abbr');
    secondAbbrCSS.innerHTML='CSS';
    p.append('A demonstration of what can be accomplished with only 1 ', abbr, '  (', dfn, ') of ', secondAbbrCSS, '. Select any design from the list to load it into this page. You can also navigate back and forth by using the left and right arrow keys.');
    headerInArticle.appendChild(p);

    const section = document.createElement('section');
    article.appendChild(section);
    const secondTitleInSection = document.createElement('h2');
    secondTitleInSection.innerHTML = 'So What is This About?';
    section.appendChild(secondTitleInSection);

    const pInSection = document.createElement('p');
    const spanInSection = document.createElement('span');
    spanInSection.setAttribute('id', 'zengarden-age');
    spanInSection.innerHTML = ('a lot of');
    const aInSection = document.createElement('a');
    aInSection.setAttribute('href', 'http://mezzoblue.com');
    aInSection.innerHTML = 'Dave Shea';
    const secondAinSection = document.createElement('a');
    secondAinSection.setAttribute('href', 'http://www.csszengarden.com');
    const cite = document.createElement('cite');
    const abbrInCite = document.createElement('abbr');
    abbrInCite.innerHTML = 'CSS';
    cite.append(abbrInCite, ' Zen Garden');
    secondAinSection.appendChild(cite);
    const abbrInSection = ('abbr');
    abbrInSection.innerHTML = 'CSS';
    const thirdAinSection = document.createElement('a');
    thirdAinSection.setAttribute('href', 'http://qfox.nl');
    thirdAinSection.innerHTML = 'Peter van der Zee';
    const forthAinSection = document.createElement('a');
    forthAinSection.setAttribute('href', 'http://js1k.com');
    forthAinSection.innerHTML = 'JS1k';
    const secondAbbrinSection = document.createElement('abbr');
    secondAbbrinSection.innerHTML = 'K';
    pInSection.append("Back in 2003 (that's ", spanInSection, ' years ago!) ', aInSection, ' launched the ', secondAinSection, '. It showcased what was possible with ', abbrInSection, ' -based designs, leading to an explosion in the use of CSS on the web. Then, ', thirdAinSection, ' created ', forthAinSection, ' in 2010, a competition to build cool applications with no more than 1 ', secondAbbrinSection, ' of JavaScript.'); 
    section.appendChild(pInSection);

    const secondPinSection = document.createElement('p');
    const thirdAbbrInSection = document.createElement('abbr');
    thirdAbbrInSection.innerHTML = 'CSS';
    const forthAbbrInSection = document.createElement('abbr');
    forthAbbrInSection.innerHTML = 'CSS';
    const fifthAbbrInSection = document.createElement('abbr');
    fifthAbbrInSection.innerHTML = 'CSS';
    const fifthAinSection = document.createElement('a');
    fifthAinSection.setAttribute('href', 'http://httparchive.org/interesting.php#bytesperpage');
    const abbrInA = document.createElement('abbr');
    abbrInA.innerHTML = 'K';
    const secondAbbrInA = document.createElement('abbr');
    secondAbbrInA.innerHTML = 'CSS';
    fifthAinSection.append(' 75 ', abbrInA, ' of ', secondAbbrInA);
    secondPinSection.append('A lot has happened since the Zen Garden days, and today you can do almost anything with only ', thirdAbbrInSection, '. As ', forthAbbrInSection, ' use is growing, so is the average ', fifthAbbrInSection, ' file size. Popular sites have in average', fifthAinSection, ', but some use up to a megabyte of style sheets!');
    section.appendChild(secondPinSection);

    const thirdPinSection = document.createElement('p');
    const b = document.createElement('b');
    b.innerHTML = 'CSS1K';
    thirdPinSection.append('Do we need that much? ', b, ' invites you to show that web developers are more inventive than ever, and that limitations can sparkle creativity.');
    section.appendChild(thirdPinSection);

    const secondSection = document.createElement('section');
    article.appendChild(secondSection);

    const secondTitleInSecondSection = document.createElement('h2');
    secondTitleInSecondSection.innerHTML = 'Participation';
    secondSection.appendChild(secondTitleInSecondSection);

    const ol = document.createElement('ol');
    secondSection.appendChild(ol);
    const firstLiInOl = document.createElement('li');
    const firstAbbrInLi = document.createElement('abbr');
    firstAbbrInLi.innerHTML = 'CSS';
    firstLiInOl.append('Submissions must consist of only ', firstAbbrInLi);
    ol.appendChild(firstLiInOl);
    const secondLiInOl = document.createElement('li');
    const secondAbbrInLi = document.createElement('abbr');
    secondAbbrInLi.innerHTML = 'K';
    secondAbbrInLi.setAttribute('title', 'Kibibyte');
    secondLiInOl.append('Submissions may be up to 1 ',secondAbbrInLi, ' (1024 bytes) minified');
    ol.appendChild(secondLiInOl);
    const thirdLiInOl = document.createElement('li');
    const em = document.createElement('em');
    em.innerHTML = 'not';
    const aInLi = document.createElement('a');
    aInLi.setAttribute('href', 'https://leaverou.github.io/prefixfree/');
    aInLi.innerHTML = 'PrefixFree';
    thirdLiInOl.append('Vendor prefixes are ', em, ' counted to the total number of bytes – submit your code unprefixed and ', aInLi, ' will add necesssary prefixes');
    ol.appendChild(thirdLiInOl);
    const forthLiInOl = document.createElement('li');
    const firstCode = document.createElement('code');
    firstCode.innerHTML = 'data';
    const thirdAbbrInLi = document.createElement('abbr');
    thirdAbbrInLi.innerHTML = 'URI';
    const secondCode = document.createElement('code');
    secondCode.innerHTML = '@font-face';
    const thirdCode = document.createElement('code');
    thirdCode.innerHTML = '@import';
    forthLiInOl.append('Any external resources and images, including ', firstCode, ' ',thirdAbbrInLi, "'s, ", secondCode, ' and ', thirdCode, "'s, are forbidden");
    ol.appendChild(forthLiInOl);
    const fifthLiInOl = document.createElement('li');
    const secondAinLi = document.createElement('a');
    secondAinLi.setAttribute('href', 'http://dowebsitesneedtolookexactlythesameineverybrowser.com');
    secondAinLi.innerHTML = 'does not';
    fifthLiInOl.append('The page ', secondAinLi, ' have to look the same in every browser, but graceful degradation is encouraged');
    ol.appendChild(fifthLiInOl);
    const sixthLiInOl = document.createElement('li');
    const thirdAinLi = document.createElement('a');
    thirdAinLi.setAttribute('href', 'http://www.opensource.org/licenses/mit-license.php');
    thirdAinLi.innerHTML = 'MIT License';
    sixthLiInOl.append('The submitted code is licensed under the ', thirdAinLi);
    const forthPinSection = document.createElement('p');
    const aInP = document.createElement('a');
    aInP.setAttribute('href', 'https://github.com/selfthinker/CSS1K/');
    aInP.innerHTML = 'CSS1K';
    forthPinSection.append('To participate, fork ', aInP, ' at GitHub and send your submission as a pull request. You are free to update your style at any time by sending a new pull request. Please specify the name of the style, your own name, and a URL you want us to link to (such as your homepage).');
    secondSection.appendChild(forthPinSection);

    const footer = document.createElement('footer');
    document.body.appendChild(footer);
    const pInFooter = document.createElement('p');
    const aInFooterP = document.createElement('a');
    aInFooterP.setAttribute('href', 'http://www.opensource.org/licenses/mit-license.php');
    aInFooterP.setAttribute('rel', 'license');
    aInFooterP.innerHTML = 'MIT license';
    const secondAinFooterP = document.createElement('a');
    secondAinFooterP.setAttribute('href', 'https://github.com/selfthinker/CSS1K');
    secondAinFooterP.innerHTML = 'GitHub';
    pInFooter.append('Licensed under the ', aInFooterP, '. Hosted and managed at ', secondAinFooterP);
    footer.appendChild(pInFooter);
}

 