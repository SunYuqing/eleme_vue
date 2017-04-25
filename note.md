1. 公告区不折行，显示"...":
       white-space: nowrap
       overflow: hidden
       text-overflow: ellipsis
2.清除浮动（learfix）------伪类方法，兼容性好，不改变html结构
      .clearfix
        display: inline-block
        &:after
          content: "."
          height: 0
          line-height: 0
          clear: both
          visibility: hidden
3.css sticky footer
        html:
          <div class="wrapper>
                <div class="main clearfix">
                </div>
                <div class="footer">
                </div>
           </div>
         css:
               .main
                 position: fixed
                 top: 0
                 left: 0
                 z-index: 100
                 width: 100%
                 height: 100%
                 overflow: auto
                 background: rgba(7,17,27,0.8)
                 .main
                   min-height: 100%
                   width: 100%
                   padding-bottom: 64px
                 .footer
                   position: relative
                   width: 32px
                   height: 64px
                   margin: -64px auto 0 auto
                   clear: both
                   font-size: 32px
4. 关于felx的知识补充： flex属性是flex-grow,flex-shrink,flex-basic的简写。默认值为 0,1，auto
   分别表示 项目的放大比例，项目的缩小比例，和项目占据的主轴空间。当前两项为0时表示不放大也不缩小。
5.使用display: table 设置垂直居中


