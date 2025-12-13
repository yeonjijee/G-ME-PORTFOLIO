export const itemData = {
    'ai': { name: 'AI', attribute: '도구', description: '생성형 AI를 사용해 작업을 수행한다.' },
    'beads': { name: 'Beads', attribute: '재료 / 장르', description: '작은 구슬들과 조각들, 파편들이 모이는 것...' },
    'black': { name: 'Black', attribute: '색상', description: '검은색.' },
    'book': { name: 'Book', attribute: '도구', description: '책을 원작으로 하는 작품.' },
    'camera': { name: 'Camera', attribute: '도구', description: '카메라 촬영을 기반으로 하는 작품.' },
    'dream': { name: 'Dream', attribute: '주제', description: '꿈과 모호함.' },
    'hand': { name: 'Hand', attribute: '재료 / 장르', description: '손으로 직접 수제작한 것.' },
    'music': { name: 'Music', attribute: '도구', description: '음악을 기반으로 하는 작품.' },
    'philosophy': { name: 'Philosophy', attribute: '재료 / 장르', description: '철학적 사고를 곁들여보자.' },
    'red': { name: 'Red', attribute: '색상', description: '빨간색.' },
    'sf': { name: 'SF', attribute: '재료 / 장르', description: 'Sience Fiction을 참 좋아합니다.' },
    'star': { name: 'Star', attribute: '주제', description: '별모양, 우주별, 별똥별, 별별별...' },
    'tree': { name: 'Tree', attribute: '주제', description: '나무의 푸르른 반짝임은 현기증을 일으킨다.' },
    'woman': { name: 'Woman', attribute: '주제', description: '여성과 관련된...' },
    'word': { name: 'Word', attribute: '재료 / 장르', description: '글자를 옮기는 사람.' },
    'yellow': { name: 'Yellow', attribute: '색상', description: '노란색.' },
    'blue': { name: 'Blue', attribute: '색상', description: '파란색.' },
    'magenta': { name: 'Magenta', attribute: '색상', description: '마젠타색.' },
    'blank': { name: 'Blank', attribute: 'none', description: '빈칸. 혹은 미정의 어떠한 요소.' },
    'Document : Print': { name: 'Document : Print', attribute: 'txt, pdf', description: '포스터(인쇄), 팜플렛, 책, 타이포그래피 개발...' },
    'Image : Still Visual': { name: 'Image : Still Visual', attribute: 'png, jpg', description: '촬영 사진, 그래픽 이미지...' },
    'Video : Motion': { name: 'Video : Motion', attribute: 'mp4, mov, gif', description: '영상, 모션그래픽...' },
    'Web : Interactive': { name: 'Web : Interactive', attribute: 'web, html, css, js', description: '디자인, 웹퍼블리싱, 인터렉티브 콘텐츠...' }
};

export const goodMatchData = {
    'ai': ['book', 'philosophy', 'word', 'black', 'hand'],
    'beads': ['camera', 'hand', 'black', 'magenta', 'blue', 'star'],
    'black': ['camera', 'beads', 'hand', 'word', 'sf', 'ai', 'magenta', 'blank', 'music', 'book'],
    'blue': ['camera', 'beads', 'star', 'word', 'hand', 'blank'],
    'book': ['ai', 'philosophy', 'word', 'camera', 'hand', 'star', 'sf', 'woman', 'dream', 'blank', 'black'],
    'camera': ['book', 'hand', 'star', 'music', 'yellow', 'woman', 'beads', 'black', 'magenta', 'blue', 'sf', 'dream', 'blank'],
    'dream': ['book', 'word', 'woman', 'camera', 'yellow', 'blank'],
    'hand': ['book', 'camera', 'star', 'beads', 'black', 'magenta', 'word', 'blue', 'blank', 'ai'],
    'magenta': ['camera', 'beads', 'hand', 'woman', 'yellow', 'black'],
    'music': ['camera', 'yellow', 'woman', 'word', 'black', 'blank'],
    'philosophy': ['ai', 'book', 'word'],
    'sf': ['book', 'word', 'woman', 'black', 'camera', 'blank'],
    'star': ['book', 'camera', 'hand', 'beads', 'blue', 'woman', 'blank'],
    'woman': ['music', 'camera', 'yellow', 'book', 'word', 'sf', 'star', 'dream', 'magenta', 'hand'],
    'word': ['ai', 'book', 'philosophy', 'sf', 'woman', 'dream', 'blue', 'hand', 'blank', 'black', 'music'],
    'yellow': ['music', 'camera', 'woman', 'dream', 'blank'],
    'blank': ['word', 'blue', 'hand', 'music', 'black', 'book', 'camera', 'yellow', 'dream', 'star', 'woman', 'sf', 'magenta'],
    'Web : Interactive': ['ai', 'book', 'philosophy', 'word'],
    'Document : Print': ['ai', 'book', 'philosophy', 'word', 'camera', 'beads', 'hand', 'black', 'magenta', 'sf', 'woman', 'dream'],
    'Image : Still Visual': ['camera', 'beads', 'hand', 'magenta', 'blue', 'star'],
    'Video : Motion': ['book', 'camera', 'hand', 'star', 'yellow', 'woman', 'beads', 'magenta']
};

