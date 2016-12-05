<template>
  <div class="movie-view">
    <h1>{{msg}}</h1>
    <div id="content">
    	<div id="header">
    		<section id="header-left">
    			<h1>
			  		<span id="name" v-text="movie.movie_name"></span>
			  		<span id="year" v-text="movie.movie_year"></span>
	  			</h1>
  				<div class="article">
	  				<div id="cover">
	  					<a class="nbgnbg">
		  					<img src="https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2395733377.jpg">
		  				</a>
		  			</div>
		  			<div id="info">
		  				<span>
		  					<span class="pl">导演</span>
		  					:
		  					<span class="attrs">{{movie.directors}}</span>
		  				</span>
		  				<br>
		  				<span>
		  					<span class="pl">编剧</span>
		  					:
		  					<span class="attrs">{{movie.screenwriters}}</span>
		  				</span>
		  				<br>
		  				<span class="actor">
		  					<span class="pl">主演</span>
		  					:
		  					<span class="attrs">
								<span>{{movie.actors}}</span>
		  						<span style="display: none;">长泽雅美</span>
		  					</span>
		  				</span>
		  				<br>
		  				<span>
		  					<span class="pl">类型</span>
		  					:
		  					<span class="attrs">{{movie.types}}</span>
		  				</span>
		  				<br>
		  				<span>
		  					<span class="pl">制片国家/地区</span>
		  					:
		  					{{movie.origin_place}}
		  				</span>
		  				<br>
		  				<span>
		  					<span class="pl">语言</span>
		  					:
		  					{{movie.languages}}
		  				</span>
		  				<br>
		  				<span>
		  					<span class="pl">上映日期</span>
		  					:
		  					<span>{{movie.release_date}}</span>
		  				</span>
		  				<br>
		  				<span>
		  					<span class="pl">豆瓣评分</span>
		  					:
		  					<span>{{movie.douban_rating}}</span>
		  				</span>
		  				<br>
		  				<span>
		  					<span class="pl">IMDb评分</span>
		  					:
		  					<span>{{movie.imdb_rating}}</span>
		  				</span>
		  				<br>
		  				<span>
		  					<span class="pl">片长</span>
		  					:
		  					<span>{{movie.runtime}}</span>
		  				</span>
		  				<br>
		  				<span>
		  					<span class="pl">又名</span>
		  					:
		  					<span>{{movie.another_names}}</span>
		  				</span>
		  				<br>
              <span>
                <span class="pl">官方网站</span>
                :
                <a :href="movie.official_website | addHttp">{{movie.official_website}}</a>
              </span>
              <br>
		  				<span>
		  					<span class="pl">IMDb链接</span>
		  					:
		  					<a :href="movie.imdb_link | addIMDbLink">{{movie.imdb_link}}</a>
		  				</span>
		  				<br>
		  			</div>
    		</section>
    		<section id="header-right">
    			<div id="short-comment">
    				<h2>
    					{{movie.movie_name}}的短评· · · · · ·(
    					<a href="https://movie.douban.com/photos/photo/2293569209/">全部</a>
    					)
    				</h2>
    				<div>
    					<a href="javascript:;" id="comment-btn">我来写评论</a>
    				</div>
    				<div id="comment-items">
    					<div class="comment-item" v-for='comment in movie.short_pop_comments'>
    						<span class="comment-info">
    							<div>
    								<span class="comment-author">{{comment.comment_author}}</span>
    								<span class="comment-date">{{comment.comment_date}}</span>
    							</div>
    							<span class="comment-text">{{comment.comment_text}}</span>
    						</span>
    					</div>
    					<br>
    				</div>
    			</div>
    		</section>
    	</div>
    	<section id="synopsis" class="section-same">
    		<!-- 剧情简介 -->
			<h2>{{movie.movie_name}}的剧情简介  ·  ·  ·  ·  ·  ·</h2>
			<div id="synopsis-content">
            　　{{movie.synopsis}}
			</div>
    	</section>
    	<section id="photo" class="section-same">
    		<h2>
    			{{movie.movie_name}}的图片 · · · · · ·(
				<a href="https://movie.douban.com/photos/photo/2293569209/">全部</a>
				)
    		</h2>
    		<ul>
    			<li>
    				<a href="https://movie.douban.com/photos/photo/2293569209/">
    				<img src="https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p1272904657.jpg">
    				</a>
    			</li>
    			<li>
    				<img src="https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p1272904657.jpg">
    			</li>
    			<li>
    				<img src="https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p1272904657.jpg">
    			</li>
    			<li>
    				<img src="https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p1272904657.jpg">
    			</li>
    			<li>
    				<img src="https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2221319641.jpg">
    			</li>
    			<li>
    				<img src="https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2221319641.jpg">
    			</li>
    		</ul>
    		<br><br><br><br><br><br>
    		<br>
    	</section>
    	<section id="award" class="section-same">
    		<h2>
    			{{movie.movie_name}}的获奖情况 · · · · · ·(
				<a href="https://movie.douban.com/photos/photo/2293569209/">全部</a>
				)
    		</h2>
    		<ul>
    			<li v-for="item in items">
    				{{ item.message }}
    			</li>
    			<li>
    				第44届动画安妮奖 最佳导演(提名) 新海诚
    			</li>
    			<li>
    				第第44届动画安妮奖 最佳独立动画长片(提名)
    			</li>
    			<li>
    				第42届洛杉矶影评人协会奖 最佳动画片
    			</li>
    		</ul>
    	</section>
    	<section id="also-like-movie" class="section-same">
    		<h2>喜欢这部电影的人也喜欢 · · · · · ·</h2>
    		<div id="also-like-movie-content">
    			<dl>
    				<dt>
	    				<a href="https://movie.douban.com/subject/25814705/?from=subject-page">
	    					<img src="https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2221319641.jpg">
	    				</a>
	    			</dt>
	    			<dd>
	    				<a href="https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p1272904657.jpg">萤火之森</a>
	    			</dd>
    			</dl>
    			<dl>
    				<dt>
	    				<a href="https://movie.douban.com/subject/25814705/?from=subject-page">
	    					<img src="https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p1272904657.jpg">
	    				</a>
	    			</dt>
	    			<dd>
	    				<a href="https://movie.douban.com/subject/5989818/?from=subject-page">小森林 夏秋篇</a>
	    			</dd>
    			</dl>
    			<dl>
    				<dt>
	    				<a href="https://movie.douban.com/subject/25814705/?from=subject-page">
	    					<img src="https://img5.doubanio.com/view/movie_poster_cover/lpst/public/p2266293606.jpg">
	    				</a>
	    			</dt>
	    			<dd>
	    				<a href="https://movie.douban.com/subject/25814705/?from=subject-page">小森林 夏秋篇</a>
	    			</dd>
    			</dl>
    			<dl>
    				<dt>
	    				<a href="https://movie.douban.com/subject/25814705/?from=subject-page">
	    					<img src="https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p1958733032.jpg">
	    				</a>
	    			</dt>
	    			<dd>
	    				<a href="https://movie.douban.com/subject/25814705/?from=subject-page">小森林 夏秋篇</a>
	    			</dd>
    			</dl>
    			<dl>
    				<dt>
	    				<a href="https://movie.douban.com/subject/25814705/?from=subject-page">
	    					<img src="https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2221319641.jpg">
	    				</a>
	    			</dt>
	    			<dd>
	    				<a href="https://movie.douban.com/subject/25814705/?from=subject-page">小森林 夏秋篇</a>
	    			</dd>
    			</dl>
    			<dl>
    				<dt>
	    				<a href="https://movie.douban.com/subject/25814705/?from=subject-page">
	    					<img src="https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p1272904657.jpg">
	    				</a>
	    			</dt>
	    			<dd>
	    				<a href="https://movie.douban.com/subject/25814705/?from=subject-page">小森林 夏秋篇</a>
	    			</dd>
    			</dl>
    			<dl>
    				<dt>
	    				<a href="https://movie.douban.com/subject/25814705/?from=subject-page">
	    					<img src="https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p1272904657.jpg">
	    				</a>
	    			</dt>
	    			<dd>
	    				<a href="https://movie.douban.com/subject/25814705/?from=subject-page">小森林 夏秋篇</a>
	    			</dd>
    			</dl>
    			<dl>
    				<dt>
	    				<a href="https://movie.douban.com/subject/25814705/?from=subject-page">
	    					<img src="https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2221319641.jpg">
	    				</a>
	    			</dt>
	    			<dd>
	    				<a href="https://movie.douban.com/subject/25814705/?from=subject-page">小森林 夏秋篇</a>
	    			</dd>
    			</dl>
    			<dl>
    				<dt>
	    				<a href="https://movie.douban.com/subject/25814705/?from=subject-page">
	    					<img src="https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p1272904657.jpg">
	    				</a>
	    			</dt>
	    			<dd>
	    				<a href="https://movie.douban.com/subject/25814705/?from=subject-page">小森林 夏秋篇</a>
	    			</dd>
    			</dl>
    			<dl>
    				<dt>
	    				<a href="https://movie.douban.com/subject/25814705/?from=subject-page">
	    					<img src="https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2221319641.jpg">
	    				</a>
	    			</dt>
	    			<dd>
	    				<a href="https://movie.douban.com/subject/25814705/?from=subject-page">小森林 夏秋篇</a>
	    			</dd>
    			</dl>
    		</div>
    	</section>
  	</div>
    <!-- <div class="block">
    <span class="demonstration">页数较少时的效果</span>
    <el-pagination
      layout="prev, pager, next"
      :total="50">
    </el-pagination>
  </div>
  <div class="block">
    <span class="demonstration">大于 7 页时的效果</span>
      <el-pagination
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
  </div> -->
  </div>
