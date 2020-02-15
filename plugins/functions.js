import Vue from 'vue'

Vue.mixin({
	data() {
		return {
			offset: 0,
		}
	},
	methods: {
	    slugify(str) {
            str = str.replace(/^\s+|\s+$/g, ''); // trim
            str = str.toLowerCase();

            // remove accents, swap ñ for n, etc
            var from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
            var to   = "aaaaaeeeeeiiiiooooouuuunc------";
            for (var i=0, l=from.length ; i<l ; i++) {
              str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
            }

            str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
              .replace(/\s+/g, '-') // collapse whitespace and replace by -
              .replace(/-+/g, '-'); // collapse dashes

            return str;
        },
		scrollToHash(event){
			this.selectedHash = event.target.dataset.hash;

			if($nuxt.$route.name != 'index'){

				$nuxt.$router.push({path:'/', name:this.selectedHash});
				this.offset = -86;
				setTimeout(() => {
					this.$scrollTo(this.selectedHash, 0, { offset: this.offset});
				}, 300);

				//Collapse menu after item on click
				if(window.innerWidth <= 992) {
					this.$root.$emit('bv::toggle::collapse', 'nav-collapse');
				}
				//

			} else {
				$nuxt.$router.push({path:'/'});
				this.offset = -86;
				setTimeout(() => {
					this.$scrollTo(this.selectedHash, 0, { offset: this.offset});
				}, 500);

				//Collapse menu after item on click
				if(window.innerWidth <= 992) {
					this.$root.$emit('bv::toggle::collapse', 'nav-collapse');
				}
				//
			}
		},
	}
});
