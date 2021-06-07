<template>
	<footer id="MyFooter" class="themefooter">
		<div class="container">
			<div class="row justify-content-between">
				<NavLink link="/" class="navbar-brand">
					<svg width="80" viewBox="0 0 330 220" version="1.1" id="svg_null">
						<g id="root" stroke="none" 
								stroke-width="1" fill="none" 
								fill-rule="evenodd">
							<!--<rect id="background.primary" 
									fill="#364f6b" x="0" y="0" width="320" 
									height="320"></rect>-->
	
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
										fill="#fff" 
										data-text-alignment="c" 
										font-style="italic">
									<tspan x="85" y="53">MyBlog</tspan>
								</text>
							</g>
						</g>
					</svg>
				</NavLink>
				<!--
				<div class="col">
					<a href="/">
						<img class="logofooter" :src="($withBase)($themeConfig.logo)">
					</a>
				</div>-->
				
				<div class="col text-right">
					<ul v-if="contact" class="list-unstyled">
						<li v-for="item in contact"
								:key="item.iconComponent"
								class="contact-item">
							<NavLink :link="item.link">
								<component :is="item.iconComponent"></component>
								{{ item.text }}
							</NavLink>
						</li>
					</ul>
					
					<ul v-if="copyright" class="list-unstyled">
						<li v-for="item in copyright" 
								:key="item.text" 
								class="copyright-item">
							<NavLink :link="item.link">
								{{ item.text }}
							</NavLink>
						</li>
					</ul>
				</div>
				
			</div>
			
		</div>
	</footer>
</template>

<script>
import {
  CodepenIcon,
  FacebookIcon,
  GithubIcon,
  GitlabIcon,
  GlobeIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  MessageSquareIcon,
  PhoneIcon,
  TwitterIcon,
} from 'vue-feather-icons'

export default {
  components: {
    CodepenIcon,
    FacebookIcon,
    GithubIcon,
    GitlabIcon,
    GlobeIcon,
    InstagramIcon,
    LinkedinIcon,
    MailIcon,
    MessageSquareIcon,
    PhoneIcon,
    TwitterIcon,
  },

  computed: {
    contact() {
      return (
        (this.$themeConfig.footer && this.$themeConfig.footer.contact) ||
        []
      )
        .map(({ type, link }) => {
          return {
            iconComponent: this.getIconComponentName(type),
            link,
          }
        })
        .filter(({ iconComponent }) => iconComponent)
    },

    copyright() {
      return (
        (this.$themeConfig.footer && this.$themeConfig.footer.copyright) || []
      )
    },
  },

  methods: {
    getIconComponentName(contactType) {
      switch (contactType) {
        case 'github': return 'GithubIcon'
      }
    },
  },
}
</script>
