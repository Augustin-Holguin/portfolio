var app = new Vue ({
  el: '#app',
  data () {
    return {
      about: true,
      experience: false,
      portfolio: false,
      music: false,
      contact: false,
    }
  },
  methods: {
    showAbout () {
      this.about = true
      this.experience = false
      this.portfolio = false
      this.contact = false
      this.music = false
    },
    showExperience () {
      this.experience = true
      this.portfolio = false
      this.contact = false
      this.about = false
      this.music = false
    },
    showPortfolio () {
      this.portfolio = true
      this.experience = false
      this.contact = false
      this.about = false
      this.music = false
    },
    showMusic () {
      this.music = true
      this.portfolio = false
      this.experience = false
      this.contact = false
      this.about = false
    },
    showContact () {
      this.contact = true
      this.experience = false
      this.portfolio = false
      this.about = false
      this.music = false
    }
  }
})