</template>

<script>
export default {
  name: 'movie-view',
  data () {
    return {
      // msg: 'This is movie view!一个电影的页面',
      movie: {
        movie_name: '你的名字。 君の名は。',
        movie_year: '2016',
        directors: '新海诚',
        screenwriters: '新海诚',
        actors: '上白石萌音/神木隆之介/成田凌/上白石萌音/神木隆之介/成田凌/上白石萌音/神木隆之介/成田凌',
        types: ' 动作 / 惊悚 / 犯罪',
        official_website: 'www.kiminona.com',
        origin_place: '日本',
        languages: '日语',
        release_date: '2016-12-02(中国大陆)/2016-08-26(日本)',
        douban_rating: '8.8分',
        imdb_rating: '8.8分',
        runtime: '106分钟',
        another_names: '你的名字 / 君之名 / Your Name',
        imdb_link: 'tt5311514',
        synopsis: '千年后再度回归的彗星造访地球的一个月前，日本深山的某个乡下小镇。女年后再度回归的彗星造访地球的一个月前，日本深山的某个乡下小镇。女高中生三叶（上白石萌音 配音）每天都过着忧郁的生活，而她烦恼的不光有担任镇长的父亲所举行的选举运动，还有家传神社的古老习俗。三叶身居这小镇之中，又处于过多在意周围人目光的年龄，因此对大都市的憧憬日益强烈。年后再度回归的彗星造访地球的一个月前，日本深山的某个乡下小镇。女高中生三叶（上白石萌音 配音）每天都过着忧郁的生活，而她烦恼的不光有担任镇长的父亲所举行的选举运动，还有家传神社的古老习俗。三叶身居这小镇之中，又处于过多在意周围人目光的年龄，因此对大都市的憧憬日益强烈。',
        short_pop_comments: [{'comment_date': '2006-04-17', 'comment_author': '强叔', 'comment_text': '一个酒鬼和一个婊子的爱情能拍成这样的一部电影中国影人都干嘛吃的'}, {'comment_date': '2011-05-28', 'comment_author': '尘', 'comment_text': '一个酗酒成性，妻离子散；一个沦落风尘，孤苦伶仃....一段短暂的爱情火花，照亮了两个卑微的灵魂。'}, {'comment_date': '2009-04-15', 'comment_author': '一湄', 'comment_text': '两颗绝望的心。看得心里难受得很。'}, {'comment_date': '2016-02-13', 'comment_author': '芦哲峰', 'comment_text': '他是一滴水，迷失在酒中；她是一粒沙，沦落于风尘。两颗颓废的心，一场绝望的爱。'}, {'comment_date': '2012-02-17', 'comment_author': '李然', 'comment_text': '存在主义的影响，从大历史观看，人的存在是虚无而随机的。所以有时候就像浮沉一样，随机飘着。颓废人生，一酒鬼和一妓女，身不由己，也许他们只是想要心灵的安静而已。人生无常，且行且珍惜。我们无权评论他人愿意选择什么样的人生，世界充满巧合和随机。8.2'}]
      }
    }
  }
}

</script>

<style lang="stylus" scoped>
h2
	color:#22AA3E;

h1
	font-size:25px;
	font-weight:bold;
	color:#494949;
	line-height:1.1;
a
	color:#0085DD;
.section-same
	width:1000px;
	float:left;
	margin-left:10%;
	margin-right:10%;
#header
	width:1000px;
	margin-left:10%;
	margin-right:10%;
	margin-top: 20px;
#cover
	.nbgnbg
		img
			width:70%;
#header-left
	float:left;
	width: 400px;
#header-right
	padding-top:50px;
	margin-left:600px;
	width: 500px;
#comment-btn
	width:80px;
	color:#ca6445;
	background:#fae9da;
.comment-author
	color:#0085DD;
#synopsis-content
	width:1000px;

#photo
	ul
		float:left;
		li
			float:left;
			img
				height:100px;
#also-like-movie-content
	float:left;
	dl
		float:left;
		img
			height:250px;

</style>
