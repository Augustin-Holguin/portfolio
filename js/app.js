var app = new Vue ({
  el: '#app',
  data () {
    return {
      about: true,
      experience: false,
      portfolio: false,
      music: false,
      contact: false,
      // EXPERIENCE
      n: true,
      nMinusOne: false,
      nMinusTwo: false,
      nMinusThree: false,
      nMinusFour: false
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
    },
    //EXPERIENCE
    show2018 () {
      this.n = true
      this.nMinusOne = false
      this.nMinusTwo = false
      this.nMinusFour = false
      this.nMinusThree = false
    },
    show2017 () {
      this.nMinusOne = true
      this.nMinusTwo = false
      this.nMinusFour = false
      this.n = false
      this.nMinusThree = false
    },
    show2016 () {
      this.nMinusTwo = true
      this.nMinusOne = false
      this.nMinusFour = false
      this.n = false
      this.nMinusThree = false
    },
    show2015 () {
      this.nMinusThree = true
      this.nMinusTwo = false
      this.nMinusOne = false
      this.nMinusFour = false
      this.n = false
    },
    show2014 () {
      this.nMinusFour = true
      this.nMinusOne = false
      this.nMinusTwo = false
      this.n = false
      this.nMinusThree = false
    }
  }
})
