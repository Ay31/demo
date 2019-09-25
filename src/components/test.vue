<template></template>

<script>
export default {
  data() {
    return {
      data: {
        count: 1,
        start: 0,
        total: 66,
        subjects: [
          {
            rating: {
              max: 10,
              average: 0,
              details: { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0 },
              stars: "00",
              min: 0
            },
            genres: ["剧情"],
            title: "我和我的祖国",
            casts: [
              {
                avatars: {
                  small:
                    "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1656.jpg",
                  large:
                    "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1656.jpg",
                  medium:
                    "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1656.jpg"
                },
                name_en: "Bo Huang",
                name: "黄渤",
                alt: "https://movie.douban.com/celebrity/1274242/",
                id: "1274242"
              },
              {
                avatars: {
                  small:
                    "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1489386626.47.jpg",
                  large:
                    "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1489386626.47.jpg",
                  medium:
                    "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1489386626.47.jpg"
                },
                name_en: "Yi Zhang",
                name: "张译",
                alt: "https://movie.douban.com/celebrity/1274761/",
                id: "1274761"
              },
              {
                avatars: {
                  small:
                    "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1501738155.24.jpg",
                  large:
                    "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1501738155.24.jpg",
                  medium:
                    "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1501738155.24.jpg"
                },
                name_en: "Jing Wu",
                name: "吴京",
                alt: "https://movie.douban.com/celebrity/1000525/",
                id: "1000525"
              }
            ],
            durations: ["158分钟"],
            collect_count: 1121,
            mainland_pubdate: "2019-09-30",
            has_video: false,
            original_title: "我和我的祖国",
            subtype: "movie",
            directors: [
              {
                avatars: {
                  small:
                    "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1451727734.81.jpg",
                  large:
                    "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1451727734.81.jpg",
                  medium:
                    "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1451727734.81.jpg"
                },
                name_en: "Kaige Chen",
                name: "陈凯歌",
                alt: "https://movie.douban.com/celebrity/1023040/",
                id: "1023040"
              },
              {
                avatars: {
                  small:
                    "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1522307931.05.jpg",
                  large:
                    "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1522307931.05.jpg",
                  medium:
                    "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1522307931.05.jpg"
                },
                name_en: "Yibai Zhang",
                name: "张一白",
                alt: "https://movie.douban.com/celebrity/1275554/",
                id: "1275554"
              },
              {
                avatars: {
                  small:
                    "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p8171.jpg",
                  large:
                    "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p8171.jpg",
                  medium:
                    "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p8171.jpg"
                },
                name_en: "Hu Guan",
                name: "管虎",
                alt: "https://movie.douban.com/celebrity/1274919/",
                id: "1274919"
              },
              {
                avatars: {
                  small:
                    "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1367827663.92.jpg",
                  large:
                    "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1367827663.92.jpg",
                  medium:
                    "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1367827663.92.jpg"
                },
                name_en: "Xiaolu Xue",
                name: "薛晓路",
                alt: "https://movie.douban.com/celebrity/1275139/",
                id: "1275139"
              },
              {
                avatars: {
                  small:
                    "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p43738.jpg",
                  large:
                    "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p43738.jpg",
                  medium:
                    "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p43738.jpg"
                },
                name_en: "Zheng Xu",
                name: "徐峥",
                alt: "https://movie.douban.com/celebrity/1274297/",
                id: "1274297"
              },
              {
                avatars: {
                  small:
                    "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1542982906.61.jpg",
                  large:
                    "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1542982906.61.jpg",
                  medium:
                    "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1542982906.61.jpg"
                },
                name_en: "Hao Ning",
                name: "宁浩",
                alt: "https://movie.douban.com/celebrity/1274265/",
                id: "1274265"
              },
              {
                avatars: {
                  small:
                    "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1563174692.41.jpg",
                  large:
                    "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1563174692.41.jpg",
                  medium:
                    "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1563174692.41.jpg"
                },
                name_en: "Muye Wen",
                name: "文牧野",
                alt: "https://movie.douban.com/celebrity/1349765/",
                id: "1349765"
              }
            ],
            pubdates: ["2019-09-30(中国大陆)"],
            year: "2019",
            images: {
              small:
                "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2567998580.jpg",
              large:
                "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2567998580.jpg",
              medium:
                "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2567998580.jpg"
            },
            alt: "https://movie.douban.com/subject/32659890/",
            id: "32659890"
          }
        ],
        title: "正在上映的电影-北京"
      }
    };
  }
};
</script>

<style>
</style>