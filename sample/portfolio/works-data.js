/* =============================================
   JNGYS Portfolio — Works Data
   All work items live here. Edit this file to
   add, remove, or update portfolio entries.

   Cloudinary URL pattern:
     Thumbnail (grid):  /upload/q_auto,f_auto,w_700/
     Full-size (modal): /upload/q_auto,f_auto,w_1600/
   ============================================= */

// Helper: inject Cloudinary transforms into a URL
function cl(url, size = 'thumb') {
    if (!url) return url;
    // Skip if it's a video URL (handled separately), or already has transforms
    if (url.includes('/video/upload/')) return url;
    const transform = size === 'thumb' ? 'q_auto,f_auto,w_700' : 'q_auto,f_auto,w_1600';
    return url.replace('/upload/', `/upload/${transform}/`);
}

const WORKS = [
    // ─── 2025 ──────────────────────────────────────────────────────────────
    {
        title: 'Atelier Nodeul Opening Exhibition',
        year: 2025,
        category: 'work',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773058228/%EC%95%84%EB%9C%B0%EB%A6%AC%EC%97%90_%EB%85%B8%EB%93%A4_%EB%A1%9C%EC%A6%90%EB%A6%B0_2__%EA%B2%B0%EA%B3%BC_%EA%B2%B0%EA%B3%BC_xwqbfj.webp',
    },
    {
        title: 'Digital November MetaSensing',
        year: 2025,
        category: 'work',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773144639/20251111_C3366.MP4_20260310_210838.174_ervtvq.jpg',
    },
    {
        title: "The Murderer's Report Movie",
        year: 2025,
        category: 'project',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050590/%EC%82%B4%EC%9D%B8%EC%9E%90%EB%A6%AC%ED%8F%AC%ED%8A%B805_ahjjfu.jpg',
        images: [
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050592/%ED%8F%AC%EC%8A%A4%ED%84%B0_o1d1xu.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050597/edit_size02_p14ocj.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050588/%EC%82%B4%EC%9D%B8%EC%9E%90%EB%A6%AC%ED%8F%AC%ED%8A%B804_wwd2ra.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050585/%EC%82%B4%EC%9D%B8%EC%9E%90%EB%A6%AC%ED%8F%AC%ED%8A%B803_l701ux.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050583/%EC%82%B4%EC%9D%B8%EC%9E%90%EB%A6%AC%ED%8F%AC%ED%8A%B802_nygocs.jpg',
        ],
    },
    {
        title: 'Patek Philippe Brand Media Art',
        year: 2025,
        category: 'project',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050566/Patek_pqk8gp.png',
    },
    {
        title: 'Huracan',
        year: 2025,
        category: 'project',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050549/Storm_Feild_03_krdsbi.jpg',
        desc: "'Huracan' explores a massive vortex of algorithmically generated particles. Hundreds of thousands of particles collide and balance in an organic flow, creating abstract fields of force that resemble satellite views of Earth's atmosphere or swirling snowscapes. Through shader-based depth and shading, this work translates natural movements and forces into a cosmic-scale digital aesthetic experience.",
        credits: { Sound: 'Bley' },
        images: [
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050556/Storm_Feild_07_dfw0pk.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050553/Storm_Feild_05_ba6uid.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050542/rotate4_a0i7r8.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050530/random_mvr8pd.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050509/0726_3_qjzkyc.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050523/Mulit03_0827_tpolqk.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050521/Mulit02_0827_bniizd.jpg',
        ],
    },

    // ─── 2024 ──────────────────────────────────────────────────────────────
    {
        title: 'Paradise Art Lab Festival',
        year: 2024,
        category: 'work',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048771/Paradise_%EA%B3%B5%EC%83%9D%ED%95%98%EB%8A%94_%EB%AC%B4%EB%8A%AC_7_tt4gsf.jpg',
    },
    {
        title: 'Newmix Coffee',
        year: 2024,
        category: 'project',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048763/newmix_nj6b7p.jpg',
        credits: {
            Team: '@newmixcoffee.kr',
            Sound: 'Studio Namsan, Jeon Yongheyeon',
            Space: '@ggjh.kr',
            'Media Art': 'Joung Yunsu',
            Adviser: 'Kim bongjin',
            Photograph: 'Park yoochun',
        },
        images: [
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048761/newmix_%EC%84%B1%EC%88%98_7_qgxlju.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048760/newmix_%EC%84%B1%EC%88%98_6_wzq8nm.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048759/newmix_%EC%84%B1%EC%88%98_5_bdfxgh.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048758/newmix_%EC%84%B1%EC%88%98_4_moiyau.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048757/newmix_%EC%84%B1%EC%88%98_3_ykmsx6.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048756/newmix_%EC%84%B1%EC%88%98_2_kuphf3.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048755/newmix_%EC%84%B1%EC%88%98_1_twr4hn.jpg',
        ],
    },
    {
        title: 'Kosmos Resort Ulleungdo',
        year: 2024,
        category: 'project',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649399/DSC9422_%EA%B2%B0%EA%B3%BC_hfbjar.webp',
        credits: { Sound: 'Bley' },
        images: [
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649413/DSC9178_%EA%B2%B0%EA%B3%BC_r0lndo.webp',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649411/DSC9253_%EA%B2%B0%EA%B3%BC_c9rqtp.webp',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649410/DSC9375_1__%EA%B2%B0%EA%B3%BC_isxizx.webp',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649408/DSC9451_%EA%B2%B0%EA%B3%BC_hpeqpw.webp',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649406/DSC9588_%EA%B2%B0%EA%B3%BC_qxlngs.webp',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649404/DSC9912_%EA%B2%B0%EA%B3%BC_pcxcxv.webp',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649403/DSC9028_%EA%B2%B0%EA%B3%BC_b86boy.webp',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649402/DSC9361_%EA%B2%B0%EA%B3%BC_nk4jvv.webp',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649409/DSC9398_%EA%B2%B0%EA%B3%BC_p4xs9r.webp',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649399/DSC9407_%EA%B2%B0%EA%B3%BC_jfa7f7.webp',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649394/DSC8973_%EA%B2%B0%EA%B3%BC_bvjpf2.webp',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649390/008_%EA%B2%B0%EA%B3%BC_tatkpv.webp',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649392/DSC9160_%EA%B2%B0%EA%B3%BC_dwr1dh.webp',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649389/009_%EA%B2%B0%EA%B3%BC_etbsdd.webp',
        ],
    },
    {
        title: 'A Museum Manila',
        year: 2024,
        category: 'project',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649616/4%E1%84%80%E1%85%AA%E1%86%AB__6244_1__%EA%B2%B0%EA%B3%BC_rdybiv.webp',
        images: [
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649619/4%E1%84%80%E1%85%AA%E1%86%AB__6475_%EA%B2%B0%EA%B3%BC_h8pyus.webp',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649618/4%E1%84%80%E1%85%AA%E1%86%AB__6469_%EA%B2%B0%EA%B3%BC_fvqlrf.webp',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649615/4%E1%84%80%E1%85%AA%E1%86%AB__6478_%EA%B2%B0%EA%B3%BC_vc5qcy.webp',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649614/4%E1%84%80%E1%85%AA%E1%86%AB__5994_%EA%B2%B0%EA%B3%BC_antlnt.webp',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649613/4%E1%84%80%E1%85%AA%E1%86%AB__6453_%EA%B2%B0%EA%B3%BC_xujhho.webp',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649611/4%E1%84%80%E1%85%AA%E1%86%AB__6496_1__%EA%B2%B0%EA%B3%BC_f6cpxq.webp',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649610/4%E1%84%80%E1%85%AA%E1%86%AB__6496_2__%EA%B2%B0%EA%B3%BC_p6c1sp.webp',
        ],
    },

    // ─── 2023 ──────────────────────────────────────────────────────────────
    {
        title: 'Seoul Light Bitseom Festival',
        year: 2023,
        category: 'work',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048704/Seoul_Light_%EC%84%9C%EC%9A%B8%EB%9D%BC%EC%9D%B4%ED%8A%B8_%ED%98%84%EC%9E%A5_%EC%82%AC%EC%A7%84_2_cm6isi.jpg',
        desc: 'The 2023 Seoul Light Hangang Bitseom Festival was a laser media art festival held over 10 days, from October 6 to 15, 2023, around Banpo Hangang Park and Seoraeseom.',
        credits: { Music: 'KOHUI', '3D Artist': 'Jeong Yoona' },
        images: [
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048703/Seoul_Light_%EC%84%9C%EC%9A%B8%EB%9D%BC%EC%9D%B4%ED%8A%B8_%ED%98%84%EC%9E%A5_%EC%82%AC%EC%A7%84_1_mqh5ga.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048702/Seoul_Light_Sphere_5_ccb2xt.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048701/Seoul_Light_Sphere_4_ov7spi.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048700/Seoul_Light_Sphere_3_qem15d.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048699/Seoul_Light_Sphere_2_m12rh2.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048698/Seoul_Light_Sphere_1_hj2zmc.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048697/Seoul_Light_%EC%84%9C%EC%9A%B8%EB%9D%BC%EC%9D%B4%ED%8A%B8_%ED%98%84%EC%9E%A5_%EC%82%AC%EC%A7%84_3_npipou.jpg',
        ],
    },
    {
        title: 'Kolon Hannam',
        year: 2023,
        category: 'project',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048695/Kolon-Sports_-New-Breath-01_hrrsik.jpg',
        images: [
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048696/Kolon_Sports_New_Breath_02_uxvyqn.jpg',
        ],
    },
    {
        title: 'Hyundai Mobis Lobby Media Art',
        year: 2023,
        category: 'project',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048690/%ED%98%84%EB%8C%80%EB%AA%A8%EB%B9%84%EC%8A%A4_3_nhv9d3.jpg',
        images: [
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048694/Hyundai_Mobis_pwtafd.png',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773144864/c3be18ac-f07a-4307-8667-10002e89212f.png',
        ],
    },
    {
        title: 'Sulwhasoo Concentrated Ginseng Cream',
        year: 2023,
        category: 'project',
        // Cloudinary video thumbnail for grid, actual video for modal
        main: 'https://res.cloudinary.com/dbgr7vngr/video/upload/so_0/v1773650580/0405_instar_dbkoqw.jpg',
        video: 'https://res.cloudinary.com/dbgr7vngr/video/upload/v1773650580/0405_instar_dbkoqw.mp4',
        images: [
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773650575/230407_5_yod79n.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773650668/230407_1_b0jmki.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773650670/230407_3_r8kblo.jpg',
        ],
    },

    // ─── 2022 ──────────────────────────────────────────────────────────────
    {
        title: 'SAIC AUDI Beyond Human Emotion & History',
        year: 2022,
        category: 'work',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048679/%EC%95%84%EC%9A%B0%EB%94%94_1_azz6gb.jpg',
        images: [
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048676/%EC%95%84%EC%9A%B0%EB%94%94_4_nnsdvt.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048675/%EC%95%84%EC%9A%B0%EB%94%94_3_eyornw.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048674/%EC%95%84%EC%9A%B0%EB%94%94_2_nlzuf9.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048678/%EC%95%84%EC%9A%B0%EB%94%94_%EC%8B%9C%EB%AE%AC_2_vs6cqa.png',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048677/%EC%95%84%EC%9A%B0%EB%94%94_%EC%8B%9C%EB%AE%AC_1_fmqrdu.png',
        ],
    },
    {
        title: 'Save The Planet',
        year: 2022,
        category: 'work',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048656/%EC%84%B8%EC%9D%B4%EB%B8%8C%EB%8D%94%ED%94%8C%EB%9E%98%EB%8B%9B_9_cyekd3.jpg',
    },
    {
        title: 'Printf "Human Odyssey"',
        year: 2022,
        category: 'work',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773049103/%EC%B2%9C%EC%95%88%EC%8B%9C%EB%A6%BD%EB%AF%B8%EC%88%A0%EA%B4%80_01_%EA%B2%B0%EA%B3%BC_zfkoj1.webp',
    },
    {
        title: 'Samsung SDI PRIMX Exhibition',
        year: 2022,
        category: 'project',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773144813/449ed962-0d8d-49b5-9226-2cc44067e193.png',
    },
    {
        title: 'The Hyundai OOH',
        year: 2022,
        category: 'project',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048672/Roslyn_Earth_1_bjjequ.jpg',
        images: [
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048673/Roslyn_Earth_2_ueyl8q.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048671/Roslyn_Earth_3_f7livf.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048649/%EB%8D%94%ED%98%84%EB%8C%80_%EC%B2%9C%ED%98%B8%EC%A0%90_wayph4.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048644/%EB%8D%94%ED%98%84%EB%8C%80_1_v1jpad.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048647/%EB%8D%94%ED%98%84%EB%8C%80_2_o2og5d.jpg',
        ],
    },
    { title: 'Raemian Gallery',  year: 2022, category: 'project' },

    // ─── 2021 ──────────────────────────────────────────────────────────────
    { title: 'Crystals',                              year: 2021, category: 'work' },
    { title: 'K-Arts x Siheung Traditional Arts Center', year: 2021, category: 'project' },

    // ─── 2020 ──────────────────────────────────────────────────────────────
    { title: 'Data Holocene', year: 2020, category: 'work' },

    // ─── 2017 ──────────────────────────────────────────────────────────────
    { title: 'White Flock',   year: 2017, category: 'work' },
];