export const dudBeadMessages = {
    'ai': '지지 않으려고만 하다가 AI는 어느새 작업 동반자가 되었어요. 언제나 효과적으로 사용하기 위해 연구합니다.',
    'beads': '작은 구슬들을 꿰어다 엮는 수작업을 즐깁니다. 스트레스 해소용 취미이기도 하고 가끔 내다 팔기도 해요.',
    'black': '작업이 잘 진행되지 않을 때에는 일단 블랙을 깔고 보는 경향이 있습니다.',
    'blue': '파아란 것과 푸른 것, 찬란한 블루는 자연을 닮아있고 그것을 담고 있습니다. 그게 참 좋다고 생각해요.',
    'book': '문예창작과를 복수전공 하고 있습니다. 글을 많이 읽으려고 노력해요.',
    'camera': '뷰파인더로 보는 세상을 사랑합니다. 가끔 피사체를 사랑하게 되기도 해요.',
    'dream': '어렸을 때부터 꿈을 많이 꾸는 편이었어요. 그래서 그런지 꿈과 무의식은 제 영감의 샘터에요.',
    'hand': '이것저것 자르고 꼬매고 두드리고 엮고 칠하고 조립하는 데에 많은 시간을 할애하는 편입니다.',
    'magenta': '신체의 혈액에서 출발하는 마젠타 색이 주는 강렬함이 있어요.',
    'music': '전문적이지는 않지만 소리를 분석하는 걸 좋아해요. 작은 소리들을 쌓아올려 풍성하게 만들어보는 게 목표입니다.',
    'philosophy': '철학은 문학과 디자인에서 뗄레야 뗄 수 없는 분야입니다. 생각을 많이 하고 공부도 많이 해야겠죠.',
    'sf': '가장 좋아하는 장르는 SF입니다. 언제나 ‘듀나’ 작가의 책을 추천하죠.',
    'star': '반짝이고 폭발하는 빛의 힘을 동경합니다. 그 근원을 좇아 보면 언제나 별이더군요.',
    'woman': '여성과 젠더에 관해 공부하고 있어요. 제가 여성인 것도 이유가 되겠죠.',
    'word': '글의 힘은 매우 큽니다. 그 힘을 잘 다루기 위해 단련중이에요.',
    'yellow': '차분하고 발랄한 노란색은 제 시그니처 컬러입니다. 퍼머넌트 옐로우 라이트가 최애 물감이에요.',
    'blank': '새로운 요소가 나타날 때마다 조합 가능한 경우의 수는 무궁무진하게 많아집니다. 어떤 작품을 기다리고 있나요?'
};

