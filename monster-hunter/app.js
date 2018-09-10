new Vue({
  el: "#app",
  data: {
    myHealth: 100,
    monsterHealth: 100,
    gameRunning: false,
    results: [],
    isPlayer: true
  },
  methods: {
    reset: function () {
      alert('you are about to start a new game...')
      this.myHealth = 100
      this.monsterHealth = 100
    },
    attack: function () {
      const damage = this.dealDamage(5, 10)
      this.monsterHealth -= damage
      this.monsterDamage()
      this.checkStatus()
      this.results.unshift({
        isPlayer: true,
        content: `You damaged the white walkers ${damage}`
      })
    },
    specialAttack: function () {
      const damage = this.dealDamage(30, 40)
      this.monsterHealth -= damage
      this.monsterDamage()
      this.checkStatus()
      this.results.unshift({
        isPlayer: true,
        content: `WOOOOOO! The white walker just damaged you ${damage}`
      })
    },
    heal: function () {
      if (this.myHealth > 90) {
        alert('you health bar is fine. you dont need to heal')
        return
      } else {
        this.myHealth += 10
      }
      this.results.unshift({
        isPlayer: true,
        content: `The three eye raven just healed you 10 health`
      })
    },
    giveUp: function () {
      alert('are you sure you wanna give up?')
      this.myHealth = 0
      console.log('you lose')
    },
    dealDamage: function (min, max) {
      return Math.max(Math.floor(Math.random() * max), min)
    },
    monsterDamage: function () {
      const damage = this.dealDamage(5, 10)
      this.myHealth -= damage
      this.results.unshift({
        isPlayer: false,
        content: `The monster damaged you ${damage}`
      })
    },
    checkStatus: function () {
      if (this.monsterHealth <= 0) {
        alert('you win!')
        this.monsterHealth = 0
      } else if (this.myHealth <= 0) {
        alert('you lose! boooo')
        this.myHealth = 0
      }
    }
  },
  computed: {
    checker: function () {
      this.myHealth >= 100 ? '' : gameRunning = true
    }
  },
  watch: {}
})