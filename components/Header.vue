<template>
	<section id="header-wrapper">
		<header id="header">
			<div class="header-wrapper">
				<nav class="navbar navbar-expand-md navbar-light bg-white fixed-top">
					<div class="container">
						<NavLink link="/" class="navbar-brand">

<svg width=80 viewBox="0 0 330 220" version="1.1" id="svg_null">
	<g id="root" stroke="none" 
			stroke-width="1" fill="none" 
			fill-rule="evenodd">
			<!-- <rect id="background.primary" -->
		<!--
                <rect id="background.primary" 
				fill="#364f6b" x="0" y="0" width="320" 
				height="320">
		</rect>-->
	
		<g id="shape" transform="translate(10, 17)" 
				fill="rgba(3, 168, 124,.5)">
			<polygon id="shape.secondary" opacity=".5" 
				points="50 100 100 200 0 200" fill="rgba(3, 168, 124,.6)">
			</polygon>
			
			<polygon id="shape.secondary" opacity=".7" 
				points="125 50 200 200 50 200" fill="rgba(3, 168, 124,.7)">
			</polygon>
			
			<polygon id="shape.secondary" opacity=".9" 
				points="200 0 300 200 100 200" fill="rgba(3, 168, 124,.8)">
			</polygon>
		</g>
	
		<g id="Group" transform="translate(-80, 100)">
			<rect id="Rectangle-15" x="0" y="0" 
				width="420" height="70">
			</rect>
			
			<text id="headerText" 
					font-family="Amiri" 
					font-size="100" 
					font-weight="950" 
					line-spacing="70" 
					fill="#000" 
					data-text-alignment="c" 
					font-style="italic">
				<tspan x="85" y="53">MyPost</tspan>
			</text>
		</g>
	</g>
</svg>
						
							<!-- <img :src="($withBase)($themeConfig.logo)"> 
							
							{{ $site.title }}--> 
						</NavLink>
						
						<button class="navbar-toggler" type="button" 
								data-toggle="collapse" 
								data-target="#navbarsExampleDefault" 
								aria-controls="navbarsExampleDefault" 
								aria-expanded="false" 
								aria-label="Toggle navigation">
						
							<span class="navbar-toggler-icon"></span>
						</button>
						
						<div class="collapse navbar-collapse" id="navbarsExampleDefault">
							<ul v-if="$themeConfig.nav" class="navbar-nav ml-auto">
								<li v-for="item in $themeConfig.nav"
									:key="item.text" class="nav-item">
									<NavLink :link="item.link" class="nav-link">
										{{ item.text }}
									</NavLink>
								</li>
								
								<SearchBox />
								
								<!-- <Feed /> -->
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</header>
	</section>
</template>

<script>
import SearchBox from '@SearchBox'
import Feed from './Feed'

export default {
  components: { SearchBox, Feed },
}
</script>

<style lang="stylus">
@import '~@app/style/config'
// border-bottom 5px solid lighten(#3eaf7c, 50%)
.header-wrapper
  .title
    /* flex 0 0 200px */
    font-size 30px
    margin 0
    letter-spacing 2px
    display block
    text-transform uppercase

    a
      color $darkTextColor
      font-weight bold
      text-decoration none

  .header-right-wrap
    flex 1
    display flex
    justify-content flex-end
    align-items center

    .nav
      flex 0 0 auto
      display flex
      margin 0

      .nav-item
        margin-left 20px

        a
          text-decoration none
          transition color 0.3s

    .search-box
      margin-left 20px

      input
        border-radius 5px
        transition all 0.5s
        border 1px solid #cecece

        &:hover
          border 1px solid $accentColor
          box-shadow 0 0 5px $accentColor

      .suggestions
        border 1px solid $darkBorderColor
        top 40px
        right 0

        a
          color $darkTextColor
          text-decoration none

          &.focused
            color $accentColor

@media (max-width: $MQMobile)
  #header
    display none

  .header-wrapper
    flex-direction column

    .header-right-wrap
      display none
</style>