export const completionData = [
    { 
        lines: ['Document : Print', 'Web : Interactive'], 
        beads: ['ai', 'book', 'philosophy', 'word'].sort(), 
        result: 
        { 
            title: '철학좀비', 
            year: 2025,
            images: ['images/철학좀비01.png', 'images/철학좀비02.png'], 
            text: '<p>데이비드 차머스의 \'철학좀비\'라는 개념을 아는가?</p> <p>\'철학좀비\'는 물리적 행동은 인간과 같지만 내면의 의식이 없는 존재를 말한다.</p> <p>철학좀비의 개념과 AI가 매우 유사하다는 사실을 발견하고 연구를 시작하게 되었다.</p> <p>인간들조차 답하기 어렵고, 정답이 무엇인지 밝혀지지 않은 난제를 과연 AI는 어떻게 판단할까?</p> <p>인간의 손에서 나온 인공적인 존재를 인터뷰하며, 마지막 테스트를 통해 참여자는 오히려 자기 자신에 대해 알아가는 경험을 얻는다.</p>', 
            link: ['https://www.instagram.com/aec_laboratory/', 'https://www.notion.so/Interviewing-Artificial-Intelligence-1ece5b01d52b80d0a188db82a03b3fe4?source=copy_link']
        } 
    },
    { 
        line: 'Video : Motion', 
        beads: ['book', 'camera', 'hand', 'star'].sort(), 
        result: 
        { 
            title: '구의 증명', 
            year: 2022,
            images: ['images/구의증명01.jpg', 'images/구의증명02.jpg', 'images/구의증명00.jpg', 'images/구의증명.mp4'], 
            text: '최진영 - 구의증명 \n opening sequance', 
            link: 'https://www.instagram.com/p/CmYQlKQjVSR/' 
        } 
    },
    { 
        line: 'Video : Motion', 
        beads: ['music', 'camera', 'yellow', 'woman'].sort(), 
        result: 
        { 
            title: '두꺼비집', 
            year: 2023,
            images: ['images/두꺼비집01.jpg', 'images/두꺼비집02.jpg', 'images/두꺼비집.mp4'], 
            text: '<p>두꺼비집 - 김필선</p> <p>어떠한 존재로 인해 사랑을 경험하고 정신적 성장을 거쳐 마음의 벽을 열고 나오는 과정, 그 안에서 헤메고 괴로운 경험도 있지만 아픔을 딛고 단단해지는 소녀의 이야기.</p> <p>베일과 거울은 마음의 벽과 타인의 시선을 의미한다.</p><p>나 스스로를 내비치지 못했던 소녀가 점차 베일을 벗고 조금씩이지만 자신 본연의 모습을 드러내는 계기의 발판을 담았다.</p>  <p>Music Video.</p>', 
            link: 'https://www.instagram.com/p/C0RXJdSJ54-/' 
        } 
    },
    { 
        line: 'Document : Print', 
        beads: ['camera', 'beads', 'hand', 'black'].sort(), 
        result: 
        { 
            title: '당신은 무엇으로 이루어져 있나요', 
            year: 2024,
            images: ['images/당신은01.png', 'images/당신은02.png', 'images/당신은03.png', 'images/당신은04.png'], 
            text: '<p>인간의 본성에는 자아실현이라는 것이 있다.</p> <p>나다운 것.</p> <p>타인과 본인의 분리 또는 동질감 형성을 위해 분석하고 분리하고 수집하고 정리한다.</p> <p>한 사람을 한 단어로 설명하고 한눈에 이해하기 위해 혈액형에 특성을 부여하고 mbti를 검사한다.</p> <p>본 작품의 의도 또한 이와 같다. 나라는 사람을 보다 개인적이고 표면적인 방법으로 시각화한 작품이다.</p> <p>우리를 이루는 취향은 우리가 소유하는 물질로 나타난다.</p><p> 오랜 시간 소중히 간직한 애착품, 편안하고 유용하다고 생각한 사용품, 방안에 굴러다니던 잡동사니.</p> <p>우리의 생활 속에 존재하는 수많은 선택지 속 무의식적으로 선택한 물질의 작은 파현들을 모아 하나의 덩어리를 만들면 그 사람의 취향을 알 수 있고, 색을 볼 수 있고, 가치관을 배울 수 있다.</p> <p>작품 내에는 약 80여개의 소유물로 덩어리가 이루어져있다.</p> <p>작품을 보는 당신은 어떤 사람을 보고 있는가.</p> <p>당신은 무엇으로 이루어져 있는가.</p>', 
            link: 'https://www.instagram.com/p/DCJu1k9ybSG/' 
        } 
    },
    { 
        line: 'Video : Motion', 
        beads: ['camera', 'beads', 'blue', 'star'].sort(), 
        result: 
        { 
            title: '나의 세계', 
            year: 2022,
            images: ['images/나의세계.jpg', 'images/나의세계.mp4'], 
            text: '<p>[나의 세계]</p> <p>나는 왜 잠이 안올까. 오늘도 잠에 들지 못한다.</p> <p>푸르스름한 새벽에 눈을 뜨면 또다른 환상적인 새로운 세계가 머릿속에서 펼쳐진다.</p> <p>상상의 나래를 펼치다 까무룩 잠에 들면 또다시 밝아오는 아침.</p>', 
            link: 'https://www.instagram.com/p/CkLvLyqDyqw/' 
        } 
    },
    { 
        line: 'Document : Print', 
        beads: ['book', 'word', 'woman', 'dream'].sort(), 
        result: 
        { 
            title: '꿈중독', 
            year: 2025,
            text:'<p>아무도 꿈꾸지 않는 세상. 현재의 인간에게 꿈은 진화 과정에서 사라졌다.</p> <p>세상의 사람들에게 꿈이란 조현병의 합병증, 마약성 물질을 통한 환각 등으로 인식된다.</p> <p>잠은 하루의 끝마무리이자 내일의 시작으로, 하루의 피로를 풀고 몸을 리셋하는 신성한 의식으로 여겨진다.</p> <p>꿈을 꾸는 사람들이 잠을 자도 피로가 풀리지 않는다는 것은 잠을 깊이 자지 못하는, 진화하지 못하여 도태된 자라는 편견을 가진다.</p> <p>꿈꾸는 사람들은 편견과 고정관념이 야기한 자기 부정으로 인해 잠에 들고 싶지 않아 하는 경향이 크다.</p> <p>지속적으로 얕은 잠을 자는 그들은 계속해서 꿈을 꾸게 되고 결국 ‘꿈중독’이라 불리는 질병을 앓게 된다.</p>', 
            link: 'https://www.notion.so/2b9e5b01d52b80b79710db5f42db5b7b?source=copy_link'
        } 
    },
    { 
        line: 'Document : Print', 
        beads: ['book', 'word', 'woman', 'sf'].sort(), 
        result: 
        { 
            title: '형해', 
            year: 2025,
            text: '어느 날 학교에 불시착한 외계인. 외계인은 그를 도와준 세 명의 대학생 나빈, 소라, 상록에게 우주 여행을 권한다. 둘은 거절했으나 나빈은 그를 따라 우주로 나가겠다고 하며 별안간 의식 불명의 상태가 되는데...', 
            link: 'https://www.notion.so/2bfe5b01d52b805ebfc1d0ba3ef54266?source=copy_link' 
        } 
    },
    { 
        lines: ['Document : Print', 'Image : Still Visual'], 
        beads: ['camera', 'beads', 'hand', 'magenta'].sort(), 
        result: 
        { 
            title: 'pickihookie', 
            year: 2023,
            images: ['images/피키후키01.jpg', 'images/피키후키02.png', 'images/피키후키03.png', 'images/피키후키04.png', 'images/피키후키05.jpeg', 'images/피키후키06.png', 'images/피키후키08.png', 'images/피키후키09.png'], 
            text: 
            '<p>Brand Design Project</p> <p>chocker brand</p>' ,
            link: 'https://www.instagram.com/pickihookie.official/' 
        } 
    },
    {
        line: 'Document : Print',
        beads: ['word', 'book', 'black', 'sf'].sort(),
        result:
        { 
            title: '제저벨',
            year: 2023, 
            images: ['images/제저벨.png'],
            text: '<p>듀나의 장편소설 <<제저벨>> 시각화 작업.</p> <p>주요 키워드를 분석해 페이지 별 언급 위치 및 횟수를 기준으로 분석한 인포그래픽 포스터.</p>',
            link: 'https://www.instagram.com/p/C1s7X2_o3T9/'
        }
    },
    {
        line: 'Document : Print',
        beads: ['word', 'ai', 'black', 'hand'].sort(),
        result:
        { 
            title: '한국경제 : 신문을 읽는 가장 작은 단위',
            year: 2025, 
            images: ['images/한국경제01.png','images/한국경제02.png','images/한국경제03.png','images/한국경제04.png','images/한국경제05.png','images/한국경제06.png','images/한국경제07.png','images/한국경제08.png','images/한국경제09.png','images/한국경제10.png','images/한국경제11.png','images/한국경제12.png','images/한국경제13.png','images/한국경제14.png','images/한국경제15.png','images/한국경제16.png'],
            text: '2025-02-25 발행한 한국경제 신문의 A1면 ~ A16면을 기존 레이아웃에 대하여 분석 - 해체 - 재구성하여 제작한 인쇄물.',
            link: 'https://www.hankyung.com/'
        }
    },
    {
        line: 'Image : Still Visual',
        beads: ['camera', 'woman', 'yellow', 'magenta'].sort(),
        result: 
        { 
            title: 'strawberry girl',
            year: 2024,
            images: ['images/strawberryGirl01.png', 'images/strawberryGirl02.png','images/strawberryGirl03.png','images/strawberryGirl04.png','images/strawberryGirl05.png','images/strawberryGirl06.png'],
            text: '겨울 딸기가 제철이래서.',
            link: 'https://www.instagram.com/p/DFKKA9TzdiN/?img_index=1'
        }
    },
    {
        line: 'Document : Print',
        beads: ['word', 'blue', 'hand', 'blank'].sort(),
        result:
        { 
            title: '데모크라시',
            year: 2024,
            images: ['images/데모크라시01.jpg', 'images/데모크라시02.jpg', 'images/데모크라시03.jpg'],
            text: '<p>직접 디자인한 폰트 Jeeji01로 제작한 타이포그래피.</p> <P>민주주의란 어디에서 오는가.</P>',
            link: 'https://www.instagram.com/p/DDSR7zWSwLC/'
        }
    },
    {
        line: 'Document : Print',
        beads: ['word', 'music', 'black', 'blank'].sort(),
        result:
        { 
            title: 'This Too Shall Pass',
            year: 2023,
            images: ['images/okgo.png'],
            text: 'Ok Go의 <This Too Shall Pass - Rube Goldberg Machine> 영상을 주제로 진행한 작업. 대지의 가로축은 소리를 발생시킨 원인을 순서대로 나열하고, 세로축은 영상의 타임라인으로 영상 속 모든 사운드를 분류했다. 세로축의 단위는 1초이다. 가로축의 소리 원인으로 설정된 등장인물, 오브제는 구글링으로 찾은 이미지로 대체하여 보는 이로 하여금 해석의 즐거움을 주게 했다.',
            link: 'https://www.instagram.com/p/C1s7s2MoxMF/'
        }
    },
    {
        line: 'Image : Still Visual',
        beads: ['camera', 'woman', 'hand', 'blank'].sort(),
        result: 
        { 
            title: '배우 프로필',
            year: 2025,
            images: ['images/프로필01.png', 'images/프로필02.png', 'images/프로필03.png'],
            text: '배우 정세연 이미지 프로필',
            link: 'https://www.instagram.com/p/DMeHZJzziQ1/?img_index=1'
        }
    },
    { 
        line: 'Web : Interactive', 
        beads: ['word', 'book', 'blank', 'black'].sort(), 
        result: 
        { 
            title: '마녀사냥', 
            year: 2023,
            images: [
                'images/마녀사냥01.png', 'images/마녀사냥02.png', 'images/마녀사냥03.png', 
                'images/마녀사냥04.png', 'images/마녀사냥05.png', 'images/마녀사냥06.png', 
                'images/마녀사냥07.png', 'images/마녀사냥08.png', 'images/마녀사냥09.png', 
                'images/마녀사냥10.png'
            ], 
            text: '<p>최제훈, 『퀴르발 남작의 성』 </p> <p>: 마녀의 스트레오타입에 대한 고찰 - 휘뚜루마뚜루 세계사 1</p> <p>최제훈 작가의 단편집에 나오는 스토리를 담았다.</p> <p>본 대사는 작중 ‘헤카테’라는 그리스 신화에 나오는 마법의 여신의 대사이다.</p> <p>마녀란 무엇인가?</p> <p>마녀는 아니지만 누구든지 손가락질만 하면 불태울 수 있는 마술.</p><p>그리고 언제든지 입장이 바뀔 수 있다는 아이러니함을 담았다.</p>',
            link: ['https://yeonjijee.github.io/-/']
        } 
    },
    {
        line: 'Image : Still Visual',
        beads: ['camera', 'yellow', 'blank', 'blank'].sort(),
        result: 
        { 
            title: '고양이',
            year: 2023,
            images: ['images/고양이01.png', 'images/고양이02.png', 'images/고양이05.png',  'images/고양이07.png'],
            text: '동네 터줏대감들.',
            link: 'https://www.instagram.com/ee_j.film/'
        }
    },
    {
        line: 'Image : Still Visual',
        beads: ['camera', 'magenta', 'black', 'blank'].sort(),
        result: 
        { 
            title: '불티',
            year: 2023,
            images: ['images/불01.png', 'images/불02.png','images/불03.png','images/불04.png','images/불05.png','images/불06.png'],
            text: '<p>꺼지지 않는 불에서 피어나는 불티가 되어야겠다.</p><p>하늘 높이 날아가 나를 다 태워가며 그림 그리도록.</p>',
            link: 'https://www.instagram.com/p/C1s7s2MoxMF/'
        }
    },
    {
        line: 'Image : Still Visual',
        beads: ['camera', 'yellow', 'dream', 'blank'].sort(),
        result: 
        { 
            title: '순수',
            year: 2023,
            images: ['images/순수01.png', 'images/순수02.png','images/순수03.png','images/순수04.png','images/순수05.png','images/순수06.png', 'images/순수08.JPG','images/순수10.JPG','images/순수11.png','images/순수12.png','images/순수13.png','images/순수15.png'],
            text: '<p>순수한 마음 그대로를 담아보고 싶었다.</p>',
            link: 'https://www.instagram.com/ee_j.film/'
        }
    },
    {
        line: 'Image : Still Visual',
        beads: ['camera', 'star', 'woman', 'blank'].sort(),
        result: 
        { 
            title: '자유',
            year: 2024,
            images: ['images/자유01.png', 'images/자유04.png', 'images/자유07.png', 'images/자유08.png', 'images/자유10.png','images/자유12.png','images/자유13.png','images/자유16.png','images/자유17.png','images/자유18.png'],
            text: '스스럼 없는 그대의 자유는 무엇을 담고 있는가.',
            link: 'https://www.instagram.com/p/C_45J-YT_Ui/?img_index=1'
        }
    },
    { 
        line: 'Video : Motion', 
        beads: ['music', 'yellow', 'blank', 'blank'].sort(), 
        result: 
        { 
            title: '유물의 저주', 
            year: 2025,
            images: ['images/squar02.png', 'images/squar01.mp4'], 
            text: '<p>squar - riser(remix)</p><p>웅장한 사운드에 맞춘 오리엔탈리즘 루프 모션 그래픽.</p>', 
            link: 'https://soundcloud.com/squar/riser' 
        } 
    },
    {
        line: 'Image : Still Visual',
        beads: ['camera', 'sf', 'woman', 'blank'].sort(),
        result: 
        { 
            title: 'Projection; 혼재된 상',
            year: 2024,
            images: ['images/cielo01.png', 'images/cielo02.png','images/cielo03.png','images/cielo04.png','images/cielo05.png'],
            text: '<p>2024 CIELO 6기 PHOTO로 참여한 작업.</p><p>나 혼자 있는 밤이라는 사색의 시간 속 마주하는 진정한 내면의 모습들.</p><p>패션 매거진 작업.</p>',
            link: 'https://www.instagram.com/p/DGKAtNuzhtq/?img_index=1'
        }
    },
    // 미해금
    { 
        dud: true, 
        result: 
        { 
            title: '해금되지 않은 조합입니다.',
            subtitle: '제 이야기를 해드릴게요.',
            image: null,
            text: null, 
            link: 'https://www.instagram.com/ee_j.youn/'
        } 
    }
];