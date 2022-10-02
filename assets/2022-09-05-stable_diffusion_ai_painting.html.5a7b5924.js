const e=JSON.parse('{"key":"v-2a02e2eb","path":"/_posts/2022-09-05-stable_diffusion_ai_painting.html","title":"\u96F6\u57FA\u7840\u5165\u95E8 Stable Diffusion - \u65E0\u9700\u663E\u5361\u628A AI \u7ED8\u753B\u5F15\u64CE\u642C\u8FDB\u5BB6\u7528\u7535\u8111","lang":"zh-CN","frontmatter":{"title":"\u96F6\u57FA\u7840\u5165\u95E8 Stable Diffusion - \u65E0\u9700\u663E\u5361\u628A AI \u7ED8\u753B\u5F15\u64CE\u642C\u8FDB\u5BB6\u7528\u7535\u8111","date":"2022-09-05T00:00:00.000Z","category":["\u5DE5\u5177"],"tag":["AI","Docker","Stable Diffusion"],"order":-49,"summary":"\u6211\u4ECE\u5C0F\u7279\u522B\u7FA1\u6155\u4F1A\u753B\u753B\u7684\u4F19\u4F34\uFF0C\u4ED6\u4EEC\u80FD\u7ED8\u51FA\u5FC3\u4E2D\u6240\u60F3\uFF0C\u800C\u672C\u4EBA\u6C34\u5E73\u6700\u9AD8\u7684\u8096\u50CF\u753B\u662F\u4E01\u8001\u5934\u3002\u63A5\u89E6 Stable Diffusion \u540E\uFF0C\u6211\u8131\u80CE\u6362\u9AA8\uFF0C\u7ED9\u81EA\u5DF1\u8D34\u4E0A\u4E86\u300C\u4F1A\u753B\u753B\u300D\u7684\u65B0\u6807\u7B7E\u3002 Stable Diffusion \u662F\u4EE5\u6587\u672C\u751F\u6210\u56FE\u50CF\u7684 AI \u5DE5\u5177\uFF0C\u4E5F\u662F\u552F\u4E00\u4E00\u6B3E\u5F00\u6E90\u4E14\u80FD\u90E8\u7F72\u5728\u5BB6\u7528\u7535\u8111\u4E0A\u7684 AI \u7ED8\u56FE\u5DE5\u5177\uFF0C\u53EF\u4EE5\u5728 6GB \u663E\u5B58\u663E\u5361\u6216\u65E0\u663E\u5361\uFF08\u53EA\u4F9D\u8D56 CPU\uFF09\u4E0B\u8FD0\u884C\uFF0C\u5E76\u5728\u51E0\u79D2\u949F","head":[["meta",{"property":"og:url","content":"https://newzone.top/_posts/2022-09-05-stable_diffusion_ai_painting.html"}],["meta",{"property":"og:site_name","content":"LearnData-\u5F00\u6E90\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"\u96F6\u57FA\u7840\u5165\u95E8 Stable Diffusion - \u65E0\u9700\u663E\u5361\u628A AI \u7ED8\u753B\u5F15\u64CE\u642C\u8FDB\u5BB6\u7528\u7535\u8111"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-01T12:16:06.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"AI"}],["meta",{"property":"article:tag","content":"Docker"}],["meta",{"property":"article:tag","content":"Stable Diffusion"}],["meta",{"property":"article:published_time","content":"2022-09-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-01T12:16:06.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Docker \u73AF\u5883\u914D\u7F6E","slug":"docker-\u73AF\u5883\u914D\u7F6E","link":"#docker-\u73AF\u5883\u914D\u7F6E","children":[{"level":3,"title":"\u5B89\u88C5 WSL","slug":"\u5B89\u88C5-wsl","link":"#\u5B89\u88C5-wsl","children":[]},{"level":3,"title":"\u542F\u7528 Hyper-V","slug":"\u542F\u7528-hyper-v","link":"#\u542F\u7528-hyper-v","children":[]}]},{"level":2,"title":"\u914D\u7F6E Stable Diffusion","slug":"\u914D\u7F6E-stable-diffusion","link":"#\u914D\u7F6E-stable-diffusion","children":[{"level":3,"title":"\u9009\u62E9\u5206\u652F","slug":"\u9009\u62E9\u5206\u652F","link":"#\u9009\u62E9\u5206\u652F","children":[]},{"level":3,"title":"\u51C6\u5907 Linux \u8DEF\u5F84","slug":"\u51C6\u5907-linux-\u8DEF\u5F84","link":"#\u51C6\u5907-linux-\u8DEF\u5F84","children":[]}]},{"level":2,"title":"\u542F\u52A8 Stable Diffusion","slug":"\u542F\u52A8-stable-diffusion","link":"#\u542F\u52A8-stable-diffusion","children":[]},{"level":2,"title":"\u754C\u9762\u8BF4\u660E","slug":"\u754C\u9762\u8BF4\u660E","link":"#\u754C\u9762\u8BF4\u660E","children":[{"level":3,"title":"Text-to-Image","slug":"text-to-image","link":"#text-to-image","children":[]},{"level":3,"title":"Image-to-Image","slug":"image-to-image","link":"#image-to-image","children":[]},{"level":3,"title":"Image Lab","slug":"image-lab","link":"#image-lab","children":[]}]},{"level":2,"title":"\u4F7F\u7528\u8BF4\u660E","slug":"\u4F7F\u7528\u8BF4\u660E","link":"#\u4F7F\u7528\u8BF4\u660E","children":[{"level":3,"title":"\u6587\u5B57\u63CF\u8FF0\u56FE\u50CF","slug":"\u6587\u5B57\u63CF\u8FF0\u56FE\u50CF","link":"#\u6587\u5B57\u63CF\u8FF0\u56FE\u50CF","children":[]},{"level":3,"title":"Prompt matrix","slug":"prompt-matrix","link":"#prompt-matrix","children":[]}]},{"level":2,"title":"\u5E38\u89C1\u95EE\u9898","slug":"\u5E38\u89C1\u95EE\u9898","link":"#\u5E38\u89C1\u95EE\u9898","children":[{"level":3,"title":"Docker Desktop failed","slug":"docker-desktop-failed","link":"#docker-desktop-failed","children":[]},{"level":3,"title":"Docker Desktop cannot start","slug":"docker-desktop-cannot-start","link":"#docker-desktop-cannot-start","children":[]},{"level":3,"title":"docker \u547D\u4EE4\u5931\u8D25","slug":"docker-\u547D\u4EE4\u5931\u8D25","link":"#docker-\u547D\u4EE4\u5931\u8D25","children":[]},{"level":3,"title":"\u7AEF\u53E3\u8BBF\u95EE\u88AB\u62D2","slug":"\u7AEF\u53E3\u8BBF\u95EE\u88AB\u62D2","link":"#\u7AEF\u53E3\u8BBF\u95EE\u88AB\u62D2","children":[]},{"level":3,"title":"FileNotFoundError","slug":"filenotfounderror","link":"#filenotfounderror","children":[]},{"level":3,"title":"\u91C7\u6837\u6A21\u578B","slug":"\u91C7\u6837\u6A21\u578B","link":"#\u91C7\u6837\u6A21\u578B","children":[]}]},{"level":2,"title":"\u6700\u540E","slug":"\u6700\u540E","link":"#\u6700\u540E","children":[]}],"git":{"createdTime":1662386371000,"updatedTime":1664626566000,"contributors":[{"name":"rockbenben","email":"qingwhat@gmail.com","commits":14}]},"readingTime":{"minutes":10.87,"words":3261},"filePathRelative":"_posts/2022-09-05-stable_diffusion_ai_painting.md","localizedDate":"2022\u5E749\u67085\u65E5"}');export{e as data};
